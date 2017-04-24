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
        BABYLON.SceneLoader.Load("", "assets/map/mapkaiso_lowpoly.babylon", game.engine, function (scene) {
            game.scene = scene;
            var assetsManager = new BABYLON.AssetsManager(scene);
            scene.executeWhenReady(function () {
                var hpBar = new CASTORGUI.GUIProgress("textDialog", { w: 200, h: 20, x: 10, y: 0, value: 80 }, game.gui);
                hpBar.setVisible(true);
                new CASTORGUI.GUIButton("gui.button.inventory", { x: 15, y: 35, value: "Inventory" }, game.gui, function () {
                    console.log('inwentory');
                    alert('Inwentory');
                });
                var dialog = new CASTORGUI.GUIPanel("Panel", { w: 400, h: 100, x: 15, y: (game.gui.getCanvasSize().height - 110) }, game.gui);
                dialog.setVisible(true);
                dialog.add(new CASTORGUI.GUIText("textDialog", { size: 15, text: "Chat" }, game.gui, true));
                // scene.debugLayer.show();
                var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, 0), scene);
                camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
                camera.orthoTop = 15;
                camera.orthoBottom = 0;
                camera.orthoLeft = -15;
                camera.orthoRight = 15;
                var ratio = window.innerWidth / window.innerHeight;
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
                    }
                    else {
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
                game.engine.runRenderLoop(function () {
                    scene.render();
                });
            });
        });
    }
    return Simple;
}(Scene));
//# sourceMappingURL=Simple.js.map