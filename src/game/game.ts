import * as BABYLON from 'babylonjs';
import {Scene} from "./Scenes/Scene";
import {Mouse} from "./Controllers/Mouse";
import {Player} from "./Characters/Player";
import {SocketIOClient} from "./socketIOClient";
import {Events} from "./Events";
import {Main} from "./GUI/Main";
import {SlavsLoader} from "./SlavsLoader";

export class Game {

    static SHOW_COLLIDERS = 0;
    static SHOW_DEBUG = 1;
    static MOBILE_CLIENT = false;

    public controller: Mouse;
    public engine: BABYLON.Engine;
    public socketClient: SocketIOClient;
    public player: Player;
    public gui: Main;

    public activeScene: Scene;
    public events: Events;

    constructor(canvasElement: HTMLCanvasElement, serverUrl: string, accessToken: string, isMobile: boolean = false, isDebug: boolean = false) {
        let self = this;

        self.engine = new BABYLON.Engine(canvasElement, false, null, false);

        if (isDebug) {
            Game.SHOW_DEBUG = 1;
        }
        Game.MOBILE_CLIENT = isMobile;
        self.engine.loadingScreen = new SlavsLoader('Initialize engine');
        self.controller = new Mouse(self);
        self.socketClient = new SocketIOClient(self);
        self.events = new Events();

        self.socketClient.connect(serverUrl, accessToken);
        self.reiszeListener();
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

    reiszeListener(): Game {
        let self = this;
        window.addEventListener('resize', () => {
            self.engine.resize();
        });

        return this;
    }

    public changeScene(newScene: Scene) {
        let self = this;
        this.engine.stopRenderLoop();
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

