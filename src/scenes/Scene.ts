abstract class Scene {
    static TYPE = 0;

    protected game:Game;
    protected babylonScene: BABYLON.Scene;
    protected assetManager: BABYLON.AssetsManager;
    public octree: BABYLON.Octree<0>;
    public options: GameOptions;
    public environment: AbstractEnvironment;

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

        BABYLON.SceneLoader.CleanBoneMatrixWeights = true;

        return this;
    }

    protected playEnemiesAnimationsInFrumStrum() {
        let game = this.game;
        let scene = this.babylonScene;

        if(game.frumstrumEnemiesInterval) {
            clearInterval(game.frumstrumEnemiesInterval);
        }

        let battleMusic = new BABYLON.Sound("Forest night", "assets/sounds/music/battle.mp3", scene, null, { loop: true, autoplay: false, volume: 1 });
        let timeoutNumber;

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
                if(timeoutNumber) {
                    timeoutNumber = clearTimeout(timeoutNumber);
                    battleMusic.setVolume(1, 1);
                } else {
                    battleMusic.setVolume(1, 1);
                    battleMusic.play();
                }
            } else if(!activeEnemies && battleMusic.isPlaying && !timeoutNumber) {
                battleMusic.setVolume(0, 2);
                timeoutNumber = setTimeout(() => {
                    battleMusic.stop();
                }, 2000)
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
            assetsManager.onFinish = function (tasks) {
                game.client.socket.emit('changeScenePre');

                let sceneIndex = game.scenes.push(scene);
                game.activeScene = sceneIndex - 1;

                if(onReady) {
                    onReady();
                }

                for (let i = 0; i < scene.meshes.length; i++) {
                    let sceneMesh = scene.meshes[i];
                    sceneMesh.layerMask = 2;
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
                self.options = new GameOptions(game);
                game.sceneManager.options.addMeshToDynamicShadowGenerator(game.player.mesh);
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
        const cameraByName = scene.getCameraByName('Camera');
        if(cameraByName) {
            cameraByName.dispose();
        }

        let gameCamera = new BABYLON.FreeCamera("gameCamera", new BABYLON.Vector3(0, 0, 0), scene);
        gameCamera.rotation = new BABYLON.Vector3(0.75,0.75,0);
        gameCamera.maxZ = 110;
        gameCamera.minZ = 20;
        // camera.fov = 13.25;
        gameCamera.fovMode = 0;
        gameCamera.layerMask = 2;

        let guiCamera = new BABYLON.FreeCamera("GUICamera", new BABYLON.Vector3(0, 0, 0), scene);
        guiCamera.layerMask = 1;
        scene.activeCameras = [gameCamera, guiCamera];
        scene.cameraToUseForPointers = gameCamera;

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
        scene.blockMaterialDirtyMechanism = true;

        return this;
    }

    protected initFactories(scene: BABYLON.Scene) {
        let assetsManager = this.assetManager;

        this.game.factories['character'] = new Factories.Characters(this.game, scene, assetsManager).initFactory();
        this.game.factories['skeleton'] = new Factories.Skeletons(this.game, scene, assetsManager).initFactory();
        this.game.factories['skeletonWarrior'] = new Factories.SkeletonWarrior(this.game, scene, assetsManager).initFactory();
        this.game.factories['skeletonBoss'] = new Factories.SkeletonBoss(this.game, scene, assetsManager).initFactory();
        this.game.factories['flag'] = new Factories.Flags(this.game, scene, assetsManager).initFactory();
        this.game.factories['chest'] = new Factories.Chest(this.game, scene, assetsManager).initFactory();
        this.game.factories['nature_grain'] = new Factories.Nature(this.game, scene, assetsManager).initFactory();

        return this;
    }

    public abstract initScene(game: Game);
}
