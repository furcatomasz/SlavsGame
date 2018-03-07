/// <reference path="../Item.ts"/>

namespace Items.Armors {
    export class LeatherArmor extends Armor {
        static ITEM_ID = 1;

        constructor(databaseId: Number) {
            super(databaseId);

            this.name = 'leatherArmor';
            this.image = 'Armor';
            this.itemId = Items.Armors.LeatherArmor.ITEM_ID;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.meshName = 'leatherArmor';
        }
    }
}