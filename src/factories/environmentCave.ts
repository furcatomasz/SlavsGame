/// <reference path="../game.ts"/>

class EnvironmentCave {

    ground: BABYLON.AbstractMesh;
    shadowGenerator: BABYLON.ShadowGenerator;

    constructor(game: Game, scene: BABYLON.Scene) {
        let self = this;
        let trees = [];
        this.bushes = [];
        this.colliders = [];

        //let light = this.enableDayAndNight(game, game.getScene().lights[0]);
        // for (let i = 0; i < scene.lights.length; i++) {
        //     let light = scene.lights[i];
        //     light.intensity = (light.intensity);
            //light.range = 47;
        // }
        // var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);
        //let shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
        //this.shadowGenerator = shadowGenerator;

        for (let i = 0; i < scene.meshes.length; i++) {
            let sceneMesh = scene.meshes[i];
            let meshName = scene.meshes[i]['name'];

            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                this.ground = sceneMesh;
                //sceneMesh.receiveShadows = true;
            } else if(meshName.search("Plane") >= 0) {
                // Water
                var waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 512, 512, 32, scene, false);
                var water = new BABYLON.WaterMaterial("water", scene, new BABYLON.Vector2(512, 512));
                water.backFaceCulling = true;
                water.bumpTexture = new BABYLON.Texture("assets/Smoke3.png", scene);
                water.windForce = -5;
                water.waveHeight = 0.2;
                water.bumpHeight = 0.05;
                water.waterColor = new BABYLON.Color3(0.047, 0.23, 0.015);
                water.colorBlendFactor = 0.5;
                // water.addToRenderList(skybox);
                // water.addToRenderList(ground);
                sceneMesh.material = water;
            } else if (meshName.search("Box_Cube") >= 0) {
                console.log('collider add'  +meshName              );
                this.colliders.push(sceneMesh);

            } else {
                sceneMesh.isPickable = false;

                ///others
            }

        }

        ///Freeze world matrix all static meshes
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