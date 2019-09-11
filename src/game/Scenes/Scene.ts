import * as BABYLON from 'babylonjs';
import {Game} from "../game";
import {Chest as ChestsObjects} from "../Initializers/Chest";
import {RandomSpecialItem} from "../Initializers/RandomSpecialItem";
import {SlavsLoader} from "../SlavsLoader";
import {Events} from "../Events";
import {GameOptions} from "../Options";
import {AbstractEnvironment} from "../Environment/AbstractEnvironment";
import {Player} from "../Characters/Player";
import {Monster} from "../Characters/Monster";
import {Quests} from "../Initializers/Quests";
import {Skeletons} from "../Factories/Skeletons";
import {SkeletonWarrior} from "../Factories/SkeletonWarrior";
import {SkeletonBoss} from "../Factories/SkeletonBoss";
import {Nature} from "../Factories/Nature";
import {Chest} from "../Factories/Chest";
import {Characters} from "../Factories/characters";
import {AbstractNpc} from "../Characters/npc/AbstractNpc";

export abstract class Scene {
    static TYPE = 0;

    protected game:Game;
    public babylonScene: BABYLON.Scene;
    protected assetManager: BABYLON.AssetsManager;
    public options: GameOptions;
    public environment: AbstractEnvironment;

    /**
     * Dynamic Collections
     */
    public remotePlayers: Array<Player>;
    public npcs: Array<AbstractNpc>;
    public enemies: Array<Monster>;
    public quests: Array<Quests>;
    public chests: Array<ChestsObjects>;
    public randomSpecialItems: Array<RandomSpecialItem>;


    protected setDefaults(game:Game, scene: BABYLON.Scene) {
        BABYLON.SceneLoader.CleanBoneMatrixWeights = true;
        SlavsLoader.showLoaderWithText('Loading game...');
        scene.actionManager = new BABYLON.ActionManager(scene);
        this.assetManager = new BABYLON.AssetsManager(scene);
        this.babylonScene = scene;
        this.game = game;
        this.enemies = [];
        this.quests = [];
        this.randomSpecialItems = [];
        this.chests = [];

        game.setScene(this);
        this.initFactories(scene);

        return this;
    }

    protected playEnemiesAnimationsInFrumStrum() {
        let self = this;
        let game = this.game;
        let scene = this.babylonScene;
        const gameCamera = scene.getCameraByName('gameCamera');
        if(game.frumstrumEnemiesInterval) {
            clearInterval(game.frumstrumEnemiesInterval);
        }

        let battleMusic = new BABYLON.Sound("Forest night", "assets/sounds/music/battle.mp3", scene, null, { loop: true, autoplay: false, volume: 1 });
        let timeoutNumber;

        game.frumstrumEnemiesInterval = setInterval(function() {
            let activeEnemies = 0;
            self.enemies.forEach(function(enemy) {
                if(enemy.isDeath) {
                    return;
                }

                let isActiveMesh = gameCamera.isInFrustum(enemy.mesh);
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
        }, 1000);

        return this;
    }

    protected executeWhenReady(onReady: Function, onPlayerConnected: Function, registerListener: Boolean = true) {
        let scene = this.babylonScene;
        let assetsManager = this.assetManager;
        let self = this;
        let game = this.game;

        scene.executeWhenReady(function () {
            assetsManager.onFinish = function (tasks) {
                game.client.socket.emit('changeScenePre');

                if(onReady) {
                    onReady();
                }

                for (let i = 0; i < scene.meshes.length; i++) {
                    let sceneMesh = scene.meshes[i];
                    sceneMesh.layerMask = 2;
                }

                game.engine.runRenderLoop(() => {
                        scene.render();
                });

                self.playEnemiesAnimationsInFrumStrum();
            };
            assetsManager.onProgress = function(remainingCount, totalCount, lastFinishedTask) {
                SlavsLoader.showLoaderWithText('Loading assets... ' + remainingCount + ' of ' + totalCount + '.');
            };
            assetsManager.load();

            if(registerListener) {
                let listener = function listener() {
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

                    if(Game.SHOW_DEBUG) {
                        scene.debugLayer.show({
                            embedMode: true
                        });
                    }

                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            }
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
        gameCamera.minZ = 15;
        gameCamera.fovMode = 0;
        gameCamera.layerMask = 2;

        ///MOBILE
        if(Game.MOBILE_CLIENT) {
            gameCamera.maxZ = 50;
            gameCamera.fov = 0.8;
        } else {
            gameCamera.maxZ = 100;
            gameCamera.fov = 1.2;
        }

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

        scene.fogStart = 30;
        scene.fogEnd = 50;

        return this;
    }

    public disableFog(scene:BABYLON.Scene) {
        scene.fogMode = BABYLON.Scene.FOGMODE_NONE;
    }

    public optimizeScene(scene:BABYLON.Scene) {
        scene.collisionsEnabled = true;
        scene.fogEnabled = true;
        scene.lensFlaresEnabled = false;
        scene.probesEnabled = false;
        scene.postProcessesEnabled = true;
        scene.spritesEnabled = true;
        scene.audioEnabled = false;

        return this;
    }

    protected initFactories(scene: BABYLON.Scene) {
        let assetsManager = this.assetManager;

        this.game.factories['character'] = new Characters(this.game, scene, assetsManager).initFactory();
        this.game.factories['skeleton'] = new Skeletons(this.game, scene, assetsManager).initFactory();
        this.game.factories['skeletonWarrior'] = new SkeletonWarrior(this.game, scene, assetsManager).initFactory();
        this.game.factories['skeletonBoss'] = new SkeletonBoss(this.game, scene, assetsManager).initFactory();
        this.game.factories['chest'] = new Chest(this.game, scene, assetsManager).initFactory();
        this.game.factories['nature_grain'] = new Nature(this.game, scene, assetsManager).initFactory();

        return this;
    }

    public abstract initScene(game: Game);
}
