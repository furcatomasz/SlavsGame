/// <reference path="AbstractCharacter.ts"/>
/// <reference path="../game.ts"/>

class Player extends AbstractCharacter {

    public walkSmoke:BABYLON.ParticleSystem;
    public inventory:Character.Inventory;
    public playerLight:BABYLON.PointLight;

    public skills: Array;
    protected experience: number;
    public lvl: number;
    public freeAttributesPoints: number;
    public freeSkillPoints: number;

    public constructor(game:Game, id, name, registerMoving:boolean, serverData: Array = []) {
        let self = this;
        this.id = id;
        this.name = name;

        this.setCharacterStatistics(serverData.attributes);
        this.isControllable = registerMoving;

        this.sfxWalk = new BABYLON.Sound("CharacterWalk", "/assets/Characters/Warrior/walk.wav", game.getScene(), null, {
            loop: true,
            autoplay: false
        });
        this.sfxHit = new BABYLON.Sound("CharacterHit", "/assets/Characters/Warrior/walk.wav", game.getScene(), null, {
            loop: false,
            autoplay: false
        });

        let mesh = game.factories['character'].createInstance('Warrior', true);

        mesh.skeleton.bones.forEach(function(bone) {
            bone.animations.forEach(function(animation) {
                animation.enableBlending = true;
                animation.blendingSpeed = 0.2;
            });
        });
        mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);
        mesh.alwaysSelectAsActiveMesh = true;
        // Collisions.setCollider(game.getScene(), mesh, null, false);

        this.mesh = mesh;
        this.game = game;
        this.bloodParticles = new Particles.Blood(game, this.mesh).particleSystem;

        mesh.actionManager = new BABYLON.ActionManager(game.getScene());
        this.inventory = new Character.Inventory(game, this);

        if (this.isControllable) {
            this.mesh.isPickable = false;

            //let playerLight = new BABYLON.PointLight("playerLightSpot", new BABYLON.Vector3(0, 5, 0), game.getScene());
            var playerLight = new BABYLON.SpotLight("playerLightSpot",
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
        }

        this.walkSmoke = new Particles.WalkSmoke(game, this.mesh).particleSystem;

        super(name, game);
        this.registerFunctionAfterRender();
    }

    public setCharacterStatistics(attributes) {
        if(!attributes) {
            attributes = {
                health: 0,
                attackSpeed: 0,
                defence: 0,
                damage: 0,
                blockChance: 0,
            }
        }

        this.statistics = new Attributes.CharacterStatistics(
            100 + attributes.health * 5,
            100 + attributes.health * 5,
            100 + attributes.attackSpeed,
            15 + attributes.damage * 5,
            10 + attributes.defence * 5,
            125,
            50 + attributes.blockChance
        ).setPlayer(this);
    };

    public setCharacterSkills(skills) {
        let skillManager = new Character.Skills.SkillsManager(this.game);
        let self = this;
        this.skills = [];

        if(skills) {
            skills.forEach(function(skill, key) {
                let playerSkill = skillManager.getSkill(skill.skillType);
                playerSkill.damage = (skill.damage) ? skill.damage : 0;
                playerSkill.stock = (skill.stock) ? skill.stock : 0;
                playerSkill.cooldown = (skill.cooldown) ? skill.cooldown : 0;
                self.skills[playerSkill.getType()] = playerSkill;

            });
        }

        return this;
    };

    /**
     * Moving events
     */
    protected registerMoving() {
        let walkSpeed = this.getWalkSpeed();
        let mesh = this.mesh;

        if(self.game.controller.forward && !this.attackAnimation) {
            let rotation = mesh.rotation;
            if (mesh.rotationQuaternion) {
                rotation = mesh.rotationQuaternion.toEulerAngles();
            }
            rotation.negate();
            let forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / walkSpeed, 0, -parseFloat(Math.cos(rotation.y)) / walkSpeed);
            mesh.moveWithCollisions(forwards);
            mesh.position.y = 0;

            this.runAnimationWalk(true);
            this.refreshCameraPosition();

        } else if(this.animation && !this.attackAnimation) {
            this.animation.stop();
        }
    }

    public getWalkSpeed() {
        return AbstractCharacter.WALK_SPEED * (this.statistics.getWalkSpeed() / 100);
    };

    public removeFromWorld() {
        this.mesh.dispose();
    }


    protected registerFunctionAfterRender() {
        let self = this;
        if (self.isControllable) {
            this.game.getScene().registerAfterRender(function () {
                self.registerMoving();
            });
        }
    }

    public refreshCameraPosition() {
        this.game.getScene().activeCamera.position = this.mesh.position;
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
        let lvls = Character.Lvls.getLvls();
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
    }

    protected onHitStart() {
        let self = this;
        setTimeout(function () {
            self.inventory.weapon.sfxHit.play();

            document.dispatchEvent(this.game.events.monsterToAttack);
        }, 300);
    };

    protected onHitEnd() {
        this.attackHit = false;
    };

    protected onWalkStart() {
        this.walkSmoke.start();
    }

    protected onWalkEnd() {
        this.walkSmoke.stop();
    }

}