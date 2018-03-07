/// <reference path="Weapon.ts"/>

namespace Items.Weapons {
    export class LongSword extends Items.Weapon {
        static ITEM_ID = 8;

        constructor(databaseId: Number) {
            super(databaseId);

            this.name = 'swordLong';
            this.image = 'Sword';
            this.itemId = Items.Weapons.LongSword.ITEM_ID;
            this.meshName = 'swordLong';
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 5, 0, 0, 0, 0);
        }
    }
}