/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>

class ForestHouseTomb extends Scene {

    static TYPE = 3;

    initScene(game:Game) {
        let self = this;
        game.sceneManager = this;

        BABYLON.SceneLoader.Load("assets/scenes/Forest_House_Tomb/", "Forest_House_Tomb.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .defaultPipeline(scene);
             scene.debugLayer.show();

            scene.actionManager = new BABYLON.ActionManager(scene);
            let assetsManager = new BABYLON.AssetsManager(scene);
            self.initFactories(scene, assetsManager);

            let sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;

            scene.executeWhenReady(function () {
                game.client.socket.emit('createPlayer');

                assetsManager.onFinish = function (tasks) {
                    // self.octree = scene.createOrUpdateSelectionOctree();
                    self.environment = new EnvironmentForestHouseTomb(game, scene);

                    game.client.socket.emit('changeScenePre', {
                        sceneType: ForestHouseTomb.TYPE,
                    });
                };
                assetsManager.load();

                let listener = function listener() {
                    game.controller.registerControls(scene);
                    game.client.socket.emit('getQuests');
                    game.client.showEnemies();

                    self.defaultPipeline(scene);
                    game.client.socket.emit('changeScenePost', {
                        sceneType: ForestHouseTomb.TYPE,
                    });

                    game.client.socket.emit('refreshGateways');

                        document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            });

        });


    }


    public getType():number {
        return Simple.TYPE;
    }

}