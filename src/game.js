/// <reference path="controllers/Keyboard.ts"/>
/// <reference path="scenes/Simple.ts"/>
/// <reference path="../babylon/babylon.2.5.d.ts"/>
/// <reference path="player.ts"/>
/// <reference path="socketIOClient.ts"/>
var Game = (function () {
    function Game(canvasElement) {
        this.canvas = canvasElement;
        var css = "button{cursor:pointer;} #textDialog{margin:6px;}";
        var options = { themeRoot: "../gui/", themeGUI: "default" };
        this.gui = new CASTORGUI.GUIManager(this.canvas, css, options);
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.controller = new Keyboard(this);
        this.client = new SocketIOClient(this);
        this.items = [];
        this.characters = [];
        this.guiElements = [];
    }
    Game.prototype.createScene = function () {
        new Simple(this, 'simple');
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