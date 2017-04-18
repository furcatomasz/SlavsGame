/// <reference path="controllers/Keyboard.ts"/>
/// <reference path="scenes/Simple.ts"/>
/// <reference path="../babylon/babylon.2.5.d.ts"/>
var Game = (function () {
    function Game(canvasElement) {
        this.canvas = canvasElement;
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.controller = new Keyboard(this);
    }
    Game.prototype.createScene = function () {
        new Simple(this, 'simple');
        // new BABYLON.Sound("Music", "assets/musicDoman.mp3", newScene, null, { loop: true, autoplay: true });
        // var myAnalyser = new BABYLON.Analyser(newScene);
        // myAnalyser.DEBUGCANVASPOS.x = 240;
        // myAnalyser.DEBUGCANVASPOS.y = 30;
        // BABYLON.Engine.audioEngine.connectToAnalyser(myAnalyser);
        // myAnalyser.drawDebugCanvas();
    };
    Game.prototype.animate = function () {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.engine.resize();
        });
    };
    return Game;
}());
//# sourceMappingURL=game.js.map