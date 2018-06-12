/// <reference path="../game.ts"/>

class EnvironmentForestHouseStart {

    bushes:Array<BABYLON.AbstractMesh>;
    colliders:Array<BABYLON.AbstractMesh>;
    fires:Array<BABYLON.AbstractMesh>;
    entrace:BABYLON.AbstractMesh;
    ground:BABYLON.AbstractMesh;
    shadowGenerator:BABYLON.ShadowGenerator;

    constructor(game:Game, scene:BABYLON.Scene) {
        let self = this;
        this.fires = [];
        this.bushes = [];
        this.colliders = [];

        for (let i = 0; i < scene.meshes.length; i++) {
            let sceneMesh = scene.meshes[i];
            let meshName = scene.meshes[i]['name'];

            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;

                this.ground = sceneMesh;
            } else if (meshName.search("Box_Cube") >= 0) {
                this.colliders.push(sceneMesh);
            } else {
                sceneMesh.isPickable = false;
            }
        }


        let light = scene.lights[0];
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        // light.intensity = 0.4;
        light.position = new BABYLON.Vector3(0, 80, -210);
        light.direction = new BABYLON.Vector3(0.45, -0.45, 0.45);
        light.shadowMaxZ = 500;
        var shadowGenerator = new BABYLON.ShadowGenerator(2048, light);
        // shadowGenerator.useBlurExponentialShadowMap = true;
        // shadowGenerator.useExponentialShadowMap = true;
        // shadowGenerator.usePoissonSampling = true;
        // shadowGenerator.frustumEdgeFalloff = 1.0;
        // shadowGenerator.useKernelBlur = true;
        // shadowGenerator.blurKernel = 32;
        shadowGenerator.usePercentageCloserFiltering = true;
        shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;

        shadowGenerator.getShadowMap().refreshRate = BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE;
        light.autoUpdateExtends = false;
        for (let i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Ground") >= 0) {
                continue;
            }
            shadowGenerator.getShadowMap().renderList.push(sceneMesh);
        }


        /////Freeze world matrix all static meshes
        for (let i = 0; i < scene.meshes.length; i++) {
           scene.meshes[i].freezeWorldMatrix();
        }

        ///register colliders
        for (let i = 0; i < this.colliders.length; i++) {
            let sceneMeshCollider = this.colliders[i];
            Collisions.setCollider(scene, sceneMeshCollider);
        }

    }

}