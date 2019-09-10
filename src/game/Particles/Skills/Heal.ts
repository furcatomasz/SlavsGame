import {AbstractParticle} from "../AbstractParticle";

export class Heal extends AbstractParticle {

        initParticleSystem() {
            let scene = this.game.getScene();
            let emitter = BABYLON.Mesh.CreateBox("emitter0", 0.1, scene);
            emitter.isVisible = false;
            emitter.parent = this.emitter;

            let fireSystem = new BABYLON.ParticleSystem("particles", 1000, scene);
            fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", scene);
            fireSystem.minSize = 0.3;
            fireSystem.maxSize = 0.3;
            fireSystem.minEmitPower = 1.0;
            fireSystem.maxEmitPower = 1;
            fireSystem.minLifeTime = 1;
            fireSystem.maxLifeTime = 1;
            fireSystem.emitRate = 200;
            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            fireSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0);
            fireSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0);
            fireSystem.gravity = new BABYLON.Vector3(0, 9, 0);
            fireSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 0, 0);
            fireSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
            fireSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
            fireSystem.targetStopDuration = 0.8;
            fireSystem.emitter = emitter;

            this.particleSystem = fireSystem;
        }
    }
