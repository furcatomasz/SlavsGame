import {AbstractSolidParticle} from "./AbstractSolidParticleSystem";
import {Collisions} from "../../Initializers/Collisions";

export class NatureSmall extends AbstractSolidParticle {

        public buildSPS(count: number): AbstractSolidParticle {
            let self = this;
            let game = this.game;
            let parentPositions = this.parent.getVerticesData(BABYLON.VertexBuffer.PositionKind);
            let positionLength = parentPositions.length;

            let myBuilder = function (particle, i, s) {
                let randomPosition = 4;
                let position = new BABYLON.Vector3(parentPositions[(i * randomPosition + i)], parentPositions[i * randomPosition + i + 1], parentPositions[i * randomPosition + i + 2]);

                if(self.collider) {
                    let newCollider = self.collider.createInstance('sps_nature_collision');
                    newCollider.position.x = position.x;
                    newCollider.position.y = position.y;
                    newCollider.position.z = position.z;

                    //TODO: VISIBILITY
                    // newCollider.visibility = 1;
                    Collisions.setCollider(game.getScene(), newCollider);
                }

                particle.position = position;
                let random = Math.random()+0.3;
                particle.scaling.y = random;
                particle.scaling.x = random;
                particle.scaling.z = random;
            };

            let sps = new BABYLON.SolidParticleSystem('spsNature', this.game.getScene(), {updatable: false});
            sps.addShape(this.shape, count, {positionFunction: myBuilder});
            let spsMesh = sps.buildMesh();
            spsMesh.material = this.shape.material;

            return this;
        }
    }
