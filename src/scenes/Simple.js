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
        var self = this;
        game.sceneManager = this;
        BABYLON.SceneLoader.Load("", "assets/map/mapkaiso_lowpoly.babylon", game.engine, function (scene) {
            game.scene = scene;
            var assetsManager = new BABYLON.AssetsManager(scene);
            scene.executeWhenReady(function () {
                scene.debugLayer.show();
                scene.lights = scene.lights.slice(2);
                this.light = scene.lights[0];
                this.light.intensity = 2;
                console.log(this.light);
                self.setShadowGenerator(this.light);
                self.setCamera();
                // self.createGameGUI();
                var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
                var physicsPlugin = new BABYLON.CannonJSPlugin();
                scene.enablePhysics(gravityVector, physicsPlugin);
                new Items(assetsManager, game);
                new Characters(assetsManager, game);
                new Environment(game);
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
                        if (game.controller.left) {
                            game.player.character.mesh.rotate(BABYLON.Axis.Y, -0.05, BABYLON.Space.LOCAL);
                        }
                        if (game.controller.right) {
                            game.player.character.mesh.rotate(BABYLON.Axis.Y, 0.05, BABYLON.Space.LOCAL);
                        }
                        game.player.character.mesh.computeWorldMatrix(true);
                        if (game.controller.forward) {
                            var velocity = BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(0, 0, -0.041), game.player.character.mesh.computeWorldMatrix());
                            game.player.character.mesh.moveWithCollisions(velocity);
                            game.player.character.runAnimationWalk(true);
                        }
                        if (game.controller.back) {
                            var velocity = BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(0, 0, 0.041), game.player.character.mesh.computeWorldMatrix());
                            game.player.character.mesh.moveWithCollisions(velocity);
                            game.player.character.runAnimationWalk(true);
                        }
                    }
                    //
                    // if(game.guiElements.hpBarEnemy.getValue() <= 0) {
                    //     game.guiElements.hpBarEnemy.updateValue(100);
                    // }
                });
            });
        });
    }
    return Simple;
}(Scene));
//# sourceMappingURL=Simple.js.map