/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>
/// <reference path="../objects/characters.ts"/>
/// <reference path="../objects/items.ts"/>
/// <reference path="../objects/environment.ts"/>

class Simple extends Scene {

    initScene(game:Game) {
        let self = this;
        let serverUrl = window.location.hostname + ':3003';

        BABYLON.SceneLoader.Load("assets/scenes/map01/", "map01.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game)
                .optimizeScene(scene)
                .setCamera(scene);

            // scene.debugLayer.show();
            let sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;

            scene.executeWhenReady(function () {
                self.environment = new Environment(game, scene);
                new Characters(game, scene);
                new Items(game, scene);
                game.client.connect(serverUrl);
                game.controller.registerControls(scene);

                document.addEventListener(Events.PLAYER_CONNECTED, function () {
                    let npc = new NPC.Warrior(game);

                });

            });
        });


    }

}