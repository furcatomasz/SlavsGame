/// <reference path="../game.ts"/>
/// <reference path="../../bower_components/babylonjs/dist/babylon.d.ts"/>
/// <reference path="../../bower_components/babylonjs/dist/gui/babylon.gui.d.ts"/>

import Camera = BABYLON.Camera;
abstract class Scene {
    static TYPE = 0;

    protected game:Game;
    protected light:BABYLON.IShadowLight;
    public pipeline: BABYLON.StandardRenderingPipeline;
    public shadowGenerator:BABYLON.ShadowGenerator;
    public guiTexture:BABYLON.GUI.AdvancedDynamicTexture;
    public environment:Environment;
    public activeQuests:Array<Quests.AbstractQuest>;
    public octree: BABYLON.Octree;

    protected setDefaults(game:Game) {
        this.game = game;
        return this;
    }

    public setCamera(scene:BABYLON.Scene) {
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, 0), scene);
        camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
        camera.orthoTop = 18;
        camera.orthoBottom = 0;
        camera.orthoLeft = -15;
        camera.orthoRight = 15;
        camera.maxZ = 20;
        camera.minZ = -70;
        this.setOrthoCameraHeights(camera);
        scene.activeCamera = camera;

        return this;
    }

    public setOrthoCameraHeights(camera:BABYLON.Camera) {
        var ratio = window.innerWidth / window.innerHeight;
        var zoom = camera.orthoTop;
        var newWidth = zoom * ratio;
        camera.orthoLeft = -Math.abs(newWidth);
        camera.orthoRight = newWidth;
        camera.orthoBottom = -Math.abs(zoom);
        camera.rotation = new BABYLON.Vector3(0.751115, 0, 0);

        return camera;
    }

    public optimizeScene(scene:BABYLON.Scene) {
        scene.collisionsEnabled = true;
        scene.fogEnabled = true;
        scene.lensFlaresEnabled = false;
        scene.probesEnabled = false;
        scene.postProcessesEnabled = false;
        scene.spritesEnabled = false;
        //scene.audioEnabled = false;
        return this;
    }

    protected initFactories(scene: BABYLON.Scene, assetsManager: BABYLON.AssetsManager) {
        this.game.factories['character'] = new Factories.Characters(this.game, scene, assetsManager).initFactory();
        this.game.factories['worm'] = new Factories.Worms(this.game, scene, assetsManager).initFactory();
        this.game.factories['nature_grain'] = new Factories.Nature(this.game, scene, assetsManager).initFactory();

        return this;
    }

    public changeScene(newScene: Scene) {
        let sceneToDispose = this.game.getScene();
        setTimeout(function() {
            sceneToDispose.dispose();
        });
        this.game.activeScene = null;
        this.game.controller.forward = false;
        newScene.initScene(this.game);
    }

    public defaultPipeline(scene: BABYLON.Scene) {
    //    let self = this;
    //var defaultPipeline = new BABYLON.DefaultRenderingPipeline("default", true, scene, [scene.activeCamera]);
    //defaultPipeline.bloomEnabled = true;
    //defaultPipeline.fxaaEnabled = true;
    //defaultPipeline.imageProcessingEnabled = false;
    //defaultPipeline.bloomWeight = 0.25;
    //
    //var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    //
    //var panel = new BABYLON.GUI.StackPanel();
    //panel.width = "200px";
    //panel.isVertical = true;
    //panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    //panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    //advancedTexture.addControl(panel)
    //
    //var addCheckbox = function(text, func, initialValue, left) {
    //    var checkbox = new BABYLON.GUI.Checkbox();
    //    checkbox.width = "20px";
    //    checkbox.height = "20px";
    //    checkbox.isChecked = initialValue;
    //    checkbox.color = "green";
    //    checkbox.onIsCheckedChangedObservable.add(function(value) {
    //        func(value);
    //    });
    //    if(self.game.gui) {
    //        self.game.gui.registerBlockMoveCharacter(checkbox);
    //    }
    //    var header = BABYLON.GUI.Control.AddHeader(checkbox, text, "180px", { isHorizontal: true, controlFirst: true});
    //    header.height = "30px";
    //    header.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    //
    //    if (left) {
    //        header.left = left;
    //    }
    //
    //    panel.addControl(header);
    //}
    //
    //addCheckbox("fxaa", function(value) {
    //    defaultPipeline.fxaaEnabled = value;
    //}, defaultPipeline.fxaaEnabled );
    //
    //addCheckbox("bloom", function(value) {
    //    defaultPipeline.bloomEnabled = value;
    //}, defaultPipeline.bloomEnabled);


}

    public abstract getType();

    public abstract initScene(game: Game);
}
