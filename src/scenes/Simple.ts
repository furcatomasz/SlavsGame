/// <reference path="/babylon/babylon.2.5.d.ts"/>
/// <reference path="Scene.ts"/>
/// <reference path="/src/game.ts"/>

class Simple extends Scene {

    constructor(game:Game, name:string) {
        super(game, name);

        BABYLON.SceneLoader.Load("", "assets/small_scene.babylon", game.engine, function (scene) {
            game.scene = scene;
            let assetsManager = new BABYLON.AssetsManager(scene);
            scene.executeWhenReady(function () {

                scene.debugLayer.show();
                scene.activeCamera.attachControl(game.canvas);

                this.light = scene.lights[0];
                game.shadowGenerator = new BABYLON.ShadowGenerator(256, this.light);
                game.shadowGenerator.usePoissonSampling = true;
                game.shadowGenerator.useExponentialShadowMap = true;
                game.shadowGenerator.useBlurExponentialShadowMap = true;

                var shadowGenerator = game.shadowGenerator;

                for (var i = 0; i < scene.meshes.length; i++) {
                    var sceneMesh = scene.meshes[i];
                    var meshName = scene.meshes[i]['name'];
                    if (meshName.indexOf("road") >= 0) {
                        sceneMesh.receiveShadows = true;
                    } else {
                        shadowGenerator.getShadowMap().renderList.push(sceneMesh);
                    }
                }

                new Items(assetsManager, game);
                new Characters(assetsManager, game);
                new Environment(assetsManager, game);

                assetsManager.load();

                assetsManager.onFinish = function () {
                    game.client.connect('127.0.0.1:3000');
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