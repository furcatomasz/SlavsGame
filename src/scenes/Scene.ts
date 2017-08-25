/// <reference path="../game.ts"/>
/// <reference path="../../bower_components/babylonjs/dist/babylon.d.ts"/>
/// <reference path="../../bower_components/babylonjs/dist/gui/babylon.gui.d.ts"/>

import Camera = BABYLON.Camera;
abstract class Scene {
    static TYPE = 0;

    protected game:Game;
    protected light:BABYLON.IShadowLight;
    public shadowGenerator:BABYLON.ShadowGenerator;
    public guiTexture:BABYLON.GUI.AdvancedDynamicTexture;
    public environment:Environment;
    public activeQuests:Array<Quests.AbstractQuest>;

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
        scene.collisionsEnabled = false;
        scene.fogEnabled = false;
        scene.lensFlaresEnabled = false;
        scene.probesEnabled = false;
        scene.postProcessesEnabled = false;
        scene.spritesEnabled = false;
        return this;
    }

    protected initFactories(scene: BABYLON.Scene, assetsManager: BABYLON.AssetsManager) {
        this.game.factories['character'] = new Factories.Characters(this.game, scene, assetsManager).initFactory();
        this.game.factories['worm'] = new Factories.Worms(this.game, scene, assetsManager).initFactory();

        return this;
    }

    public changeScene(newScene: Scene) {
        this.game.scenesDisposed.push(this.game.getScene());
        this.game.activeScene = null;
        this.game.controller.forward = false;
        newScene.initScene(this.game);
    }

    public abstract getType();

    public abstract initScene(game: Game);
}
