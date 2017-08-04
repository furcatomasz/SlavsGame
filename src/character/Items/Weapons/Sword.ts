/// <reference path="Weapon.ts"/>

namespace Items.Weapons {
    export class Sword extends Items.Weapon {

        constructor(game:Game) {
            super(game);

            this.name = 'Sword';
            this.image = 'Sword';
            this.mountType = 1;
            this.mountBoneName = 'weapon.bone';
            this.mesh = this.game.items.sword.instance('Sword', false);
            this.mesh.visibility = 0;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 5, 0, 0, 0, 0);

            this.sfxHit = new BABYLON.Sound("Fire", "/babel/Items/Sword/Sword.wav", this.game.getScene(), null, {
                loop: false,
                autoplay: false
            });

        }
    }
}