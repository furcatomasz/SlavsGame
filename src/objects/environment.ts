/// <reference path="../game.ts"/>

class Environment {

    trees: Array<BABYLON.AbstractMesh>;
    bushes: Array<BABYLON.AbstractMesh>;

    entrace: BABYLON.AbstractMesh;

    constructor(game:Game, scene: BABYLON.Scene) {
        let self = this;
        this.trees = [];
        this.bushes = [];
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];

            // sceneMesh.material.freeze();
            sceneMesh.freezeWorldMatrix();

            if (meshName.search("Forest_ground") >= 0) {
                 sceneMesh.receiveShadows = true;
            } else if (meshName.search("Spruce") >= 0) {
                sceneMesh.isPickable = false;
                this.trees.push(sceneMesh);
            }

            //game.sceneManager.shadowGenerator.getShadowMap().renderList.push(sceneMesh);

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
        console.log(cone);
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

        let plane = scene.getMeshByName("Plane");
        if (plane) {
            plane.visibility = 0;
            plane.isPickable = 0;
            var smokeSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
            smokeSystem.particleTexture = new BABYLON.Texture("/assets/flare.png", scene);
            smokeSystem.emitter = plane; // the starting object, the emitter
            smokeSystem.minEmitBox = new BABYLON.Vector3(-0.8, 0, -0.7); // Starting all from
            smokeSystem.maxEmitBox = new BABYLON.Vector3(-0.8, 2, 0.7); // To...

            smokeSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
            smokeSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
            smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

            smokeSystem.minSize = 0.1;
            smokeSystem.maxSize = 0.5;

            smokeSystem.minLifeTime = 0.3;
            smokeSystem.maxLifeTime = 1.5;

            smokeSystem.emitRate = 2000;

            smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

            smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            smokeSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

            smokeSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
            smokeSystem.direction2 = new BABYLON.Vector3(0, 0.25, 0);

            smokeSystem.minAngularSpeed = 0;
            smokeSystem.maxAngularSpeed = Math.PI;

            smokeSystem.minEmitPower = 0.5;
            smokeSystem.maxEmitPower = 1.5;
            smokeSystem.updateSpeed = 0.004;

            smokeSystem.start();

            game.getScene().registerAfterRender(function() {
                if(game.player && self.entrace) {
                    if (game.player.mesh.intersectsMesh(self.entrace, true)) {
                        game.player.mesh.position = new BABYLON.Vector3(3, 0.1, 0);
                        //game.enemies.push(new Worm('Worm', 'Worm', game, new BABYLON.Vector3(3, 0.1, 0), new BABYLON.Quaternion(3, 0.1, 0, 0)));
                    }
                }
            });
        }
        this.entrace = plane;


    }
}