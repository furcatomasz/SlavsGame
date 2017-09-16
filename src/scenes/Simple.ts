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
                    game.controller.registerControls(scene);
                    let npc = new NPC.Warrior(game);
                    game.client.socket.emit('changeScenePost', {
                        sceneType: Simple.TYPE,
                    });

                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);

                var defaultPipeline = new BABYLON.DefaultRenderingPipeline("default", true, scene, [scene.activeCamera]);
                defaultPipeline.bloomEnabled = false;
                defaultPipeline.fxaaEnabled = false;
                defaultPipeline.bloomWeight = 0.5;
                defaultPipeline.cameraFov = scene.activeCamera.fov;

                var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
                //advancedTexture.layer.layerMask = 0x10000000;

                var panel = new BABYLON.GUI.StackPanel();
                panel.width = "500px";
                panel.isVertical = true;
                panel.paddingRight = "20px";
                panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
                panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
                advancedTexture.addControl(panel)

                var addCheckbox = function(text, func, initialValue, left) {
                    var checkbox = new BABYLON.GUI.Checkbox();
                    checkbox.width = "20px";
                    checkbox.height = "20px";
                    checkbox.isChecked = initialValue;
                    checkbox.color = "green";
                    checkbox.onIsCheckedChangedObservable.add(function(value) {
                        func(value);
                    });

                    var header = BABYLON.GUI.Control.AddHeader(checkbox, text, "180px", { isHorizontal: true, controlFirst: true});
                    header.height = "30px";
                    header.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;

                    if (left) {
                        header.left = left;
                    }

                    panel.addControl(header);
                }

                var addSlider = function(text, func, initialValue, min, max, left) {
                    var header = new BABYLON.GUI.TextBlock();
                    header.text = text;
                    header.height = "30px";
                    header.color = "white";
                    header.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                    panel.addControl(header);
                    if (left) {
                        header.left = left;
                    }

                    var slider = new BABYLON.GUI.Slider();
                    slider.minimum = min;
                    slider.maximum = max;
                    slider.value = initialValue;
                    slider.height = "20px";
                    slider.color = "green";
                    slider.background = "white";
                    slider.onValueChangedObservable.add(function(value) {
                        func(value);
                    });

                    if (left) {
                        slider.paddingLeft = left;
                    }

                    panel.addControl(slider);
                }

                var addColorPicker = function(text, func, initialValue, left) {
                    var header = new BABYLON.GUI.TextBlock();
                    header.text = text;
                    header.height = "30px";
                    header.color = "white";
                    header.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                    panel.addControl(header);

                    if (left) {
                        header.left = left;
                    }

                    var colorPicker = new BABYLON.GUI.ColorPicker();
                    colorPicker.value = initialValue;
                    colorPicker.size = "100px";
                    colorPicker.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                    colorPicker.onValueChangedObservable.add(function(value) {
                        func(value);
                    });

                    if (left) {
                        colorPicker.left = left;
                    }

                    panel.addControl(colorPicker);
                }

                var toneMappingEnabled = defaultPipeline.imageProcessing.toneMappingEnabled;
                var vignetteEnabled = defaultPipeline.imageProcessing.vignetteEnabled;
                var vignetteColor = defaultPipeline.imageProcessing.vignetteColor;
                var vignetteWeight = defaultPipeline.imageProcessing.vignetteWeight;
                var vignetteBlendMode = defaultPipeline.imageProcessing.vignetteBlendMode;
                var colorCurvesEnabled = defaultPipeline.imageProcessing.colorCurvesEnabled;
                var contrast = defaultPipeline.imageProcessing.contrast;
                var exposure = defaultPipeline.imageProcessing.exposure;

                var curve = new BABYLON.ColorCurves();
                curve.globalHue = 200;
                curve.globalDensity = 80;
                curve.globalSaturation = 80;

                curve.highlightsHue = 20;
                curve.highlightsDensity = 80;
                curve.highlightsSaturation = -80;

                curve.shadowsHue = 2;
                curve.shadowsDensity = 80;
                curve.shadowsSaturation = 40;

                defaultPipeline.imageProcessing.colorCurves = curve;

                var rebindValues = function() {
                    if (defaultPipeline.imageProcessing) {
                        defaultPipeline.imageProcessing.toneMappingEnabled = toneMappingEnabled;
                        defaultPipeline.imageProcessing.vignetteEnabled = vignetteEnabled;
                        defaultPipeline.imageProcessing.vignetteWeight = vignetteWeight;
                        defaultPipeline.imageProcessing.vignetteColor = vignetteColor;
                        defaultPipeline.imageProcessing.vignetteBlendMode = vignetteBlendMode;
                        defaultPipeline.imageProcessing.colorCurvesEnabled = colorCurvesEnabled;
                        defaultPipeline.imageProcessing.contrast = contrast;
                        defaultPipeline.imageProcessing.exposure = exposure;
                        defaultPipeline.imageProcessing.colorCurves = curve;
                    }
                }

                addCheckbox("fxaa", function(value) {
                    defaultPipeline.fxaaEnabled = value;
                    rebindValues();
                }, defaultPipeline.fxaaEnabled );

                addCheckbox("bloom", function(value) {
                    defaultPipeline.bloomEnabled = value;
                    rebindValues();
                }, defaultPipeline.bloomEnabled);

                addSlider("bloom weight", function(value) {
                    defaultPipeline.bloomWeight = value;
                }, defaultPipeline.bloomWeight, 0, 2, "20px");

                addCheckbox("image processing", function(value) {
                    defaultPipeline.imageProcessingEnabled = value;
                    rebindValues();
                }, defaultPipeline.imageProcessingEnabled);

                addCheckbox("tone mapping", function(value) {
                    defaultPipeline.imageProcessing.toneMappingEnabled = value;
                    toneMappingEnabled = value;
                }, toneMappingEnabled, "20px");

                addCheckbox("vignette", function(value) {
                    defaultPipeline.imageProcessing.vignetteEnabled = value;
                    vignetteEnabled = value;
                }, vignetteEnabled, "20px");

                addCheckbox("vignette multiply", function(value) {
                    var blendMode = value ? BABYLON.ImageProcessingConfiguration.VIGNETTEMODE_MULTIPLY : BABYLON.ImageProcessingConfiguration.VIGNETTEMODE_OPAQUE;
                    defaultPipeline.imageProcessing.vignetteBlendMode = blendMode;
                    vignetteBlendMode = blendMode;
                }, vignetteBlendMode === BABYLON.ImageProcessingConfiguration.VIGNETTEMODE_MULTIPLY, "40px");

                addColorPicker("vignette color", function(value) {
                    defaultPipeline.imageProcessing.vignetteColor = value;
                    vignetteColor = value;
                }, vignetteColor, "40px");

                addSlider("vignette weight", function(value) {
                    defaultPipeline.imageProcessing.vignetteWeight = value;
                    vignetteWeight = value;
                }, vignetteWeight, 0, 10, "40px");

                addCheckbox("color curves", function(value) {
                    defaultPipeline.imageProcessing.colorCurvesEnabled = value;
                    colorCurvesEnabled = value;
                }, colorCurvesEnabled, "20px");

                addSlider("camera contrast", function(value) {
                    defaultPipeline.imageProcessing.contrast = value;
                    contrast = value;
                }, contrast, 0, 4, "20px");

                addSlider("camera exposure", function(value) {
                    defaultPipeline.imageProcessing.exposure = value;
                    exposure = value;
                    console.log(value);
                }, exposure, 0, 4, "20px");


            });

        });


    }


    public getType(): number {
        return Simple.TYPE;
    }

}