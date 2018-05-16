class SelectCharacter extends Scene {

    static TYPE = 4;

    initScene(game:Game) {

        let self = this;
        game.sceneManager = this;

        BABYLON.SceneLoader.Load("assets/scenes/Select_Map/", "Select_Map.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .defaultPipeline(scene)
                .executeWhenReady(function () {
                    scene.activeCamera = new BABYLON.FreeCamera("selectCharacterCamera", new BABYLON.Vector3(0, 0, 0), scene);
                    scene.activeCamera.maxZ = 200;
                    scene.activeCamera.minZ = -200;

                    scene.activeCamera.position = new BABYLON.Vector3(0, 14, -20);
                    scene.activeCamera.rotation = new BABYLON.Vector3(0.5, 0, 0);

                    new EnvironmentSelectCharacter(game, scene);

                    game.client.socket.on('showPlayersToSelect', function(players) {
                      for (let i = 0; i < players.length; i++) {
                          let player = players[i];
                          new SelectCharacter.Warrior(game, i, player);
                      }
                    });

                }, null);
        });


    }

}