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
            scene.actionManager = new BABYLON.ActionManager(scene);
            let assetsManager = new BABYLON.AssetsManager(scene);
            let sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;
            scene.executeWhenReady(function () {
                self.environment = new Environment(game, scene);
                self.initFactories(scene, assetsManager);
                
                assetsManager.onFinish = function (tasks) {
                    game.client.socket.emit('changeScenePre', {
                        sceneType: Simple.TYPE,
                    });

                };
                assetsManager.load();

                let listener = function listener() {
                    let npc = new NPC.Warrior(game);
                    game.controller.registerControls(scene);
                    game.client.socket.emit('changeScenePost', {
                        sceneType: Simple.TYPE,
                    });
                    game.client.socket.emit('getQuests');

                    self.defaultPipeline(scene);

                    let grain = self.game.factories['nature_grain'].createInstance('Grain.001');
                    grain.position = new BABYLON.Vector3(4,0,4);
                    var sphere = BABYLON.MeshBuilder.CreateSphere("s", {}, scene);
                    sphere.position = new BABYLON.Vector3(4,0,4);

                    // grain.scaling = new BABYLON.Vector3(3,3,3);
let fact = 2;
                    let SPS = new BABYLON.SolidParticleSystem("SPS", scene);
                    let myPositionFunction = function(particle, i, s) {
                        particle.position.x = (Math.random() - 0.5) * fact;
                        particle.position.y = (Math.random() - 0.5) * fact;
                        particle.position.z = (Math.random() - 0.5) * fact;
                        // particle.rotation.x = Math.random() * 3.15;
                        // particle.rotation.y = Math.random() * 3.15;
                        // particle.rotation.z = Math.random() * 1.5;
                        // particle.color = new BABYLON.Color4(particle.position.x / fact + 0.5, particle.position.y / fact + 0.5, particle.position.z / fact + 0.5, 1.0);
                    };

                    SPS.addShape(sphere, 2, { positionFunction: myPositionFunction});
                    let mesh = SPS.buildMesh();
                    SPS.initParticles();
                    SPS.setParticles();

                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            });

        });


    }


    public getType(): number {
        return Simple.TYPE;
    }

}