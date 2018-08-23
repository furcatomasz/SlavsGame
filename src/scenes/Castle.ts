class Castle extends Scene {

    static TYPE = 0;

    initScene(game:Game) {
        let self = this;
        game.sceneManager = this;

        BABYLON.SceneLoader.Load("assets/scenes/Castle/", "Castle1.1.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .defaultPipeline(scene);

            scene.debugLayer.show({
                initialTab: 2
             });
            scene.actionManager = new BABYLON.ActionManager(scene);
            let assetsManager = new BABYLON.AssetsManager(scene);
            let sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;
            scene.executeWhenReady(function () {
                self.environment = new EnvironmentCastle(game, scene);
                self.initFactories(scene, assetsManager);
                
                assetsManager.onFinish = function (tasks) {
                    game.client.socket.emit('changeScenePre', {
                        sceneType: Castle.TYPE,
                    });

                };
                assetsManager.load();

                let listener = function listener() {
                    new NPC.Guard(game, new BABYLON.Vector3(-82, 0, 4), new BABYLON.Vector3(0, 0.74, 0));
                    new NPC.Guard(game, new BABYLON.Vector3(-82, 0, -12), new BABYLON.Vector3(0, -4.3, 0));
                    new NPC.Trader(game, new BABYLON.Vector3(9.03, 0, 27.80), new BABYLON.Vector3(0, 0.7, 0));
                    new NPC.BigWarrior(game, new BABYLON.Vector3(14, 0, -3.3), new BABYLON.Vector3(0, 1.54, 0));

                    game.controller.registerControls(scene);
                    game.client.socket.emit('changeScenePost', {
                        sceneType: Castle.TYPE,
                    });
                    game.client.socket.emit('getQuests');

                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            });

        });


    }

    public setFog(scene) {
        scene.clearColor = new BABYLON.Color3(0, 0, 0);
        scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
        scene.fogColor = new BABYLON.Color3(0, 0, 0);
        scene.fogDensity = 1;

        //Only if LINEAR
        scene.fogStart = 80;
        scene.fogEnd = 95;

        return this;
    }

    public getType(): number {
        return Castle.TYPE;
    }

}