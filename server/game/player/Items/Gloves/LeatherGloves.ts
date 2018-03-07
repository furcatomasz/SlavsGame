/// <reference path="../Item.ts"/>

namespace Items.Gloves {
    export class LeatherGloves extends Gloves {
        static ITEM_ID = 3;

        constructor(databaseId: Number) {
            super(databaseId);

            this.name = 'leatherGloves';
            this.image = 'Gloves';
            this.itemId = Items.Gloves.LeatherGloves.ITEM_ID;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.meshName = 'leatherGloves';

        }
    }
}