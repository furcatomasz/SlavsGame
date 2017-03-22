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
        var assetsManager = this.assetsManager;
        BABYLON.SceneLoader.Load("", "assets/small_scene.babylon", game.engine, function (scene) {
            game.scene = scene;
            assetsManager = new BABYLON.AssetsManager(scene);
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
                // Create fire material
                var fire = new BABYLON.FireMaterial("fire", scene);
                fire.diffuseTexture = new BABYLON.Texture("assets/fireplace/fire.png", scene);
                fire.distortionTexture = new BABYLON.Texture("assets/fireplace/distortion.png", scene);
                fire.opacityTexture = new BABYLON.Texture("assets/fireplace/candleOpacity.png", scene);
                fire.speed = 5.0;
                assetsManager.addMeshTask("character", "", "assets/animations/character/", "avatar_movements.babylon");
                assetsManager.addMeshTask("sword", "", "assets/", "sword.babylon");
                assetsManager.addMeshTask("fireplace", "", "assets/fireplace/", "fireplace.babylon");
                var sword;
                assetsManager.onTaskSuccess = function (task) {
                    for (var i_1 = 0; i_1 < task.loadedMeshes.length; i_1++) {
                        var mesh = task.loadedMeshes[i_1];
                        if (task.name == 'character') {
                            if (mesh.skeleton == undefined) {
                                mesh.visibility = false;
                            }
                            else {
                                mesh.position.y = 0;
                                mesh.rotation.y = 30;
                                game.player = mesh;
                                game.scene.beginAnimation(game.player.skeleton, 45, 80, true);
                            }
                        }
                        if (task.name == 'fireplace') {
                            var sfxFireplace = new BABYLON.Sound("Fire", "assets/fireplace/fireplace.mp3", scene, null, { loop: true, autoplay: true });
                            sfxFireplace.attachToMesh(mesh);
                            mesh.position.x = -0.5;
                            mesh.position.z = -0.9;
                            var plane = BABYLON.Mesh.CreatePlane("fireplane", 1.5, scene);
                            plane.parent = mesh;
                            plane.scaling.x = 0.1;
                            plane.scaling.y = 0.5;
                            plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_Y;
                            plane.material = fire;
                        }
                        if (task.name == 'sword') {
                            sword = mesh;
                        }
                        shadowGenerator.getShadowMap().renderList.push(mesh);
                    }
                };
                assetsManager.load();
                assetsManager.onFinish = function () {
                    mount(sword, game.player, game.player.skeleton, 'hand.R', scene);
                    window.addEventListener("keydown", function (event) {
                        game.controller.handleKeyUp(event);
                    });
                    window.addEventListener("keyup", function (event) {
                        game.controller.handleKeyDown(event);
                    }, false);
                };
                game.engine.runRenderLoop(function () {
                    scene.render();
                    if (game.controller.left == true) {
                        game.player.rotate(BABYLON.Axis.Y, -0.05, BABYLON.Space.LOCAL);
                    }
                    if (game.controller.right == true) {
                        game.player.rotate(BABYLON.Axis.Y, 0.05, BABYLON.Space.LOCAL);
                    }
                    if (game.controller.back == true) {
                        game.player.translate(BABYLON.Axis.Z, 0.01, BABYLON.Space.LOCAL);
                    }
                    if (game.controller.forward == true) {
                        game.player.translate(BABYLON.Axis.Z, -0.01, BABYLON.Space.LOCAL);
                    }
                });
            });
        });
    }
    return Simple;
})(Scene);
function mount(obj, objTo, ske, boneName, scene) {
    var boneIndice = -1;
    for (var i = 0; i < ske.bones.length; i++) {
        if (ske.bones[i].name == boneName) {
            boneIndice = i;
            break;
        }
    }
    var bone = ske.bones[boneIndice];
    obj.attachToBone(bone, objTo);
    obj.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);
    obj.position = new BABYLON.Vector3(0, 0, 0);
    obj.rotation = new BABYLON.Vector3(0, 0, 80);
}
;
//# sourceMappingURL=Simple.js.map