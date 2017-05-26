/// <reference path="/babylon/babylon.2.5.d.ts"/>
/// <reference path="Scene.ts"/>
/// <reference path="/src/game.ts"/>

class Simple extends Scene {

    constructor(game:Game, name:string) {
        super(game, name);
        let self = this;
        game.sceneManager = this;
        BABYLON.SceneLoader.Load("", "assets/map/mapkaiso_lowpoly.babylon", game.engine, function (scene) {
            game.scene = scene;
            let assetsManager = new BABYLON.AssetsManager(scene);
            scene.executeWhenReady(function () {
                // scene.debugLayer.show();
                scene.collisionsEnabled = false;
                scene.lights = scene.lights.slice(2);
                this.light = scene.lights[0];
                this.light.intensity = 2;

                self.setShadowGenerator(this.light);
                self.setCamera();
                self.createGameGUI();

                var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
                var physicsPlugin = new BABYLON.CannonJSPlugin();
                scene.enablePhysics(gravityVector, physicsPlugin);

                new Items(assetsManager, game);
                new Characters(assetsManager, game);
                new Environment(game);

                assetsManager.load();
                assetsManager.onFinish = function () {
                    new Enemy(game);
                    game.client.connect('127.0.0.1:3003');

                    window.addEventListener("keydown", function (event) {
                        game.controller.handleKeyUp(event);
                    });

                    window.addEventListener("keyup", function (event) {
                        game.controller.handleKeyDown(event);
                    }, false);
                };

                game.engine.runRenderLoop(() => {
                    scene.render();
                });

            });
        });

    }


}