/// <reference path="Shield.ts"/>

namespace Items.Shields {
    export class SmallWoodenShield extends Shield {
        static ITEM_ID = 5;

        constructor(databaseId: Number) {
            super(databaseId);

            this.name = 'shieldWoodenSmall';
            this.image = 'Shield';
            this.itemId = Items.Shields.SmallWoodenShield.ITEM_ID;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.meshName = 'shieldWoodenSmall';
        }
    }
}