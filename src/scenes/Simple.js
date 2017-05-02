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
                scene.debugLayer.show();
                ///1
                var dialogUser = new CASTORGUI.GUIPanel("Panel1", { w: 300, h: 50, x: 10, y: 20 }, game.gui);
                dialogUser.setVisible(true);
                dialogUser.add(new CASTORGUI.GUIText("You", { size: 15, text: "You", x: 10 }, game.gui, true));
                var hpBar = new CASTORGUI.GUIProgress("hpbar_you", { w: 280, h: 20, x: 10, y: 20, value: 100 }, game.gui);
                hpBar.setVisible(false);
                game.guiElements.hpBar = hpBar;
                dialogUser.add(hpBar);
                ///2
                var dialogEnemy = new CASTORGUI.GUIPanel("Panel2", { w: 300, h: 50, x: 10, y: 100 }, game.gui);
                dialogEnemy.setVisible(true);
                dialogEnemy.add(new CASTORGUI.GUIText("Enemy", { size: 15, text: "Enemy", x: 10 }, game.gui, true));
                var hpBarEnemy = new CASTORGUI.GUIProgress("hpbar_enemy", { w: 280, h: 20, x: 10, y: 20, value: 100 }, game.gui);
                hpBarEnemy.setVisible(false);
                game.guiElements.hpBarEnemy = hpBarEnemy;
                dialogEnemy.add(hpBarEnemy);
                //new CASTORGUI.GUIButton("gui.button.inventory", {x:15,y:35, value:"Inventory"}, game.gui, function() {
                //    console.log('inwentory');
                //    alert('Inwentory');
                //})
                var dialog = new CASTORGUI.GUIPanel("Panel", { w: 400, h: 100, x: 15, y: (game.gui.getCanvasSize().height - 110) }, game.gui);
                dialog.setVisible(true);
                dialog.add(new CASTORGUI.GUIText("textDialog", { size: 15, text: "Chat" }, game.gui, true));
                console.log(scene);
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
                game.shadowGenerator.bias = 0.00001;
                game.shadowGenerator.setDarkness(0.5);
                game.shadowGenerator.usePoissonSampling = true;
                game.shadowGenerator.useExponentialShadowMap = true;
                game.shadowGenerator.useBlurExponentialShadowMap = true;
                var shadowGenerator = game.shadowGenerator;
                for (var i = 0; i < scene.meshes.length; i++) {
                    var sceneMesh = scene.meshes[i];
                    var meshName = scene.meshes[i]['name'];
                    if (meshName == "Cone") {
                        var smokeParticlesA = new BABYLON.ParticleSystem("particles", 1000, scene);
                        smokeParticlesA.particleTexture = new BABYLON.Texture("/assets/Smoke3.png", scene);
                        smokeParticlesA.emitter = sceneMesh;
                        smokeParticlesA.minEmitBox = new BABYLON.Vector3(-0.5, 1, -0.5); // Starting all from
                        smokeParticlesA.maxEmitBox = new BABYLON.Vector3(0.5, 1, 0.5); // To...
                        smokeParticlesA.color1 = new BABYLON.Color4(0.05, 0.05, 0.05, 0.75);
                        smokeParticlesA.color2 = new BABYLON.Color4(0.15, 0.15, 0.15, 0.75);
                        smokeParticlesA.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
                        smokeParticlesA.minSize = 1.0;
                        smokeParticlesA.maxSize = 2.0;
                        smokeParticlesA.minLifeTime = 0.4;
                        smokeParticlesA.maxLifeTime = 0.8;
                        smokeParticlesA.emitRate = 50;
                        // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
                        smokeParticlesA.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
                        smokeParticlesA.gravity = new BABYLON.Vector3(0, 0, 0);
                        smokeParticlesA.direction1 = new BABYLON.Vector3(-1.5, 8, -1.5);
                        smokeParticlesA.direction2 = new BABYLON.Vector3(1.5, 8, 1.5);
                        smokeParticlesA.minAngularSpeed = -10.0;
                        smokeParticlesA.maxAngularSpeed = 10.0;
                        smokeParticlesA.minEmitPower = 0.5;
                        smokeParticlesA.maxEmitPower = 1.5;
                        smokeParticlesA.updateSpeed = 0.005;
                        smokeParticlesA.start();
                    }
                    if (meshName.search("ground") >= 0) {
                        sceneMesh.receiveShadows = true;
                    }
                    else {
                        shadowGenerator.getShadowMap().renderList.push(sceneMesh);
                    }
                    sceneMesh.receiveShadows = true;
                }
                new Items(assetsManager, game);
                new Characters(assetsManager, game);
                //new Environment(assetsManager, game);
                assetsManager.load();
                var enemy = null;
                assetsManager.onFinish = function () {
                    game.client.connect('127.0.0.1:3003');
                    enemy = new Enemy(game);
                    window.addEventListener("keydown", function (event) {
                        game.controller.handleKeyUp(event);
                    });
                    window.addEventListener("keyup", function (event) {
                        game.controller.handleKeyDown(event);
                    }, false);
                };
                game.engine.runRenderLoop(function () {
                    scene.render();
                    if (game.player && enemy) {
                        enemy.character.mesh.lookAt(game.player.character.mesh.position);
                        if (game.player.character.items.weapon.intersectsMesh(enemy.character.mesh, false)) {
                            enemy.character.mesh.material.emissiveColor = new BABYLON.Color4(1, 0, 0, 1);
                            var value = game.guiElements.hpBarEnemy.getValue();
                            game.guiElements.hpBarEnemy.updateValue(value - 1);
                        }
                        else {
                            enemy.character.mesh.material.emissiveColor = new BABYLON.Color4(0, 0, 0, 0);
                        }
                        if (enemy.character.items.weapon.intersectsMesh(game.player.character.mesh, false)) {
                            console.log(game.guiElements);
                            game.player.character.mesh.material.emissiveColor = new BABYLON.Color4(1, 0, 0, 1);
                            var value = game.guiElements.hpBar.getValue();
                            game.guiElements.hpBar.updateValue(value - 1);
                        }
                        else {
                            game.player.character.mesh.material.emissiveColor = new BABYLON.Color4(0, 0, 0, 0);
                        }
                    }
                    if (game.guiElements.hpBarEnemy.getValue() <= 0) {
                        game.guiElements.hpBarEnemy.updateValue(100);
                    }
                });
            });
        });
    }
    return Simple;
})(Scene);
//# sourceMappingURL=Simple.js.map