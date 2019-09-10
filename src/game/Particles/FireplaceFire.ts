import {AbstractParticle} from "./AbstractParticle";

export class FireplaceFire extends AbstractParticle {

        initParticleSystem() {
            var fireSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 50 }, this.game.getScene());

            fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());

            fireSystem.emitter = this.emitter;
            fireSystem.minEmitBox = new BABYLON.Vector3(0.5, 0, 0.5);
            fireSystem.maxEmitBox = new BABYLON.Vector3(-0.5, 0, -0.5);

            fireSystem.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
            fireSystem.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
            fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

            fireSystem.minSize = 0.2;
            fireSystem.maxSize = 0.7;

            fireSystem.minLifeTime = 0.2;
            fireSystem.maxLifeTime = 0.4;

            fireSystem.emitRate = 150;

            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

            fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);

            fireSystem.direction1 = new BABYLON.Vector3(0, 2, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 2, 0);

            fireSystem.minAngularSpeed = -10;
            fireSystem.maxAngularSpeed = Math.PI;

            fireSystem.minEmitPower = 1;
            fireSystem.maxEmitPower = 3;
            fireSystem.updateSpeed = 0.007;
            fireSystem.layerMask = 2;

            this.particleSystem = fireSystem;
        }
    }
