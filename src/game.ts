/// <reference path="../bower_components/babylonjs/dist/preview release/babylon.d.ts" />
/// <reference path="../bower_components/babylonjs/dist/preview release/gui/babylon.gui.d.ts" />

class Game {

    static SHOW_COLLIDERS = 0;
    static SHOW_DEBUG = 1;
    static MOBILE_CLIENT = false;

    public sceneManager: Scene;
    public controller: Mouse;
    public canvas: HTMLCanvasElement;
    public engine: BABYLON.Engine;
    public player: Player;
    public client: SocketIOClient;
    public gui: GUI.Main;

    /**
     * Assets
     */
    public factories: Array<Factories.AbstractFactory>;

    /**
     * Dynamic Collections
     */
    public remotePlayers: Array<Player>;

    /**
     * Active scene
     */
    public activeScene: Scene;

    /**
     * Events
     */
    public events: Events;

    /**
     *  Interval with checking enemies in frumstrum
     */
    public frumstrumEnemiesInterval;

    /**
     *  Interval with checking enemies in frumstrum
     */
    public goToMeshFunction;

    constructor(canvasElement: HTMLCanvasElement, serverUrl: string,  accessToken: string, isMobile: boolean = false, isDebug: boolean = false) {
        let self = this;

        self.canvas = canvasElement;
        self.engine = new BABYLON.Engine(self.canvas, false, null, false);

        if(isDebug) {
            Game.SHOW_DEBUG = 1;
        }
        Game.MOBILE_CLIENT = isMobile;
        self.engine.loadingScreen = new SlavsLoader('');
        self.controller = new Mouse(self);
        self.client = new SocketIOClient(self);
        self.events = new Events();
        this.clearObjectCollections();

        self.client.connect(serverUrl, accessToken);
        self.reiszeListener();
    }

    private clearObjectCollections(): Game {
        this.factories = [];
        this.remotePlayers = [];

        return this;
    }

    getScene(): BABYLON.Scene {
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
        this.engine.stopRenderLoop();
        let sceneToDispose = this.getScene();
        if(sceneToDispose) {
            this.clearObjectCollections();
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

    public static distanceVector(vectorFrom:BABYLON.Vector3, vectorTo:BABYLON.Vector3) {
        let dx = vectorFrom.x - vectorTo.x;
        let dy = vectorFrom.y - vectorTo.y;
        let dz = vectorFrom.z - vectorTo.z;

        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

}

