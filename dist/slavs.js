var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Events = /** @class */ (function () {
    function Events() {
        this.playerConnected = new Event(Events.PLAYER_CONNECTED);
        this.equipReceived = new Event(Events.EQUIP_RECEIVED);
        this.playerHitStart = new Event(Events.PLAYER_HIT_START);
        this.questsReceived = new Event(Events.QUESTS_RECEIVED);
        this.monsterToAttack = new Event(Events.MONSTER_TO_ATTACK);
        //this.monsterToAttack = [];
    }
    Events.PLAYER_CONNECTED = 'playerConnected';
    Events.EQUIP_RECEIVED = 'equipReceived';
    Events.PLAYER_HIT_START = 'playerHitStart';
    Events.QUESTS_RECEIVED = 'questsReceived';
    Events.MONSTER_TO_ATTACK = 'monsterToAttack';
    return Events;
}());
/// <reference path="../game.ts"/>
var Controller = /** @class */ (function () {
    function Controller(game) {
        this.game = game;
    }
    return Controller;
}());
/// <reference path="Controller.ts"/>
var Keyboard = /** @class */ (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keyboard.prototype.handleKeyUp = function (evt) {
        if (evt.keyCode == 65) {
            this.left = true;
        }
        if (evt.keyCode == 68) {
            this.right = true;
        }
        if (evt.keyCode == 87) {
            this.forward = true;
        }
        if (evt.keyCode == 83) {
            this.back = true;
        }
        if (evt.keyCode == 32) {
            this.game.player.runAnimationHit();
        }
    };
    Keyboard.prototype.handleKeyDown = function (evt) {
        if (evt.keyCode == 65) {
            this.left = false;
        }
        if (evt.keyCode == 68) {
            this.right = false;
        }
        if (evt.keyCode == 87) {
            this.forward = false;
        }
        if (evt.keyCode == 83) {
            this.back = false;
        }
    };
    Keyboard.prototype.registerControls = function (scene) {
        var self = this;
        window.addEventListener("keydown", function (event) {
            self.game.controller.handleKeyUp(event);
        });
        window.addEventListener("keyup", function (event) {
            self.game.controller.handleKeyDown(event);
        });
    };
    return Keyboard;
}(Controller));
var Scene = /** @class */ (function () {
    function Scene() {
    }
    Scene.prototype.setDefaults = function (game, scene) {
        this.game = game;
        this.babylonScene = scene;
        scene.actionManager = new BABYLON.ActionManager(scene);
        var sceneIndex = game.scenes.push(scene);
        game.activeScene = sceneIndex - 1;
        this.assetManager = new BABYLON.AssetsManager(scene);
        this.initFactories(scene);
        if (Game.SHOW_DEBUG) {
            scene.debugLayer.show();
        }
        return this;
    };
    Scene.prototype.executeWhenReady = function (onReady, onPlayerConnected) {
        var scene = this.babylonScene;
        var assetsManager = this.assetManager;
        var game = this.game;
        scene.executeWhenReady(function () {
            // game.client.socket.emit('createPlayer');
            assetsManager.onFinish = function (tasks) {
                if (onReady) {
                    onReady();
                }
                // self.octree = scene.createOrUpdateSelectionOctree();
                game.client.socket.emit('changeScenePre');
            };
            assetsManager.load();
            var listener = function listener() {
                if (onPlayerConnected) {
                    onPlayerConnected();
                }
                game.controller.registerControls(scene);
                game.client.socket.emit('changeScenePost');
                game.client.socket.emit('refreshGateways');
                game.client.socket.emit('refreshQuests');
                game.client.socket.emit('refreshChests');
                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        });
        return this;
    };
    Scene.prototype.setCamera = function (scene) {
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, 0), scene);
        camera.rotation = new BABYLON.Vector3(0.79, 0.79, 0);
        camera.position = new BABYLON.Vector3(0, 35, 0);
        camera.maxZ = 110;
        camera.minZ = 30;
        camera.fov = 0.5;
        camera.fovMode = 0;
        scene.activeCamera = camera;
        return this;
    };
    Scene.prototype.setFog = function (scene) {
        scene.clearColor = new BABYLON.Color3(0, 0, 0);
        scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
        scene.fogColor = new BABYLON.Color3(0.02, 0.05, 0.2);
        scene.fogColor = new BABYLON.Color3(0, 0, 0);
        scene.fogDensity = 1;
        //Only if LINEAR
        scene.fogStart = 70;
        scene.fogEnd = 93;
        // scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
        // scene.fogColor = new BABYLON.Color3(0, 0, 0);
        // scene.fogDensity = 0.01;
        return this;
    };
    Scene.prototype.optimizeScene = function (scene) {
        scene.collisionsEnabled = true;
        scene.fogEnabled = true;
        scene.lensFlaresEnabled = false;
        scene.probesEnabled = false;
        scene.postProcessesEnabled = true;
        scene.spritesEnabled = false;
        scene.audioEnabled = false;
        scene.workerCollisions = false;
        return this;
    };
    Scene.prototype.initFactories = function (scene, assetsManager) {
        var assetsManager = this.assetManager;
        this.game.factories['character'] = new Factories.Characters(this.game, scene, assetsManager).initFactory();
        this.game.factories['skeleton'] = new Factories.Skeletons(this.game, scene, assetsManager).initFactory();
        this.game.factories['skeletonWarrior'] = new Factories.SkeletonWarrior(this.game, scene, assetsManager).initFactory();
        this.game.factories['skeletonBoss'] = new Factories.SkeletonBoss(this.game, scene, assetsManager).initFactory();
        this.game.factories['flag'] = new Factories.Flags(this.game, scene, assetsManager).initFactory();
        this.game.factories['nature_grain'] = new Factories.Nature(this.game, scene, assetsManager).initFactory();
        return this;
    };
    Scene.prototype.defaultPipeline = function (scene) {
        // let self = this;
        // let camera = scene.activeCamera;
        //var defaultPipeline = new BABYLON.DefaultRenderingPipeline("default", true, scene, [scene.activeCamera]);
        //defaultPipeline.bloomEnabled = false;
        //defaultPipeline.fxaaEnabled = true;
        //defaultPipeline.imageProcessingEnabled = false;
        //defaultPipeline.bloomWeight = 0.05;
        // var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        //
        // var panel = new BABYLON.GUI.StackPanel();
        // panel.width = "200px";
        // panel.isVertical = true;
        // panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        // panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
        // advancedTexture.addControl(panel)
        //
        // var addCheckbox = function(text, func, initialValue) {
        //     var checkbox = new BABYLON.GUI.Checkbox();
        //     checkbox.width = "20px";
        //     checkbox.height = "20px";
        //     checkbox.isChecked = initialValue;
        //     checkbox.color = "green";
        //     checkbox.onIsCheckedChangedObservable.add(function(value) {
        //         func(value);
        //     });
        //     var header = BABYLON.GUI.Control.AddHeader(checkbox, text, "180px", { isHorizontal: true, controlFirst: true});
        //     header.height = "30px";
        //     header.color = "white";
        //     header.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        //
        //     panel.addControl(header);
        // }
        //     let postProcessFxaa = null;
        //     let kernel = 4;
        //     let postProcessBloom1 = null;
        //     let postProcessBloom2 = null;
        //     addCheckbox("fxaa", function(value) {
        //         if(value) {
        //             postProcess = new BABYLON.FxaaPostProcess("fxaa", 2.0, camera);
        //         } else {
        //             scene.activeCamera.detachPostProcess(postProcess);
        //         }
        //     }, false );
        //
        return this;
    };
    Scene.TYPE = 0;
    return Scene;
}());
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>
var Simple = /** @class */ (function (_super) {
    __extends(Simple, _super);
    function Simple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Simple.prototype.initScene = function (game) {
        var self = this;
        game.sceneManager = this;
        BABYLON.SceneLoader.Load("assets/scenes/map01/", "map01.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene);
            //scene.debugLayer.show({
            //    initialTab: 2
            //});
            scene.actionManager = new BABYLON.ActionManager(scene);
            var assetsManager = new BABYLON.AssetsManager(scene);
            var sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;
            scene.executeWhenReady(function () {
                self.environment = new Environment(game, scene);
                self.initFactories(scene, assetsManager);
                game.client.socket.emit('createPlayer');
                assetsManager.onFinish = function (tasks) {
                    var npc = new NPC.Warrior(game);
                    var grain = game.factories['nature_grain'].createInstance('Grain', true);
                    grain.material.freeze();
                    grain.getBoundingInfo().isLocked = true;
                    grain.position = new BABYLON.Vector3(66, 0, -105);
                    grain.scaling = new BABYLON.Vector3(1.3, 1.3, 1.3);
                    //grain.skeleton.beginAnimation('ArmatureAction', true);
                    var grainGenerator = new Particles.GrainGenerator().generate(grain, 1000, 122, 15);
                    //self.octree = scene.createOrUpdateSelectionOctree();
                    game.client.socket.emit('changeScenePre', {
                        sceneType: Simple.TYPE
                    });
                };
                assetsManager.load();
                var listener = function listener() {
                    game.controller.registerControls(scene);
                    game.client.socket.emit('getQuests');
                    game.client.showEnemies();
                    //self.defaultPipeline(scene);
                    game.client.socket.emit('changeScenePost', {
                        sceneType: Simple.TYPE
                    });
                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            });
        });
    };
    Simple.prototype.getType = function () {
        return Simple.TYPE;
    };
    Simple.TYPE = 0;
    return Simple;
}(Scene));
/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../game.ts"/>
var AbstractCharacter = /** @class */ (function () {
    function AbstractCharacter(name, game) {
        this.name = name;
        this.game = game;
        this.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
        var plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 4, height: 8 }, game.getScene());
        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);
        plane.isPickable = false;
        plane.parent = this.mesh;
        plane.position.y = 2;
        plane.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
        this.meshCharacterTexture = plane;
        this.meshAdvancedTexture = advancedTexture;
    }
    AbstractCharacter.prototype.createBoxForMove = function (scene) {
        this.meshForMove = BABYLON.Mesh.CreateBox(this.name + '_moveBox', 3, scene, false);
        this.meshForMove.checkCollisions = true;
        this.meshForMove.visibility = 0;
        return this;
    };
    AbstractCharacter.prototype.runAnimationHit = function (animation, callbackStart, callbackEnd, loop) {
        if (callbackStart === void 0) { callbackStart = null; }
        if (callbackEnd === void 0) { callbackEnd = null; }
        if (loop === void 0) { loop = false; }
        if (this.animation) {
            this.animation.stop();
        }
        var self = this;
        var childMesh = this.mesh;
        if (childMesh) {
            var skeleton_1 = childMesh.skeleton;
            if (skeleton_1) {
                self.isAttack = true;
                if (callbackEnd) {
                    callbackStart();
                }
                if (self.sfxHit) {
                    self.sfxHit.play();
                }
                self.animation = skeleton_1.beginAnimation(animation, loop, this.statistics.attackSpeed / 100, function () {
                    if (callbackEnd) {
                        callbackEnd();
                    }
                    skeleton_1.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                    self.animation = null;
                    self.isAttack = false;
                });
            }
        }
    };
    AbstractCharacter.prototype.runAnimationWalk = function () {
        var self = this;
        var childMesh = this.mesh;
        var loopAnimation = true;
        if (childMesh) {
            var skeleton_2 = childMesh.skeleton;
            if (!this.animation && skeleton_2) {
                self.sfxWalk.play();
                self.onWalkStart();
                self.animation = skeleton_2.beginAnimation(AbstractCharacter.ANIMATION_WALK, loopAnimation, 1.4, function () {
                    skeleton_2.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                    self.animation = null;
                    self.sfxWalk.stop();
                    self.onWalkEnd();
                });
            }
        }
    };
    AbstractCharacter.prototype.getWalkSpeed = function () {
        var animationRatio = this.game.getScene().getAnimationRatio();
        return this.statistics.walkSpeed / animationRatio;
    };
    ;
    /** Events */
    AbstractCharacter.prototype.onWalkStart = function () { };
    ;
    AbstractCharacter.prototype.onWalkEnd = function () { };
    ;
    AbstractCharacter.ANIMATION_WALK = 'Run';
    AbstractCharacter.ANIMATION_STAND = 'stand';
    AbstractCharacter.ANIMATION_STAND_WEAPON = 'Stand_with_weapon';
    AbstractCharacter.ANIMATION_ATTACK_01 = 'Attack';
    AbstractCharacter.ANIMATION_ATTACK_02 = 'Attack02';
    AbstractCharacter.ANIMATION_SKILL_01 = 'Skill01';
    AbstractCharacter.ANIMATION_SKILL_02 = 'Skill02';
    return AbstractCharacter;
}());
/// <reference path="../AbstractCharacter.ts"/>
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster(game, serverKey, serverData) {
        var _this = this;
        var meshName = serverData.meshName;
        var factoryName = serverData.type;
        var mesh = game.factories[factoryName].createInstance(meshName, true);
        mesh.visibility = 1;
        mesh.isPickable = 0;
        _this.sfxHit = new BABYLON.Sound("CharacterHit", "assets/sounds/character/hit2.mp3", game.getScene(), null, {
            loop: false,
            autoplay: false
        });
        _this.id = serverKey;
        _this.mesh = mesh;
        _this.statistics = serverData.statistics;
        game.enemies[_this.id] = _this;
        mesh.skeleton.enableBlending(0.2);
        _this.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND, true);
        _this.bloodParticles = new Particles.Blood(game, _this.mesh).particleSystem;
        mesh.scaling = new BABYLON.Vector3(serverData.scale, serverData.scale, serverData.scale);
        _this = _super.call(this, serverData.name, game) || this;
        ///Create box mesh for moving
        _this.createBoxForMove(game.getScene());
        _this.meshForMove.position = new BABYLON.Vector3(serverData.position.x, serverData.position.y, serverData.position.z);
        mesh.parent = _this.meshForMove;
        _this.mesh.outlineColor = new BABYLON.Color3(0.3, 0, 0);
        _this.mesh.outlineWidth = 0.1;
        var self = _this;
        _this.meshForMove.actionManager = new BABYLON.ActionManager(_this.game.getScene());
        _this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
            self.mesh.renderOutline = false;
            self.game.gui.characterTopHp.hideHpBar();
        }));
        _this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
            self.mesh.renderOutline = true;
            self.game.gui.characterTopHp.showHpCharacter(self);
        }));
        var intervalAttackFunction = function () {
            game.client.socket.emit('attack', {
                attack: true,
                targetPoint: self.game.controller.attackPoint.position,
                rotation: self.game.controller.attackPoint.rotation
            });
        };
        _this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, function (pointer) {
            if (self.game.player.isAlive) {
                game.controller.attackPoint = pointer.meshUnderPointer;
                game.controller.targetPoint = null;
                game.controller.ball.visibility = 0;
                self.intervalAttackRegisteredFunction = setInterval(intervalAttackFunction, 200);
                intervalAttackFunction();
            }
        }));
        _this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function (pointer) {
            clearInterval(self.intervalAttackRegisteredFunction);
            self.game.controller.attackPoint = null;
        }));
        _this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickOutTrigger, function (pointer) {
            clearInterval(self.intervalAttackRegisteredFunction);
            self.game.controller.attackPoint = null;
        }));
        _this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (pointer) {
            clearInterval(self.intervalAttackRegisteredFunction);
            self.game.controller.attackPoint = null;
        }));
        return _this;
    }
    Monster.prototype.runAnimationWalk = function () {
        var self = this;
        var loopAnimation = this.isControllable;
        var skeleton = this.mesh.skeleton;
        if (!this.animation && skeleton) {
            self.animation = skeleton.beginAnimation(AbstractCharacter.ANIMATION_WALK, loopAnimation, 1, function () {
                skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                self.animation = null;
            });
        }
    };
    Monster.prototype.removeFromWorld = function () {
        if (this.intervalAttackRegisteredFunction) {
            clearInterval(this.intervalAttackRegisteredFunction);
        }
        this.meshForMove.dispose();
    };
    return Monster;
}(AbstractCharacter));
/// <reference path="game.ts"/>
/// <reference path="characters/monsters/monster.ts"/>
var SocketIOClient = /** @class */ (function () {
    function SocketIOClient(game) {
        this.game = game;
    }
    SocketIOClient.prototype.connect = function (socketUrl) {
        this.socket = io.connect(socketUrl);
        this.playerConnected();
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.playerConnected = function () {
        var self = this;
        var game = this.game;
        this.socket.on('clientConnected', function (data) {
            game.remotePlayers = [];
            self.connectionId = data.connectionId;
            self
                .showPlayer()
                .updatePlayers()
                .removePlayer()
                .refreshPlayerEquip()
                .addExperience()
                .newLvl()
                .attributeAdded()
                .addSpecialItem()
                .showEnemies()
                .showDroppedItem()
                .refreshGateways()
                .refreshQuests()
                .refreshChests()
                .openedChest()
                .updateEnemies()
                .changeScene()
                .questRequirementInformation()
                .questRequirementDoneInformation();
            // .skillsLearned()
            // .updateRooms()
            // .reloadScene()
        });
        // this.socket.emit('changeScene', ForestHouse.TYPE);
        this.socket.emit('selectCharacter', 1);
        return this;
    };
    SocketIOClient.prototype.questRequirementInformation = function () {
        var self = this;
        this.socket.on('questRequirementInformation', function (data) {
            self.game.gui.playerLogsQuests.addText(data);
        });
        return this;
    };
    SocketIOClient.prototype.questRequirementDoneInformation = function () {
        var self = this;
        this.socket.on('questRequirementDoneInformation', function (data) {
            self.game.gui.playerLogsQuests.addText(data, 'orange');
            self.socket.emit('refreshQuests');
            self.socket.emit('refreshGateways');
        });
        return this;
    };
    SocketIOClient.prototype.refreshGateways = function () {
        var game = this.game;
        var gateways = [];
        this.socket.on('refreshGateways', function (sceneServerData) {
            gateways.forEach(function (gateway) {
                gateway.particleSystem.dispose();
            });
            var gatewaysFromServer = sceneServerData.gateways;
            gatewaysFromServer.forEach(function (gateway) {
                var gatewayInGame = new Factories.Gateway(game, gateway.objectName, gateway.isActive, gateway.openSceneType);
                gateways.push(gatewayInGame);
            });
        });
        return this;
    };
    SocketIOClient.prototype.refreshQuests = function () {
        var game = this.game;
        var self = this;
        this.socket.on('refreshQuests', function (data) {
            game.quests.forEach(function (quest) {
                quest.box.dispose();
            });
            game.quests = [];
            var activeQuest = data.sessionData.activeRoom.activeQuest;
            data.quests.forEach(function (quest) {
                game.quests.push(new Factories.Quests(game, quest, activeQuest));
            });
            self.socket.emit('refreshGateways');
            if (activeQuest) {
                self.game.gui.playerQuestInformation.addQuest(activeQuest);
            }
        });
        return this;
    };
    SocketIOClient.prototype.refreshChests = function () {
        var game = this.game;
        this.socket.on('refreshChests', function (chests) {
            game.chests.forEach(function (chest) {
                chest.hightlightLayer.dispose();
            });
            game.chests = [];
            chests.forEach(function (chest, chestKey) {
                game.chests.push(new Factories.Chest(game, chest, chestKey));
            });
        });
        return this;
    };
    SocketIOClient.prototype.changeScene = function () {
        var game = this.game;
        this.socket.on('changeScene', function (sceneType) {
            var scene = Scenes.Manager.factory(sceneType);
            game.changeScene(scene);
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.updateRooms = function () {
        var game = this.game;
        this.socket.on('updateRooms', function (data) {
            if (game.gui) {
                game.gui.teams.rooms = data;
                game.gui.teams.refreshPopup();
            }
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.reloadScene = function () {
        var game = this.game;
        this.socket.on('reloadScene', function (data) {
            game.changeScene(new Mountains());
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.addExperience = function () {
        var game = this.game;
        this.socket.on('addExperience', function (data) {
            game.player.addExperience(data.experience, data.experiencePercentages);
            game.gui.playerLogsPanel.addText('You earned ' + data.experience + ' experience.', 'blue');
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.openedChest = function () {
        var game = this.game;
        this.socket.on('openChest', function (data) {
            var opened = data.chest.opened;
            if (!opened) {
                game.gui.playerLogsQuests.addText('You do not have key to open chest', 'red');
            }
            else {
                game.gui.playerLogsQuests.addText('Chest has been opened', 'orange');
                game.player.keys -= 1;
                if (game.gui.inventory.opened) {
                    game.gui.inventory.refreshPopup();
                }
                var chest_1 = game.chests[data.chestKey];
                chest_1.hightlightLayer.dispose();
                chest_1.mesh.actionManager.actions.forEach(function (action) {
                    chest_1.mesh.actionManager.unregisterAction(action);
                });
            }
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.addSpecialItem = function () {
        var game = this.game;
        this.socket.on('addSpecialItem', function (data) {
            game.gui.playerLogsPanel.addText('You earned ' + data.value + ' ' + data.name + '', 'gold');
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.attributeAdded = function () {
        var game = this.game;
        this.socket.on('attributeAdded', function (data) {
            game.player.freeAttributesPoints = data.activePlayer.freeAttributesPoints;
            game.player.setCharacterStatistics(data.activePlayer);
            game.gui.attributes.refreshPopup();
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.skillsLearned = function () {
        var game = this.game;
        var self = this;
        this.socket.on('skillLearned', function (data) {
            self.characters = data.characters;
            game.player.freeSkillPoints = self.characters[self.activeCharacter].freeSkillPoints;
            game.player.setCharacterSkills(self.characters[self.activeCharacter].skills);
            game.gui.skills.refreshPopup();
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.newLvl = function () {
        var game = this.game;
        this.socket.on('newLvl', function (playerData) {
            game.player.freeAttributesPoints = playerData.freeAttributesPoints;
            game.player.freeSkillPoints = playerData.freeSkillPoints;
            game.player.lvl = playerData.lvl;
            game.player.experiencePercentages = 0;
            game.gui.attributes.refreshPopup();
            game.player.setNewLvl();
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.showPlayer = function () {
        var game = this.game;
        var self = this;
        this.socket.on('showPlayer', function (playerData) {
            game.player = new Player(game, true, playerData);
            document.dispatchEvent(game.events.playerConnected);
            var octree = game.sceneManager.octree;
            if (octree) {
                octree.dynamicContent.push(game.player.mesh);
                octree.dynamicContent.push(game.controller.ball);
                game.player.inventory.getEquipedItems().forEach(function (item) {
                    if (item) {
                        game.sceneManager.octree.dynamicContent.push(item.mesh);
                    }
                });
            }
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.refreshPlayerEquip = function () {
        var game = this.game;
        this.socket.on('updatePlayerEquip', function (updatedPlayer) {
            var player = null;
            if (updatedPlayer.activePlayer.id == game.player.id) {
                player = game.player;
                game.player.setCharacterStatistics(updatedPlayer.activePlayer);
                game.gui.attributes.refreshPopup();
            }
            else {
                game.remotePlayers.forEach(function (remotePlayer, key) {
                    if (remotePlayer.id == updatedPlayer.activePlayer.id) {
                        player = game.remotePlayers[key];
                        return;
                    }
                });
            }
            player.removeItems();
            player.setItems(updatedPlayer.activePlayer.items);
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.showDroppedItem = function () {
        var game = this.game;
        this.socket.on('showDroppedItem', function (data) {
            var item = new Items.Item(game, data.item);
            Items.DroppedItem.showItem(game, item, data.position, data.itemKey);
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.showEnemies = function () {
        var game = this.game;
        this.socket.on('showEnemies', function (data) {
            game.enemies = [];
            data.forEach(function (enemyData, key) {
                if (enemyData.statistics.hp > 0) {
                    var newMonster = new Monster(game, key, enemyData);
                    if (newMonster) {
                        if (game.sceneManager.octree) {
                            game.sceneManager.octree.dynamicContent.push(newMonster.mesh);
                        }
                    }
                }
            });
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.updateEnemies = function () {
        var game = this.game;
        var self = this;
        var activeTargetPoints = [];
        this.socket.on('updateEnemy', function (data) {
            var updatedEnemy = data.enemy;
            var enemyKey = data.enemyKey;
            var enemy = game.enemies[enemyKey];
            if (enemy) {
                var mesh_1 = enemy.meshForMove;
                ///action when hp of monster is changed
                if (enemy.statistics.hp != updatedEnemy.statistics.hp) {
                    var damage_1 = (enemy.statistics.hp - updatedEnemy.statistics.hp);
                    enemy.statistics.hp = updatedEnemy.statistics.hp;
                    setTimeout(function () {
                        enemy.bloodParticles.start();
                        var label = new BABYLON.GUI.TextBlock();
                        label.text = '-' + damage_1 + '';
                        label.width = 1;
                        label.height = 1;
                        label.color = 'white';
                        label.fontSize = 200;
                        label.shadowOffsetX = 0;
                        label.shadowOffsetY = 0;
                        label.shadowBlur = 1;
                        var paddingTop = -150;
                        label.top = paddingTop;
                        var alpha = 1;
                        var animateText = function () {
                            label.top = paddingTop;
                            label.alpha = alpha;
                            alpha -= (2 / 100);
                            if (alpha < 0) {
                                alpha = 0;
                            }
                            paddingTop -= 5;
                        };
                        enemy.meshAdvancedTexture.addControl(label);
                        game.getScene().registerAfterRender(animateText);
                        if (enemy.statistics.hp <= 0) {
                            if (enemy.animation) {
                                enemy.animation.stop();
                            }
                        }
                        setTimeout(function () {
                            game.getScene().unregisterAfterRender(animateText);
                            enemy.meshAdvancedTexture.removeControl(label);
                            enemy.bloodParticles.rebuild();
                            enemy.bloodParticles.stop();
                            enemy.bloodParticles.reset();
                            if (enemy.statistics.hp <= 0) {
                                enemy.removeFromWorld();
                            }
                        }, 1000);
                    }, 300);
                }
                ///antylag rule
                var distanceBetweenObjects = Game.distanceVector(mesh_1.position, updatedEnemy.position);
                if (distanceBetweenObjects > 8) {
                    mesh_1.position = new BABYLON.Vector3(updatedEnemy.position.x, updatedEnemy.position.y, updatedEnemy.position.z);
                }
                if (data.collisionEvent) {
                    if (activeTargetPoints[enemyKey] !== undefined) {
                        self.game.getScene().unregisterBeforeRender(activeTargetPoints[enemyKey]);
                    }
                    if (data.collisionEvent == 'OnIntersectionEnterTriggerAttack' && updatedEnemy.attack == true) {
                        enemy.runAnimationHit(AbstractCharacter.ANIMATION_ATTACK_01, null, null, false);
                    }
                    else if (data.collisionEvent == 'OnIntersectionEnterTriggerVisibility' || data.collisionEvent == 'OnIntersectionExitTriggerAttack') {
                        var targetMesh_1 = null;
                        if (enemy.animation) {
                            enemy.animation.stop();
                        }
                        game.remotePlayers.forEach(function (socketRemotePlayer) {
                            if (updatedEnemy.target == socketRemotePlayer.id) {
                                targetMesh_1 = socketRemotePlayer.mesh;
                            }
                        });
                        if (!targetMesh_1 && game.player.id == updatedEnemy.target) {
                            targetMesh_1 = game.player.meshForMove;
                        }
                        if (targetMesh_1) {
                            activeTargetPoints[enemyKey] = function () {
                                mesh_1.lookAt(targetMesh_1.position);
                                var rotation = mesh_1.rotation;
                                if (mesh_1.rotationQuaternion) {
                                    rotation = mesh_1.rotationQuaternion.toEulerAngles();
                                }
                                rotation.negate();
                                var forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / enemy.getWalkSpeed(), 0, -parseFloat(Math.cos(rotation.y)) / enemy.getWalkSpeed());
                                mesh_1.moveWithCollisions(forwards);
                                if (enemy.animation) {
                                }
                                enemy.runAnimationWalk();
                            };
                            self.game.getScene().registerBeforeRender(activeTargetPoints[enemyKey]);
                        }
                    }
                    else if (data.collisionEvent == 'OnIntersectionExitTriggerVisibility') {
                        enemy.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                    }
                }
                setTimeout(function () {
                    self.game.gui.characterTopHp.refreshPanel();
                }, 300);
            }
        });
        return this;
    };
    SocketIOClient.prototype.connectPlayer = function () {
        var game = this.game;
        this.socket.on('newPlayerConnected', function (teamPlayer) {
            if (game.player) {
                var activePlayer = teamPlayer.characters[teamPlayer.activeCharacter];
                var player = new Player(game, teamPlayer.id, false, activePlayer);
                player.mesh.position = new BABYLON.Vector3(activePlayer.position.x, activePlayer.position.y, activePlayer.position.z);
                player.setItems(activePlayer.items);
                game.remotePlayers.push(player);
            }
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.updatePlayers = function () {
        var self = this;
        var game = this.game;
        this.socket.on('updatePlayer', function (updatedPlayer) {
            var player = null;
            if (updatedPlayer.activePlayer.id == game.player.id) {
                player = game.player;
            }
            else {
                game.remotePlayers.forEach(function (remotePlayer, key) {
                    if (remotePlayer.id == updatedPlayer.activePlayer.id) {
                        player = game.remotePlayers[key];
                        return;
                    }
                });
            }
            ///action when hp of character is changed
            if (player.statistics.hp != updatedPlayer.activePlayer.statistics.hp) {
                var damage_2 = (player.statistics.hp - updatedPlayer.activePlayer.statistics.hp);
                player.statistics.hp = updatedPlayer.activePlayer.statistics.hp;
                setTimeout(function () {
                    player.bloodParticles.start();
                    var label = new BABYLON.GUI.TextBlock();
                    label.text = '-' + damage_2 + '';
                    label.width = 2;
                    label.height = 2;
                    label.color = 'red';
                    label.fontSize = 200;
                    label.shadowOffsetX = 0;
                    label.shadowOffsetY = 0;
                    label.shadowBlur = 1;
                    var paddingTop = -300;
                    label.top = paddingTop;
                    var alpha = 1;
                    var animateText = function () {
                        label.top = paddingTop;
                        label.alpha = alpha;
                        alpha -= (2 / 100);
                        if (alpha < 0) {
                            alpha = 0;
                        }
                        paddingTop -= 5;
                    };
                    player.meshAdvancedTexture.addControl(label);
                    game.getScene().registerAfterRender(animateText);
                    if (player.isControllable) {
                        game.gui.playerBottomPanel.setHpOnPanel(player.statistics.hp);
                    }
                    if (player.isAlive && player.statistics.hp <= 0) {
                        player.isAlive = false;
                        player.mesh.skeleton.beginAnimation('death', false);
                    }
                    setTimeout(function () {
                        game.getScene().unregisterAfterRender(animateText);
                        player.meshAdvancedTexture.removeControl(label);
                        player.bloodParticles.rebuild();
                        player.bloodParticles.stop();
                        player.bloodParticles.reset();
                    }, 1000);
                }, 300);
            }
            if (updatedPlayer.attack == true && !player.isAttack) {
                var targetPoint = updatedPlayer.targetPoint;
                if (targetPoint) {
                    var targetPointVector3 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                    player.meshForMove.lookAt(targetPointVector3);
                }
                var attackAnimation = (Game.randomNumber(1, 2) == 1) ? AbstractCharacter.ANIMATION_ATTACK_02 : AbstractCharacter.ANIMATION_ATTACK_01;
                player.runAnimationHit(attackAnimation, null, null);
                return;
            }
            if (updatedPlayer.targetPoint && !player.isControllable) {
                var targetPointVector3 = new BABYLON.Vector3(updatedPlayer.targetPoint.x, 0, updatedPlayer.targetPoint.z);
                player.runPlayerToPosition(targetPointVector3);
            }
        });
        return this;
    };
    /**
     *
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.removePlayer = function () {
        var app = this.game;
        this.socket.on('removePlayer', function (id) {
            app.remotePlayers.forEach(function (remotePlayer, key) {
                if (remotePlayer.id == id) {
                    var player = app.remotePlayers[key];
                    player.removeFromWorld();
                    app.remotePlayers.splice(key, 1);
                }
            });
        });
        return this;
    };
    return SocketIOClient;
}());
/// <reference path="../bower_components/babylonjs/dist/babylon.d.ts"/>
/// <reference path="controllers/Keyboard.ts"/>
/// <reference path="scenes/Simple.ts"/>
/// <reference path="socketIOClient.ts"/>
var Game = /** @class */ (function () {
    function Game(canvasElement) {
        var self = this;
        var serverUrl = window.location.hostname + ':' + gameServerPort;
        self.canvas = canvasElement;
        self.engine = new BABYLON.Engine(self.canvas, false, null, false);
        self.controller = new Mouse(self);
        self.client = new SocketIOClient(self);
        self.factories = [];
        self.enemies = [];
        self.quests = [];
        self.npcs = [];
        self.scenes = [];
        self.chests = [];
        self.activeScene = null;
        self.events = new Events();
        self.client.connect(serverUrl);
        self.animate();
    }
    Game.prototype.getScene = function () {
        return this.scenes[this.activeScene];
    };
    Game.prototype.animate = function () {
        var _this = this;
        var self = this;
        this.engine.runRenderLoop(function () {
            if (_this.activeScene != null) {
                self.getScene().render();
            }
        });
        window.addEventListener('resize', function () {
            self.engine.resize();
        });
        return this;
    };
    Game.prototype.changeScene = function (newScene) {
        var sceneToDispose = this.getScene();
        if (sceneToDispose) {
            setTimeout(function () {
                sceneToDispose.dispose();
            });
        }
        this.activeScene = null;
        this.controller.forward = false;
        newScene.initScene(this);
    };
    Game.randomNumber = function (minimum, maximum) {
        return Math.round(Math.random() * (maximum - minimum) + minimum);
    };
    Game.distanceVector = function (vectorFrom, vectorTo) {
        var dx = vectorFrom.x - vectorTo.x;
        var dy = vectorFrom.y - vectorTo.y;
        var dz = vectorFrom.z - vectorTo.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };
    Game.SHOW_COLLIDERS = 0;
    Game.SHOW_DEBUG = 0;
    return Game;
}());
var Effects;
(function (Effects) {
    var GodRay = /** @class */ (function () {
        function GodRay() {
        }
        GodRay.prototype.createGodRay = function (game) {
            var engine = game.engine;
            var scene = game.getScene();
            var camera = game.getScene().activeCamera;
            var fireMaterial = new BABYLON.StandardMaterial("fontainSculptur2", scene);
            var fireTexture = new BABYLON.Texture("assets/flare.png", scene);
            fireTexture.hasAlpha = true;
            fireMaterial.alpha = 0.2;
            fireMaterial.emissiveTexture = fireTexture;
            fireMaterial.diffuseTexture = fireTexture;
            fireMaterial.opacityTexture = fireTexture;
            fireMaterial.specularPower = 1;
            fireMaterial.backFaceCulling = false;
            var box = BABYLON.Mesh.CreatePlane("godRayPlane", 12, scene, true);
            box.visibility = 1;
            // box.material = new BABYLON.StandardMaterial("bmat", scene);
            // box.material.emissiveColor = new BABYLON.Color3(0.2, 0.2, 0.2);
            box.position = new BABYLON.Vector3(0, 0.1, 0);
            box.rotation = new BABYLON.Vector3(-Math.PI / 2, 0, 0);
            // box.parent = this.mesh;
            box.material = fireMaterial;
            var godrays = new BABYLON.VolumetricLightScatteringPostProcess('godrays', 1, camera, box, 100, BABYLON.Texture.BILINEAR_SAMPLINGMODE, engine, false);
            godrays.useCustomMeshPosition = true;
            godrays.setCustomMeshPosition(new BABYLON.Vector3(0.0, -45.0, 0.0));
            // godrays.invert = true;
            godrays.exposure = 0.5;
            godrays.decay = 1;
            godrays.weight = 0.5;
            godrays.density = 0.5;
            // BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'position.y', 30, 70, 30, 0,0, null, function() {
            //     godrays.invert = false;
            //     setTimeout(function() {
            //         BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'position.y', 30, 70, 0, 30,0, null, function() {
            //             godrays.dispose(camera);
            //             box.dispose();
            //         } );
            //     }, 1000);
            // } );
        };
        return GodRay;
    }());
    Effects.GodRay = GodRay;
})(Effects || (Effects = {}));
var Character;
(function (Character) {
    var Inventory = /** @class */ (function () {
        function Inventory(game, player) {
            this.game = game;
            this.player = player;
            this.items = [];
        }
        Inventory.prototype.clearItems = function () {
            this.weapon = null;
            this.shield = null;
            this.helm = null;
            this.gloves = null;
            this.boots = null;
            this.armor = null;
            this.items = [];
            return this;
        };
        /**
         * @param item
         * @param setItem
         */
        Inventory.prototype.equipItem = function (item, setItem) {
            if (setItem) {
                item.mesh.parent = this.player.mesh;
                item.mesh.skeleton = this.player.mesh.skeleton;
                item.mesh.visibility = 1;
                switch (item.type) {
                    case 1:
                        this.weapon = item;
                        break;
                    case 2:
                        this.shield = item;
                        break;
                    case 3:
                        this.helm = item;
                        break;
                    case 4:
                        this.gloves = item;
                        break;
                    case 5:
                        this.boots = item;
                        break;
                    case 6:
                        this.armor = item;
                        break;
                }
            }
            else {
                item.mesh.visibility = 0;
            }
        };
        /**
         * @param item

         * @returns {AbstractCharacter.Inventory}
         */
        Inventory.prototype.emitEquip = function (item) {
            this.game.client.socket.emit('itemEquip', {
                id: item.databaseId
            });
            return this;
        };
        /**
         * @returns {Array}
         */
        Inventory.prototype.getEquipedItems = function () {
            var equipedItems = [];
            equipedItems.push(this.helm);
            equipedItems.push(this.armor);
            equipedItems.push(this.weapon);
            equipedItems.push(this.shield);
            equipedItems.push(this.gloves);
            equipedItems.push(this.boots);
            return equipedItems;
        };
        /**
         *
         * @param {boolean} showHair
         * @param {boolean} showSash
         */
        Inventory.prototype.showSashOrHair = function (showHair, showSash) {
            if (showHair) {
                var helm = new Items.Item(this.game, {
                    name: "Hair",
                    image: 'hair',
                    meshName: 'hair',
                    type: 3,
                    entity: { id: 0 },
                    statistics: null
                });
                this.equipItem(helm, true);
            }
            if (showSash) {
                var armor = new Items.Item(this.game, {
                    name: "Sash",
                    image: 'sash',
                    meshName: 'sash',
                    type: 6,
                    entity: { id: 0 },
                    statistics: null
                });
                this.equipItem(armor, true);
            }
        };
        Inventory.prototype.deleteSashAndHair = function () {
            if (this.helm && this.helm.name == "Hair") {
                this.helm.mesh.dispose();
            }
            if (this.armor && this.armor.name == "Sash") {
                this.armor.mesh.dispose();
            }
            return this;
        };
        return Inventory;
    }());
    Character.Inventory = Inventory;
})(Character || (Character = {}));
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(game, registerMoving, serverData) {
        var _this = this;
        _this.id = serverData.activePlayer.id;
        _this.game = game;
        _this.isAlive = true;
        _this.setCharacterStatistics(serverData.activePlayer);
        _this.connectionId = serverData.connectionId;
        _this.isControllable = registerMoving;
        //
        _this.sfxWalk = new BABYLON.Sound("CharacterWalk", "assets/sounds/character/walk/1.mp3", game.getScene(), null, {
            loop: true,
            autoplay: false
        });
        _this.sfxHit = new BABYLON.Sound("CharacterHit", "assets/sounds/character/hit.mp3", game.getScene(), null, {
            loop: false,
            autoplay: false
        });
        var mesh = game.factories['character'].createInstance('Warrior', true);
        mesh.skeleton.enableBlending(0.2);
        mesh.alwaysSelectAsActiveMesh = true;
        ///Create box mesh for moving
        _this.createBoxForMove(game.getScene());
        _this.meshForMove.position = new BABYLON.Vector3(serverData.position.x, serverData.position.y, serverData.position.z);
        mesh.parent = _this.meshForMove;
        // Collisions.setCollider(game.getScene(), mesh, null, false);
        _this.mesh = mesh;
        _this.bloodParticles = new Particles.Blood(game, _this.mesh).particleSystem;
        _this.walkSmoke = new Particles.WalkSmoke(game, _this.mesh).particleSystem;
        mesh.actionManager = new BABYLON.ActionManager(game.getScene());
        _this.inventory = new Character.Inventory(game, _this);
        _this.setItems(serverData.activePlayer.items);
        if (_this.isControllable) {
            _this.mesh.isPickable = false;
            var playerLight = new BABYLON.SpotLight("playerLightSpot", new BABYLON.Vector3(0, 50, 0), new BABYLON.Vector3(0, -1, 0), null, null, game.getScene());
            playerLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
            playerLight.angle = 0.7;
            playerLight.exponent = 50;
            playerLight.intensity = 0.8;
            playerLight.parent = _this.mesh;
            _this.playerLight = playerLight;
            game.gui = new GUI.Main(game, _this);
            _this.experience = serverData.activePlayer.experience;
            _this.gold = serverData.activePlayer.gold;
            _this.keys = serverData.activePlayer.specialItems.length;
            _this.experiencePercentages = serverData.activePlayer.experiencePercentages;
            _this.lvl = serverData.activePlayer.lvl;
            _this.freeAttributesPoints = serverData.activePlayer.freeAttributesPoints;
            _this.freeSkillPoints = serverData.activePlayer.freeSkillPoints;
            _this.name = serverData.activePlayer.name;
            // this.setCharacterSkills(serverData.skills);
            _this.refreshCameraPosition();
        }
        _this = _super.call(this, serverData.activePlayer.name, game) || this;
        return _this;
    }
    Player.prototype.initGodRay = function () {
        var engine = this.game.engine;
        var scene = this.game.getScene();
        var camera = this.game.getScene().activeCamera;
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
        box.rotation = new BABYLON.Vector3(-Math.PI / 2, 0, 0);
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
        BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'scaling.z', 60, 30, 0, 1, 0, null);
        BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'scaling.x', 60, 30, 0, 1, 0, null);
        BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'scaling.y', 60, 30, 0, 1, 0, null, function () {
            // godrays.invert = false;
            setTimeout(function () {
                BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'scaling.z', 60, 10, 1, 0, 0, null);
                BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'scaling.x', 60, 10, 1, 0, 0, null);
                BABYLON.Animation.CreateAndStartAnimation("fadesphere", box, 'scaling.y', 60, 10, 1, 0, 0, null, function () {
                    godrays.dispose(camera);
                    box.dispose();
                });
            }, 2500);
        });
        return this;
    };
    Player.prototype.setCharacterStatistics = function (playerServerData) {
        this.statistics = playerServerData.statistics;
        this.statisticsAll = playerServerData.allStatistics;
    };
    ;
    Player.prototype.setCharacterSkills = function (skills) {
        var skillManager = new Character.Skills.SkillsManager(this.game);
        var self = this;
        this.skills = [];
        if (skills) {
            skills.forEach(function (skill, key) {
                var playerSkill = skillManager.getSkill(skill.type);
                playerSkill.damage = (skill.damage) ? skill.damage : 0;
                playerSkill.stock = (skill.stock) ? skill.stock : 0;
                playerSkill.cooldown = (skill.cooldown) ? skill.cooldown : 0;
                self.skills[playerSkill.getType()] = playerSkill;
            });
        }
        return this;
    };
    ;
    Player.prototype.removeFromWorld = function () {
        this.mesh.dispose();
    };
    Player.prototype.refreshCameraPosition = function () {
        this.game.getScene().activeCamera.position = this.meshForMove.position.clone();
        this.game.getScene().activeCamera.position.y = 50;
        this.game.getScene().activeCamera.position.z -= 34;
        this.game.getScene().activeCamera.position.x -= 34;
    };
    /**
     *
     * @param inventoryItems
     */
    Player.prototype.setItems = function (inventoryItems) {
        if (inventoryItems) {
            var self_1 = this;
            var game_1 = this.game;
            var itemManager_1 = new Items.ItemManager(game_1);
            new Promise(function (resolve) {
                self_1.inventory.deleteSashAndHair();
                self_1.inventory.items.forEach(function (item) {
                    item.mesh.dispose();
                });
                setTimeout(function () {
                    resolve();
                });
            }).then(function () {
                self_1.inventory.clearItems();
                new Promise(function (resolve) {
                    itemManager_1.initItemsFromDatabaseOnCharacter(inventoryItems, self_1.inventory);
                    setTimeout(function () {
                        resolve();
                    });
                }).then(function () {
                    if (self_1.isControllable && game_1.gui.inventory.opened) {
                        game_1.gui.inventory.refreshPopup();
                    }
                });
            });
        }
    };
    /**
     * @returns {Player}
     */
    Player.prototype.removeItems = function () {
        this.inventory.items.forEach(function (item) {
            item.mesh.dispose();
        });
        this.inventory.items = [];
        return this;
    };
    Player.prototype.refreshExperienceInGui = function () {
        this.game.gui.playerBottomPanel.expBar.value = this.experiencePercentages;
    };
    Player.prototype.addExperience = function (experince, experiencePercentages) {
        this.experience += experince;
        this.experiencePercentages = experiencePercentages;
        this.refreshExperienceInGui();
    };
    Player.prototype.setNewLvl = function () {
        this.game.gui.playerLogsPanel.addText('New lvl ' + this.lvl + '', 'red');
        this.game.gui.playerLogsPanel.addText('You got 5 attribute points', 'red');
        this.game.gui.playerLogsPanel.addText('You got 1 skill point ' + this.lvl + '', 'red');
        this.refreshExperienceInGui();
        this.initGodRay();
    };
    Player.prototype.runPlayerToPosition = function (targetPointVector3) {
        var self = this;
        var mesh = this.meshForMove;
        mesh.lookAt(targetPointVector3);
        if (this.dynamicFunction !== undefined) {
            self.game.getScene().unregisterBeforeRender(this.dynamicFunction);
        }
        this.dynamicFunction = function () {
            if (mesh.intersectsPoint(targetPointVector3)) {
                self.game.getScene().unregisterBeforeRender(self.dynamicFunction);
                if (self.isControllable) {
                    //game.controller.targetPoint = null;
                    self.game.controller.flag.visibility = 0;
                }
                if (self.animation) {
                    self.animation.stop();
                }
            }
            else {
                var rotation = mesh.rotation;
                if (mesh.rotationQuaternion) {
                    rotation = mesh.rotationQuaternion.toEulerAngles();
                }
                rotation.negate();
                var forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / self.getWalkSpeed(), 0, -parseFloat(Math.cos(rotation.y)) / self.getWalkSpeed());
                mesh.moveWithCollisions(forwards);
                mesh.position.y = 0;
                self.game.player.refreshCameraPosition();
                self.runAnimationWalk();
            }
        };
        this.game.getScene().registerBeforeRender(this.dynamicFunction);
    };
    Player.prototype.onWalkStart = function () {
        this.walkSmoke.start();
    };
    Player.prototype.onWalkEnd = function () {
        this.walkSmoke.stop();
    };
    return Player;
}(AbstractCharacter));
/// <reference path="Controller.ts"/>
var Mouse = /** @class */ (function (_super) {
    __extends(Mouse, _super);
    function Mouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mouse.prototype.registerControls = function (scene) {
        var self = this;
        var clickTrigger = false;
        var lastUpdate = new Date().getTime() / 1000;
        var ball = BABYLON.Mesh.CreateBox("mouseBox", 0.4, scene);
        var meshFlag = this.game.factories['flag'].createInstance('Flag', false);
        meshFlag.visibility = 0;
        meshFlag.isPickable = false;
        meshFlag.parent = ball;
        meshFlag.scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
        this.flag = meshFlag;
        ball.actionManager = new BABYLON.ActionManager(scene);
        ball.isPickable = false;
        ball.visibility = 0;
        this.ball = ball;
        scene.onPointerUp = function (evt, pickResult) {
            if (clickTrigger) {
                clickTrigger = false;
                var pickedMesh = pickResult.pickedMesh;
                if (pickedMesh && (pickedMesh.name.search("Ground") >= 0)) {
                    meshFlag.visibility = 1;
                }
            }
        };
        scene.onPointerDown = function (evt, pickResult) {
            var pickedMesh = pickResult.pickedMesh;
            if (self.game.player.isAttack || !self.game.player.isAlive) {
                return;
            }
            clickTrigger = true;
            if (pickedMesh) {
                if ((pickedMesh.name.search("Ground") >= 0)) {
                    self.attackPoint = null;
                    self.targetPoint = pickResult.pickedPoint;
                    self.targetPoint.y = 0;
                    self.ball.position = self.targetPoint;
                    meshFlag.visibility = 0;
                    self.game.player.runPlayerToPosition(self.targetPoint);
                    self.game.client.socket.emit('setTargetPoint', {
                        position: self.targetPoint,
                        playerPosition: self.game.player.mesh.position
                    });
                }
            }
        };
        scene.onPointerMove = function (evt, pickResult) {
            if (clickTrigger) {
                if (!self.game.player.isAlive) {
                    return;
                }
                var pickedMesh = pickResult.pickedMesh;
                if (pickedMesh && self.targetPoint) {
                    if (self.game.player) {
                        self.targetPoint = pickResult.pickedPoint;
                        self.targetPoint.y = 0;
                        self.ball.position = self.targetPoint;
                        self.game.player.runPlayerToPosition(self.targetPoint);
                        if (lastUpdate < (new Date().getTime() / 1000) - 0.3) {
                            lastUpdate = (new Date().getTime() / 1000);
                            self.game.client.socket.emit('setTargetPoint', {
                                position: self.targetPoint,
                                playerPosition: self.game.player.mesh.position
                            });
                        }
                    }
                }
            }
        };
    };
    return Mouse;
}(Controller));
/// <reference path="../game.ts"/>
var Factories;
(function (Factories) {
    var AbstractFactory = /** @class */ (function () {
        function AbstractFactory(game, scene, assetsManager) {
            this.game = game;
            this.scene = scene;
            this.assetsManager = assetsManager;
        }
        AbstractFactory.prototype.initFactory = function () {
            var self = this;
            var meshTask = this.assetsManager.addMeshTask(this.taskName, null, this.dir, this.fileName);
            meshTask.onSuccess = function (task) {
                self.loadedMeshes = task.loadedMeshes;
                for (var i = 0; i < self.loadedMeshes.length; i++) {
                    var loadedMesh = self.loadedMeshes[i];
                    loadedMesh.visibility = 0;
                }
            };
            return this;
        };
        AbstractFactory.prototype.createInstance = function (name, cloneSkeleton) {
            if (cloneSkeleton === void 0) { cloneSkeleton = false; }
            for (var i = 0; i < this.loadedMeshes.length; i++) {
                var mesh = this.loadedMeshes[i];
                if (mesh.name == name) {
                    var clonedMesh = mesh.clone('clone_' + name);
                    if (cloneSkeleton) {
                        clonedMesh.skeleton = mesh.skeleton.clone('clone_skeleton_' + name);
                    }
                    clonedMesh.visibility = 1;
                    return clonedMesh;
                }
            }
        };
        return AbstractFactory;
    }());
    Factories.AbstractFactory = AbstractFactory;
})(Factories || (Factories = {}));
/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
var Factories;
(function (Factories) {
    var Boars = /** @class */ (function (_super) {
        __extends(Boars, _super);
        function Boars(game, scene, assetsManager) {
            var _this = _super.call(this, game, scene, assetsManager) || this;
            _this.taskName = 'boar.worm';
            _this.dir = 'assets/Characters/Boar/';
            _this.fileName = 'Boar.babylon';
            return _this;
        }
        return Boars;
    }(Factories.AbstractFactory));
    Factories.Boars = Boars;
})(Factories || (Factories = {}));
var Factories;
(function (Factories) {
    var Chest = /** @class */ (function () {
        /**
         *
         * @param {Game} game
         * @param chestData
         */
        function Chest(game, chestData, chestKey) {
            var self = this;
            var scene = game.getScene();
            var opened = chestData.opened;
            var name = chestData.name;
            var meshName = chestData.objectName;
            var chestMesh = game.getScene().getMeshByName(meshName);
            if (!chestMesh) {
                throw new TypeError('Wrong chest mesh name.');
            }
            chestMesh.isPickable = true;
            chestMesh.checkCollisions = true;
            if (!opened) {
                var hl = new BABYLON.HighlightLayer("highlightLayer", scene);
                hl.addMesh(chestMesh, BABYLON.Color3.Magenta());
                this.hightlightLayer = hl;
            }
            this.mesh = chestMesh;
            this.mesh.actionManager = new BABYLON.ActionManager(game.getScene());
            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                game.client.socket.emit('openChest', chestKey);
                console.log(chestKey);
            }));
        }
        return Chest;
    }());
    Factories.Chest = Chest;
})(Factories || (Factories = {}));
var Collisions = /** @class */ (function () {
    function Collisions() {
    }
    Collisions.setCollider = function (scene, parent, scalingSize, freezeInWorld) {
        if (scalingSize === void 0) { scalingSize = new BABYLON.Vector3(2, 3, 2); }
        if (freezeInWorld === void 0) { freezeInWorld = true; }
        // let collider = BABYLON.Mesh.CreateBox('collider_box_of_' + parent.name, 0, scene, false);
        // let parentBoundBox = parent.getBoundingInfo();
        // collider.scaling = new BABYLON.Vector3(parentBoundBox.boundingBox.maximum.x * 2, parentBoundBox.boundingBox.maximum.y * 2, parentBoundBox.boundingBox.maximum.z * 2);
        // collider.parent = parent;
        parent.isPickable = true;
        if (Game.SHOW_COLLIDERS) {
            // collider.material = new BABYLON.StandardMaterial("collidermat", scene);
            // collider.material.alpha = 0.3;
            parent.visibility = 1;
        }
        else {
            parent.visibility = 0;
        }
        parent.checkCollisions = true;
        if (freezeInWorld) {
            parent.freezeWorldMatrix();
        }
        return parent;
    };
    return Collisions;
}());
/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
var Factories;
(function (Factories) {
    var Flags = /** @class */ (function (_super) {
        __extends(Flags, _super);
        function Flags(game, scene, assetsManager) {
            var _this = _super.call(this, game, scene, assetsManager) || this;
            _this.taskName = 'flag';
            _this.dir = 'assets/Environment/Flag/';
            _this.fileName = 'Flag.babylon';
            return _this;
        }
        return Flags;
    }(Factories.AbstractFactory));
    Factories.Flags = Flags;
})(Factories || (Factories = {}));
var Factories;
(function (Factories) {
    var Gateway = /** @class */ (function () {
        /**
         *
         * @param {Game} game
         * @param {string} meshName
         * @param {boolean} isActive
         * @param {number} openSceneType
         */
        function Gateway(game, meshName, isActive, openSceneType) {
            var gateway = game.getScene().getMeshByName(meshName);
            if (!gateway) {
                throw new TypeError('Wrong gateway mesh name.');
            }
            this.mesh = gateway;
            gateway.visibility = 0;
            gateway.isPickable = false;
            var gatewayParticleSystem = new Particles.Gateway(game, gateway, isActive).particleSystem;
            gatewayParticleSystem.start();
            this.particleSystem = gatewayParticleSystem;
            if (isActive) {
                game.player.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: gateway
                }, function () {
                    game.client.socket.emit('changeSceneTrigger', openSceneType);
                    return this;
                }));
            }
        }
        return Gateway;
    }());
    Factories.Gateway = Gateway;
})(Factories || (Factories = {}));
/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
var Factories;
(function (Factories) {
    var Nature = /** @class */ (function (_super) {
        __extends(Nature, _super);
        function Nature(game, scene, assetsManager) {
            var _this = _super.call(this, game, scene, assetsManager) || this;
            _this.taskName = 'factory.nature.grain';
            _this.dir = 'assets/Environment/Plants/';
            _this.fileName = 'Plants.babylon';
            return _this;
        }
        return Nature;
    }(Factories.AbstractFactory));
    Factories.Nature = Nature;
})(Factories || (Factories = {}));
var Factories;
(function (Factories) {
    var Quests = /** @class */ (function () {
        /**
         *
         * @param {Game} game
         * @param serverData
         * @param activeQuest
         */
        function Quests(game, serverData, activeQuest) {
            var self = this;
            var questPicker = game.getScene().getMeshByName(serverData.objectName);
            if (!questPicker) {
                throw new TypeError('Wrong quest mesh name.');
            }
            questPicker.isPickable = true;
            this.game = game;
            this.mesh = questPicker;
            this.mesh.actionManager = new BABYLON.ActionManager(game.getScene());
            self.createTooltip(serverData, activeQuest);
            self.mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOverTrigger, self.box, 'scaling', new BABYLON.Vector3(2, 2, 2), 300));
            self.mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOutTrigger, self.box, 'scaling', new BABYLON.Vector3(1, 1, 1), 300));
            self.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                var quest = new GUI.NewQuest(game.gui, serverData);
                quest.open();
            }));
        }
        Quests.prototype.refreshTooltipColor = function (serverData, activeQuest) {
            if (activeQuest && activeQuest.questId != serverData.questId) {
                this.tooltip.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
            }
            else if (activeQuest && activeQuest.questId == serverData.questId) {
                this.tooltip.material.diffuseColor = new BABYLON.Color3(1, 1, 0);
            }
            else {
                this.tooltip.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
            }
            return this;
        };
        Quests.prototype.createTooltip = function (serverData, activeQuest) {
            var box1 = BABYLON.Mesh.CreateBox("Box1", 0.4, this.game.getScene());
            box1.parent = this.mesh;
            box1.position.y += 3;
            var materialBox = new BABYLON.StandardMaterial("texture1", this.game.getScene());
            box1.material = materialBox;
            if (this.game.sceneManager.octree) {
                this.game.sceneManager.octree.dynamicContent.push(box1);
            }
            var keys = [];
            keys.push({
                frame: 0,
                value: 0
            });
            keys.push({
                frame: 30,
                value: -2
            });
            var animationBox = new BABYLON.Animation("rotation", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE);
            animationBox.setKeys(keys);
            box1.animations = [];
            box1.animations.push(animationBox);
            this.box = box1;
            this.game.getScene().beginAnimation(box1, 0, 30, true);
            this.tooltip = box1;
            this.refreshTooltipColor(serverData, activeQuest);
        };
        return Quests;
    }());
    Factories.Quests = Quests;
})(Factories || (Factories = {}));
/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
var Factories;
(function (Factories) {
    var SkeletonBoss = /** @class */ (function (_super) {
        __extends(SkeletonBoss, _super);
        function SkeletonBoss(game, scene, assetsManager) {
            var _this = _super.call(this, game, scene, assetsManager) || this;
            _this.taskName = 'skeletonBoss';
            _this.dir = 'assets/Characters/Skeleton/skeletonBoss/';
            _this.fileName = 'skeletonBoss.babylon';
            return _this;
        }
        return SkeletonBoss;
    }(Factories.AbstractFactory));
    Factories.SkeletonBoss = SkeletonBoss;
    "";
})(Factories || (Factories = {}));
/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
var Factories;
(function (Factories) {
    var SkeletonWarrior = /** @class */ (function (_super) {
        __extends(SkeletonWarrior, _super);
        function SkeletonWarrior(game, scene, assetsManager) {
            var _this = _super.call(this, game, scene, assetsManager) || this;
            _this.taskName = 'skeletonWarrior';
            _this.dir = 'assets/Characters/Skeleton/skeletonWarrior/';
            _this.fileName = 'skeletonWarrior.babylon';
            return _this;
        }
        return SkeletonWarrior;
    }(Factories.AbstractFactory));
    Factories.SkeletonWarrior = SkeletonWarrior;
})(Factories || (Factories = {}));
/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
var Factories;
(function (Factories) {
    var Skeletons = /** @class */ (function (_super) {
        __extends(Skeletons, _super);
        function Skeletons(game, scene, assetsManager) {
            var _this = _super.call(this, game, scene, assetsManager) || this;
            _this.taskName = 'skeletons';
            _this.dir = 'assets/Characters/Skeleton/skeleton/';
            _this.fileName = 'skeleton.babylon';
            return _this;
        }
        return Skeletons;
    }(Factories.AbstractFactory));
    Factories.Skeletons = Skeletons;
})(Factories || (Factories = {}));
/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
var Factories;
(function (Factories) {
    var Worms = /** @class */ (function (_super) {
        __extends(Worms, _super);
        function Worms(game, scene, assetsManager) {
            var _this = _super.call(this, game, scene, assetsManager) || this;
            _this.taskName = 'factory.worm';
            _this.dir = 'assets/Characters/Worm/';
            _this.fileName = 'worm.babylon';
            return _this;
        }
        return Worms;
    }(Factories.AbstractFactory));
    Factories.Worms = Worms;
})(Factories || (Factories = {}));
/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
var Factories;
(function (Factories) {
    var Zombies = /** @class */ (function (_super) {
        __extends(Zombies, _super);
        function Zombies(game, scene, assetsManager) {
            var _this = _super.call(this, game, scene, assetsManager) || this;
            _this.taskName = 'zombie';
            _this.dir = 'assets/Characters/Zombie/';
            _this.fileName = 'Zombie.babylon';
            return _this;
        }
        return Zombies;
    }(Factories.AbstractFactory));
    Factories.Zombies = Zombies;
})(Factories || (Factories = {}));
/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
var Factories;
(function (Factories) {
    var Characters = /** @class */ (function (_super) {
        __extends(Characters, _super);
        function Characters(game, scene, assetsManager) {
            var _this = _super.call(this, game, scene, assetsManager) || this;
            _this.taskName = 'factory.warrior';
            _this.dir = 'assets/Characters/Warrior/';
            _this.fileName = 'Warrior.babylon';
            return _this;
        }
        return Characters;
    }(Factories.AbstractFactory));
    Factories.Characters = Characters;
})(Factories || (Factories = {}));
/// <reference path="../game.ts"/>
var EnvironmentCastle = /** @class */ (function () {
    function EnvironmentCastle(game, scene) {
        var self = this;
        this.fires = [];
        this.bushes = [];
        this.colliders = [];
        for (var i = 0; i < scene.lights.length; i++) {
            var light = scene.lights[i];
            light.intensity = (light.intensity / 3);
            light.range = 47;
        }
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                this.ground = sceneMesh;
            }
            else if (meshName.search("Fire") >= 0) {
                this.fires.push(sceneMesh);
            }
            else if (meshName.search("Tower.043") >= 0) {
            }
            else {
                sceneMesh.isPickable = false;
                this.colliders.push(sceneMesh);
            }
        }
        /////Freeze world matrix all static meshes
        //for (let i = 0; i < scene.meshes.length; i++) {
        //    scene.meshes[i].freezeWorldMatrix();
        //}
        ////fireplace
        if (this.fires.length) {
            this.fires.forEach(function (fire, key) {
                var fireSystem = new Particles.TorchFire(game, fire).particleSystem;
                fireSystem.start();
            });
        }
        ///portal to town
        var plane = scene.getMeshByName("Castle_exit");
        if (plane) {
            this.entrace = plane;
            plane.isPickable = false;
            var smokeSystem = new Particles.CastleExit(game, plane).particleSystem;
            smokeSystem.start();
            var listener = function listener() {
                game.player.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: plane
                }, function () {
                    game.changeScene(new Mountains());
                    return this;
                }));
                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }
        ///register colliders
        // for (let i = 0; i < this.colliders.length; i++) {
        //     let sceneMesh = this.colliders[i];
        //     Collisions.setCollider(scene, sceneMesh);
        // }
        //new BABYLON.Sound("Fire", "assets/sounds/forest_night.mp3", scene, null, {loop: true, autoplay: true});
        var planeWater = BABYLON.Mesh.CreateGround("waterMesh", 80, 30, 32, game.getScene(), false);
        planeWater.visibility = 0;
        planeWater.position.x = -110;
        planeWater.position.y = -3;
        planeWater.position.z = -4;
        //let fogParticleSystem = new Particles.Fog(game, planeWater);
        //fogParticleSystem.particleSystem.start();
    }
    EnvironmentCastle.prototype.enableDayAndNight = function (game, light) {
        light.intensity = 0;
        var keys = [];
        keys.push({
            frame: 0,
            value: 0
        });
        keys.push({
            frame: 80,
            value: 0
        });
        keys.push({
            frame: 100,
            value: 1
        });
        keys.push({
            frame: 180,
            value: 1
        });
        keys.push({
            frame: 200,
            value: 0
        });
        var animationBox = new BABYLON.Animation("mainLightIntensity", "intensity", 10, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        animationBox.setKeys(keys);
        light.animations = [];
        light.animations.push(animationBox);
        game.getScene().beginAnimation(light, 0, 200, true);
        return light;
    };
    ;
    return EnvironmentCastle;
}());
/// <reference path="../game.ts"/>
var EnvironmentForestHouse = /** @class */ (function () {
    function EnvironmentForestHouse(game, scene) {
        var self = this;
        this.colliders = [];
        var spsGround = [];
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh_1 = scene.meshes[i];
            var meshName_1 = scene.meshes[i]['name'];
            if (meshName_1.search("Ground") >= 0) {
                sceneMesh_1.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh_1.receiveShadows = true;
                this.ground = sceneMesh_1;
                var terrainMaterial = new BABYLON.TerrainMaterial("terrainMaterial", scene);
                terrainMaterial.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);
                terrainMaterial.specularPower = 64;
                terrainMaterial.mixTexture = new BABYLON.Texture("assets/scenes/Forest_house/stencil.png", scene);
                terrainMaterial.diffuseTexture1 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.png", scene);
                terrainMaterial.diffuseTexture2 = new BABYLON.Texture("assets/scenes/Forest_house/dirt.png", scene);
                terrainMaterial.diffuseTexture3 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.png", scene);
                terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 10;
                terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 10;
                terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 10;
                sceneMesh_1.material = terrainMaterial;
            }
            else if (meshName_1.search("Box_Cube") >= 0) {
                this.colliders.push(sceneMesh_1);
            }
            else if (meshName_1.search("particlesground") >= 0) {
                spsGround.push(sceneMesh_1);
            }
            else {
                sceneMesh_1.isPickable = false;
            }
        }
        //SPS Nature
        var spruce = game.factories['nature_grain'].createInstance('spruce.001', false);
        spruce.visibility = 0;
        var groundPlants = game.factories['nature_grain'].createInstance('ground_plants', false);
        groundPlants.visibility = 0;
        var fern = game.factories['nature_grain'].createInstance('fern', false);
        fern.visibility = 0;
        var stone = game.factories['nature_grain'].createInstance('stone', false);
        stone.visibility = 0;
        spsGround.forEach(function (parentSPS) {
            var spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, spruce, true);
            spsSpruce.buildSPS(100);
            var spsFern = new Particles.SolidParticleSystem.Nature(game, parentSPS, fern);
            spsFern.buildSPS(200);
            var spsPlants = new Particles.SolidParticleSystem.Nature(game, parentSPS, groundPlants);
            spsPlants.buildSPS(300);
            var spsStone = new Particles.SolidParticleSystem.Nature(game, parentSPS, stone, true);
            spsStone.buildSPS(40);
        });
        var spsToBlock = scene.getMeshByName("particle1");
        var spsSpruceBlock = new Particles.SolidParticleSystem.NatureBlock(game, spsToBlock, spruce);
        spsSpruceBlock.buildSPS(500);
        var spsPlantsBlock = new Particles.SolidParticleSystem.NatureBlock(game, spsToBlock, groundPlants);
        spsPlantsBlock.buildSPS(500);
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.4;
        light.position = new BABYLON.Vector3(0, 80, -210);
        light.direction = new BABYLON.Vector3(0.45, -0.45, 0.45);
        light.shadowMaxZ = 500;
        var shadowGenerator = new BABYLON.ShadowGenerator(2048, light);
        // shadowGenerator.useBlurExponentialShadowMap = true;
        // shadowGenerator.useExponentialShadowMap = true;
        shadowGenerator.usePoissonSampling = true;
        shadowGenerator.frustumEdgeFalloff = 1.0;
        shadowGenerator.useKernelBlur = true;
        shadowGenerator.blurKernel = 32;
        shadowGenerator.getShadowMap().refreshRate = BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE;
        light.autoUpdateExtends = false;
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Ground") >= 0) {
                continue;
            }
            shadowGenerator.getShadowMap().renderList.push(sceneMesh);
        }
        ///register colliders
        for (var i = 0; i < this.colliders.length; i++) {
            var sceneMeshCollider = this.colliders[i];
            Collisions.setCollider(scene, sceneMeshCollider);
        }
        // Freeze world matrix all static meshes
        for (var i = 0; i < scene.meshes.length; i++) {
            scene.meshes[i].freezeWorldMatrix();
        }
    }
    return EnvironmentForestHouse;
}());
/// <reference path="../game.ts"/>
var EnvironmentForestHouseStart = /** @class */ (function () {
    function EnvironmentForestHouseStart(game, scene) {
        var self = this;
        this.fires = [];
        this.bushes = [];
        this.colliders = [];
        for (var i = 0; i < scene.lights.length; i++) {
            var light = scene.lights[i];
            light.intensity = (light.intensity / 3);
            light.range = 47;
        }
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                this.ground = sceneMesh;
            }
            else if (meshName.search("Box_Cube") >= 0) {
                this.colliders.push(sceneMesh);
            }
            else {
                sceneMesh.isPickable = false;
            }
        }
        /////Freeze world matrix all static meshes
        for (var i = 0; i < scene.meshes.length; i++) {
            scene.meshes[i].freezeWorldMatrix();
        }
        ///register colliders
        for (var i = 0; i < this.colliders.length; i++) {
            var sceneMeshCollider = this.colliders[i];
            Collisions.setCollider(scene, sceneMeshCollider);
        }
    }
    return EnvironmentForestHouseStart;
}());
/// <reference path="../game.ts"/>
var EnvironmentForestHouseTomb = /** @class */ (function () {
    function EnvironmentForestHouseTomb(game, scene) {
        var self = this;
        this.colliders = [];
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
                sceneMesh.material.diffuseTexture.uScale = 1;
                sceneMesh.material.diffuseTexture.vScale = 1;
                this.ground = sceneMesh;
            }
            else if (meshName.search("Box_Cube") >= 0) {
                this.colliders.push(sceneMesh);
            }
            else {
                sceneMesh.isPickable = false;
                ///others
            }
        }
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.4;
        light.position = new BABYLON.Vector3(0, 80, -210);
        light.direction = new BABYLON.Vector3(0.45, -0.45, 0.45);
        ///register colliders
        for (var i = 0; i < this.colliders.length; i++) {
            var sceneMeshCollider = this.colliders[i];
            Collisions.setCollider(scene, sceneMeshCollider);
        }
        //Freeze world matrix all static meshes
        for (var i = 0; i < scene.meshes.length; i++) {
            scene.meshes[i].freezeWorldMatrix();
        }
    }
    return EnvironmentForestHouseTomb;
}());
/// <reference path="../game.ts"/>
var EnvironmentSelectCharacter = /** @class */ (function () {
    function EnvironmentSelectCharacter(game, scene) {
        ////LIGHT
        var light = game.getScene().lights[0];
        light.dispose();
        var fireplaceLight = new BABYLON.PointLight("fireplaceLight", new BABYLON.Vector3(0, 2.5, 0), scene);
        fireplaceLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
        fireplaceLight.range = 40;
        var intensityAnimation = new BABYLON.Animation("mainLightIntensity", "intensity", 50, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        intensityAnimation.setKeys([
            {
                frame: 0,
                value: 0.85
            },
            {
                frame: 5,
                value: 0.9
            },
            {
                frame: 10,
                value: 0.82
            }
        ]);
        var colorAnimation = new BABYLON.Animation("mainLightColor", "specular", 50, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        colorAnimation.setKeys([
            {
                frame: 20,
                value: new BABYLON.Color3(1, 1, 1)
            },
            {
                frame: 25,
                value: new BABYLON.Color3(1, 0, 1)
            },
            {
                frame: 30,
                value: new BABYLON.Color3(1, 1, 1)
            }
        ]);
        fireplaceLight.animations = [];
        fireplaceLight.animations.push(intensityAnimation);
        game.getScene().beginAnimation(fireplaceLight, 0, 10, true);
        var shadowGenerator = new BABYLON.ShadowGenerator(1024, fireplaceLight);
        shadowGenerator.getShadowMap().refreshRate = 0;
        this.shadowGenerator = shadowGenerator;
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Forest_ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
                sceneMesh.material.emissiveColor = new BABYLON.Vector3(0.05, 0.05, 0.05);
                continue;
            }
            shadowGenerator.getShadowMap().renderList.push(sceneMesh);
        }
        var cone = scene.getMeshByName("Fireplace");
        if (cone) {
            fireplaceLight.parent = cone;
            var smokeSystem = new Particles.FireplaceSmoke(game, cone).particleSystem;
            smokeSystem.start();
            var fireSystem = new Particles.FireplaceFire(game, cone).particleSystem;
            fireSystem.start();
            // let sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, { loop: true, autoplay: true });
            //  sfxFireplace.attachToMesh(cone);
        }
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            sceneMesh.freezeWorldMatrix();
        }
        // new BABYLON.Sound("Forest night", "assets/sounds/forest_night.mp3", scene, null, { loop: true, autoplay: true, volume: 0.5 });
        // new BABYLON.Sound("Wind", "assets/sounds/fx/wind.mp3", scene, null, { loop: true, autoplay: true, volume: 0.4 });
    }
    return EnvironmentSelectCharacter;
}());
/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../game.ts"/>
var GUI;
(function (GUI) {
    var Main = /** @class */ (function () {
        function Main(game, player) {
            this.game = game;
            this.player = player;
            this.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.main');
            this.playerBottomPanel = new GUI.PlayerBottomPanel(game);
            this.playerLogsPanel = new GUI.PlayerLogsPanel(game);
            this.playerLogsQuests = new GUI.PlayerQuestsPanel();
            this.playerQuestInformation = new GUI.PlayerQuestInformation();
            this.characterTopHp = new GUI.ShowHp();
            this
                .initInventory()
                .initAttributes()
                .initSkills()
                .initFullscreen()
                .initQuests()
                .initTeams();
        }
        Main.prototype.initInventory = function () {
            var self = this;
            this.inventory = new GUI.Inventory(this);
            var buttonPanel = new BABYLON.GUI.StackPanel();
            buttonPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            buttonPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            buttonPanel.width = 0.2;
            buttonPanel.isPointerBlocker = true;
            this.buttonpanel = buttonPanel;
            this.texture.addControl(buttonPanel);
            var button = BABYLON.GUI.Button.CreateSimpleButton("button.inventory", "Inventory");
            button.width = 1;
            button.height = "20px";
            button.color = "white";
            button.background = "black";
            button.isPointerBlocker = true;
            buttonPanel.addControl(button);
            button.onPointerUpObservable.add(function () {
                if (!self.inventory.opened) {
                    self.inventory.open();
                }
            });
            return this;
        };
        Main.prototype.initFullscreen = function () {
            var self = this;
            var button = BABYLON.GUI.Button.CreateSimpleButton("button.fullscreen", "Fullscreen");
            button.width = 1;
            button.height = "20px";
            button.color = "white";
            button.background = "black";
            button.isPointerBlocker = true;
            this.buttonpanel.addControl(button);
            button.onPointerUpObservable.add(function () {
                self.game.engine.switchFullscreen(false);
                // self.game.engine.resize();
            });
            return this;
        };
        Main.prototype.initQuests = function () {
            var self = this;
            this.playerQuests = new GUI.PlayerQuests(this);
            var button = BABYLON.GUI.Button.CreateSimpleButton("button.fullscreen", "Quests");
            button.width = 1;
            button.height = "20px";
            button.color = "white";
            button.background = "black";
            button.isPointerBlocker = true;
            this.buttonpanel.addControl(button);
            button.onPointerUpObservable.add(function () {
                if (!self.playerQuests.opened) {
                    self.playerQuests.open();
                }
            });
            return this;
        };
        Main.prototype.initAttributes = function () {
            var self = this;
            this.attributes = new GUI.Attributes(this);
            var button = BABYLON.GUI.Button.CreateSimpleButton("button.attributes", "Attributes");
            button.width = 1;
            button.height = "20px";
            button.color = "white";
            button.background = "black";
            this.buttonpanel.addControl(button);
            button.onPointerUpObservable.add(function () {
                if (!self.attributes.opened) {
                    self.attributes.open();
                }
            });
            return this;
        };
        Main.prototype.initSkills = function () {
            var self = this;
            this.skills = new GUI.Skills(this);
            var button = BABYLON.GUI.Button.CreateSimpleButton("button.attributes", "Skills");
            button.width = 1;
            button.height = "20px";
            button.color = "white";
            button.background = "black";
            this.buttonpanel.addControl(button);
            button.onPointerUpObservable.add(function () {
                if (!self.skills.opened) {
                    self.skills.open();
                }
            });
            return this;
        };
        Main.prototype.initTeams = function () {
            var self = this;
            this.teams = new GUI.Rooms(this);
            var button = BABYLON.GUI.Button.CreateSimpleButton("button.attributes", "Teams");
            button.width = 1;
            button.height = "20px";
            button.color = "white";
            button.background = "black";
            this.buttonpanel.addControl(button);
            button.onPointerUpObservable.add(function () {
                if (!self.teams.opened) {
                    self.teams.open();
                }
            });
            return this;
        };
        return Main;
    }());
    GUI.Main = Main;
})(GUI || (GUI = {}));
/// <reference path="../game.ts"/>
var GUI;
(function (GUI) {
    var PlayerBottomPanel = /** @class */ (function () {
        function PlayerBottomPanel(game) {
            var self = this;
            var listener = function listener() {
                self.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("gameUI");
                var characterBottomPanel = new BABYLON.GUI.StackPanel();
                characterBottomPanel.width = "50%";
                characterBottomPanel.top = -10;
                characterBottomPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
                self.texture.addControl(characterBottomPanel);
                self.guiPanel = characterBottomPanel;
                var hpSlider = new BABYLON.GUI.Slider();
                hpSlider.minimum = 0;
                hpSlider.maximum = game.player.statistics.hpMax;
                hpSlider.value = game.player.statistics.hp;
                hpSlider.width = "100%";
                hpSlider.height = "10px";
                hpSlider.thumbWidth = 0;
                hpSlider.barOffset = 0;
                hpSlider.background = 'black';
                hpSlider.color = "red";
                hpSlider.borderColor = 'black';
                self.hpBar = hpSlider;
                var expSlider = new BABYLON.GUI.Slider();
                expSlider.minimum = 0;
                expSlider.maximum = 100;
                expSlider.value = game.player.experiencePercentages;
                expSlider.width = "100%";
                expSlider.height = "20px";
                expSlider.thumbWidth = 0;
                expSlider.barOffset = 0;
                expSlider.background = 'black';
                expSlider.color = "blue";
                expSlider.borderColor = 'yellow';
                self.expBar = expSlider;
                characterBottomPanel.addControl(hpSlider);
                characterBottomPanel.addControl(expSlider);
                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }
        PlayerBottomPanel.prototype.setHpOnPanel = function (hp) {
            this.hpBar.value = hp;
        };
        return PlayerBottomPanel;
    }());
    GUI.PlayerBottomPanel = PlayerBottomPanel;
})(GUI || (GUI = {}));
/// <reference path="../game.ts"/>
var GUI;
(function (GUI) {
    var PlayerLogsPanel = /** @class */ (function () {
        function PlayerLogsPanel(game) {
            this.texts = [];
            var self = this;
            var listener = function listener() {
                self.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("gameLogsUi");
                var characterLogsPanel = new BABYLON.GUI.StackPanel();
                characterLogsPanel.width = "15%";
                characterLogsPanel.left = "1%";
                characterLogsPanel.top = "-5%";
                characterLogsPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                characterLogsPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
                self.texture.addControl(characterLogsPanel);
                self.guiPanel = characterLogsPanel;
                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }
        /**
         * @param message
         * @param color
         */
        PlayerLogsPanel.prototype.addText = function (message, color) {
            if (color === void 0) { color = 'white'; }
            var text = new BABYLON.GUI.TextBlock();
            text.text = message;
            text.color = color;
            text.textWrapping = true;
            text.height = "25px";
            text.width = "100%";
            text.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            text.fontSize = 14;
            this.guiPanel.addControl(text);
            this.texts.push(text);
            this.removeOldText();
        };
        PlayerLogsPanel.prototype.removeOldText = function () {
            if (this.texts.length >= GUI.PlayerLogsPanel.TEXT_COUNT) {
                var textToDispose = this.texts.shift();
                this.guiPanel.removeControl(textToDispose);
                textToDispose = null;
            }
            return this;
        };
        PlayerLogsPanel.TEXT_COUNT = 6;
        return PlayerLogsPanel;
    }());
    GUI.PlayerLogsPanel = PlayerLogsPanel;
})(GUI || (GUI = {}));
/// <reference path="../game.ts"/>
var GUI;
(function (GUI) {
    var PlayerQuestInformation = /** @class */ (function () {
        function PlayerQuestInformation() {
            this.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("PlayerQuestInformation");
        }
        PlayerQuestInformation.prototype.addQuest = function (questData) {
            var self = this;
            if (self.guiPanel) {
                self.guiPanel.dispose();
            }
            var playerQuestsInformationPanel = new BABYLON.GUI.StackPanel();
            playerQuestsInformationPanel.width = "25%";
            playerQuestsInformationPanel.top = 40;
            playerQuestsInformationPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            playerQuestsInformationPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            self.texture.addControl(playerQuestsInformationPanel);
            self.guiPanel = playerQuestsInformationPanel;
            var title = new BABYLON.GUI.TextBlock();
            title.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            title.text = questData.title;
            title.top = "0%";
            title.color = "orange";
            title.fontSize = 18;
            title.resizeToFit = true;
            this.guiPanel.addControl(title);
            questData.chapters[questData.actualChapter].requirements.forEach(function (requirement) {
                var requirementDescription = new BABYLON.GUI.TextBlock();
                requirementDescription.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                requirementDescription.text = requirement.name;
                requirementDescription.resizeToFit = true;
                requirementDescription.color = "white";
                requirementDescription.top = "5%";
                requirementDescription.fontSize = 14;
                self.guiPanel.addControl(requirementDescription);
            });
        };
        return PlayerQuestInformation;
    }());
    GUI.PlayerQuestInformation = PlayerQuestInformation;
})(GUI || (GUI = {}));
/// <reference path="../game.ts"/>
var GUI;
(function (GUI) {
    var PlayerQuestsPanel = /** @class */ (function () {
        function PlayerQuestsPanel() {
            this.texts = [];
            var self = this;
            this.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("playersQuestsLogsUi");
            var playerQuestsLogsPanel = new BABYLON.GUI.StackPanel();
            playerQuestsLogsPanel.width = "25%";
            playerQuestsLogsPanel.top = 40;
            playerQuestsLogsPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            self.texture.addControl(playerQuestsLogsPanel);
            self.guiPanel = playerQuestsLogsPanel;
        }
        /**
         * @param message
         * @param color
         */
        PlayerQuestsPanel.prototype.addText = function (message, color) {
            if (color === void 0) { color = 'white'; }
            var text = new BABYLON.GUI.TextBlock();
            text.text = message;
            text.color = color;
            text.textWrapping = true;
            text.height = "25px";
            text.width = "100%";
            text.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            text.fontSize = 14;
            this.guiPanel.addControl(text);
            this.texts.push(text);
            var self = this;
            setTimeout(function () {
                var textToDispose = self.texts.shift();
                self.guiPanel.removeControl(textToDispose);
            }, 4000);
        };
        return PlayerQuestsPanel;
    }());
    GUI.PlayerQuestsPanel = PlayerQuestsPanel;
})(GUI || (GUI = {}));
/// <reference path="../game.ts"/>
/// <reference path="../characters/AbstractCharacter.ts"/>
var GUI;
(function (GUI) {
    var ShowHp = /** @class */ (function () {
        function ShowHp() {
            this.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("characterShowHp");
        }
        ShowHp.prototype.showHpCharacter = function (character) {
            if (this.guiPanel) {
                this.texture.removeControl(this.guiPanel);
            }
            this.character = character;
            var characterPanel = new BABYLON.GUI.StackPanel();
            characterPanel.width = "25%";
            characterPanel.top = 10;
            characterPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            this.guiPanel = characterPanel;
            this.texture.addControl(characterPanel);
            var textBlock = new BABYLON.GUI.TextBlock("gui.panelhp.name", character.name);
            textBlock.color = 'white';
            textBlock.height = "20px";
            textBlock.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            var hpSlider = new BABYLON.GUI.Slider();
            hpSlider.minimum = 0;
            hpSlider.maximum = character.statistics.hpMax;
            hpSlider.value = character.statistics.hp;
            hpSlider.width = "100%";
            hpSlider.height = "10px";
            hpSlider.thumbWidth = 0;
            hpSlider.barOffset = 0;
            hpSlider.background = 'black';
            hpSlider.color = "red";
            hpSlider.borderColor = 'black';
            this.hpBar = hpSlider;
            characterPanel.addControl(textBlock);
            characterPanel.addControl(hpSlider);
        };
        ShowHp.prototype.refreshPanel = function () {
            if (this.character) {
                this.hpBar.value = this.character.statistics.hp;
            }
        };
        ShowHp.prototype.hideHpBar = function () {
            if (this.guiPanel) {
                this.texture.removeControl(this.guiPanel);
            }
        };
        return ShowHp;
    }());
    GUI.ShowHp = ShowHp;
})(GUI || (GUI = {}));
/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../game.ts"/>
var Particles;
(function (Particles) {
    var AbstractParticle = /** @class */ (function () {
        function AbstractParticle(game, emitter) {
            this.game = game;
            this.emitter = emitter;
            this.initParticleSystem();
        }
        return AbstractParticle;
    }());
    Particles.AbstractParticle = AbstractParticle;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var Blood = /** @class */ (function (_super) {
        __extends(Blood, _super);
        function Blood() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Blood.prototype.initParticleSystem = function () {
            var particleSystem = new BABYLON.GPUParticleSystem("particle1s", { capacity: 100 }, this.game.getScene());
            particleSystem.particleTexture = new BABYLON.Texture("assets/Smoke3.png", this.game.getScene());
            particleSystem.emitter = this.emitter;
            particleSystem.minEmitBox = new BABYLON.Vector3(0, this.emitter.geometry.extend.maximum.y * 0.7, 0); // Starting all from
            particleSystem.maxEmitBox = new BABYLON.Vector3(0, this.emitter.geometry.extend.maximum.y * 0.7, 0); // To...
            particleSystem.color1 = new BABYLON.Color4(1, 0, 0, 1);
            particleSystem.color2 = new BABYLON.Color4(1, 0, 0, 0.1);
            particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 1);
            particleSystem.minSize = 0.3;
            particleSystem.maxSize = 0.5;
            particleSystem.minLifeTime = 1;
            particleSystem.maxLifeTime = 1;
            particleSystem.emitRate = 100;
            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
            particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
            particleSystem.direction1 = new BABYLON.Vector3(-1, 8, -1);
            particleSystem.direction2 = new BABYLON.Vector3(4, 8, 4);
            //particleSystem.targetStopDuration = 0.6;
            particleSystem.minAngularSpeed = -10.0;
            particleSystem.maxAngularSpeed = 10.0;
            particleSystem.minEmitPower = 0.5;
            particleSystem.maxEmitPower = 1;
            particleSystem.updateSpeed = 0.02;
            this.particleSystem = particleSystem;
        };
        return Blood;
    }(Particles.AbstractParticle));
    Particles.Blood = Blood;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var CaveEntrace = /** @class */ (function (_super) {
        __extends(CaveEntrace, _super);
        function CaveEntrace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CaveEntrace.prototype.initParticleSystem = function () {
            var particleSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 150 }, this.game.getScene());
            particleSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            particleSystem.emitter = this.emitter; // the starting object, the emitter
            particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, -1); // Starting all from
            particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, -0.2); // To...
            particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
            particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
            particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
            particleSystem.minSize = 0.1;
            particleSystem.maxSize = 0.5;
            particleSystem.minLifeTime = 0.3;
            particleSystem.maxLifeTime = 1;
            particleSystem.emitRate = 150;
            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            particleSystem.gravity = new BABYLON.Vector3(0, 9.81, 0);
            particleSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
            particleSystem.direction2 = new BABYLON.Vector3(0, 0.25, 0);
            particleSystem.minAngularSpeed = 0;
            particleSystem.maxAngularSpeed = Math.PI;
            particleSystem.minEmitPower = 0.5;
            particleSystem.maxEmitPower = 1.5;
            particleSystem.updateSpeed = 0.004;
            this.particleSystem = particleSystem;
        };
        return CaveEntrace;
    }(Particles.AbstractParticle));
    Particles.CaveEntrace = CaveEntrace;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var DroppedItem = /** @class */ (function (_super) {
        __extends(DroppedItem, _super);
        function DroppedItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DroppedItem.prototype.initParticleSystem = function () {
            var fireSystem = new BABYLON.GPUParticleSystem("DroppedItemParticles", { capacity: 50 }, this.game.getScene());
            fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            fireSystem.emitter = this.emitter;
            fireSystem.minEmitBox = new BABYLON.Vector3(-1, 0, -1);
            fireSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 1);
            fireSystem.color1 = new BABYLON.Color4(0, 0.5, 0, 1.0);
            fireSystem.color2 = new BABYLON.Color4(0, 0.5, 0, 1.0);
            fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
            fireSystem.minSize = 0.2;
            fireSystem.maxSize = 0.7;
            fireSystem.minLifeTime = 0.2;
            fireSystem.maxLifeTime = 0.4;
            fireSystem.emitRate = 300;
            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction1 = new BABYLON.Vector3(0, 2, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 2, 0);
            fireSystem.minAngularSpeed = -10;
            fireSystem.maxAngularSpeed = Math.PI;
            fireSystem.minEmitPower = 1;
            fireSystem.maxEmitPower = 2;
            fireSystem.updateSpeed = 0.007;
            this.particleSystem = fireSystem;
        };
        return DroppedItem;
    }(Particles.AbstractParticle));
    Particles.DroppedItem = DroppedItem;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var FireplaceFire = /** @class */ (function (_super) {
        __extends(FireplaceFire, _super);
        function FireplaceFire() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FireplaceFire.prototype.initParticleSystem = function () {
            var fireSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 50 }, this.game.getScene());
            fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            fireSystem.emitter = this.emitter;
            fireSystem.minEmitBox = new BABYLON.Vector3(0.5, 0, 0.5);
            fireSystem.maxEmitBox = new BABYLON.Vector3(-0.5, 0, -0.5);
            fireSystem.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
            fireSystem.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
            fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
            fireSystem.minSize = 0.2;
            fireSystem.maxSize = 0.7;
            fireSystem.minLifeTime = 0.2;
            fireSystem.maxLifeTime = 0.4;
            fireSystem.emitRate = 150;
            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction1 = new BABYLON.Vector3(0, 2, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 2, 0);
            fireSystem.minAngularSpeed = -10;
            fireSystem.maxAngularSpeed = Math.PI;
            fireSystem.minEmitPower = 1;
            fireSystem.maxEmitPower = 3;
            fireSystem.updateSpeed = 0.007;
            this.particleSystem = fireSystem;
        };
        return FireplaceFire;
    }(Particles.AbstractParticle));
    Particles.FireplaceFire = FireplaceFire;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var FireplaceSmoke = /** @class */ (function (_super) {
        __extends(FireplaceSmoke, _super);
        function FireplaceSmoke() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FireplaceSmoke.prototype.initParticleSystem = function () {
            var smokeSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 100 }, this.game.getScene());
            smokeSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            smokeSystem.emitter = this.emitter;
            smokeSystem.minEmitBox = new BABYLON.Vector3(0.5, 1.5, 0.5);
            smokeSystem.maxEmitBox = new BABYLON.Vector3(-0.5, 1.5, -0.5);
            smokeSystem.color1 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
            smokeSystem.color2 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
            smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
            smokeSystem.minSize = 0.3;
            smokeSystem.maxSize = 1;
            smokeSystem.minLifeTime = 0.3;
            smokeSystem.maxLifeTime = 0.6;
            smokeSystem.emitRate = 100;
            smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            smokeSystem.direction1 = new BABYLON.Vector3(-1.5, 8, -1.5);
            smokeSystem.direction2 = new BABYLON.Vector3(1.5, 8, 1.5);
            smokeSystem.minAngularSpeed = 50;
            smokeSystem.maxAngularSpeed = Math.PI;
            smokeSystem.minEmitPower = 0.5;
            smokeSystem.maxEmitPower = 1.5;
            smokeSystem.updateSpeed = 0.005;
            this.particleSystem = smokeSystem;
        };
        return FireplaceSmoke;
    }(Particles.AbstractParticle));
    Particles.FireplaceSmoke = FireplaceSmoke;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var Fog = /** @class */ (function (_super) {
        __extends(Fog, _super);
        function Fog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fog.prototype.initParticleSystem = function () {
            var fog = new BABYLON.ParticleSystem("particles", 2000, this.game.getScene());
            fog.particleTexture = new BABYLON.Texture("assets/Smoke3.png", this.game.getScene());
            fog.emitter = this.emitter; // the starting object, the emitter
            fog.minEmitBox = new BABYLON.Vector3(-25, 1, -50); // Starting all from
            fog.maxEmitBox = new BABYLON.Vector3(25, -2, 50); // To...
            fog.color1 = new BABYLON.Color4(0.9, 0.9, 0.9, 0.1);
            fog.color2 = new BABYLON.Color4(1, 1, 1, 0.15);
            fog.colorDead = new BABYLON.Color4(0.9, 0.9, 0.9, 0.1);
            // Big particles === less particles.
            fog.minSize = 8.0;
            fog.maxSize = 12.0;
            // Different life spans to avoid the entire fog dying out at the same time.
            fog.minLifeTime = 100;
            fog.maxLifeTime = 250;
            // High emit rate to spawn the fog fast.
            fog.emitRate = 10000;
            // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
            fog.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
            fog.gravity = new BABYLON.Vector3(0, 0, 0);
            fog.direction1 = new BABYLON.Vector3(-.1, 0, -.1);
            fog.direction2 = new BABYLON.Vector3(.1, 0, .1);
            fog.minAngularSpeed = -1.5;
            fog.maxAngularSpeed = 1.5;
            fog.minEmitPower = .5;
            fog.maxEmitPower = 1;
            // Low updateSpeed gives a more natural look and feel.
            fog.updateSpeed = 0.0025;
            this.particleSystem = fog;
        };
        return Fog;
    }(Particles.AbstractParticle));
    Particles.Fog = Fog;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var Gateway = /** @class */ (function (_super) {
        __extends(Gateway, _super);
        function Gateway(game, emitter, isActive) {
            var _this = this;
            _this.isActive = isActive;
            _this = _super.call(this, game, emitter) || this;
            return _this;
        }
        Gateway.prototype.initParticleSystem = function () {
            var particleSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 150 }, this.game.getScene());
            particleSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            particleSystem.emitter = this.emitter; // the starting object, the emitter
            particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, -1); // Starting all from
            particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 1); // To...
            if (this.isActive) {
                particleSystem.color1 = new BABYLON.Color3(0.7, 0.8, 1.0);
                particleSystem.color2 = new BABYLON.Color3(0.2, 0.5, 1.0);
            }
            else {
                particleSystem.color1 = new BABYLON.Color3(1, 0, 0.0);
                particleSystem.color2 = new BABYLON.Color3(0.5, 0, 0.0);
            }
            particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
            particleSystem.minSize = 0.1;
            particleSystem.maxSize = 0.5;
            particleSystem.minLifeTime = 0.3;
            particleSystem.maxLifeTime = 1;
            particleSystem.emitRate = 500;
            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            particleSystem.gravity = new BABYLON.Vector3(0, 9.81, 0);
            particleSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
            particleSystem.direction2 = new BABYLON.Vector3(0, 0.25, 0);
            particleSystem.minAngularSpeed = 0;
            particleSystem.maxAngularSpeed = Math.PI;
            particleSystem.minEmitPower = 0.5;
            particleSystem.maxEmitPower = 1.5;
            particleSystem.updateSpeed = 0.004;
            this.particleSystem = particleSystem;
        };
        return Gateway;
    }(Particles.AbstractParticle));
    Particles.Gateway = Gateway;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var GrainGenerator = /** @class */ (function () {
        function GrainGenerator() {
        }
        GrainGenerator.prototype.generate = function (mainGrain, instances, offsetXMax, offsetZMax, animationName) {
            if (instances === void 0) { instances = 1000; }
            if (offsetXMax === void 0) { offsetXMax = 60; }
            if (offsetZMax === void 0) { offsetZMax = 10; }
            if (animationName === void 0) { animationName = 'ArmatureAction'; }
            //mainGrain.skeleton.beginAnimation(animationName, true);
            var meshesList = [];
            for (var i = 0; i < instances; i++) {
                var offsetX = (Math.random() - 0.5) * offsetXMax;
                var offsetZ = (Math.random() - 0.5) * offsetZMax;
                var instance = mainGrain.clone("grainGenerator_" + i, null, true);
                instance.parent = mainGrain;
                instance.position.x = offsetX;
                instance.position.z = offsetZ;
                meshesList.push(instance);
            }
            BABYLON.Mesh.MergeMeshes(meshesList);
            return this;
        };
        return GrainGenerator;
    }());
    Particles.GrainGenerator = GrainGenerator;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var HouseExit = /** @class */ (function (_super) {
        __extends(HouseExit, _super);
        function HouseExit() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HouseExit.prototype.initParticleSystem = function () {
            var particleSystem = new BABYLON.GPUParticleSystem("castleExit", { capacity: 500 }, this.game.getScene());
            particleSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            particleSystem.emitter = this.emitter; // the starting object, the emitter
            particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, -1); // Starting all from
            particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 1); // To...
            particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
            particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
            particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
            particleSystem.minSize = 0.1;
            particleSystem.maxSize = 0.5;
            particleSystem.minLifeTime = 0.3;
            particleSystem.maxLifeTime = 1;
            particleSystem.emitRate = 500;
            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            particleSystem.gravity = new BABYLON.Vector3(0, 9.81, 0);
            particleSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
            particleSystem.direction2 = new BABYLON.Vector3(0, 0.25, 0);
            particleSystem.minAngularSpeed = 0;
            particleSystem.maxAngularSpeed = Math.PI;
            particleSystem.minEmitPower = 0.5;
            particleSystem.maxEmitPower = 1.5;
            particleSystem.updateSpeed = 0.004;
            this.particleSystem = particleSystem;
        };
        return HouseExit;
    }(Particles.AbstractParticle));
    Particles.HouseExit = HouseExit;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var TorchFire = /** @class */ (function (_super) {
        __extends(TorchFire, _super);
        function TorchFire() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TorchFire.prototype.initParticleSystem = function () {
            var fireSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 20 }, this.game.getScene());
            fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            fireSystem.emitter = this.emitter;
            fireSystem.minEmitBox = new BABYLON.Vector3(1, 0, 1);
            fireSystem.maxEmitBox = new BABYLON.Vector3(-1, 0, -1);
            fireSystem.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
            fireSystem.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
            fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
            fireSystem.minSize = 0.4;
            fireSystem.maxSize = 1;
            fireSystem.minLifeTime = 0.2;
            fireSystem.maxLifeTime = 0.8;
            fireSystem.emitRate = 20;
            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction1 = new BABYLON.Vector3(0, 4, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 10, 0);
            fireSystem.minAngularSpeed = -10;
            fireSystem.maxAngularSpeed = Math.PI;
            fireSystem.minEmitPower = 1;
            fireSystem.maxEmitPower = 3;
            fireSystem.updateSpeed = 0.007;
            this.particleSystem = fireSystem;
        };
        return TorchFire;
    }(Particles.AbstractParticle));
    Particles.TorchFire = TorchFire;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var WalkSmoke = /** @class */ (function (_super) {
        __extends(WalkSmoke, _super);
        function WalkSmoke() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WalkSmoke.prototype.initParticleSystem = function () {
            var smokeSystem = new BABYLON.ParticleSystem("particles", 10, this.game.getScene());
            smokeSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            smokeSystem.emitter = this.emitter;
            smokeSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0.8);
            smokeSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0.8);
            smokeSystem.color1 = new BABYLON.Color4(0.2, 0.2, 0.1, 1.0);
            smokeSystem.color2 = new BABYLON.Color4(0.2, 0.2, 0.1, 1.0);
            smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
            smokeSystem.minSize = 0.3;
            smokeSystem.maxSize = 1.5;
            smokeSystem.minLifeTime = 0.15;
            smokeSystem.maxLifeTime = 0.15;
            smokeSystem.emitRate = 50;
            smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            smokeSystem.direction1 = new BABYLON.Vector3(0, 4, 0);
            smokeSystem.direction2 = new BABYLON.Vector3(0, 4, 0);
            smokeSystem.minAngularSpeed = 0;
            smokeSystem.maxAngularSpeed = Math.PI;
            smokeSystem.minEmitPower = 1;
            smokeSystem.maxEmitPower = 1;
            smokeSystem.updateSpeed = 0.004;
            this.particleSystem = smokeSystem;
        };
        return WalkSmoke;
    }(Particles.AbstractParticle));
    Particles.WalkSmoke = WalkSmoke;
})(Particles || (Particles = {}));
var Quests;
(function (Quests) {
    var Awards;
    (function (Awards) {
        var AbstractAward = /** @class */ (function () {
            function AbstractAward() {
            }
            AbstractAward.AWARD_ID = 0;
            return AbstractAward;
        }());
        Awards.AbstractAward = AbstractAward;
    })(Awards = Quests.Awards || (Quests.Awards = {}));
})(Quests || (Quests = {}));
var Quests;
(function (Quests) {
    var Requirements;
    (function (Requirements) {
        var AbstractRequirement = /** @class */ (function () {
            function AbstractRequirement() {
            }
            AbstractRequirement.REQUIREMENT_ID = 0;
            return AbstractRequirement;
        }());
        Requirements.AbstractRequirement = AbstractRequirement;
    })(Requirements = Quests.Requirements || (Quests.Requirements = {}));
})(Quests || (Quests = {}));
/// <reference path="awards/AbstractAward.ts"/>
/// <reference path="requirements/AbstractRequirement.ts"/>
var Quests;
(function (Quests) {
    var AbstractQuest = /** @class */ (function () {
        function AbstractQuest(game) {
            this.game = game;
            this.awards = [];
            this.requirements = [];
            this.hasRequrementsFinished = false;
        }
        AbstractQuest.prototype.setAwards = function (awards) {
            this.awards = awards;
        };
        AbstractQuest.prototype.setRequirements = function (requirements) {
            this.requirements = requirements;
        };
        AbstractQuest.QUEST_ID = 0;
        return AbstractQuest;
    }());
    Quests.AbstractQuest = AbstractQuest;
})(Quests || (Quests = {}));
var Quests;
(function (Quests) {
    var QuestManager = /** @class */ (function () {
        function QuestManager(game) {
            this.game = game;
        }
        /**
         * @param questData
         */
        QuestManager.prototype.transformQuestDatabaseDataToObject = function (questData) {
            var awards = questData.awards;
            var requirements = questData.requirements;
            var questId = questData.questId;
            var quest = this.getQuest(questId);
            quest.setAwards(awards);
            return quest;
        };
        // TODO: Change from server
        QuestManager.prototype.getAwards = function (databaseAwards) {
            var awards = [];
            var itemManager = new Items.ItemManager(this.game);
            databaseAwards.forEach(function (award, key) {
                var award;
                switch (award.awardId) {
                    case Quests.Awards.Item.AWARD_ID:
                        var item = itemManager.getItemUsingId(award.value);
                        award = new Quests.Awards.Item(item);
                }
                awards.push(award);
            });
            return awards;
        };
        //protected getRequrements(databaseRequrements:Array) {
        //    let awards = [];
        //    databaseRequrements.forEach(function (requirement, key) {
        //        let award;
        //
        //        switch (requirement.requirementId) {
        //            case Quests.Requirements.Monster.REQUIREMENT_ID:
        //                let monster = new Worm();
        //                award = new Quests.Requirements.Monster(item, requirement.value);
        //        }
        //        awards.push(award);
        //    });
        //
        //    return awards;
        //}
        /**
         *
         * @param id
         * @returns Quests.AbstractQuest
         */
        QuestManager.prototype.getQuest = function (id) {
            var game = this.game;
            var quest = null;
            switch (id) {
                case Quests.KillWorms.QUEST_ID:
                    quest = new Quests.KillWorms(game);
                    break;
            }
            return quest;
        };
        /**
         * @param questId
         * @returns {null|Quests.AbstractQuest}
         */
        QuestManager.prototype.getQuestFromServerUsingQuestId = function (questId) {
            var quest = null;
            this.game.quests.forEach(function (gameQuest, key) {
                if (questId == gameQuest.getQuestId()) {
                    quest = gameQuest;
                }
            });
            return quest;
        };
        return QuestManager;
    }());
    Quests.QuestManager = QuestManager;
})(Quests || (Quests = {}));
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>
var Castle = /** @class */ (function (_super) {
    __extends(Castle, _super);
    function Castle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Castle.prototype.initScene = function (game) {
        var self = this;
        game.sceneManager = this;
        BABYLON.SceneLoader.Load("assets/scenes/Castle/", "Castle1.1.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .defaultPipeline(scene);
            scene.debugLayer.show({
                initialTab: 2
            });
            scene.actionManager = new BABYLON.ActionManager(scene);
            var assetsManager = new BABYLON.AssetsManager(scene);
            var sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;
            scene.executeWhenReady(function () {
                self.environment = new EnvironmentCastle(game, scene);
                self.initFactories(scene, assetsManager);
                assetsManager.onFinish = function (tasks) {
                    game.client.socket.emit('changeScenePre', {
                        sceneType: Castle.TYPE
                    });
                };
                assetsManager.load();
                var listener = function listener() {
                    new NPC.Guard(game, new BABYLON.Vector3(-82, 0, 4), new BABYLON.Vector3(0, 0.74, 0));
                    new NPC.Guard(game, new BABYLON.Vector3(-82, 0, -12), new BABYLON.Vector3(0, -4.3, 0));
                    new NPC.Trader(game, new BABYLON.Vector3(9.03, 0, 27.80), new BABYLON.Vector3(0, 0.7, 0));
                    new NPC.BigWarrior(game, new BABYLON.Vector3(14, 0, -3.3), new BABYLON.Vector3(0, 1.54, 0));
                    game.controller.registerControls(scene);
                    game.client.socket.emit('changeScenePost', {
                        sceneType: Castle.TYPE
                    });
                    game.client.socket.emit('getQuests');
                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            });
        });
    };
    Castle.prototype.setFog = function (scene) {
        scene.clearColor = new BABYLON.Color3(0, 0, 0);
        scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
        scene.fogColor = new BABYLON.Color3(0, 0, 0);
        scene.fogDensity = 1;
        //Only if LINEAR
        scene.fogStart = 80;
        scene.fogEnd = 95;
        return this;
    };
    Castle.prototype.getType = function () {
        return Castle.TYPE;
    };
    Castle.TYPE = 0;
    return Castle;
}(Scene));
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>
var ForestHouse = /** @class */ (function (_super) {
    __extends(ForestHouse, _super);
    function ForestHouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ForestHouse.prototype.initScene = function (game) {
        var self = this;
        game.sceneManager = this;
        BABYLON.SceneLoader.Load("assets/scenes/Forest_house/", "Forest_house.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .defaultPipeline(scene)
                .executeWhenReady(function () {
                self.environment = new EnvironmentForestHouse(game, scene);
            }, null);
        });
    };
    ForestHouse.TYPE = 2;
    return ForestHouse;
}(Scene));
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>
var ForestHouseStart = /** @class */ (function (_super) {
    __extends(ForestHouseStart, _super);
    function ForestHouseStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ForestHouseStart.prototype.initScene = function (game) {
        var self = this;
        game.sceneManager = this;
        BABYLON.SceneLoader.Load("assets/scenes/forestStartHouse/", "forestHouseStart.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .defaultPipeline(scene)
                .executeWhenReady(function () {
                new EnvironmentForestHouseStart(game, scene);
            }, null);
        });
    };
    ForestHouseStart.TYPE = 1;
    return ForestHouseStart;
}(Scene));
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>
var ForestHouseTomb = /** @class */ (function (_super) {
    __extends(ForestHouseTomb, _super);
    function ForestHouseTomb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ForestHouseTomb.prototype.initScene = function (game) {
        var self = this;
        game.sceneManager = this;
        BABYLON.SceneLoader.Load("assets/scenes/Forest_House_Tomb/", "Forest_House_Tomb.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .defaultPipeline(scene)
                .executeWhenReady(function () {
                self.environment = new EnvironmentForestHouseTomb(game, scene);
                //
                // let item = new Items.Item(game, {
                //     name: 'LongSword',
                //     image: 'sword',
                //     type: 1,
                //     statistics: {},
                //     meshName: 'swordLong',
                // });
                // Items.DroppedItem.showItem(game, item, {x: 2, z:-3}, 0);
                //
                // let item = new Items.Item(game, {
                //     name: 'shieldWoodenSmall',
                //     image: 'shieldWoodenSmall',
                //     type: 1,
                //     statistics: {},
                //     meshName: 'shieldWoodenSmall',
                // });
                // Items.DroppedItem.showItem(game, item, {x: 4, z:-7}, 0);
            }, null);
        });
    };
    ForestHouseTomb.TYPE = 3;
    return ForestHouseTomb;
}(Scene));
/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../../babylon/ts/babylon.gui.d.ts"/>
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../objects/characters.ts"/>
/// <reference path="../objects/items.ts"/>
/// <reference path="../objects/environment.ts"/>
var MainMenu = /** @class */ (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu(game) {
        var _this = _super.call(this, game) || this;
        var scene = new BABYLON.Scene(game.engine);
        scene.clearColor = new BABYLON.Color3(0, 0, 0);
        var camera = new BABYLON.ArcRotateCamera("Camera", -1, 0.8, 100, BABYLON.Vector3.Zero(), scene);
        var background = new BABYLON.Layer("back", "assets/logo.png", scene);
        background.isBackground = true;
        background.texture.level = 0;
        background.texture.wAng = 0;
        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        var buttonStart = BABYLON.GUI.Button.CreateSimpleButton("buttonStart", "Start game");
        buttonStart.width = "250px";
        buttonStart.height = "40px";
        buttonStart.color = "white";
        buttonStart.cornerRadius = 20;
        buttonStart.top = 150;
        buttonStart.background = "orange";
        buttonStart.zIndex = 1;
        buttonStart.onPointerUpObservable.add(function () {
            new Simple(game);
            game.activeScene = 1;
        });
        advancedTexture.addControl(buttonStart);
        var buttonOptions = BABYLON.GUI.Button.CreateSimpleButton("buttonOptions", "Options");
        buttonOptions.width = "250px";
        buttonOptions.height = "40px";
        buttonOptions.color = "white";
        buttonOptions.cornerRadius = 20;
        buttonOptions.top = 200;
        buttonOptions.background = "orange";
        buttonOptions.zIndex = 1;
        buttonOptions.onPointerUpObservable.add(function () {
            var optionsPanel = new BABYLON.GUI.StackPanel();
            optionsPanel.alpha = 0.8;
            optionsPanel.width = "220px";
            optionsPanel.background = "#edecd7";
            optionsPanel.zIndex = 2;
            advancedTexture.addControl(optionsPanel);
            var header = new BABYLON.GUI.TextBlock();
            header.text = "Shadows quality: 1024";
            header.height = "30px";
            header.color = "white";
            var slider = new BABYLON.GUI.Slider();
            slider.minimum = 1024;
            slider.maximum = 4096;
            slider.value = 0;
            slider.height = "20px";
            slider.width = "200px";
            slider.onValueChangedObservable.add(function (value) {
                header.text = "Shadows quality: " + value + "";
            });
            var optionsButtonClose = BABYLON.GUI.Button.CreateSimpleButton("aboutUsBackground", "Close");
            optionsButtonClose.width = "150px";
            optionsButtonClose.height = "40px";
            optionsButtonClose.color = "white";
            optionsButtonClose.cornerRadius = 20;
            optionsButtonClose.top = 50;
            optionsButtonClose.background = "orange";
            optionsButtonClose.zIndex = 3;
            optionsButtonClose.onPointerUpObservable.add(function () {
                advancedTexture.removeControl(optionsPanel);
            });
            optionsPanel
                .addControl(header)
                .addControl(slider)
                .addControl(optionsButtonClose);
        });
        advancedTexture.addControl(buttonOptions);
        var buttonAboutUs = BABYLON.GUI.Button.CreateSimpleButton("buttonAboutUs", "About us");
        buttonAboutUs.width = "250px";
        buttonAboutUs.height = "40px";
        buttonAboutUs.color = "white";
        buttonAboutUs.cornerRadius = 20;
        buttonAboutUs.top = 250;
        buttonAboutUs.background = "orange";
        buttonAboutUs.zIndex = 1;
        buttonAboutUs.onPointerUpObservable.add(function () {
            var aboutUsBackground = new BABYLON.GUI.Rectangle();
            aboutUsBackground.alpha = 0.8;
            aboutUsBackground.width = 0.5;
            aboutUsBackground.height = "180px";
            aboutUsBackground.cornerRadius = 20;
            aboutUsBackground.color = "Orange";
            aboutUsBackground.thickness = 1;
            aboutUsBackground.background = "#edecd7";
            aboutUsBackground.zIndex = 2;
            advancedTexture.addControl(aboutUsBackground);
            var aboutUsText = new BABYLON.GUI.TextBlock();
            aboutUsText.text = "Tomasz Furca & Artur Owsianowski";
            aboutUsText.color = "black";
            aboutUsText.fontSize = 20;
            aboutUsText.zIndex = 2;
            var aboutUsButtonClose = BABYLON.GUI.Button.CreateSimpleButton("aboutUsBackground", "Close");
            aboutUsButtonClose.width = "150px";
            aboutUsButtonClose.height = "40px";
            aboutUsButtonClose.color = "white";
            aboutUsButtonClose.cornerRadius = 20;
            aboutUsButtonClose.top = 50;
            aboutUsButtonClose.background = "orange";
            aboutUsButtonClose.zIndex = 3;
            aboutUsButtonClose.onPointerUpObservable.add(function () {
                advancedTexture.removeControl(aboutUsBackground);
            });
            aboutUsBackground.addControl(aboutUsButtonClose).addControl(aboutUsText);
        });
        advancedTexture.addControl(buttonAboutUs);
        game.scenes.push(scene);
        return _this;
    }
    return MainMenu;
}(Scene));
var Scenes;
(function (Scenes) {
    var Manager = /** @class */ (function () {
        function Manager() {
        }
        /**
         *
         * @param {int} sceneType
         * @returns {AbstractScene}
         */
        Manager.factory = function (sceneType) {
            var scene = null;
            switch (sceneType) {
                case ForestHouse.TYPE:
                    scene = new ForestHouse();
                    break;
                case ForestHouseStart.TYPE:
                    scene = new ForestHouseStart();
                    break;
                case ForestHouseTomb.TYPE:
                    scene = new ForestHouseTomb();
                    break;
                case SelectCharacter.TYPE:
                    scene = new SelectCharacter();
                    break;
            }
            if (!scene) {
                throw new TypeError('Wrong scene type.');
            }
            return scene;
        };
        return Manager;
    }());
    Scenes.Manager = Manager;
})(Scenes || (Scenes = {}));
var SelectCharacter = /** @class */ (function (_super) {
    __extends(SelectCharacter, _super);
    function SelectCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectCharacter.prototype.initScene = function (game) {
        var self = this;
        game.sceneManager = this;
        BABYLON.SceneLoader.Load("assets/scenes/Select_Map/", "Select_Map.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .defaultPipeline(scene)
                .executeWhenReady(function () {
                scene.activeCamera = new BABYLON.FreeCamera("selectCharacterCamera", new BABYLON.Vector3(0, 0, 0), scene);
                scene.activeCamera.maxZ = 200;
                scene.activeCamera.minZ = -200;
                scene.activeCamera.position = new BABYLON.Vector3(0, 14, -20);
                scene.activeCamera.rotation = new BABYLON.Vector3(0.5, 0, 0);
                new EnvironmentSelectCharacter(game, scene);
                game.client.socket.on('showPlayersToSelect', function (players) {
                    for (var i = 0; i < players.length; i++) {
                        var player = players[i];
                        new SelectCharacter.Warrior(game, i, player);
                    }
                });
            }, null);
        });
    };
    SelectCharacter.TYPE = 4;
    return SelectCharacter;
}(Scene));
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>
var SimpleBandit = /** @class */ (function (_super) {
    __extends(SimpleBandit, _super);
    function SimpleBandit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleBandit.prototype.initScene = function (game) {
        var self = this;
        game.sceneManager = this;
        BABYLON.SceneLoader.Load("assets/scenes/map01/", "map01.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game)
                .optimizeScene(scene)
                .setCamera(scene);
            var assetsManager = new BABYLON.AssetsManager(scene);
            var sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;
            scene.actionManager = new BABYLON.ActionManager(scene);
            scene.executeWhenReady(function () {
                self.environment = new Environment(game, scene);
                self.initFactories(scene, assetsManager);
                assetsManager.onFinish = function (tasks) {
                    game.client.socket.emit('changeScenePre', {
                        sceneType: SimpleBandit.TYPE
                    });
                };
                assetsManager.load();
                var listener = function listener() {
                    game.controller.registerControls(scene);
                    game.player.mesh.position = new BABYLON.Vector3(3, 0.1, 11);
                    game.client.socket.emit('changeScenePost', {
                        sceneType: SimpleBandit.TYPE
                    });
                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
                self.defaultPipeline(scene);
            });
        });
    };
    SimpleBandit.prototype.getType = function () {
        return SimpleBandit.TYPE;
    };
    SimpleBandit.TYPE = 0;
    return SimpleBandit;
}(Scene));
var Items;
(function (Items) {
    var DroppedItem = /** @class */ (function () {
        function DroppedItem() {
        }
        DroppedItem.showItem = function (game, item, position, itemDropKey) {
            var scene = game.getScene();
            var droppedItemBox = BABYLON.Mesh.CreateBox(item.name + '_Box', 3, scene, false);
            droppedItemBox.checkCollisions = false;
            droppedItemBox.visibility = 0;
            droppedItemBox.position.x = position.x;
            droppedItemBox.position.z = position.z;
            droppedItemBox.position.y = 0;
            item.mesh.outlineColor = new BABYLON.Color3(0, 1, 0);
            item.mesh.outlineWidth = 0.1;
            item.mesh.rotation = new BABYLON.Vector3(0, 0, 0);
            item.mesh.visibility = 1;
            item.mesh.parent = droppedItemBox;
            item.mesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 0, 0));
            console.log(item.mesh.getPivotPoint());
            droppedItemBox.actionManager = new BABYLON.ActionManager(scene);
            droppedItemBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
                item.mesh.renderOutline = false;
            }));
            droppedItemBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
                item.mesh.renderOutline = true;
            }));
            droppedItemBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                game.gui.playerLogsPanel.addText(item.name + '  has been picked up.', 'green');
                game.client.socket.emit('addDroppedItem', itemDropKey);
                droppedItemBox.dispose();
            }));
            var particleSystem = new Particles.DroppedItem(game, droppedItemBox);
            particleSystem.particleSystem.start();
            if (game.sceneManager.octree) {
                game.sceneManager.octree.dynamicContent.push(droppedItemBox);
            }
        };
        return DroppedItem;
    }());
    Items.DroppedItem = DroppedItem;
})(Items || (Items = {}));
var Items;
(function (Items) {
    var Item = /** @class */ (function () {
        function Item(game, itemData) {
            this.name = itemData.name;
            this.image = itemData.image;
            this.type = itemData.type;
            this.statistics = itemData.statistics;
            this.mesh = game.factories['character'].createInstance(itemData.meshName);
            this.mesh.visibility = 0;
            if (itemData.entity) {
                this.databaseId = itemData.entity.id;
            }
        }
        return Item;
    }());
    Items.Item = Item;
})(Items || (Items = {}));
var Items;
(function (Items) {
    var ItemManager = /** @class */ (function () {
        function ItemManager(game) {
            this.game = game;
        }
        /**
         * @param inventoryItems
         * @param inventory
         * @param hideShieldAndWeapon
         */
        ItemManager.prototype.initItemsFromDatabaseOnCharacter = function (inventoryItems, inventory, hideShieldAndWeapon) {
            if (hideShieldAndWeapon === void 0) { hideShieldAndWeapon = false; }
            var self = this;
            var showSash = true;
            var showHair = true;
            new Promise(function (resolve) {
                inventoryItems.forEach(function (itemDatabase) {
                    if (hideShieldAndWeapon && (itemDatabase.type == 2 || itemDatabase.type == 1)) {
                        return;
                    }
                    var item = new Items.Item(self.game, itemDatabase);
                    if (self.game.sceneManager.octree) {
                        self.game.sceneManager.octree.dynamicContent.push(item.mesh);
                    }
                    item.mesh.alwaysSelectAsActiveMesh = true;
                    inventory.items.push(item);
                    inventory.equipItem(item, itemDatabase.entity.equip);
                    if (item.type == 3 && itemDatabase.entity.equip) {
                        showHair = false;
                    }
                    if (item.type == 6 && itemDatabase.entity.equip) {
                        showSash = false;
                    }
                });
                setTimeout(function () {
                    resolve();
                });
            }).then(function () {
                inventory.showSashOrHair(showHair, showSash);
            });
        };
        return ItemManager;
    }());
    Items.ItemManager = ItemManager;
})(Items || (Items = {}));
var Character;
(function (Character) {
    var Skills;
    (function (Skills) {
        var AbstractSkill = /** @class */ (function () {
            function AbstractSkill(game, cooldown, damage, stock) {
                if (cooldown === void 0) { cooldown = 0; }
                if (damage === void 0) { damage = 0; }
                if (stock === void 0) { stock = 0; }
                this.cooldown = cooldown;
                this.damage = damage;
                this.stock = stock;
                this.registerHotKey(game);
                this.registerDefaults();
            }
            AbstractSkill.prototype.getImageUrl = function () {
                return this.image;
            };
            AbstractSkill.TYPE = 0;
            return AbstractSkill;
        }());
        Skills.AbstractSkill = AbstractSkill;
    })(Skills = Character.Skills || (Character.Skills = {}));
})(Character || (Character = {}));
var Character;
(function (Character) {
    var Skills;
    (function (Skills) {
        var DoubleAttack = /** @class */ (function (_super) {
            __extends(DoubleAttack, _super);
            function DoubleAttack() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DoubleAttack.prototype.getType = function () {
                return Character.Skills.DoubleAttack.TYPE;
            };
            DoubleAttack.prototype.registerDefaults = function () {
                this.image = 'assets/skills/skill01.png';
                this.name = 'Double attack';
            };
            DoubleAttack.prototype.registerHotKey = function (game) {
                var listener = function listener() {
                    var effectEmitter = new Particles.DoubleAttack(game, game.player.mesh);
                    effectEmitter.initParticleSystem();
                    game.getScene().actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (event) {
                        if (event.sourceEvent.key == 1) {
                            game.controller.attackPoint = null;
                            game.player.runAnimationHit(AbstractCharacter.ANIMATION_SKILL_01, function () {
                                //effectEmitter.particleSystem.start();
                            }, function () {
                                //effectEmitter.particleSystem.stop();
                            });
                        }
                    }));
                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            };
            DoubleAttack.TYPE = 1;
            return DoubleAttack;
        }(Character.Skills.AbstractSkill));
        Skills.DoubleAttack = DoubleAttack;
    })(Skills = Character.Skills || (Character.Skills = {}));
})(Character || (Character = {}));
var Character;
(function (Character) {
    var Skills;
    (function (Skills) {
        var SkillsManager = /** @class */ (function () {
            function SkillsManager(game) {
                this.game = game;
            }
            /**
             * @param type
             */
            SkillsManager.prototype.getSkill = function (type) {
                var skill = null;
                switch (type) {
                    case Character.Skills.DoubleAttack.TYPE:
                        skill = new Character.Skills.DoubleAttack(this.game);
                        break;
                    case Character.Skills.Tornado.TYPE:
                        skill = new Character.Skills.Tornado(this.game);
                        break;
                }
                return skill;
            };
            return SkillsManager;
        }());
        Skills.SkillsManager = SkillsManager;
    })(Skills = Character.Skills || (Character.Skills = {}));
})(Character || (Character = {}));
var Character;
(function (Character) {
    var Skills;
    (function (Skills) {
        var Tornado = /** @class */ (function (_super) {
            __extends(Tornado, _super);
            function Tornado() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Tornado.prototype.getType = function () {
                return Character.Skills.Tornado.TYPE;
            };
            Tornado.prototype.registerDefaults = function () {
                this.image = 'assets/skills/skill02.png';
                this.name = 'Tornado';
            };
            Tornado.prototype.registerHotKey = function (game) {
                var listener = function listener() {
                    var effectEmitter = new Particles.Tornado(game, game.player.mesh);
                    effectEmitter.initParticleSystem();
                    game.getScene().actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (event) {
                        if (event.sourceEvent.key == 2) {
                            game.controller.attackPoint = null;
                            game.player.runAnimationHit(AbstractCharacter.ANIMATION_SKILL_02, function () {
                                //effectEmitter.particleSystem.start();
                            }, function () {
                                //effectEmitter.particleSystem.stop();
                            });
                            3;
                        }
                    }));
                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            };
            Tornado.TYPE = 2;
            return Tornado;
        }(Character.Skills.AbstractSkill));
        Skills.Tornado = Tornado;
    })(Skills = Character.Skills || (Character.Skills = {}));
})(Character || (Character = {}));
/// <reference path="../AbstractCharacter.ts"/>
var NPC;
(function (NPC) {
    var AbstractNpc = /** @class */ (function (_super) {
        __extends(AbstractNpc, _super);
        function AbstractNpc(game, name, position, rotation) {
            var _this = _super.call(this, name, game) || this;
            game.npcs.push(_this);
            var self = _this;
            _this.mesh.position = position;
            _this.mesh.rotation = rotation;
            _this.mesh.actionManager = new BABYLON.ActionManager(_this.game.getScene());
            _this.mesh.isPickable = true;
            ///Top GUI BAR
            _this.statistics = {
                hpMax: 1000,
                hp: 1000
            };
            _this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
                self.game.gui.characterTopHp.hideHpBar();
            }));
            _this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
                self.game.gui.characterTopHp.showHpCharacter(self);
            }));
            ///QUEST LISTENER
            var listener = function listener() {
                var questManager = new Quests.QuestManager(self.game);
                self.quest = questManager.getQuestFromServerUsingQuestId(self.questId);
                if (self.quest && !self.quest.isFinished) {
                    self.createTooltip();
                    self.mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOverTrigger, self.box, 'scaling', new BABYLON.Vector3(2, 2, 2), 300));
                    self.mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOutTrigger, self.box, 'scaling', new BABYLON.Vector3(1, 1, 1), 300));
                    self.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                        var quest = new GUI.Quest(game.gui, self.quest, self.mesh);
                        quest.open();
                    }));
                }
                document.removeEventListener(Events.QUESTS_RECEIVED, listener);
            };
            document.addEventListener(Events.QUESTS_RECEIVED, listener);
            return _this;
        }
        AbstractNpc.prototype.removeFromWorld = function () {
            this.mesh.dispose();
            this.tooltip.dispose();
        };
        AbstractNpc.prototype.refreshTooltipColor = function () {
            if (this.quest.isActive && !this.quest.hasRequrementsFinished) {
                this.tooltip.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
            }
            else if (this.quest.isActive && this.quest.hasRequrementsFinished) {
                this.tooltip.material.diffuseColor = new BABYLON.Color3(1, 1, 0);
            }
            else {
                this.tooltip.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
            }
            return this;
        };
        AbstractNpc.prototype.createTooltip = function () {
            var box1 = BABYLON.Mesh.CreateBox("Box1", 0.4, this.game.getScene());
            box1.parent = this.mesh;
            box1.position.y += 7;
            var materialBox = new BABYLON.StandardMaterial("texture1", this.game.getScene());
            box1.material = materialBox;
            if (this.game.sceneManager.octree) {
                this.game.sceneManager.octree.dynamicContent.push(box1);
            }
            var keys = [];
            keys.push({
                frame: 0,
                value: 0
            });
            keys.push({
                frame: 30,
                value: -2
            });
            var animationBox = new BABYLON.Animation("rotation", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE);
            animationBox.setKeys(keys);
            box1.animations = [];
            box1.animations.push(animationBox);
            this.box = box1;
            this.game.getScene().beginAnimation(box1, 0, 30, true);
            this.tooltip = box1;
            this.refreshTooltipColor();
        };
        /**
         *
         * @param inventoryItems
         */
        AbstractNpc.prototype.setItems = function (inventoryItems) {
            this.inventory = new Character.Inventory(this.game, this);
            if (inventoryItems) {
                var itemManager = new Items.ItemManager(this.game);
                itemManager.initItemsFromDatabaseOnCharacter(inventoryItems, this.inventory, true);
            }
        };
        return AbstractNpc;
    }(AbstractCharacter));
    NPC.AbstractNpc = AbstractNpc;
})(NPC || (NPC = {}));
/// <reference path="AbstractNpc.ts"/>
var NPC;
(function (NPC) {
    var BigWarrior = /** @class */ (function (_super) {
        __extends(BigWarrior, _super);
        function BigWarrior(game, position, rotation) {
            var _this = this;
            _this.name = 'Lech';
            var mesh = game.factories['character'].createInstance('Warrior', true);
            mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);
            _this.mesh = mesh;
            _this.questId = Quests.KillWorms.QUEST_ID;
            _this = _super.call(this, game, name, position, rotation) || this;
            var items = [
                {
                    meshName: 'Sash',
                    equip: 1
                },
                {
                    meshName: 'Hood',
                    equip: 1
                },
                {
                    meshName: 'Boots',
                    equip: 1
                },
                {
                    meshName: 'Gloves',
                    equip: 1
                },
                {
                    meshName: 'Axe.001',
                    equip: 1
                }
            ];
            _this.setItems(items);
            return _this;
        }
        return BigWarrior;
    }(NPC.AbstractNpc));
    NPC.BigWarrior = BigWarrior;
})(NPC || (NPC = {}));
/// <reference path="AbstractNpc.ts"/>
var NPC;
(function (NPC) {
    var Guard = /** @class */ (function (_super) {
        __extends(Guard, _super);
        function Guard(game, position, rotation) {
            var _this = this;
            _this.name = 'Guard';
            _this.mesh = game.factories['character'].createInstance('Warrior', true);
            _this = _super.call(this, game, name, position, rotation) || this;
            var items = [
                {
                    meshName: 'Armor.001',
                    equip: 1
                },
                {
                    meshName: 'Hood',
                    equip: 1
                },
                {
                    meshName: 'Boots',
                    equip: 1
                },
                {
                    meshName: 'Gloves',
                    equip: 1
                },
                {
                    meshName: 'Shield',
                    equip: 1
                },
                {
                    meshName: 'Axe.001',
                    equip: 1
                }
            ];
            _this.setItems(items);
            return _this;
        }
        return Guard;
    }(NPC.AbstractNpc));
    NPC.Guard = Guard;
})(NPC || (NPC = {}));
/// <reference path="AbstractNpc.ts"/>
var NPC;
(function (NPC) {
    var Trader = /** @class */ (function (_super) {
        __extends(Trader, _super);
        function Trader(game, position, rotation) {
            var _this = this;
            _this.name = 'Trader';
            _this.mesh = game.factories['character'].createInstance('Warrior', true);
            _this = _super.call(this, game, name, position, rotation) || this;
            var items = [
                {
                    meshName: 'Sash',
                    equip: 1
                },
                {
                    meshName: 'Boots',
                    equip: 1
                },
            ];
            _this.setItems(items);
            _this.mesh.skeleton.beginAnimation('Sit');
            return _this;
        }
        return Trader;
    }(NPC.AbstractNpc));
    NPC.Trader = Trader;
})(NPC || (NPC = {}));
/// <reference path="../AbstractCharacter.ts"/>
var SelectCharacter;
(function (SelectCharacter) {
    var Bandit = /** @class */ (function (_super) {
        __extends(Bandit, _super);
        function Bandit(game) {
            var _this = this;
            _this.name = 'Warrior';
            var mesh = game.factories['character'].createInstance('Warrior', true);
            mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);
            mesh.position = new BABYLON.Vector3(2, 0.1, 10);
            mesh.rotation = new BABYLON.Vector3(0, 0.2, 0);
            _this.mesh = mesh;
            _this.inventory = new Character.Inventory(game, _this);
            var armor = new Items.Armors.Robe(game);
            var gloves = new Items.Gloves.PrimaryGloves(game);
            var boots = new Items.Boots.PrimaryBoots(game);
            _this.inventory.mount(armor);
            _this.inventory.mount(gloves);
            _this.inventory.mount(boots);
            _this = _super.call(this, name, game) || this;
            _this.mesh.skeleton.beginAnimation('Sit');
            _this.registerActions();
            return _this;
        }
        Bandit.prototype.removeFromWorld = function () {
        };
        Bandit.prototype.registerActions = function () {
            var self = this;
            this.mesh.actionManager = new BABYLON.ActionManager(this.game.getScene());
            this.mesh.isPickable = true;
            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
                if (!self.skeletonAnimation) {
                    self.skeletonAnimation = self.mesh.skeleton.beginAnimation('Select', false, 1, function () {
                        self.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                    });
                }
            }));
            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
                //self.game.getScene().stopAnimation(self.mesh.skeleton);
            }));
            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                new Simple().initScene(self.game);
            }));
        };
        return Bandit;
    }(AbstractCharacter));
    SelectCharacter.Bandit = Bandit;
})(SelectCharacter || (SelectCharacter = {}));
/// <reference path="../AbstractCharacter.ts"/>
var SelectCharacter;
(function (SelectCharacter) {
    var Warrior = /** @class */ (function (_super) {
        __extends(Warrior, _super);
        function Warrior(game, place, playerDatabase) {
            var _this = this;
            _this.name = 'Warrior';
            _this.playerId = playerDatabase.id;
            var mesh = game.factories['character'].createInstance('Warrior', true);
            mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);
            mesh.skeleton.enableBlending(0.2);
            mesh.alwaysSelectAsActiveMesh = true;
            switch (place) {
                case 0:
                    mesh.position = new BABYLON.Vector3(-0.3, 0, 10.5);
                    mesh.rotation = new BABYLON.Vector3(0, 0, 0);
                    break;
                case 1:
                    mesh.position = new BABYLON.Vector3(2.7, 0, 10);
                    mesh.rotation = new BABYLON.Vector3(0, 0.1, 0);
                    break;
            }
            _this.mesh = mesh;
            _this = _super.call(this, name, game) || this;
            _this.setItems(playerDatabase.items);
            _this.mesh.skeleton.beginAnimation('Sit');
            _this.registerActions();
            return _this;
        }
        /**
         *
         * @param inventoryItems
         */
        Warrior.prototype.setItems = function (inventoryItems) {
            this.inventory = new Character.Inventory(this.game, this);
            if (inventoryItems) {
                var itemManager = new Items.ItemManager(this.game);
                itemManager.initItemsFromDatabaseOnCharacter(inventoryItems, this.inventory, true);
            }
        };
        Warrior.prototype.removeFromWorld = function () {
        };
        Warrior.prototype.registerActions = function () {
            var self = this;
            var pointerOut = false;
            var sitDown = function () {
                if (!self.skeletonAnimation) {
                    var animationSelectRange = self.mesh.skeleton.getAnimationRange('Select');
                    self.skeletonAnimation = self.game.getScene().beginAnimation(self.mesh, animationSelectRange.to, animationSelectRange.from + 1, false, -1, function () {
                        self.mesh.skeleton.beginAnimation('Sit');
                        self.skeletonAnimation = null;
                    });
                }
            };
            this.mesh.actionManager = new BABYLON.ActionManager(this.game.getScene());
            this.mesh.isPickable = true;
            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
                pointerOut = false;
                if (!self.skeletonAnimation) {
                    self.skeletonAnimation = self.mesh.skeleton.beginAnimation('Select', false, 1, function () {
                        self.skeletonAnimation = null;
                        if (pointerOut) {
                            sitDown();
                        }
                        else {
                            console.log(1);
                            self.game.client.socket.emit('selectCharacter', self.playerId);
                            self.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                        }
                    });
                }
            }));
            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
                sitDown();
                pointerOut = true;
            }));
            // this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            //     BABYLON.ActionManager.OnPickUpTrigger,
            //     function() {
            //         console.log(self.playerId);
            //         client.socket.emit('selectCharacter', self.playerId);
            //
            //     })
            // );
        };
        return Warrior;
    }(AbstractCharacter));
    SelectCharacter.Warrior = Warrior;
})(SelectCharacter || (SelectCharacter = {}));
var GUI;
(function (GUI) {
    var TooltipButton = /** @class */ (function () {
        function TooltipButton(baseControl, text) {
            var rect1 = new BABYLON.GUI.Rectangle('tooltip');
            rect1.top = '-25%';
            rect1.width = 1;
            rect1.height = "40px";
            rect1.cornerRadius = 20;
            rect1.thickness = 1;
            rect1.background = "black";
            rect1.color = "white";
            baseControl.addControl(rect1);
            var label = new BABYLON.GUI.TextBlock();
            label.textWrapping = true;
            label.text = text;
            label.resizeToFit = true;
            rect1.addControl(label);
            this.container = rect1;
            this.label = label;
        }
        return TooltipButton;
    }());
    GUI.TooltipButton = TooltipButton;
})(GUI || (GUI = {}));
/// <reference path="../game.ts"/>
var GUI;
(function (GUI) {
    var TooltipMesh = /** @class */ (function () {
        function TooltipMesh(mesh, text) {
            var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("tooltip");
            var rect1 = new BABYLON.GUI.Rectangle();
            rect1.width = 0.4;
            rect1.height = "40px";
            rect1.cornerRadius = 20;
            rect1.thickness = 2;
            rect1.background = "black";
            advancedTexture.addControl(rect1);
            rect1.linkWithMesh(mesh);
            rect1.linkOffsetY = -100;
            var label = new BABYLON.GUI.TextBlock();
            label.text = text;
            rect1.addControl(label);
            setTimeout(function () {
                advancedTexture.dispose();
            }, 2000);
        }
        return TooltipMesh;
    }());
    GUI.TooltipMesh = TooltipMesh;
})(GUI || (GUI = {}));
/// <reference path="../Main.ts"/>
/// <reference path="../../../bower_components/babylonjs/dist/gui/babylon.gui.d.ts"/>
var GUI;
(function (GUI) {
    var Popup = /** @class */ (function () {
        function Popup(guiMain) {
            this.guiMain = guiMain;
        }
        /**
         * @returns {GUI.Popup}
         */
        Popup.prototype.initTexture = function () {
            this.guiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.' + this.name);
            var container = new BABYLON.GUI.StackPanel('gui.panel.' + this.name);
            container.horizontalAlignment = this.position;
            container.width = 0.33;
            container.height = 1;
            container.isPointerBlocker = true;
            this.container = container;
            var image = new BABYLON.GUI.Image('gui.popup.image.' + this.name, this.imageUrl);
            image.horizontalAlignment = this.position;
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            image.width = 1;
            image.height = 1;
            this.container.addControl(image);
            this.containerBackground = image;
            return this;
        };
        Popup.prototype.createButtonClose = function () {
            var self = this;
            var buttonClose = BABYLON.GUI.Button.CreateSimpleButton("attributesButtonClose", "Close");
            buttonClose.color = "white";
            buttonClose.background = "black";
            buttonClose.width = "70px;";
            buttonClose.height = "40px";
            buttonClose.horizontalAlignment = this.position;
            buttonClose.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonClose.onPointerUpObservable.add(function () {
                self.close();
            });
            this.guiTexture.addControl(buttonClose);
            this.buttonClose = buttonClose;
            return this;
        };
        Popup.prototype.refreshPopup = function () {
            if (this.opened) {
                this.close();
                this.open();
            }
        };
        return Popup;
    }());
    GUI.Popup = Popup;
})(GUI || (GUI = {}));
/// <reference path="Popup.ts"/>
var GUI;
(function (GUI) {
    var Attributes = /** @class */ (function (_super) {
        __extends(Attributes, _super);
        function Attributes(guiMain) {
            var _this = _super.call(this, guiMain) || this;
            _this.name = 'Inventory';
            _this.imageUrl = "assets/gui/attrs.png";
            _this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            return _this;
        }
        Attributes.prototype.open = function () {
            var self = this;
            this.opened = true;
            this.initTexture();
            this.guiTexture.addControl(this.container);
            this.showText();
            this.createButtonClose();
        };
        Attributes.prototype.close = function () {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
        };
        Attributes.prototype.showText = function () {
            var panel = new BABYLON.GUI.StackPanel('attributes.panel');
            panel.isPointerBlocker = true;
            panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            panel.width = "33%";
            panel.top = "5%";
            this.guiTexture.addControl(panel);
            var textPlayerName = this.createText(this.guiMain.game.player.name);
            textPlayerName.color = 'yellow';
            textPlayerName.height = '8%';
            textPlayerName.fontSize = 36;
            panel.addControl(textPlayerName);
            var textPlayerLVL = this.createText(this.guiMain.game.player.lvl + ' LVL');
            textPlayerLVL.color = 'yellow';
            textPlayerLVL.height = '8%';
            textPlayerLVL.fontSize = 28;
            panel.addControl(textPlayerLVL);
            var textAttributes = this.createText('Attributes');
            textAttributes.color = 'green';
            textAttributes.height = '8%';
            textAttributes.fontSize = 36;
            panel.addControl(textAttributes);
            this.createAttribute(1, 'Damage:' + this.guiMain.player.statistics.damage, panel);
            this.createAttribute(2, 'Armor:' + this.guiMain.player.statistics.armor, panel);
            this.createAttribute(3, 'HP:' + this.guiMain.player.statistics.hp, panel);
            this.createAttribute(4, 'Attack speed:' + this.guiMain.player.statistics.attackSpeed, panel);
            this.createAttribute(6, 'Block chance:' + this.guiMain.player.statistics.blockChance, panel);
            if (this.guiMain.game.player.freeAttributesPoints) {
                var textAttributes_1 = this.createText('You have ' + this.guiMain.game.player.freeAttributesPoints + ' free attribute points.');
                textAttributes_1.color = 'red';
                panel.addControl(textAttributes_1);
            }
            var textStatistics = this.createText('Statistics');
            textStatistics.color = 'green';
            textStatistics.height = '8%';
            textStatistics.fontSize = 36;
            panel.addControl(textStatistics);
            var damage = this.createText('Damage:' + this.guiMain.player.statisticsAll.damage);
            panel.addControl(damage);
            var armor = this.createText('Armor:' + this.guiMain.player.statisticsAll.armor);
            panel.addControl(armor);
        };
        Attributes.prototype.createText = function (text) {
            var textBlock = new BABYLON.GUI.TextBlock();
            textBlock.text = text;
            textBlock.color = "white";
            textBlock.width = "100%";
            textBlock.height = "5%";
            return textBlock;
        };
        Attributes.prototype.createAttribute = function (type, text, control) {
            var self = this;
            if (this.guiMain.game.player.freeAttributesPoints) {
                var button = BABYLON.GUI.Button.CreateImageButton("plus", text, "assets/gui/plus.png");
                button.height = "5%";
                button.thickness = 0;
                button.width = 0.4;
                button.color = 'white';
                control.addControl(button);
                button.onPointerUpObservable.add(function () {
                    self.guiMain.game.client.socket.emit('addAttribute', {
                        type: type
                    });
                });
            }
            else {
                var textBlock = this.createText(text);
                control.addControl(textBlock);
            }
        };
        return Attributes;
    }(GUI.Popup));
    GUI.Attributes = Attributes;
})(GUI || (GUI = {}));
/// <reference path="Popup.ts"/>
var GUI;
(function (GUI) {
    var Inventory = /** @class */ (function (_super) {
        __extends(Inventory, _super);
        function Inventory(guiMain) {
            var _this = _super.call(this, guiMain) || this;
            _this.name = 'Inventory';
            _this.imageUrl = "assets/gui/inventory.png";
            _this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            return _this;
        }
        Inventory.prototype.open = function () {
            this.initTexture();
            this.opened = true;
            this.guiTexture.addControl(this.container);
            this.showItems();
            this.showEquipedItems();
            this.showSpecialItemsAndGold();
            this.createButtonClose();
            return this;
        };
        Inventory.prototype.showSpecialItemsAndGold = function () {
            var image = BABYLON.GUI.Button.CreateImageButton("gui.popup.image.gold", '' + this.guiMain.player.gold + '', "assets/gui/gold.png");
            image.thickness = 0;
            image.color = 'white';
            image.height = '80px';
            image.width = '180px';
            image.left = "-17%";
            image.top = '-3%';
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            this.guiTexture.addControl(image);
            var image2 = BABYLON.GUI.Button.CreateImageButton("gui.popup.image.key", '' + this.guiMain.player.keys + '', "assets/gui/key.png");
            image2.thickness = 0;
            image2.color = 'white';
            image2.height = '80px';
            image2.width = '180px';
            image2.left = "-3%";
            image2.top = '-3%';
            image2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            this.guiTexture.addControl(image2);
        };
        Inventory.prototype.close = function () {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
        };
        Inventory.prototype.showEquipedItems = function () {
            this.weaponImage = new GUI.Inventory.Weapon(this);
            this.shieldImage = new GUI.Inventory.Shield(this);
            this.glovesImage = new GUI.Inventory.Gloves(this);
            this.bootsImage = new GUI.Inventory.Boots(this);
            this.armorImage = new GUI.Inventory.Armor(this);
            this.helmImage = new GUI.Inventory.Helm(this);
        };
        Inventory.prototype.showItems = function () {
            var self = this;
            var inventory = this.guiMain.player.inventory;
            if (this.panelItems) {
                this.guiTexture.removeControl(this.panelItems);
            }
            var eqiupedItems = inventory.getEquipedItems();
            ////items
            var itemCount = 0;
            var left = -42;
            var level = 1;
            var top = 0;
            var panelItems = new BABYLON.GUI.Rectangle();
            panelItems.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            panelItems.width = "32%";
            panelItems.height = "45%";
            panelItems.top = "26%";
            panelItems.thickness = 0;
            panelItems.isPointerBlocker = true;
            this.panelItems = panelItems;
            var _loop_1 = function (i) {
                var breakDisplayItem = void 0;
                var item = inventory.items[i];
                for (var _i = 0, eqiupedItems_1 = eqiupedItems; _i < eqiupedItems_1.length; _i++) {
                    var equipedItem = eqiupedItems_1[_i];
                    if (equipedItem == item) {
                        breakDisplayItem = true;
                        break;
                    }
                }
                if (breakDisplayItem) {
                    return "continue";
                }
                if (itemCount == 0) {
                    top = -35;
                }
                else if (itemCount % 5 == 0) {
                    left = -42;
                    top = (30 * level) - 35;
                    level++;
                }
                else {
                    left += 20;
                }
                itemCount++;
                var result = new BABYLON.GUI.Button(name);
                result.width = 0.20;
                result.height = 0.3;
                result.left = left + "%";
                result.top = top + "%";
                result.thickness = 0;
                result.fontSize = '14';
                var image = this_1.createItemImage(item);
                result.addControl(image);
                panelItems.addControl(result);
                var tooltipButton = null;
                result.onPointerEnterObservable.add(function () {
                    var text = item.name;
                    if (item.statistics.damage > 0) {
                        text += "\nDamage: " + item.statistics.damage + "";
                    }
                    if (item.statistics.armor > 0) {
                        text += "\nArmor: " + item.statistics.armor + "";
                    }
                    tooltipButton = new GUI.TooltipButton(result, text);
                });
                result.onPointerOutObservable.add(function () {
                    result.children.forEach(function (value, key) {
                        if (value.name == 'tooltip') {
                            result.removeControl(value);
                        }
                    });
                });
                result.onPointerUpObservable.add(function () {
                    self.guiMain.game.player.inventory.emitEquip(item);
                    self.onPointerUpItemImage(item);
                    self.showItems();
                    if (self.guiMain.attributes.opened) {
                        self.guiMain.attributes.refreshPopup();
                    }
                });
            };
            var this_1 = this;
            for (var i = 0; i < inventory.items.length; i++) {
                _loop_1(i);
            }
            this.guiTexture.addControl(panelItems);
            window.addEventListener('resize', function () {
                if (window.innerWidth > 1600) {
                    panelItems.height = "45%";
                    panelItems.top = "26%";
                }
                else if (window.innerWidth > 1200) {
                    panelItems.height = "30%";
                    panelItems.top = "20%";
                }
                else {
                    panelItems.height = "20%";
                    panelItems.top = "15%";
                }
            });
            return this;
        };
        /**
         * @param item
         * @returns {GUI.Inventory}
         */
        Inventory.prototype.onPointerUpItemImage = function (item) {
            switch (item.type) {
                case 1:
                    if (this.weaponImage.block) {
                        this.guiTexture.removeControl(this.weaponImage.block);
                    }
                    this.weaponImage = new GUI.Inventory.Weapon(this);
                    break;
                case 2:
                    if (this.shieldImage.block) {
                        this.guiTexture.removeControl(this.shieldImage.block);
                    }
                    this.shieldImage = new GUI.Inventory.Shield(this);
                    break;
                case 3:
                    if (this.helmImage.block) {
                        this.guiTexture.removeControl(this.helmImage.block);
                    }
                    this.helmImage = new GUI.Inventory.Helm(this);
                    break;
                case 4:
                    if (this.glovesImage.block) {
                        this.guiTexture.removeControl(this.glovesImage.block);
                    }
                    this.glovesImage = new GUI.Inventory.Gloves(this);
                    break;
                case 5:
                    if (this.bootsImage.block) {
                        this.guiTexture.removeControl(this.bootsImage.block);
                    }
                    this.bootsImage = new GUI.Inventory.Boots(this);
                    break;
                case 6:
                    if (this.armorImage.block) {
                        this.guiTexture.removeControl(this.armorImage.block);
                    }
                    this.armorImage = new GUI.Inventory.Armor(this);
                    break;
            }
            return this;
        };
        /**
         * @param item
         * @returns {BABYLON.GUI.Image}
         */
        Inventory.prototype.createItemImage = function (item) {
            var image = new BABYLON.GUI.Image('gui.popup.image.' + item.name, 'assets/Miniatures/' + item.image + '.png');
            image.height = 0.6;
            image.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            return image;
        };
        return Inventory;
    }(GUI.Popup));
    GUI.Inventory = Inventory;
})(GUI || (GUI = {}));
/// <reference path="Popup.ts"/>
var GUI;
(function (GUI) {
    var PlayerQuests = /** @class */ (function (_super) {
        __extends(PlayerQuests, _super);
        function PlayerQuests(guiMain) {
            var _this = _super.call(this, guiMain) || this;
            _this.name = 'Player quests';
            _this.imageUrl = "assets/gui/attrs.png";
            _this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            return _this;
        }
        PlayerQuests.prototype.open = function () {
            var self = this;
            this.opened = true;
            this.initTexture();
            this.guiTexture.addControl(this.container);
            this.showText();
            var buttonClose = BABYLON.GUI.Button.CreateSimpleButton("attributesButtonClose", "Close");
            buttonClose.color = "white";
            buttonClose.background = "black";
            buttonClose.width = "70px;";
            buttonClose.height = "40px";
            buttonClose.horizontalAlignment = this.position;
            buttonClose.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonClose.onPointerUpObservable.add(function () {
                self.close();
            });
            this.guiTexture.addControl(buttonClose);
            this.buttonClose = buttonClose;
        };
        PlayerQuests.prototype.close = function () {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
        };
        PlayerQuests.prototype.showText = function () {
            for (var _i = 0, _a = this.guiMain.game.quests; _i < _a.length; _i++) {
                var quest = _a[_i];
                var title = new BABYLON.GUI.TextBlock();
                title.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                title.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
                title.text = quest.title;
                title.color = "white";
                title.top = "10%";
                title.width = "25%";
                title.height = "10%";
                title.fontSize = 12;
                this.guiTexture.addControl(title);
            }
        };
        return PlayerQuests;
    }(GUI.Popup));
    GUI.PlayerQuests = PlayerQuests;
})(GUI || (GUI = {}));
/// <reference path="Popup.ts"/>
var GUI;
(function (GUI) {
    var Rooms = /** @class */ (function (_super) {
        __extends(Rooms, _super);
        function Rooms(guiMain) {
            var _this = _super.call(this, guiMain) || this;
            _this.name = 'Rooms';
            _this.imageUrl = "assets/gui/attrs.png";
            _this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            _this.guiMain.game.client.socket.emit('getRooms');
            return _this;
        }
        Rooms.prototype.open = function () {
            var self = this;
            this.opened = true;
            this.initTexture();
            this.guiTexture.addControl(this.container);
            this.showText();
            var buttonClose = BABYLON.GUI.Button.CreateSimpleButton("attributesButtonClose", "Close");
            buttonClose.color = "white";
            buttonClose.background = "black";
            buttonClose.width = "70px;";
            buttonClose.height = "40px";
            buttonClose.left = -60;
            buttonClose.horizontalAlignment = this.position;
            buttonClose.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonClose.onPointerUpObservable.add(function () {
                self.close();
            });
            this.guiTexture.addControl(buttonClose);
            this.buttonClose = buttonClose;
            var buttonAccept = BABYLON.GUI.Button.CreateSimpleButton("attributesButtonClose", "Accept");
            buttonAccept.color = "white";
            buttonAccept.background = "black";
            buttonAccept.width = "70px;";
            buttonAccept.height = "40px";
            buttonAccept.left = 60;
            buttonAccept.horizontalAlignment = this.position;
            buttonAccept.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonAccept.onPointerUpObservable.add(function () {
                //self.guiMain.game.client.socket.emit('acceptQuest', {id: self.quest.getQuestId()});
                self.close();
            });
            this.guiTexture.addControl(buttonAccept);
        };
        Rooms.prototype.close = function () {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
        };
        Rooms.prototype.showText = function () {
            var self = this;
            var panel = new BABYLON.GUI.StackPanel('attributes.panel');
            panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            panel.width = "32%";
            panel.top = "5%";
            self.guiTexture.addControl(panel);
            if (this.rooms) {
                this.rooms.forEach(function (room, roomKey) {
                    var buttonAccept = BABYLON.GUI.Button.CreateImageButton("plus", room.roomId, "assets/gui/plus.png");
                    buttonAccept.color = "white";
                    buttonAccept.background = "black";
                    buttonAccept.width = 0.6;
                    buttonAccept.height = "40px";
                    buttonAccept.onPointerUpObservable.add(function () {
                        self.guiMain.game.client.socket.emit('joinToRoom', room.roomId);
                        self.close();
                    });
                    panel.addControl(buttonAccept);
                });
            }
        };
        return Rooms;
    }(GUI.Popup));
    GUI.Rooms = Rooms;
})(GUI || (GUI = {}));
/// <reference path="Popup.ts"/>
var GUI;
(function (GUI) {
    var Skills = /** @class */ (function (_super) {
        __extends(Skills, _super);
        function Skills(guiMain) {
            var _this = _super.call(this, guiMain) || this;
            _this.name = 'Skills';
            _this.imageUrl = "assets/gui/attrs.png";
            _this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            return _this;
        }
        Skills.prototype.open = function () {
            var self = this;
            this.opened = true;
            this.initTexture();
            this.guiTexture.addControl(this.container);
            this.showText();
            var buttonClose = BABYLON.GUI.Button.CreateSimpleButton("attributesButtonClose", "Close");
            buttonClose.color = "white";
            buttonClose.background = "black";
            buttonClose.width = "70px;";
            buttonClose.height = "40px";
            buttonClose.horizontalAlignment = this.position;
            buttonClose.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonClose.onPointerUpObservable.add(function () {
                self.close();
            });
            this.guiTexture.addControl(buttonClose);
            this.buttonClose = buttonClose;
        };
        Skills.prototype.close = function () {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
        };
        Skills.prototype.showText = function () {
            var panel = new BABYLON.GUI.StackPanel('attributes.panel');
            panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            panel.width = 0.33;
            //panel.height = '500px';
            panel.top = "4%";
            this.guiTexture.addControl(panel);
            var textName = this.createText('Skills');
            textName.color = 'green';
            textName.height = '10%';
            textName.fontSize = 36;
            panel.addControl(textName);
            if (this.guiMain.game.player.freeSkillPoints) {
                var textAttributes = this.createText('You have ' + this.guiMain.game.player.freeSkillPoints + ' free skill points.');
                textAttributes.color = 'red';
                textAttributes.height = '10%';
                panel.addControl(textAttributes);
            }
            var doubleAttack = new Character.Skills.DoubleAttack();
            var playerDoubleAttack = this.guiMain.game.player.skills[doubleAttack.getType()];
            if (playerDoubleAttack) {
                doubleAttack = playerDoubleAttack;
            }
            var tornado = new Character.Skills.Tornado();
            var playerTornado = this.guiMain.game.player.skills[tornado.getType()];
            if (playerTornado) {
                tornado = playerTornado;
            }
            var skillPanel = this.createSkill(doubleAttack);
            panel.addControl(skillPanel);
            var skillPanel2 = this.createSkill(tornado);
            panel.addControl(skillPanel2);
        };
        Skills.prototype.createText = function (text) {
            var textBlock = new BABYLON.GUI.TextBlock();
            textBlock.text = text;
            textBlock.color = "white";
            textBlock.width = "100%";
            textBlock.height = "5%";
            return textBlock;
        };
        Skills.prototype.createSkill = function (skill) {
            var self = this;
            var panelSkill = new BABYLON.GUI.Rectangle('attributes.panelSkill');
            //panelSkill.isVertical = true;
            panelSkill.height = '33%';
            panelSkill.thickness = 0;
            //panelSkill.width = 1;
            var textName = this.createText(skill.name);
            textName.color = 'yellow';
            textName.height = '10%';
            textName.top = '-40%';
            textName.fontSize = 24;
            panelSkill.addControl(textName);
            var image = new BABYLON.GUI.Image("skill.image", skill.getImageUrl());
            image.top = '-15%';
            image.width = 0.15;
            image.height = '30%';
            image.onPointerUpObservable.add(function () {
                self.guiMain.game.client.socket.emit('learnSkill', {
                    skillType: skill.getType(),
                    powerType: null
                });
            });
            panelSkill.addControl(image);
            var button = BABYLON.GUI.Button.CreateImageButton("plus", 'Damage - ' + skill.damage, "assets/gui/plus.png");
            button.top = '15%';
            button.height = "10%";
            button.thickness = 0;
            button.width = 0.4;
            button.onPointerUpObservable.add(function () {
                self.guiMain.game.client.socket.emit('learnSkill', {
                    skillType: skill.getType(),
                    powerType: 1
                });
            });
            panelSkill.addControl(button);
            var button = BABYLON.GUI.Button.CreateImageButton("plus", 'Cooldown - ' + skill.cooldown, "assets/gui/plus.png");
            button.height = "10%";
            button.top = '28%';
            button.thickness = 0;
            button.width = 0.4;
            button.onPointerUpObservable.add(function () {
                self.guiMain.game.client.socket.emit('learnSkill', {
                    skillType: skill.getType(),
                    powerType: 2
                });
            });
            panelSkill.addControl(button);
            var button = BABYLON.GUI.Button.CreateImageButton("plus", 'Stock - ' + skill.stock, "assets/gui/plus.png");
            button.height = "10%";
            button.top = '41%';
            button.thickness = 0;
            button.width = 0.4;
            button.onPointerUpObservable.add(function () {
                self.guiMain.game.client.socket.emit('learnSkill', {
                    skillType: skill.getType(),
                    powerType: 3
                });
            });
            panelSkill.addControl(button);
            return panelSkill;
        };
        return Skills;
    }(GUI.Popup));
    GUI.Skills = Skills;
})(GUI || (GUI = {}));
/// <reference path="Popup.ts"/>
var GUI;
(function (GUI) {
    var NewQuest = /** @class */ (function (_super) {
        __extends(NewQuest, _super);
        function NewQuest(guiMain, questServerData) {
            var _this = _super.call(this, guiMain) || this;
            _this.questData = questServerData;
            _this.name = 'Quest';
            _this.imageUrl = "assets/gui/attrs.png";
            _this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            return _this;
        }
        NewQuest.prototype.open = function () {
            var self = this;
            this.opened = true;
            this.initTexture();
            this.guiTexture.addControl(this.container);
            console.log(this.questData);
            this.showText();
            this.createButtonClose();
            var buttonAccept = BABYLON.GUI.Button.CreateSimpleButton("attributesButtonClose", "Accept");
            buttonAccept.color = "white";
            buttonAccept.background = "black";
            buttonAccept.width = "70px;";
            buttonAccept.height = "40px";
            buttonAccept.left = 60;
            buttonAccept.horizontalAlignment = this.position;
            buttonAccept.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonAccept.onPointerUpObservable.add(function () {
                self.guiMain.game.client.socket.emit('acceptQuest', self.questData.questId);
                self.close();
            });
            this.guiTexture.addControl(buttonAccept);
        };
        NewQuest.prototype.close = function () {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
        };
        NewQuest.prototype.showText = function () {
            var self = this;
            var title = new BABYLON.GUI.TextBlock('title');
            title.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            title.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            title.text = this.questData.title;
            title.top = "2%";
            title.color = "white";
            title.width = "25%";
            title.height = "10%";
            title.fontSize = 36;
            title.textWrapping = true;
            this.guiTexture.addControl(title);
            var description = new BABYLON.GUI.TextBlock('descrption');
            description.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            description.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            description.text = this.questData.description;
            description.color = "white";
            description.top = "10%";
            description.width = "25%";
            description.height = "10%";
            description.fontSize = 16;
            description.textWrapping = true;
            this.guiTexture.addControl(description);
            Object.values(this.questData.chapters).forEach(function (chapterData, chapter) {
                var topPadding = (chapter * 15);
                var chapterHeader = new BABYLON.GUI.TextBlock();
                chapterHeader.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                chapterHeader.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
                chapterHeader.text = 'Chapter ' + (chapter + 1);
                chapterHeader.top = topPadding + 15 + "%";
                chapterHeader.width = "25%";
                chapterHeader.height = "25%";
                chapterHeader.color = "orange";
                chapterHeader.fontSize = 28;
                chapterHeader.textWrapping = true;
                self.guiTexture.addControl(chapterHeader);
                var chapterDescription = new BABYLON.GUI.TextBlock();
                chapterDescription.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                chapterDescription.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
                chapterDescription.text = chapterData.description;
                chapterDescription.top = topPadding + 22 + "%";
                chapterDescription.width = "25%";
                chapterDescription.height = "25%";
                chapterDescription.color = "white";
                chapterDescription.fontSize = 18;
                chapterDescription.textWrapping = true;
                self.guiTexture.addControl(chapterDescription);
            });
        };
        return NewQuest;
    }(GUI.Popup));
    GUI.NewQuest = NewQuest;
})(GUI || (GUI = {}));
var Particles;
(function (Particles) {
    var DoubleAttack = /** @class */ (function (_super) {
        __extends(DoubleAttack, _super);
        function DoubleAttack() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DoubleAttack.prototype.initParticleSystem = function () {
            var fireSystem = new BABYLON.ParticleSystem("particles", 1000, this.game.getScene());
            fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            fireSystem.emitter = this.emitter;
            fireSystem.minEmitBox = new BABYLON.Vector3(-2, 0, -2);
            fireSystem.maxEmitBox = new BABYLON.Vector3(2, 4, 2);
            fireSystem.color1 = new BABYLON.Color4(0, 0.5, 0, 1.0);
            fireSystem.color2 = new BABYLON.Color4(0, 0.5, 0, 1.0);
            fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
            fireSystem.minSize = 0.2;
            fireSystem.maxSize = 0.7;
            fireSystem.minLifeTime = 0.2;
            fireSystem.maxLifeTime = 0.4;
            fireSystem.emitRate = 1000;
            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction1 = new BABYLON.Vector3(0, 2, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 2, 0);
            fireSystem.minAngularSpeed = -10;
            fireSystem.maxAngularSpeed = Math.PI;
            fireSystem.minEmitPower = 1;
            fireSystem.maxEmitPower = 3;
            fireSystem.updateSpeed = 0.007;
            this.particleSystem = fireSystem;
        };
        return DoubleAttack;
    }(Particles.AbstractParticle));
    Particles.DoubleAttack = DoubleAttack;
})(Particles || (Particles = {}));
var Particles;
(function (Particles) {
    var Tornado = /** @class */ (function (_super) {
        __extends(Tornado, _super);
        function Tornado() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Tornado.prototype.initParticleSystem = function () {
            var fireSystem = new BABYLON.ParticleSystem("particles", 100, this.game.getScene());
            fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            fireSystem.emitter = this.emitter;
            fireSystem.minEmitBox = new BABYLON.Vector3(0, 3, 0);
            fireSystem.maxEmitBox = new BABYLON.Vector3(0, 3, 0);
            fireSystem.color1 = new BABYLON.Color4(0.5, 0.5, 0, 1.0);
            fireSystem.color2 = new BABYLON.Color4(0.5, 0.5, 0, 1.0);
            fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
            fireSystem.minSize = 0.5;
            fireSystem.maxSize = 1.5;
            fireSystem.minLifeTime = 0.2;
            fireSystem.maxLifeTime = 0.4;
            fireSystem.emitRate = 100;
            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 0, -8);
            fireSystem.minAngularSpeed = -10;
            fireSystem.maxAngularSpeed = Math.PI;
            fireSystem.minEmitPower = 1;
            fireSystem.maxEmitPower = 3;
            fireSystem.updateSpeed = 0.007;
            this.particleSystem = fireSystem;
        };
        return Tornado;
    }(Particles.AbstractParticle));
    Particles.Tornado = Tornado;
})(Particles || (Particles = {}));
var Particles;
(function (Particles) {
    var SolidParticleSystem;
    (function (SolidParticleSystem) {
        var AbstractSolidParticle = /** @class */ (function () {
            function AbstractSolidParticle(game, parent, shape, isCollider) {
                this.game = game;
                this.parent = parent;
                this.shape = shape;
                if (isCollider) {
                    this.collider = BABYLON.MeshBuilder.CreateBox("box", { height: 10 }, game.getScene());
                    this.collider.visibility = 0;
                }
                parent.visibility = 0;
                parent.isPickable = 0;
            }
            return AbstractSolidParticle;
        }());
        SolidParticleSystem.AbstractSolidParticle = AbstractSolidParticle;
    })(SolidParticleSystem = Particles.SolidParticleSystem || (Particles.SolidParticleSystem = {}));
})(Particles || (Particles = {}));
var Particles;
(function (Particles) {
    var SolidParticleSystem;
    (function (SolidParticleSystem) {
        var Nature = /** @class */ (function (_super) {
            __extends(Nature, _super);
            function Nature() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Nature.prototype.buildSPS = function (count) {
                var self = this;
                var game = this.game;
                var parentPositions = this.parent.getVerticesData(BABYLON.VertexBuffer.PositionKind);
                var myBuilder = function (particle, i, s) {
                    var randomPosition = Math.round(Math.random() * 10);
                    var position = new BABYLON.Vector3(parentPositions[s * randomPosition * 3], parentPositions[s * randomPosition * 3 + 1], parentPositions[s * randomPosition * 3 + 2]);
                    if (self.collider) {
                        var newCollider = self.collider.createInstance('sps_nature_collision');
                        newCollider.position.x = position.x;
                        newCollider.position.y = position.y;
                        newCollider.position.z = position.z;
                        newCollider.visibility = 1;
                        Collisions.setCollider(game.getScene(), newCollider);
                    }
                    particle.position = position;
                    var random = Math.random() + 0.5;
                    particle.scaling.y = random;
                    particle.scaling.x = random;
                    particle.scaling.z = random;
                };
                var sps = new BABYLON.SolidParticleSystem('spsNature', this.game.getScene(), { updatable: false });
                sps.addShape(this.shape, count, { positionFunction: myBuilder });
                var spsMesh = sps.buildMesh();
                spsMesh.material = this.shape.material;
                spsMesh.alwaysSelectAsActiveMesh = true;
                return this;
            };
            return Nature;
        }(SolidParticleSystem.AbstractSolidParticle));
        SolidParticleSystem.Nature = Nature;
    })(SolidParticleSystem = Particles.SolidParticleSystem || (Particles.SolidParticleSystem = {}));
})(Particles || (Particles = {}));
var Particles;
(function (Particles) {
    var SolidParticleSystem;
    (function (SolidParticleSystem) {
        var NatureBlock = /** @class */ (function (_super) {
            __extends(NatureBlock, _super);
            function NatureBlock() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            NatureBlock.prototype.buildSPS = function (count) {
                var positions = this.parent.getVerticesData(BABYLON.VertexBuffer.PositionKind);
                var myBuilder = function (particle, i, s) {
                    var randomPosition = Math.round(Math.random() * 5);
                    var position = new BABYLON.Vector3(positions[s * randomPosition * 3], positions[s * randomPosition * 3 + 1], positions[s * randomPosition * 3 + 2]);
                    particle.position = position;
                    var random = Math.random() + 1;
                    particle.scaling.y = random;
                    particle.scaling.x = random;
                    particle.scaling.z = random;
                };
                var sps = new BABYLON.SolidParticleSystem('spsNatureBlock', this.game.getScene(), { updatable: false });
                sps.addShape(this.shape, count, { positionFunction: myBuilder });
                var spsMesh = sps.buildMesh();
                spsMesh.material = this.shape.material;
                return this;
            };
            return NatureBlock;
        }(SolidParticleSystem.AbstractSolidParticle));
        SolidParticleSystem.NatureBlock = NatureBlock;
    })(SolidParticleSystem = Particles.SolidParticleSystem || (Particles.SolidParticleSystem = {}));
})(Particles || (Particles = {}));
var Quests;
(function (Quests) {
    var Awards;
    (function (Awards) {
        var Item = /** @class */ (function (_super) {
            __extends(Item, _super);
            function Item(item) {
                var _this = _super.call(this) || this;
                _this.name = item.name;
                _this.award = item;
                return _this;
            }
            Item.prototype.getAward = function () {
                console.log('get award' + this.award.name);
            };
            Item.AWARD_ID = 1;
            return Item;
        }(Awards.AbstractAward));
        Awards.Item = Item;
    })(Awards = Quests.Awards || (Quests.Awards = {}));
})(Quests || (Quests = {}));
var Quests;
(function (Quests) {
    var KillWorms = /** @class */ (function (_super) {
        __extends(KillWorms, _super);
        function KillWorms(game) {
            var _this = _super.call(this, game) || this;
            _this.title = 'Bandits';
            _this.description = 'Go to portal and kill all bandits.';
            return _this;
        }
        /**
         *
         * @returns {number}
         */
        KillWorms.prototype.getQuestId = function () {
            return Quests.KillWorms.QUEST_ID;
        };
        KillWorms.QUEST_ID = 1;
        return KillWorms;
    }(Quests.AbstractQuest));
    Quests.KillWorms = KillWorms;
})(Quests || (Quests = {}));
var Quests;
(function (Quests) {
    var Requirements;
    (function (Requirements) {
        var Monster = /** @class */ (function (_super) {
            __extends(Monster, _super);
            function Monster(monster, count) {
                var _this = _super.call(this) || this;
                _this.name = 'Kill ' + count + ' ' + monster.name + '';
                _this.requirement = monster;
                return _this;
            }
            Monster.REQUIREMENT_ID = 1;
            return Monster;
        }(Requirements.AbstractRequirement));
        Requirements.Monster = Monster;
    })(Requirements = Quests.Requirements || (Quests.Requirements = {}));
})(Quests || (Quests = {}));
/// <reference path="../Inventory.ts"/>
var GUI;
(function (GUI) {
    var Inventory;
    (function (Inventory) {
        var EquipBlock = /** @class */ (function () {
            function EquipBlock(inventory) {
                this.inventory = inventory;
            }
            /**
             * @returns {GUI.Inventory.EquipBlock}
             */
            EquipBlock.prototype.createBlockWithImage = function () {
                if (this.item) {
                    var panelItem = new BABYLON.GUI.Rectangle();
                    panelItem.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
                    panelItem.thickness = 0;
                    panelItem.width = this.blockWidth;
                    panelItem.height = this.blockHeight;
                    panelItem.top = this.blockTop;
                    panelItem.left = this.blockLeft;
                    panelItem.isPointerBlocker = true;
                    this.inventory.guiTexture.addControl(panelItem);
                    this.block = panelItem;
                    this.createImage();
                }
                return this;
            };
            /**
             * @returns {GUI.Inventory.EquipBlock}
             */
            EquipBlock.prototype.createImage = function () {
                var self = this;
                var item = this.item;
                var image = this.inventory.createItemImage(this.item);
                image.onPointerUpObservable.add(function () {
                    self.inventory.guiMain.game.player.inventory.emitEquip(self.item);
                    self.inventory.guiTexture.removeControl(self.block);
                    self.inventory.showItems();
                    if (self.inventory.guiMain.attributesOpened) {
                        self.inventory.guiMain.attributes.refreshPopup();
                    }
                });
                image.onPointerEnterObservable.add(function () {
                    var text = item.name;
                    if (item.statistics.damage > 0) {
                        text += "\nDamage: " + item.statistics.damage + "";
                    }
                    if (item.statistics.armor > 0) {
                        text += "\nArmor: " + item.statistics.armor + "";
                    }
                    new GUI.TooltipButton(self.block, text);
                });
                image.onPointerOutObservable.add(function () {
                    self.block.children.forEach(function (value, key) {
                        if (value.name == 'tooltip') {
                            self.block.removeControl(value);
                        }
                    });
                });
                this.block.addControl(image);
                return this;
            };
            return EquipBlock;
        }());
        Inventory.EquipBlock = EquipBlock;
    })(Inventory = GUI.Inventory || (GUI.Inventory = {}));
})(GUI || (GUI = {}));
/// <reference path="EquipBlock.ts"/>
var GUI;
(function (GUI) {
    var Inventory;
    (function (Inventory) {
        var Armor = /** @class */ (function (_super) {
            __extends(Armor, _super);
            function Armor(inventory) {
                var _this = _super.call(this, inventory) || this;
                _this.blockWidth = "15%";
                _this.blockHeight = "30%";
                _this.blockTop = "-25%";
                _this.blockLeft = "-8%";
                _this.item = inventory.guiMain.player.inventory.armor;
                _this.createBlockWithImage();
                return _this;
            }
            return Armor;
        }(Inventory.EquipBlock));
        Inventory.Armor = Armor;
    })(Inventory = GUI.Inventory || (GUI.Inventory = {}));
})(GUI || (GUI = {}));
/// <reference path="EquipBlock.ts"/>
var GUI;
(function (GUI) {
    var Inventory;
    (function (Inventory) {
        var Boots = /** @class */ (function (_super) {
            __extends(Boots, _super);
            function Boots(inventory) {
                var _this = _super.call(this, inventory) || this;
                _this.blockWidth = "4%";
                _this.blockHeight = "20%";
                _this.blockTop = "-10%";
                _this.blockLeft = "-23.5%";
                _this.item = inventory.guiMain.player.inventory.boots;
                _this.createBlockWithImage();
                return _this;
            }
            return Boots;
        }(Inventory.EquipBlock));
        Inventory.Boots = Boots;
    })(Inventory = GUI.Inventory || (GUI.Inventory = {}));
})(GUI || (GUI = {}));
/// <reference path="EquipBlock.ts"/>
var GUI;
(function (GUI) {
    var Inventory;
    (function (Inventory) {
        var Gloves = /** @class */ (function (_super) {
            __extends(Gloves, _super);
            function Gloves(inventory) {
                var _this = _super.call(this, inventory) || this;
                _this.blockWidth = "5%";
                _this.blockHeight = "20%";
                _this.blockTop = "-11%";
                _this.blockLeft = "-4%";
                _this.item = inventory.guiMain.player.inventory.gloves;
                _this.createBlockWithImage();
                return _this;
            }
            return Gloves;
        }(Inventory.EquipBlock));
        Inventory.Gloves = Gloves;
    })(Inventory = GUI.Inventory || (GUI.Inventory = {}));
})(GUI || (GUI = {}));
/// <reference path="EquipBlock.ts"/>
var GUI;
(function (GUI) {
    var Inventory;
    (function (Inventory) {
        var Helm = /** @class */ (function (_super) {
            __extends(Helm, _super);
            function Helm(inventory) {
                var _this = _super.call(this, inventory) || this;
                _this.blockWidth = "6%";
                _this.blockHeight = "20%";
                _this.blockTop = "-44%";
                _this.blockLeft = "-13%";
                _this.item = inventory.guiMain.player.inventory.helm;
                _this.createBlockWithImage();
                return _this;
            }
            return Helm;
        }(Inventory.EquipBlock));
        Inventory.Helm = Helm;
    })(Inventory = GUI.Inventory || (GUI.Inventory = {}));
})(GUI || (GUI = {}));
/// <reference path="EquipBlock.ts"/>
var GUI;
(function (GUI) {
    var Inventory;
    (function (Inventory) {
        var Shield = /** @class */ (function (_super) {
            __extends(Shield, _super);
            function Shield(inventory) {
                var _this = _super.call(this, inventory) || this;
                _this.blockWidth = "6%";
                _this.blockHeight = "20%";
                _this.blockTop = "-27%";
                _this.blockLeft = "-3%";
                _this.item = inventory.guiMain.player.inventory.shield;
                _this.createBlockWithImage();
                return _this;
            }
            return Shield;
        }(Inventory.EquipBlock));
        Inventory.Shield = Shield;
    })(Inventory = GUI.Inventory || (GUI.Inventory = {}));
})(GUI || (GUI = {}));
/// <reference path="EquipBlock.ts"/>
var GUI;
(function (GUI) {
    var Inventory;
    (function (Inventory) {
        var Weapon = /** @class */ (function (_super) {
            __extends(Weapon, _super);
            function Weapon(inventory) {
                var _this = _super.call(this, inventory) || this;
                _this.blockWidth = "6%";
                _this.blockHeight = "20%";
                _this.blockTop = "-27%";
                _this.blockLeft = "-22.5%";
                _this.item = inventory.guiMain.player.inventory.weapon;
                _this.createBlockWithImage();
                return _this;
            }
            return Weapon;
        }(Inventory.EquipBlock));
        Inventory.Weapon = Weapon;
    })(Inventory = GUI.Inventory || (GUI.Inventory = {}));
})(GUI || (GUI = {}));
