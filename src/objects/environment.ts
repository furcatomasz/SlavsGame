/// <reference path="../game.ts"/>

class Environment {

    trees: Array<BABYLON.AbstractMesh>;
    bushes: Array<BABYLON.AbstractMesh>;
    colliders: Array<BABYLON.AbstractMesh>;
    entrace: BABYLON.AbstractMesh;
    ground: BABYLON.AbstractMesh;

    constructor(game:Game, scene: BABYLON.Scene) {
        let self = this;
        this.trees = [];
        this.bushes = [];
        this.colliders = [];

        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];

            if (meshName.search("Forest_ground") >= 0) {
                sceneMesh.receiveShadows = true;
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                this.ground = sceneMesh;
            } else if (meshName.search("Spruce") >= 0) {
                sceneMesh.isPickable = false;
                this.trees.push(sceneMesh);
                this.colliders.push(sceneMesh);
            } else if (meshName.search("Fance") >= 0) {
                this.colliders.push(sceneMesh);
            }

        }

         for (var i = 0; i < this.trees.length; i++) {
             var meshTree = this.trees[i];

             var minimum = meshTree.getBoundingInfo().boundingBox.minimum.clone();
             var maximum = meshTree.getBoundingInfo().boundingBox.maximum.clone();
             var scaling = BABYLON.Matrix.Scaling(0.5, 0.5, 0.5);

             minimum = BABYLON.Vector3.TransformCoordinates(minimum, scaling);
             maximum = BABYLON.Vector3.TransformCoordinates(maximum, scaling);
             meshTree._boundingInfo = new BABYLON.BoundingInfo(minimum, maximum);
             meshTree.computeWorldMatrix(true);
         }


        let cone = scene.getMeshByName("Fireplace");
        if (cone) {
            let smokeSystem = new Particles.FireplaceSmoke(game, cone).particleSystem;
            smokeSystem.start();

            let fireSystem = new Particles.FireplaceFire(game, cone).particleSystem;
            fireSystem.start();

            // var sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, { loop: true, autoplay: true });
            // sfxFireplace.attachToMesh(cone);
        }

        let plane = scene.getMeshByName("Entrace_city");
        if (plane) {
            plane.visibility = 0;
            plane.isPickable = false;
            let smokeSystem = new Particles.Entrace(game, plane).particleSystem;
            smokeSystem.start();
        }
        this.entrace = plane;

        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];

            sceneMesh.freezeWorldMatrix();
        }

        // var bowls = new BABYLON.Sound("Fire", "assets/sounds/forest_night.mp3", scene, null, { loop: true, autoplay: true });

    }
}