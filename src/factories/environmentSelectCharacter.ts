/// <reference path="../game.ts"/>

class EnvironmentSelectCharacter {

    shadowGenerator: BABYLON.ShadowGenerator;

    constructor(game:Game, scene: BABYLON.Scene) {
        let self = this;

        ////LIGHT
        let light = game.getScene().lights[0];
        light.intensity = 0;
        var fireplaceLight = new BABYLON.PointLight("fireplaceLight", new BABYLON.Vector3(0, 1, 0), scene);
        fireplaceLight.diffuse = new BABYLON.Color4(1, 0.7, 0.3, 1);
        fireplaceLight.range = 35;

        var intensityAnimation = new BABYLON.Animation(
            "mainLightIntensity",
            "intensity",
            50,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        intensityAnimation.setKeys([
            {
                frame: 0,
                value: 0.85
            },
            {
                frame: 5,
                value: 0.9
            },
            {
                frame: 10,
                value: 0.82
            }
        ]);

        var colorAnimation = new BABYLON.Animation(
            "mainLightColor",
            "specular",
            50,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        colorAnimation.setKeys([
            {
                frame: 20,
                value: new BABYLON.Color3(1, 1, 1),
            },
            {
                frame: 25,
                value: new BABYLON.Color3(1, 0, 1),
            },
            {
                frame: 30,
                value: new BABYLON.Color3(1, 1, 1),
            }
        ]);

        fireplaceLight.animations = [];
        fireplaceLight.animations.push(intensityAnimation);
        //fireplaceLight.animations.push(colorAnimation);
        game.getScene().beginAnimation(fireplaceLight, 0, 10, true);
        //game.getScene().beginAnimation(fireplaceLight, 20, 30, true);
        let shadowGenerator = new BABYLON.ShadowGenerator(1024, fireplaceLight);
        this.shadowGenerator = shadowGenerator;

        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];

            if (meshName.search("Forest_ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
                sceneMesh.material.emissiveColor = new BABYLON.Vector3(0.05,0.05,0.05);
                continue;
            }
            shadowGenerator.getShadowMap().renderList.push(sceneMesh);

        }

        let cone = scene.getMeshByName("Fireplace");
        if (cone) {
            fireplaceLight.parent = cone;
            let smokeSystem = new Particles.FireplaceSmoke(game, cone).particleSystem;
            smokeSystem.start();

            let fireSystem = new Particles.FireplaceFire(game, cone).particleSystem;
            fireSystem.start();

             //var sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, { loop: true, autoplay: true });
             //sfxFireplace.attachToMesh(cone);
        }

        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            sceneMesh.freezeWorldMatrix();
        }

        var bowls = new BABYLON.Sound("Fire", "assets/sounds/forest_night.mp3", scene, null, { loop: true, autoplay: true });
        var bowls = new BABYLON.Sound("Fire", "assets/sounds/fx/wind.mp3", scene, null, { loop: true, autoplay: true });

    }
}