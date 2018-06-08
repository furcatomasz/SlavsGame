namespace Particles {
    export class Tornado extends AbstractParticle {

        protected initParticleSystem() {
            let fireSystem = new BABYLON.ParticleSystem("particles", 100, this.game.getScene());

            fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());

            fireSystem.emitter = this.emitter;
            fireSystem.minEmitBox = new BABYLON.Vector3(0, 3, 0);
            fireSystem.maxEmitBox = new BABYLON.Vector3(0, 3, 0);

            fireSystem.color1 = new BABYLON.Color4(0.5, 0.5, 0, 1.0);
            fireSystem.color2 = new BABYLON.Color4(0.5, 0.5, 0, 1.0);
            fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

            fireSystem.minSize = 0.5;
            fireSystem.maxSize = 1.5;

            fireSystem.minLifeTime = 0.2;
            fireSystem.maxLifeTime = 0.4;

            fireSystem.emitRate = 100;

            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

            fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);

            fireSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 0, -8);

            fireSystem.minAngularSpeed = -10;
            fireSystem.maxAngularSpeed = Math.PI;

            fireSystem.minEmitPower = 1;
            fireSystem.maxEmitPower = 3;
            fireSystem.updateSpeed = 0.007;

            this.particleSystem = fireSystem;
        }
    }
}