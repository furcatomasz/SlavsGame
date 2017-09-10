/// <reference path="../Item.ts"/>

namespace Items.Gloves {
    export class PrimaryGloves extends Gloves {
        static ITEM_ID = 4;

        constructor(game:Game, databaseId: Number) {
            super(game, databaseId);

            this.name = 'Gloves';
            this.image = 'Gloves';
            this.itemId = Items.Gloves.PrimaryGloves.ITEM_ID;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.mesh = game.factories['character'].createInstance('Gloves');
            this.mesh.visibility = 0;
        }
    }
}