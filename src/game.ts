/// <reference path="../bower_components/babylonjs/dist/babylon.d.ts"/>
/// <reference path="controllers/Keyboard.ts"/>
/// <reference path="scenes/Simple.ts"/>
/// <reference path="player.ts"/>
/// <reference path="socketIOClient.ts"/>

class Game {

    public sceneManager: Scene;
    public controller: Controller;
    public canvas: HTMLCanvasElement;
    public engine: BABYLON.Engine;
    public player: Player;
    public client: SocketIOClient;

    /**
     * Invisible meshes
     */
    public items;
    public characters;

    /**
     * Dynamic Collections
     */
    public scenes: Array<BABYLON.Scene>;
    public remotePlayers: Array<Player>;
    public enemies: Array<Monster>;

    /**
     * States
     */
    public activeScene: number;

    constructor(canvasElement: HTMLCanvasElement) {
        this.canvas = canvasElement;
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.controller = new Mouse(this);
        this.client = new SocketIOClient(this);
        this.items = [];
        this.characters = [];
        this.enemies = [];
        this.scenes = [];
        this.activeScene = null;

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

