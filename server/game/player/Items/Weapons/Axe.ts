/// <reference path="Weapon.ts"/>

namespace Items.Weapons {
    export class Axe extends Items.Weapon {
        static ITEM_ID = 8;

        constructor(databaseId: Number) {
            super(databaseId);

            this.name = 'Axe';
            this.image = 'BigSword';
            this.itemId = Items.Weapons.Axe.ITEM_ID;
            this.meshName = 'Axe';

            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 10, 0, 0, 0, 0);
        }
    }
}