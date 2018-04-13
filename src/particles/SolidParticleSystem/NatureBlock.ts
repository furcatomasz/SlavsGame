namespace Particles.SolidParticleSystem {
    export class NatureBlock extends AbstractSolidParticle {

        public buildSPS(count: number): AbstractSolidParticle {
            let positions = this.parent.getVerticesData(BABYLON.VertexBuffer.PositionKind);
            let myBuilder = function(particle, i, s) {
                var randomPosition = Math.round(Math.random()*5);
                var position = new BABYLON.Vector3(positions[s*randomPosition*3], positions[s*randomPosition*3+1], positions[s*randomPosition*3+2]);
                particle.position = position;
                let random = Math.random() + 1;
                particle.scaling.y = random;
                particle.scaling.x = random;
                particle.scaling.z = random;
            }

            let sps = new BABYLON.SolidParticleSystem('spsNatureBlock', this.game.getScene(), {updatable: false});
            sps.addShape(this.shape, count, {positionFunction: myBuilder});
            let spsMesh = sps.buildMesh();
            spsMesh.material = this.shape.material;

            return this;
        }
    }
}