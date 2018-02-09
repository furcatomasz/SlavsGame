/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>

class Mountains extends Scene {

    static TYPE = 2;

    initScene(game:Game) {
        let self = this;
        game.sceneManager = this;

        BABYLON.SceneLoader.Load("assets/scenes/Mountains/", "Mountains.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game)
                .optimizeScene(scene)
                .setCamera(scene)
                .setFog(scene)
                .defaultPipeline(scene);
             //scene.debugLayer.show();

            scene.actionManager = new BABYLON.ActionManager(scene);
            let assetsManager = new BABYLON.AssetsManager(scene);
            let sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;
            scene.executeWhenReady(function () {
                self.environment = new Environment(game, scene);
                self.initFactories(scene, assetsManager);
                game.client.socket.emit('createPlayer');

                assetsManager.onFinish = function (tasks) {
                    self.octree = scene.createOrUpdateSelectionOctree();

                    game.client.socket.emit('changeScenePre', {
                        sceneType: Mountains.TYPE,
                    });
                };
                assetsManager.load();

                let listener = function listener() {
                    game.controller.registerControls(scene);
                    game.client.socket.emit('getQuests');
                    game.client.showEnemies();

                    self.defaultPipeline(scene);
                    game.client.socket.emit('changeScenePost', {
                        sceneType: Mountains.TYPE,
                    });
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