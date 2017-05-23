/// <reference path="../game.ts"/>

class Environment {

    constructor(game:Game) {
        let scene = game.scene;

        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];

            if (meshName.search("ground") >= 0) {
                //ground
            } else {
                game.sceneManager.shadowGenerator.getShadowMap().renderList.push(sceneMesh);
            }

            sceneMesh.physicsImpostor = new BABYLON.PhysicsImpostor(sceneMesh, BABYLON.PhysicsImpostor.BoxImpostor, {
                mass: 0,
                restitution: 0.1
            }, scene);
            sceneMesh.receiveShadows = true;
        }

        let cone = scene.getMeshByName("Cone");
        if (cone) {
            var smokeParticlesA = new BABYLON.ParticleSystem("particles", 1000, scene);
            smokeParticlesA.particleTexture = new BABYLON.Texture("/assets/Smoke3.png", scene);
            smokeParticlesA.emitter = cone;
            smokeParticlesA.minEmitBox = new BABYLON.Vector3(-0.5, 1, -0.5); // Starting all from
            smokeParticlesA.maxEmitBox = new BABYLON.Vector3(0.5, 1, 0.5); // To...

            smokeParticlesA.color1 = new BABYLON.Color4(0.05, 0.05, 0.05, 0.75);
            smokeParticlesA.color2 = new BABYLON.Color4(0.15, 0.15, 0.15, 0.75);
            smokeParticlesA.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

            smokeParticlesA.minSize = 1.0;
            smokeParticlesA.maxSize = 2.0;

            smokeParticlesA.minLifeTime = 0.4;
            smokeParticlesA.maxLifeTime = 0.8;

            smokeParticlesA.emitRate = 50;

            smokeParticlesA.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;

            smokeParticlesA.gravity = new BABYLON.Vector3(0, 0, 0);

            smokeParticlesA.direction1 = new BABYLON.Vector3(-1.5, 8, -1.5);
            smokeParticlesA.direction2 = new BABYLON.Vector3(1.5, 8, 1.5);

            smokeParticlesA.minAngularSpeed = -10.0;
            smokeParticlesA.maxAngularSpeed = 10.0;

            smokeParticlesA.minEmitPower = 0.5;
            smokeParticlesA.maxEmitPower = 1.5;
            smokeParticlesA.updateSpeed = 0.005;

            smokeParticlesA.start();

        // var fire = new BABYLON.FireMaterial("fire", scene);
        // fire.diffuseTexture = new BABYLON.Texture("assets/fireplace/fire.png", scene);
        // fire.distortionTexture = new BABYLON.Texture("assets/fireplace/distortion.png", scene);
        // fire.opacityTexture = new BABYLON.Texture("assets/fireplace/candleOpacity.png", scene);
        // fire.speed = 2.0;
        //
        var sfxFireplace = new BABYLON.Sound("Fire", "assets/fireplace/fireplace.mp3", scene, null, { loop: true, autoplay: true });
        sfxFireplace.attachToMesh(cone);
        // var plane = BABYLON.MeshBuilder.CreatePlane("fireplane", { size: 10, width: 10, height: 10 }, scene);
        // plane.parent = sceneMesh;
        // plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
        // plane.material = fire;
        }

    }
}