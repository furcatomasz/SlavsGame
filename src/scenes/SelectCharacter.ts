/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>

class SelectCharacter extends Scene {

    static TYPE = 2;

    initScene(game:Game) {
        let self = this;

        BABYLON.SceneLoader.Load("assets/scenes/Select_Map/", "Select_Map.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game)
                .optimizeScene(scene)
                .setCamera(scene); 

            let sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;
            let assetsManager = new BABYLON.AssetsManager(scene);
            scene.activeCamera.maxZ = 200;
            scene.activeCamera.minZ = -200;
            scene.activeCamera.mode = BABYLON.Camera.PERSPECTIVE_CAMERA;

            scene.activeCamera.position = new BABYLON.Vector3(0, 11, -12);
            scene.activeCamera.rotation = new BABYLON.Vector3(0.5, 0, 0);

            scene.executeWhenReady(function () {
                new EnvironmentSelectCharacter(game, scene);
                game.factories['character'] = new Factories.Characters(game, scene, assetsManager).initFactory();
                assetsManager.onFinish = function (tasks) {
                    let playerCharacters = self.game.client.characters;
                    for (let i = 0; i < playerCharacters.length; i++) {
                        new SelectCharacter.Warrior(game, i);
                    }

                };
                assetsManager.load();
                self.defaultPipeline(scene);
            });

        });


    }

    public getType() {
    }
}