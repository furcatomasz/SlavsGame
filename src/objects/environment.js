/// <reference path="../game.ts"/>
var Environment = (function () {
    function Environment(game) {
        var scene = game.scene;
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Forest_ground") >= 0) {
                //ground
                sceneMesh.receiveShadows = true;
            }
            else {
                game.sceneManager.shadowGenerator.getShadowMap().renderList.push(sceneMesh);
            }
            sceneMesh.physicsImpostor = new BABYLON.PhysicsImpostor(sceneMesh, BABYLON.PhysicsImpostor.BoxImpostor, {
                mass: 0,
                restitution: 0.1
            }, scene);
            //sceneMesh.receiveShadows = true;
            sceneMesh.freezeWorldMatrix();
        }
        var cone = scene.getMeshByName("Fireplace");
        if (cone) {
            //Smoke
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
            // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
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
            // Create a particle system
            var fireSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
            //Texture of each particle
            fireSystem.particleTexture = new BABYLON.Texture("/assets/flare.png", scene);
            // Where the particles come from
            fireSystem.emitter = cone; // the starting object, the emitter
            fireSystem.minEmitBox = new BABYLON.Vector3(0.5, 0, 0.5); // Starting all from
            fireSystem.maxEmitBox = new BABYLON.Vector3(1.5, 0, 1.5); // To...
            // Colors of all particles
            fireSystem.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
            fireSystem.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
            fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
            // Size of each particle (random between...
            fireSystem.minSize = 0.2;
            fireSystem.maxSize = 0.7;
            // Life time of each particle (random between...
            fireSystem.minLifeTime = 0.2;
            fireSystem.maxLifeTime = 0.4;
            // Emission rate
            fireSystem.emitRate = 300;
            // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            // Set the gravity of all particles
            fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            // Direction of each particle after it has been emitted
            fireSystem.direction1 = new BABYLON.Vector3(0, 2, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 2, 0);
            // Angular speed, in radians
            fireSystem.minAngularSpeed = -10;
            fireSystem.maxAngularSpeed = Math.PI;
            // Speed
            fireSystem.minEmitPower = 1;
            fireSystem.maxEmitPower = 3;
            fireSystem.updateSpeed = 0.004;
            // Start the particle system
            fireSystem.start();
            light0 = new BABYLON.PointLight("Omni0", cone.position, scene);
            light0.diffuse = new BABYLON.Color3(1, 1, 1);
            light0.specular = new BABYLON.Color3(1, 1, 1);
            light0.intensity = 1;
            light0.position.y = 1;
            game.fireLight = light0;
            // var fire = new BABYLON.FireMaterial("fire", scene);
            // fire.diffuseTexture = new BABYLON.Texture("assets/fireplace/fire.png", scene);
            // fire.distortionTexture = new BABYLON.Texture("assets/fireplace/distortion.png", scene);
            // fire.opacityTexture = new BABYLON.Texture("assets/fireplace/candleOpacity.png", scene);
            // fire.speed = 2.0;
            //
            var sfxFireplace = new BABYLON.Sound("Fire", "assets/fireplace/fireplace.mp3", scene, null, { loop: true, autoplay: true });
            sfxFireplace.attachToMesh(cone);
            new BABYLON.Sound("Music", "assets/musicDoman.mp3", scene, null, { loop: true, autoplay: true });
            // var plane = BABYLON.MeshBuilder.CreatePlane("fireplane", { size: 10, width: 10, height: 10 }, scene);
            // plane.parent = sceneMesh;
            // plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;
            // plane.material = fire;
        }
    }
    return Environment;
}());
//# sourceMappingURL=environment.js.map