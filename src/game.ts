/// <reference path="../bower_components/babylonjs/dist/babylon.d.ts"/>
/// <reference path="controllers/Keyboard.ts"/>
/// <reference path="scenes/Simple.ts"/>
/// <reference path="socketIOClient.ts"/>

class Game {

    public sceneManager: Scene;
    public controller: Controller;
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
    public scenesDisposed: Array<BABYLON.Scene>;
    public remotePlayers: Array<Player>;
    public enemies: Array<Monster>;

    /**
     * States
     */
    public activeScene: number;

    /**
     * Events
     */
    public events: Events;

    constructor(canvasElement: HTMLCanvasElement) {
        let serverUrl = window.location.hostname + ':3003';

        this.canvas = canvasElement;
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.controller = new Mouse(this);
        this.client = new SocketIOClient(this);
        this.client.connect(serverUrl);
        this.factories = [];
        this.enemies = [];
        this.scenes = [];
        this.scenesDisposed = [];
        this.activeScene = null;
        this.events = new Events();

        this.createScene().animate();
    }

    getScene(): BABYLON.Scene {
        return this.scenes[this.activeScene];
    }

    createScene(): Game {
        new Simple().initScene(this);

        return this;
    }

    animate(): Game {
        let self = this;
        this.engine.runRenderLoop(() => {
            if (this.activeScene != null) {
                self.getScene().render();
            }

            if(self.scenesDisposed.length > 0) {
                for (let i = 0; i < self.scenesDisposed.length; i++) {
                    let sceneToDispose = self.scenesDisposed[i];
                    sceneToDispose.dispose();
                }
                self.scenesDisposed = [];
            }
        });


        window.addEventListener('resize', () => {
            this.engine.resize();
        });

        return this;
    }

    public static randomNumber(minimum: number, maximum: number): number {
        return Math.round(Math.random() * (maximum - minimum) + minimum);
    }

}

