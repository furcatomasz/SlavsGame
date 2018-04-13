namespace Particles.SolidParticleSystem {
    export class Nature extends AbstractSolidParticle {

        public buildSPS(count: number): AbstractSolidParticle {
            let parentPositions = this.parent.getVerticesData(BABYLON.VertexBuffer.PositionKind);
            let myBuilder = function (particle, i, s) {
                let randomPosition = Math.round(Math.random() * 10);
                let position = new BABYLON.Vector3(parentPositions[s * randomPosition * 3], parentPositions[s * randomPosition * 3 + 1], parentPositions[s * randomPosition * 3 + 2]);
                particle.position = position;
                let random = Math.random() + 0.5;
                particle.scaling.y = random;
                particle.scaling.x = random;
                particle.scaling.z = random;
            };

            let sps = new BABYLON.SolidParticleSystem('spsNature', this.game.getScene(), {updatable: false});
            sps.addShape(this.shape, count, {positionFunction: myBuilder});
            let spsMesh = sps.buildMesh();
            spsMesh.material = this.shape.material;
            spsMesh.alwaysSelectAsActiveMesh = true;

            return this;
        }
    }
}