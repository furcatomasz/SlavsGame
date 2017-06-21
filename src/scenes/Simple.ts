/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../objects/characters.ts"/>
/// <reference path="../objects/items.ts"/>
/// <reference path="../objects/environment.ts"/>
/// <reference path="../../map01.d.ts"/>

class Simple extends Scene {

    constructor(game:Game) {
        let scene = new BABYLON.Scene(game.engine);
        game.sceneManager = this;
        map01.initScene(scene, 'assets/scenes/map01a');
        super(game);


        //scene.debugLayer.show();
        game.scenes.push(scene);
        scene.lights[0].intensity = 0.4;

        this.setCamera(scene);
        this.setShadowGenerator(scene.lights[0]);
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

    }


}