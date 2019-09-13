import {AbstractParticle} from "./AbstractParticle";
import * as BABYLON from 'babylonjs';

export class Fog extends AbstractParticle {

        initParticleSystem() {
            var fog = new BABYLON.GPUParticleSystem("particles", { capacity: 2000 }, this.game.getBabylonScene());
            fog.particleTexture = new BABYLON.Texture("assets/cloud.png", this.game.getBabylonScene());
            fog.emitter = this.emitter; // the starting object, the emitter
            fog.minEmitBox = new BABYLON.Vector3(-50, 5, -50); // Starting all from
            fog.maxEmitBox = new BABYLON.Vector3(50, 0, 50); // To...

            fog.color1 = new BABYLON.Color4(0.9, 0.9, 0.9, 0.1);
            fog.color2 = new BABYLON.Color4(1, 1, 1, 0.15);
            fog.colorDead = new BABYLON.Color4(0.9, 0.9, 0.9, 0.1);

            // Big particles === less particles.
            fog.minSize = 8.0;
            fog.maxSize = 12.0;

            // Different life spans to avoid the entire fog dying out at the same time.
            fog.minLifeTime = 100;
            fog.maxLifeTime = 250;

            // High emit rate to spawn the fog fast.
            fog.emitRate = 10000;

            // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
            fog.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;

            fog.gravity = new BABYLON.Vector3(0, 0, 0);

            fog.direction1 = new BABYLON.Vector3(-.1, 0, -.1);
            fog.direction2 = new BABYLON.Vector3(.1, 0, .1);

            fog.minAngularSpeed = -1.5;
            fog.maxAngularSpeed = 1.5;

            fog.minEmitPower = .5;
            fog.maxEmitPower = 1;

            // Low updateSpeed gives a more natural look and feel.
            fog.updateSpeed = 0.0025;
            fog.layerMask = 2;


            this.particleSystem = fog;
        }
    }
