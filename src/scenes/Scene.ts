abstract class Scene {
    static TYPE = 0;

    protected game:Game;
    protected light:BABYLON.IShadowLight;
    public pipeline: BABYLON.StandardRenderingPipeline;
    public shadowGenerator:BABYLON.ShadowGenerator;
    public environment:Environment;
    public activeQuests:Array<Quests.AbstractQuest>;
    public octree: BABYLON.Octree;

    protected setDefaults(game:Game) {
        this.game = game;
        return this;
    }

    public setCamera(scene:BABYLON.Scene) {
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, 0), scene);
        camera.rotation = new BABYLON.Vector3(0.79,0.79,0);
        camera.position = new BABYLON.Vector3(0,35,0);
        camera.maxZ = 210;
        camera.minZ = 0;
        camera.fov = 0.5;
        camera.fovMode = 0;

        scene.activeCamera = camera;

        return this;
    }

    public setFog(scene) {
        scene.clearColor = new BABYLON.Color3(0.02, 0.05, 0.2);
        scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
        scene.fogColor = new BABYLON.Color3(0.02, 0.05, 0.2);
        scene.fogDensity = 1;

        //Only if LINEAR
        scene.fogStart = 70;
        scene.fogEnd = 93;

        return this;
    }

    //public setOrthoCameraHeights(camera:BABYLON.Camera) {
    //camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
    //camera.orthoTop = 20;
    //camera.orthoBottom = 0;
    //camera.orthoLeft = -15;
    //camera.orthoRight = 15;
    //    var ratio = window.innerWidth / window.innerHeight;
    //    var zoom = camera.orthoTop;
    //    var newWidth = zoom * ratio;
    //    camera.orthoLeft = -Math.abs(newWidth);
    //    camera.orthoRight = newWidth;
    //    camera.orthoBottom = -Math.abs(zoom);
    //    camera.rotation = new BABYLON.Vector3(0.75, 0.75, 0);
    //
    //    return camera;
    //}

    public optimizeScene(scene:BABYLON.Scene) {
        scene.collisionsEnabled = true;
        scene.fogEnabled = true;
        scene.lensFlaresEnabled = false;
        scene.probesEnabled = false;
        scene.postProcessesEnabled = true;
        scene.spritesEnabled = false;
        scene.audioEnabled = true;
        scene.workerCollisions = true;

        return this;
    }

    protected initFactories(scene: BABYLON.Scene, assetsManager: BABYLON.AssetsManager) {
        this.game.factories['character'] = new Factories.Characters(this.game, scene, assetsManager).initFactory();
        this.game.factories['worm'] = new Factories.Worms(this.game, scene, assetsManager).initFactory();
        this.game.factories['boar'] = new Factories.Boars(this.game, scene, assetsManager).initFactory();
        this.game.factories['zombie'] = new Factories.Zombies(this.game, scene, assetsManager).initFactory();
        this.game.factories['flag'] = new Factories.Flags(this.game, scene, assetsManager).initFactory();
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
        let self = this;
        let camera = scene.activeCamera;
    //var defaultPipeline = new BABYLON.DefaultRenderingPipeline("default", true, scene, [scene.activeCamera]);
    //defaultPipeline.bloomEnabled = false;
    //defaultPipeline.fxaaEnabled = true;
    //defaultPipeline.imageProcessingEnabled = false;
    //defaultPipeline.bloomWeight = 0.05;


    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    
    var panel = new BABYLON.GUI.StackPanel();
    panel.width = "200px";
    panel.isVertical = true;
    panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
    advancedTexture.addControl(panel)
    
    var addCheckbox = function(text, func, initialValue) {
        var checkbox = new BABYLON.GUI.Checkbox();
        checkbox.width = "20px";
        checkbox.height = "20px";
        checkbox.isChecked = initialValue;
        checkbox.color = "green";
        checkbox.onIsCheckedChangedObservable.add(function(value) {
            func(value);
        });
        if(self.game.gui) {
            self.game.gui.registerBlockMoveCharacter(checkbox);
        }
        var header = BABYLON.GUI.Control.AddHeader(checkbox, text, "180px", { isHorizontal: true, controlFirst: true});
        header.height = "30px";
        header.color = "white";
        header.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;

        panel.addControl(header);
    }
        let postProcessFxaa = null;
        let kernel = 4;
        let postProcessBloom1 = null;
        let postProcessBloom2 = null;
        addCheckbox("fxaa", function(value) {
            if(value) {
                postProcess = new BABYLON.FxaaPostProcess("fxaa", 2.0, camera);
            } else {
                scene.activeCamera.detachPostProcess(postProcess);
            }
        }, false );



}

    public abstract getType();

    public abstract initScene(game: Game);
}
