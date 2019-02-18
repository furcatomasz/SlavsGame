var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scene = /** @class */ (function () {
    function Scene() {
    }
    Scene.prototype.setDefaults = function (game, scene) {
        this.game = game;
        this.babylonScene = scene;
        SlavsLoader.showLoaderWithText('Initializing scene...');
        scene.actionManager = new BABYLON.ActionManager(scene);
        this.assetManager = new BABYLON.AssetsManager(scene);
        this.initFactories(scene);
        if (Game.SHOW_DEBUG) {
            scene.debugLayer.show();
        }
        BABYLON.SceneLoader.CleanBoneMatrixWeights = true;
        return this;
    };
    Scene.prototype.playEnemiesAnimationsInFrumStrum = function () {
        var game = this.game;
        var scene = this.babylonScene;
        var gameCamera = scene.getCameraByName('gameCamera');
        if (game.frumstrumEnemiesInterval) {
            clearInterval(game.frumstrumEnemiesInterval);
        }
        var battleMusic = new BABYLON.Sound("Forest night", "assets/sounds/music/battle.mp3", scene, null, { loop: true, autoplay: false, volume: 1 });
        var timeoutNumber;
        game.frumstrumEnemiesInterval = setInterval(function () {
            var activeEnemies = 0;
            game.enemies.forEach(function (enemy) {
                if (enemy.isDeath) {
                    return;
                }
                var isActiveMesh = gameCamera.isInFrustum(enemy.mesh);
                if (isActiveMesh) {
                    activeEnemies = 1;
                }
                if (!enemy.animation && isActiveMesh) {
                    enemy.runAnimationStand();
                }
                else if (enemy.animation && !isActiveMesh) {
                    enemy.animation.stop();
                    enemy.animation = null;
                }
            });
            if (activeEnemies && !battleMusic.isPlaying) {
                if (timeoutNumber) {
                    timeoutNumber = clearTimeout(timeoutNumber);
                    battleMusic.setVolume(1, 1);
                }
                else {
                    battleMusic.setVolume(1, 1);
                    battleMusic.play();
                }
            }
            else if (!activeEnemies && battleMusic.isPlaying && !timeoutNumber) {
                battleMusic.setVolume(0, 2);
                timeoutNumber = setTimeout(function () {
                    battleMusic.stop();
                }, 2000);
            }
        }, 1000);
        return this;
    };
    Scene.prototype.executeWhenReady = function (onReady, onPlayerConnected, registerListener) {
        if (registerListener === void 0) { registerListener = true; }
        var scene = this.babylonScene;
        var assetsManager = this.assetManager;
        var self = this;
        var game = this.game;
        scene.executeWhenReady(function () {
            assetsManager.onFinish = function (tasks) {
                game.client.socket.emit('changeScenePre');
                var sceneIndex = game.scenes.push(scene);
                game.activeScene = sceneIndex - 1;
                if (onReady) {
                    onReady();
                }
                for (var i = 0; i < scene.meshes.length; i++) {
                    var sceneMesh = scene.meshes[i];
                    sceneMesh.layerMask = 2;
                }
                self.playEnemiesAnimationsInFrumStrum();
            };
            assetsManager.onProgress = function (remainingCount, totalCount, lastFinishedTask) {
                SlavsLoader.showLoaderWithText('Loading assets... ' + remainingCount + ' of ' + totalCount + '.');
            };
            assetsManager.load();
            if (registerListener) {
                var listener = function listener() {
                    if (onPlayerConnected) {
                        onPlayerConnected();
                    }
                    self.options = new GameOptions(game);
                    self.options.addMeshToDynamicShadowGenerator(game.player.mesh);
                    game.controller.registerControls(scene);
                    game.client.socket.emit('changeScenePost');
                    game.client.socket.emit('refreshGateways');
                    game.client.socket.emit('refreshQuests');
                    game.client.socket.emit('refreshChests');
                    game.client.socket.emit('refreshRandomSpecialItems');
                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            }
        });
        return this;
    };
    Scene.prototype.setCamera = function (scene) {
        var cameraByName = scene.getCameraByName('Camera');
        if (cameraByName) {
            cameraByName.dispose();
        }
        var gameCamera = new BABYLON.FreeCamera("gameCamera", new BABYLON.Vector3(0, 0, 0), scene);
        gameCamera.rotation = new BABYLON.Vector3(0.75, 0.75, 0);
        gameCamera.maxZ = 50;
        gameCamera.minZ = 15;
        gameCamera.fovMode = 0;
        gameCamera.layerMask = 2;
        ///MOBILE
        gameCamera.fov = 0.8;
        var guiCamera = new BABYLON.FreeCamera("GUICamera", new BABYLON.Vector3(0, 0, 0), scene);
        guiCamera.layerMask = 1;
        scene.activeCameras = [gameCamera, guiCamera];
        scene.cameraToUseForPointers = gameCamera;
        return this;
    };
    Scene.prototype.setFog = function (scene) {
        scene.clearColor = new BABYLON.Color3(0, 0, 0);
        scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
        scene.fogColor = new BABYLON.Color3(0.02, 0.05, 0.2);
        scene.fogColor = new BABYLON.Color3(0, 0, 0);
        scene.fogDensity = 1;
        scene.fogStart = 30;
        scene.fogEnd = 50;
        return this;
    };
    Scene.prototype.disableFog = function (scene) {
        scene.fogMode = BABYLON.Scene.FOGMODE_NONE;
    };
    Scene.prototype.optimizeScene = function (scene) {
        scene.collisionsEnabled = true;
        scene.fogEnabled = true;
        scene.lensFlaresEnabled = false;
        scene.probesEnabled = false;
        scene.postProcessesEnabled = true;
        scene.spritesEnabled = true;
        scene.audioEnabled = true;
        return this;
    };
    Scene.prototype.initFactories = function (scene) {
        var assetsManager = this.assetManager;
        this.game.factories['character'] = new Factories.Characters(this.game, scene, assetsManager).initFactory();
        this.game.factories['skeleton'] = new Factories.Skeletons(this.game, scene, assetsManager).initFactory();
        this.game.factories['skeletonWarrior'] = new Factories.SkeletonWarrior(this.game, scene, assetsManager).initFactory();
        this.game.factories['skeletonBoss'] = new Factories.SkeletonBoss(this.game, scene, assetsManager).initFactory();
        this.game.factories['chest'] = new Factories.Chest(this.game, scene, assetsManager).initFactory();
        this.game.factories['nature_grain'] = new Factories.Nature(this.game, scene, assetsManager).initFactory();
        return this;
    };
    Scene.TYPE = 0;
    return Scene;
}());
/// <reference path="../bower_components/babylonjs/dist/babylon.d.ts" />
/// <reference path="../bower_components/babylonjs/dist/gui/babylon.gui.d.ts" />
var Game = /** @class */ (function () {
    function Game(canvasElement, serverUrl, accessToken, isMobile, isDebug) {
        if (isMobile === void 0) { isMobile = false; }
        if (isDebug === void 0) { isDebug = false; }
        var self = this;
        self.canvas = canvasElement;
        self.engine = new BABYLON.Engine(self.canvas, false, null, false);
        if (isMobile) {
            self.engine.setHardwareScalingLevel(2);
        }
        if (isDebug) {
            Game.SHOW_DEBUG = 1;
        }
        self.engine.loadingScreen = new SlavsLoader('');
        self.controller = new Mouse(self);
        self.client = new SocketIOClient(self);
        self.factories = [];
        self.enemies = [];
        self.quests = [];
        self.npcs = [];
        self.scenes = [];
        self.randomSpecialItems = [];
        self.chests = [];
        self.activeScene = null;
        self.events = new Events();
        self.client.connect(serverUrl, accessToken);
        self.animate();
    }
    Game.prototype.getScene = function () {
        return this.scenes[this.activeScene];
    };
    Game.prototype.animate = function () {
        var _this = this;
        var self = this;
        this.engine.runRenderLoop(function () {
            if (_this.activeScene != null && self.getScene().activeCamera) {
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
            this.guiTexture.layer.layerMask = 1;
            var container = new BABYLON.GUI.Rectangle('gui.panel.' + this.name);
            container.horizontalAlignment = this.position;
            container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            container.thickness = 0;
            container.isPointerBlocker = true;
            this.container = container;
            this.guiTexture.addControl(container);
            var image = new BABYLON.GUI.Image('gui.popup.image.', this.imageUrl);
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.width = 1;
            image.height = 1;
            image.isPointerBlocker = true;
            container.addControl(image);
            this.container.addControl(image);
            this.containerBackground = image;
            return this;
        };
        Popup.prototype.createButtonClose = function () {
            var self = this;
            var buttonClose = BABYLON.GUI.Button.CreateImageOnlyButton("buttonClose", "assets/gui/buttons/close.png");
            buttonClose.width = "20px;";
            buttonClose.height = "21px";
            buttonClose.thickness = 0;
            buttonClose.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            buttonClose.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            buttonClose.onPointerUpObservable.add(function () {
                self.close();
            });
            this.container.addControl(buttonClose);
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
            panelItem.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            panelItem.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            panelItem.thickness = 0;
            panelItem.width = this.blockWidth;
            panelItem.height = this.blockHeight;
            panelItem.top = this.blockTop;
            panelItem.left = this.blockLeft;
            panelItem.isPointerBlocker = true;
            this.inventory.container.addControl(panelItem);
            this.block = panelItem;
            this.createImage();
            var blockWidth = this.blockWidth;
            var blockHeight = this.blockHeight;
            var blockTop = this.blockTop;
            var blockLeft = this.blockLeft;
            panelItem.width = blockWidth;
            panelItem.height = blockHeight;
            panelItem.top = blockTop;
            panelItem.left = blockLeft;
        }
        return this;
    };
    EquipBlock.prototype.createImage = function () {
        var self = this;
        var item = this.item;
        if (item.statistics) {
            var image = this.inventory.createItemImage(item);
            TooltipHelper.createTooltipOnInventoryItemButton(self.inventory.guiTexture, item, image, function () {
                self.inventory.guiMain.game.player.inventory.emitEquip(self.item);
                self.inventory.guiTexture.removeControl(self.block);
                self.inventory.showItems();
                self.inventory.guiMain.attributes.refreshPopup();
            });
            this.block.addControl(image);
        }
        return this;
    };
    return EquipBlock;
}());
/// <reference path="Scenes/Scene.ts"/>
/// <reference path="game.ts"/>
/// <reference path="GUI/popup/Popup.ts"/>
/// <reference path="GUI/popup/inventory/EquipBlock.ts"/>
var Events = /** @class */ (function () {
    function Events() {
        this.playerConnected = new Event(Events.PLAYER_CONNECTED);
        this.equipReceived = new Event(Events.EQUIP_RECEIVED);
        this.questsReceived = new Event(Events.QUESTS_RECEIVED);
    }
    Events.PLAYER_CONNECTED = 'playerConnected';
    Events.EQUIP_RECEIVED = 'equipReceived';
    Events.QUESTS_RECEIVED = 'questsReceived';
    return Events;
}());
var GameOptions = /** @class */ (function () {
    function GameOptions(game) {
        this.dynamicShadowsArray = [];
        this.refreshAllData();
        this.initInScene(game);
    }
    GameOptions.prototype.refreshAllData = function () {
        this.staticShadows = this.getFromLocalStorage('staticShadows');
        this.dynamicShadows = this.getFromLocalStorage('dynamicShadows');
        this.postProccessing = this.getFromLocalStorage('postProccessing');
        this.fxaa = this.getFromLocalStorage('fxaa');
        this.fog = this.getFromLocalStorage('fog');
        this.dof = this.getFromLocalStorage('dof');
        this.fStop = this.getFromLocalStorage('fStop');
        this.focusDistance = this.getFromLocalStorage('focusDistance');
        this.focalLength = this.getFromLocalStorage('focalLength');
        this.lensSize = this.getFromLocalStorage('lensSize');
        this.bloom = this.getFromLocalStorage('bloom');
    };
    GameOptions.prototype.getFromLocalStorage = function (key) {
        return JSON.parse(localStorage.getItem('options.' + key));
    };
    GameOptions.saveInLocalStorage = function (key, value, game) {
        localStorage.setItem('options.' + key, JSON.stringify(value));
        game.sceneManager.options.initInScene(game);
    };
    GameOptions.prototype.addMeshToDynamicShadowGenerator = function (mesh) {
        this.dynamicShadowsArray.push(mesh);
        if (this.dynamicShadowGenerator) {
            this.dynamicShadowGenerator.getShadowMap().renderList.push(mesh);
        }
    };
    GameOptions.prototype.initInScene = function (game) {
        this.refreshAllData();
        var scene = game.getScene();
        var self = this;
        var camera = scene.getCameraByName('gameCamera');
        if (this.staticShadows && !this.staticShadowGenerator && game.sceneManager.environment && game.sceneManager.environment.light) {
            var shadowGenerator = new BABYLON.ShadowGenerator(2048, game.sceneManager.environment.light);
            shadowGenerator.usePercentageCloserFiltering = true;
            shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
            shadowGenerator.getShadowMap().refreshRate = BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE;
            game.sceneManager.environment.light.autoUpdateExtends = false;
            this.staticShadowGenerator = shadowGenerator;
            var staticShadowMeshes = game.sceneManager.environment.staticShadowObjects;
            for (var i = 0; i < staticShadowMeshes.length; i++) {
                var shadowedMesh = staticShadowMeshes[i];
                shadowGenerator.getShadowMap().renderList.push(shadowedMesh);
            }
        }
        else if (!this.staticShadows && this.staticShadowGenerator) {
            this.staticShadowGenerator.dispose();
            this.staticShadowGenerator = null;
        }
        if (this.dynamicShadows && !this.dynamicShadowGenerator) {
            self.dynamicShadowGenerator = new BABYLON.ShadowGenerator(512, game.player.playerLight);
            self.dynamicShadowsArray.forEach(function (mesh) {
                self.dynamicShadowGenerator.getShadowMap().renderList.push(mesh);
            });
        }
        else if (!this.dynamicShadows && this.dynamicShadowGenerator) {
            this.dynamicShadowGenerator.dispose();
            this.dynamicShadowGenerator = null;
        }
        if (!this.postProccessing && this.renderingPipeline) {
            this.renderingPipeline.dispose();
            this.renderingPipeline = null;
        }
        else if (this.postProccessing && !this.renderingPipeline) {
            this.renderingPipeline = new BABYLON.DefaultRenderingPipeline("postProccesing", false, scene, [camera]);
        }
        if (this.renderingPipeline) {
            this.renderingPipeline.fxaaEnabled = this.fxaa;
            this.renderingPipeline.depthOfFieldEnabled = this.dof;
            this.renderingPipeline.bloomEnabled = this.bloom;
            this.renderingPipeline.bloomThreshold = 0.1;
            this.renderingPipeline.bloomWeight = 1;
            this.renderingPipeline.bloomScale = 1;
            this.renderingPipeline.depthOfField.depthOfFieldBlurLevel = BABYLON.DepthOfFieldEffectBlurLevel.Medium;
            // this.renderingPipeline.depthOfField.fStop = this.fStop;
            // this.renderingPipeline.depthOfField.focusDistance = this.focusDistance;
            // this.renderingPipeline.depthOfField.focalLength = this.focalLength;
            // this.renderingPipeline.depthOfField.lensSize = this.lensSize;
            this.renderingPipeline.depthOfField.fStop = 0.27;
            this.renderingPipeline.depthOfField.focusDistance = 43050;
            this.renderingPipeline.depthOfField.focalLength = 292;
            this.renderingPipeline.depthOfField.lensSize = 136;
        }
        if (this.fog) {
            game.sceneManager.setFog(game.getScene());
        }
        else {
            game.sceneManager.disableFog(game.getScene());
        }
    };
    return GameOptions;
}());
var SlavsLoader = /** @class */ (function () {
    function SlavsLoader(loadingUIText) {
        this.loadingUIText = loadingUIText;
    }
    SlavsLoader.prototype.displayLoadingUI = function () {
        var loader = document.getElementById("game-loader");
        loader.style.display = "inline";
        loader.style.opacity = "1";
        SlavsLoader.changeLoadingText('Loading scene...');
    };
    SlavsLoader.prototype.hideLoadingUI = function () {
        var loader = document.getElementById("game-loader");
        var canvas = document.getElementById("renderCanvas");
        loader.style.opacity = "0";
        loader.style.display = "none";
    };
    SlavsLoader.changeLoadingText = function (text) {
        var loaderText = document.getElementById("game-loader-text");
        loaderText.innerHTML = text;
    };
    SlavsLoader.showLoaderWithText = function (text) {
        var loader = document.getElementById("game-loader");
        loader.style.opacity = "1";
        loader.style.display = "inline";
        SlavsLoader.changeLoadingText(text);
    };
    return SlavsLoader;
}());
/// <reference path="game.ts" />
var SocketIOClient = /** @class */ (function () {
    function SocketIOClient(game) {
        this.game = game;
    }
    SocketIOClient.prototype.connect = function (socketUrl, accessToken) {
        SlavsLoader.showLoaderWithText('Establishing connection with server...');
        this.socket = io.connect(socketUrl, { query: 'gameToken=' + accessToken });
        this.socket.on('connect_error', function () {
            SlavsLoader.showLoaderWithText('Problem with connection to server');
        });
        this.playerConnected();
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.playerConnected = function () {
        var self = this;
        var game = this.game;
        var events = [
            new ShowEnemiesSocketEvent(game, this.socket),
            new UpdateEnemiesSocketEvent(game, this.socket),
            new OnOpenChest(game, this.socket),
            new OnRefreshChest(game, this.socket),
            new OnAddSpecialItem(game, this.socket),
            new OnRefreshRandomSpecialItems(game, this.socket),
            new OnShowDroppedItem(game, this.socket),
            new OnQuestRequirementDoneInformation(game, this.socket),
            new OnQuestRequirementInformation(game, this.socket),
            new OnRefreshQuests(game, this.socket),
            new OnChangeScene(game, this.socket),
            new OnRefreshGateways(game, this.socket),
            new OnAddAttribute(game, this.socket),
            new OnAddExperience(game, this.socket),
            new OnNewLvl(game, this.socket),
            new OnRefreshPlayerEquip(game, this.socket),
            new OnRemovePlayer(game, this.socket),
            new OnShowPlayer(game, this.socket),
            new OnUpdatePlayers(game, this.socket),
            new OnUpdatePlayersSkills(game, this.socket),
        ];
        this.socket.on('clientConnected', function (data) {
            game.remotePlayers = [];
            self.connectionId = data.connectionId;
            events.forEach(function (event) {
                event.listen();
            });
        });
        this.socket.emit('changeScene', SelectCharacter.TYPE);
        // this.socket.emit('selectCharacter', 1);
        return this;
    };
    return SocketIOClient;
}());
var AttackActions = /** @class */ (function () {
    function AttackActions(game) {
        this.game = game;
    }
    AttackActions.prototype.attackMonster = function (monster) {
        var game = this.game;
        var self = this;
        if (!game.player.isAnySkillIsInUse()) {
            this.cancelCheckAttack();
            game.controller.attackPoint = monster.meshForMove;
            game.controller.targetPoint = null;
            this.attackOnce = false;
            this.attackedMonster = monster;
            game.goToMeshFunction = GoToMeshAndRunAction.execute(game, monster.meshForMove, function () {
                game.player.runAnimationDeathOrStand();
                game.player.unregisterMoveWithCollision(true);
                self.checkAttackObserver = game.getScene().onBeforeRenderObservable.add(function () {
                    self.checkAttack(function () {
                        if (self.game.controller.attackPoint && !self.attackOnce) {
                            self.intervalAttackRegisteredFunction = setInterval(function () {
                                self.intervalAttackFunction();
                            }, 100);
                        }
                    });
                });
            });
        }
    };
    AttackActions.prototype.abbadonMonsterAttack = function () {
        clearInterval(this.intervalAttackRegisteredFunction);
        this.cancelCheckAttack();
        this.game.controller.attackPoint = null;
    };
    AttackActions.prototype.attackOnlyOnce = function () {
        this.attackOnce = true;
        clearInterval(this.intervalAttackRegisteredFunction);
    };
    AttackActions.prototype.cancelCheckAttack = function () {
        this.game.getScene().onBeforeRenderObservable.remove(this.checkAttackObserver);
    };
    AttackActions.prototype.intervalAttackFunction = function () {
        var game = this.game;
        if (!game.player.isAnySkillIsInUse()) {
            game.client.socket.emit('attack', {
                attack: this.attackedMonster.id,
                targetPoint: game.controller.attackPoint.position,
                rotation: game.controller.attackPoint.rotation
            });
        }
    };
    AttackActions.prototype.checkAttack = function (actionAfterCheck) {
        var game = this.game;
        if (game.player.monstersToAttack[this.attackedMonster.id] == !undefined) {
            this.intervalAttackFunction();
            game.getScene().onBeforeRenderObservable.remove(this.checkAttackObserver);
            actionAfterCheck();
        }
    };
    return AttackActions;
}());
var GoToMeshAndRunAction = /** @class */ (function () {
    function GoToMeshAndRunAction() {
    }
    GoToMeshAndRunAction.execute = function (game, mesh, action) {
        var player = game.player;
        var targetPosition = mesh.position;
        var scene = game.getScene();
        if (game.goToMeshFunction) {
            scene.unregisterBeforeRender(game.goToMeshFunction);
            game.goToMeshFunction = null;
        }
        var checkIntersectionFunction = function () {
            if (player.meshForMove.intersectsMesh(mesh)) {
                game.getScene().unregisterBeforeRender(checkIntersectionFunction);
                action();
            }
        };
        if (!player.meshForMove.intersectsMesh(mesh)) {
            player.runPlayerToPosition(targetPosition);
            game.client.socket.emit('setTargetPoint', {
                position: targetPosition
            });
            scene.registerBeforeRender(checkIntersectionFunction);
        }
        else {
            action();
        }
        return checkIntersectionFunction;
    };
    return GoToMeshAndRunAction;
}());
var AbstractAnimation = /** @class */ (function () {
    function AbstractAnimation() {
    }
    return AbstractAnimation;
}());
var BounceAnimation = /** @class */ (function (_super) {
    __extends(BounceAnimation, _super);
    function BounceAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BounceAnimation.getAnimation = function () {
        var aniamtion = new BABYLON.Animation("bounceAnimation", "position.y", 5, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        var keys = [
            {
                frame: 0,
                value: 1
            },
            {
                frame: 15,
                value: 1.5
            },
            {
                frame: 30,
                value: 1
            }
        ];
        aniamtion.setKeys(keys);
        var easingFunction = new BABYLON.BackEase();
        easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
        aniamtion.setEasingFunction(easingFunction);
        return aniamtion;
    };
    return BounceAnimation;
}(AbstractAnimation));
var AbstractCharacter = /** @class */ (function () {
    function AbstractCharacter(name, game) {
        this.name = name;
        this.game = game;
    }
    AbstractCharacter.prototype.initPatricleSystemDamage = function () {
        var emitterDamage = BABYLON.Mesh.CreateBox("emitter0", 0.1, this.game.getScene());
        emitterDamage.parent = this.mesh;
        emitterDamage.position.y = 4;
        emitterDamage.visibility = 0;
        this.particleSystemEmitter = emitterDamage;
        return this;
    };
    AbstractCharacter.prototype.showDamage = function (damage) {
        var dynamicTexture = new BABYLON.DynamicTexture(null, 128, this.game.getScene(), true);
        var font = "44px RuslanDisplay";
        dynamicTexture.drawText(damage, 64, 80, font, "white", null, true, true);
        var particleSystemDamage = new BABYLON.ParticleSystem(null, 1 /*Capacity, i.e. max of 1 at a time*/, this.game.getScene());
        particleSystemDamage.emitter = this.particleSystemEmitter;
        particleSystemDamage.emitRate = 100;
        particleSystemDamage.minSize = 2.0;
        particleSystemDamage.maxSize = 4.0;
        particleSystemDamage.gravity = new BABYLON.Vector3(0, -9.81 * 2, 0);
        particleSystemDamage.direction1 = new BABYLON.Vector3(0, 10, 0);
        particleSystemDamage.direction2 = new BABYLON.Vector3(0, 10, 0);
        particleSystemDamage.minAngularSpeed = -Math.PI;
        particleSystemDamage.maxAngularSpeed = Math.PI;
        particleSystemDamage.minLifeTime = 1;
        particleSystemDamage.maxLifeTime = 1;
        particleSystemDamage.targetStopDuration = 0.8;
        particleSystemDamage.particleTexture = dynamicTexture;
        particleSystemDamage.layerMask = 2;
        particleSystemDamage.start();
        setTimeout(function () {
            dynamicTexture.dispose();
            particleSystemDamage.dispose();
        }, 1500);
    };
    AbstractCharacter.prototype.createBoxForMove = function (position) {
        var scene = this.game.getScene();
        this.meshForMove = BABYLON.Mesh.CreateBox(this.name + '_moveBox', 4, scene, false);
        this.meshForMove.checkCollisions = true;
        this.meshForMove.visibility = 0;
        this.meshForMove.position = position;
        this.meshForMove.layerMask = 2;
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
        var mesh = this.mesh;
        var skeleton = mesh.skeleton;
        this.isAttack = true;
        if (callbackEnd) {
            callbackStart();
        }
        if (self.sfxHit) {
            self.sfxHit.play();
        }
        self.animation = skeleton.beginAnimation(animation, loop, 1, function () {
            if (callbackEnd) {
                callbackEnd();
            }
            self.runAnimationDeathOrStand();
            self.isAttack = false;
        });
    };
    AbstractCharacter.prototype.runAnimationSkill = function (animation, callbackStart, callbackEnd, loop, speed, standAnimationOnFinish) {
        if (callbackStart === void 0) { callbackStart = null; }
        if (callbackEnd === void 0) { callbackEnd = null; }
        if (loop === void 0) { loop = false; }
        if (speed === void 0) { speed = 1; }
        if (standAnimationOnFinish === void 0) { standAnimationOnFinish = true; }
        var self = this;
        var mesh = this.mesh;
        var skeleton = mesh.skeleton;
        if (callbackStart) {
            callbackStart();
        }
        self.animation = skeleton.beginAnimation(animation, loop, 1 * speed, function () {
            if (callbackEnd) {
                callbackEnd();
            }
            if (standAnimationOnFinish) {
                self.runAnimationDeathOrStand();
            }
        });
    };
    AbstractCharacter.prototype.runAnimationWalk = function () {
        if (!this.isWalk && !this.isAttack) {
            var self_1 = this;
            var skeleton = this.mesh.skeleton;
            this.isWalk = true;
            self_1.sfxWalk.play();
            self_1.onWalkStart();
            self_1.animation = skeleton.beginAnimation(AbstractCharacter.ANIMATION_WALK, true, 1.2, function () {
                self_1.runAnimationDeathOrStand();
                self_1.animation = null;
                self_1.isWalk = false;
                self_1.sfxWalk.stop();
                self_1.onWalkEnd();
            });
        }
    };
    AbstractCharacter.prototype.runAnimationStand = function () {
        if (!this.isStand) {
            var self_2 = this;
            var skeleton = this.mesh.skeleton;
            this.isStand = true;
            self_2.animation = skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true, 1, function () {
                self_2.animation = null;
                self_2.isStand = false;
                if (self_2.isDeath) {
                    self_2.runAnimationDeath();
                }
            });
        }
    };
    AbstractCharacter.prototype.runAnimationDeath = function () {
        this.animation = this.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_DEATH);
    };
    AbstractCharacter.prototype.runAnimationDeathOrStand = function () {
        if (this.isDeath) {
            this.runAnimationDeath();
        }
        else {
            this.runAnimationStand();
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
    AbstractCharacter.ANIMATION_DEATH = 'death';
    AbstractCharacter.ANIMATION_STAND_WEAPON = 'Stand_with_weapon';
    AbstractCharacter.ANIMATION_ATTACK_01 = 'Attack';
    AbstractCharacter.ANIMATION_ATTACK_02 = 'Attack02';
    AbstractCharacter.ANIMATION_SKILL_01 = 'Skill01';
    AbstractCharacter.ANIMATION_SKILL_02 = 'Skill02';
    return AbstractCharacter;
}());
var Mouse = /** @class */ (function () {
    function Mouse(game) {
        this.game = game;
    }
    Mouse.prototype.registerControls = function (scene) {
        var self = this;
        var clickTrigger = false;
        var lastUpdate = new Date().getTime() / 1000;
        var game = this.game;
        var clickParticleSystem = ClickParticles.getParticles(scene);
        scene.onPointerUp = function (evt, pickResult) {
            if (clickTrigger) {
                clickTrigger = false;
                var pickedMesh = pickResult.pickedMesh;
                if (pickedMesh && (pickedMesh.name.search("Ground") >= 0)) {
                    clickParticleSystem.start();
                    if (game.goToMeshFunction) {
                        scene.unregisterBeforeRender(game.goToMeshFunction);
                        game.goToMeshFunction = null;
                    }
                }
            }
        };
        scene.onPointerDown = function (evt, pickResult) {
            var pickedMesh = pickResult.pickedMesh;
            if (!self.game.player.isAlive || game.player.isAnySkillIsInUse()) {
                return;
            }
            clickTrigger = true;
            if (pickedMesh && (pickedMesh.name.search("Ground") >= 0)) {
                game.player.attackActions.cancelCheckAttack();
                self.attackPoint = null;
                self.targetPoint = pickResult.pickedPoint;
                self.targetPoint.y = 0;
                clickParticleSystem.emitter = new BABYLON.Vector3(self.targetPoint.x, 0, self.targetPoint.z); // the starting location
                self.game.player.runPlayerToPosition(self.targetPoint);
                self.game.client.socket.emit('setTargetPoint', {
                    position: self.targetPoint
                });
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
                        clickParticleSystem.emitter = new BABYLON.Vector3(self.targetPoint.x, 0, self.targetPoint.z); // the starting location
                        self.game.player.runPlayerToPosition(self.targetPoint);
                        if (lastUpdate < (new Date().getTime() / 500) - 0.3) {
                            lastUpdate = (new Date().getTime() / 500);
                            self.game.client.socket.emit('setTargetPoint', {
                                position: self.targetPoint
                            });
                        }
                    }
                }
            }
        };
    };
    return Mouse;
}());
var GodRay = /** @class */ (function () {
    function GodRay() {
    }
    GodRay.createGodRay = function (game, mesh) {
        var engine = game.engine;
        var scene = game.getScene();
        var camera = game.getScene().getCameraByName('gameCamera');
        var fireMaterial = new BABYLON.StandardMaterial("godrayMaterial", scene);
        var fireTexture = new BABYLON.Texture("assets/Smoke3.png", scene);
        fireTexture.hasAlpha = true;
        fireMaterial.alpha = 0.1;
        fireMaterial.emissiveTexture = fireTexture;
        fireMaterial.diffuseTexture = fireTexture;
        fireMaterial.opacityTexture = fireTexture;
        fireMaterial.specularPower = 1;
        fireMaterial.backFaceCulling = false;
        var box = BABYLON.Mesh.CreatePlane("godRayPlane", 16, scene, true);
        box.visibility = 1;
        box.rotation = new BABYLON.Vector3(-Math.PI / 2, 0, 0);
        box.material = fireMaterial;
        box.layerMask = 2;
        var godrays = new BABYLON.VolumetricLightScatteringPostProcess('godrays', 1, camera, box, 128, BABYLON.Texture.BILINEAR_SAMPLINGMODE, engine, false);
        godrays.useCustomMeshPosition = true;
        godrays.setCustomMeshPosition(new BABYLON.Vector3(0, 15.0, 0));
        godrays.invert = false;
        godrays.exposure = 0.8;
        godrays.decay = 1;
        godrays.weight = 0;
        godrays.density = 0.5;
        var startHiding = false;
        var timeoutFunction;
        var showGodRay = function () {
            box.position = mesh.position.clone();
            box.position.y += 0.1;
            godrays.setCustomMeshPosition(mesh.position.clone());
            godrays.customMeshPosition.y = 15;
            box.rotate(new BABYLON.Vector3(0, 5, 0), 0.02, BABYLON.Space.WORLD);
            if (godrays.weight >= 0.3 && !timeoutFunction) {
                timeoutFunction = setTimeout(function () {
                    startHiding = true;
                }, 4000);
            }
            if (startHiding) {
                godrays.weight -= 0.01;
                if (godrays.weight <= 0) {
                    godrays.dispose(camera);
                    box.dispose();
                    scene.unregisterBeforeRender(showGodRay);
                }
            }
            else if (godrays.weight <= 0.3) {
                godrays.weight += 0.02;
            }
        };
        scene.registerBeforeRender(showGodRay);
    };
    return GodRay;
}());
var TrailMesh = /** @class */ (function (_super) {
    __extends(TrailMesh, _super);
    function TrailMesh(name, generator, scene, diameter, length) {
        if (diameter === void 0) { diameter = 1; }
        if (length === void 0) { length = 60; }
        var _this = _super.call(this, name, scene) || this;
        _this._sectionPolygonPointsCount = 4;
        _this.update = function () {
            var positions = _this.getVerticesData(BABYLON.VertexBuffer.PositionKind);
            var normals = _this.getVerticesData(BABYLON.VertexBuffer.NormalKind);
            for (var i = 3 * _this._sectionPolygonPointsCount; i < positions.length; i++) {
                positions[i - 3 * _this._sectionPolygonPointsCount] = positions[i] - normals[i] / _this._length * _this._diameter;
            }
            for (var i = 3 * _this._sectionPolygonPointsCount; i < normals.length; i++) {
                normals[i - 3 * _this._sectionPolygonPointsCount] = normals[i];
            }
            var l = positions.length - 3 * _this._sectionPolygonPointsCount;
            var alpha = 2 * Math.PI / _this._sectionPolygonPointsCount;
            for (var i = 0; i < _this._sectionPolygonPointsCount; i++) {
                _this._sectionVectors[i].copyFromFloats(Math.cos(i * alpha) * _this._diameter, Math.sin(i * alpha) * _this._diameter, 0);
                _this._sectionNormalVectors[i].copyFromFloats(Math.cos(i * alpha), Math.sin(i * alpha), 0);
                BABYLON.Vector3.TransformCoordinatesToRef(_this._sectionVectors[i], _this._generator.getWorldMatrix(), _this._sectionVectors[i]);
                BABYLON.Vector3.TransformNormalToRef(_this._sectionNormalVectors[i], _this._generator.getWorldMatrix(), _this._sectionNormalVectors[i]);
            }
            for (var i = 0; i < _this._sectionPolygonPointsCount; i++) {
                positions[l + 3 * i] = _this._sectionVectors[i].x;
                positions[l + 3 * i + 1] = _this._sectionVectors[i].y;
                positions[l + 3 * i + 2] = _this._sectionVectors[i].z;
                normals[l + 3 * i] = _this._sectionNormalVectors[i].x;
                normals[l + 3 * i + 1] = _this._sectionNormalVectors[i].y;
                normals[l + 3 * i + 2] = _this._sectionNormalVectors[i].z;
            }
            _this.updateVerticesData(BABYLON.VertexBuffer.PositionKind, positions, true, false);
            _this.updateVerticesData(BABYLON.VertexBuffer.NormalKind, normals, true, false);
        };
        _this.layerMask = 2;
        _this._generator = generator;
        _this._diameter = diameter;
        _this._length = length;
        _this._sectionVectors = [];
        _this._sectionNormalVectors = [];
        for (var i = 0; i < _this._sectionPolygonPointsCount; i++) {
            _this._sectionVectors[i] = BABYLON.Vector3.Zero();
            _this._sectionNormalVectors[i] = BABYLON.Vector3.Zero();
        }
        _this._createMesh();
        return _this;
    }
    TrailMesh.prototype._createMesh = function () {
        var data = new BABYLON.VertexData();
        var positions = [];
        var normals = [];
        var indices = [];
        var alpha = 2 * Math.PI / this._sectionPolygonPointsCount;
        for (var i = 0; i < this._sectionPolygonPointsCount; i++) {
            positions.push(Math.cos(i * alpha) * this._diameter, Math.sin(i * alpha) * this._diameter, -this._length);
            normals.push(Math.cos(i * alpha), Math.sin(i * alpha), 0);
        }
        for (var i = 1; i <= this._length; i++) {
            for (var j = 0; j < this._sectionPolygonPointsCount; j++) {
                positions.push(Math.cos(j * alpha) * this._diameter, Math.sin(j * alpha) * this._diameter, -this._length + i);
                normals.push(Math.cos(j * alpha), Math.sin(j * alpha), 0);
            }
            var l = positions.length / 3 - 2 * this._sectionPolygonPointsCount;
            for (var j = 0; j < this._sectionPolygonPointsCount - 1; j++) {
                indices.push(l + j, l + j + this._sectionPolygonPointsCount, l + j + this._sectionPolygonPointsCount + 1);
                indices.push(l + j, l + j + this._sectionPolygonPointsCount + 1, l + j + 1);
            }
            indices.push(l + this._sectionPolygonPointsCount - 1, l + this._sectionPolygonPointsCount - 1 + this._sectionPolygonPointsCount, l + this._sectionPolygonPointsCount);
            indices.push(l + this._sectionPolygonPointsCount - 1, l + this._sectionPolygonPointsCount, l);
        }
        data.positions = positions;
        data.normals = normals;
        data.indices = indices;
        data.applyToMesh(this, true);
        var trailMaterial = new BABYLON.StandardMaterial("white", this.getScene());
        trailMaterial.diffuseColor.copyFromFloats(1, 1, 1);
        trailMaterial.emissiveColor.copyFromFloats(1, 1, 1);
        trailMaterial.specularColor.copyFromFloats(0, 0, 0);
        this.material = trailMaterial;
    };
    return TrailMesh;
}(BABYLON.Mesh));
var AbstractEnvironment = /** @class */ (function () {
    function AbstractEnvironment() {
        this.staticShadowObjects = [];
        this.colliders = [];
    }
    AbstractEnvironment.prototype.createDefaultLight = function (scene) {
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.6;
        light.position = new BABYLON.Vector3(0, 50, 0);
        light.direction = new BABYLON.Vector3(0.45, -2.5, 0);
        light.shadowMaxZ = 500;
        this.light = light;
    };
    AbstractEnvironment.prototype.registerColliders = function (scene) {
        for (var i = 0; i < this.colliders.length; i++) {
            var sceneMeshCollider = this.colliders[i];
            Collisions.setCollider(scene, sceneMeshCollider);
        }
    };
    AbstractEnvironment.prototype.freezeAllMeshes = function (scene) {
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            sceneMesh.freezeWorldMatrix();
            sceneMesh.cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY;
            if (sceneMesh.material) {
                sceneMesh.material.freeze();
            }
        }
    };
    return AbstractEnvironment;
}());
var EnvironmentForestHouse = /** @class */ (function (_super) {
    __extends(EnvironmentForestHouse, _super);
    function EnvironmentForestHouse(game) {
        var _this = _super.call(this) || this;
        var scene = game.getScene();
        var self = _this;
        var spsTrees = [];
        var spsPlants = [];
        var spsStones = [];
        var spsFern = [];
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
                _this.ground = sceneMesh;
                var terrainMaterial = new BABYLON.TerrainMaterial("terrainMaterial", scene);
                terrainMaterial.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);
                terrainMaterial.specularPower = 64;
                terrainMaterial.mixTexture = new BABYLON.Texture("assets/scenes/Forest_house/stencil.png", scene);
                terrainMaterial.diffuseTexture1 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.jpg", scene);
                terrainMaterial.diffuseTexture2 = new BABYLON.Texture("assets/scenes/Forest_house/dirt.jpg", scene);
                terrainMaterial.diffuseTexture3 = new BABYLON.Texture("assets/scenes/Forest_house/groundSeamless.jpg", scene);
                terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 10;
                terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 10;
                terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 15;
                sceneMesh.material = terrainMaterial;
            }
            else if (meshName.search("Box_Cube") >= 0) {
                _this.colliders.push(sceneMesh);
            }
            else if (meshName.search("sps_trees") >= 0) {
                spsTrees.push(sceneMesh);
            }
            else if (meshName.search("sps_groundPlants") >= 0) {
                spsPlants.push(sceneMesh);
            }
            else if (meshName.search("sps_stones") >= 0) {
                spsStones.push(sceneMesh);
            }
            else if (meshName.search("sps_fern") >= 0) {
                spsFern.push(sceneMesh);
            }
            else {
                sceneMesh.isPickable = false;
                self.staticShadowObjects.push(sceneMesh);
            }
        }
        //SPS Nature
        var spruce = game.factories['nature_grain'].createClone('spruce', false);
        spruce.visibility = 0;
        spruce.material.freeze();
        var groundPlants = game.factories['nature_grain'].createClone('ground_plants', false);
        groundPlants.visibility = 0;
        groundPlants.material.freeze();
        var fern = game.factories['nature_grain'].createClone('fern', false);
        fern.visibility = 0;
        fern.material.freeze();
        var stone = game.factories['nature_grain'].createClone('stone', false);
        stone.visibility = 0;
        stone.material.freeze();
        spsTrees.forEach(function (parentSPS) {
            var spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, spruce, false);
            spsSpruce.buildSPS(67);
            self.staticShadowObjects.push(spsSpruce.spsMesh);
        });
        spsPlants.forEach(function (parentSPS) {
            var spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, groundPlants, false);
            spsSpruce.buildSPS(40);
            self.staticShadowObjects.push(spsSpruce.spsMesh);
        });
        spsStones.forEach(function (parentSPS) {
            var spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, stone, false);
            spsSpruce.buildSPS(67);
            self.staticShadowObjects.push(spsSpruce.spsMesh);
        });
        spsFern.forEach(function (parentSPS) {
            var spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, fern, false);
            spsSpruce.buildSPS(67);
            self.staticShadowObjects.push(spsSpruce.spsMesh);
        });
        var spsToBlock = scene.getMeshByName("sps_border");
        var spsSpruceBlock = new Particles.SolidParticleSystem.NatureBlock(game, spsToBlock, spruce);
        spsSpruceBlock.buildSPS(500);
        self.staticShadowObjects.push(spsSpruceBlock.spsMesh);
        stone.dispose();
        spruce.dispose();
        groundPlants.dispose();
        fern.dispose();
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.4;
        light.position = new BABYLON.Vector3(0, 50, 0);
        light.direction = new BABYLON.Vector3(0.45, -2.5, 0);
        light.shadowMaxZ = 500;
        _this.light = light;
        ///register colliders
        _this.registerColliders(scene);
        _this.freezeAllMeshes(scene);
        new BABYLON.Sound("Forest night", "assets/sounds/fx/wind.mp3", scene, null, {
            loop: true,
            autoplay: true,
            volume: 0.1
        });
        new BABYLON.Sound("Forest night", "assets/sounds/forest_night.mp3", scene, null, {
            loop: true,
            autoplay: true,
            volume: 0.3
        });
        scene.getMeshByName('exit').dispose();
        var exitPlane = scene.getMeshByName('Entrace_Tomb').clone("exit", null);
        exitPlane.position = new BABYLON.Vector3(-196.78, 0, -95.6);
        exitPlane.rotation = new BABYLON.Vector3(0, -1.5, 0);
        return _this;
    }
    return EnvironmentForestHouse;
}(AbstractEnvironment));
var EnvironmentForestHouseStart = /** @class */ (function (_super) {
    __extends(EnvironmentForestHouseStart, _super);
    function EnvironmentForestHouseStart(game) {
        var _this = _super.call(this) || this;
        var scene = game.getScene();
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
            }
            else if (meshName.search("Box_Cube") >= 0) {
                _this.colliders.push(sceneMesh);
            }
            else {
                sceneMesh.isPickable = false;
                _this.staticShadowObjects.push(sceneMesh);
            }
        }
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.position = new BABYLON.Vector3(0, 80, -210);
        light.direction = new BABYLON.Vector3(0.45, -0.45, 0.45);
        light.shadowMaxZ = 500;
        light.autoUpdateExtends = false;
        _this.light = light;
        _this.freezeAllMeshes(scene);
        _this.registerColliders(scene);
        new BABYLON.Sound("Forest night", "assets/sounds/fx/wind.mp3", scene, null, {
            loop: true,
            autoplay: true,
            volume: 0.3
        });
        return _this;
    }
    return EnvironmentForestHouseStart;
}(AbstractEnvironment));
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
                sceneMesh.material.diffuseTexture.uScale = 1.2;
                sceneMesh.material.diffuseTexture.vScale = 1.2;
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
var EnvironmentMountainsPass = /** @class */ (function (_super) {
    __extends(EnvironmentMountainsPass, _super);
    function EnvironmentMountainsPass(game) {
        var _this = _super.call(this) || this;
        var scene = game.getScene();
        _this.colliders = [];
        scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
                sceneMesh.alwaysSelectAsActiveMesh = true;
                var terrainMaterial = new BABYLON.TerrainMaterial("terrainMaterial", scene);
                terrainMaterial.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);
                terrainMaterial.specularPower = 64;
                terrainMaterial.mixTexture = new BABYLON.Texture("assets/scenes/MountainsPass/stencil.jpg", scene);
                terrainMaterial.diffuseTexture1 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.jpg", scene);
                terrainMaterial.diffuseTexture2 = new BABYLON.Texture("assets/scenes/Forest_house/dirt.jpg", scene);
                terrainMaterial.diffuseTexture3 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.jpg", scene);
                terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 20;
                terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 20;
                terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 20;
                sceneMesh.material = terrainMaterial;
            }
            else if (meshName.search("Box_Cube") >= 0) {
                _this.colliders.push(sceneMesh);
            }
            else {
                sceneMesh.isPickable = false;
                if (meshName.search("Rock") >= 0) {
                    continue;
                }
                _this.staticShadowObjects.push(sceneMesh);
            }
        }
        // let cone = scene.getMeshByName("fireplace.002");
        // if (cone) {
        //     let smokeSystem = new Particles.FireplaceSmoke(game, cone).particleSystem;
        //     smokeSystem.start();
        //
        //     let fireSystem = new Particles.FireplaceFire(game, cone).particleSystem;
        //     fireSystem.start();
        //
        //     let sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, { loop: true, autoplay: true });
        //     sfxFireplace.attachToMesh(cone);
        // }
        //TODO: delete in bledner
        // scene.getLightByName('Lamp').dispose();
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.6;
        light.position = new BABYLON.Vector3(0, 50, 0);
        light.direction = new BABYLON.Vector3(0.45, -2.5, 0);
        light.shadowMaxZ = 500;
        _this.light = light;
        _this.registerColliders(scene);
        _this.freezeAllMeshes(scene);
        return _this;
    }
    return EnvironmentMountainsPass;
}(AbstractEnvironment));
var EnvironmentSelectCharacter = /** @class */ (function () {
    function EnvironmentSelectCharacter(game, scene) {
        ////LIGHT
        var light = game.getScene().lights[0];
        light.dispose();
        var fireplaceLight = new BABYLON.PointLight("fireplaceLight", new BABYLON.Vector3(0, 2.5, 0), scene);
        fireplaceLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
        fireplaceLight.range = 50;
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
            var sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, { loop: true, autoplay: true });
            sfxFireplace.attachToMesh(cone);
        }
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            sceneMesh.freezeWorldMatrix();
            sceneMesh.isPickable = false;
        }
        new BABYLON.Sound("Forest night", "assets/sounds/music/theme.mp3", scene, null, { loop: true, autoplay: true, volume: 1 });
    }
    return EnvironmentSelectCharacter;
}());
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
                    loadedMesh.freezeWorldMatrix();
                    loadedMesh.setEnabled(false);
                }
            };
            return this;
        };
        AbstractFactory.prototype.createClone = function (name, cloneSkeleton) {
            if (cloneSkeleton === void 0) { cloneSkeleton = false; }
            for (var i = 0; i < this.loadedMeshes.length; i++) {
                var mesh = this.loadedMeshes[i];
                mesh.layerMask = 2;
                if (mesh.name == name) {
                    var clonedMesh = mesh.clone('clone_' + name);
                    if (cloneSkeleton) {
                        clonedMesh.skeleton = mesh.skeleton.clone('clone_skeleton_' + name);
                    }
                    clonedMesh.visibility = 1;
                    clonedMesh.isVisible = true;
                    clonedMesh.setEnabled(true);
                    return clonedMesh;
                }
            }
        };
        AbstractFactory.prototype.createInstance = function (name) {
            for (var i = 0; i < this.loadedMeshes.length; i++) {
                var mesh = this.loadedMeshes[i];
                mesh.layerMask = 2;
                if (mesh.name == name) {
                    var instancedMesh = mesh.createInstance('instance_' + name);
                    instancedMesh.visibility = 1;
                    instancedMesh.isVisible = true;
                    instancedMesh.setEnabled(true);
                    return instancedMesh;
                }
            }
        };
        return AbstractFactory;
    }());
    Factories.AbstractFactory = AbstractFactory;
})(Factories || (Factories = {}));
var Factories;
(function (Factories) {
    var Chest = /** @class */ (function (_super) {
        __extends(Chest, _super);
        function Chest(game, scene, assetsManager) {
            var _this = _super.call(this, game, scene, assetsManager) || this;
            _this.taskName = 'chest';
            _this.dir = 'assets/Environment/chest/';
            _this.fileName = 'chest.babylon';
            return _this;
        }
        return Chest;
    }(Factories.AbstractFactory));
    Factories.Chest = Chest;
})(Factories || (Factories = {}));
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
var GUI;
(function (GUI) {
    var Main = /** @class */ (function () {
        function Main(game) {
            this.game = game;
            game.gui = this;
            this.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.main');
            this.texture.layer.layerMask = 1;
            this.playerBottomPanel = new GUI.PlayerBottomPanel(game);
            this.playerLogsQuests = new GUI.PlayerQuestsPanel(game);
            this.playerQuestInformation = new GUI.PlayerQuestInformation(game);
            this.characterTopHp = new GUI.ShowHp(game);
            this.attributes = new GUI.Attributes(this);
            this.inventory = new GUI.Inventory(this);
            this.options = new GUI.Options(this);
        }
        return Main;
    }());
    GUI.Main = Main;
})(GUI || (GUI = {}));
var GUI;
(function (GUI) {
    var PlayerBottomPanel = /** @class */ (function () {
        function PlayerBottomPanel(game) {
            var self = this;
            var texture = game.gui.texture;
            var container = new BABYLON.GUI.Rectangle('gui.panel.bottom');
            container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            container.width = '685px';
            container.height = '115px';
            container.isPointerBlocker = true;
            container.thickness = 0;
            this.container = container;
            texture.addControl(container);
            var toolbar = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar.png');
            toolbar.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            toolbar.height = '65px';
            container.addControl(toolbar);
            var containerSliders = new BABYLON.GUI.Rectangle('gui.panel.bottom');
            containerSliders.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            containerSliders.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            containerSliders.width = '605px';
            containerSliders.height = '48px';
            containerSliders.isPointerBlocker = true;
            containerSliders.thickness = 0;
            container.addControl(containerSliders);
            var toolbarExp = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_exp.png');
            toolbarExp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            toolbarExp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            toolbarExp.width = 1;
            toolbarExp.height = '14px';
            toolbarExp.top = '0px';
            this.expBar = toolbarExp;
            containerSliders.addControl(toolbarExp);
            var textBlockExp = new BABYLON.GUI.TextBlock();
            textBlockExp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textBlockExp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textBlockExp.top = '-1px';
            textBlockExp.width = 1;
            textBlockExp.height = '14px';
            textBlockExp.color = "white";
            textBlockExp.fontSize = 12;
            textBlockExp.fontFamily = "RuslanDisplay";
            this.expBarText = textBlockExp;
            containerSliders.addControl(textBlockExp);
            var toolbarHp = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_hp.png');
            toolbarHp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            toolbarHp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            toolbarHp.width = 0;
            toolbarHp.height = '14px';
            toolbarHp.top = '16px';
            this.hpBar = toolbarHp;
            containerSliders.addControl(toolbarHp);
            var textBlockHp = new BABYLON.GUI.TextBlock();
            textBlockHp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textBlockHp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textBlockHp.top = '14px';
            textBlockHp.width = 1;
            textBlockHp.height = '14px';
            textBlockHp.color = "white";
            textBlockHp.fontSize = 16;
            textBlockHp.fontFamily = "RuslanDisplay";
            this.hpBarText = textBlockHp;
            containerSliders.addControl(textBlockHp);
            var toolbarEnergy = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_energy.png');
            toolbarEnergy.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            toolbarEnergy.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            toolbarEnergy.width = 1;
            toolbarEnergy.height = '14px';
            toolbarEnergy.top = '32px';
            this.energyBar = toolbarEnergy;
            containerSliders.addControl(toolbarEnergy);
            var textToolbarEnergy = new BABYLON.GUI.TextBlock();
            textToolbarEnergy.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textToolbarEnergy.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textToolbarEnergy.top = '31px';
            textToolbarEnergy.width = 1;
            textToolbarEnergy.height = '14px';
            textToolbarEnergy.color = "white";
            textToolbarEnergy.fontSize = 12;
            textToolbarEnergy.fontFamily = "RuslanDisplay";
            this.energyBarText = textToolbarEnergy;
            containerSliders.addControl(textToolbarEnergy);
            var gridSpecials = new BABYLON.GUI.Grid();
            gridSpecials.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            gridSpecials.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            gridSpecials.width = '211px';
            gridSpecials.height = '46px';
            gridSpecials.top = '-11px';
            gridSpecials.left = '1px';
            gridSpecials.addColumnDefinition(1);
            gridSpecials.addColumnDefinition(1);
            gridSpecials.addColumnDefinition(1);
            gridSpecials.addColumnDefinition(1);
            container.addControl(gridSpecials);
            self.guiGridSkills = gridSpecials;
            var buttonAttributes = BABYLON.GUI.Button.CreateImageOnlyButton("button.attributes", "assets/gui/buttons/attributes.png");
            buttonAttributes.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            buttonAttributes.width = '112px';
            buttonAttributes.height = '21px';
            buttonAttributes.thickness = 0;
            buttonAttributes.top = '10px';
            buttonAttributes.left = '93px';
            container.addControl(buttonAttributes);
            buttonAttributes.onPointerUpObservable.add(function () {
                if (!game.gui.attributes.opened) {
                    game.gui.attributes.open();
                }
            });
            var buttonSkills = BABYLON.GUI.Button.CreateImageOnlyButton("button.skills", "assets/gui/buttons/skills.png");
            buttonSkills.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            buttonSkills.width = '112px';
            buttonSkills.height = '21px';
            buttonSkills.thickness = 0;
            buttonSkills.top = '37px';
            buttonSkills.left = '93px';
            container.addControl(buttonSkills);
            buttonSkills.onPointerUpObservable.add(function () {
                game.player.initGodRay();
            });
            var buttonInventory = BABYLON.GUI.Button.CreateImageOnlyButton("button.skills", "assets/gui/buttons/inventory.png");
            buttonInventory.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            buttonInventory.width = '112px';
            buttonInventory.height = '21px';
            buttonInventory.thickness = 0;
            buttonInventory.top = '10px';
            buttonInventory.left = '479px';
            container.addControl(buttonInventory);
            buttonInventory.onPointerUpObservable.add(function () {
                if (!game.gui.inventory.opened) {
                    game.gui.inventory.open();
                }
            });
            var buttonOptions = BABYLON.GUI.Button.CreateImageOnlyButton("button.skills", "assets/gui/buttons/options.png");
            buttonOptions.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            buttonOptions.width = '112px';
            buttonOptions.height = '21px';
            buttonOptions.thickness = 0;
            buttonOptions.top = '37px';
            buttonOptions.left = '479px';
            buttonOptions.onPointerUpObservable.add(function () {
                if (!game.gui.options.opened) {
                    game.gui.options.open();
                }
            });
            container.addControl(buttonOptions);
        }
        return PlayerBottomPanel;
    }());
    GUI.PlayerBottomPanel = PlayerBottomPanel;
})(GUI || (GUI = {}));
var GUI;
(function (GUI) {
    var PlayerLogsPanel = /** @class */ (function () {
        function PlayerLogsPanel(game) {
            this.texts = [];
            this.texture = game.gui.texture;
            var self = this;
            var container = new BABYLON.GUI.Rectangle('gui.chat');
            container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            container.width = '302px';
            container.height = '302px';
            container.isPointerBlocker = true;
            container.thickness = 0;
            var background = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/chat.png');
            background.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            background.height = 1;
            background.width = 1;
            container.addControl(background);
            var textsContainer = new BABYLON.GUI.StackPanel();
            textsContainer.width = 1;
            textsContainer.left = "3%";
            textsContainer.top = "-7%";
            textsContainer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textsContainer.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            container.addControl(textsContainer);
            self.texture.addControl(container);
            self.guiPanel = container;
            self.textContainer = textsContainer;
            this.addText('You are logged into game', 'gold');
            this.addText('Welcome in Slavs alpha test!');
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
            text.fontSize = 12;
            this.textContainer.addControl(text);
            this.texts.push(text);
            this.removeOldText();
        };
        PlayerLogsPanel.prototype.removeOldText = function () {
            if (this.texts.length >= GUI.PlayerLogsPanel.TEXT_COUNT) {
                var textToDispose = this.texts.shift();
                this.textContainer.removeControl(textToDispose);
                textToDispose = null;
            }
            return this;
        };
        PlayerLogsPanel.TEXT_COUNT = 12;
        return PlayerLogsPanel;
    }());
    GUI.PlayerLogsPanel = PlayerLogsPanel;
})(GUI || (GUI = {}));
var GUI;
(function (GUI) {
    var PlayerQuestInformation = /** @class */ (function () {
        function PlayerQuestInformation(game) {
            this.texture = game.gui.texture;
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
            title.fontFamily = "RuslanDisplay";
            title.fontSize = 22;
            title.resizeToFit = true;
            this.guiPanel.addControl(title);
            questData.chapters[questData.actualChapter].requirements.forEach(function (requirement) {
                var requirementDescription = new BABYLON.GUI.TextBlock();
                requirementDescription.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                requirementDescription.text = requirement.name;
                requirementDescription.resizeToFit = true;
                requirementDescription.color = "white";
                requirementDescription.fontFamily = "RuslanDisplay";
                requirementDescription.top = "5%";
                requirementDescription.fontSize = 18;
                self.guiPanel.addControl(requirementDescription);
            });
        };
        return PlayerQuestInformation;
    }());
    GUI.PlayerQuestInformation = PlayerQuestInformation;
})(GUI || (GUI = {}));
var GUI;
(function (GUI) {
    var PlayerQuestsPanel = /** @class */ (function () {
        function PlayerQuestsPanel(game) {
            this.texts = [];
            this.texture = game.gui.texture;
            var self = this;
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
            text.fontFamily = "RuslanDisplay";
            text.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            text.fontSize = 16;
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
var GUI;
(function (GUI) {
    var SelectCharacter = /** @class */ (function () {
        function SelectCharacter(game) {
            this.game = game;
            game.gui = this;
            var texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.main');
            var container = new BABYLON.GUI.Rectangle('gui.panel.bottom');
            container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            container.width = '685px';
            container.height = '80px';
            container.isPointerBlocker = true;
            container.thickness = 0;
            texture.addControl(container);
            var buttonCreateCharacter = BABYLON.GUI.Button.CreateImageWithCenterTextButton("button.create_character", 'Create character', "assets/gui/buttons/blank.png");
            buttonCreateCharacter.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            buttonCreateCharacter.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonCreateCharacter.width = 0.5;
            buttonCreateCharacter.height = '40px';
            buttonCreateCharacter.thickness = 0;
            buttonCreateCharacter.color = 'white';
            buttonCreateCharacter.fontSize = 16;
            container.addControl(buttonCreateCharacter);
            buttonCreateCharacter.onPointerUpObservable.add(function () {
                var characterName = input.text;
                if (characterName.length > 2) {
                    game.client.socket.emit('createCharacter', characterName);
                }
            });
            var input = new BABYLON.GUI.InputText();
            input.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            input.width = 0.5;
            input.maxWidth = 0.5;
            input.height = "30px";
            input.color = "white";
            input.background = "black";
            container.addControl(input);
            this.texture = texture;
        }
        return SelectCharacter;
    }());
    GUI.SelectCharacter = SelectCharacter;
})(GUI || (GUI = {}));
var GUI;
(function (GUI) {
    var ShowHp = /** @class */ (function () {
        function ShowHp(game) {
            this.texture = game.gui.texture;
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
            textBlock.fontFamily = "RuslanDisplay";
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
        ShowHp.prototype.showGateway = function (entranceName) {
            if (this.guiPanel) {
                this.texture.removeControl(this.guiPanel);
            }
            if (this.character) {
                this.character = null;
            }
            var characterPanel = new BABYLON.GUI.StackPanel();
            characterPanel.width = "25%";
            characterPanel.top = 10;
            characterPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            this.guiPanel = characterPanel;
            this.texture.addControl(characterPanel);
            var textBlock = new BABYLON.GUI.TextBlock("gui.panelhp.name", entranceName);
            textBlock.color = 'white';
            textBlock.height = "20px";
            textBlock.fontFamily = "RuslanDisplay";
            textBlock.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            characterPanel.addControl(textBlock);
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
var Chest = /** @class */ (function () {
    /**
     *
     * @param {Game} game
     * @param chestData
     * @param chestKey
     */
    function Chest(game, chestData, chestKey) {
        var self = this;
        var scene = game.getScene();
        var tooltip;
        var opened = chestData.opened;
        var position = chestData.position;
        var rotation = chestData.rotation;
        var chestMesh = game.factories['chest'].createClone('chest', true);
        var gameCamera = scene.getCameraByName('gameCamera');
        if (!chestMesh) {
            throw new TypeError('Wrong chest mesh name.');
        }
        chestMesh.position = new BABYLON.Vector3(position.x, position.y, position.z);
        chestMesh.rotation = new BABYLON.Vector3(rotation.x, rotation.y, rotation.z);
        chestMesh.isPickable = true;
        chestMesh.checkCollisions = true;
        chestMesh.material.backFaceCulling = false;
        if (!opened) {
            var hl = new BABYLON.HighlightLayer("highlightLayer", scene, { camera: gameCamera });
            // scene.meshes.forEach((mesh) => {
            //    hl.addExcludedMesh(mesh);
            // });
            // hl.removeExcludedMesh(chestMesh);
            hl.addMesh(chestMesh, BABYLON.Color3.Magenta());
            self.hightlightLayer = hl;
        }
        this.mesh = chestMesh;
        this.mesh.actionManager = new BABYLON.ActionManager(game.getScene());
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
            tooltip = new TooltipMesh(chestMesh, chestData.name);
        }));
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
            tooltip.container.dispose();
        }));
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
            game.goToMeshFunction = GoToMeshAndRunAction.execute(game, chestMesh, function () {
                game.client.socket.emit('openChest', chestKey);
            });
        }));
    }
    return Chest;
}());
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
        parent.isPickable = false;
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
var Gateway = /** @class */ (function () {
    function Gateway(game, meshName, isActive, openSceneType, entranceName) {
        var gateway = game.getScene().getMeshByName(meshName);
        if (!gateway) {
            throw new TypeError('Wrong gateway mesh name.');
        }
        this.mesh = gateway;
        gateway.visibility = 0;
        gateway.isPickable = true;
        this.tooltip = new TooltipMesh(gateway, entranceName);
        var gatewayParticleSystem = new Particles.Gateway(game, gateway, isActive).particleSystem;
        gatewayParticleSystem.start();
        this.particleSystem = gatewayParticleSystem;
        gateway.actionManager = new BABYLON.ActionManager(game.getScene());
        gateway.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
            game.gui.characterTopHp.showGateway(entranceName);
        }));
        gateway.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
            game.gui.characterTopHp.hideHpBar();
        }));
        var enterTheGateway = function () {
            if (!isActive) {
                game.gui.playerLogsQuests.addText('This gateway is locked!', 'yellow');
                return;
            }
            game.goToMeshFunction = GoToMeshAndRunAction.execute(game, gateway, function () {
                game.client.socket.emit('changeSceneTrigger', openSceneType);
            });
        };
        gateway.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, enterTheGateway));
        gateway.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
            parameter: game.player.mesh
        }, enterTheGateway));
    }
    return Gateway;
}());
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
            self.createTooltip(serverData, activeQuest, questPicker);
            self.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                var quest = new GUI.NewQuest(game.gui, serverData);
                quest.open();
            }));
        }
        Quests.prototype.refreshTooltipColor = function (serverData, activeQuest, questPicker) {
            if (activeQuest && activeQuest.questId != serverData.questId) {
                this.tooltipMesh.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
            }
            else if (activeQuest && activeQuest.questId == serverData.questId) {
                this.tooltipMesh.material.diffuseColor = new BABYLON.Color3(1, 1, 0);
            }
            else {
                this.tooltipMesh.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
                this.tooltipGui = new TooltipMesh(questPicker, 'New quest', -45);
            }
            return this;
        };
        Quests.prototype.createTooltip = function (serverData, activeQuest, questPicker) {
            var box = BABYLON.Mesh.CreateBox("quest_box", 0.4, this.game.getScene());
            box.material = new BABYLON.StandardMaterial("quest_box_material", this.game.getScene());
            box.parent = this.mesh;
            box.position.y += 3;
            if (this.game.sceneManager.octree) {
                this.game.sceneManager.octree.dynamicContent.push(box);
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
            box.animations = [];
            box.animations.push(animationBox);
            this.tooltipMesh = box;
            this.game.getScene().beginAnimation(box, 0, 30, true);
            this.refreshTooltipColor(serverData, activeQuest, questPicker);
        };
        Quests.prototype.dispose = function () {
            if (this.tooltipGui) {
                this.tooltipGui.container.dispose();
            }
            this.tooltipMesh.dispose();
        };
        return Quests;
    }());
    Factories.Quests = Quests;
})(Factories || (Factories = {}));
var RandomSpecialItem = /** @class */ (function () {
    /**
     *
     * @param {Game} game
     * @param randomSpecialItemData
     * @param randomSpecialItemKey
     */
    function RandomSpecialItem(game, randomSpecialItemData, randomSpecialItemKey) {
        var scene = game.getScene();
        var tooltip;
        var position = randomSpecialItemData.position;
        var randomItemMesh = game.factories['nature_grain'].createClone(randomSpecialItemData.specialItem.meshName);
        randomItemMesh.position = new BABYLON.Vector3(position.x, position.y, position.z);
        randomItemMesh.isPickable = true;
        var particleSystem = new Particles.DroppedItem(game, randomItemMesh);
        particleSystem.particleSystem.start();
        this.mesh = randomItemMesh;
        this.mesh.actionManager = new BABYLON.ActionManager(scene);
        tooltip = new TooltipMesh(randomItemMesh, randomSpecialItemData.specialItem.name);
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
            game.goToMeshFunction = GoToMeshAndRunAction.execute(game, randomItemMesh, function () {
                game.client.socket.emit('pickRandomItem', randomSpecialItemKey);
            });
            tooltip.container.dispose();
        }));
    }
    return RandomSpecialItem;
}());
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
var Particles;
(function (Particles) {
    var Blood = /** @class */ (function (_super) {
        __extends(Blood, _super);
        function Blood() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Blood.prototype.initParticleSystem = function () {
            var particleSystem = new BABYLON.GPUParticleSystem("particle1s", { capacity: 50 }, this.game.getScene());
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
            particleSystem.emitRate = 50;
            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
            particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
            particleSystem.direction1 = new BABYLON.Vector3(-1, 4, -1);
            particleSystem.direction2 = new BABYLON.Vector3(4, 4, 4);
            particleSystem.minAngularSpeed = -10.0;
            particleSystem.maxAngularSpeed = 10.0;
            particleSystem.minEmitPower = 0.5;
            particleSystem.maxEmitPower = 1;
            particleSystem.updateSpeed = 0.02;
            particleSystem.layerMask = 2;
            this.particleSystem = particleSystem;
        };
        return Blood;
    }(Particles.AbstractParticle));
    Particles.Blood = Blood;
})(Particles || (Particles = {}));
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
            particleSystem.layerMask = 2;
            this.particleSystem = particleSystem;
        };
        return CaveEntrace;
    }(Particles.AbstractParticle));
    Particles.CaveEntrace = CaveEntrace;
})(Particles || (Particles = {}));
var Particles;
(function (Particles) {
    var DroppedItem = /** @class */ (function (_super) {
        __extends(DroppedItem, _super);
        function DroppedItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DroppedItem.prototype.initParticleSystem = function () {
            var fireSystem = new BABYLON.GPUParticleSystem("DroppedItemParticles", { capacity: 20 }, this.game.getScene());
            fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            fireSystem.emitter = this.emitter;
            fireSystem.minEmitBox = new BABYLON.Vector3(-1, 0, -1);
            fireSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 1);
            fireSystem.color1 = new BABYLON.Color4(0, 0.5, 0, 1.0);
            fireSystem.color2 = new BABYLON.Color4(0, 0.5, 0, 1.0);
            fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
            fireSystem.minSize = 0.2;
            fireSystem.maxSize = 0.5;
            fireSystem.minLifeTime = 0.5;
            fireSystem.maxLifeTime = 2.5;
            fireSystem.emitRate = 10;
            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction1 = new BABYLON.Vector3(0, 0.2, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 0.5, 0);
            fireSystem.minEmitPower = 1;
            fireSystem.maxEmitPower = 1;
            fireSystem.layerMask = 2;
            this.particleSystem = fireSystem;
        };
        return DroppedItem;
    }(Particles.AbstractParticle));
    Particles.DroppedItem = DroppedItem;
})(Particles || (Particles = {}));
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
            fireSystem.layerMask = 2;
            this.particleSystem = fireSystem;
        };
        return FireplaceFire;
    }(Particles.AbstractParticle));
    Particles.FireplaceFire = FireplaceFire;
})(Particles || (Particles = {}));
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
            smokeSystem.layerMask = 2;
            this.particleSystem = smokeSystem;
        };
        return FireplaceSmoke;
    }(Particles.AbstractParticle));
    Particles.FireplaceSmoke = FireplaceSmoke;
})(Particles || (Particles = {}));
var Particles;
(function (Particles) {
    var Fog = /** @class */ (function (_super) {
        __extends(Fog, _super);
        function Fog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fog.prototype.initParticleSystem = function () {
            var fog = new BABYLON.GPUParticleSystem("particles", { capacity: 2000 }, this.game.getScene());
            fog.particleTexture = new BABYLON.Texture("assets/cloud.png", this.game.getScene());
            fog.emitter = this.emitter; // the starting object, the emitter
            fog.minEmitBox = new BABYLON.Vector3(-50, 5, -50); // Starting all from
            fog.maxEmitBox = new BABYLON.Vector3(50, 0, 50); // To...
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
            fog.layerMask = 2;
            this.particleSystem = fog;
        };
        return Fog;
    }(Particles.AbstractParticle));
    Particles.Fog = Fog;
})(Particles || (Particles = {}));
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
            particleSystem.emitter = this.emitter;
            particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, -1);
            particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 1);
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
            particleSystem.layerMask = 2;
            this.particleSystem = particleSystem;
        };
        return Gateway;
    }(Particles.AbstractParticle));
    Particles.Gateway = Gateway;
})(Particles || (Particles = {}));
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
            particleSystem.layerMask = 2;
            this.particleSystem = particleSystem;
        };
        return HouseExit;
    }(Particles.AbstractParticle));
    Particles.HouseExit = HouseExit;
})(Particles || (Particles = {}));
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
            fireSystem.layerMask = 2;
            this.particleSystem = fireSystem;
        };
        return TorchFire;
    }(Particles.AbstractParticle));
    Particles.TorchFire = TorchFire;
})(Particles || (Particles = {}));
var WalkSmoke = /** @class */ (function () {
    function WalkSmoke() {
    }
    WalkSmoke.getParticles = function (scene, emitRate, emitter) {
        var smokeSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 10 }, scene);
        smokeSystem.particleTexture = new BABYLON.Texture("assets/flare.png", scene);
        smokeSystem.emitter = emitter;
        smokeSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0.8);
        smokeSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0.8);
        smokeSystem.color1 = new BABYLON.Color4(0.2, 0.2, 0.1, 1.0);
        smokeSystem.color2 = new BABYLON.Color4(0.2, 0.2, 0.1, 1.0);
        smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
        smokeSystem.minSize = 0.3;
        smokeSystem.maxSize = 1.5;
        smokeSystem.minLifeTime = 0.15;
        smokeSystem.maxLifeTime = 0.15;
        smokeSystem.emitRate = emitRate;
        smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
        smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);
        smokeSystem.direction1 = new BABYLON.Vector3(0, 4, 0);
        smokeSystem.direction2 = new BABYLON.Vector3(0, 4, 0);
        smokeSystem.minAngularSpeed = 0;
        smokeSystem.maxAngularSpeed = Math.PI;
        smokeSystem.minEmitPower = 1;
        smokeSystem.maxEmitPower = 1;
        smokeSystem.updateSpeed = 0.004;
        smokeSystem.layerMask = 2;
        return smokeSystem;
    };
    return WalkSmoke;
}());
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
            var _this = this;
            if (setItem) {
                var bonesNumbers = [];
                switch (item.type) {
                    case 1:
                        this.weapon = item;
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('weapon.bone'));
                        break;
                    case 2:
                        this.shield = item;
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('shield.bone'));
                        break;
                    case 3:
                        this.helm = item;
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('head'));
                        break;
                    case 4:
                        this.gloves = item;
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('hand.L'));
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('hand.R'));
                        break;
                    case 5:
                        this.boots = item;
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('foot.L'));
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('foot.R'));
                        break;
                    case 6:
                        this.armor = item;
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('chest'));
                        break;
                }
                item.mesh = this.game.factories['character'].createClone(item.meshName);
                item.mesh.parent = this.player.mesh;
                item.mesh.skeleton = this.player.mesh.skeleton;
                // bonesNumbers.forEach((boneNumber) => {
                //     const mesh = BABYLON.Mesh.CreateBox('test', 1, this.game.getScene(), false);
                //     mesh.attachToBone(this.player.mesh.skeleton.bones[boneNumber], this.player.mesh);
                // });
                if (item.type == 1) {
                    var game_1 = this.game;
                    bonesNumbers.forEach(function (boneNumber) {
                        item.createTrailMesh(game_1);
                        item.trailBox.attachToBone(game_1.player.mesh.skeleton.bones[boneNumber], _this.player.mesh);
                    });
                }
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
            //TODO: Bugged hair in character
            // if (showHair) {
            //     let helm = new Items.Item(this.game, {
            //         name: "Hair",
            //         image: 'hair',
            //         meshName: 'hair',
            //         type: 3,
            //         entity: {id: 0},
            //         statistics: null
            //     });
            //
            //     this.equipItem(helm, true);
            // }
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
        /**
         * @returns {Player}
         */
        Inventory.prototype.removeItems = function () {
            this.items.forEach(function (item) {
                item.dispose();
            });
            this.items = [];
            return this;
        };
        /**
         *
         * @param inventoryItems
         */
        Inventory.prototype.setItems = function (inventoryItems) {
            if (inventoryItems) {
                var self_3 = this;
                var game_2 = this.game;
                var itemManager_1 = new Items.ItemManager(game_2);
                new Promise(function (resolve) {
                    self_3.deleteSashAndHair();
                    self_3.items.forEach(function (item) {
                        item.dispose();
                    });
                    setTimeout(function () {
                        resolve();
                    });
                }).then(function () {
                    self_3.clearItems();
                    new Promise(function (resolve) {
                        itemManager_1.initItemsFromDatabaseOnCharacter(inventoryItems, self_3);
                        setTimeout(function () {
                            resolve();
                        });
                    }).then(function () {
                        game_2.gui.inventory.refreshPopup();
                    });
                });
            }
        };
        return Inventory;
    }());
    Character.Inventory = Inventory;
})(Character || (Character = {}));
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(game, registerMoving, serverData) {
        var _this = _super.call(this, serverData.activePlayer.name, game) || this;
        _this.isAlive = true;
        _this.monstersToAttack = [];
        _this.id = serverData.activePlayer.id;
        _this.setCharacterStatistics(serverData.activePlayer);
        _this.connectionId = serverData.connectionId;
        _this.isControllable = registerMoving;
        _this.initSfx();
        _this.createBoxForMove(new BABYLON.Vector3(serverData.position.x, serverData.position.y, serverData.position.z));
        _this.createMesh();
        _this.bloodParticles = new Particles.Blood(game, _this.mesh).particleSystem;
        _this.walkSmoke = WalkSmoke.getParticles(game.getScene(), 25, _this.mesh);
        _this.inventory = new Character.Inventory(game, _this);
        _this.inventory.setItems(serverData.activePlayer.items);
        if (_this.isControllable) {
            _this.mesh.isPickable = false;
            new GUI.Main(game);
            _this.initServerData(serverData);
            _this.refreshCameraPosition();
            _this.refreshHpInGui();
            _this.refreshExperienceInGui();
            _this.refreshEnergyInGui();
            _this.createPlayerLight();
            _this.attackActions = new AttackActions(game);
        }
        _this.setCharacterSkills(serverData.skills);
        _this.initPatricleSystemDamage();
        _this.runAnimationStand();
        return _this;
    }
    Player.prototype.initServerData = function (serverData) {
        this.experience = serverData.activePlayer.experience;
        this.gold = serverData.activePlayer.gold;
        this.keys = serverData.activePlayer.specialItems.length;
        this.experiencePercentages = serverData.activePlayer.experiencePercentages;
        this.lvl = serverData.activePlayer.lvl;
        this.freeAttributesPoints = serverData.activePlayer.freeAttributesPoints;
        this.freeSkillPoints = serverData.activePlayer.freeSkillPoints;
        this.name = serverData.activePlayer.name;
    };
    Player.prototype.createPlayerLight = function () {
        var game = this.game;
        var playerLight = new BABYLON.SpotLight("playerLightSpot", new BABYLON.Vector3(0, 45, 0), new BABYLON.Vector3(0, -1, 0), null, null, game.getScene());
        playerLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
        playerLight.angle = 0.7;
        playerLight.exponent = 70;
        playerLight.intensity = 0.8;
        playerLight.parent = this.mesh;
        playerLight.autoExtends = false;
        this.playerLight = playerLight;
    };
    Player.prototype.createMesh = function () {
        var game = this.game;
        var mesh = game.factories['character'].createClone('Warrior', true);
        mesh.skeleton.enableBlending(0.2);
        mesh.alwaysSelectAsActiveMesh = true;
        mesh.parent = this.meshForMove;
        mesh.actionManager = new BABYLON.ActionManager(game.getScene());
        this.mesh = mesh;
        mesh.skeleton.createAnimationRange('loopStrongAttack', 340, 350);
        mesh.skeleton.createAnimationRange('loopBlock', 70, 80);
        return mesh;
    };
    Player.prototype.initSfx = function () {
        var game = this.game;
        this.sfxWalk = new BABYLON.Sound("CharacterWalk", "assets/sounds/character/walk/1.mp3", game.getScene(), null, {
            loop: true,
            autoplay: false
        });
        this.sfxHit = new BABYLON.Sound("CharacterHit", "assets/sounds/character/hit.mp3", game.getScene(), null, {
            loop: false,
            autoplay: false
        });
    };
    Player.prototype.initGodRay = function () {
        GodRay.createGodRay(this.game, this.meshForMove);
        return this;
    };
    Player.prototype.setCharacterStatistics = function (playerServerData) {
        this.statistics = playerServerData.statistics;
        this.statisticsAll = playerServerData.allStatistics;
        this.attributes = playerServerData.attributes;
    };
    Player.prototype.setCharacterSkills = function (skills) {
        skills = [
            {
                type: 1
            },
            {
                type: 2
            },
            {
                type: 3
            },
            {
                type: 4
            }
        ];
        var self = this;
        this.skills = [];
        if (skills) {
            skills.forEach(function (skill) {
                var playerSkill = Character.Skills.SkillsManager.getSkill(skill.type, self);
                self.skills[playerSkill.getType()] = playerSkill;
            });
        }
        return this;
    };
    Player.prototype.isAnySkillIsInUse = function () {
        var isInUse = false;
        this.skills.forEach(function (skill) {
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
    };
    Player.prototype.removeFromWorld = function () {
        this.mesh.dispose();
    };
    Player.prototype.refreshCameraPosition = function () {
        var camera = this.game.getScene().getCameraByName('gameCamera');
        camera.position = this.meshForMove.position.clone();
        camera.position.y = 18;
        camera.position.z -= 12;
        camera.position.x -= 12;
    };
    Player.prototype.refreshExperienceInGui = function () {
        this.game.gui.playerBottomPanel.expBar.width = this.experiencePercentages / 100;
        this.game.gui.playerBottomPanel.expBarText.text = this.experiencePercentages + '%';
    };
    Player.prototype.refreshEnergyInGui = function () {
        if (this.isControllable) {
            var percentage = Math.round(this.statistics.energy * 100 / this.statistics.energyMax);
            this.game.gui.playerBottomPanel.energyBar.width = percentage / 100;
            this.game.gui.playerBottomPanel.energyBarText.text = this.statistics.energy + ' / ' + this.statistics.energyMax;
        }
    };
    Player.prototype.refreshHpInGui = function () {
        var percentage = Math.round(this.statistics.hp * 100 / this.statistics.hpMax);
        this.game.gui.playerBottomPanel.hpBar.width = percentage / 100;
        this.game.gui.playerBottomPanel.hpBarText.text = this.statistics.hp + ' / ' + this.statistics.hpMax;
    };
    Player.prototype.addExperience = function (experince, experiencePercentages) {
        this.experience += experince;
        this.experiencePercentages = experiencePercentages;
        this.refreshExperienceInGui();
    };
    Player.prototype.setNewLvl = function () {
        this.game.gui.playerLogsQuests.addText('New lvl ' + this.lvl + '', 'red');
        this.game.gui.playerLogsQuests.addText('You got 5 attribute points', 'red');
        this.game.gui.playerLogsQuests.addText('You got 1 skill point ' + this.lvl + '', 'red');
        this.refreshExperienceInGui();
        this.initGodRay();
    };
    Player.prototype.runPlayerToPosition = function (targetPointVector3) {
        if (this.isAnySkillIsInUse()) {
            return;
        }
        var self = this;
        var mesh = this.meshForMove;
        mesh.lookAt(targetPointVector3, Math.PI);
        this.unregisterMoveWithCollision(false);
        this.dynamicFunction = function () {
            if (mesh.intersectsPoint(targetPointVector3)) {
                self.game.getScene().unregisterBeforeRender(self.dynamicFunction);
                if (self.animation) {
                    self.animation.stop();
                }
            }
            else {
                var rotation = mesh.rotation;
                var forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / self.getWalkSpeed(), 0, -parseFloat(Math.cos(rotation.y)) / self.getWalkSpeed());
                mesh.moveWithCollisions(forwards);
                self.game.player.refreshCameraPosition();
                self.runAnimationWalk();
            }
        };
        this.game.getScene().registerBeforeRender(this.dynamicFunction);
    };
    Player.prototype.unregisterMoveWithCollision = function (emitPosition) {
        if (this.dynamicFunction !== undefined) {
            this.game.getScene().unregisterBeforeRender(this.dynamicFunction);
        }
        if (emitPosition) {
            this.game.client.socket.emit('setTargetPoint', {
                position: this.meshForMove.position
            });
        }
    };
    Player.prototype.onWalkStart = function () {
        this.walkSmoke.start();
    };
    Player.prototype.onWalkEnd = function () {
        this.walkSmoke.stop();
    };
    return Player;
}(AbstractCharacter));
var Battleground = /** @class */ (function (_super) {
    __extends(Battleground, _super);
    function Battleground() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Battleground.prototype.initScene = function (game) {
        var self = this;
        game.sceneManager = this;
        var scene = new BABYLON.Scene(game.engine);
        self
            .setDefaults(game, scene)
            .optimizeScene(scene)
            .setCamera(scene)
            .setFog(scene)
            .executeWhenReady(function () {
            var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
            light.intensity = 0.4;
            light.position = new BABYLON.Vector3(0, 50, 0);
            light.direction = new BABYLON.Vector3(0.45, -2.5, 0);
            var ground = BABYLON.MeshBuilder.CreateGround("Ground", { width: 96, height: 96 }, scene);
            ground.actionManager = new BABYLON.ActionManager(scene);
            var terrainMaterial = new BABYLON.StandardMaterial("GroundMaterial", scene);
            terrainMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
            terrainMaterial.specularPower = 10;
            terrainMaterial.diffuseTexture = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.jpg", scene);
            terrainMaterial.diffuseTexture.uScale = terrainMaterial.diffuseTexture.vScale = 20;
            ground.material = terrainMaterial;
        }, function () {
            // game.player.playerLight.dispose();
        });
    };
    Battleground.TYPE = 99;
    return Battleground;
}(Scene));
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
                .executeWhenReady(function () {
                self.environment = new EnvironmentForestHouse(game);
            }, null);
        });
    };
    ForestHouse.TYPE = 2;
    return ForestHouse;
}(Scene));
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
                .executeWhenReady(function () {
                self.environment = new EnvironmentForestHouseStart(game);
            }, null);
        });
    };
    ForestHouseStart.TYPE = 1;
    return ForestHouseStart;
}(Scene));
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
                case Battleground.TYPE:
                    scene = new Battleground();
                    break;
                case MountainsPass.TYPE:
                    scene = new MountainsPass();
                    break;
                case CaveExit.TYPE:
                    scene = new CaveExit();
                    break;
                case Arena.TYPE:
                    scene = new Arena();
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
var MountainsPass = /** @class */ (function (_super) {
    __extends(MountainsPass, _super);
    function MountainsPass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MountainsPass.prototype.setFog = function (scene) {
        scene.clearColor = new BABYLON.Color3(0, 0, 0);
        scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
        scene.fogColor = new BABYLON.Color3(0.02, 0.05, 0.2);
        scene.fogColor = new BABYLON.Color3(0, 0, 0);
        scene.fogDensity = 1;
        scene.fogStart = 50;
        scene.fogEnd = 100;
        return this;
    };
    MountainsPass.prototype.initScene = function (game) {
        var self = this;
        game.sceneManager = this;
        BABYLON.SceneLoader.Load("assets/scenes/MountainsPass/", "MountainsPass.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .executeWhenReady(function () {
                self.environment = new EnvironmentMountainsPass(game);
            }, function () {
                new NPC.Guard(game, new BABYLON.Vector3(-117, 0, 128), new BABYLON.Vector3(0, -4.3, 0));
                // new NPC.Trader(game, new BABYLON.Vector3(-122, 0, -16), new BABYLON.Vector3(0, 0.7, 0));
                // new NPC.BigWarrior(game, new BABYLON.Vector3(-10, 0, -53), new BABYLON.Vector3(0, 1.54, 0));
            });
        });
    };
    MountainsPass.TYPE = 5;
    return MountainsPass;
}(Scene));
var SelectCharacter = /** @class */ (function (_super) {
    __extends(SelectCharacter, _super);
    function SelectCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectCharacter.prototype.initScene = function (game) {
        var self = this;
        game.sceneManager = this;
        var playersToSelect = [];
        var gui = null;
        BABYLON.SceneLoader.Load("assets/scenes/Select_Map/", "Select_Map.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                // .setFog(scene)
                .executeWhenReady(function () {
                new EnvironmentSelectCharacter(game, scene);
                game.client.socket.on('showPlayersToSelect', function (players) {
                    playersToSelect.forEach(function (playerSelect) {
                        playerSelect.mesh.dispose();
                    });
                    playersToSelect = [];
                    for (var i = 0; i < players.length; i++) {
                        var player = players[i];
                        playersToSelect.push(new SelectCharacter.Warrior(game, i, player));
                    }
                    if (gui) {
                        gui.texture.dispose();
                    }
                    if (playersToSelect.length < 2) {
                        gui = new GUI.SelectCharacter(game);
                    }
                });
            }, null, false);
        });
    };
    SelectCharacter.prototype.setCamera = function (scene) {
        var gameCamera = new BABYLON.FreeCamera("gameCamera", new BABYLON.Vector3(0, 0, 0), scene);
        gameCamera.position = new BABYLON.Vector3(0, 14, -20);
        gameCamera.rotation = new BABYLON.Vector3(0.5, 0, 0);
        gameCamera.maxZ = 200;
        gameCamera.minZ = -200;
        // camera.fov = 13.25;
        gameCamera.fovMode = 0;
        gameCamera.layerMask = 2;
        scene.activeCameras = [gameCamera];
        return this;
    };
    SelectCharacter.TYPE = 4;
    return SelectCharacter;
}(Scene));
var SocketEvent = /** @class */ (function () {
    function SocketEvent(game, socket) {
        this.game = game;
        this.socket = socket;
    }
    return SocketEvent;
}());
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster(game, serverKey, serverData) {
        var _this = _super.call(this, serverData.name, game) || this;
        _this.statistics = serverData.statistics;
        _this.id = serverKey;
        _this.createBoxForMove(new BABYLON.Vector3(serverData.position.x, serverData.position.y, serverData.position.z));
        _this.createMesh(serverData.type, serverData.meshName, new BABYLON.Vector3(serverData.scale, serverData.scale, serverData.scale));
        _this.initSfx();
        _this.registerActions();
        _this.bloodParticles = new Particles.Blood(game, _this.mesh).particleSystem;
        _this.walkSmoke = WalkSmoke.getParticles(game.getScene(), 2, _this.mesh);
        _this.initPatricleSystemDamage();
        return _this;
    }
    Monster.prototype.createMesh = function (factoryName, meshName, scale) {
        var game = this.game;
        var mesh = game.factories[factoryName].createClone(meshName, true);
        mesh.rotation = new BABYLON.Vector3(0, Math.PI, 0);
        mesh.visibility = 1;
        mesh.isPickable = false;
        mesh.scaling = scale;
        mesh.skeleton.enableBlending(0.2);
        mesh.outlineColor = new BABYLON.Color3(0.3, 0, 0);
        mesh.outlineWidth = 0.1;
        mesh.parent = this.meshForMove;
        // game.sceneManager.options.addMeshToDynamicShadowGenerator(mesh);
        this.mesh = mesh;
    };
    Monster.prototype.registerActions = function () {
        var game = this.game;
        var self = this;
        this.meshForMove.actionManager = new BABYLON.ActionManager(this.game.getScene());
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
            self.mesh.renderOutline = false;
            self.game.gui.characterTopHp.hideHpBar();
        }));
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
            self.mesh.renderOutline = true;
            self.game.gui.characterTopHp.showHpCharacter(self);
        }));
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, function () {
            game.player.attackActions.attackMonster(self);
        }));
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger, function () {
            game.player.attackActions.attackOnlyOnce();
        }));
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickOutTrigger, function () {
            game.player.attackActions.abbadonMonsterAttack();
        }));
    };
    Monster.prototype.initSfx = function () {
        var game = this.game;
        this.sfxHit = new BABYLON.Sound("CharacterHit", "assets/sounds/character/hit.mp3", game.getScene(), null, {
            loop: false,
            autoplay: false
        });
        this.sfxWalk = new BABYLON.Sound("CharacterHit", null, game.getScene(), null, {
            loop: false,
            autoplay: false
        });
    };
    Monster.prototype.removeFromWorld = function () {
        if (this.intervalAttackRegisteredFunction) {
            clearInterval(this.intervalAttackRegisteredFunction);
        }
        this.meshForMove.dispose();
        this.walkSmoke.dispose();
        this.bloodParticles.dispose();
    };
    Monster.prototype.retrieveHit = function (updatedEnemy) {
        var self = this;
        if (this.statistics.hp != updatedEnemy.statistics.hp) {
            var damage_1 = (this.statistics.hp - updatedEnemy.statistics.hp);
            this.statistics.hp = updatedEnemy.statistics.hp;
            setTimeout(function () {
                self.bloodParticles.start();
                self.showDamage(damage_1);
                setTimeout(function () {
                    self.bloodParticles.stop();
                }, 100);
                if (self.statistics.hp <= 0) {
                    self.isDeath = true;
                    self.animation.stop();
                    setTimeout(function () {
                        self.removeFromWorld();
                    }, 6000);
                }
                self.game.gui.characterTopHp.refreshPanel();
            }, 400);
        }
    };
    Monster.prototype.onWalkStart = function () {
        this.walkSmoke.start();
    };
    Monster.prototype.onWalkEnd = function () {
        this.walkSmoke.stop();
    };
    return Monster;
}(AbstractCharacter));
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
var NPC;
(function (NPC) {
    var BigWarrior = /** @class */ (function (_super) {
        __extends(BigWarrior, _super);
        function BigWarrior(game, position, rotation) {
            var _this = this;
            _this.name = 'Lech';
            var mesh = game.factories['character'].createClone('Warrior', true);
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
var NPC;
(function (NPC) {
    var Guard = /** @class */ (function (_super) {
        __extends(Guard, _super);
        function Guard(game, position, rotation) {
            var _this = this;
            _this.name = 'Guard';
            _this.mesh = game.factories['character'].createClone('Warrior', true);
            _this = _super.call(this, game, name, position, rotation) || this;
            var items = [
                {
                    meshName: 'leatherArmor',
                    equip: 1
                },
                {
                    meshName: 'leatherHelm',
                    equip: 1
                },
                {
                    meshName: 'leatherBoots',
                    equip: 1
                },
                {
                    meshName: 'leatherGloves',
                    equip: 1
                },
                {
                    meshName: 'shieldWoodenMedium',
                    equip: 1
                },
                {
                    meshName: 'swordLong',
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
var NPC;
(function (NPC) {
    var Trader = /** @class */ (function (_super) {
        __extends(Trader, _super);
        function Trader(game, position, rotation) {
            var _this = this;
            _this.name = 'Trader';
            _this.mesh = game.factories['character'].createClone('Warrior', true);
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
var SelectCharacter;
(function (SelectCharacter) {
    var Warrior = /** @class */ (function (_super) {
        __extends(Warrior, _super);
        function Warrior(game, place, playerDatabase) {
            var _this = this;
            _this.name = 'Warrior';
            _this.playerId = playerDatabase.id;
            var mesh = game.factories['character'].createClone('Warrior', true);
            mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);
            mesh.skeleton.enableBlending(0.3);
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
            var clicked = false;
            this.meshForMove = BABYLON.MeshBuilder.CreateBox(this.name + '_selectBox', {
                width: 2,
                height: 5,
                size: 2
            }, this.game.getScene());
            this.meshForMove.checkCollisions = false;
            this.meshForMove.visibility = 0;
            this.meshForMove.isPickable = true;
            this.meshForMove.parent = this.mesh;
            this.meshForMove.position.y = 2;
            var sitDown = function () {
                if (!self.skeletonAnimation) {
                    var animationSelectRange = self.mesh.skeleton.getAnimationRange('Select');
                    self.skeletonAnimation = self.game.getScene().beginAnimation(self.mesh, animationSelectRange.to, animationSelectRange.from + 1, false, -1, function () {
                        self.mesh.skeleton.beginAnimation('Sit');
                        self.skeletonAnimation = null;
                    });
                }
            };
            this.meshForMove.actionManager = new BABYLON.ActionManager(this.game.getScene());
            this.meshForMove.isPickable = true;
            this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
                pointerOut = false;
                if (!self.skeletonAnimation) {
                    self.skeletonAnimation = self.mesh.skeleton.beginAnimation('Select', false, 1, function () {
                        self.skeletonAnimation = null;
                        if (pointerOut) {
                            sitDown();
                        }
                        else {
                            self.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                        }
                    });
                }
            }));
            this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
                sitDown();
                pointerOut = true;
            }));
            this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, function () {
                if (!clicked) {
                    clicked = true;
                    self.game.client.socket.emit('selectCharacter', self.playerId);
                }
            }));
            this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickOutTrigger, function () {
                if (!clicked) {
                    clicked = true;
                    self.game.client.socket.emit('selectCharacter', self.playerId);
                }
            }));
            this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                if (!clicked) {
                    clicked = true;
                    self.game.client.socket.emit('selectCharacter', self.playerId);
                }
            }));
        };
        return Warrior;
    }(AbstractCharacter));
    SelectCharacter.Warrior = Warrior;
})(SelectCharacter || (SelectCharacter = {}));
var TooltipButton = /** @class */ (function () {
    function TooltipButton(baseControl, text, parentPosition) {
        var panel = new BABYLON.GUI.Rectangle('tooltip');
        panel.top = parentPosition.y;
        panel.left = parentPosition.x;
        panel.width = 0;
        panel.height = 0;
        panel.cornerRadius = 20;
        panel.thickness = 1;
        panel.background = "black";
        panel.color = "white";
        panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        panel.adaptHeightToChildren = true;
        panel.adaptWidthToChildren = true;
        panel.paddingRight = '-80px';
        panel.paddingBottom = '-40px';
        panel.alpha = 0.8;
        panel.isHitTestVisible = false;
        baseControl.addControl(panel);
        this.container = panel;
        var label = new BABYLON.GUI.TextBlock();
        label.resizeToFit = true;
        label.text = text;
        label.fontFamily = "RuslanDisplay";
        panel.addControl(label);
    }
    return TooltipButton;
}());
var TooltipHelper = /** @class */ (function () {
    function TooltipHelper() {
    }
    TooltipHelper.createTooltipOnInventoryItemButton = function (texture, item, button, pickCallback) {
        var tooltipButton = null;
        button.onPointerEnterObservable.add(function () {
            var text = item.name;
            if (item.statistics.damageMin > 0) {
                text += "\nDamage: " + item.statistics.damageMin + " - " + item.statistics.damageMax + "";
            }
            if (item.statistics.armor > 0) {
                text += "\nArmor: " + item.statistics.armor + "";
            }
            tooltipButton = new TooltipButton(texture, text, new BABYLON.Vector2(button.centerX, button.centerY));
        });
        button.onPointerOutObservable.add(function () {
            tooltipButton.container.dispose();
        });
        button.onPointerUpObservable.add(pickCallback);
    };
    return TooltipHelper;
}());
var TooltipMesh = /** @class */ (function () {
    function TooltipMesh(mesh, text, linkOffsetY) {
        if (linkOffsetY === void 0) { linkOffsetY = -80; }
        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        advancedTexture.layer.layerMask = 2;
        this.container = advancedTexture;
        var panel = new BABYLON.GUI.Rectangle('tooltip');
        panel.cornerRadius = 20;
        panel.thickness = 1;
        panel.background = "black";
        panel.color = "white";
        panel.adaptHeightToChildren = true;
        panel.adaptWidthToChildren = true;
        panel.paddingRight = '-40px';
        panel.paddingBottom = '-20px';
        panel.alpha = 0.8;
        advancedTexture.addControl(panel);
        var label = new BABYLON.GUI.TextBlock();
        label.resizeToFit = true;
        label.text = text;
        label.fontFamily = "RuslanDisplay";
        panel.addControl(label);
        panel.linkWithMesh(mesh);
        panel.linkOffsetY = linkOffsetY;
    }
    return TooltipMesh;
}());
var GUI;
(function (GUI) {
    var Attributes = /** @class */ (function (_super) {
        __extends(Attributes, _super);
        function Attributes(guiMain) {
            var _this = _super.call(this, guiMain) || this;
            _this.name = 'Attributes';
            _this.imageUrl = "assets/gui/content.png";
            _this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            return _this;
        }
        Attributes.prototype.initTexture = function () {
            this.guiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.' + this.name);
            this.guiTexture.layer.layerMask = 1;
            var container = new BABYLON.GUI.Rectangle('gui.panel.' + this.name);
            container.horizontalAlignment = this.position;
            container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            container.thickness = 0;
            container.isPointerBlocker = true;
            this.container = container;
            this.guiTexture.addControl(container);
            var image = new BABYLON.GUI.Image('gui.popup.image.', this.imageUrl);
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.width = 1;
            image.height = 1;
            container.addControl(image);
            this.container.addControl(image);
            this.containerBackground = image;
            container.width = '685px';
            container.height = '100%';
            return this;
        };
        Attributes.prototype.open = function () {
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
            panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            panel.width = 1;
            panel.height = 0.9;
            panel.top = '10%';
            this.container.addControl(panel);
            var textPlayerName = this.createText(this.guiMain.game.player.name);
            textPlayerName.color = 'brown';
            textPlayerName.fontSize = 40;
            textPlayerName.top = 10;
            panel.addControl(textPlayerName);
            var textPlayerLVL = this.createText(this.guiMain.game.player.lvl + ' LVL');
            textPlayerLVL.color = 'brown';
            textPlayerLVL.fontSize = 32;
            textPlayerLVL.top = 100;
            textPlayerLVL.paddingBottom = 40;
            panel.addControl(textPlayerLVL);
            this.createAttribute(1, 'Strength:' + this.guiMain.game.player.attributes.strength, panel);
            this.createAttribute(2, 'Durability:' + this.guiMain.game.player.attributes.durability, panel);
            this.createAttribute(3, 'Vitality:' + this.guiMain.game.player.attributes.vitality, panel);
            this.createAttribute(4, 'Stamina:' + this.guiMain.game.player.attributes.stamina, panel);
            if (this.guiMain.game.player.freeAttributesPoints) {
                var textAttributes = this.createText('You have ' + this.guiMain.game.player.freeAttributesPoints + ' free attribute points.');
                textAttributes.color = 'red';
                textAttributes.fontSize = 16;
                panel.addControl(textAttributes);
            }
            var textStatistics = this.createText('Statistics');
            textStatistics.color = 'brown';
            textStatistics.height = '8%';
            textStatistics.fontSize = 32;
            textStatistics.paddingTop = 40;
            panel.addControl(textStatistics);
            var damage = this.createText('Damage: ' + this.guiMain.game.player.statisticsAll.damageMin + ' - ' + this.guiMain.game.player.statisticsAll.damageMax);
            panel.addControl(damage);
            var armor = this.createText('Armor: ' + this.guiMain.game.player.statisticsAll.armor);
            panel.addControl(armor);
            var attackSpeed = this.createText('Attack chance: ' + this.guiMain.game.player.statistics.hitChance);
            panel.addControl(attackSpeed);
            var blockChance = this.createText('Block chance: ' + this.guiMain.game.player.statistics.blockChance);
            panel.addControl(blockChance);
        };
        Attributes.prototype.createText = function (text) {
            var textBlock = new BABYLON.GUI.TextBlock();
            textBlock.text = text;
            textBlock.color = "black";
            textBlock.width = "100%";
            textBlock.height = "5%";
            textBlock.fontFamily = "RuslanDisplay";
            textBlock.fontSize = 20;
            textBlock.resizeToFit = true;
            textBlock.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            return textBlock;
        };
        Attributes.prototype.createAttribute = function (type, text, control) {
            var self = this;
            if (this.guiMain.game.player.freeAttributesPoints) {
                var button = BABYLON.GUI.Button.CreateImageButton("plus", text, "assets/gui/plus.png");
                button.height = "40px";
                button.thickness = 0;
                button.width = 0.4;
                button.color = 'black';
                button.fontFamily = "RuslanDisplay";
                button.fontSize = 16;
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
var GUI;
(function (GUI) {
    var Inventory = /** @class */ (function (_super) {
        __extends(Inventory, _super);
        function Inventory(guiMain) {
            var _this = _super.call(this, guiMain) || this;
            _this.meshes = [];
            _this.name = 'Inventory';
            _this.imageUrl = "assets/gui/content.png";
            _this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            return _this;
        }
        Inventory.prototype.initTexture = function () {
            this.guiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.' + this.name);
            this.guiTexture.layer.layerMask = 1;
            var container = new BABYLON.GUI.Rectangle('gui.panel.' + this.name);
            container.horizontalAlignment = this.position;
            container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            container.thickness = 0;
            container.isPointerBlocker = true;
            this.container = container;
            this.guiTexture.addControl(container);
            var image = new BABYLON.GUI.Rectangle('gui.popup.image');
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.width = 1;
            image.thickness = 0;
            image.height = 1;
            container.addControl(image);
            this.container.addControl(image);
            container.width = '685px';
            container.height = '100%';
            return this;
        };
        Inventory.prototype.open = function () {
            var self = this;
            var inventoryPlayer = this.guiMain.game.player.mesh.createInstance('inventory_player');
            inventoryPlayer.layerMask = 1;
            inventoryPlayer.position = new BABYLON.Vector3(-5, -2, 12);
            inventoryPlayer.rotation = new BABYLON.Vector3(0, -0.2, 0);
            self.meshes.push(inventoryPlayer);
            this.guiMain.game.getScene().getCameraByName('gameCamera').position.y = 500;
            this.guiMain.playerBottomPanel.container.alpha = 0;
            this.guiMain.game.player.inventory.getEquipedItems().forEach(function (item) {
                if (item) {
                    var itemInstance = item.mesh.createInstance("itemInstance");
                    itemInstance.layerMask = 1;
                    itemInstance.position = new BABYLON.Vector3(-5, -2, 12);
                    itemInstance.rotation = new BABYLON.Vector3(0, -0.2, 0);
                    self.meshes.push(itemInstance);
                }
            });
            this.initTexture();
            this.showTexts();
            this.opened = true;
            this.showItems();
            this.showEquipedItems();
            this.showSpecialItemsAndGold();
            this.createButtonClose();
            return this;
        };
        Inventory.prototype.showTexts = function () {
            var itemsEquiped = new BABYLON.GUI.TextBlock('title');
            itemsEquiped.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            itemsEquiped.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            itemsEquiped.text = 'Equiped items';
            itemsEquiped.top = "2%";
            itemsEquiped.color = "brown";
            itemsEquiped.width = "70%";
            itemsEquiped.height = "10%";
            itemsEquiped.fontSize = 38;
            itemsEquiped.fontFamily = "RuslanDisplay";
            itemsEquiped.textWrapping = true;
            this.container.addControl(itemsEquiped);
            var itemToEquip = new BABYLON.GUI.TextBlock('title');
            itemToEquip.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            itemToEquip.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            itemToEquip.text = 'Inventory items';
            itemToEquip.top = "200px";
            itemToEquip.color = "brown";
            itemToEquip.width = "70%";
            itemToEquip.height = "10%";
            itemToEquip.fontSize = 38;
            itemToEquip.fontFamily = "RuslanDisplay";
            itemToEquip.textWrapping = true;
            this.container.addControl(itemToEquip);
        };
        Inventory.prototype.showSpecialItemsAndGold = function () {
            var image = BABYLON.GUI.Button.CreateImageButton("gui.popup.image.gold", '' + this.guiMain.game.player.gold + '', "assets/gui/gold.png");
            image.thickness = 0;
            image.color = 'white';
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            this.container.addControl(image);
            var image2 = BABYLON.GUI.Button.CreateImageButton("gui.popup.image.key", '' + this.guiMain.game.player.keys + '', "assets/gui/key.png");
            image2.thickness = 0;
            image2.color = 'white';
            image2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            this.container.addControl(image2);
            var image3 = BABYLON.GUI.Button.CreateImageButton("gui.popup.image.wine", '' + this.guiMain.game.player.keys + '', "assets/skills/heal.png");
            image3.thickness = 0;
            image3.color = 'white';
            image3.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image3.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            this.container.addControl(image3);
            image.height = '24px';
            image.width = '150px';
            image.left = "-150px";
            image.top = '-20px';
            image.fontSize = 18;
            image2.height = '24px';
            image2.width = '150px';
            image2.left = "20px";
            image2.top = '-20px';
            image2.fontSize = 18;
            image3.height = '24px';
            image3.width = '150px';
            image3.left = "180px";
            image3.top = '-20px';
            image3.fontSize = 18;
        };
        Inventory.prototype.close = function () {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
            this.meshes.forEach(function (mesh) {
                mesh.dispose();
            });
            this.guiMain.game.player.refreshCameraPosition();
            this.guiMain.playerBottomPanel.container.alpha = 1;
        };
        Inventory.prototype.showEquipedItems = function () {
            this.weaponImage = new Weapon(this);
            this.shieldImage = new Shield(this);
            this.glovesImage = new Gloves(this);
            this.bootsImage = new Boots(this);
            this.armorImage = new Armor(this);
            this.helmImage = new Helm(this);
        };
        Inventory.prototype.showItems = function () {
            var self = this;
            var inventory = this.guiMain.game.player.inventory;
            if (this.panelItems) {
                this.guiTexture.removeControl(this.panelItems);
            }
            var eqiupedItems = inventory.getEquipedItems();
            var grid = new BABYLON.GUI.Grid();
            grid.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            grid.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            grid.width = '568px';
            grid.height = '280px';
            grid.top = '250px';
            grid.left = '110px';
            grid.addColumnDefinition(1);
            grid.addColumnDefinition(1);
            grid.addColumnDefinition(1);
            grid.addColumnDefinition(1);
            grid.addColumnDefinition(1);
            grid.addColumnDefinition(1);
            grid.addColumnDefinition(1);
            grid.addColumnDefinition(1);
            grid.addRowDefinition(1);
            grid.addRowDefinition(1);
            grid.addRowDefinition(1);
            grid.addRowDefinition(1);
            this.container.addControl(grid);
            var itemCount = 0;
            var row = -1;
            var collumn = -1;
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
                if (itemCount % 6 == 0) {
                    row++;
                    collumn = -1;
                }
                itemCount++;
                collumn++;
                var image = BABYLON.GUI.Button.CreateImageOnlyButton('gui.popup.image.' + item.name, 'assets/Miniatures/' + item.image + '.png');
                image.height = 1;
                image.width = 1;
                image.thickness = 0;
                image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
                image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
                grid.addControl(image, row, collumn);
                TooltipHelper.createTooltipOnInventoryItemButton(self.guiTexture, item, image, function () {
                    self.guiMain.game.player.inventory.emitEquip(item);
                    self.onPointerUpItemImage(item);
                    self.showItems();
                    self.guiMain.attributes.refreshPopup();
                });
            };
            for (var i = 0; i < inventory.items.length; i++) {
                _loop_1(i);
            }
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
                    this.weaponImage = new Weapon(this);
                    break;
                case 2:
                    if (this.shieldImage.block) {
                        this.guiTexture.removeControl(this.shieldImage.block);
                    }
                    this.shieldImage = new Shield(this);
                    break;
                case 3:
                    if (this.helmImage.block) {
                        this.guiTexture.removeControl(this.helmImage.block);
                    }
                    this.helmImage = new Helm(this);
                    break;
                case 4:
                    if (this.glovesImage.block) {
                        this.guiTexture.removeControl(this.glovesImage.block);
                    }
                    this.glovesImage = new Gloves(this);
                    break;
                case 5:
                    if (this.bootsImage.block) {
                        this.guiTexture.removeControl(this.bootsImage.block);
                    }
                    this.bootsImage = new Boots(this);
                    break;
                case 6:
                    if (this.armorImage.block) {
                        this.guiTexture.removeControl(this.armorImage.block);
                    }
                    this.armorImage = new Armor(this);
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
            image.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
            image.isPointerBlocker = true;
            return image;
        };
        return Inventory;
    }(GUI.Popup));
    GUI.Inventory = Inventory;
})(GUI || (GUI = {}));
var GUI;
(function (GUI) {
    var Options = /** @class */ (function (_super) {
        __extends(Options, _super);
        function Options(guiMain) {
            var _this = _super.call(this, guiMain) || this;
            _this.name = 'Options';
            _this.imageUrl = "assets/gui/content.png";
            _this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            return _this;
        }
        Options.prototype.initTexture = function () {
            this.guiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.' + this.name);
            this.guiTexture.layer.layerMask = 1;
            var container = new BABYLON.GUI.Rectangle('gui.panel.' + this.name);
            container.horizontalAlignment = this.position;
            container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            container.thickness = 0;
            container.isPointerBlocker = true;
            this.container = container;
            this.guiTexture.addControl(container);
            var image = new BABYLON.GUI.Image('gui.popup.image.', this.imageUrl);
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.width = 1;
            image.height = 1;
            container.addControl(image);
            this.container.addControl(image);
            this.containerBackground = image;
            container.width = '685px';
            container.height = '100%';
            return this;
        };
        Options.prototype.open = function () {
            this.opened = true;
            this.initTexture();
            this.guiTexture.addControl(this.container);
            this.showText();
            this.createButtonClose();
        };
        Options.prototype.close = function () {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
        };
        Options.prototype.showText = function () {
            var panel = new BABYLON.GUI.StackPanel('options.panel');
            panel.isPointerBlocker = true;
            panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            panel.width = 0.8;
            panel.height = 1;
            panel.top = '10%';
            this.container.addControl(panel);
            var game = this.guiMain.game;
            var shadowsGroup = new BABYLON.GUI.CheckboxGroup("Shadows");
            shadowsGroup.color = "black";
            shadowsGroup.addCheckbox("Static shadows", function (isChecked) {
                GameOptions.saveInLocalStorage('staticShadows', isChecked, game);
            }, game.sceneManager.options.staticShadows);
            shadowsGroup.addCheckbox("Dynamic Shadows", function (isChecked) {
                GameOptions.saveInLocalStorage('dynamicShadows', isChecked, game);
            }, game.sceneManager.options.dynamicShadows);
            var postProccessGroup = new BABYLON.GUI.CheckboxGroup("Post proccessing");
            postProccessGroup.color = "white";
            postProccessGroup.addCheckbox("Enabled", function (isChecked) {
                GameOptions.saveInLocalStorage('postProccessing', isChecked, game);
            }, game.sceneManager.options.postProccessing);
            postProccessGroup.addCheckbox("FXAA", function (isChecked) {
                GameOptions.saveInLocalStorage('fxaa', isChecked, game);
            }, game.sceneManager.options.fxaa);
            // postProccessGroup.addCheckbox("Depth Of Field", (isChecked) => {
            //     GameOptions.saveInLocalStorage('dof', isChecked, game);
            // }, game.sceneManager.options.dof);
            // let dofGroup = new BABYLON.GUI.SliderGroup("DOF", "S");
            // dofGroup.addSlider("fStop", (value) => {
            //     GameOptions.saveInLocalStorage('fStop', value, game);
            // }, "", 0.01, 10, game.sceneManager.options.fStop, (value) => {
            //     return value;
            // });
            //
            // dofGroup.addSlider("focusDistance", (value) => {
            //     GameOptions.saveInLocalStorage('focusDistance', value, game);
            // }, "", 0, 45000, game.sceneManager.options.focusDistance, (value) => {
            //     return value;
            // });
            //
            // dofGroup.addSlider("focalLength", (value) => {
            //     GameOptions.saveInLocalStorage('focalLength', value, game);
            // }, "", 0.01, 500.00, game.sceneManager.options.focalLength, (value) => {
            //     return value;
            // });
            //
            // dofGroup.addSlider("lensSize", (value) => {
            //     GameOptions.saveInLocalStorage('lensSize', value, game);
            // }, "", 0.01, 500.00, game.sceneManager.options.lensSize, (value) => {
            //     return value;
            // });
            postProccessGroup.addCheckbox("Bloom", function (isChecked) {
                GameOptions.saveInLocalStorage('bloom', isChecked, game);
            }, game.sceneManager.options.bloom);
            postProccessGroup.addCheckbox("Fog", function (isChecked) {
                GameOptions.saveInLocalStorage('fog', isChecked, game);
            }, game.sceneManager.options.fog);
            var selectBox = new BABYLON.GUI.SelectionPanel("sp", [shadowsGroup, postProccessGroup]);
            selectBox.width = 0.8;
            selectBox.height = 0.8;
            selectBox.thickness = 0;
            selectBox.color = "black";
            selectBox.headerColor = "brown";
            selectBox.fontFamily = "RuslanDisplay";
            panel.addControl(selectBox);
        };
        return Options;
    }(GUI.Popup));
    GUI.Options = Options;
})(GUI || (GUI = {}));
var GUI;
(function (GUI) {
    var NewQuest = /** @class */ (function (_super) {
        __extends(NewQuest, _super);
        function NewQuest(guiMain, questServerData) {
            var _this = _super.call(this, guiMain) || this;
            _this.questData = questServerData;
            _this.name = 'Quest';
            _this.imageUrl = "assets/gui/content.png";
            _this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            return _this;
        }
        NewQuest.prototype.initTexture = function () {
            this.guiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.' + this.name);
            this.guiTexture.layer.layerMask = 1;
            var container = new BABYLON.GUI.Rectangle('gui.panel.' + this.name);
            container.horizontalAlignment = this.position;
            container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            container.thickness = 0;
            container.isPointerBlocker = true;
            this.container = container;
            this.guiTexture.addControl(container);
            var image = new BABYLON.GUI.Image('gui.popup.image.', this.imageUrl);
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.width = 1;
            image.height = 1;
            image.isPointerBlocker = true;
            container.addControl(image);
            this.container.addControl(image);
            this.containerBackground = image;
            container.width = '685px';
            container.height = '100%';
            return this;
        };
        NewQuest.prototype.open = function () {
            var self = this;
            this.opened = true;
            this.initTexture();
            this.guiTexture.addControl(this.container);
            this.showText();
            this.createButtonClose();
            var buttonAccept = BABYLON.GUI.Button.CreateSimpleButton("questsButtonAccept", "Accept quest");
            buttonAccept.color = "red";
            buttonAccept.background = "black";
            buttonAccept.width = "180px;";
            buttonAccept.height = "48px";
            buttonAccept.thickness = 0;
            buttonAccept.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonAccept.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            buttonAccept.onPointerUpObservable.add(function () {
                self.guiMain.game.client.socket.emit('acceptQuest', self.questData.questId);
                self.close();
            });
            this.container.addControl(buttonAccept);
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
            title.color = "brown";
            title.width = "70%";
            title.height = "10%";
            title.fontSize = 38;
            title.fontFamily = "RuslanDisplay";
            title.textWrapping = true;
            this.container.addControl(title);
            var description = new BABYLON.GUI.TextBlock('descrption');
            description.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            description.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            description.text = this.questData.description;
            description.color = "black";
            description.top = "10%";
            description.width = "70%";
            description.height = "10%";
            description.fontSize = 16;
            description.fontFamily = "RuslanDisplay";
            description.textWrapping = true;
            this.container.addControl(description);
            Object.values(this.questData.chapters).forEach(function (chapterData, chapter) {
                var topPadding = (chapter * 15);
                var chapterHeader = new BABYLON.GUI.TextBlock();
                chapterHeader.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                chapterHeader.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
                chapterHeader.text = 'Chapter ' + (chapter + 1);
                chapterHeader.top = topPadding + 15 + "%";
                chapterHeader.width = "70%";
                chapterHeader.height = "25%";
                chapterHeader.color = "green";
                chapterHeader.fontSize = 30;
                chapterHeader.fontFamily = "RuslanDisplay";
                chapterHeader.textWrapping = true;
                self.container.addControl(chapterHeader);
                var chapterDescription = new BABYLON.GUI.TextBlock();
                chapterDescription.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                chapterDescription.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
                chapterDescription.text = chapterData.description;
                chapterDescription.top = topPadding + 22 + "%";
                chapterDescription.width = "70%";
                chapterDescription.height = "25%";
                chapterDescription.color = "black";
                chapterDescription.fontSize = 16;
                chapterDescription.fontFamily = "RuslanDisplay";
                chapterDescription.textWrapping = true;
                self.container.addControl(chapterDescription);
            });
        };
        return NewQuest;
    }(GUI.Popup));
    GUI.NewQuest = NewQuest;
})(GUI || (GUI = {}));
var ClickParticles = /** @class */ (function () {
    function ClickParticles() {
    }
    ClickParticles.getParticles = function (scene) {
        var particleSystem = new BABYLON.ParticleSystem("clickParticles", 50, scene);
        particleSystem.particleTexture = new BABYLON.Texture("assets/flare.png", scene);
        particleSystem.layerMask = 2;
        particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
        particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
        particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
        particleSystem.emitter = new BABYLON.Vector3(0, 2, 0); // the starting location
        particleSystem.minSize = 0.5;
        particleSystem.maxSize = 0.5;
        particleSystem.minLifeTime = 0.5;
        particleSystem.maxLifeTime = 1.5;
        particleSystem.emitRate = 20;
        particleSystem.targetStopDuration = 0.2;
        particleSystem.createPointEmitter(new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 1, 0));
        // Speed
        particleSystem.minEmitPower = 1;
        particleSystem.maxEmitPower = 3;
        return particleSystem;
    };
    return ClickParticles;
}());
var Particles;
(function (Particles) {
    var FastAttack = /** @class */ (function (_super) {
        __extends(FastAttack, _super);
        function FastAttack() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FastAttack.prototype.initParticleSystem = function () {
            var box = BABYLON.MeshBuilder.CreateBox("bx0", { size: 1 }, this.game.getScene());
            box.visibility = 0;
            box.scaling = new BABYLON.Vector3(1, 1, 0.1);
            box.position = new BABYLON.Vector3(0, 0, 0.1);
            box.parent = this.emitter;
            box.attachToBone(this.emitter.skeleton.bones[25], this.emitter);
            var fireSystem = new BABYLON.ParticleSystem("particles", 1000, this.game.getScene());
            fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            fireSystem.emitter = box;
            fireSystem.minSize = 1;
            fireSystem.maxSize = 1.5;
            fireSystem.minEmitPower = 0;
            fireSystem.maxEmitPower = 1;
            fireSystem.minLifeTime = 0.15;
            fireSystem.maxLifeTime = 0.25;
            fireSystem.emitRate = 150;
            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            fireSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0);
            fireSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
            fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 0, 0);
            fireSystem.color1 = new BABYLON.Color4(1, 1, 1, 1);
            fireSystem.color2 = new BABYLON.Color4(1, 1, 1, 1);
            this.particleSystem = fireSystem;
        };
        return FastAttack;
    }(Particles.AbstractParticle));
    Particles.FastAttack = FastAttack;
})(Particles || (Particles = {}));
var Particles;
(function (Particles) {
    var Heal = /** @class */ (function (_super) {
        __extends(Heal, _super);
        function Heal() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Heal.prototype.initParticleSystem = function () {
            var scene = this.game.getScene();
            var emitter = BABYLON.Mesh.CreateBox("emitter0", 0.1, scene);
            emitter.isVisible = false;
            emitter.parent = this.emitter;
            var fireSystem = new BABYLON.ParticleSystem("particles", 1000, scene);
            fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", scene);
            fireSystem.minSize = 0.3;
            fireSystem.maxSize = 0.3;
            fireSystem.minEmitPower = 1.0;
            fireSystem.maxEmitPower = 1;
            fireSystem.minLifeTime = 1;
            fireSystem.maxLifeTime = 1;
            fireSystem.emitRate = 200;
            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            fireSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0);
            fireSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
            fireSystem.gravity = new BABYLON.Vector3(0, 9, 0);
            fireSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 0, 0);
            fireSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
            fireSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
            fireSystem.targetStopDuration = 0.8;
            fireSystem.emitter = emitter;
            this.particleSystem = fireSystem;
        };
        return Heal;
    }(Particles.AbstractParticle));
    Particles.Heal = Heal;
})(Particles || (Particles = {}));
var Particles;
(function (Particles) {
    var ShieldAttack = /** @class */ (function (_super) {
        __extends(ShieldAttack, _super);
        function ShieldAttack() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ShieldAttack.prototype.initParticleSystem = function () {
            var box = BABYLON.MeshBuilder.CreateBox("bx0", { size: 1 }, this.game.getScene());
            box.visibility = 0;
            box.scaling = new BABYLON.Vector3(1, 1, 0.1);
            box.position = new BABYLON.Vector3(0, 0, 0.1);
            box.parent = this.emitter;
            box.attachToBone(this.emitter.skeleton.bones[13], this.emitter);
            var fireSystem = new BABYLON.ParticleSystem("particles", 1000, this.game.getScene());
            fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            fireSystem.emitter = box;
            fireSystem.minSize = 1;
            fireSystem.maxSize = 1;
            fireSystem.minEmitPower = 0;
            fireSystem.maxEmitPower = 1;
            fireSystem.minLifeTime = 0.2;
            fireSystem.maxLifeTime = 0.2;
            fireSystem.emitRate = 150;
            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            fireSystem.minEmitBox = new BABYLON.Vector3(-1, -1, -1);
            fireSystem.maxEmitBox = new BABYLON.Vector3(1, 1, 1);
            fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 0, 0);
            fireSystem.color1 = new BABYLON.Color4(1, 1, 1, 1);
            fireSystem.color2 = new BABYLON.Color4(1, 1, 1, 1);
            fireSystem.updateSpeed = 0.01;
            this.particleSystem = fireSystem;
        };
        return ShieldAttack;
    }(Particles.AbstractParticle));
    Particles.ShieldAttack = ShieldAttack;
})(Particles || (Particles = {}));
var Particles;
(function (Particles) {
    var Tornado = /** @class */ (function (_super) {
        __extends(Tornado, _super);
        function Tornado() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Tornado.prototype.initParticleSystem = function () {
            var box = BABYLON.MeshBuilder.CreateBox("bx0", { size: 1 }, this.game.getScene());
            box.visibility = 0;
            box.scaling = new BABYLON.Vector3(1, 1, 1);
            box.position = new BABYLON.Vector3(0, 0, 0);
            box.parent = this.emitter;
            box.attachToBone(this.emitter.skeleton.bones[13], this.emitter);
            var fireSystem = new BABYLON.ParticleSystem("particles", 1000, this.game.getScene());
            fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            fireSystem.emitter = box;
            fireSystem.minSize = 1;
            fireSystem.maxSize = 1.5;
            fireSystem.minEmitPower = 1;
            fireSystem.maxEmitPower = 1;
            fireSystem.minLifeTime = 0.2;
            fireSystem.maxLifeTime = 0.2;
            fireSystem.emitRate = 150;
            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            fireSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0);
            fireSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
            fireSystem.gravity = new BABYLON.Vector3(0, -25, 0);
            fireSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 0, 0);
            fireSystem.color1 = new BABYLON.Color4(1, 1, 1, 1);
            fireSystem.color2 = new BABYLON.Color4(1, 1, 1, 1);
            fireSystem.updateSpeed = 0.01;
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
                if (isCollider === void 0) { isCollider = false; }
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
                var positionLength = parentPositions.length;
                var myBuilder = function (particle, i, s) {
                    var randomPosition = 2;
                    var position = new BABYLON.Vector3(parentPositions[(i * randomPosition + i)], parentPositions[i * randomPosition + i + 1], parentPositions[i * randomPosition + i + 2]);
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
                this.spsMesh = spsMesh;
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
var Particles;
(function (Particles) {
    var SolidParticleSystem;
    (function (SolidParticleSystem) {
        var NatureSmall = /** @class */ (function (_super) {
            __extends(NatureSmall, _super);
            function NatureSmall() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            NatureSmall.prototype.buildSPS = function (count) {
                var self = this;
                var game = this.game;
                var parentPositions = this.parent.getVerticesData(BABYLON.VertexBuffer.PositionKind);
                var positionLength = parentPositions.length;
                var myBuilder = function (particle, i, s) {
                    var randomPosition = 4;
                    var position = new BABYLON.Vector3(parentPositions[(i * randomPosition + i)], parentPositions[i * randomPosition + i + 1], parentPositions[i * randomPosition + i + 2]);
                    if (self.collider) {
                        var newCollider = self.collider.createInstance('sps_nature_collision');
                        newCollider.position.x = position.x;
                        newCollider.position.y = position.y;
                        newCollider.position.z = position.z;
                        newCollider.visibility = 1;
                        Collisions.setCollider(game.getScene(), newCollider);
                    }
                    particle.position = position;
                    var random = Math.random() + 0.3;
                    particle.scaling.y = random;
                    particle.scaling.x = random;
                    particle.scaling.z = random;
                };
                var sps = new BABYLON.SolidParticleSystem('spsNature', this.game.getScene(), { updatable: false });
                sps.addShape(this.shape, count, { positionFunction: myBuilder });
                var spsMesh = sps.buildMesh();
                spsMesh.material = this.shape.material;
                return this;
            };
            return NatureSmall;
        }(SolidParticleSystem.AbstractSolidParticle));
        SolidParticleSystem.NatureSmall = NatureSmall;
    })(SolidParticleSystem = Particles.SolidParticleSystem || (Particles.SolidParticleSystem = {}));
})(Particles || (Particles = {}));
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
            var itemSpriteManager = new BABYLON.SpriteManager("playerManager", 'assets/Miniatures/' + item.image + '.png', 1, { width: 512, height: 512 }, scene);
            var itemSprite = new BABYLON.Sprite("player", itemSpriteManager);
            itemSprite.width = 1.8;
            itemSprite.height = 1.8;
            itemSprite.position.x = position.x;
            itemSprite.position.z = position.z;
            itemSprite.position.y = 1.5;
            itemSpriteManager.layerMask = 2;
            var animationBounce = BounceAnimation.getAnimation();
            itemSprite.animations.push(animationBounce);
            scene.beginAnimation(itemSprite, 0, 30, true);
            var tooltip = null;
            droppedItemBox.actionManager = new BABYLON.ActionManager(scene);
            tooltip = new TooltipMesh(droppedItemBox, item.name);
            droppedItemBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                game.gui.playerLogsQuests.addText(item.name + '  has been picked up.', 'green');
                game.client.socket.emit('addDroppedItem', itemDropKey);
                droppedItemBox.dispose();
                tooltip.container.dispose();
                itemSprite.dispose();
            }));
            var particleSystem = new Particles.DroppedItem(game, droppedItemBox);
            particleSystem.particleSystem.start();
            droppedItemBox.freezeWorldMatrix();
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
            this.meshName = itemData.meshName;
            this.image = itemData.image;
            this.type = itemData.type;
            this.statistics = itemData.statistics;
            if (itemData.entity) {
                this.databaseId = itemData.entity.id;
            }
        }
        Item.prototype.dispose = function () {
            if (this.mesh) {
                this.mesh.dispose();
            }
            if (this.trailBox) {
                this.trailBox.dispose();
            }
            if (this.trailMesh) {
                this.trailMesh.dispose();
            }
        };
        Item.prototype.createTrailMesh = function (game) {
            this.trailBox = BABYLON.Mesh.CreateBox('test', 1, game.getScene(), false);
            this.trailBox.visibility = 0;
            this.trailMesh = new BABYLON.TrailMesh("Test", this.trailBox, game.getScene(), 0.2, 40, false);
            this.trailMesh.visibility = 0;
            this.trailMesh.material = new BABYLON.StandardMaterial('trail_material', game.getScene());
            this.trailMesh.material.emissiveColor = BABYLON.Color3.White();
        };
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
                    inventory.items.push(item);
                    var equip = (itemDatabase.entity) ? itemDatabase.entity.equip : itemDatabase.equip;
                    inventory.equipItem(item, equip);
                    if (item.type == 3 && equip) {
                        showHair = false;
                    }
                    if (item.type == 6 && equip) {
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
            function AbstractSkill(player) {
                this.animationTime = 0;
                this.animationLoop = false;
                this.player = player;
                this.game = player.game;
                this.isReady = true;
                this.registerDefaults(this.game);
                if (player.isControllable) {
                    this.createSkillImageInGUI();
                    this.registerHotKey();
                    this.registerAnimations();
                }
            }
            AbstractSkill.prototype.getImageUrl = function () {
                return this.image;
            };
            AbstractSkill.prototype.registerHotKey = function () {
                var self = this;
                var game = this.game;
                var listener = function () {
                    var player = game.player;
                    self.guiImage.onPointerUpObservable.add(function () {
                        if (self.isReady && !player.isAnySkillIsInUse()) {
                            var position = player.meshForMove.position;
                            var rotation = player.meshForMove.rotation;
                            var forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / 1, 0, -parseFloat(Math.cos(rotation.y)) / 1);
                            var newPosition = position.add(forwards);
                            game.client.socket.emit('useSkill', self.getType());
                            game.client.socket.emit('setTargetPoint', {
                                position: newPosition
                            });
                            player.runPlayerToPosition(newPosition);
                        }
                    });
                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            };
            AbstractSkill.prototype.showReloadInGUI = function (cooldownTime) {
                if (this.player.isControllable) {
                    var game_3 = this.game;
                    var self_4 = this;
                    var speedRatio = 1 / cooldownTime;
                    this.isReady = false;
                    game_3.getScene().beginDirectAnimation(self_4.guiOverlay, [self_4.animationOverlay], 0, 30, false, speedRatio, function () {
                        game_3.getScene().beginDirectAnimation(self_4.guiImage, [self_4.animationAlpha], 0, 30, false);
                        self_4.isReady = true;
                    });
                }
            };
            AbstractSkill.prototype.createSkillImageInGUI = function () {
                var game = this.game;
                var image = this.getImageUrl();
                var number = this.getType();
                var grid = game.gui.playerBottomPanel.guiGridSkills;
                var imageSkill = new BABYLON.GUI.Button.CreateImageOnlyButton('image_' + number, image);
                imageSkill.width = 1;
                imageSkill.height = 1;
                imageSkill.thickness = 0;
                imageSkill.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
                var overlay = new BABYLON.GUI.Rectangle();
                overlay.width = 1;
                overlay.height = 0;
                overlay.alpha = 0.7;
                overlay.color = "black";
                overlay.background = "black";
                overlay.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
                imageSkill.animations = [];
                imageSkill.animations.push(this.animationAlpha);
                overlay.animations = [];
                overlay.animations.push(this.animationOverlay);
                grid.addControl(imageSkill, 0, number - 1);
                grid.addControl(overlay, 0, number - 1);
                this.guiImage = imageSkill;
                this.guiOverlay = overlay;
            };
            AbstractSkill.prototype.registerAnimations = function () {
                var animationAlpha = new BABYLON.Animation("animationAlpha", "alpha", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                animationAlpha.setKeys([
                    {
                        frame: 0,
                        value: 1
                    },
                    {
                        frame: 15,
                        value: 0
                    },
                    {
                        frame: 30,
                        value: 1
                    }
                ]);
                var animationOverlay = new BABYLON.Animation("animationOverlay", "height", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                animationOverlay.setKeys([
                    {
                        frame: 0,
                        value: 1
                    },
                    {
                        frame: 30,
                        value: 0
                    },
                ]);
                this.animationOverlay = animationOverlay;
                this.animationAlpha = animationAlpha;
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
        var Block = /** @class */ (function (_super) {
            __extends(Block, _super);
            function Block() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Block.prototype.getType = function () {
                return Character.Skills.Block.TYPE;
            };
            Block.prototype.registerDefaults = function (game) {
                this.image = 'assets/skills/block.png';
                this.name = 'Block';
                this.animationName = 'blockA';
                this.animationSpeed = 1;
                this.animationTime = 0;
                this.animationLoop = false;
            };
            Block.prototype.showAnimation = function (skillTime, cooldownTime) {
                var game = this.game;
                var self = this;
                this.showReloadInGUI(cooldownTime);
                self.player.runAnimationSkill(this.animationName, function () {
                    self.isInUse = true;
                }, function () {
                    self.player.mesh.skeleton.beginAnimation('loopBlock', true);
                }, this.animationLoop, this.animationSpeed, false);
                setTimeout(function () {
                    self.player.runAnimationSkill('blockB', null, function () {
                        self.isInUse = false;
                    });
                }, skillTime);
            };
            Block.TYPE = 2;
            return Block;
        }(Character.Skills.AbstractSkill));
        Skills.Block = Block;
    })(Skills = Character.Skills || (Character.Skills = {}));
})(Character || (Character = {}));
var Character;
(function (Character) {
    var Skills;
    (function (Skills) {
        var FastAttack = /** @class */ (function (_super) {
            __extends(FastAttack, _super);
            function FastAttack() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            FastAttack.prototype.getType = function () {
                return Character.Skills.FastAttack.TYPE;
            };
            FastAttack.prototype.registerDefaults = function (game) {
                this.image = 'assets/skills/fastAttack.png';
                this.name = 'Fast attack';
                this.animationName = AbstractCharacter.ANIMATION_ATTACK_01;
                this.animationSpeed = 1.6;
                this.animationLoop = true;
                this.animationTime = 1000;
                this.effectEmitter = new Particles.FastAttack(game, this.player.mesh);
            };
            FastAttack.prototype.showAnimation = function (skillTime, cooldownTime) {
                var game = this.game;
                var self = this;
                var observer;
                this.showReloadInGUI(cooldownTime);
                if (self.player.inventory.weapon) {
                    self.player.inventory.weapon.trailMesh.start();
                }
                self.player.runAnimationSkill(this.animationName, function () {
                    if (self.player.inventory.weapon) {
                        self.player.inventory.weapon.trailMesh.visibility = 1;
                    }
                    self.isInUse = true;
                    // self.effectEmitter.particleSystem.start();
                    if (self.player.isControllable) {
                        game.client.socket.emit('attack', {
                            targetPoint: null
                        });
                    }
                }, function () {
                    self.isInUse = false;
                    // self.effectEmitter.particleSystem.stop();
                    setTimeout(function () {
                        if (self.player.inventory.weapon) {
                            self.player.inventory.weapon.trailMesh.visibility = 0;
                        }
                        self.player.inventory.weapon.trailMesh.stop();
                    }, 1000);
                }, this.animationLoop, this.animationSpeed);
                setTimeout(function () {
                    self.player.animation.stop();
                }, skillTime);
            };
            FastAttack.TYPE = 3;
            return FastAttack;
        }(Character.Skills.AbstractSkill));
        Skills.FastAttack = FastAttack;
    })(Skills = Character.Skills || (Character.Skills = {}));
})(Character || (Character = {}));
var Character;
(function (Character) {
    var Skills;
    (function (Skills) {
        var Heal = /** @class */ (function (_super) {
            __extends(Heal, _super);
            function Heal() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Heal.prototype.getType = function () {
                return Character.Skills.Heal.TYPE;
            };
            Heal.prototype.registerDefaults = function (game) {
                this.image = 'assets/skills/heal.png';
                this.name = 'Heal';
                this.animationName = AbstractCharacter.ANIMATION_STAND_WEAPON;
                this.animationSpeed = 2;
                this.animationTime = 0;
                this.animationLoop = true;
                this.effectEmitter = new Particles.Heal(game, this.player.mesh);
            };
            Heal.prototype.showAnimation = function (skillTime, cooldownTime) {
                var game = this.game;
                var self = this;
                this.showReloadInGUI(cooldownTime);
                var alpha = 0;
                var animateFunction = function () {
                    self.effectEmitter.particleSystem.emitter.position.x = 2 * Math.cos(alpha);
                    self.effectEmitter.particleSystem.emitter.position.y = 1;
                    self.effectEmitter.particleSystem.emitter.position.z = 2 * Math.sin(alpha);
                    alpha += 0.24 * game.getScene().getAnimationRatio();
                };
                self.player.runAnimationSkill(self.animationName, function () {
                    self.effectEmitter.particleSystem.start();
                    game.getScene().registerBeforeRender(animateFunction);
                    self.isInUse = true;
                }, null, self.animationLoop, self.animationSpeed);
                setTimeout(function () {
                    self.player.animation.stop();
                    self.effectEmitter.particleSystem.stop();
                    game.getScene().unregisterBeforeRender(animateFunction);
                    self.isInUse = false;
                }, skillTime);
            };
            Heal.TYPE = 5;
            return Heal;
        }(Character.Skills.AbstractSkill));
        Skills.Heal = Heal;
    })(Skills = Character.Skills || (Character.Skills = {}));
})(Character || (Character = {}));
var Character;
(function (Character) {
    var Skills;
    (function (Skills) {
        var ShieldAttack = /** @class */ (function (_super) {
            __extends(ShieldAttack, _super);
            function ShieldAttack() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ShieldAttack.prototype.getType = function () {
                return Character.Skills.ShieldAttack.TYPE;
            };
            ShieldAttack.prototype.registerDefaults = function (game) {
                this.image = 'assets/skills/shieldAttack.png';
                this.name = 'Shield attack';
                this.animationName = AbstractCharacter.ANIMATION_SKILL_01;
                this.animationSpeed = 1;
                this.effectEmitter = new Particles.ShieldAttack(game, this.player.mesh);
            };
            ShieldAttack.prototype.showAnimation = function (skillTime, cooldownTime) {
                var game = this.game;
                var self = this;
                this.showReloadInGUI(cooldownTime);
                self.player.runAnimationSkill(this.animationName, function () {
                    self.isInUse = true;
                    self.effectEmitter.particleSystem.start();
                    if (self.player.isControllable) {
                        game.client.socket.emit('attack', {
                            targetPoint: null
                        });
                    }
                }, function () {
                    self.isInUse = false;
                    self.effectEmitter.particleSystem.stop();
                }, this.animationLoop, this.animationSpeed);
                setTimeout(function () {
                    self.player.animation.stop();
                }, skillTime);
            };
            ShieldAttack.TYPE = 4;
            return ShieldAttack;
        }(Character.Skills.AbstractSkill));
        Skills.ShieldAttack = ShieldAttack;
    })(Skills = Character.Skills || (Character.Skills = {}));
})(Character || (Character = {}));
var Character;
(function (Character) {
    var Skills;
    (function (Skills) {
        var SkillsManager = /** @class */ (function () {
            function SkillsManager() {
            }
            SkillsManager.getSkill = function (type, player) {
                var skill = null;
                switch (type) {
                    case Character.Skills.Heal.TYPE:
                        skill = new Character.Skills.Heal(player);
                        break;
                    case Character.Skills.StrongAttack.TYPE:
                        skill = new Character.Skills.StrongAttack(player);
                        break;
                    case Character.Skills.Block.TYPE:
                        skill = new Character.Skills.Block(player);
                        break;
                    case Character.Skills.FastAttack.TYPE:
                        skill = new Character.Skills.FastAttack(player);
                        break;
                    case Character.Skills.ShieldAttack.TYPE:
                        skill = new Character.Skills.ShieldAttack(player);
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
        var StrongAttack = /** @class */ (function (_super) {
            __extends(StrongAttack, _super);
            function StrongAttack() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            StrongAttack.prototype.getType = function () {
                return Character.Skills.StrongAttack.TYPE;
            };
            StrongAttack.prototype.registerDefaults = function (game) {
                this.image = 'assets/skills/strongAttack.png';
                this.name = 'Block';
                this.animationName = 'strongAttackA';
                this.animationSpeed = 1;
                this.animationTime = 2000;
                this.animationLoop = false;
            };
            StrongAttack.prototype.showAnimation = function (skillTime, cooldownTime) {
                var game = this.game;
                var self = this;
                var observer;
                this.showReloadInGUI(cooldownTime);
                self.player.runAnimationSkill(this.animationName, function () {
                    self.isInUse = true;
                }, function () {
                    self.player.mesh.skeleton.beginAnimation('loopStrongAttack', true);
                }, this.animationLoop, this.animationSpeed, false);
                if (self.player.inventory.weapon) {
                    self.player.inventory.weapon.trailMesh.start();
                }
                setTimeout(function () {
                    if (self.player.inventory.weapon) {
                        self.player.inventory.weapon.trailMesh.visibility = 1;
                    }
                    self.player.runAnimationSkill('strongAttackB', null, function () {
                        self.isInUse = false;
                        setTimeout(function () {
                            if (self.player.inventory.weapon) {
                                self.player.inventory.weapon.trailMesh.visibility = 0;
                            }
                            self.player.inventory.weapon.trailMesh.stop();
                        }, 1000);
                    });
                    if (self.player.isControllable) {
                        game.client.socket.emit('attack', {
                            targetPoint: null
                        });
                    }
                }, skillTime);
            };
            StrongAttack.TYPE = 1;
            return StrongAttack;
        }(Character.Skills.AbstractSkill));
        Skills.StrongAttack = StrongAttack;
    })(Skills = Character.Skills || (Character.Skills = {}));
})(Character || (Character = {}));
var MountainsEnvironment = /** @class */ (function (_super) {
    __extends(MountainsEnvironment, _super);
    function MountainsEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MountainsEnvironment.prototype.createStencilMaterial = function (stencilUrl, scene) {
        var terrainMaterial = new BABYLON.TerrainMaterial("terrainMaterial", scene);
        terrainMaterial.mixTexture = new BABYLON.Texture(stencilUrl, scene);
        terrainMaterial.diffuseTexture1 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/dirt.jpg", scene);
        terrainMaterial.diffuseTexture2 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/grass.jpg", scene);
        terrainMaterial.diffuseTexture3 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/rock.jpg", scene);
        terrainMaterial.bumpTexture1 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/dirt_normal.jpg", scene);
        terrainMaterial.bumpTexture2 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/grass_normal.jpg", scene);
        terrainMaterial.bumpTexture3 = new BABYLON.Texture("assets/Environment/Stencil/Mountains/rock_normal.jpg", scene);
        terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 20;
        terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 20;
        terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 20;
        return terrainMaterial;
    };
    return MountainsEnvironment;
}(AbstractEnvironment));
var ShowEnemiesSocketEvent = /** @class */ (function (_super) {
    __extends(ShowEnemiesSocketEvent, _super);
    function ShowEnemiesSocketEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    ShowEnemiesSocketEvent.prototype.listen = function () {
        var game = this.game;
        this.socket.on('showEnemies', function (data) {
            game.enemies = [];
            data.forEach(function (enemyData, key) {
                if (enemyData.statistics.hp > 0) {
                    var newMonster = new Monster(game, key, enemyData);
                    game.enemies[newMonster.id] = newMonster;
                }
            });
        });
        return this;
    };
    return ShowEnemiesSocketEvent;
}(SocketEvent));
var UpdateEnemiesSocketEvent = /** @class */ (function (_super) {
    __extends(UpdateEnemiesSocketEvent, _super);
    function UpdateEnemiesSocketEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateEnemiesSocketEvent.prototype.listen = function () {
        var game = this.game;
        var self = this;
        var activeTargetPoints = [];
        this.socket.on('updateEnemy', function (data) {
            var updatedEnemy = data.enemy;
            var enemyKey = data.enemyKey;
            var enemy = game.enemies[enemyKey];
            var mesh = enemy.meshForMove;
            enemy.retrieveHit(updatedEnemy);
            ///antylag rule
            var distanceBetweenObjects = Game.distanceVector(mesh.position, updatedEnemy.position);
            if (distanceBetweenObjects > 16) {
                mesh.position = new BABYLON.Vector3(updatedEnemy.position.x, updatedEnemy.position.y, updatedEnemy.position.z);
            }
            if (activeTargetPoints[enemyKey] !== undefined) {
                self.game.getScene().unregisterBeforeRender(activeTargetPoints[enemyKey]);
            }
            var targetMesh = null;
            game.remotePlayers.forEach(function (socketRemotePlayer) {
                if (updatedEnemy.target == socketRemotePlayer.id) {
                    targetMesh = socketRemotePlayer.meshForMove;
                }
            });
            if (data.collisionEvent == 'OnIntersectionEnterTriggerAttack') {
                game.player.monstersToAttack[enemyKey] = true;
                if (updatedEnemy.attack == true && data.attackIsDone == true) {
                    mesh.lookAt(targetMesh.position.clone());
                    enemy.runAnimationHit(AbstractCharacter.ANIMATION_ATTACK_01, null, null, false);
                }
                else {
                    enemy.runAnimationStand();
                }
            }
            else if (data.collisionEvent == 'OnIntersectionEnterTriggerVisibility' || data.collisionEvent == 'OnIntersectionExitTriggerAttack') {
                if (game.player.monstersToAttack[enemyKey] !== undefined) {
                    delete game.player.monstersToAttack[enemyKey];
                }
                activeTargetPoints[enemyKey] = function () {
                    mesh.lookAt(targetMesh.position);
                    var rotation = mesh.rotation;
                    var forwards = new BABYLON.Vector3(parseFloat(Math.sin(rotation.y)) / enemy.getWalkSpeed(), 0, parseFloat(Math.cos(rotation.y)) / enemy.getWalkSpeed());
                    mesh.moveWithCollisions(forwards);
                    enemy.runAnimationWalk();
                };
                self.game.getScene().registerBeforeRender(activeTargetPoints[enemyKey]);
            }
            else if (data.collisionEvent == 'OnIntersectionExitTriggerVisibility') {
                enemy.runAnimationStand();
            }
        });
        return this;
    };
    return UpdateEnemiesSocketEvent;
}(SocketEvent));
var OnAddAttribute = /** @class */ (function (_super) {
    __extends(OnAddAttribute, _super);
    function OnAddAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnAddAttribute.prototype.listen = function () {
        var game = this.game;
        this.socket.on('attributeAdded', function (data) {
            game.player.freeAttributesPoints = data.activePlayer.freeAttributesPoints;
            game.player.setCharacterStatistics(data.activePlayer);
            game.gui.attributes.refreshPopup();
            game.player.refreshEnergyInGui();
            game.player.refreshHpInGui();
        });
        return this;
    };
    return OnAddAttribute;
}(SocketEvent));
var OnAddExperience = /** @class */ (function (_super) {
    __extends(OnAddExperience, _super);
    function OnAddExperience() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnAddExperience.prototype.listen = function () {
        var game = this.game;
        this.socket.on('addExperience', function (data) {
            game.player.addExperience(data.experience, data.experiencePercentages);
            game.gui.playerLogsQuests.addText('You earned ' + data.experience + ' experience.', 'gold');
        });
        return this;
    };
    return OnAddExperience;
}(SocketEvent));
var OnNewLvl = /** @class */ (function (_super) {
    __extends(OnNewLvl, _super);
    function OnNewLvl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnNewLvl.prototype.listen = function () {
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
    return OnNewLvl;
}(SocketEvent));
var OnRefreshPlayerEquip = /** @class */ (function (_super) {
    __extends(OnRefreshPlayerEquip, _super);
    function OnRefreshPlayerEquip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnRefreshPlayerEquip.prototype.listen = function () {
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
            player.inventory.removeItems();
            player.inventory.setItems(updatedPlayer.activePlayer.items);
        });
        return this;
    };
    return OnRefreshPlayerEquip;
}(SocketEvent));
var OnRemovePlayer = /** @class */ (function (_super) {
    __extends(OnRemovePlayer, _super);
    function OnRemovePlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnRemovePlayer.prototype.listen = function () {
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
    return OnRemovePlayer;
}(SocketEvent));
var OnShowPlayer = /** @class */ (function (_super) {
    __extends(OnShowPlayer, _super);
    function OnShowPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnShowPlayer.prototype.listen = function () {
        var game = this.game;
        var self = this;
        this.socket.on('showPlayer', function (playerData) {
            game.player = new Player(game, true, playerData);
            game.remotePlayers.push(game.player);
            document.dispatchEvent(game.events.playerConnected);
        });
        return this;
    };
    return OnShowPlayer;
}(SocketEvent));
var OnUpdatePlayers = /** @class */ (function (_super) {
    __extends(OnUpdatePlayers, _super);
    function OnUpdatePlayers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnUpdatePlayers.prototype.listen = function () {
        var self = this;
        var game = this.game;
        this.socket.on('updatePlayer', function (updatedPlayer) {
            var player = null;
            if (!updatedPlayer.activePlayer.id) {
                return;
            }
            game.remotePlayers.forEach(function (remotePlayer, key) {
                if (remotePlayer.id == updatedPlayer.activePlayer.id) {
                    player = game.remotePlayers[key];
                    return;
                }
            });
            if (!player) {
                player = new Player(game, false, updatedPlayer);
                game.remotePlayers.push(player);
            }
            ///action when hp of character is changed
            if (player.statistics.hp != updatedPlayer.activePlayer.statistics.hp) {
                var damage_2 = (player.statistics.hp - updatedPlayer.activePlayer.statistics.hp);
                player.statistics.hp = updatedPlayer.activePlayer.statistics.hp;
                setTimeout(function () {
                    player.bloodParticles.start();
                    setTimeout(function () {
                        player.bloodParticles.stop();
                    }, 100);
                    player.showDamage(damage_2);
                    if (player.isControllable) {
                        player.refreshHpInGui();
                    }
                    if (player.isAlive && player.statistics.hp <= 0) {
                        player.isAlive = false;
                        player.isDeath = true;
                        player.mesh.skeleton.beginAnimation('death', false);
                    }
                }, 400);
            }
            if (Number.isInteger(updatedPlayer.attack) && !player.isAttack) {
                var targetPoint = updatedPlayer.targetPoint;
                if (targetPoint) {
                    var targetPointVector3 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                    player.meshForMove.lookAt(targetPointVector3, Math.PI);
                }
                var attackAnimation = (Game.randomNumber(1, 2) == 1) ? AbstractCharacter.ANIMATION_ATTACK_02 : AbstractCharacter.ANIMATION_ATTACK_01;
                player.runAnimationHit(attackAnimation, function () {
                    if (player.dynamicFunction !== undefined) {
                        game.getScene().unregisterBeforeRender(player.dynamicFunction);
                    }
                });
                player.statistics.energy = updatedPlayer.activePlayer.statistics.energy;
                player.refreshEnergyInGui();
                return;
            }
            if (updatedPlayer.targetPoint && !player.isControllable) {
                var targetPointVector3 = new BABYLON.Vector3(updatedPlayer.targetPoint.x, 0, updatedPlayer.targetPoint.z);
                player.runPlayerToPosition(targetPointVector3);
            }
        });
        return this;
    };
    return OnUpdatePlayers;
}(SocketEvent));
var OnUpdatePlayersSkills = /** @class */ (function (_super) {
    __extends(OnUpdatePlayersSkills, _super);
    function OnUpdatePlayersSkills() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnUpdatePlayersSkills.prototype.listen = function () {
        var game = this.game;
        this.socket.on('updatePlayerSkill', function (updatedPlayer) {
            var player = null;
            game.remotePlayers.forEach(function (remotePlayer, key) {
                if (remotePlayer.id == updatedPlayer.activePlayer.id) {
                    player = game.remotePlayers[key];
                    return;
                }
            });
            if (updatedPlayer.activeSkill) {
                player.statistics.energy = updatedPlayer.activePlayer.statistics.energy;
                player.refreshEnergyInGui();
                var skill = player.skills[updatedPlayer.activeSkill.type];
                skill.showAnimation(updatedPlayer.activeSkill.duration * 1000, updatedPlayer.activeSkill.cooldownTime);
            }
        });
        return this;
    };
    return OnUpdatePlayersSkills;
}(SocketEvent));
var OnChangeScene = /** @class */ (function (_super) {
    __extends(OnChangeScene, _super);
    function OnChangeScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnChangeScene.prototype.listen = function () {
        var game = this.game;
        this.socket.on('changeScene', function (sceneType) {
            var scene = Scenes.Manager.factory(sceneType);
            game.changeScene(scene);
        });
        return this;
    };
    return OnChangeScene;
}(SocketEvent));
var OnRefreshGateways = /** @class */ (function (_super) {
    __extends(OnRefreshGateways, _super);
    function OnRefreshGateways() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnRefreshGateways.prototype.listen = function () {
        var game = this.game;
        var gateways = [];
        this.socket.on('refreshGateways', function (sceneServerData) {
            gateways.forEach(function (gateway) {
                gateway.particleSystem.dispose();
            });
            var gatewaysFromServer = sceneServerData.gateways;
            gatewaysFromServer.forEach(function (gateway) {
                var gatewayInGame = new Gateway(game, gateway.objectName, gateway.isActive, gateway.openSceneType, gateway.entranceName);
                gateways.push(gatewayInGame);
            });
        });
        return this;
    };
    return OnRefreshGateways;
}(SocketEvent));
var Armor = /** @class */ (function (_super) {
    __extends(Armor, _super);
    function Armor(inventory) {
        var _this = _super.call(this, inventory) || this;
        _this.blockWidth = "80px";
        _this.blockHeight = "80px";
        _this.blockTop = "50px";
        _this.blockLeft = "270px";
        _this.item = inventory.guiMain.game.player.inventory.armor;
        // this.block
        _this.createBlockWithImage();
        return _this;
    }
    return Armor;
}(EquipBlock));
var Boots = /** @class */ (function (_super) {
    __extends(Boots, _super);
    function Boots(inventory) {
        var _this = _super.call(this, inventory) || this;
        _this.blockWidth = "80px";
        _this.blockHeight = "80px";
        _this.blockTop = "50px";
        _this.blockLeft = "350px";
        _this.item = inventory.guiMain.game.player.inventory.boots;
        _this.createBlockWithImage();
        return _this;
    }
    return Boots;
}(EquipBlock));
var Gloves = /** @class */ (function (_super) {
    __extends(Gloves, _super);
    function Gloves(inventory) {
        var _this = _super.call(this, inventory) || this;
        _this.blockWidth = "80px";
        _this.blockHeight = "80px";
        _this.blockTop = "50px";
        _this.blockLeft = "430px";
        _this.item = inventory.guiMain.game.player.inventory.gloves;
        _this.createBlockWithImage();
        return _this;
    }
    return Gloves;
}(EquipBlock));
var Helm = /** @class */ (function (_super) {
    __extends(Helm, _super);
    function Helm(inventory) {
        var _this = _super.call(this, inventory) || this;
        _this.blockWidth = "80px";
        _this.blockHeight = "80px";
        _this.blockTop = "50px";
        _this.blockLeft = "510px";
        _this.item = inventory.guiMain.game.player.inventory.helm;
        _this.createBlockWithImage();
        return _this;
    }
    return Helm;
}(EquipBlock));
var Shield = /** @class */ (function (_super) {
    __extends(Shield, _super);
    function Shield(inventory) {
        var _this = _super.call(this, inventory) || this;
        _this.blockWidth = "80px";
        _this.blockHeight = "80px";
        _this.blockTop = "50px";
        _this.blockLeft = "190px";
        _this.item = inventory.guiMain.game.player.inventory.shield;
        _this.createBlockWithImage();
        return _this;
    }
    return Shield;
}(EquipBlock));
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(inventory) {
        var _this = _super.call(this, inventory) || this;
        _this.blockWidth = "80px";
        _this.blockHeight = "80px";
        _this.blockTop = "50px";
        _this.blockLeft = "110px";
        _this.item = inventory.guiMain.game.player.inventory.weapon;
        _this.createBlockWithImage();
        return _this;
    }
    return Weapon;
}(EquipBlock));
var CaveExit = /** @class */ (function (_super) {
    __extends(CaveExit, _super);
    function CaveExit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaveExit.prototype.initScene = function (game) {
        var self = this;
        game.sceneManager = this;
        BABYLON.SceneLoader.Load("assets/scenes/caveExit/", "caveExit.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .executeWhenReady(function () {
                self.environment = new EnvironmentCaveExit(game);
            }, function () {
                // new NPC.Guard(game, new BABYLON.Vector3(-117, 0, 128), new BABYLON.Vector3(0, -4.3, 0));
                // new NPC.Trader(game, new BABYLON.Vector3(-122, 0, -16), new BABYLON.Vector3(0, 0.7, 0));
                // new NPC.BigWarrior(game, new BABYLON.Vector3(-10, 0, -53), new BABYLON.Vector3(0, 1.54, 0));
            });
        });
    };
    CaveExit.TYPE = 6;
    return CaveExit;
}(Scene));
var EnvironmentCaveExit = /** @class */ (function (_super) {
    __extends(EnvironmentCaveExit, _super);
    function EnvironmentCaveExit(game) {
        var _this = _super.call(this) || this;
        var scene = game.getScene();
        _this.colliders = [];
        scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
                sceneMesh.alwaysSelectAsActiveMesh = true;
                sceneMesh.material = _this.createStencilMaterial('/assets/scenes/caveExit/stencil1.png', scene);
            }
            else if (meshName.search("Box_Cube") >= 0) {
                _this.colliders.push(sceneMesh);
            }
            else {
                sceneMesh.isPickable = false;
                if (meshName.search("Rock") >= 0) {
                    continue;
                }
                _this.staticShadowObjects.push(sceneMesh);
            }
        }
        _this.createDefaultLight(scene);
        _this.registerColliders(scene);
        _this.freezeAllMeshes(scene);
        return _this;
    }
    return EnvironmentCaveExit;
}(MountainsEnvironment));
var Arena = /** @class */ (function (_super) {
    __extends(Arena, _super);
    function Arena() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Arena.prototype.initScene = function (game) {
        var self = this;
        var scene = new BABYLON.Scene(game.engine);
        game.sceneManager = this;
        self
            .setDefaults(game, scene)
            .optimizeScene(scene)
            .setCamera(scene)
            .setFog(scene)
            .executeWhenReady(function () {
            var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
            light.intensity = 1;
            light.position = new BABYLON.Vector3(0, 50, 0);
            light.direction = new BABYLON.Vector3(0.45, -2.5, 0);
            var ground = BABYLON.MeshBuilder.CreateGround("Ground", { width: 48, height: 48 }, scene);
            ground.actionManager = new BABYLON.ActionManager(scene);
            var terrainMaterial = new BABYLON.StandardMaterial("GroundMaterial", scene);
            terrainMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
            terrainMaterial.specularPower = 10;
            terrainMaterial.diffuseTexture = new BABYLON.Texture("assets/scenes/Forest_house/dirt.jpg", scene);
            terrainMaterial.diffuseTexture.uScale = terrainMaterial.diffuseTexture.vScale = 20;
            ground.material = terrainMaterial;
        }, function () {
            // game.player.playerLight.dispose();
        });
    };
    Arena.TYPE = 98;
    return Arena;
}(Scene));
var OnOpenChest = /** @class */ (function (_super) {
    __extends(OnOpenChest, _super);
    function OnOpenChest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnOpenChest.prototype.listen = function () {
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
                chest_1.mesh.skeleton.beginAnimation('action', false);
                chest_1.mesh.actionManager.actions.forEach(function (action) {
                    chest_1.mesh.actionManager.unregisterAction(action);
                });
            }
        });
        return this;
    };
    return OnOpenChest;
}(SocketEvent));
var OnRefreshChest = /** @class */ (function (_super) {
    __extends(OnRefreshChest, _super);
    function OnRefreshChest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnRefreshChest.prototype.listen = function () {
        var game = this.game;
        this.socket.on('refreshChests', function (chests) {
            game.chests.forEach(function (chest) {
                chest.hightlightLayer.dispose();
            });
            game.chests = [];
            chests.forEach(function (chest, chestKey) {
                game.chests.push(new Chest(game, chest, chestKey));
            });
        });
        return this;
    };
    return OnRefreshChest;
}(SocketEvent));
var OnAddSpecialItem = /** @class */ (function (_super) {
    __extends(OnAddSpecialItem, _super);
    function OnAddSpecialItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnAddSpecialItem.prototype.listen = function () {
        var game = this.game;
        this.socket.on('addSpecialItem', function (data) {
            game.gui.playerLogsQuests.addText('You earned ' + data.value + ' ' + data.name + '', 'gold');
        });
        return this;
    };
    return OnAddSpecialItem;
}(SocketEvent));
var OnRefreshRandomSpecialItems = /** @class */ (function (_super) {
    __extends(OnRefreshRandomSpecialItems, _super);
    function OnRefreshRandomSpecialItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnRefreshRandomSpecialItems.prototype.listen = function () {
        var game = this.game;
        this.socket.on('refreshRandomSpecialItems', function (randomSpecialItems) {
            game.randomSpecialItems.forEach(function (randomSpecialItem) {
                randomSpecialItem.mesh.dispose();
            });
            game.randomSpecialItems = [];
            randomSpecialItems.forEach(function (randomSpecialItem, randomSpecialItemKey) {
                if (!randomSpecialItem.picked) {
                    game.randomSpecialItems.push(new RandomSpecialItem(game, randomSpecialItem, randomSpecialItemKey));
                }
            });
        });
        return this;
    };
    return OnRefreshRandomSpecialItems;
}(SocketEvent));
var OnShowDroppedItem = /** @class */ (function (_super) {
    __extends(OnShowDroppedItem, _super);
    function OnShowDroppedItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnShowDroppedItem.prototype.listen = function () {
        var game = this.game;
        this.socket.on('showDroppedItem', function (data) {
            var item = new Items.Item(game, data.item);
            Items.DroppedItem.showItem(game, item, data.position, data.itemKey);
        });
        return this;
    };
    return OnShowDroppedItem;
}(SocketEvent));
var OnQuestRequirementDoneInformation = /** @class */ (function (_super) {
    __extends(OnQuestRequirementDoneInformation, _super);
    function OnQuestRequirementDoneInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnQuestRequirementDoneInformation.prototype.listen = function () {
        var self = this;
        this.socket.on('questRequirementDoneInformation', function (data) {
            self.game.gui.playerLogsQuests.addText(data, 'orange');
            self.socket.emit('refreshQuests');
            self.socket.emit('refreshGateways');
        });
        return this;
    };
    return OnQuestRequirementDoneInformation;
}(SocketEvent));
var OnQuestRequirementInformation = /** @class */ (function (_super) {
    __extends(OnQuestRequirementInformation, _super);
    function OnQuestRequirementInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnQuestRequirementInformation.prototype.listen = function () {
        var self = this;
        this.socket.on('questRequirementInformation', function (data) {
            self.game.gui.playerLogsQuests.addText(data);
        });
        return this;
    };
    return OnQuestRequirementInformation;
}(SocketEvent));
var OnRefreshQuests = /** @class */ (function (_super) {
    __extends(OnRefreshQuests, _super);
    function OnRefreshQuests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns {SocketIOClient}
     */
    OnRefreshQuests.prototype.listen = function () {
        var game = this.game;
        var self = this;
        this.socket.on('refreshQuests', function (data) {
            game.quests.forEach(function (quest) {
                quest.dispose();
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
    return OnRefreshQuests;
}(SocketEvent));
