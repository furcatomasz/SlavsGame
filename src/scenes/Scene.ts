/// <reference path="../game.ts"/>
/// <reference path="../../bower_components/babylonjs/dist/babylon.d.ts"/>
/// <reference path="../../bower_components/babylonjs/dist/gui/babylon.gui.d.ts"/>

abstract class Scene {

    protected game: Game;
    protected light: BABYLON.IShadowLight;
    public shadowGenerator: BABYLON.ShadowGenerator;
    public guiTexture: BABYLON.GUI.AdvancedDynamicTexture;
    public environment: Environment;

    protected setDefaults(game: Game) {
        this.game = game;
        this.guiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("gameUI");

        return this;
    }

    public setShadowGenerator(light: BABYLON.IShadowLight) {
        this.shadowGenerator = new BABYLON.ShadowGenerator(4096, light);
        this.shadowGenerator.bias = -0.0000001;
        this.shadowGenerator.setDarkness(0.5);
        //this.shadowGenerator.forceBackFacesOnly = true;
        //this.shadowGenerator.usePoissonSampling = true;
        //this.shadowGenerator.useExponentialShadowMap = true;
        //this.shadowGenerator.useBlurExponentialShadowMap = true;

        return this;
    }

    public setCamera(scene: BABYLON.Scene) {
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, 0), scene);
        camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
        camera.orthoTop = 18;
        camera.orthoBottom = 0;
        camera.orthoLeft = -15;
        camera.orthoRight = 15;
        camera.maxZ = 20;
        camera.minZ = -70;
        var ratio = window.innerWidth / window.innerHeight;
        var zoom = camera.orthoTop;
        var newWidth = zoom * ratio;
        camera.orthoLeft = -Math.abs(newWidth);
        camera.orthoRight = newWidth;
        camera.orthoBottom = -Math.abs(zoom);
        camera.rotation = new BABYLON.Vector3(0.751115, 0, 0);
        scene.activeCamera = camera;

        return this;
    }

    public optimizeScene(scene: BABYLON.Scene) {
        scene.collisionsEnabled = false;
        scene.fogEnabled = false;
        scene.shadowsEnabled = false;
        scene.lensFlaresEnabled = false;
        scene.probesEnabled = false;
        scene.postProcessesEnabled = false;
        scene.spritesEnabled = false;
        scene.renderTargetsEnabled = false;
        return this;
    }
    }