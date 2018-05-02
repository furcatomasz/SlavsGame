/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>

class ForestHouseStart extends Scene {

    static TYPE = 1;

    initScene(game: Game) {
        let self = this;
        game.sceneManager = this;

        BABYLON.SceneLoader.Load("assets/scenes/forestStartHouse/", "forestHouseStart.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .defaultPipeline(scene)
                .executeWhenReady(function () {
                    new EnvironmentForestHouseStart(game, scene);
                }, null);
        });
    }

}