/// <reference path="Weapon.ts"/>

namespace Items.Weapons {
    export class BigSword extends Items.Weapon {

        constructor(game:Game) {
            super(game);

            this.name = 'Big Sword';
            this.image = 'Sword';
            this.mountType = 1;
            this.mountBoneName = 'weapon.bone';
            this.mesh = this.game.items.sword.instance('Sword', false);
            this.mesh.visibility = 0;
            this.mesh.scaling = new BABYLON.Vector3(1.5, 1.5, 1.5);

            this.sfxHit = new BABYLON.Sound("Fire", "/babel/Items/Sword/Sword.wav", this.game.getScene(), null, {
                loop: false,
                autoplay: false
            });

        }
    }
}