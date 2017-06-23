/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../objects/characters.ts"/>
/// <reference path="../objects/items.ts"/>
/// <reference path="../objects/environment.ts"/>
/// <reference path="../../map01.d.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Simple = (function (_super) {
    __extends(Simple, _super);
    function Simple(game) {
        var _this = this;
        var scene = new BABYLON.Scene(game.engine);
        game.sceneManager = _this;
        map01.initScene(scene, 'assets/scenes/map01a');
        _this = _super.call(this, game) || this;
        //scene.debugLayer.show();
        game.scenes.push(scene);
        scene.lights[0].intensity = 0.4;
        _this.setCamera(scene);
        _this.setShadowGenerator(scene.lights[0]);
        //this.createGameGUI();
        new Environment(game, scene);
        new Characters(game, scene);
        new Items(game, scene);
        game.client.connect(serverUrl);
        window.addEventListener("keydown", function (event) {
            game.controller.handleKeyUp(event);
        });
        window.addEventListener("keyup", function (event) {
            game.controller.handleKeyDown(event);
        }, false);
        return _this;
    }
    return Simple;
}(Scene));
//# sourceMappingURL=Simple.js.map