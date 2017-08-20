/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>

class SimpleBandit extends Scene {

    static TYPE = 3;

    initScene(game:Game) {
        let self = this;
        game.sceneManager = this;

        BABYLON.SceneLoader.Load("assets/scenes/map01/", "map01.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game)
                .optimizeScene(scene)
                .setCamera(scene);

            let sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;
            var assetsManager = new BABYLON.AssetsManager(scene);

            scene.executeWhenReady(function () {
                game.factories['character'] = new Factories.Characters(game, scene, assetsManager).initFactory();
                game.factories['worm'] = new Factories.Worms(game, scene, assetsManager).initFactory();
                assetsManager.load();
                self.environment = new Environment(game, scene);
                game.player.mesh.position = new BABYLON.Vector3(3, 0.1, 0);
                game.player.emitPosition();
                assetsManager.onFinish = function (tasks) {
                    game.client.socket.emit('changeScene', {
                        sceneType: SimpleBandit.TYPE,
                    });

                    game.client.socket.emit('refreshPlayer');

                    let npc = new NPC.Warrior(game);
                }

            });

        });


    }

    public getType(): number {
        return SimpleBandit.TYPE;
    }
}