/// <reference path="Weapon.ts"/>

namespace Items.Weapons {
    export class Sword extends Items.Weapon {
        static ITEM_ID = 7;

        constructor(databaseId: Number) {
            super(databaseId);

            this.name = 'sword';
            this.image = 'Sword';
            this.itemId = Items.Weapons.Sword.ITEM_ID;
            this.meshName = 'sword';
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 5, 0, 0, 0, 0);
        }
    }
}