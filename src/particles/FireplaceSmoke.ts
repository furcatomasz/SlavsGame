/// <reference path="AbstractParticle.ts"/>

namespace Particles {
    export class FireplaceSmoke extends AbstractParticle {

        protected initParticleSystem() {
            var smokeSystem = new BABYLON.ParticleSystem("particles", 1000, this.game.getScene());
            smokeSystem.particleTexture = new BABYLON.Texture("/assets/flare.png", this.game.getScene());
            smokeSystem.emitter = this.emitter; // the starting object, the emitter
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

            smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

            smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);

            smokeSystem.direction1 = new BABYLON.Vector3(-1.5, 8, -1.5);
            smokeSystem.direction2 = new BABYLON.Vector3(1.5, 8, 1.5);

            smokeSystem.minAngularSpeed = 0;
            smokeSystem.maxAngularSpeed = Math.PI;

            smokeSystem.minEmitPower = 0.5;
            smokeSystem.maxEmitPower = 1.5;
            smokeSystem.updateSpeed = 0.004;

            this.particleSystem = smokeSystem;
        }
    }
}