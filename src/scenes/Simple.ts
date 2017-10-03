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

                    let grain = game.factories['nature_grain'].createInstance('Grain', true);
                    grain.position = new BABYLON.Vector3(66,0,-105);
                    grain.scaling = new BABYLON.Vector3(1.3,1.3,1.3);

                    let grainGenerator = new Particles.GrainGenerator().generate(grain, 1000, 122, 15);
                    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
                    var panel = new BABYLON.GUI.StackPanel();
                    panel.width = "200px";
                    panel.isVertical = true;
                    panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
                    panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
                    advancedTexture.addControl(panel)
                    var checkbox = new BABYLON.GUI.Checkbox();
                    checkbox.width = "20px";
                    checkbox.height = "20px";
                    checkbox.color = "red";
                    checkbox.onIsCheckedChangedObservable.add(function(value) {
                        if(value) {
                            grain.skeleton.beginAnimation('ArmatureAction', true);
                        } else {
                            scene.stopAnimation(grain.skeleton);
                        }

                    });
                    if(game.gui) {
                        game.gui.registerBlockMoveCharacter(checkbox);
                    }
                    var header = BABYLON.GUI.Control.AddHeader(checkbox, 'Grain animation', "180px", { isHorizontal: true, controlFirst: true});
                    header.height = "30px";
                    header.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                    panel.addControl(header);

                    var checkbox = new BABYLON.GUI.Checkbox();
                    checkbox.width = "20px";
                    checkbox.height = "20px";
                    checkbox.color = "red";
                    checkbox.onIsCheckedChangedObservable.add(function(value) {
                        if(value) {
                            grain.visibility = false;
                        } else {
                            grain.visibility = true;
                        }

                    });
                    if(game.gui) {
                        game.gui.registerBlockMoveCharacter(checkbox);
                    }
                    var header = BABYLON.GUI.Control.AddHeader(checkbox, 'Disable grain', "180px", { isHorizontal: true, controlFirst: true});
                    header.height = "30px";
                    header.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                    panel.addControl(header);

                    self.defaultPipeline(scene);
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