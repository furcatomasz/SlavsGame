namespace Particles {
    export class FireplaceSmoke extends AbstractParticle {

        protected initParticleSystem() {
            var smokeSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 100 }, this.game.getScene());
            smokeSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            smokeSystem.emitter = this.emitter;
            smokeSystem.minEmitBox = new BABYLON.Vector3(0.5, 1.5, 0.5);
            smokeSystem.maxEmitBox = new BABYLON.Vector3(-0.5, 1.5, -0.5);

            smokeSystem.color1 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
            smokeSystem.color2 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
            smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

            smokeSystem.minSize = 0.3;
            smokeSystem.maxSize = 1;

            smokeSystem.minLifeTime = 0.3;
            smokeSystem.maxLifeTime = 0.6;

            smokeSystem.emitRate = 100;

            smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

            smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);

            smokeSystem.direction1 = new BABYLON.Vector3(-1.5, 8, -1.5);
            smokeSystem.direction2 = new BABYLON.Vector3(1.5, 8, 1.5);

            smokeSystem.minAngularSpeed = 50;
            smokeSystem.maxAngularSpeed = Math.PI;

            smokeSystem.minEmitPower = 0.5;
            smokeSystem.maxEmitPower = 1.5;
            smokeSystem.updateSpeed = 0.005;

            this.particleSystem = smokeSystem;
        }
    }
}