/// <reference path="Helm.ts"/>

namespace Items.Helms {
    export class LeatherHelm extends Helm {
        static ITEM_ID = 4;

        constructor(databaseId: Number) {
            super(databaseId);

            this.name = 'leatherHelm';
            this.image = 'Helm';
            this.itemId = Items.Helms.LeatherHelm.ITEM_ID;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.meshName = 'leatherHelm';

        }
    }
}