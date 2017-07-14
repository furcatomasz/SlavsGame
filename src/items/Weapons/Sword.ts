/// <reference path="../Item.ts"/>

namespace Items {
    export class Sword extends Item {

        constructor(game:Game) {
            super(game);

            this.name = 'Sword';
            this.mountType = 1;
            this.mountBoneName = 'weapon.bone';
            this.mesh = this.game.items.sword.instance('Sword', false);

            this.sfxHit = new BABYLON.Sound("Fire", "/babel/Items/Sword/Sword.wav", this.game.getScene(), null, {
                loop: false,
                autoplay: false
            });

        }
    }
}