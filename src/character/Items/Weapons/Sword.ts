/// <reference path="Weapon.ts"/>

namespace Items.Weapons {
    export class Sword extends Items.Weapon {
        static ITEM_ID = 9;

        constructor(game:Game, databaseId: Number) {
            super(game, databaseId);

            this.name = 'Sword';
            this.image = 'Sword';
            this.itemId = Items.Weapons.Sword.ITEM_ID;
            this.mesh = game.factories['character'].createInstance('Sword');
            this.mesh.visibility = 0;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 5, 0, 0, 0, 0);

            this.sfxHit = new BABYLON.Sound("Fire", "/assets/Characters/Worm/hit.wav", this.game.getScene(), null, {
                loop: false,
                autoplay: false
            });

        }
    }
}