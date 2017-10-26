/// <reference path="Weapon.ts"/>

namespace Items.Weapons {
    export class Axe extends Items.Weapon {
        static ITEM_ID = 8;

        constructor(game:Game, databaseId: Number) {
            super(game, databaseId);

            this.name = 'Axe';
            this.image = 'BigSword';
            this.itemId = Items.Weapons.Axe.ITEM_ID;
            this.mesh = game.factories['character'].createInstance('Axe');
            this.mesh.visibility = 0;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 10, 0, 0, 0, 0);

            this.sfxHit = new BABYLON.Sound("Fire", "/assets/Characters/Worm/hit.wav", this.game.getScene(), null, {
                loop: false,
                autoplay: false
            });

        }
    }
}