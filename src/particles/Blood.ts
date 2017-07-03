/// <reference path="AbstractParticle.ts"/>

namespace Particles {
    export class Blood extends AbstractParticle {

        protected initParticleSystem() {
            var particleSystem = new BABYLON.ParticleSystem("particle1s", 500, this.game.getScene());
            particleSystem.particleTexture = new BABYLON.Texture("/assets/Smoke3.png", this.game.getScene());
            particleSystem.emitter = this.emitter;

            particleSystem.minEmitBox = new BABYLON.Vector3(0, this.emitter.geometry.extend.maximum.y*0.7, 0); // Starting all from
            particleSystem.maxEmitBox = new BABYLON.Vector3(0, this.emitter.geometry.extend.maximum.y*0.7, 0); // To...

            particleSystem.color1 = new BABYLON.Color4(1, 0, 0, 1);
            particleSystem.color2 = new BABYLON.Color4(1, 0, 0, 0.1);
            particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 1);

            particleSystem.minSize = 0.3;
            particleSystem.maxSize = 0.5;

            particleSystem.minLifeTime = 0.05;
            particleSystem.maxLifeTime = 0.7;

            particleSystem.emitRate = 500;

            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;

            particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

            particleSystem.direction1 = new BABYLON.Vector3(-2, 2, -2);
            particleSystem.direction2 = new BABYLON.Vector3(2, 2, 2);
            particleSystem.targetStopDuration = 0.6;
            particleSystem.minAngularSpeed = -10.0;
            particleSystem.maxAngularSpeed = 10.0;

            particleSystem.minEmitPower = 1;
            particleSystem.maxEmitPower = 2;
            particleSystem.updateSpeed = 0.02;

            this.particleSystem = particleSystem;
        }
    }
}