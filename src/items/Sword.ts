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

        }
    }
}