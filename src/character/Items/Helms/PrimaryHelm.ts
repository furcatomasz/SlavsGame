/// <reference path="Helm.ts"/>

namespace Items.Helms {
    export class PrimaryHelm extends Helm {
        static ITEM_ID = 5;

        constructor(game:Game, databaseId: Number) {
            super(game, databaseId);

            this.name = 'Helm';
            this.image = 'Helm';
            this.itemId = Items.Helms.PrimaryHelm.ITEM_ID;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.mesh = game.factories['character'].createInstance('Helm');
            this.mesh.visibility = 0;
        }
    }
}