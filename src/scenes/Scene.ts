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
                // self.octree = scene.createOrUpdateSelectionOctree();

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

        //Only if LINEAR
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
        scene.audioEnabled = true;
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
    }

    public abstract initScene(game: Game);
}
