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
    public gui: CASTORGUI.GUIManager;
    public player: Player;
    public remotePlayers;
    public client: SocketIOClient;
    public items;
    public characters;
    public guiElements;
    public enemies;

    constructor(canvasElement : HTMLCanvasElement) {
        this.canvas = canvasElement;
        var css = "button{cursor:pointer;} #textDialog{margin:6px;}";
        var options = {themeRoot: "../gui/", themeGUI: "default"};
        this.gui = new CASTORGUI.GUIManager(this.canvas, css, options);
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.controller = new Keyboard(this);
        this.client = new SocketIOClient(this);
        this.items = [];
        this.characters = [];
        this.guiElements = [];
        this.enemies = [];
    }

    createScene() : void {
            new Simple(this, 'simple');
    }

    animate() : void {
        window.addEventListener('resize', () => {
            this.engine.resize();
        });
    }
}

