class Player extends AbstractCharacter {

    public connectionId:string;

    public walkSmoke:BABYLON.ParticleSystem;
    public inventory:Character.Inventory;
    public playerLight:BABYLON.SpotLight;
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

            new GUI.Main(game);

            this.experience = serverData.activePlayer.experience;
            this.gold = serverData.activePlayer.gold;
            this.keys = serverData.activePlayer.specialItems.length;
            this.experiencePercentages = serverData.activePlayer.experiencePercentages;
            this.lvl = serverData.activePlayer.lvl;
            this.freeAttributesPoints = serverData.activePlayer.freeAttributesPoints;
            this.freeSkillPoints = serverData.activePlayer.freeSkillPoints;
            this.name = serverData.activePlayer.name;
            // this.setCharacterSkills(serverData.skills);
            this.setCharacterSkills([
                {
                    type: 1,
                    damage: 1,
                    cooldown: 1,
                    stock: 1
                },
                {
                    type: 2,
                    damage: 1,
                    cooldown: 1,
                    stock: 1
                },
                {
                    type: 3,
                    damage: 1,
                    cooldown: 1,
                    stock: 1
                },
                {
                    type: 4,
                    damage: 1,
                    cooldown: 1,
                    stock: 1
                }
            ]);

            this.refreshCameraPosition();
            this.refreshHpInGui();
            this.refreshExperienceInGui();
            this.refreshEnergyInGui();

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
            this.playerLight = playerLight;
        }

        super(serverData.activePlayer.name, game);

        this.runAnimationStand();
    }

    public initGodRay() {
        let engine = this.game.engine;
        let scene = this.game.getScene();
        let camera = this.game.getScene().getCameraByName('gameCamera');

        let fireMaterial = new BABYLON.StandardMaterial("godrayMaterial", scene);
        let fireTexture = new BABYLON.Texture("assets/Smoke3.png", scene);
        fireTexture.hasAlpha = true;
        fireMaterial.alpha = 0.1;
        fireMaterial.emissiveTexture = fireTexture;
        fireMaterial.diffuseTexture = fireTexture;
        fireMaterial.opacityTexture = fireTexture;

        fireMaterial.specularPower = 1;
        fireMaterial.backFaceCulling = false;

        let box = BABYLON.Mesh.CreatePlane("godRayPlane", 16, scene, true);
        box.visibility = 1;
        box.rotation = new BABYLON.Vector3(-Math.PI/2, 0, 0);
        box.material = fireMaterial;

        let godrays = new BABYLON.VolumetricLightScatteringPostProcess('godrays', 1, camera, box, 128, BABYLON.Texture.BILINEAR_SAMPLINGMODE, engine, false);
        godrays.useCustomMeshPosition = true;
        godrays.setCustomMeshPosition(new BABYLON.Vector3(0, 15.0, 0));

        godrays.invert = false;
        godrays.exposure = 0.8;
        godrays.decay = 1;
        godrays.weight = 0;
        godrays.density = 0.5;

        let startHiding = false;
        let timeoutFunction;
        const showGodRay = () => {
            box.position = this.meshForMove.position.clone();
            godrays.setCustomMeshPosition(this.meshForMove.position.clone());
            godrays.customMeshPosition.y = 15;
            box.rotate(new BABYLON.Vector3(0,5,0), 0.02, BABYLON.Space.WORLD);

            if(godrays.weight >= 0.3 && !timeoutFunction) {
                timeoutFunction =setTimeout(() => {
                    startHiding = true;
                }, 4000);
            }

            if(startHiding) {
                godrays.weight -= 0.01;
                if(godrays.weight <= 0) {
                    godrays.dispose(camera);
                    box.dispose();
                    scene.unregisterBeforeRender(showGodRay);
                }
            } else if(godrays.weight <= 0.3) {
                godrays.weight += 0.02;
            }
        };
        scene.registerBeforeRender(showGodRay);

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
        const camera = this.game.getScene().getCameraByName('gameCamera');
        camera.position = this.meshForMove.position.clone();
        camera.position.y = 30;
        camera.position.z -= 22;
        camera.position.x -= 22;
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
        this.game.gui.playerBottomPanel.expBar.width = this.experiencePercentages/100;
        this.game.gui.playerBottomPanel.expBarText.text = this.experiencePercentages+'%';
    }

    public refreshEnergyInGui() {
        let percentage = Math.round(this.statistics.energy * 100 / this.statistics.energyMax);
        this.game.gui.playerBottomPanel.energyBar.width = percentage/100;
        this.game.gui.playerBottomPanel.energyBarText.text = this.statistics.energy+' / '+ this.statistics.energyMax;
    }

    public refreshHpInGui() {
        let percentage = Math.round(this.statistics.hp * 100 / this.statistics.hpMax);
        this.game.gui.playerBottomPanel.hpBar.width = percentage/100;
        this.game.gui.playerBottomPanel.hpBarText.text = this.statistics.hp+' / '+ this.statistics.hpMax;

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
