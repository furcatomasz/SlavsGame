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
        return this;
    };
    Scene.prototype.playEnemiesAnimationsInFrumStrum = function () {
        var game = this.game;
        var scene = this.babylonScene;
        if (game.frumstrumEnemiesInterval) {
            clearInterval(game.frumstrumEnemiesInterval);
        }
        var battleMusic = new BABYLON.Sound("Forest night", "assets/sounds/music/battle.mp3", scene, null, { loop: true, autoplay: false, volume: 1 });
        game.frumstrumEnemiesInterval = setInterval(function () {
            var activeEnemies = 0;
            game.enemies.forEach(function (enemy) {
                var isActiveMesh = scene.isActiveMesh(enemy.mesh);
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
                battleMusic.stop();
                battleMusic.setVolume(1);
                battleMusic.play();
            }
            else if (!activeEnemies && battleMusic.isPlaying) {
                battleMusic.setVolume(0, 2);
                battleMusic.stop(2);
            }
        }, 500);
        return this;
    };
    Scene.prototype.executeWhenReady = function (onReady, onPlayerConnected) {
        var scene = this.babylonScene;
        var assetsManager = this.assetManager;
        var self = this;
        var game = this.game;
        scene.executeWhenReady(function () {
            // game.client.socket.emit('createPlayer');
            assetsManager.onFinish = function (tasks) {
                game.client.socket.emit('changeScenePre');
                var sceneIndex = game.scenes.push(scene);
                game.activeScene = sceneIndex - 1;
                if (onReady) {
                    onReady();
                }
                self.playEnemiesAnimationsInFrumStrum();
            };
            assetsManager.onProgress = function (remainingCount, totalCount, lastFinishedTask) {
                SlavsLoader.showLoaderWithText('Loading assets... ' + remainingCount + ' of ' + totalCount + '.');
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
        camera.rotation = new BABYLON.Vector3(0.75, 0.75, 0);
        camera.position = new BABYLON.Vector3(0, 35, 0);
        camera.maxZ = 110;
        camera.minZ = 20;
        camera.fov = 13.25;
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
        scene.fogStart = 50;
        scene.fogEnd = 70;
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
        //
        // var bgCamera = camera;
        //
        // var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        //
        // var rightPanel = new BABYLON.GUI.StackPanel();
        // rightPanel.width = "300px";
        // rightPanel.isVertical = true;
        // rightPanel.isPointerBlocker = true;
        //
        // rightPanel.paddingRight = "20px";
        // rightPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        // rightPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
        // advancedTexture.addControl(rightPanel);
        //
        // var leftPanel = new BABYLON.GUI.StackPanel();
        // leftPanel.width = "300px";
        // // leftPanel.isVertical = true;
        // leftPanel.paddingRight = "20px";
        // leftPanel.isPointerBlocker = true;
        //
        // leftPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        // leftPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
        // advancedTexture.addControl(leftPanel);
        //
        // var addCheckbox = function(text, func, initialValue, left, panel) {
        //     if(!panel){
        //         panel = leftPanel
        //     }
        //     var checkbox = new BABYLON.GUI.Checkbox();
        //     checkbox.width = "20px";
        //     checkbox.height = "20px";
        //     checkbox.isChecked = initialValue;
        //     checkbox.color = "green";
        //     checkbox.isPointerBlocker = true;
        //
        //     checkbox.onIsCheckedChangedObservable.add(function(value) {
        //         func(value);
        //     });
        //
        //     var header = BABYLON.GUI.Control.AddHeader(checkbox, text, "280px", { isHorizontal: true, controlFirst: true});
        //     header.height = "30px";
        //     header.color = "white";
        //     header.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        //
        //     if (left) {
        //         header.left = left;
        //     }
        //
        //     panel.addControl(header);
        // }
        //
        // var addSlider = function(text, func, initialValue, min, max, left, panel) {
        //     if(!panel){
        //         panel = leftPanel
        //     }
        //     var header = new BABYLON.GUI.TextBlock();
        //     header.text = text;
        //     header.height = "30px";
        //     header.color = "white";
        //     header.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        //     panel.addControl(header);
        //     if (left) {
        //         header.left = left;
        //     }
        //
        //     var slider = new BABYLON.GUI.Slider();
        //     slider.minimum = min;
        //     slider.maximum = max;
        //     slider.value = initialValue;
        //     slider.height = "20px";
        //     slider.color = "green";
        //     slider.background = "white";
        //     slider.isPointerBlocker = true;
        //
        //     slider.onValueChangedObservable.add(function(value) {
        //         func(value);
        //     });
        //
        //     if (left) {
        //         slider.paddingLeft = left;
        //     }
        //
        //     panel.addControl(slider);
        // }
        //
        // var addColorPicker = function(text, func, initialValue, left, panel) {
        //     if(!panel){
        //         panel = leftPanel
        //     }
        //     var header = new BABYLON.GUI.TextBlock();
        //     header.text = text;
        //     header.height = "30px";
        //     header.color = "white";
        //     header.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        //     panel.addControl(header);
        //
        //     if (left) {
        //         header.left = left;
        //     }
        //
        //     var colorPicker = new BABYLON.GUI.ColorPicker();
        //     colorPicker.value = initialValue;
        //     colorPicker.size = "100px";
        //     colorPicker.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        //     colorPicker.onValueChangedObservable.add(function(value) {
        //         func(value);
        //     });
        //
        //     if (left) {
        //         colorPicker.left = left;
        //     }
        //
        //     panel.addControl(colorPicker);
        // }
        //
        // // Create default pipeline
        // var defaultPipeline = new BABYLON.DefaultRenderingPipeline("default", false, scene, [camera]);
        // defaultPipeline.fxaaEnabled = true;
        // defaultPipeline.depthOfFieldEnabled = true;
        // defaultPipeline.depthOfField.focalLength = 300;
        // defaultPipeline.depthOfField.fStop = 0;
        // defaultPipeline.depthOfField.depthOfFieldBlurLevel = 2;
        // defaultPipeline.depthOfField.focusDistance = 25000;
        //
        // addCheckbox("Multisample Anti-Aliasing", function(value) {
        //     defaultPipeline.samples = defaultPipeline.samples == 1 ? 4 : 1;
        // }, defaultPipeline.samples == 4 );
        //
        // addCheckbox("Fast Approximate Anti-Aliasing", function(value) {
        //     defaultPipeline.fxaaEnabled = value;
        //
        // }, defaultPipeline.fxaaEnabled );
        //
        // addCheckbox("Tone Mapping", function(value) {
        //     defaultPipeline.imageProcessing.toneMappingEnabled = value;
        // }, defaultPipeline.imageProcessing.toneMappingEnabled);
        //
        // addSlider("camera contrast", function(value) {
        //     defaultPipeline.imageProcessing.contrast = value;
        // }, defaultPipeline.imageProcessing.contrast, 0, 4);
        //
        // addSlider("camera exposure", function(value) {
        //     defaultPipeline.imageProcessing.exposure = value;
        // }, defaultPipeline.imageProcessing.exposure, 0, 4);
        //
        // addCheckbox("Depth Of Field", function(value) {
        //     defaultPipeline.depthOfFieldEnabled = value;
        // }, defaultPipeline.depthOfFieldEnabled);
        //
        // addSlider("Blur Level", function(value) {
        //     if(value < 1){
        //         defaultPipeline.depthOfFieldBlurLevel = BABYLON.DepthOfFieldEffectBlurLevel.Low;
        //     }else if(value < 2){
        //         defaultPipeline.depthOfFieldBlurLevel = BABYLON.DepthOfFieldEffectBlurLevel.Medium;
        //     }else if(value < 3){
        //         defaultPipeline.depthOfFieldBlurLevel = BABYLON.DepthOfFieldEffectBlurLevel.High;
        //     }
        // }, 1, 0, 3, "20px");
        //
        // addSlider("Focus Distance", function(value) {
        //     defaultPipeline.depthOfField.focusDistance = value;
        // }, defaultPipeline.depthOfField.focusDistance, 1, 50000, "20px");
        //
        // addSlider("F-Stop", function(value) {
        //     defaultPipeline.depthOfField.fStop = value;
        // }, defaultPipeline.depthOfField.fStop, 1.0, 10, "20px");
        //
        // addSlider("Focal Length", function(value) {
        //     defaultPipeline.depthOfField.focalLength = value;
        // }, defaultPipeline.depthOfField.focalLength, 1.0, 300, "20px");
        return this;
    };
    Scene.TYPE = 0;
    return Scene;
}());
/// <reference path="../bower_components/babylonjs/dist/preview release/babylon.d.ts" />
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
        self.engine.loadingScreen = new SlavsLoader();
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
            var container = new BABYLON.GUI.Rectangle('gui.panel.');
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
            container.addControl(image);
            this.container.addControl(image);
            this.containerBackground = image;
            var widthContainer = '607px';
            var heightContainer = '960px';
            var checklSizeListener = function (width) {
                if (width > 1819) {
                    container.width = parseInt(widthContainer) + 'px';
                    container.height = parseInt(heightContainer) + 'px';
                    // } else if(width >= 1416 && width <= 1819) {
                    //     container.width = parseInt(widthContainer)/1.5+'px';
                    //     container.height = parseInt(heightContainer)/1.5+'px';
                }
                else {
                    container.width = parseInt(widthContainer) / 2 + 'px';
                    container.height = parseInt(heightContainer) / 2 + 'px';
                }
            };
            checklSizeListener(window.innerWidth);
            window.addEventListener("resize", function () {
                var width = window.innerWidth;
                checklSizeListener(width);
            });
            return this;
        };
        Popup.prototype.createButtonClose = function () {
            var self = this;
            var buttonClose = BABYLON.GUI.Button.CreateImageWithCenterTextButton("attributesButtonClose", "Close", "assets/gui/button.png");
            buttonClose.color = "white";
            buttonClose.background = "black";
            buttonClose.width = "180px;";
            buttonClose.height = "48px";
            buttonClose.thickness = 0;
            buttonClose.horizontalAlignment = this.position;
            buttonClose.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonClose.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            buttonClose.onPointerUpObservable.add(function () {
                self.close();
            });
            var checkSize = function (width) {
                if (width > 1819) {
                    buttonClose.width = '180px';
                    buttonClose.height = '48px';
                    buttonClose.fontSize = 20;
                }
                else {
                    buttonClose.width = '90px';
                    buttonClose.height = '23px';
                    buttonClose.fontSize = 12;
                }
            };
            checkSize(window.innerWidth);
            window.addEventListener("resize", function () {
                var width = window.innerWidth;
                checkSize(width);
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
            var panelItem_1 = new BABYLON.GUI.Rectangle();
            panelItem_1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            panelItem_1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            panelItem_1.thickness = 0;
            panelItem_1.width = this.blockWidth;
            panelItem_1.height = this.blockHeight;
            panelItem_1.top = this.blockTop;
            panelItem_1.left = this.blockLeft;
            panelItem_1.isPointerBlocker = true;
            this.inventory.container.addControl(panelItem_1);
            this.block = panelItem_1;
            this.createImage();
            var blockWidth_1 = this.blockWidth;
            var blockHeight_1 = this.blockHeight;
            var blockTop_1 = this.blockTop;
            var blockLeft_1 = this.blockLeft;
            var checkSizeListener_1 = function (width) {
                if (width > 1819) {
                    panelItem_1.width = blockWidth_1;
                    panelItem_1.height = blockHeight_1;
                    panelItem_1.top = blockTop_1;
                    panelItem_1.left = blockLeft_1;
                }
                else {
                    panelItem_1.width = parseInt(blockWidth_1) / 2 + 'px';
                    panelItem_1.height = parseInt(blockHeight_1) / 2 + 'px';
                    panelItem_1.top = parseInt(blockTop_1) / 2 + 'px';
                    panelItem_1.left = parseInt(blockLeft_1) / 2 + 'px';
                }
            };
            checkSizeListener_1(window.innerWidth);
            window.addEventListener("resize", function () {
                var width = window.innerWidth;
                checkSizeListener_1(width);
            });
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
            if (self.inventory.guiMain.attributes.opened) {
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
/// <reference path="scenes/Scene.ts"/>
/// <reference path="game.ts"/>
/// <reference path="gui/popup/Popup.ts"/>
/// <reference path="gui/popup/inventory/EquipBlock.ts"/>
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
        this.socket.on('clientConnected', function (data) {
            game.remotePlayers = [];
            self.connectionId = data.connectionId;
            self
                ///PLAYER
                // .connectPlayer()
                .showPlayer()
                .updatePlayers()
                .updatePlayersSkills()
                .removePlayer()
                .refreshPlayerEquip()
                .addExperience()
                .newLvl()
                .attributeAdded()
                .addSpecialItem()
                ///Scene
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
        // this.socket.emit('changeScene', SelectCharacter.TYPE);
        this.socket.emit('selectCharacter', 2);
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
                        enemy.showDamage(damage_1);
                        if (enemy.statistics.hp <= 0) {
                            if (enemy.animation) {
                                enemy.animation.stop();
                            }
                        }
                        setTimeout(function () {
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
                        if (data.attackIsDone == true) {
                            enemy.runAnimationHit(AbstractCharacter.ANIMATION_ATTACK_01, null, null, false);
                        }
                        else {
                            enemy.runAnimationStand();
                        }
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
                        enemy.runAnimationStand();
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
    SocketIOClient.prototype.updatePlayersSkills = function () {
        var self = this;
        var game = this.game;
        var skillsManager = new Character.Skills.SkillsManager(game);
        this.socket.on('updatePlayerSkill', function (updatedPlayer) {
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
            ///action on use skill
            if (updatedPlayer.activeSkill) {
                console.log(updatedPlayer);
                player.statistics.energy = updatedPlayer.activePlayer.statistics.energy;
                player.refreshEnergyInGui();
                var skill = skillsManager.getSkill(updatedPlayer.activeSkill.type);
                skill.showAnimation(updatedPlayer.activeSkill.duration * 1000, updatedPlayer.activeSkill.cooldownTime * 1000);
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
                    player.showDamage(damage_2);
                    if (player.isControllable) {
                        player.refreshHpInGui();
                    }
                    if (player.isAlive && player.statistics.hp <= 0) {
                        player.isAlive = false;
                        player.mesh.skeleton.beginAnimation('death', false);
                    }
                    setTimeout(function () {
                        player.bloodParticles.rebuild();
                        player.bloodParticles.stop();
                        player.bloodParticles.reset();
                    }, 1000);
                }, 300);
            }
            if (Number.isInteger(updatedPlayer.attack) && !player.isAttack) {
                var targetPoint = updatedPlayer.targetPoint;
                if (targetPoint) {
                    var targetPointVector3 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                    player.meshForMove.lookAt(targetPointVector3);
                }
                var attackAnimation = (Game.randomNumber(1, 2) == 1) ? AbstractCharacter.ANIMATION_ATTACK_02 : AbstractCharacter.ANIMATION_ATTACK_01;
                player.runAnimationHit(attackAnimation, null, null);
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
var AbstractCharacter = /** @class */ (function () {
    function AbstractCharacter(name, game) {
        this.name = name;
        this.game = game;
        this.initPatricleSystemDamage();
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
        var self = this;
        var dynamicTexture = new BABYLON.DynamicTexture(null, 128, this.game.getScene(), true);
        // dynamicTexture.hasAlpha = true;
        var font = "bold 24px sans";
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
        particleSystemDamage.start();
        setTimeout(function () {
            dynamicTexture.dispose();
            particleSystemDamage.dispose();
        }, 1500);
    };
    AbstractCharacter.prototype.createBoxForMove = function (scene) {
        this.meshForMove = BABYLON.Mesh.CreateBox(this.name + '_moveBox', 4, scene, false);
        this.meshForMove.checkCollisions = false;
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
            self.runAnimationStand();
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
        if (callbackEnd) {
            callbackStart();
        }
        self.animation = skeleton.beginAnimation(animation, loop, 1 * speed, function () {
            if (callbackEnd) {
                callbackEnd();
            }
            if (standAnimationOnFinish) {
                self.runAnimationStand();
            }
        });
    };
    AbstractCharacter.prototype.runAnimationWalk = function () {
        if (!this.isWalk) {
            var self_1 = this;
            var skeleton = this.mesh.skeleton;
            this.isWalk = true;
            self_1.sfxWalk.play();
            self_1.onWalkStart();
            self_1.animation = skeleton.beginAnimation(AbstractCharacter.ANIMATION_WALK, true, 1.3, function () {
                self_1.runAnimationStand();
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
            });
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
            new GUI.Main(game);
            _this.experience = serverData.activePlayer.experience;
            _this.gold = serverData.activePlayer.gold;
            _this.keys = serverData.activePlayer.specialItems.length;
            _this.experiencePercentages = serverData.activePlayer.experiencePercentages;
            _this.lvl = serverData.activePlayer.lvl;
            _this.freeAttributesPoints = serverData.activePlayer.freeAttributesPoints;
            _this.freeSkillPoints = serverData.activePlayer.freeSkillPoints;
            _this.name = serverData.activePlayer.name;
            // this.setCharacterSkills(serverData.skills);
            _this.setCharacterSkills([
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
            _this.refreshCameraPosition();
            _this.refreshHpInGui();
            _this.refreshExperienceInGui();
            _this.refreshEnergyInGui();
            var playerLight = new BABYLON.SpotLight("playerLightSpot", new BABYLON.Vector3(0, 45, 0), new BABYLON.Vector3(0, -1, 0), null, null, game.getScene());
            playerLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
            playerLight.angle = 0.7;
            playerLight.exponent = 70;
            playerLight.intensity = 0.8;
            playerLight.parent = _this.mesh;
            _this.playerLight = playerLight;
        }
        _this = _super.call(this, serverData.activePlayer.name, game) || this;
        _this.runAnimationStand();
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
        this.game.getScene().activeCamera.position.y = 30;
        this.game.getScene().activeCamera.position.z -= 22;
        this.game.getScene().activeCamera.position.x -= 22;
    };
    /**
     *
     * @param inventoryItems
     */
    Player.prototype.setItems = function (inventoryItems) {
        if (inventoryItems) {
            var self_3 = this;
            var game_1 = this.game;
            var itemManager_1 = new Items.ItemManager(game_1);
            new Promise(function (resolve) {
                self_3.inventory.deleteSashAndHair();
                self_3.inventory.items.forEach(function (item) {
                    item.mesh.dispose();
                });
                setTimeout(function () {
                    resolve();
                });
            }).then(function () {
                self_3.inventory.clearItems();
                new Promise(function (resolve) {
                    itemManager_1.initItemsFromDatabaseOnCharacter(inventoryItems, self_3.inventory);
                    setTimeout(function () {
                        resolve();
                    });
                }).then(function () {
                    if (self_3.isControllable && game_1.gui.inventory.opened) {
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
        this.game.gui.playerBottomPanel.expBar.width = this.experiencePercentages / 100;
        this.game.gui.playerBottomPanel.expBarText.text = this.experiencePercentages + '%';
    };
    Player.prototype.refreshEnergyInGui = function () {
        var percentage = Math.round(this.statistics.energy * 100 / this.statistics.energyMax);
        this.game.gui.playerBottomPanel.energyBar.width = percentage / 100;
        this.game.gui.playerBottomPanel.energyBarText.text = this.statistics.energy + ' / ' + this.statistics.energyMax;
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
var Controller = /** @class */ (function () {
    function Controller(game) {
        this.game = game;
    }
    return Controller;
}());
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
                        position: self.targetPoint
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
}(Controller));
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
var EnvironmentForestHouse = /** @class */ (function () {
    function EnvironmentForestHouse(game, scene) {
        var self = this;
        this.colliders = [];
        var spsTrees = [];
        var spsPlants = [];
        var spsStones = [];
        var spsFern = [];
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
                terrainMaterial.diffuseTexture1 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.jpg", scene);
                terrainMaterial.diffuseTexture2 = new BABYLON.Texture("assets/scenes/Forest_house/dirt.jpg", scene);
                terrainMaterial.diffuseTexture3 = new BABYLON.Texture("assets/scenes/Forest_house/groundSeamless.jpg", scene);
                terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 10;
                terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 10;
                terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 15;
                sceneMesh_1.material = terrainMaterial;
            }
            else if (meshName_1.search("Box_Cube") >= 0) {
                this.colliders.push(sceneMesh_1);
            }
            else if (meshName_1.search("sps_trees") >= 0) {
                spsTrees.push(sceneMesh_1);
            }
            else if (meshName_1.search("sps_groundPlants") >= 0) {
                spsPlants.push(sceneMesh_1);
            }
            else if (meshName_1.search("sps_stones") >= 0) {
                spsStones.push(sceneMesh_1);
            }
            else if (meshName_1.search("sps_fern") >= 0) {
                spsFern.push(sceneMesh_1);
            }
            else {
                sceneMesh_1.isPickable = false;
            }
        }
        //SPS Nature
        var spruce = game.factories['nature_grain'].createInstance('spruce', false);
        spruce.visibility = 0;
        spruce.material.freeze();
        var groundPlants = game.factories['nature_grain'].createInstance('ground_plants', false);
        groundPlants.visibility = 0;
        groundPlants.material.freeze();
        var fern = game.factories['nature_grain'].createInstance('fern', false);
        fern.visibility = 0;
        fern.material.freeze();
        var stone = game.factories['nature_grain'].createInstance('stone', false);
        stone.visibility = 0;
        stone.material.freeze();
        spsTrees.forEach(function (parentSPS) {
            var spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, spruce, false);
            spsSpruce.buildSPS(67);
        });
        spsPlants.forEach(function (parentSPS) {
            var spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, groundPlants, false);
            spsSpruce.buildSPS(40);
        });
        spsStones.forEach(function (parentSPS) {
            var spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, stone, false);
            spsSpruce.buildSPS(67);
        });
        spsFern.forEach(function (parentSPS) {
            var spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, fern, false);
            spsSpruce.buildSPS(67);
        });
        var spsToBlock = scene.getMeshByName("sps_border");
        var spsSpruceBlock = new Particles.SolidParticleSystem.NatureBlock(game, spsToBlock, spruce);
        spsSpruceBlock.buildSPS(500);
        stone.dispose();
        spruce.dispose();
        groundPlants.dispose();
        fern.dispose();
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.4;
        light.position = new BABYLON.Vector3(0, 50, 0);
        light.direction = new BABYLON.Vector3(0.45, -2.5, 0);
        light.shadowMaxZ = 500;
        var shadowGenerator = new BABYLON.ShadowGenerator(2048, light);
        // shadowGenerator.useBlurExponentialShadowMap = true;
        shadowGenerator.useExponentialShadowMap = true;
        shadowGenerator.usePoissonSampling = true;
        // shadowGenerator.frustumEdgeFalloff = 1.0;
        // shadowGenerator.useKernelBlur = true;
        // shadowGenerator.blurKernel = 16;
        // shadowGenerator.usePercentageCloserFiltering = true;
        // shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
        shadowGenerator.getShadowMap().refreshRate = BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE;
        // light.autoUpdateExtends = false;
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
        var listener = function listener() {
            var shadowGenerator = new BABYLON.ShadowGenerator(512, game.player.playerLight);
            // shadowGenerator.useBlurExponentialShadowMap = true;
            shadowGenerator.useBlurExponentialShadowMap = true;
            shadowGenerator.useExponentialShadowMap = true;
            shadowGenerator.usePoissonSampling = true;
            // shadowGenerator.frustumEdgeFalloff = 1.0;
            shadowGenerator.useKernelBlur = true;
            shadowGenerator.blurKernel = 32;
            // shadowGenerator.usePercentageCloserFiltering = true;
            // shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
            // shadowGenerator.getShadowMap().refreshRate = BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE;
            game.player.playerShadowGenerator = shadowGenerator;
            shadowGenerator.getShadowMap().renderList.push(game.player.mesh);
        };
        document.addEventListener(Events.PLAYER_CONNECTED, listener);
        new BABYLON.Sound("Forest night", "assets/sounds/fx/wind.mp3", scene, null, { loop: true, autoplay: true, volume: 0.1 });
        new BABYLON.Sound("Forest night", "assets/sounds/forest_night.mp3", scene, null, { loop: true, autoplay: true, volume: 0.3 });
    }
    return EnvironmentForestHouse;
}());
var EnvironmentForestHouseStart = /** @class */ (function () {
    function EnvironmentForestHouseStart(game, scene) {
        var self = this;
        this.fires = [];
        this.bushes = [];
        this.colliders = [];
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh_2 = scene.meshes[i];
            var meshName_2 = scene.meshes[i]['name'];
            if (meshName_2.search("Ground") >= 0) {
                sceneMesh_2.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh_2.receiveShadows = true;
                this.ground = sceneMesh_2;
            }
            else if (meshName_2.search("Box_Cube") >= 0) {
                this.colliders.push(sceneMesh_2);
            }
            else {
                sceneMesh_2.isPickable = false;
            }
        }
        var light = scene.lights[0];
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        // light.intensity = 0.4;
        light.position = new BABYLON.Vector3(0, 80, -210);
        light.direction = new BABYLON.Vector3(0.45, -0.45, 0.45);
        light.shadowMaxZ = 500;
        var shadowGenerator = new BABYLON.ShadowGenerator(2048, light);
        // shadowGenerator.useBlurExponentialShadowMap = true;
        // shadowGenerator.useExponentialShadowMap = true;
        // shadowGenerator.usePoissonSampling = true;
        // shadowGenerator.frustumEdgeFalloff = 1.0;
        // shadowGenerator.useKernelBlur = true;
        // shadowGenerator.blurKernel = 32;
        shadowGenerator.usePercentageCloserFiltering = true;
        shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
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
        /////Freeze world matrix all static meshes
        for (var i = 0; i < scene.meshes.length; i++) {
            scene.meshes[i].freezeWorldMatrix();
        }
        ///register colliders
        for (var i = 0; i < this.colliders.length; i++) {
            var sceneMeshCollider = this.colliders[i];
            Collisions.setCollider(scene, sceneMeshCollider);
        }
        new BABYLON.Sound("Forest night", "assets/sounds/fx/wind.mp3", scene, null, { loop: true, autoplay: true, volume: 0.3 });
    }
    return EnvironmentForestHouseStart;
}());
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
var EnvironmentMountainsPass = /** @class */ (function () {
    function EnvironmentMountainsPass(game, scene) {
        var self = this;
        this.colliders = [];
        var spsTrees = [];
        var spsPlants = [];
        var spsStones = [];
        var spsFern = [];
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh_3 = scene.meshes[i];
            var meshName_3 = scene.meshes[i]['name'];
            if (meshName_3.search("Ground") >= 0) {
                sceneMesh_3.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh_3.receiveShadows = true;
                this.ground = sceneMesh_3;
                var terrainMaterial = new BABYLON.TerrainMaterial("terrainMaterial", scene);
                terrainMaterial.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);
                terrainMaterial.specularPower = 64;
                terrainMaterial.mixTexture = new BABYLON.Texture("assets/scenes/MountainsPass/stencil.png", scene);
                terrainMaterial.diffuseTexture1 = new BABYLON.Texture("assets/scenes/Forest_house/dirt.jpg", scene);
                terrainMaterial.diffuseTexture2 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.jpg", scene);
                terrainMaterial.diffuseTexture3 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.jpg", scene);
                terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 20;
                terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 20;
                terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 20;
                sceneMesh_3.material = terrainMaterial;
            }
            else if (meshName_3.search("Box_Cube") >= 0) {
                this.colliders.push(sceneMesh_3);
            }
            else if (meshName_3.search("sps_tress") >= 0) {
                spsTrees.push(sceneMesh_3);
            }
            else if (meshName_3.search("sps_groundPlants") >= 0) {
                spsPlants.push(sceneMesh_3);
            }
            else if (meshName_3.search("sps_stones") >= 0) {
                spsStones.push(sceneMesh_3);
            }
            else if (meshName_3.search("sps_fern") >= 0) {
                spsFern.push(sceneMesh_3);
            }
            else {
                sceneMesh_3.isPickable = false;
            }
        }
        //SPS Nature
        var spruce = game.factories['nature_grain'].createInstance('spruce', false);
        spruce.visibility = 0;
        spruce.material.freeze();
        //
        // let groundPlants = game.factories['nature_grain'].createInstance('ground_plants', false);
        // groundPlants.visibility = 0;
        // groundPlants.material.freeze();
        //
        // let fern = game.factories['nature_grain'].createInstance('fern', false);
        // fern.visibility = 0;
        // fern.material.freeze();
        //
        // let stone = game.factories['nature_grain'].createInstance('stone', false);
        // stone.visibility = 0;
        // stone.material.freeze();
        //
        spsTrees.forEach(function (parentSPS) {
            var spsSpruce = new Particles.SolidParticleSystem.NatureSmall(game, parentSPS, spruce, false);
            spsSpruce.buildSPS(10);
        });
        //
        // spsPlants.forEach(function(parentSPS) {
        //     let spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, groundPlants, false);
        //     spsSpruce.buildSPS(40);
        // });
        //
        // spsStones.forEach(function(parentSPS) {
        //     let spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, stone, false);
        //     spsSpruce.buildSPS(67);
        // });
        //
        // spsFern.forEach(function(parentSPS) {
        //     let spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, fern, false);
        //     spsSpruce.buildSPS(67);
        // });
        //
        // let spsToBlock = scene.getMeshByName("sps_border");
        // let spsSpruceBlock = new Particles.SolidParticleSystem.NatureBlock(game, spsToBlock, spruce);
        // spsSpruceBlock.buildSPS(500);
        // stone.dispose();
        spruce.dispose();
        // groundPlants.dispose();
        // fern.dispose();
        var cone = scene.getMeshByName("fireplace.002");
        if (cone) {
            var smokeSystem = new Particles.FireplaceSmoke(game, cone).particleSystem;
            smokeSystem.start();
            var fireSystem = new Particles.FireplaceFire(game, cone).particleSystem;
            fireSystem.start();
            var sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, { loop: true, autoplay: true });
            sfxFireplace.attachToMesh(cone);
        }
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.4;
        light.position = new BABYLON.Vector3(0, 50, 0);
        light.direction = new BABYLON.Vector3(0.45, -2.5, 0);
        light.shadowMaxZ = 500;
        var shadowGenerator = new BABYLON.ShadowGenerator(2048, light);
        // shadowGenerator.useBlurExponentialShadowMap = true;
        shadowGenerator.useExponentialShadowMap = true;
        shadowGenerator.usePoissonSampling = true;
        // shadowGenerator.frustumEdgeFalloff = 1.0;
        // shadowGenerator.useKernelBlur = true;
        // shadowGenerator.blurKernel = 16;
        // shadowGenerator.usePercentageCloserFiltering = true;
        // shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
        shadowGenerator.getShadowMap().refreshRate = BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE;
        // light.autoUpdateExtends = false;
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
            // Collisions.setCollider(scene, sceneMeshCollider);
        }
        // Freeze world matrix all static meshes
        for (var i = 0; i < scene.meshes.length; i++) {
            scene.meshes[i].freezeWorldMatrix();
        }
        var listener = function listener() {
            var shadowGenerator = new BABYLON.ShadowGenerator(512, game.player.playerLight);
            // shadowGenerator.useBlurExponentialShadowMap = true;
            shadowGenerator.useBlurExponentialShadowMap = true;
            shadowGenerator.useExponentialShadowMap = true;
            shadowGenerator.usePoissonSampling = true;
            // shadowGenerator.frustumEdgeFalloff = 1.0;
            shadowGenerator.useKernelBlur = true;
            shadowGenerator.blurKernel = 32;
            // shadowGenerator.usePercentageCloserFiltering = true;
            // shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
            // shadowGenerator.getShadowMap().refreshRate = BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE;
            game.player.playerShadowGenerator = shadowGenerator;
            shadowGenerator.getShadowMap().renderList.push(game.player.mesh);
        };
        document.addEventListener(Events.PLAYER_CONNECTED, listener);
        // new BABYLON.Sound("Forest night", "assets/sounds/fx/wind.mp3", scene, null, { loop: true, autoplay: true, volume: 0.1 });
        // new BABYLON.Sound("Forest night", "assets/sounds/forest_night.mp3", scene, null, { loop: true, autoplay: true, volume: 0.3 });
    }
    return EnvironmentMountainsPass;
}());
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
var GUI;
(function (GUI) {
    var Main = /** @class */ (function () {
        function Main(game) {
            this.game = game;
            game.gui = this;
            this.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.main');
            this.playerBottomPanel = new GUI.PlayerBottomPanel(game);
            this.playerLogsPanel = new GUI.PlayerLogsPanel(game);
            this.playerLogsQuests = new GUI.PlayerQuestsPanel(game);
            this.playerQuestInformation = new GUI.PlayerQuestInformation(game);
            this.characterTopHp = new GUI.ShowHp(game);
            this.attributes = new GUI.Attributes(this);
            this.inventory = new GUI.Inventory(this);
        }
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
            var toolbarHp = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_hp.png');
            toolbarHp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            toolbarHp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            toolbarHp.width = 0;
            toolbarHp.height = '14px';
            toolbarHp.top = '32px';
            this.hpBar = toolbarHp;
            containerSliders.addControl(toolbarHp);
            var textBlockHp = new BABYLON.GUI.TextBlock();
            textBlockHp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textBlockHp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textBlockHp.top = '32px';
            textBlockHp.width = 1;
            textBlockHp.height = '14px';
            textBlockHp.color = "white";
            textBlockHp.fontSize = 10;
            this.hpBarText = textBlockHp;
            containerSliders.addControl(textBlockHp);
            var toolbarExp = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_exp.png');
            toolbarExp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            toolbarExp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            toolbarExp.width = 1;
            toolbarExp.height = '14px';
            toolbarExp.top = '16px';
            this.expBar = toolbarExp;
            containerSliders.addControl(toolbarExp);
            var textBlockExp = new BABYLON.GUI.TextBlock();
            textBlockExp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textBlockExp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textBlockExp.top = '16px';
            textBlockExp.width = 1;
            textBlockExp.height = '14px';
            textBlockExp.color = "white";
            textBlockExp.fontSize = 10;
            this.expBarText = textBlockExp;
            containerSliders.addControl(textBlockExp);
            var toolbarEnergy = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_exp.png');
            toolbarEnergy.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            toolbarEnergy.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            toolbarEnergy.width = 1;
            toolbarEnergy.height = '14px';
            toolbarEnergy.top = '0px';
            this.energyBar = toolbarEnergy;
            containerSliders.addControl(toolbarEnergy);
            var textToolbarEnergy = new BABYLON.GUI.TextBlock();
            textToolbarEnergy.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textToolbarEnergy.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textToolbarEnergy.top = '0px';
            textToolbarEnergy.width = 1;
            textToolbarEnergy.height = '14px';
            textToolbarEnergy.color = "white";
            textToolbarEnergy.fontSize = 10;
            this.energyBarText = textToolbarEnergy;
            containerSliders.addControl(textToolbarEnergy);
            var gridSpecials = new BABYLON.GUI.Grid();
            gridSpecials.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            gridSpecials.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            gridSpecials.width = '215px';
            gridSpecials.height = '44px';
            gridSpecials.top = '-11px';
            gridSpecials.left = '4px';
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
                // if (!game.gui.skills.opened) {
                //     game.gui.skills.open();
                // }
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
            var characterLogsPanel = new BABYLON.GUI.StackPanel();
            characterLogsPanel.width = "15%";
            characterLogsPanel.left = "1%";
            characterLogsPanel.top = "-5%";
            characterLogsPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            characterLogsPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            self.texture.addControl(characterLogsPanel);
            self.guiPanel = characterLogsPanel;
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
            this.particleSystem = fireSystem;
        };
        return TorchFire;
    }(Particles.AbstractParticle));
    Particles.TorchFire = TorchFire;
})(Particles || (Particles = {}));
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
            .defaultPipeline(scene)
            .executeWhenReady(function () {
            scene.audioEnabled = false;
            var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
            light.intensity = 1;
            var ground = BABYLON.MeshBuilder.CreateGround("Ground", { width: 50, height: 50 }, scene);
            ground.actionManager = new BABYLON.ActionManager(scene);
            var terrainMaterial = new BABYLON.StandardMaterial("GroundMaterial", scene);
            terrainMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
            terrainMaterial.specularPower = 64;
            terrainMaterial.diffuseTexture = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.jpg", scene);
            ground.material = terrainMaterial;
        }, function () {
            // game.player.playerLight.dispose();
        });
    };
    Battleground.TYPE = 99;
    return Battleground;
}(Scene));
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
                .defaultPipeline(scene)
                .executeWhenReady(function () {
                self.environment = new EnvironmentMountainsPass(game, scene);
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
                    for (var i = 0; Battleground < players.length; i++) {
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
            function AbstractSkill(game, cooldown, damage, stock) {
                if (cooldown === void 0) { cooldown = 0; }
                if (damage === void 0) { damage = 0; }
                if (stock === void 0) { stock = 0; }
                this.cooldown = cooldown;
                this.damage = damage;
                this.stock = stock;
                this.animationTime = 0;
                this.animationLoop = false;
                this.game = game;
                this.registerDefaults(game);
                this.registerHotKey(game);
                this.registerAnimations();
                this.createSkillImageInGUI(game);
            }
            AbstractSkill.prototype.getImageUrl = function () {
                return this.image;
            };
            AbstractSkill.prototype.registerHotKey = function (game) {
                var self = this;
                var listener = function listener() {
                    game.getScene().actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (event) {
                        if (event.sourceEvent.key == self.getType()) {
                            game.client.socket.emit('useSkill', self.getType());
                        }
                    }));
                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            };
            AbstractSkill.prototype.showReloadInGUI = function (cooldownTime) {
                var game = this.game;
                var self = this;
                game.getScene().beginDirectAnimation(self.guiOverlay, [self.animationOverlay], 0, 30, false, 1, function () {
                    game.getScene().beginDirectAnimation(self.guiImage, [self.animationAlpha], 0, 30, false);
                });
            };
            // protected registerHotKey(game: Game) {
            //     let self = this;
            //     let listener = function listener() {
            //         game.getScene().actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (event) {
            //             if (event.sourceEvent.key == self.getType()) {
            //                 game.controller.attackPoint = null;
            //
            //                 game.player.runAnimationSkill(self.animationName, function () {
            //                     self.effectEmitter.particleSystem.start();
            //                     game.getScene().beginDirectAnimation(self.guiOverlay, [self.animationOverlay], 0, 30, false, 1, function() {
            //                         game.getScene().beginDirectAnimation(self.guiImage, [self.animationAlpha], 0, 30, false);
            //                     });
            //
            //                 }, function () {
            //                     self.effectEmitter.particleSystem.stop();
            //
            //                 }, self.animationLoop, self.animationSpeed);
            //
            //                 if(self.animationTime) {
            //                     setTimeout(function() {
            //                         game.player.animation.stop();
            //                     }, self.animationTime);
            //                 }
            //
            //             }
            //         }));
            //
            //         document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            //     };
            //     document.addEventListener(Events.PLAYER_CONNECTED, listener);
            // }
            AbstractSkill.prototype.createSkillImageInGUI = function (game) {
                var image = this.getImageUrl();
                var number = this.getType();
                var grid = game.gui.playerBottomPanel.guiGridSkills;
                var imageSkill = new BABYLON.GUI.Image('image_' + number, image);
                imageSkill.width = 1;
                imageSkill.height = 1;
                imageSkill.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
                var textBlock = new BABYLON.GUI.TextBlock('shortcut_' + number, '' + number + '');
                textBlock.color = 'white';
                textBlock.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                textBlock.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
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
                grid.addControl(textBlock, 0, number - 1);
                grid.addControl(overlay, 0, number - 1);
                this.guiImage = imageSkill;
                this.guiOverlay = overlay;
                this.guiText = textBlock;
            };
            AbstractSkill.prototype.registerAnimations = function () {
                var animationAlpha = new BABYLON.Animation("animationAlpha", "alpha", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
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
                var animationOverlay = new BABYLON.Animation("animationOverlay", "height", 15, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
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
                this.showReloadInGUI(cooldownTime);
                game.player.runAnimationSkill(this.animationName, function () {
                }, function () {
                    game.player.mesh.skeleton.createAnimationRange('loopBlock', 70, 80);
                    game.player.mesh.skeleton.beginAnimation('loopBlock', true);
                }, this.animationLoop, this.animationSpeed, false);
                setTimeout(function () {
                    game.player.runAnimationSkill('blockB');
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
                this.animationSpeed = 1.5;
                this.animationLoop = true;
                this.animationTime = 1000;
                var self = this;
                var listener = function listener() {
                    var effectEmitter = new Particles.FastAttack(game, game.player.mesh);
                    effectEmitter.initParticleSystem();
                    self.effectEmitter = effectEmitter;
                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
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
                var self = this;
                var listener = function listener() {
                    var effectEmitter = new Particles.Heal(game, game.player.mesh);
                    effectEmitter.initParticleSystem();
                    self.effectEmitter = effectEmitter;
                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            };
            Heal.prototype.registerHotKey = function (game) {
                var self = this;
                var alpha = 0;
                var animateFunction = function () {
                    self.effectEmitter.particleSystem.emitter.position.x = 2 * Math.cos(alpha);
                    self.effectEmitter.particleSystem.emitter.position.y = 1;
                    self.effectEmitter.particleSystem.emitter.position.z = 2 * Math.sin(alpha);
                    alpha += 0.24 * game.getScene().getAnimationRatio();
                };
                var listener = function listener() {
                    game.getScene().actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (event) {
                        if (event.sourceEvent.key == self.getType()) {
                            game.controller.attackPoint = null;
                            game.player.runAnimationSkill(self.animationName, function () {
                                self.effectEmitter.particleSystem.start();
                                game.getScene().registerBeforeRender(animateFunction);
                                game.getScene().beginDirectAnimation(self.guiOverlay, [self.animationOverlay], 0, 30, false, 1, function () {
                                    game.getScene().beginDirectAnimation(self.guiImage, [self.animationAlpha], 0, 30, false);
                                });
                            }, function () {
                                self.effectEmitter.particleSystem.stop();
                                game.getScene().unregisterBeforeRender(animateFunction);
                            }, self.animationLoop, self.animationSpeed);
                            if (self.animationTime) {
                                setTimeout(function () {
                                    game.player.animation.stop();
                                }, self.animationTime);
                            }
                        }
                    }));
                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            };
            Heal.TYPE = 1;
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
                var self = this;
                var listener = function listener() {
                    var effectEmitter = new Particles.ShieldAttack(game, game.player.mesh);
                    effectEmitter.initParticleSystem();
                    self.effectEmitter = effectEmitter;
                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
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
            function SkillsManager(game) {
                this.game = game;
            }
            /**
             * @param Character.Skills.AbstractSkill
             */
            SkillsManager.prototype.getSkill = function (type) {
                var skill = null;
                switch (type) {
                    // case Character.Skills.Tornado.TYPE:
                    //     skill = new Character.Skills.Tornado(this.game);
                    //     break;
                    // case Character.Skills.Heal.TYPE:
                    //     skill = new Character.Skills.Heal(this.game);
                    //     break;
                    case Character.Skills.StrongAttack.TYPE:
                        skill = new Character.Skills.StrongAttack(this.game);
                        break;
                    case Character.Skills.Block.TYPE:
                        skill = new Character.Skills.Block(this.game);
                        break;
                    case Character.Skills.FastAttack.TYPE:
                        skill = new Character.Skills.FastAttack(this.game);
                        break;
                    case Character.Skills.ShieldAttack.TYPE:
                        skill = new Character.Skills.ShieldAttack(this.game);
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
                this.showReloadInGUI(cooldownTime);
                game.player.runAnimationSkill(this.animationName, function () {
                }, function () {
                    game.player.mesh.skeleton.createAnimationRange('loopStrongAttack', 340, 350);
                    game.player.mesh.skeleton.beginAnimation('loopStrongAttack', true);
                }, this.animationLoop, this.animationSpeed, false);
                setTimeout(function () {
                    game.player.runAnimationSkill('strongAttackB');
                    game.client.socket.emit('attack', {
                        targetPoint: null
                    });
                }, skillTime);
            };
            StrongAttack.TYPE = 1;
            return StrongAttack;
        }(Character.Skills.AbstractSkill));
        Skills.StrongAttack = StrongAttack;
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
            Tornado.prototype.registerDefaults = function (game) {
                this.image = 'assets/skills/tornado.png';
                this.name = 'Tornado';
                this.animationName = AbstractCharacter.ANIMATION_SKILL_02;
                this.animationSpeed = 1.5;
                this.animationLoop = true;
                this.animationTime = 1000;
                var self = this;
                var listener = function listener() {
                    var effectEmitter = new Particles.Tornado(game, game.player.mesh);
                    effectEmitter.initParticleSystem();
                    self.effectEmitter = effectEmitter;
                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            };
            Tornado.TYPE = 3;
            return Tornado;
        }(Character.Skills.AbstractSkill));
        Skills.Tornado = Tornado;
    })(Skills = Character.Skills || (Character.Skills = {}));
})(Character || (Character = {}));
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster(game, serverKey, serverData) {
        var _this = this;
        var meshName = serverData.meshName;
        var factoryName = serverData.type;
        var mesh = game.factories[factoryName].createInstance(meshName, true);
        mesh.visibility = 1;
        mesh.isPickable = 0;
        if (game.player.playerShadowGenerator) {
            game.player.playerShadowGenerator.getShadowMap().renderList.push(mesh);
        }
        _this.sfxHit = new BABYLON.Sound("CharacterHit", "assets/sounds/character/hit.mp3", game.getScene(), null, {
            loop: false,
            autoplay: false
        });
        _this.sfxWalk = new BABYLON.Sound("CharacterHit", null, game.getScene(), null, {
            loop: false,
            autoplay: false
        });
        _this.id = serverKey;
        _this.mesh = mesh;
        _this.statistics = serverData.statistics;
        game.enemies[_this.id] = _this;
        mesh.skeleton.enableBlending(0.2);
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
            if (!game.player.isAttack) {
                game.client.socket.emit('attack', {
                    attack: self.id,
                    targetPoint: self.game.controller.attackPoint.position,
                    rotation: self.game.controller.attackPoint.rotation
                });
            }
        };
        _this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger, function (pointer) {
            if (self.game.player.isAlive) {
                game.controller.attackPoint = pointer.meshUnderPointer;
                game.controller.targetPoint = null;
                game.controller.ball.visibility = 0;
                self.intervalAttackRegisteredFunction = setInterval(intervalAttackFunction, 100);
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
    Monster.prototype.removeFromWorld = function () {
        if (this.intervalAttackRegisteredFunction) {
            clearInterval(this.intervalAttackRegisteredFunction);
        }
        this.meshForMove.dispose();
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
            mesh.skeleton.enableBlending(0.3);
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
            this.meshForMove = BABYLON.Mesh.CreateBox(this.name + '_selectBox', 2.5, this.game.getScene(), false);
            this.meshForMove.scaling.y = 3;
            this.meshForMove.checkCollisions = false;
            this.meshForMove.visibility = 0;
            this.meshForMove.isPickable = true;
            this.meshForMove.parent = this.mesh;
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
                console.log(1);
                self.game.client.socket.emit('selectCharacter', self.playerId);
            }));
            this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickOutTrigger, function () {
                console.log(2);
                self.game.client.socket.emit('selectCharacter', self.playerId);
            }));
            this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                console.log(2);
                self.game.client.socket.emit('selectCharacter', self.playerId);
            }));
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
            textPlayerName.color = 'green';
            textPlayerName.fontSize = 18;
            panel.addControl(textPlayerName);
            var textPlayerLVL = this.createText(this.guiMain.game.player.lvl + ' LVL');
            textPlayerLVL.color = 'green';
            textPlayerLVL.fontSize = 18;
            panel.addControl(textPlayerLVL);
            this.createAttribute(1, 'Damage:' + this.guiMain.game.player.statistics.damage, panel);
            this.createAttribute(2, 'Armor:' + this.guiMain.game.player.statistics.armor, panel);
            this.createAttribute(3, 'HP:' + this.guiMain.game.player.statistics.hp, panel);
            this.createAttribute(4, 'Energy:' + this.guiMain.game.player.statistics.energy, panel);
            if (this.guiMain.game.player.freeAttributesPoints) {
                var textAttributes = this.createText('You have ' + this.guiMain.game.player.freeAttributesPoints + ' free attribute points.');
                textAttributes.color = 'red';
                textAttributes.fontSize = 16;
                panel.addControl(textAttributes);
            }
            var textStatistics = this.createText('Statistics');
            textStatistics.color = 'green';
            textStatistics.height = '8%';
            textStatistics.fontSize = 18;
            panel.addControl(textStatistics);
            var damage = this.createText('Damage:' + this.guiMain.game.player.statisticsAll.damage);
            panel.addControl(damage);
            var armor = this.createText('Armor:' + this.guiMain.game.player.statisticsAll.armor);
            panel.addControl(armor);
            var attackSpeed = this.createText('Attack chance:' + this.guiMain.game.player.statistics.hitChance);
            panel.addControl(attackSpeed);
            var blockChance = this.createText('Block chance:' + this.guiMain.game.player.statistics.blockChance);
            panel.addControl(blockChance);
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
                button.width = 0.8;
                button.color = 'white';
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
            var image = BABYLON.GUI.Button.CreateImageButton("gui.popup.image.gold", '' + this.guiMain.game.player.gold + '', "assets/gui/gold.png");
            image.thickness = 0;
            image.color = 'white';
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            this.container.addControl(image);
            var image2 = BABYLON.GUI.Button.CreateImageButton("gui.popup.image.key", '' + this.guiMain.game.player.keys + '', "assets/gui/key.png");
            image2.thickness = 0;
            image2.color = 'white';
            image2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            this.container.addControl(image2);
            var image3 = BABYLON.GUI.Button.CreateImageButton("gui.popup.image.wine", '' + this.guiMain.game.player.keys + '', "assets/skills/heal.png");
            image3.thickness = 0;
            image3.color = 'white';
            image3.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image3.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            this.container.addControl(image3);
            var checkSizeListener = function (width) {
                if (width > 1819) {
                    image.height = '24px';
                    image.width = '150px';
                    image.left = "60px";
                    image.top = '-48px';
                    image.fontSize = 18;
                    image2.height = '24px';
                    image2.width = '150px';
                    image2.left = "235px";
                    image2.top = '-48px';
                    image2.fontSize = 18;
                    image3.height = '24px';
                    image3.width = '150px';
                    image3.left = "435px";
                    image3.top = '-48px';
                    image3.fontSize = 18;
                }
                else {
                    image.width = '75px';
                    image.height = '12px';
                    image.top = '-24px';
                    image.left = '30px';
                    image.fontSize = 9;
                    image2.height = '12px';
                    image2.width = '75px';
                    image2.left = "120px";
                    image2.top = '-24px';
                    image2.fontSize = 9;
                    image3.height = '12px';
                    image3.width = '75px';
                    image3.left = "210px";
                    image3.top = '-24px';
                    image3.fontSize = 9;
                }
            };
            checkSizeListener(window.innerWidth);
            window.addEventListener("resize", function () {
                var width = window.innerWidth;
                checkSizeListener(width);
            });
        };
        Inventory.prototype.close = function () {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
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
            grid.width = '568px';
            grid.height = '288px';
            grid.top = '247px';
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
                if (itemCount % 8 == 0) {
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
                var tooltipButton = null;
                image.onPointerEnterObservable.add(function () {
                    var text = item.name;
                    if (item.statistics.damage > 0) {
                        text += "\nDamage: " + item.statistics.damage + "";
                    }
                    if (item.statistics.armor > 0) {
                        text += "\nArmor: " + item.statistics.armor + "";
                    }
                    tooltipButton = new GUI.TooltipButton(image, text);
                });
                image.onPointerOutObservable.add(function () {
                    image.children.forEach(function (value, key) {
                        if (value.name == 'tooltip') {
                            image.removeControl(value);
                        }
                    });
                });
                image.onPointerUpObservable.add(function () {
                    self.guiMain.game.player.inventory.emitEquip(item);
                    self.onPointerUpItemImage(item);
                    self.showItems();
                    if (self.guiMain.attributes.opened) {
                        self.guiMain.attributes.refreshPopup();
                    }
                });
            };
            for (var i = 0; i < inventory.items.length; i++) {
                _loop_1(i);
            }
            var checkSizeListener = function (width) {
                if (width > 1819) {
                    grid.width = '568px';
                    grid.height = '288px';
                    grid.top = '247px';
                }
                else {
                    grid.width = '284px';
                    grid.height = '144px';
                    grid.top = '123px';
                }
            };
            checkSizeListener(window.innerWidth);
            window.addEventListener("resize", function () {
                var width = window.innerWidth;
                checkSizeListener(width);
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
            return image;
        };
        return Inventory;
    }(GUI.Popup));
    GUI.Inventory = Inventory;
})(GUI || (GUI = {}));
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
        var AbstractRequirement = /** @class */ (function () {
            function AbstractRequirement() {
            }
            AbstractRequirement.REQUIREMENT_ID = 0;
            return AbstractRequirement;
        }());
        Requirements.AbstractRequirement = AbstractRequirement;
    })(Requirements = Quests.Requirements || (Quests.Requirements = {}));
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
var Armor = /** @class */ (function (_super) {
    __extends(Armor, _super);
    function Armor(inventory) {
        var _this = _super.call(this, inventory) || this;
        _this.blockWidth = "153px";
        _this.blockHeight = "250px";
        _this.blockTop = "270px";
        _this.blockLeft = "228px";
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
        _this.blockWidth = "96px";
        _this.blockHeight = "92px";
        _this.blockTop = "442px";
        _this.blockLeft = "82px";
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
        _this.blockWidth = "96px";
        _this.blockHeight = "92px";
        _this.blockTop = "442px";
        _this.blockLeft = "428px";
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
        _this.blockWidth = "96px";
        _this.blockHeight = "92px";
        _this.blockTop = "121px";
        _this.blockLeft = "257px";
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
        _this.blockWidth = "90px";
        _this.blockHeight = "146px";
        _this.blockTop = "248px";
        _this.blockLeft = "435px";
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
        _this.blockWidth = "90px";
        _this.blockHeight = "146px";
        _this.blockTop = "248px";
        _this.blockLeft = "85px";
        _this.item = inventory.guiMain.game.player.inventory.weapon;
        _this.createBlockWithImage();
        return _this;
    }
    return Weapon;
}(EquipBlock));
