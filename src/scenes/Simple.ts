/// <reference path="/babylon.2.5.d.ts"/>
/// <reference path="Scene.ts"/>
/// <reference path="/game.ts"/>

class Simple extends Scene {

    constructor(game:Game, name:string) {
        super(game, name);
        let assetsManager = this.assetsManager;
        BABYLON.SceneLoader.Load("", "assets/small_scene.babylon", game.engine, function (scene) {
            game.scene = scene;
            assetsManager = new BABYLON.AssetsManager(scene);

            scene.executeWhenReady(function () {
                scene.debugLayer.show();
                scene.activeCamera.attachControl(game.canvas);

                this.light = scene.lights[0];
                var shadowGenerator = new BABYLON.ShadowGenerator(1024, this.light);
                shadowGenerator.useBlurVarianceShadowMap = true;

                for (var i = 0; i < scene.meshes.length; i++) {
                    var sceneMesh = scene.meshes[i];
                    var meshName = scene.meshes[i]['name'];
                    if (meshName.indexOf("road") >= 0) {
                        sceneMesh.receiveShadows = true;
                    } else {
                        shadowGenerator.getShadowMap().renderList.push(sceneMesh);
                    }
                }

                var character = assetsManager.addMeshTask("batman", "", "assets/", "character.babylon");
                assetsManager.onTaskSuccess = function (task) {
                    for (var i = 0; i < task.loadedMeshes.length; i++) {
                        var mesh = task.loadedMeshes[i];
                        mesh.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);
                        mesh.position.x = -3;
                        mesh.rotation.y = 30;
                        game.player = mesh;
                        shadowGenerator.getShadowMap().renderList.push(mesh);
                    }
                };
                assetsManager.load();

                assetsManager.onFinish = function () {
                    window.addEventListener("keydown", function (event) {
                        game.controller.handleKeyUp(event);
                    });
                    window.addEventListener("keyup", function (event) {
                        game.controller.handleKeyDown(event);
                    }, false);
                };

                game.engine.runRenderLoop(() => {
                    scene.render();
                    if (game.controller.left == true) {
                        game.player.rotate(BABYLON.Axis.Y, -0.05, BABYLON.Space.LOCAL);
                    }
                    if (game.controller.right == true) {
                        game.player.rotate(BABYLON.Axis.Y, 0.05, BABYLON.Space.LOCAL);
                    }
                    if (game.controller.back == true) {
                        game.player.translate(BABYLON.Axis.Z, 0.5, BABYLON.Space.LOCAL);
                    }
                    if (game.controller.forward == true) {
                        game.player.translate(BABYLON.Axis.Z, -0.5, BABYLON.Space.LOCAL);
                    }
                });

            });
        });

    }


}