/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>

class ForestHouseTomb extends Scene {

    static TYPE = 3;

    initScene(game: Game) {
        let self = this;
        game.sceneManager = this;

        BABYLON.SceneLoader.Load("assets/scenes/Forest_House_Tomb/", "Forest_House_Tomb.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .defaultPipeline(scene)
                .executeWhenReady(function () {
                    self.environment = new EnvironmentForestHouseTomb(game, scene);

                }, null);
        });
    }

}