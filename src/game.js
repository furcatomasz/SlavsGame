/// <reference path="controllers/Keyboard.ts"/>
/// <reference path="scenes/Simple.ts"/>
/// <reference path="../babylon/babylon.2.5.d.ts"/>
/// <reference path="player.ts"/>
/// <reference path="socketIOClient.ts"/>
var Game = (function () {
    function Game(canvasElement) {
        this.canvas = canvasElement;
        this.engine = new BABYLON.Engine(this.canvas, false);
        this.controller = new Keyboard(this);
        this.client = new SocketIOClient(this);
        this.items = [];
        this.characters = [];
        this.enemies = [];
        this.scenes = [];
        this.activeScene = null;
        this.createScene().animate();
    }
    Game.prototype.getScene = function () {
        return this.scenes[this.activeScene];
    };
    Game.prototype.createScene = function () {
        new MainMenu(this);
        this.activeScene = 0;
        return this;
    };
    Game.prototype.animate = function () {
        var _this = this;
        var self = this;
        this.engine.runRenderLoop(function () {
            if (_this.activeScene != null) {
                self.getScene().render();
            }
        });
        window.addEventListener('resize', function () {
            _this.engine.resize();
        });
        return this;
    };
    Game.randomNumber = function (minimum, maximum) {
        return Math.round(Math.random() * (maximum - minimum) + minimum);
    };
    return Game;
}());
//# sourceMappingURL=game.js.map