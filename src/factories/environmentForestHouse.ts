/// <reference path="../game.ts"/>

class EnvironmentForestHouse {

    colliders: Array<BABYLON.AbstractMesh>;
    ground: BABYLON.AbstractMesh;

    constructor(game: Game, scene: BABYLON.Scene) {
        let self = this;
        this.colliders = [];

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
                terrainMaterial.diffuseTexture2 = new BABYLON.Texture("assets/scenes/Forest_house/Dirt.png", scene);
                terrainMaterial.diffuseTexture3 = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.png", scene);
                terrainMaterial.diffuseTexture1.uScale = terrainMaterial.diffuseTexture1.vScale = 10;
                terrainMaterial.diffuseTexture2.uScale = terrainMaterial.diffuseTexture2.vScale = 10;
                terrainMaterial.diffuseTexture3.uScale = terrainMaterial.diffuseTexture3.vScale = 10;
                sceneMesh.material = terrainMaterial;
            } else if (meshName.search("Box_Cube") >= 0) {

                this.colliders.push(sceneMesh);

            } else {
                sceneMesh.isPickable = false;

                ///others
            }

        }
//TODO: SPS Nature

        let spruce = game.factories['nature_grain'].createInstance('spruce', false);
        spruce.visibility = 0;

        let groundPlants = game.factories['nature_grain'].createInstance('plantsGround', false);
        // groundPlants.visibility = 0;

        let fern = game.factories['nature_grain'].createInstance('fern', false);
        fern.visibility = 0;

        var parentSPS = scene.getMeshByName("Plane.004");
        var positions = parentSPS.getVerticesData(BABYLON.VertexBuffer.PositionKind);
        var myBuilder = function(particle, i, s) {
            var randomPosition = Math.round(Math.random()*10);
            var position = new BABYLON.Vector3(positions[s*randomPosition*3], positions[s*randomPosition*3+1], positions[s*randomPosition*3+2]);
            particle.position = position;
            particle.scaling.y = Math.random() + 1;
        }

        ///Spruce
        var SPSSpruce = new BABYLON.SolidParticleSystem('SPSSpruce', scene, {updatable: false});
        SPSSpruce.addShape(spruce, 200, {positionFunction: myBuilder});
        var SPSMeshSpruce = SPSSpruce.buildMesh();
        SPSMeshSpruce.material = spruce.material;
        SPSMeshSpruce.parent = parentSPS;

        ///Fern
        var SPSFern = new BABYLON.SolidParticleSystem('SPSFern', scene, {updatable: false});
        SPSFern.addShape(fern, 500, {positionFunction: myBuilder});
        var SPSMeshFern = SPSFern.buildMesh();
        SPSMeshFern.material = fern.material;
        SPSMeshFern.parent = parentSPS;

        ///PLants
        var SPSPlants = new BABYLON.SolidParticleSystem('SPSPlants', scene, {updatable: true});
        SPSPlants.addShape(groundPlants, 500, {positionFunction: myBuilder});
        var SPSMeshPlants = SPSPlants.buildMesh();
        SPSMeshPlants.material = groundPlants.material;
        SPSMeshPlants.parent = parentSPS;



        scene.lights[0].intensity = 0;
        // scene.lights[1].intensity = 0;
        var light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.4;
        light.position = new BABYLON.Vector3(0, 80, -210);
        light.direction = new BABYLON.Vector3(0.45, -0.45, 0.45);
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

        ////fireplace
        // let cone = scene.getMeshByName("Fireplace");
        // if (cone) {
        //     let smokeSystem = new Particles.FireplaceSmoke(game, cone).particleSystem;
        //     smokeSystem.start();
        //
        //     let fireSystem = new Particles.FireplaceFire(game, cone).particleSystem;
        //     fireSystem.start();
        //
        //     let sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, {
        //         loop: true,
        //         autoplay: true
        //     });
        //     sfxFireplace.attachToMesh(cone);
        // }

        ///register colliders
        for (let i = 0; i < this.colliders.length; i++) {
            let sceneMeshCollider = this.colliders[i];
            Collisions.setCollider(scene, sceneMeshCollider);
        }

        new BABYLON.Sound("Fire", "assets/sounds/forest_night.mp3", scene, null, {loop: true, autoplay: true});

        //Freeze world matrix all static meshes
        for (let i = 0; i < scene.meshes.length; i++) {
            scene.meshes[i].freezeWorldMatrix();
        }
    }

}