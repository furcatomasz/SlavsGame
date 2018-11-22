class SelectCharacter extends Scene {

    static TYPE = 4;

    initScene(game:Game) {

        let self = this;
        game.sceneManager = this;
        let playersToSelect = [];
        let gui = null;
        BABYLON.SceneLoader.Load("assets/scenes/Select_Map/", "Select_Map.babylon", game.engine, function (scene) {
            self
                .setDefaults(game, scene)
                .optimizeScene(scene)
                .setCamera(scene)
                // .setFog(scene)
                .executeWhenReady(function () {
                    new EnvironmentSelectCharacter(game, scene);

                    game.client.socket.on('showPlayersToSelect', function(players) {
                        playersToSelect.forEach((playerSelect) => {
                            playerSelect.mesh.dispose();
                        });
                        playersToSelect = [];

                      for (let i = 0; i < players.length; i++) {
                          let player = players[i];
                          playersToSelect.push(new SelectCharacter.Warrior(game, i, player));
                      }

                        if(gui) {
                            gui.texture.dispose();
                        }
                        if(playersToSelect.length < 2) {
                            gui = new GUI.SelectCharacter(game);
                        }
                    });

                }, null);
        });

    }

    public setCamera(scene:BABYLON.Scene) {
        let gameCamera = new BABYLON.FreeCamera("gameCamera", new BABYLON.Vector3(0, 0, 0), scene);
        gameCamera.position = new BABYLON.Vector3(-8.5, 17.36, -51);
        gameCamera.rotation = new BABYLON.Vector3(0.31, 0.4, 0);
        gameCamera.maxZ = 200;
        gameCamera.minZ = -200;
        gameCamera.fov = 0.25;
        gameCamera.fovMode = 0;
        gameCamera.layerMask = 2;
        gameCamera.attachControl(this.game.canvas, true);

        scene.activeCameras = [gameCamera];

        return this;
    }

}
