/// <reference path="controllers/Keyboard.ts"/>
/// <reference path="scenes/Simple.ts"/>
/// <reference path="../babylon/babylon.2.5.d.ts"/>
/// <reference path="player.ts"/>
/// <reference path="socketIOClient.ts"/>

class Game {

    public scene: BABYLON.Scene;
    public sceneManager: Scene;
    public controller: Keyboard;
    public canvas: HTMLCanvasElement;
    public engine: BABYLON.Engine;
    public player: Player;
    public remotePlayers;
    public client: SocketIOClient;
    public items;
    public characters;
    public enemies;
    public fireLight;

    constructor(canvasElement : HTMLCanvasElement) {
        this.canvas = canvasElement;
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.controller = new Keyboard(this);
        this.client = new SocketIOClient(this);
        this.items = [];
        this.characters = [];
        this.enemies = [];
    }

    createScene() : void {
            new MainMenu(this, 'mainMenu');
    }

    animate() : void {
        window.addEventListener('resize', () => {
            this.engine.resize();
        });
    }

    public static randomNumber(minimum:number, maximum:number): number {
        return Math.round( Math.random() * (maximum - minimum) + minimum);
    }

}

