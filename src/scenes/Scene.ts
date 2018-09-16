abstract class Scene {
    static TYPE = 0;

    protected game:Game;
    protected babylonScene: BABYLON.Scene;
    protected assetManager: BABYLON.AssetsManager;
    public octree: BABYLON.Octree;

    protected setDefaults(game:Game, scene: BABYLON.Scene) {
        this.game = game;
        this.babylonScene = scene;
        SlavsLoader.showLoaderWithText('Initializing scene...');
        scene.actionManager = new BABYLON.ActionManager(scene);

        this.assetManager = new BABYLON.AssetsManager(scene);
        this.initFactories(scene);

        if(Game.SHOW_DEBUG) {
            scene.debugLayer.show();
        }

        return this;
    }

    protected playEnemiesAnimationsInFrumStrum() {
        let game = this.game;
        let scene = this.babylonScene;

        if(game.frumstrumEnemiesInterval) {
            clearInterval(game.frumstrumEnemiesInterval);
        }

        let battleMusic = new BABYLON.Sound("Forest night", "assets/sounds/music/battle.mp3", scene, null, { loop: true, autoplay: false, volume: 1 });

        game.frumstrumEnemiesInterval = setInterval(function() {
            let activeEnemies = 0;
            game.enemies.forEach(function(enemy) {
                let isActiveMesh = scene.isActiveMesh(enemy.mesh);
                if(isActiveMesh) {
                    activeEnemies = 1;
                }

                if(!enemy.animation && isActiveMesh) {
                    enemy.runAnimationStand();
                } else if(enemy.animation && !isActiveMesh) {
                    enemy.animation.stop();
                    enemy.animation = null;
                }
            });

            if(activeEnemies && !battleMusic.isPlaying) {
                battleMusic.stop();
                battleMusic.setVolume(1);
                battleMusic.play();
            } else if(!activeEnemies && battleMusic.isPlaying) {
                battleMusic.setVolume(0, 2);
                battleMusic.stop(2);
            }
        }, 500);

        return this;
    }

    protected executeWhenReady(onReady: Function, onPlayerConnected: Function) {
        let scene = this.babylonScene;
        let assetsManager = this.assetManager;
        let self = this;
        let game = this.game;

        scene.executeWhenReady(function () {
            // game.client.socket.emit('createPlayer');
            assetsManager.onFinish = function (tasks) {
                game.client.socket.emit('changeScenePre');

                let sceneIndex = game.scenes.push(scene);
                game.activeScene = sceneIndex - 1;

                if(onReady) {
                    onReady();
                }

                self.playEnemiesAnimationsInFrumStrum();
            };
            assetsManager.onProgress = function(remainingCount, totalCount, lastFinishedTask) {
                SlavsLoader.showLoaderWithText('Loading assets... ' + remainingCount + ' of ' + totalCount + '.');
            };
            assetsManager.load();

            let listener = function listener() {
                if(onPlayerConnected) {
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
    }

    public setCamera(scene:BABYLON.Scene) {
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, 0), scene);
        camera.rotation = new BABYLON.Vector3(0.75,0.75,0);
        camera.position = new BABYLON.Vector3(0,35,0);
        camera.maxZ = 110;
        camera.minZ = 20;
        camera.fov = 13.25;
        camera.fovMode = 0;

        scene.activeCamera = camera;

        return this;
    }

    public setFog(scene) {
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
    }

    public optimizeScene(scene:BABYLON.Scene) {
        scene.collisionsEnabled = true;
        scene.fogEnabled = true;
        scene.lensFlaresEnabled = false;
        scene.probesEnabled = false;
        scene.postProcessesEnabled = true;
        scene.spritesEnabled = false;
        scene.audioEnabled = false;
        scene.workerCollisions = false;

        return this;
    }

    protected initFactories(scene: BABYLON.Scene, assetsManager: BABYLON.AssetsManager) {
        let assetsManager = this.assetManager;

        this.game.factories['character'] = new Factories.Characters(this.game, scene, assetsManager).initFactory();
        this.game.factories['skeleton'] = new Factories.Skeletons(this.game, scene, assetsManager).initFactory();
        this.game.factories['skeletonWarrior'] = new Factories.SkeletonWarrior(this.game, scene, assetsManager).initFactory();
        this.game.factories['skeletonBoss'] = new Factories.SkeletonBoss(this.game, scene, assetsManager).initFactory();
        this.game.factories['flag'] = new Factories.Flags(this.game, scene, assetsManager).initFactory();
        this.game.factories['nature_grain'] = new Factories.Nature(this.game, scene, assetsManager).initFactory();

        return this;
    }

    public defaultPipeline(scene: BABYLON.Scene) {
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
    }

    public abstract initScene(game: Game);
}
