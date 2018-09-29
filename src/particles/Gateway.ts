namespace Particles {
    export class Gateway extends AbstractParticle {
        protected isActive: boolean;

        constructor(game: Game, emitter: BABYLON.AbstractMesh, isActive: boolean) {
            this.isActive = isActive;
            super(game, emitter);
        }

        public initParticleSystem() {
            let particleSystem = new BABYLON.GPUParticleSystem("particles", { capacity: 150 }, this.game.getScene());
            particleSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
            particleSystem.emitter = this.emitter;
            particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, -1);
            particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 1);

            if(this.isActive) {
                particleSystem.color1 = new BABYLON.Color3(0.7, 0.8, 1.0);
                particleSystem.color2 = new BABYLON.Color3(0.2, 0.5, 1.0);
            } else {
                particleSystem.color1 = new BABYLON.Color3(1, 0, 0.0);
                particleSystem.color2 = new BABYLON.Color3(0.5, 0, 0.0);
            }
            particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

            particleSystem.minSize = 0.1;
            particleSystem.maxSize = 0.5;

            particleSystem.minLifeTime = 0.3;
            particleSystem.maxLifeTime = 1;

            particleSystem.emitRate = 150;

            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

            particleSystem.gravity = new BABYLON.Vector3(0, 9.81, 0);

            particleSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
            particleSystem.direction2 = new BABYLON.Vector3(0, 0.25, 0);

            particleSystem.minAngularSpeed = 0;
            particleSystem.maxAngularSpeed = Math.PI;

            particleSystem.minEmitPower = 0.5;
            particleSystem.maxEmitPower = 1.5;
            particleSystem.updateSpeed = 0.004;

            this.particleSystem = particleSystem;
        }
    }
}
