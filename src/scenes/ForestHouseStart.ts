/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>

class ForestHouseStart extends Scene {

    static TYPE = 1;

    initScene(game:Game) {
        let self = this;
        game.sceneManager = this;

        BABYLON.SceneLoader.Load("assets/scenes/forestStartHouse/", "forestHouseStart.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .defaultPipeline(scene);

            // scene.debugLayer.show({
            //     initialTab: 2
            //  });
            scene.actionManager = new BABYLON.ActionManager(scene);
            let assetsManager = new BABYLON.AssetsManager(scene);
            let sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;
            scene.executeWhenReady(function () {
                self.environment = new EnvironmentForestHouseStart(game, scene);
                self.initFactories(scene, assetsManager);
                
                assetsManager.onFinish = function (tasks) {
                    game.client.socket.emit('changeScenePre', {
                        sceneType: ForestHouseStart.TYPE,
                    });

                };
                assetsManager.load();

                let listener = function listener() {
                    game.controller.registerControls(scene);
                    game.client.socket.emit('changeScenePost', {
                        sceneType: ForestHouseStart.TYPE,
                    });
                    game.client.socket.emit('getQuests');

                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            });

        });


    }


    public getType(): number {
        return Castle.TYPE;
    }

}