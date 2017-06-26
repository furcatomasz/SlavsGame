/// <reference path="Item.ts"/>

namespace Items {
    export class Sword extends Item {

        constructor(game:Game) {
            super(game);

            this.name = 'Sword';
            this.mesh = this.game.items.sword.instance('Sword', false);
            //this.game.sceneManager.shadowGenerator.getShadowMap().renderList.push(this.mesh);

            this.sfxHit = new BABYLON.Sound("Fire", "/babel/Items/Sword/Sword.wav", this.game.getScene(), null, {
                loop: false,
                autoplay: false
            });
            var particleSystem = new BABYLON.ParticleSystem("particle1s", 1000, this.game.getScene());
            particleSystem.particleTexture = new BABYLON.Texture("/assets/Smoke3.png", this.game.getScene());
            particleSystem.emitter = this.mesh;
            particleSystem.minEmitBox = new BABYLON.Vector3(0, 5, 0); // Starting all from
            particleSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0); // To...

            particleSystem.color1 = new BABYLON.Color4(1, 0, 0, 1);
            particleSystem.color2 = new BABYLON.Color4(1, 0, 0, 1);
            particleSystem.colorDead = new BABYLON.Color4(1, 0, 0, 0.0);

            particleSystem.minSize = 0.2;
            particleSystem.maxSize = 0.5;

            particleSystem.minLifeTime = 0.05;
            particleSystem.maxLifeTime = 0.2;

            particleSystem.emitRate = 800;

            //particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;

            particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

            particleSystem.direction1 = new BABYLON.Vector3(-1, 0, 0);
            particleSystem.direction2 = new BABYLON.Vector3(-3, 0, 0);

            particleSystem.minAngularSpeed = -10.0;
            particleSystem.maxAngularSpeed = 10.0;

            particleSystem.minEmitPower = 0.1;
            particleSystem.maxEmitPower = 1;
            particleSystem.updateSpeed = 0.005;

            this.particles = particleSystem;
        }
    }
}