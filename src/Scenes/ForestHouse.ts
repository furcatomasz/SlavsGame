class ForestHouse extends Scene {

    static TYPE = 2;

    initScene(game: Game) {
        let self = this;
        game.sceneManager = this;

        BABYLON.SceneLoader.Load("assets/scenes/Forest_house/", "Forest_house.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .executeWhenReady(function () {
                    self.environment = new EnvironmentForestHouse(game);
                }, null);
        });
    }

}
