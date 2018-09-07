class EnvironmentForestHouse {

    colliders: Array<BABYLON.AbstractMesh>;
    ground: BABYLON.AbstractMesh;

    constructor(game: Game, scene: BABYLON.Scene) {
        let self = this;
        this.colliders = [];
        let spsTrees = [];
        let spsPlants = [];
        let spsStones = [];
        let spsFern = [];

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
                terrainMaterial.diffuseTexture1 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.jpg", scene);
                terrainMaterial.diffuseTexture2 = new BABYLON.Texture("assets/scenes/Forest_house/dirt.jpg", scene);
                terrainMaterial.diffuseTexture3 = new BABYLON.Texture("assets/scenes/Forest_house/groundSeamless.jpg", scene);
                terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 10;
                terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 10;
                terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 15;
                sceneMesh.material = terrainMaterial;
            } else if (meshName.search("Box_Cube") >= 0) {
                this.colliders.push(sceneMesh);
            } else if (meshName.search("sps_trees") >= 0) {
                spsTrees.push(sceneMesh);
            } else if (meshName.search("sps_groundPlants") >= 0) {
                spsPlants.push(sceneMesh);
            } else if (meshName.search("sps_stones") >= 0) {
                spsStones.push(sceneMesh);
            } else if (meshName.search("sps_fern") >= 0) {
                spsFern.push(sceneMesh);
            } else {
                sceneMesh.isPickable = false;
            }
        }

        //SPS Nature
        let spruce = game.factories['nature_grain'].createInstance('spruce', false);
        spruce.visibility = 0;
        spruce.material.freeze();

        let groundPlants = game.factories['nature_grain'].createInstance('ground_plants', false);
        groundPlants.visibility = 0;
        groundPlants.material.freeze();

        let fern = game.factories['nature_grain'].createInstance('fern', false);
        fern.visibility = 0;
        fern.material.freeze();

        let stone = game.factories['nature_grain'].createInstance('stone', false);
        stone.visibility = 0;
        stone.material.freeze();

        spsTrees.forEach(function(parentSPS) {
            let spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, spruce, false);
            spsSpruce.buildSPS(67);
        });

        spsPlants.forEach(function(parentSPS) {
            let spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, groundPlants, false);
            spsSpruce.buildSPS(40);
        });

        spsStones.forEach(function(parentSPS) {
            let spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, stone, false);
            spsSpruce.buildSPS(67);
        });

        spsFern.forEach(function(parentSPS) {
            let spsSpruce = new Particles.SolidParticleSystem.Nature(game, parentSPS, fern, false);
            spsSpruce.buildSPS(67);
        });

        let spsToBlock = scene.getMeshByName("sps_border");
        let spsSpruceBlock = new Particles.SolidParticleSystem.NatureBlock(game, spsToBlock, spruce);
        spsSpruceBlock.buildSPS(500);
        stone.dispose();
        spruce.dispose();
        groundPlants.dispose();
        fern.dispose();

        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.4;
        light.position = new BABYLON.Vector3(0, 50, 0);
        light.direction = new BABYLON.Vector3(0.45, -2.5, 0);

        light.shadowMaxZ = 500;
        var shadowGenerator = new BABYLON.ShadowGenerator(2048, light);
        // shadowGenerator.useBlurExponentialShadowMap = true;
        shadowGenerator.useExponentialShadowMap = true;
        shadowGenerator.usePoissonSampling = true;
        // shadowGenerator.frustumEdgeFalloff = 1.0;
        // shadowGenerator.useKernelBlur = true;
        // shadowGenerator.blurKernel = 16;
        // shadowGenerator.usePercentageCloserFiltering = true;
        // shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;

        shadowGenerator.getShadowMap().refreshRate = BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE;
        // light.autoUpdateExtends = false;
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

        //TODO: shadow player

        let listener = function listener() {
            let playerLight = new BABYLON.SpotLight("playerLightSpot",
                new BABYLON.Vector3(0, 45, 0),
                new BABYLON.Vector3(0, -1, 0),
                null,
                null,
                game.getScene());
            // var playerLight = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(0, 80, 0),
            //     game.getScene());
            playerLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
            playerLight.angle = 0.7;
            playerLight.exponent = 70;
            playerLight.intensity = 0.8;
            playerLight.parent = game.player.mesh;
            game.player.playerLight = playerLight;

            let shadowGenerator = new BABYLON.ShadowGenerator(512, playerLight);
            // shadowGenerator.useBlurExponentialShadowMap = true;
            shadowGenerator.useBlurExponentialShadowMap = true;
            shadowGenerator.useExponentialShadowMap = true;
            shadowGenerator.usePoissonSampling = true;
            // shadowGenerator.frustumEdgeFalloff = 1.0;
            shadowGenerator.useKernelBlur = true;
            shadowGenerator.blurKernel = 32;
            // shadowGenerator.usePercentageCloserFiltering = true;
            // shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;

            // shadowGenerator.getShadowMap().refreshRate = BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE;

            game.player.playerShadowGenerator = shadowGenerator;
            shadowGenerator.getShadowMap().renderList.push(game.player.mesh);
        };
        document.addEventListener(Events.PLAYER_CONNECTED, listener);
        new BABYLON.Sound("Forest night", "assets/sounds/fx/wind.mp3", scene, null, { loop: true, autoplay: true, volume: 0.1 });
        new BABYLON.Sound("Forest night", "assets/sounds/forest_night.mp3", scene, null, { loop: true, autoplay: true, volume: 0.3 });
    }

}
