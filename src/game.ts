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
    public remotePlayers: Array<Player>;
    public npcs: Array<NPC.AbstractNpc>;
    public enemies: Array<Monster>;
    public quests: Array<Quests.AbstractQuest>;

    /**
     * States
     */
    public activeScene: number;

    /**
     * Events
     */
    public events: Events;

    constructor(canvasElement: HTMLCanvasElement) {
        let serverUrl = window.location.hostname + ':'+gameServerPort;

        this.canvas = canvasElement;
        this.engine = new BABYLON.Engine(this.canvas, false, null, false);
        this.controller = new Mouse(this);
        this.client = new SocketIOClient(this);
        this.client.connect(serverUrl);
        this.factories = [];
        this.enemies = [];
        this.quests = [];
        this.npcs = [];
        this.scenes = [];
        this.activeScene = null;
        this.events = new Events();

        this.createScene().animate();
    }

    getScene(): BABYLON.Scene {
        return this.scenes[this.activeScene];
    }

    createScene(): Game {
        new SelectCharacter().initScene(this);

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
            self.engine.resize();
            if(self.getScene()) {
                self.sceneManager.setOrthoCameraHeights(self.getScene().activeCamera);
            }
        });

        return this;
    }

    public static randomNumber(minimum: number, maximum: number): number {
        return Math.round(Math.random() * (maximum - minimum) + minimum);
    }

}

