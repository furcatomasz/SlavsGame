namespace Particles.SolidParticleSystem {
    export abstract class AbstractSolidParticle {

        protected game: Game;
        protected shape: BABYLON.AbstractMesh;
        protected parent: BABYLON.AbstractMesh;
        protected collider: BABYLON.AbstractMesh;
        public particleSystem: BABYLON.ParticleSystem;

        constructor(game: Game, parent: BABYLON.AbstractMesh, shape: BABYLON.AbstractMesh, isCollider: boolean) {
            this.game = game;
            this.parent = parent;
            this.shape = shape;
            if(isCollider) {
                this.collider = BABYLON.MeshBuilder.CreateBox("box", {height: 10}, game.getScene());
                this.collider.visibility = 0;
            }

            parent.visibility = 0;
            parent.isPickable = 0;
        }

        abstract buildSPS(count: number): AbstractSolidParticle;
    }
}