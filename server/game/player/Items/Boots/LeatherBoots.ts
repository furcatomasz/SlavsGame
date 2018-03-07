/// <reference path="../Item.ts"/>

namespace Items.Boots {
    export class LeatherBoots extends Boots {
        static ITEM_ID = 2;

        constructor(databaseId: Number) {
            super(databaseId);

            this.name = 'leatherBoots';
            this.image = 'Boots';
            this.itemId = Items.Boots.LeatherBoots.ITEM_ID;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.meshName = 'leatherBoots';

        }
    }
}