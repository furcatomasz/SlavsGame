namespace Particles.SolidParticleSystem {
    export abstract class AbstractSolidParticle {

        protected game: Game;
        protected shape: BABYLON.Mesh;
        protected parent: BABYLON.Mesh;
        public particleSystem: BABYLON.ParticleSystem;

        constructor(game: Game, parent: BABYLON.AbstractMesh, shape: BABYLON.AbstractMesh) {
            this.game = game;
            this.parent = parent;
            this.shape = shape;

            parent.visibility = 0;
            parent.isPickable = 0;
        }

        abstract buildSPS(count: number): AbstractSolidParticle;
    }
}