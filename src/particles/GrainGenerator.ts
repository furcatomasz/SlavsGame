/// <reference path="AbstractParticle.ts"/>

namespace Particles {
    export class GrainGenerator {

        public generate(
            mainGrain: BABYLON.AbstractMesh,
            instances: number = 1000,
            offsetXMax: number = 60,
            offsetZMax: number = 10,
            animationName: string = 'ArmatureAction'
        ) {
            // let grain = self.game.factories['nature_grain'].createInstance('Grain', true);
            // grain.scaling = new BABYLON.Vector3(1.3,1.3,1.3);
            // grain.position = new BABYLON.Vector3(22.32,0,-103.46);
            mainGrain.skeleton.beginAnimation(animationName, true);

            for (let i = 0; i < instances; i++) {
                let offsetX = (Math.random() - 0.5) * offsetXMax;
                let offsetZ = (Math.random() - 0.5) * offsetZMax;
                let instance = grain.createInstance("grainGenerator_" + i);
                instance.parent = mainGrain;
                instance.skeleton = mainGrain.skeleton;
                instance.position.x = offsetX;
                instance.position.z = offsetZ;
            }
        }
    }
}