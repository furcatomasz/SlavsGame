/// <reference path="controllers/Keyboard.ts"/>
/// <reference path="scenes/Simple.ts"/>
/// <reference path="../babylon/babylon.2.5.d.ts"/>
/// <reference path="player.ts"/>
/// <reference path="socketIOClient.ts"/>
var Game = (function () {
    function Game(canvasElement) {
        this.canvas = canvasElement;
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.controller = new Keyboard(this);
        this.client = new SocketIOClient(this);
        this.items = [];
        this.characters = [];
        this.enemies = [];
    }
    Game.prototype.createScene = function () {
        new MainMenu(this, 'mainMenu');
    };
    Game.prototype.animate = function () {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.engine.resize();
        });
    };
    Game.randomNumber = function (minimum, maximum) {
        return Math.round(Math.random() * (maximum - minimum) + minimum);
    };
    return Game;
}());
//# sourceMappingURL=game.js.map