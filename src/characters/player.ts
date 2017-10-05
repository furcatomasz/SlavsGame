/// <reference path="AbstractCharacter.ts"/>
/// <reference path="../game.ts"/>

class Player extends AbstractCharacter {

    public walkSmoke:BABYLON.ParticleSystem;
    public inventory:Character.Inventory;
    public playerLight:BABYLON.PointLight;

    protected experience: number;
    protected lvl: number;

    public constructor(game:Game, id, name, registerMoving:boolean, serverData: Array = []) {
        let self = this;
        this.id = id;
        this.name = name;

        this.statistics = new Attributes.CharacterStatistics(100, 100, 100, 15, 10, 125, 50, 100).setPlayer(this);
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
        mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);
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
            this.lvl = 1;
        }

        this.walkSmoke = new Particles.WalkSmoke(game, this.mesh).particleSystem;

        super(name, game);
        this.registerFunctionAfterRender();
    }

    /**
     * Moving events
     */
    protected registerMoving() {
        let walkSpeed = AbstractCharacter.WALK_SPEED * (this.statistics.getWalkSpeed() / 100);
        let game = this.game;
        let mesh = this.mesh;

        if(!this.attackAnimation) {
            if (game.controller.left) {
                mesh.rotate(BABYLON.Axis.Y, -AbstractCharacter.ROTATION_SPEED, BABYLON.Space.LOCAL);
                this.emitPosition();
            }

            if (game.controller.right) {
                mesh.rotate(BABYLON.Axis.Y, AbstractCharacter.ROTATION_SPEED, BABYLON.Space.LOCAL);
                this.emitPosition();
            }

            if (game.controller.forward) {
                mesh.translate(BABYLON.Axis.Z, -walkSpeed, BABYLON.Space.LOCAL);
                this.runAnimationWalk(true);

                return;
            }
            if (game.controller.back) {
                mesh.translate(BABYLON.Axis.Z, walkSpeed, BABYLON.Space.LOCAL);
                this.runAnimationWalk(true);

                return;
            }

            ///stop move and start attack animation
            if (this.animation && !this.attackAnimation) {
                this.animation.stop();
            }
        }
    }

    public removeFromWorld() {
        this.mesh.dispose();
    }


    protected registerFunctionAfterRender() {
        let self = this;
        this.game.getScene().actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (event) {
            if (event.sourceEvent.key == 1) {
                self.game.controller.attackPoint = null;
                self.runAnimationHit(AbstractCharacter.ANIMATION_SKILL_01);
            }
        }));

        if (self.isControllable) {
            this.game.getScene().registerAfterRender(function () {
                self.registerMoving();
                if (self.game.controller.forward && self.game.getScene()) {
                    self.refreshCameraPosition();
                }
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
        let requiredToLvl = lvls[this.lvl];

        if(this.experience < 1) {
            return 0;
        }

        return (percentage) ?
            ((this.experience * 100) / requiredToLvl) :
            this.experience;
    }

    public addExperience(experince: number) {
        this.experience += experince;

        this.refreshExperienceInGui();
    }

    protected onHitStart() {
        setTimeout(function () {
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