namespace Particles {
    export abstract class AbstractParticle {

        protected game:Game;
        protected emitter:BABYLON.AbstractMesh;
        public particleSystem:BABYLON.ParticleSystem;

        constructor(game:Game, emitter:BABYLON.AbstractMesh) {
            this.game = game;
            this.emitter = emitter;

            this.initParticleSystem();
        }

        abstract initParticleSystem();
    }
}
