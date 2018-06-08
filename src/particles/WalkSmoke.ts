/// <reference path="AbstractParticle.ts"/>

namespace Particles {
    export class WalkSmoke extends AbstractParticle {

        protected initParticleSystem() {
            var smokeSystem = new BABYLON.ParticleSystem("particles", 10, this.game.getScene());
            smokeSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            smokeSystem.emitter = this.emitter;
            smokeSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0.8);
            smokeSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0.8);

            smokeSystem.color1 = new BABYLON.Color4(0.2, 0.2, 0.1, 1.0);
            smokeSystem.color2 = new BABYLON.Color4(0.2, 0.2, 0.1, 1.0);
            smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

            smokeSystem.minSize = 0.3;
            smokeSystem.maxSize = 1.5;

            smokeSystem.minLifeTime = 0.15;
            smokeSystem.maxLifeTime = 0.15;

            smokeSystem.emitRate = 50;

            smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

            smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);

            smokeSystem.direction1 = new BABYLON.Vector3(0, 4, 0);
            smokeSystem.direction2 = new BABYLON.Vector3(0, 4, 0);

            smokeSystem.minAngularSpeed = 0;
            smokeSystem.maxAngularSpeed = Math.PI;

            smokeSystem.minEmitPower = 1;
            smokeSystem.maxEmitPower = 1;
            smokeSystem.updateSpeed = 0.004;

            this.particleSystem = smokeSystem;
        }
    }
}