/// <reference path="controllers/Keyboard.ts"/>
/// <reference path="scenes/Simple.ts"/>
/// <reference path="../babylon/babylon.2.5.d.ts"/>

class Game {
    
    public scene: BABYLON.Scene;
    public controller: Keyboard;
    public canvas: HTMLCanvasElement;
    public engine: BABYLON.Engine;
    public player: Player;
    public remotePlayers;
    public client: SocketIOClient;
    public items;
    public environment;
    public characters;
    public shadowGenerator: BABYLON.ShadowGenerator;

    constructor(canvasElement : HTMLCanvasElement) {
        this.canvas = canvasElement;
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.controller = new Keyboard(this);
        this.client = new SocketIOClient(this);
        this.items = [];
        this.environment = [];
        this.characters = [];
    }

    createScene() : void {
            new Simple(this, 'simple');
            // new BABYLON.Sound("Music", "assets/musicDoman.mp3", newScene, null, { loop: true, autoplay: true });
            // var myAnalyser = new BABYLON.Analyser(newScene);
            // myAnalyser.DEBUGCANVASPOS.x = 240;
            // myAnalyser.DEBUGCANVASPOS.y = 30;
            // BABYLON.Engine.audioEngine.connectToAnalyser(myAnalyser);
            // myAnalyser.drawDebugCanvas();
    }

    animate() : void {
        window.addEventListener('resize', () => {
            this.engine.resize();
        });
    }
}

