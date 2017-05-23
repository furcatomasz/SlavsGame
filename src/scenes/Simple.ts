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
                scene.debugLayer.show();

                scene.lights = scene.lights.slice(2);
                this.light = scene.lights[0];
                this.light.intensity = 2;
console.log(this.light);
                self.setShadowGenerator(this.light);
                self.setCamera();
                // self.createGameGUI();

                var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
                var physicsPlugin = new BABYLON.CannonJSPlugin();
                scene.enablePhysics(gravityVector, physicsPlugin);

                new Items(assetsManager, game);
                new Characters(assetsManager, game);
                new Environment(game);

                assetsManager.load();
                let enemy = null;
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

                game.engine.runRenderLoop(() => {
                    scene.render();

                     if(game.player && enemy) {
                         enemy.character.mesh.lookAt(game.player.character.mesh.position);

                         if (game.controller.left) {
                             game.player.character.mesh.rotate(BABYLON.Axis.Y, -0.05, BABYLON.Space.LOCAL);
                         }
                         if (game.controller.right) {
                             game.player.character.mesh.rotate(BABYLON.Axis.Y, 0.05, BABYLON.Space.LOCAL);
                         }
                         game.player.character.mesh.computeWorldMatrix(true);
                         if (game.controller.forward) {
                             var velocity = BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(0,0,-0.041), game.player.character.mesh.computeWorldMatrix());
                             game.player.character.mesh.moveWithCollisions(velocity);
                             game.player.character.runAnimationWalk(true);
                         }
                         if (game.controller.back) {
                             var velocity = BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(0,0,0.041), game.player.character.mesh.computeWorldMatrix());
                             game.player.character.mesh.moveWithCollisions(velocity);
                             game.player.character.runAnimationWalk(true);
                         }

                         // if (game.player.character.items.weapon.intersectsMesh(enemy.character.mesh, false)) {
                         //    enemy.character.mesh.material.emissiveColor = new BABYLON.Color4(1, 0, 0, 1);
                         //    var value = game.guiElements.hpBarEnemy.getValue();
                         //    game.guiElements.hpBarEnemy.updateValue(value-1);
                         //
                         // } else {
                         //    enemy.character.mesh.material.emissiveColor = new BABYLON.Color4(0, 0, 0, 0);
                         // }
                         //
                         // if (enemy.character.items.weapon.intersectsMesh(game.player.character.mesh, false)) {
                         //    console.log(game.guiElements);
                         //    game.player.character.mesh.material.emissiveColor = new BABYLON.Color4(1, 0, 0, 1);
                         //    var value = game.guiElements.hpBar.getValue();
                         //    game.guiElements.hpBar.updateValue(value-1);
                         // } else {
                         //    game.player.character.mesh.material.emissiveColor = new BABYLON.Color4(0, 0, 0, 0);
                         // }
                     }
                     //
                     // if(game.guiElements.hpBarEnemy.getValue() <= 0) {
                     //     game.guiElements.hpBarEnemy.updateValue(100);
                     // }
                    
                });

            });
        });

    }


}