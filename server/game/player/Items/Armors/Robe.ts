/// <reference path="../Item.ts"/>

namespace Items.Armors {
    export class Robe extends Armor {
        static ITEM_ID = 2;

        constructor(databaseId: Number) {
            super(databaseId);

            this.name = 'Robe';
            this.image = 'Armor';
            this.itemId = Items.Armors.Robe.ITEM_ID;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.meshName = 'Warrior.001';

        }
    }
}