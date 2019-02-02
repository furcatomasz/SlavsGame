class Player extends AbstractCharacter {

    public connectionId: string;

    public inventory: Character.Inventory;
    public playerLight: BABYLON.SpotLight;
    public isAlive: boolean = true;

    public skills: Array<Character.Skills.AbstractSkill>;
    public statisticsAll: Array<any>;
    public attributes: Array<any>;
    public experience: number;
    public experiencePercentages: number;
    public gold: number;
    public keys: number;
    public potions: number;
    public lvl: number;
    public freeAttributesPoints: number;
    public freeSkillPoints: number;
    public monstersToAttack: Array<Boolean> = [];
    public attackActions: AttackActions;

    public constructor(game: Game, registerMoving: boolean, serverData: any) {
        super(serverData.activePlayer.name, game);

        this.id = serverData.activePlayer.id;
        this.setCharacterStatistics(serverData.activePlayer);
        this.connectionId = serverData.connectionId;
        this.isControllable = registerMoving;

        this.initSfx();
        this.createBoxForMove(
            new BABYLON.Vector3(serverData.position.x, serverData.position.y, serverData.position.z)
        );
        this.createMesh();

        this.bloodParticles = new Particles.Blood(game, this.mesh).particleSystem;
        this.walkSmoke = WalkSmoke.getParticles(game.getScene(), 25, this.mesh);

        this.inventory = new Character.Inventory(game, this);
        this.inventory.setItems(serverData.activePlayer.items);

        if (this.isControllable) {
            this.mesh.isPickable = false;
            new GUI.Main(game);
            this.initServerData(serverData);
            this.refreshCameraPosition();
            this.refreshHpInGui();
            this.refreshExperienceInGui();
            this.refreshEnergyInGui();
            this.createPlayerLight();
            this.attackActions = new AttackActions(game);
        }

        this.setCharacterSkills(serverData.skills);
        this.initPatricleSystemDamage();
        this.runAnimationStand();
    }

    private initServerData(serverData) {
        this.experience = serverData.activePlayer.experience;
        this.gold = serverData.activePlayer.gold;
        this.keys = serverData.activePlayer.specialItems.length;
        this.experiencePercentages = serverData.activePlayer.experiencePercentages;
        this.lvl = serverData.activePlayer.lvl;
        this.freeAttributesPoints = serverData.activePlayer.freeAttributesPoints;
        this.freeSkillPoints = serverData.activePlayer.freeSkillPoints;
        this.name = serverData.activePlayer.name;
    }

    private createPlayerLight() {
        const game = this.game;
        const playerLight = new BABYLON.SpotLight("playerLightSpot",
            new BABYLON.Vector3(0, 45, 0),
            new BABYLON.Vector3(0, -1, 0),
            null,
            null,
            game.getScene());
        playerLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
        playerLight.angle = 0.7;
        playerLight.exponent = 70;
        playerLight.intensity = 0.8;
        playerLight.parent = this.mesh;
        playerLight.autoExtends = false;
        this.playerLight = playerLight;
    }

    private createMesh() {
        const game = this.game;

        let mesh = game.factories['character'].createClone('Warrior', true);
        mesh.skeleton.enableBlending(0.2);
        mesh.alwaysSelectAsActiveMesh = true;
        mesh.parent = this.meshForMove;
        mesh.actionManager = new BABYLON.ActionManager(game.getScene());

        this.mesh = mesh;

        mesh.skeleton.createAnimationRange('loopStrongAttack', 340, 350);
        mesh.skeleton.createAnimationRange('loopBlock', 70, 80);

        return mesh;
    }

    private initSfx() {
        const game = this.game;

        this.sfxWalk = new BABYLON.Sound("CharacterWalk", "assets/sounds/character/walk/1.mp3", game.getScene(), null, {
            loop: true,
            autoplay: false
        });
        this.sfxHit = new BABYLON.Sound("CharacterHit", "assets/sounds/character/hit.mp3", game.getScene(), null, {
            loop: false,
            autoplay: false
        });
    }

    public initGodRay() {
        GodRay.createGodRay(this.game, this.meshForMove);

        return this;
    }

    public setCharacterStatistics(playerServerData) {
        this.statistics = playerServerData.statistics;
        this.statisticsAll = playerServerData.allStatistics;
        this.attributes = playerServerData.attributes;
    }

    public setCharacterSkills(skills) {
        skills = [
            {
                type: 1,
            },
            {
                type: 2,
            },
            {
                type: 3,
            },
            {
                type: 4,
            }];
        let self = this;
        this.skills = [];

        if (skills) {
            skills.forEach(skill => {
                let playerSkill = Character.Skills.SkillsManager.getSkill(skill.type, self);
                self.skills[playerSkill.getType()] = playerSkill;
            });
        }

        return this;
    }

    public isAnySkillIsInUse(): boolean {
        let isInUse = false;
        this.skills.forEach((skill) => {
            if (skill.isInUse === true) {
                isInUse = true;
                return;
            }
        });

        if (isInUse === false && this.isAttack) {
            isInUse = true;
        }

        if (this.isDeath) {
            isInUse = true;
        }

        return isInUse;
    }

    public removeFromWorld() {
        this.mesh.dispose();
    }


    public refreshCameraPosition() {
        const camera = this.game.getScene().getCameraByName('gameCamera');
        camera.position = this.meshForMove.position.clone();
        camera.position.y = 18;
        camera.position.z -= 12;
        camera.position.x -= 12;
    }

    public refreshExperienceInGui() {
        this.game.gui.playerBottomPanel.expBar.width = this.experiencePercentages / 100;
        this.game.gui.playerBottomPanel.expBarText.text = this.experiencePercentages + '%';
    }

    public refreshEnergyInGui() {
        if (this.isControllable) {
            let percentage = Math.round(this.statistics.energy * 100 / this.statistics.energyMax);
            this.game.gui.playerBottomPanel.energyBar.width = percentage / 100;
            this.game.gui.playerBottomPanel.energyBarText.text = this.statistics.energy + ' / ' + this.statistics.energyMax;
        }
    }

    public refreshHpInGui() {
        let percentage = Math.round(this.statistics.hp * 100 / this.statistics.hpMax);
        this.game.gui.playerBottomPanel.hpBar.width = percentage / 100;
        this.game.gui.playerBottomPanel.hpBarText.text = this.statistics.hp + ' / ' + this.statistics.hpMax;
    }

    public addExperience(experince: number, experiencePercentages: number) {
        this.experience += experince;
        this.experiencePercentages = experiencePercentages;

        this.refreshExperienceInGui();
    }

    public setNewLvl() {
        this.game.gui.playerLogsQuests.addText('New lvl ' + this.lvl + '', 'red');
        this.game.gui.playerLogsQuests.addText('You got 5 attribute points', 'red');
        this.game.gui.playerLogsQuests.addText('You got 1 skill point ' + this.lvl + '', 'red');

        this.refreshExperienceInGui();

        this.initGodRay();
    }

    public runPlayerToPosition(targetPointVector3) {
        if(this.isAnySkillIsInUse()) {
            return;
        }

        let self = this;
        let mesh = this.meshForMove;
        mesh.lookAt(targetPointVector3, Math.PI);
        this.unregisterMoveWithCollision(false);

        this.dynamicFunction = function () {
            if (mesh.intersectsPoint(targetPointVector3)) {
                self.game.getScene().unregisterBeforeRender(self.dynamicFunction);

                if (self.animation) {
                    self.animation.stop();
                }
            } else {
                let rotation = mesh.rotation;
                let forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / self.getWalkSpeed(), 0, -parseFloat(Math.cos(rotation.y)) / self.getWalkSpeed());
                mesh.moveWithCollisions(forwards);

                self.game.player.refreshCameraPosition();
                self.runAnimationWalk();
            }
        };

        this.game.getScene().registerBeforeRender(this.dynamicFunction);
    }

    public unregisterMoveWithCollision(emitPosition: boolean) {
        if (this.dynamicFunction !== undefined) {
            this.game.getScene().unregisterBeforeRender(this.dynamicFunction);
        }

        if (emitPosition) {
            this.game.client.socket.emit('setTargetPoint', {
                position: this.meshForMove.position
            });
        }
    }

    protected onWalkStart() {
        this.walkSmoke.start();
    }

    protected onWalkEnd() {
        this.walkSmoke.stop();
    }

}
