import {Game} from "../game";
import {FireplaceSmoke} from "../Particles/FireplaceSmoke";
import {FireplaceFire} from "../Particles/FireplaceFire";

export class EnvironmentSelectCharacter {

    shadowGenerator: BABYLON.ShadowGenerator;

    constructor(game:Game, scene: BABYLON.Scene) {
        ////LIGHT
        let light = game.getScene().lights[0];
        light.dispose();
        let fireplaceLight = new BABYLON.PointLight("fireplaceLight", new BABYLON.Vector3(0, 2.5, 0), scene);
        fireplaceLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
        fireplaceLight.range = 50;

        let intensityAnimation = new BABYLON.Animation(
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

        let colorAnimation = new BABYLON.Animation(
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
        game.getScene().beginAnimation(fireplaceLight, 0, 10, true);
        let shadowGenerator = new BABYLON.ShadowGenerator(1024, fireplaceLight);
        shadowGenerator.getShadowMap().refreshRate = 0;
        this.shadowGenerator = shadowGenerator;

        for (let i = 0; i < scene.meshes.length; i++) {
            let sceneMesh = scene.meshes[i];
            let meshName = scene.meshes[i]['name'];

            if (meshName.search("Forest_ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
                //TODO: fix color
                // sceneMesh.material.emissiveColor = new BABYLON.Vector3(0.05,0.05,0.05);
                continue;
            }
            shadowGenerator.getShadowMap().renderList.push(sceneMesh);

        }

        let cone = <BABYLON.Mesh> scene.getMeshByName("Fireplace");
        if (cone) {
            fireplaceLight.parent = cone;
            let smokeSystem = new FireplaceSmoke(game, cone).particleSystem;
            smokeSystem.start();

            let fireSystem = new FireplaceFire(game, cone).particleSystem;
            fireSystem.start();

            let sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, { loop: true, autoplay: true });
            sfxFireplace.attachToMesh(cone);
        }

        for (let i = 0; i < scene.meshes.length; i++) {
            let sceneMesh = scene.meshes[i];
            sceneMesh.freezeWorldMatrix();
            sceneMesh.isPickable = false;
        }

        new BABYLON.Sound("Forest night", "assets/sounds/music/theme.mp3", scene, null, { loop: true, autoplay: true, volume: 1 });

    }
}
