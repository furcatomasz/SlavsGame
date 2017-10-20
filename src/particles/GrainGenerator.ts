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
            //mainGrain.skeleton.beginAnimation(animationName, true);
            for (let i = 0; i < instances; i++) {
                let offsetX = (Math.random() - 0.5) * offsetXMax;
                let offsetZ = (Math.random() - 0.5) * offsetZMax;
                let instance = mainGrain.createInstance("grainGenerator_" + i);
                instance.parent = mainGrain;
                instance.position.x = offsetX;
                instance.position.z = offsetZ;
                instance.freezeWorldMatrix();
            }

            return this;
        }
    }
}