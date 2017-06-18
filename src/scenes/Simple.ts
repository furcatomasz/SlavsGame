/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../objects/characters.ts"/>
/// <reference path="../objects/items.ts"/>
/// <reference path="../objects/environment.ts"/>
/// <reference path="../../map01.d.ts"/>

class Simple extends Scene {

    constructor(game:Game) {
        super(game);
        let self = this;
        game.sceneManager = this;

        let scene = new BABYLON.Scene(game.engine);
        map01a.initScene(scene, 'assets/scenes/map01a');
        //scene.debugLayer.show();
        game.scenes.push(scene);

        light0 = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 0, 0), scene);
        light0.diffuse = new BABYLON.Color3(1, 1, 1);
        light0.specular = new BABYLON.Color3(0, 0, 0);
        light0.specular = new BABYLON.Color3(0, 0, 0);
        light0.intensity = 0.7;
        scene.lights[0] = light0;

        self.setCamera(scene);
        self.setShadowGenerator(scene.lights[0]);
        //self.createGameGUI();

        var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
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


}