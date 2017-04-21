/// <reference path="/babylon/babylon.2.5.d.ts"/>
/// <reference path="Scene.ts"/>
/// <reference path="/src/game.ts"/>

class Simple extends Scene {

    constructor(game:Game, name:string) {
        super(game, name);

        BABYLON.SceneLoader.Load("", "assets/map/mapkaiso_lowpoly.babylon", game.engine, function (scene) {
            game.scene = scene;
            let assetsManager = new BABYLON.AssetsManager(scene);
            scene.executeWhenReady(function () {

                // scene.debugLayer.show();
                var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 15, 1), scene);
                camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
                camera.orthoTop = 15;
                camera.orthoBottom = 0;
                camera.orthoLeft = -15;
                camera.orthoRight = 15;
                var ratio = window.innerWidth / window.innerHeight ;
                var zoom = camera.orthoTop;
                var newWidth = zoom * ratio;
                camera.orthoLeft = -Math.abs(newWidth);
                camera.orthoRight = newWidth;
                camera.orthoBottom = -Math.abs(zoom);
                scene.activeCamera = camera;

                scene.activeCamera.attachControl(game.canvas);

                scene.lights = scene.lights.slice(2);
                this.light = scene.lights[0];
                this.light.intensity = 2;
                game.shadowGenerator = new BABYLON.ShadowGenerator(2048, this.light);
                game.shadowGenerator.usePoissonSampling = true;
                game.shadowGenerator.useExponentialShadowMap = true;
                game.shadowGenerator.useBlurExponentialShadowMap = true;

                var shadowGenerator = game.shadowGenerator;

                for (var i = 0; i < scene.meshes.length; i++) {
                    var sceneMesh = scene.meshes[i];
                    var meshName = scene.meshes[i]['name'];
                    if (meshName.search("ground") >= 0) {
                        sceneMesh.receiveShadows = true;
                    } else {
                        shadowGenerator.getShadowMap().renderList.push(sceneMesh);
                    }
                }

                new Items(assetsManager, game);
                new Characters(assetsManager, game);
                // new Environment(assetsManager, game);

                assetsManager.load();

                assetsManager.onFinish = function () {
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