/// <reference path="Helm.ts"/>

namespace Items.Helms {
    export class PrimaryHelm extends Helm {
        static ITEM_ID = 5;

        constructor(databaseId: Number) {
            super(databaseId);

            this.name = 'Helm';
            this.image = 'Helm';
            this.itemId = Items.Helms.PrimaryHelm.ITEM_ID;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.meshName = 'Helm';

        }
    }
}