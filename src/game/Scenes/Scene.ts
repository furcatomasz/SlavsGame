import * as BABYLON from 'babylonjs';
import {Game} from "../Game";
import {Chest as ChestsObjects} from "../Initializers/Chest";
import {RandomSpecialItem} from "../Initializers/RandomSpecialItem";
import {SlavsLoader} from "../Loader/SlavsLoader";
import {Events} from "../Events/Events";
import {GameOptions} from "../Options/Options";
import {AbstractEnvironment} from "../Environment/AbstractEnvironment";
import {Player} from "../Characters/Player";
import {Monster} from "../Characters/Monster";
import {Quests} from "../Initializers/Quests";
import {AbstractNpc} from "../Characters/npc/AbstractNpc";
import {Assets} from "../AssetsFactories/Assets";
import {GameCamera} from "../Cameras/GameCamera";
import {PathFinder} from "../PathFinder/PathFinder";

export abstract class Scene {
    static TYPE = 0;

    protected game: Game;
    public babylonScene: BABYLON.Scene;
    protected assetManager: BABYLON.AssetsManager;
    public options: GameOptions;
    // public environment: AbstractEnvironment;
    public environment: any;
    public enemiesActiveTargets: Array<any> = [];
    public battleMusic: BABYLON.Sound;
    /**
     * Dynamic Collections
     */
    public remotePlayers: Array<Player> = [];
    public npcs: Array<AbstractNpc> = [];
    public enemies: Array<Monster> = [];
    public quests: Array<Quests> = [];
    public chests: Array<ChestsObjects> = [];
    public randomSpecialItems: Array<RandomSpecialItem> = [];

    /**
     * Assets
     */
    public assets: Assets;

    /**
     *  Interval with checking enemies in frumstrum
     */
    public frumstrumEnemiesInterval;

    /**
     *  Player go to action
     */
    public goToAction: BABYLON.Observer<any>;

    protected setDefaults(game: Game, scene: BABYLON.Scene, selectCharacterCamera: boolean = false) {
        BABYLON.SceneLoader.CleanBoneMatrixWeights = true;
        SlavsLoader.showLoaderWithText('Loading game...');
        scene.actionManager = new BABYLON.ActionManager(scene);
        this.assetManager = new BABYLON.AssetsManager(scene);
        this.assets = new Assets(scene);
        this.babylonScene = scene;
        this.game = game;

        scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
        scene.collisionsEnabled = true;
        scene.fogEnabled = true;
        scene.lensFlaresEnabled = false;
        scene.probesEnabled = false;
        scene.postProcessesEnabled = true;
        scene.spritesEnabled = true;
        scene.audioEnabled = false;

        game.setScene(this);
        GameCamera.initCameraInScene(scene);

        this.battleMusic = new BABYLON.Sound("BattleMusic", "assets/sounds/music/battle.mp3", scene, null, {
            loop: true,
            autoplay: false,
            volume: 1
        });

        return this;
    }

    public playBattleMusic() {
        this.battleMusic.play();
    }

    public stopBattleMusic() {
        let self = this;
        self.battleMusic.setVolume(0, 2);
        setTimeout(() => {
            self.battleMusic.stop();
        }, 2000)
    }

    protected playEnemiesAnimationsInFrumStrum() {
        let self = this;
        let scene = this.babylonScene;
        const gameCamera = scene.getCameraByName('gameCamera');

        clearInterval(this.frumstrumEnemiesInterval);
        this.frumstrumEnemiesInterval = setInterval(() => {
            self.enemies.forEach(enemy => {
                if (enemy.isDeath) {
                    return;
                }

                let isActiveMesh = gameCamera.isInFrustum(enemy.mesh);
                if (!enemy.animation && isActiveMesh) {
                    enemy.runAnimationStand();
                } else if (enemy.animation && !isActiveMesh) {
                    enemy.animation.stop();
                    enemy.animation = null;
                }
            });
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
                game.socketClient.socket.emit('changeScenePre');

                if (onReady) {
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
            assetsManager.onProgress = function (remainingCount, totalCount, lastFinishedTask) {
                SlavsLoader.showLoaderWithText('Loading assets... ' + remainingCount + ' of ' + totalCount + '.');
            };
            assetsManager.load();

            if (registerListener) {
                let listener = function listener() {
                    if (onPlayerConnected) {
                        onPlayerConnected();
                    }

                    self.options = new GameOptions(game);
                    self.options.addMeshToDynamicShadowGenerator(game.player.mesh);
                    game.controller.registerControls(scene);
                    game.socketClient.socket.emit('changeScenePost');
                    game.socketClient.socket.emit('refreshGateways');
                    game.socketClient.socket.emit('refreshQuests');
                    game.socketClient.socket.emit('refreshChests');
                    game.socketClient.socket.emit('refreshRandomSpecialItems');

                    if (Game.SHOW_DEBUG) {
                        scene.debugLayer.show({
                            embedMode: true
                        });
                    }

                    // self.pathFinder.createNavMeshAndCrowd(game, self.environment.ground);
                    // self.pathFinder.addAgent(game.player.meshForMove);

                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            }
        });

        return this;
    }

    public abstract initScene(game: Game);
}
