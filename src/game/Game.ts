import * as BABYLON from 'babylonjs';
import {Scene} from "./Scenes/Scene";
import {Mouse} from "./Controllers/Mouse";
import {Player} from "./Characters/Player";
import {SocketClient} from "./SocketClient/socketClient";
import {Events} from "./Events/Events";
import {Main} from "./GUI/Main";
import {SlavsLoader} from "./Loader/SlavsLoader";

export class Game {

    static SHOW_COLLIDERS = 0;
    static SHOW_DEBUG = 0;
    static MOBILE_CLIENT = false;

    public controller: Mouse;
    public engine: BABYLON.Engine;
    public socketClient: SocketClient;
    public player: Player;
    public gui: Main;
    public activeScene: Scene;
    public events: Events;

    constructor(canvasElement: HTMLCanvasElement, serverUrl: string, accessToken: string, isMobile: boolean = false, isDebug: boolean = false) {
        if (isDebug) {
            Game.SHOW_DEBUG = 1;
        }
        Game.MOBILE_CLIENT = isMobile;

        this.engine = new BABYLON.Engine(canvasElement, false, null, false);
        this.engine.loadingScreen = new SlavsLoader('Initialize engine');
        this.controller = new Mouse(this);
        this.socketClient = new SocketClient(this);
        this.events = new Events();

        this.socketClient.connect(serverUrl, accessToken);
        this.resizeListener();
    }

    getBabylonScene(): BABYLON.Scene {
        return (this.activeScene) ? this.activeScene.babylonScene : null;
    }

    getSceneManger(): Scene {
        return (this.activeScene) ? this.activeScene : null;
    }

    setScene(scene: Scene): Game {
        this.activeScene = scene;

        return this;
    }

    resizeListener(): Game {
        let self = this;
        window.addEventListener('resize', () => {
            self.engine.resize();
        });

        return this;
    }

    public changeScene(newScene: Scene) {
        this.engine.stopRenderLoop();
        this.socketClient.clearEvents();

        let sceneToDispose = this.getBabylonScene();
        if (sceneToDispose) {
            setTimeout(function () {
                sceneToDispose.dispose();
            });
        }
        this.activeScene = null;

        newScene.initScene(this);
    }

    public static randomNumber(minimum: number, maximum: number): number {
        return Math.round(Math.random() * (maximum - minimum) + minimum);
    }

    public static distanceVector(vectorFrom: BABYLON.Vector3, vectorTo: BABYLON.Vector3) {
        let dx = vectorFrom.x - vectorTo.x;
        let dy = vectorFrom.y - vectorTo.y;
        let dz = vectorFrom.z - vectorTo.z;

        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

}

