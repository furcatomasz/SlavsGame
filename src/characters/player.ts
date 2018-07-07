class Player extends AbstractCharacter {

    public connectionId:string;

    public walkSmoke:BABYLON.ParticleSystem;
    public inventory:Character.Inventory;
    public playerLight:BABYLON.PointLight;
    public isAlive:boolean;

    public skills: Array<any>;
    public statisticsAll: Array<any>;
    public experience: number;
    public experiencePercentages: number;
    public gold: number;
    public keys: number;
    public lvl: number;
    public freeAttributesPoints: number;
    public freeSkillPoints: number;

    public constructor(game:Game, registerMoving:boolean, serverData) {
        this.id = serverData.activePlayer.id;
        this.game = game;
        this.isAlive = true;
        this.setCharacterStatistics(serverData.activePlayer);
        this.connectionId = serverData.connectionId;
        this.isControllable = registerMoving;
        //
        this.sfxWalk = new BABYLON.Sound("CharacterWalk", "assets/sounds/character/walk/1.mp3", game.getScene(), null, {
            loop: true,
            autoplay: false
        });
        this.sfxHit = new BABYLON.Sound("CharacterHit", "assets/sounds/character/hit.mp3", game.getScene(), null, {
            loop: false,
            autoplay: false
        });

        let mesh = game.factories['character'].createInstance('Warrior', true);
        mesh.skeleton.enableBlending(0.2);
        mesh.alwaysSelectAsActiveMesh = true;
        mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);

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
        this.setItems(serverData.activePlayer.items);

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

            this.experience = serverData.activePlayer.experience;
            this.gold = serverData.activePlayer.gold;
            this.keys = serverData.activePlayer.specialItems.length;
            this.experiencePercentages = serverData.activePlayer.experiencePercentages;
            this.lvl = serverData.activePlayer.lvl;
            this.freeAttributesPoints = serverData.activePlayer.freeAttributesPoints;
            this.freeSkillPoints = serverData.activePlayer.freeSkillPoints;
            this.name = serverData.activePlayer.name;
            // this.setCharacterSkills(serverData.skills);

            this.refreshCameraPosition();
        }

        super(serverData.activePlayer.name, game);
    }

    public initGodRay() {
        let engine = this.game.engine;
        let scene = this.game.getScene();
        let camera = this.game.getScene().activeCamera;

        var fireMaterial = new BABYLON.StandardMaterial("fontainSculptur2", scene);
        var fireTexture = new BABYLON.Texture("assets/flare.png", scene);
        fireTexture.hasAlpha = true;
        fireMaterial.alpha = 0.1;
        fireMaterial.emissiveTexture = fireTexture;
        fireMaterial.diffuseTexture = fireTexture;
        fireMaterial.opacityTexture = fireTexture;

        fireMaterial.specularPower = 1;
        fireMaterial.backFaceCulling = false;

        var box = BABYLON.Mesh.CreatePlane("godRayPlane", 12, scene, true);
        box.visibility = 1;
        box.renderingGroupId = 2;
        box.parent = this.mesh;
        // box.material = new BABYLON.StandardMaterial("bmat", scene);
        // box.material.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
        box.position = new BABYLON.Vector3(0, 0, 0);
        box.scaling = new BABYLON.Vector3(0, 0, 0);
        box.rotation = new BABYLON.Vector3(-Math.PI/2, 0, 0);
        // box.parent = this.mesh;
        box.material = fireMaterial;

        var godrays = new BABYLON.VolumetricLightScatteringPostProcess('godrays', 1, camera, box, 100, BABYLON.Texture.BILINEAR_SAMPLINGMODE, engine, false);
        godrays.useCustomMeshPosition = true;
        godrays.setCustomMeshPosition(new BABYLON.Vector3(0, -5.0, 0));
        godrays.invert = true;
        godrays.exposure = 0.8;
        godrays.decay = 1;
        godrays.weight = 0.3;
        godrays.density = 0.5;
        BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'scaling.z', 60, 30, 0, 1,0, null);
        BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'scaling.x', 60, 30, 0, 1,0, null);
            BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'scaling.y', 60, 30, 0, 1,0, null, function() {
            // godrays.invert = false;
            setTimeout(function() {
                BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'scaling.z', 60, 10, 1, 0,0, null);
                BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'scaling.x', 60, 10, 1, 0,0, null);
                BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'scaling.y', 60, 10, 1, 0,0, null, function() {
                    godrays.dispose(camera);
                    box.dispose();
                } );
            }, 2500);
        } );

        return this;
    }

    public setCharacterStatistics(playerServerData) {
        this.statistics = playerServerData.statistics;
        this.statisticsAll = playerServerData.allStatistics;
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
        this.game.getScene().activeCamera.position = this.meshForMove.position.clone();
        this.game.getScene().activeCamera.position.y = 30;
        this.game.getScene().activeCamera.position.z -= 22;
        this.game.getScene().activeCamera.position.x -= 22;
    }

    /**
     *
     * @param inventoryItems
     */
    public setItems(inventoryItems: Array<any>) {
        if (inventoryItems) {
            let self = this;
            let game = this.game;
            let itemManager = new Items.ItemManager(game);

            new Promise(function (resolve) {
                self.inventory.deleteSashAndHair();
                self.inventory.items.forEach(function (item) {
                    item.mesh.dispose();
                });
                setTimeout(function () {
                    resolve();
                });
            }).then(function () {
                self.inventory.clearItems();

                new Promise(function (resolve) {

                    itemManager.initItemsFromDatabaseOnCharacter(inventoryItems, self.inventory);
                    setTimeout(function () {
                        resolve();
                    });
                }).then(function () {
                    if (self.isControllable && game.gui.inventory.opened) {
                        game.gui.inventory.refreshPopup();
                    }
                });
            });
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
        this.game.gui.playerBottomPanel.expBar.value = this.experiencePercentages;
    }

    public addExperience(experince: number, experiencePercentages: number) {
        this.experience += experince;
        this.experiencePercentages = experiencePercentages;

        this.refreshExperienceInGui();
    }

    public setNewLvl() {
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

                self.game.player.refreshCameraPosition();
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