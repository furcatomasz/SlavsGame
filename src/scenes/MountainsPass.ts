class MountainsPass extends Scene {

    static TYPE = 5;

    public setFog(scene) {
        scene.clearColor = new BABYLON.Color3(0, 0, 0);
        scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
        scene.fogColor = new BABYLON.Color3(0.02, 0.05, 0.2);
        scene.fogColor = new BABYLON.Color3(0, 0, 0);
        scene.fogDensity = 1;

        scene.fogStart = 50;
        scene.fogEnd = 100;

        return this;
    }

    initScene(game: Game) {
        let self = this;
        game.sceneManager = this;

        BABYLON.SceneLoader.Load("assets/scenes/MountainsPass/", "MountainsPass.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .defaultPipeline(scene)
                .executeWhenReady(function () {
                    self.environment = new EnvironmentMountainsPass(game, scene);
                }, null);
        });
    }

}
