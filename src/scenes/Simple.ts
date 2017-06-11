/// <reference path="../../babylon/babylon.2.5.d.ts"/>
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../objects/characters.ts"/>
/// <reference path="../objects/items.ts"/>
/// <reference path="../objects/environment.ts"/>

class Simple extends Scene {

    constructor(game:Game, name:string) {
        super(game, name);
        let self = this;
        game.sceneManager = this;

        let scene = new BABYLON.Scene(game.engine);
            let assetsManager = new BABYLON.AssetsManager(scene);
        map01.initScene(scene);
                 //scene.debugLayer.show();

        game.scene = scene;
        self.setCamera();
        self.setShadowGenerator(scene.lights[0]);
        self.createGameGUI();


        var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
        var physicsPlugin = new BABYLON.CannonJSPlugin();
        scene.enablePhysics(gravityVector, physicsPlugin);

        new Environment(game);
        new Characters(assetsManager, game);
        new Items(assetsManager, game);

        assetsManager.load();
        assetsManager.onFinish = function () {
            game.client.connect(serverUrl);
            window.addEventListener("keydown", function (event) {
                game.controller.handleKeyUp(event);
            });

            window.addEventListener("keyup", function (event) {
                game.controller.handleKeyDown(event);
            }, false);

            game.engine.runRenderLoop(() => {
                scene.render();
            });
        };


        //BABYLON.SceneLoader.Load("", "assets/map/mapkaiso_lowpoly.babylon", game.engine, function (scene) {
        //    game.scene = scene;
        //    let assetsManager = new BABYLON.AssetsManager(scene);
        //    scene.executeWhenReady(function () {
        //        // scene.debugLayer.show();
        //        scene.collisionsEnabled = false;
        //        scene.lights = scene.lights.slice(2);
        //        this.light = scene.lights[0];
        //        this.light.intensity = 2;
        //
        //        self.setShadowGenerator(this.light);
        //        self.setCamera();
        //        self.createGameGUI();
        //
        //        var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
        //        var physicsPlugin = new BABYLON.CannonJSPlugin();
        //        scene.enablePhysics(gravityVector, physicsPlugin);
        //
        //        new Items(assetsManager, game);
        //        new Characters(assetsManager, game);
        //        new Environment(game);
        //
        //        assetsManager.load();
        //        assetsManager.onFinish = function () {
        //            game.client.connect(serverUrl);
        //            window.addEventListener("keydown", function (event) {
        //                game.controller.handleKeyUp(event);
        //            });
        //
        //            window.addEventListener("keyup", function (event) {
        //                game.controller.handleKeyDown(event);
        //            }, false);
        //        };
        //
        //        game.engine.runRenderLoop(() => {
        //            scene.render();
        //        });
        //
        //    });
        //});

    }


}