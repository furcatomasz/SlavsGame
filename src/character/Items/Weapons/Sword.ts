/// <reference path="Weapon.ts"/>

namespace Items.Weapons {
    export class Sword extends Items.Weapon {

        constructor(game:Game) {
            super(game);

            this.name = 'Sword';
            this.image = 'Sword';
            this.itemId = 9;
            this.mesh = game.factories['character'].createInstance('Sword');
            this.mesh.visibility = 0;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 5, 0, 0, 0, 0);

            this.sfxHit = new BABYLON.Sound("Fire", "/assets/Characters/Warrior/hit.wav", this.game.getScene(), null, {
                loop: false,
                autoplay: false
            });

        }
    }
}