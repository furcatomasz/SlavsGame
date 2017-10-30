/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>

class Simple extends Scene {

    static TYPE = 2;

    initScene(game:Game) {
        let self = this;
        game.sceneManager = this;

        BABYLON.SceneLoader.Load("assets/scenes/map01/", "map01.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game)
                .optimizeScene(scene)
                .setCamera(scene);
             //scene.debugLayer.show({
             //    initialTab: 2
             //});
            scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
            scene.fogColor = new BABYLON.Color3(0, 0, 0);
            scene.fogDensity = 0.03;

            //Only if LINEAR
            scene.fogStart = 20.0;
            scene.fogEnd = 60.0;
            scene.actionManager = new BABYLON.ActionManager(scene);
            let assetsManager = new BABYLON.AssetsManager(scene);
            let sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;
            scene.executeWhenReady(function () {
                self.environment = new Environment(game, scene);
                self.initFactories(scene, assetsManager);
                game.client.socket.emit('createPlayer');

                assetsManager.onFinish = function (tasks) {
                    let npc = new NPC.Warrior(game);

                    let grain = game.factories['nature_grain'].createInstance('Grain', true);
                    grain.material.freeze();
                    grain.getBoundingInfo().isLocked = true;

                    grain.position = new BABYLON.Vector3(66, 0, -105);
                    grain.scaling = new BABYLON.Vector3(1.3, 1.3, 1.3);
                    //grain.skeleton.beginAnimation('ArmatureAction', true);

                    let grainGenerator = new Particles.GrainGenerator().generate(grain, 1000, 122, 15);
                    //self.octree = scene.createOrUpdateSelectionOctree();

                    game.client.socket.emit('changeScenePre', {
                        sceneType: Simple.TYPE,
                    });
                };
                assetsManager.load();

                let listener = function listener() {
                    game.controller.registerControls(scene);
                    game.client.socket.emit('getQuests');
                    game.client.showEnemies();

                    //self.defaultPipeline(scene);
                    game.client.socket.emit('changeScenePost', {
                        sceneType: Simple.TYPE,
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