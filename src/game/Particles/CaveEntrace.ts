import {AbstractParticle} from "./AbstractParticle";
import * as BABYLON from 'babylonjs';

export class CaveEntrace extends AbstractParticle {

    initParticleSystem() {
        var particleSystem = new BABYLON.GPUParticleSystem("particles", {capacity: 150}, this.game.getScene());
        particleSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());
        particleSystem.emitter = this.emitter; // the starting object, the emitter
        particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, -1); // Starting all from
        particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, -0.2); // To...

        particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
        particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
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
        particleSystem.layerMask = 2;

        this.particleSystem = particleSystem;
    }
}
