/// <reference path="../bower_components/babylonjs/dist/babylon.d.ts" />
/// <reference path="../bower_components/babylonjs/dist/gui/babylon.gui.d.ts" />

class Game {

    static SHOW_COLLIDERS = 0;
    static SHOW_DEBUG = 0;

    public sceneManager: Scene;
    public controller: Mouse;
    public canvas: HTMLCanvasElement;
    public engine: BABYLON.Engine;
    public player: Player;
    public client: SocketIOClient;
    public gui: GUI.Main;

    /**
     * Invisible meshes
     */
    public factories: Array<Factories.AbstractFactory>;

    /**
     * Dynamic Collections
     */
    public scenes: Array<BABYLON.Scene>;
    public remotePlayers: Array<Player>;
    public npcs: Array<NPC.AbstractNpc>;
    public enemies: Array<Monster>;
    public quests: Array<0>;
    public chests: Array<Initializers.Chest>;
    public mushrooms: Array<Initializers.Chest>;

    /**
     * States
     */
    public activeScene: number;

    /**
     * Events
     */
    public events: Events;

    /**
     *  Interval with checking enemies in frumstrum
     */
    public frumstrumEnemiesInterval;

    constructor(canvasElement: HTMLCanvasElement, serverUrl: string,  accessToken: string, isMobile: boolean = false, isDebug: boolean = false) {
        let self = this;

        self.canvas = canvasElement;
        self.engine = new BABYLON.Engine(self.canvas, false, null, false);

        if(isMobile) {
            self.engine.setHardwareScalingLevel(2);
        }
        if(isDebug) {
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
        self.mushrooms = [];
        self.chests = [];
        self.activeScene = null;
        self.events = new Events();

        self.client.connect(serverUrl, accessToken);
        self.animate();
    }

    getScene(): BABYLON.Scene {
        return this.scenes[this.activeScene];
    }

    animate(): Game {
        let self = this;
        this.engine.runRenderLoop(() => {
            if (this.activeScene != null && self.getScene().activeCamera) {
                self.getScene().render();
            }
        });

        window.addEventListener('resize', () => {
            self.engine.resize();
        });

        return this;
    }

    public changeScene(newScene: Scene) {
        let sceneToDispose = this.getScene();
        if(sceneToDispose) {
            setTimeout(function () {
                sceneToDispose.dispose();
            });
        }
        this.activeScene = null;
        this.controller.forward = false;

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

