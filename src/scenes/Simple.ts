/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>

class Simple extends Scene {

    static TYPE = 2;

    initScene(game:Game) {
        let self = this;
        game.sceneManager = this;

        BABYLON.SceneLoader.Load("assets/scenes/map01/", "map01.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game)
                .optimizeScene(scene)
                .setCamera(scene);
            //scene.debugLayer.show();
            let sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;
            var assetsManager = new BABYLON.AssetsManager(scene);
            scene.executeWhenReady(function () {
                self.environment = new Environment(game, scene);
                self.initFactories(scene, assetsManager);
                assetsManager.onFinish = function (tasks) {
                    game.controller.registerControls(scene);
                    game.client.socket.emit('changeScenePre', {
                        sceneType: Simple.TYPE,
                    });
                };
                assetsManager.load();
                document.addEventListener(Events.PLAYER_CONNECTED, function () {
                    let npc = new NPC.Warrior(game);
                    game.client.socket.emit('changeScenePost', {
                        sceneType: Simple.TYPE,
                    });
                });

            });

        });


    }

    public getType(): number {
        return Simple.TYPE;
    }

}