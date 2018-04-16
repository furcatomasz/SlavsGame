class Player extends AbstractCharacter {

    public connectionId:string;

    public walkSmoke:BABYLON.ParticleSystem;
    public inventory:Character.Inventory;
    public playerLight:BABYLON.PointLight;
    public isAlive:boolean;

    public skills: Array;
    protected experience: number;
    public lvl: number;
    public freeAttributesPoints: number;
    public freeSkillPoints: number;

    public constructor(game:Game, id, registerMoving:boolean, serverData: Array = []) {
        this.id = id;
        this.game = game;
        this.isAlive = true;
        this.setCharacterStatistics(serverData.statistics);
        this.connectionId = serverData.connectionId;
        this.isControllable = registerMoving;
        //
        this.sfxWalk = new BABYLON.Sound("CharacterWalk", "/assets/sounds/character/walk/1.mp3", game.getScene(), null, {
            loop: true,
            autoplay: false
        });
        this.sfxHit = new BABYLON.Sound("CharacterHit", "/assets/sounds/character/hit.mp3", game.getScene(), null, {
            loop: false,
            autoplay: false
        });

        let mesh = game.factories['character'].createInstance('Warrior', true);
        mesh.skeleton.enableBlending(0.2);
        mesh.alwaysSelectAsActiveMesh = true;

        ///Create box mesh for moving
        this.createBoxForMove(game.getScene());
        this.meshForMove.position = new BABYLON.Vector3(serverData.position.x, serverData.position.y, serverData.position.z);
        mesh.parent = this.meshForMove;
        // Collisions.setCollider(game.getScene(), mesh, null, false);

        this.mesh = mesh;
        this.bloodParticles = new Particles.Blood(game, this.mesh).particleSystem;
        this.walkSmoke = new Particles.WalkSmoke(game, this.mesh).particleSystem;

        mesh.actionManager = new BABYLON.ActionManager(game.getScene());
        this.inventory = new Character.Inventory(game, this);
        this.setItems(serverData.inventory.items);

        if (this.isControllable) {
            this.mesh.isPickable = false;

            let playerLight = new BABYLON.SpotLight("playerLightSpot",
                new BABYLON.Vector3(0, 50, 0),
                new BABYLON.Vector3(0, -1, 0),
                null,
                null,
                game.getScene());
            playerLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
            playerLight.angle = 0.7;
            playerLight.exponent = 50;
            playerLight.intensity = 0.8;
            playerLight.parent = this.mesh;
            this.playerLight = playerLight;

            game.gui = new GUI.Main(game, this);

            let attackArea = BABYLON.MeshBuilder.CreateBox('player_attackArea', {
                width: 3,
                height: 0.1,
                size: 3
            }, game.getScene());
            attackArea.parent = this.mesh;
            attackArea.visibility = 0;
            attackArea.position.z = -2;
            attackArea.isPickable = false;

            this.attackArea = attackArea;
            this.experience = serverData.experience;
            this.lvl = serverData.lvl;
            this.freeAttributesPoints = serverData.freeAttributesPoints;
            this.freeSkillPoints = serverData.freeSkillPoints;
            this.name = serverData.name;
            this.setCharacterSkills(serverData.skills);

            this.refreshCameraPosition();
        }

        super(null, game);
    }

    public initGodRay() {
        let scene = this.game.getScene();
        let fakeGodRay = BABYLON.Mesh.CreateCylinder("godRay", 25, 4, 10, 64, 1, scene);
        fakeGodRay.position = new BABYLON.Vector3(0, 13, 0);
        fakeGodRay.scaling = new BABYLON.Vector3(0, 1, 0);
        fakeGodRay.parent = this.mesh;
        fakeGodRay.material = new BABYLON.StandardMaterial("fakeGodRaymat", scene);
        fakeGodRay.material.emissiveFresnelParameters = new BABYLON.FresnelParameters();
        fakeGodRay.material.emissiveFresnelParameters.leftColor = BABYLON.Color3.Black();
        fakeGodRay.material.emissiveFresnelParameters.rightColor = BABYLON.Color3.White();
        fakeGodRay.material.emissiveFresnelParameters.bias = 0;
        fakeGodRay.material.emissiveFresnelParameters.power = 2;
        fakeGodRay.material.emissiveColor = new BABYLON.Color3(0.9, 0.9, 0.3);
        fakeGodRay.material.useEmissiveAsIllumination = true;
        fakeGodRay.material.alpha = 0.15;
        fakeGodRay.material.alphaMode = 1;

        BABYLON.Animation.CreateAndStartAnimation("fadesphere", fakeGodRay, 'scaling.z', 30, 70, 0, 1,0);
        BABYLON.Animation.CreateAndStartAnimation("fadesphere", fakeGodRay, 'scaling.x', 30, 70, 0, 1,0, null, function() {
            setTimeout(function() {
                BABYLON.Animation.CreateAndStartAnimation("fadesphere", fakeGodRay, 'scaling.z', 30, 70, 1, 0,0);
                BABYLON.Animation.CreateAndStartAnimation("fadesphere", fakeGodRay, 'scaling.x', 30, 70, 1, 0,0, null, function() {
                    fakeGodRay.dispose();
                } );
            }, 2000);
        } );

        return this;
    }

    public setCharacterStatistics(attributes) {
        this.statistics = attributes;
    };

    public setCharacterSkills(skills) {
        let skillManager = new Character.Skills.SkillsManager(this.game);
        let self = this;
        this.skills = [];

        if(skills) {
            skills.forEach(function(skill, key) {
                let playerSkill = skillManager.getSkill(skill.type);
                playerSkill.damage = (skill.damage) ? skill.damage : 0;
                playerSkill.stock = (skill.stock) ? skill.stock : 0;
                playerSkill.cooldown = (skill.cooldown) ? skill.cooldown : 0;
                self.skills[playerSkill.getType()] = playerSkill;

            });
        }

        return this;
    };

    public removeFromWorld() {
        this.mesh.dispose();
    }


    public refreshCameraPosition() {
        game.getScene().activeCamera.target = this.meshForMove.position;
    }

    /**
     *
     * @param inventoryItems
     */
    public setItems(inventoryItems: Array) {
        if(inventoryItems) {
            let self = this;
            let game = this.game;
            let itemManager = new Items.ItemManager(game);
            if (this.inventory.items.length) {
                let itemsProcessed = 0;
                this.inventory.items.forEach(function (item) {
                    item.mesh.dispose();
                    itemsProcessed++;
                    if (itemsProcessed === self.inventory.items.length) {
                        itemManager.initItemsFromDatabaseOnCharacter(inventoryItems, self.inventory);
                    }
                });
            } else {
                itemManager.initItemsFromDatabaseOnCharacter(inventoryItems, self.inventory);
            }
        }
    }

    /**
     * @returns {Player}
     */
    public removeItems() {
        this.inventory.items.forEach(function(item) {
            item.mesh.dispose();
        });

        this.inventory.items = [];

        return this;
    }

    public refreshExperienceInGui() {
        this.game.gui.playerBottomPanel.expBar.value = this.getExperience(true);
    }

    /**
     *
     * @param percentage
     * @returns {number}
     */
    public getExperience(percentage: boolean = false) {
        let lvls = this.game.modules.character.getLvls();
        let requiredToActualLvl = lvls[this.lvl];
        let requiredToLvl = lvls[this.lvl + 1];

        if (this.experience < 1) {
            return 0;
        }

        let percentageValue = (this.lvl) ?
            (((this.experience-requiredToActualLvl ) * 100) / (requiredToLvl-requiredToActualLvl)) :
            (((this.experience) * 100) / (requiredToLvl));

        return (percentage) ? percentageValue : this.experience;
    }

    public addExperience(experince: number) {
        this.experience += experince;

        this.refreshExperienceInGui();
    }

    public setNewLvl() {
        this.lvl += 1;
        this.game.gui.playerLogsPanel.addText('New lvl '+this.lvl+'', 'red');
        this.game.gui.playerLogsPanel.addText('You got 5 attribute points', 'red');
        this.game.gui.playerLogsPanel.addText('You got 1 skill point '+this.lvl+'', 'red');

        this.refreshExperienceInGui();

        this.initGodRay();
    }

    public runPlayerToPosition(targetPointVector3) {
        let self = this;
        let mesh = this.meshForMove;
        mesh.lookAt(targetPointVector3);
        self.game.player.refreshCameraPosition();

        if (this.dynamicFunction !== undefined) {
            self.game.getScene().unregisterBeforeRender(this.dynamicFunction);
        }

        this.dynamicFunction = function() {
            if (mesh.intersectsPoint(targetPointVector3)) {
                self.game.getScene().unregisterBeforeRender(self.dynamicFunction);
                if (self.isControllable) {
                    //game.controller.targetPoint = null;
                    self.game.controller.flag.visibility = 0;
                }

                if (self.animation) {
                    self.animation.stop();
                }

            } else {
                let rotation = mesh.rotation;
                if (mesh.rotationQuaternion) {
                    rotation = mesh.rotationQuaternion.toEulerAngles();
                }
                rotation.negate();
                let forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / self.getWalkSpeed(), 0, -parseFloat(Math.cos(rotation.y)) / self.getWalkSpeed());
                mesh.moveWithCollisions(forwards);
                mesh.position.y = 0;

                self.runAnimationWalk();
            }
        };

        this.game.getScene().registerBeforeRender(this.dynamicFunction);

    }

    protected onWalkStart() {
        this.walkSmoke.start();
    }

    protected onWalkEnd() {
        this.walkSmoke.stop();
    }

}