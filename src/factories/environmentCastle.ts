/// <reference path="../game.ts"/>

class EnvironmentCastle {

    bushes:Array<BABYLON.AbstractMesh>;
    colliders:Array<BABYLON.AbstractMesh>;
    fires:Array<BABYLON.AbstractMesh>;
    entrace:BABYLON.AbstractMesh;
    ground:BABYLON.AbstractMesh;
    shadowGenerator:BABYLON.ShadowGenerator;

    constructor(game:Game, scene:BABYLON.Scene) {
        let self = this;
        this.fires = [];
        this.bushes = [];
        this.colliders = [];

        for (let i = 0; i < scene.lights.length; i++) {
            let light = scene.lights[i];
            light.intensity = (light.intensity/3);
            light.range = 47;
        }

        for (let i = 0; i < scene.meshes.length; i++) {
            let sceneMesh = scene.meshes[i];
            let meshName = scene.meshes[i]['name'];

            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                this.ground = sceneMesh;
            } else if (meshName.search("Fire") >= 0) {
                this.fires.push(sceneMesh);
            } else if (meshName.search("Tower.043") >= 0) {

            } else {
                sceneMesh.isPickable = false;
                this.colliders.push(sceneMesh);
            }
        }

        /////Freeze world matrix all static meshes
        //for (let i = 0; i < scene.meshes.length; i++) {
        //    scene.meshes[i].freezeWorldMatrix();
        //}

        ////fireplace
        if (this.fires.length) {
            this.fires.forEach(function (fire, key) {
                let fireSystem = new Particles.TorchFire(game, fire).particleSystem;
                fireSystem.start();
            });
        }

        ///portal to town
        let plane = scene.getMeshByName("Castle_exit");
        if (plane) {
            this.entrace = plane;
            plane.isPickable = false;
            let smokeSystem = new Particles.CastleExit(game, plane).particleSystem;
            smokeSystem.start();

            let listener = function listener() {
                game.player.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: plane
                }, function () {
                    game.sceneManager.changeScene(new Mountains());
                    return this;
                }));

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };

            document.addEventListener(Events.PLAYER_CONNECTED, listener);

        }

        ///register colliders
        // for (let i = 0; i < this.colliders.length; i++) {
        //     let sceneMesh = this.colliders[i];
        //     Collisions.setCollider(scene, sceneMesh);
        // }

        //new BABYLON.Sound("Fire", "assets/sounds/forest_night.mp3", scene, null, {loop: true, autoplay: true});

        var planeWater = BABYLON.Mesh.CreateGround("waterMesh", 80, 30, 32, game.getScene(), false);
        planeWater.visibility = 0;
        planeWater.position.x = -110;
        planeWater.position.y = -3;
        planeWater.position.z = -4;
        //let fogParticleSystem = new Particles.Fog(game, planeWater);
        //fogParticleSystem.particleSystem.start();
    }

    protected enableDayAndNight(game, light:BABYLON.Light):BABYLON.Light {
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