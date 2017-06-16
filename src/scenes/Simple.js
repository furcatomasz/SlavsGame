/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../objects/characters.ts"/>
/// <reference path="../objects/items.ts"/>
/// <reference path="../objects/environment.ts"/>
/// <reference path="../../map01.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Simple = (function (_super) {
    __extends(Simple, _super);
    function Simple(game) {
        _super.call(this, game);
        var self = this;
        game.sceneManager = this;
        var scene = new BABYLON.Scene(game.engine);
        var assetsManager = new BABYLON.AssetsManager(scene);
        map01.initScene(scene);
        //scene.debugLayer.show();
        game.scenes.push(scene);
        light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 0, 0), scene);
        light0.diffuse = new BABYLON.Color3(1, 1, 1);
        light0.specular = new BABYLON.Color3(0, 0, 0);
        light0.specular = new BABYLON.Color3(0, 0, 0);
        light0.intensity = 0.7;
        console.log(light0);
        scene.lights[0] = light0;
        self.setCamera(scene);
        self.setShadowGenerator(scene.lights[0]);
        //self.createGameGUI();
        var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
        var physicsPlugin = new BABYLON.CannonJSPlugin();
        scene.enablePhysics(gravityVector, physicsPlugin);
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
    }
    return Simple;
})(Scene);
//# sourceMappingURL=Simple.js.map