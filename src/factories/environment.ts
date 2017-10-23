/// <reference path="../game.ts"/>

class Environment {

    trees: Array<BABYLON.AbstractMesh>;
    bushes: Array<BABYLON.AbstractMesh>;
    colliders: Array<BABYLON.AbstractMesh>;
    entrace: BABYLON.AbstractMesh;
    ground: BABYLON.AbstractMesh;
    shadowGenerator: BABYLON.ShadowGenerator;

    constructor(game:Game, scene: BABYLON.Scene) {
        let self = this;
        this.trees = [];
        this.bushes = [];
        this.colliders = [];

        //let light = this.enableDayAndNight(game, game.getScene().lights[0]);
        let light  = game.getScene().lights[0];
        light.intensity = 1;

        //let shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
        //this.shadowGenerator = shadowGenerator;

        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];

            if (meshName.search("Forest_ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                this.ground = sceneMesh;
                //sceneMesh.receiveShadows = true;
            } else if (meshName.search("Spruce") >= 0) {
                sceneMesh.isPickable = false;
                this.trees.push(sceneMesh);
                this.colliders.push(sceneMesh);
            } else if (meshName.search("Fance") >= 0) {
                this.colliders.push(sceneMesh);
            }

            //shadowGenerator.getShadowMap().renderList.push(sceneMesh);

        }

         // for (var i = 0; i < this.trees.length; i++) {
         //     var meshTree = this.trees[i];
         //
         //     var minimum = meshTree.getBoundingInfo().boundingBox.minimum.clone();
         //     var maximum = meshTree.getBoundingInfo().boundingBox.maximum.clone();
         //     var scaling = BABYLON.Matrix.Scaling(0.3, 1, 0.3);
         //
         //     minimum = BABYLON.Vector3.TransformCoordinates(minimum, scaling);
         //     maximum = BABYLON.Vector3.TransformCoordinates(maximum, scaling);
         //     meshTree._boundingInfo = new BABYLON.BoundingInfo(minimum, maximum);
         //     meshTree.computeWorldMatrix(true);
         // }


        let cone = scene.getMeshByName("Fireplace");
        if (cone) {
            var fireplaceLight = new BABYLON.PointLight("fireplaceLight", new BABYLON.Vector3(0, 3, 0), scene);
            fireplaceLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
            fireplaceLight.parent = cone;
            fireplaceLight.range = 140;

            let smokeSystem = new Particles.FireplaceSmoke(game, cone).particleSystem;
            smokeSystem.start();

            let fireSystem = new Particles.FireplaceFire(game, cone).particleSystem;
            fireSystem.start();

             var sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, { loop: true, autoplay: true });
             sfxFireplace.attachToMesh(cone);
        }

        let plane = scene.getMeshByName("Entrace_city");
        if (plane) {
            this.entrace = plane;
            plane.visibility = 0;
            plane.isPickable = false;
            let smokeSystem = new Particles.Entrace(game, plane).particleSystem;
            smokeSystem.start();

            let listener = function listener() {
                game.player.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: plane
                }, function () {
                    game.sceneManager.changeScene(new SimpleBandit());
                    return this;
                }));

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };

            document.addEventListener(Events.PLAYER_CONNECTED, listener);

            }

        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            sceneMesh.checkCollisions = true;
            sceneMesh.showBoundingBox = true;
            sceneMesh.ellipsoid = new BABYLON.Vector3(3, 3, 3);

            // sceneMesh.freezeWorldMatrix();
            // sceneMesh.getBoundingInfo().isLocked = true
        }


        // let listener2 = function listener2 () {
        //     for (let i = 0; i < self.colliders.length; i++) {
        //         let sceneMesh = self.colliders[i];
        //         game.player.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
        //             {trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: sceneMesh},
        //             function () {
        //                 game.controller.targetPoint = null;
        //                 game.controller.ball.visibility = 0;
        //                 game.controller.forward = false;
        //                 game.player.mesh.translate(BABYLON.Axis.Z, 0.35, BABYLON.Space.LOCAL);
        //                 game.getScene().activeCamera.position = game.player.mesh.position;
        //             }));
        //     }
        //
        //     document.removeEventListener(Events.PLAYER_CONNECTED, listener2);
        // };
        // document.addEventListener(Events.PLAYER_CONNECTED, listener2);

        new BABYLON.Sound("Fire", "assets/sounds/forest_night.mp3", scene, null, { loop: true, autoplay: true });

    }

    protected enableDayAndNight(game, light: BABYLON.Light): BABYLON.Light {
        light.intensity = 0;
        var keys = [];
        keys.push({
            frame: 0,
            value: 0
        });

        keys.push({
            frame: 80,
            value: 0
        });

        keys.push({
            frame: 100,
            value: 1
        });

        keys.push({
            frame: 180,
            value: 1
        });

        keys.push({
            frame: 200,
            value: 0
        });

        var animationBox = new BABYLON.Animation("mainLightIntensity", "intensity", 10,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        animationBox.setKeys(keys);

        light.animations = [];
        light.animations.push(animationBox);
        game.getScene().beginAnimation(light, 0, 200, true);
        return light;
    };
}