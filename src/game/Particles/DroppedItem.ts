import {AbstractParticle} from "./AbstractParticle";

export class DroppedItem extends AbstractParticle {

        initParticleSystem() {
            let fireSystem = new BABYLON.GPUParticleSystem("DroppedItemParticles", { capacity: 20 }, this.game.getScene());
            fireSystem.particleTexture = new BABYLON.Texture("assets/flare.png", this.game.getScene());

            fireSystem.emitter = this.emitter;
            fireSystem.minEmitBox = new BABYLON.Vector3(-1, 0, -1);
            fireSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 1);

            fireSystem.color1 = new BABYLON.Color4(0, 0.5, 0, 1.0);
            fireSystem.color2 = new BABYLON.Color4(0, 0.5, 0, 1.0);
            fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

            fireSystem.minSize = 0.2;
            fireSystem.maxSize = 0.5;

            fireSystem.minLifeTime = 0.5;
            fireSystem.maxLifeTime = 2.5;

            fireSystem.emitRate = 10;

            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

            fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);

            fireSystem.direction1 = new BABYLON.Vector3(0, 0.2, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 0.5, 0);

            fireSystem.minEmitPower = 1;
            fireSystem.maxEmitPower = 1;
            fireSystem.layerMask = 2;

            this.particleSystem = fireSystem;
        }
    }
