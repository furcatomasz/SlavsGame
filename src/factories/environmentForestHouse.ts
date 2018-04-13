/// <reference path="../game.ts"/>

class EnvironmentForestHouse {

    colliders: Array<BABYLON.AbstractMesh>;
    ground: BABYLON.AbstractMesh;

    constructor(game: Game, scene: BABYLON.Scene) {
        let self = this;
        this.colliders = [];
        let spsGround = [];

        for (let i = 0; i < scene.meshes.length; i++) {
            let sceneMesh = scene.meshes[i];
            let meshName = scene.meshes[i]['name'];

            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;

                this.ground = sceneMesh;

                let terrainMaterial = new BABYLON.TerrainMaterial("terrainMaterial", scene);
                terrainMaterial.specularColor = new BABYLON.Color3(0.5, 0.5, 0.5);
                terrainMaterial.specularPower = 64;
                terrainMaterial.mixTexture = new BABYLON.Texture("assets/scenes/Forest_house/stencil.png", scene);
                terrainMaterial.diffuseTexture1 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.png", scene);
                terrainMaterial.diffuseTexture2 = new BABYLON.Texture("assets/scenes/Forest_house/dirt.png", scene);
                terrainMaterial.diffuseTexture3 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.png", scene);
                terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 10;
                terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 10;
                terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 10;
                sceneMesh.material = terrainMaterial;
            } else if (meshName.search("Box_Cube") >= 0) {
                this.colliders.push(sceneMesh);
            } else if (meshName.search("particlesground") >= 0) {
                spsGround.push(sceneMesh);
            } else {
                sceneMesh.isPickable = false;
            }
        }

        //SPS Nature
        let spruce = game.factories['nature_grain'].createInstance('spruce', false);
        spruce.visibility = 0;
        let groundPlants = game.factories['nature_grain'].createInstance('ground_plants', false);
        groundPlants.visibility = 0;
        let fern = game.factories['nature_grain'].createInstance('fern', false);
        fern.visibility = 0;
        let stone = game.factories['nature_grain'].createInstance('stone', false);
        stone.visibility = 0;

        spsGround.forEach(function(parentSPS) {
            let spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, spruce);
            spsSpruce.buildSPS(20);

            let spsFern = new Particles.SolidParticleSystem.Nature(game, parentSPS, fern);
            spsFern.buildSPS(200);

            let spsPlants = new Particles.SolidParticleSystem.Nature(game, parentSPS, groundPlants);
            spsPlants.buildSPS(300);

            let spsStone = new Particles.SolidParticleSystem.Nature(game, parentSPS, stone);
            spsStone.buildSPS(25);
        });

        let spsToBlock = scene.getMeshByName("particle1");

        let spsSpruceBlock = new Particles.SolidParticleSystem.NatureBlock(game, spsToBlock, spruce);
        spsSpruceBlock.buildSPS(500);

        let spsPlantsBlock = new Particles.SolidParticleSystem.NatureBlock(game, spsToBlock, groundPlants);
        spsPlantsBlock.buildSPS(500);

        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.4;
        light.position = new BABYLON.Vector3(0, 80, -210);
        light.direction = new BABYLON.Vector3(0.45, -0.45, 0.45);
        light.shadowMaxZ = 500;
        var shadowGenerator = new BABYLON.ShadowGenerator(2048, light);
        // shadowGenerator.useBlurExponentialShadowMap = true;
        // shadowGenerator.useExponentialShadowMap = true;
        shadowGenerator.usePoissonSampling = true;
        shadowGenerator.frustumEdgeFalloff = 1.0;
        shadowGenerator.useKernelBlur = true;
        shadowGenerator.blurKernel = 32;

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

        ///register colliders
        for (let i = 0; i < this.colliders.length; i++) {
            let sceneMeshCollider = this.colliders[i];
            Collisions.setCollider(scene, sceneMeshCollider);
        }

        // Freeze world matrix all static meshes
        for (let i = 0; i < scene.meshes.length; i++) {
            scene.meshes[i].freezeWorldMatrix();
        }
    }

}