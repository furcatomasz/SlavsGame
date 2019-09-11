import * as BABYLON from 'babylonjs';

export class ClickParticles {

    static getParticles(scene: BABYLON.Scene) {
        let particleSystem = new BABYLON.ParticleSystem("clickParticles", 50, scene);
        particleSystem.particleTexture = new BABYLON.Texture("assets/flare.png", scene);
        particleSystem.layerMask = 2;

        particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
        particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
        particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
        particleSystem.emitter = new BABYLON.Vector3(0, 2, 0); // the starting location

        particleSystem.minSize = 0.5;
        particleSystem.maxSize = 0.5;
        particleSystem.minLifeTime = 0.5;
        particleSystem.maxLifeTime = 1.5;
        particleSystem.emitRate = 20;
        particleSystem.targetStopDuration = 0.2;
        particleSystem.createPointEmitter(new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 1, 0));

        // Speed
        particleSystem.minEmitPower = 1;
        particleSystem.maxEmitPower = 3;


        return particleSystem;
    }
}
