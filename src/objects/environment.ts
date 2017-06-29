/// <reference path="../game.ts"/>

class Environment {

    tree: BABYLON.AbstractMesh;
    trees: Array<BABYLON.AbstractMesh>;

    bush: BABYLON.AbstractMesh;
    bushes: Array<BABYLON.AbstractMesh>;

    constructor(game:Game, scene: BABYLON.Scene) {
        this.trees = [];
        this.bushes = [];

        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];

            // sceneMesh.material.freeze();
            sceneMesh.freezeWorldMatrix();

            if (meshName.search("Bush") >= 0) {
                this.bushes.push(sceneMesh);
                if(!this.bush) {
                    this.bush = sceneMesh;
                }

            } else if (meshName.search("Forest_ground") >= 0) {
                sceneMesh.receiveShadows = true;
            } else if (meshName.search("choinka") >= 0) {
                this.trees.push(sceneMesh);
                if(!this.tree) {
                    this.tree = sceneMesh;
                }
            } else {
                //game.sceneManager.shadowGenerator.getShadowMap().renderList.push(sceneMesh);
            }

        }

        // for (var i = 0; i < this.trees.length; i++) {
        //     var meshTree = this.trees[i];
        //     if(meshTree == this.tree) {
        //         continue;
        //     }
        //
        //     if(i > 0) {
        //         let tree = this.tree.createInstance('instanceTree_' + i);
        //         tree.position = meshTree.position;
        //         tree.rotation = meshTree.rotation;
        //         tree.scaling = meshTree.scaling;
        //
        //         meshTree.dispose();
        //     }
        // }

        //for (var i = 0; i < this.bushes.length; i++) {
        //    var meshBush = this.bushes[i];
        //
        //    if(meshBush == this.bush) {
        //        continue;
        //    }
        //
        //    if(i > 0) {
        //        meshBush.dispose();
        //
        //        let bush = this.bush.createInstance('instanceBush_' + i);
        //        bush.position = meshBush.position;
        //        bush.rotation = meshBush.rotation;
        //        bush.scaling = meshBush.scaling;
        //
        //    }
        //}

        let cone = scene.getMeshByName("Fireplace");
        if (cone) {
            var smokeSystem = new BABYLON.ParticleSystem("particles", 1000, scene);
            smokeSystem.particleTexture = new BABYLON.Texture("/assets/flare.png", scene);
            smokeSystem.emitter = cone; // the starting object, the emitter
            smokeSystem.minEmitBox = new BABYLON.Vector3(0.5, 0, 0.5); // Starting all from
            smokeSystem.maxEmitBox = new BABYLON.Vector3(1.5, 0, 1.5); // To...

            smokeSystem.color1 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
            smokeSystem.color2 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
            smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

            smokeSystem.minSize = 0.3;
            smokeSystem.maxSize = 1;

            smokeSystem.minLifeTime = 0.3;
            smokeSystem.maxLifeTime = 1.5;

            smokeSystem.emitRate = 350;

            smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

            smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);

            smokeSystem.direction1 = new BABYLON.Vector3(-1.5, 8, -1.5);
            smokeSystem.direction2 = new BABYLON.Vector3(1.5, 8, 1.5);

            smokeSystem.minAngularSpeed = 0;
            smokeSystem.maxAngularSpeed = Math.PI;

            smokeSystem.minEmitPower = 0.5;
            smokeSystem.maxEmitPower = 1.5;
            smokeSystem.updateSpeed = 0.004;

            smokeSystem.start();
            var fireSystem = new BABYLON.ParticleSystem("particles", 2000, scene);

            fireSystem.particleTexture = new BABYLON.Texture("/assets/flare.png", scene);

            fireSystem.emitter = cone; // the starting object, the emitter
            fireSystem.minEmitBox = new BABYLON.Vector3(0.5, 0, 0.5); // Starting all from
            fireSystem.maxEmitBox = new BABYLON.Vector3(1.5, 0, 1.5); // To...

            fireSystem.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
            fireSystem.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
            fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

            fireSystem.minSize = 0.2;
            fireSystem.maxSize = 0.7;

            fireSystem.minLifeTime = 0.2;
            fireSystem.maxLifeTime = 0.4;

            fireSystem.emitRate = 300;

            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

            fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);

            fireSystem.direction1 = new BABYLON.Vector3(0, 2, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 2, 0);

            fireSystem.minAngularSpeed = -10;
            fireSystem.maxAngularSpeed = Math.PI;

            fireSystem.minEmitPower = 1;
            fireSystem.maxEmitPower = 3;
            fireSystem.updateSpeed = 0.004;

            fireSystem.start();


        var sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, { loop: true, autoplay: true });
        sfxFireplace.attachToMesh(cone);

        }

    }
}