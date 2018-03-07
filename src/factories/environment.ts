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
        // let light = this.enableDayAndNight(game, game.getScene().lights[1]);
        // for (let i = 0; i < scene.lights.length; i++) {
        //     let light = scene.lights[i];
        //     light.intensity = (light.intensity);
            //light.range = 47;
        // }
        //var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);
        //let shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
        //this.shadowGenerator = shadowGenerator;

        let fern = null;
        for (let i = 0; i < scene.meshes.length; i++) {
            let sceneMesh = scene.meshes[i];
            let meshName = scene.meshes[i]['name'];

            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                this.ground = sceneMesh;

                var myTexture = new BABYLON.Texture("assets/scenes/Forest_house/Grass_seamless_saturation.png", scene);
                myTexture.uScale = 10.0;
                myTexture.vScale = 10.0;
                sceneMesh.material.diffuseTexture = myTexture;
                //sceneMesh.receiveShadows = true;
            } else if (meshName.search("Box_Cube") >= 0) {

                this.colliders.push(sceneMesh);

            } else {
                sceneMesh.isPickable = false;

                ///others
            }

        }
//TODO: SPS Nature
// console.log(game, game.factories);
        // let fern = game.factories['nature_grain'].createInstance('Fern', false);
        // console.log(fern);
        //
        // let fact = 100;
        // var myPositionFunction = function(particle, i, s) {
        //     particle.position.x = (Math.random() - 0.5) * fact;
        //     particle.position.y = 0;
        //     particle.position.z = (Math.random() - 0.5) * fact;
        //     // particle.rotation.x = Math.random() * 3.15;
        //     // particle.rotation.y = Math.random() * 3.15;
        //     // particle.rotation.z = Math.random() * 1.5;
        // };
        //
        // var SPS = new BABYLON.SolidParticleSystem("SPS", scene);
        // SPS.addShape(fern, 5000, {positionFunction: myPositionFunction});
        // var mesh = SPS.buildMesh();

        // let SPSPlain = scene.getMeshByName("Ground");
        // if (SPSPlain) {
        //     SPSPlain.updateFacetData();
        //     var positions = SPSPlain.getFacetLocalPositions();
        //     var normals = SPSPlain.getFacetLocalNormals();
        //
        //     var lines = [];
        //     for (var i = 0; i < positions.length; i++) {
        //         var line = [ positions[i], positions[i].add(normals[i]) ];
        //         console.log(line);
        //         lines.push(line);
        //     }
        //     var lineSystem = BABYLON.MeshBuilder.CreateLineSystem("ls", {lines: lines}, scene);
        //     lineSystem.color = BABYLON.Color3.Green();
        // }
        ///Freeze world matrix all static meshes
        for (let i = 0; i < scene.meshes.length; i++) {
            scene.meshes[i].freezeWorldMatrix();
        }

        ////fireplace
        let cone = scene.getMeshByName("Fireplace");
        if (cone) {
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
        let plane = scene.getMeshByName("Cave_entrace");
        if (plane) {
            this.entrace = plane;
            plane.visibility = 0;
            plane.isPickable = false;
            let smokeSystem = new Particles.CaveEntrace(game, plane).particleSystem;
            smokeSystem.start();

            let listener = function listener() {
                game.player.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: plane
                }, function () {
                    game.sceneManager.changeScene(new Cave());
                    return this;
                }));

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };

            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }

        ///town entrace
        let plane = scene.getMeshByName("Entrace_Town");

        if (plane) {
            this.entrace = plane;
            plane.visibility = 0;
            plane.isPickable = false;
            let smokeSystem = new Particles.CastleEnter(game, plane).particleSystem;
            smokeSystem.start();

            let listener2 = function listener() {
                game.player.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: plane
                }, function () {
                    game.sceneManager.changeScene(new Castle());
                    return this;
                }));

                document.removeEventListener(Events.PLAYER_CONNECTED, listener2);
            };

            document.addEventListener(Events.PLAYER_CONNECTED, listener2);
        }

        ///Cave entrace
        let plane = scene.getMeshByName("Entrace_Cave");

        if (plane) {
            this.entrace = plane;
            plane.visibility = 0;
            plane.isPickable = false;
            let smokeSystem = new Particles.CastleEnter(game, plane).particleSystem;
            smokeSystem.start();

            let listener2 = function listener() {
                game.player.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: plane
                }, function () {
                    game.sceneManager.changeScene(new Cave());
                    return this;
                }));

                document.removeEventListener(Events.PLAYER_CONNECTED, listener2);
            };

            document.addEventListener(Events.PLAYER_CONNECTED, listener2);
        }

        ///register colliders
        for (let i = 0; i < this.colliders.length; i++) {
            let sceneMeshCollider = this.colliders[i];
            Collisions.setCollider(scene, sceneMeshCollider);
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