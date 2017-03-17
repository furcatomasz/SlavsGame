/// <reference path="src/controllers/Keyboard.ts"/>
/// <reference path="src/scenes/Simple.ts"/>
/// <reference path="babylon.2.5.d.ts"/>

class Game {
    
    public scene: BABYLON.Scene;
    public controller: Keyboard;
    public canvas: HTMLCanvasElement;
    public engine: BABYLON.Engine;
    public player;

    constructor(canvasElement : HTMLCanvasElement) {
        this.canvas = canvasElement;
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.controller = new Keyboard();

        // BABYLON.OBJFileLoader.OPTIMIZE_WITH_UV = true;
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

        // the canvas/window resize event handler
        window.addEventListener('resize', () => {
            this.engine.resize();
        });
    }
}

