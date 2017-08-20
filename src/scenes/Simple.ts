/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>

class Simple extends Scene {

    static TYPE = 2;

    initScene(game:Game) {
        let self = this;
        let serverUrl = window.location.hostname + ':3003';
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
                game.factories['character'] = new Factories.Characters(game, scene, assetsManager).initFactory();
                game.factories['worm'] = new Factories.Worms(game, scene, assetsManager).initFactory();
                assetsManager.onFinish = function (tasks) {
                    game.client.connect(serverUrl);
                    game.controller.registerControls(scene);
                }
                assetsManager.load();
                document.addEventListener(Events.PLAYER_CONNECTED, function () {
                    game.client.socket.emit('changeScene', {
                        sceneType: Simple.TYPE,
                    });
                    let npc = new NPC.Warrior(game);

                });

            });

        });


    }

    public getType(): number {
        return Simple.TYPE;
    }

}