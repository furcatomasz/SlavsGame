import {AbstractParticle} from "./AbstractParticle";
import * as BABYLON from 'babylonjs';

export class Blood extends AbstractParticle {

        initParticleSystem() {
            let particleSystem = new BABYLON.GPUParticleSystem("particle1s", { capacity: 50 } , this.game.getBabylonScene());
            particleSystem.particleTexture = new BABYLON.Texture("assets/Smoke3.png", this.game.getBabylonScene());
            particleSystem.emitter = this.emitter;

            particleSystem.minEmitBox = new BABYLON.Vector3(0, this.emitter.geometry.extend.maximum.y*0.7, 0); // Starting all from
            particleSystem.maxEmitBox = new BABYLON.Vector3(0, this.emitter.geometry.extend.maximum.y*0.7, 0); // To...

            particleSystem.color1 = new BABYLON.Color4(1, 0, 0, 1);
            particleSystem.color2 = new BABYLON.Color4(1, 0, 0, 0.1);
            particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 1);

            particleSystem.minSize = 0.3;
            particleSystem.maxSize = 0.5;

            particleSystem.minLifeTime = 1;
            particleSystem.maxLifeTime = 1;

            particleSystem.emitRate = 50;

            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;

            particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

            particleSystem.direction1 = new BABYLON.Vector3(-1, 4, -1);
            particleSystem.direction2 = new BABYLON.Vector3(4, 4, 4);
            particleSystem.minAngularSpeed = -10.0;
            particleSystem.maxAngularSpeed = 10.0;

            particleSystem.minEmitPower = 0.5;
            particleSystem.maxEmitPower = 1;
            particleSystem.updateSpeed = 0.02;
            particleSystem.layerMask = 2;
            this.particleSystem = particleSystem;
        }
    }
