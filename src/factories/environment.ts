/// <reference path="../game.ts"/>

class Environment {

    bushes: Array<BABYLON.AbstractMesh>;
    colliders: Array<BABYLON.AbstractMesh>;
    entrace: BABYLON.AbstractMesh;
    ground: BABYLON.AbstractMesh;
    shadowGenerator: BABYLON.ShadowGenerator;

    constructor(game: Game, scene: BABYLON.Scene) {
        let self = this;
        let trees = [];
        this.bushes = [];
        this.colliders = [];

        let light = this.enableDayAndNight(game, game.getScene().lights[0]);
        //let light = game.getScene().lights[0];
        //light.intensity = 1;

        //let shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
        //this.shadowGenerator = shadowGenerator;

        for (let i = 0; i < scene.meshes.length; i++) {
            let sceneMesh = scene.meshes[i];
            let meshName = scene.meshes[i]['name'];

            if (meshName.search("Forest_ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                this.ground = sceneMesh;
                //sceneMesh.receiveShadows = true;
            } else if (meshName.search("Spruce") >= 0) {
                sceneMesh.isPickable = false;
                trees.push(sceneMesh);
                this.colliders.push(sceneMesh);
            } else if (meshName.search("Fance") >= 0) {
                this.colliders.push(sceneMesh);
            }

            //shadowGenerator.getShadowMap().renderList.push(sceneMesh);

        }

        for (let i = 0; i < trees.length; i++) {
            let meshTree = trees[i];

            let minimum = meshTree.getBoundingInfo().boundingBox.minimum.clone();
            let maximum = meshTree.getBoundingInfo().boundingBox.maximum.clone();
            let scaling = BABYLON.Matrix.Scaling(0.5, 1, 0.5);

            minimum = BABYLON.Vector3.TransformCoordinates(minimum, scaling);
            maximum = BABYLON.Vector3.TransformCoordinates(maximum, scaling);
            meshTree._boundingInfo = new BABYLON.BoundingInfo(minimum, maximum);
            meshTree.computeWorldMatrix(true);
        }
        trees = null;

        ///Freeze world matrix all static meshes
        for (let i = 0; i < scene.meshes.length; i++) {
            scene.meshes[i].freezeWorldMatrix();
        }

        ////fireplace
        let cone = scene.getMeshByName("Fireplace");
        if (cone) {
            let fireplaceLight = new BABYLON.PointLight("fireplaceLight", new BABYLON.Vector3(0, 3, 0), scene);
            fireplaceLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
            fireplaceLight.parent = cone;
            fireplaceLight.range = 140;

            let smokeSystem = new Particles.FireplaceSmoke(game, cone).particleSystem;
            smokeSystem.start();

            let fireSystem = new Particles.FireplaceFire(game, cone).particleSystem;
            fireSystem.start();

            let sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, {
                loop: true,
                autoplay: true
            });
            sfxFireplace.attachToMesh(cone);
        }

        ///portal to town
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

        ///register colliders
        for (let i = 0; i < this.colliders.length; i++) {
            let sceneMesh = this.colliders[i];
            Collisions.setCollider(scene, sceneMesh);
        }

        new BABYLON.Sound("Fire", "assets/sounds/forest_night.mp3", scene, null, {loop: true, autoplay: true});

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