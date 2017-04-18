/// <reference path="/babylon/babylon.2.5.d.ts"/>
/// <reference path="Scene.ts"/>
/// <reference path="/src/game.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Simple = (function (_super) {
    __extends(Simple, _super);
    function Simple(game, name) {
        _super.call(this, game, name);
        BABYLON.SceneLoader.Load("", "assets/small_scene.babylon", game.engine, function (scene) {
            game.scene = scene;
            var assetsManager = new BABYLON.AssetsManager(scene);
            scene.executeWhenReady(function () {
                scene.debugLayer.show();
                scene.activeCamera.attachControl(game.canvas);
                this.light = scene.lights[0];
                var shadowGenerator = new BABYLON.ShadowGenerator(256, this.light);
                for (var i = 0; i < scene.meshes.length; i++) {
                    var sceneMesh = scene.meshes[i];
                    var meshName = scene.meshes[i]['name'];
                    if (meshName.indexOf("road") >= 0) {
                        sceneMesh.receiveShadows = true;
                    }
                    else {
                        shadowGenerator.getShadowMap().renderList.push(sceneMesh);
                    }
                }
                character = assetsManager.addMeshTask("character", "", "assets/animations/character/", "avatar_movements.babylon");
                character.onSuccess = function (task) {
                    console.log(task);
                    for (var i_1 = 0; i_1 < task.loadedMeshes.length; i_1++) {
                        var mesh = task.loadedMeshes[i_1];
                        if (task.name == 'character') {
                            mesh.position.y = 0;
                            mesh.rotation.y = 30;
                            game.characterMesh = mesh;
                        }
                        shadowGenerator.getShadowMap().renderList.push(mesh);
                    }
                };
                new Items(assetsManager, game);
                // new Environment(assetsManager, game);
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
                game.engine.runRenderLoop(function () {
                    scene.render();
                });
            });
        });
    }
    return Simple;
}(Scene));
//# sourceMappingURL=Simple.js.map