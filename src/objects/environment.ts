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
        if (cone) {
            let smokeSystem = new Particles.FireplaceSmoke(game, cone).particleSystem;
            smokeSystem.start();

            let fireSystem = new Particles.FireplaceFire(game, cone).particleSystem;
            fireSystem.start();

            var sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, { loop: true, autoplay: true });
            sfxFireplace.attachToMesh(cone);
        }

        let plane = scene.getMeshByName("Plane");
        if (plane) {
            plane.visibility = 0;
            plane.isPickable = 0;
            let smokeSystem = new Particles.Entrace(game, plane).particleSystem;
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