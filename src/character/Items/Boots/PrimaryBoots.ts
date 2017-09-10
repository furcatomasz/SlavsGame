/// <reference path="../Item.ts"/>

namespace Items.Boots {
    export class PrimaryBoots extends Boots {
        static ITEM_ID = 3;

        constructor(game:Game, databaseId: Number) {
            super(game, databaseId);

            this.name = 'Boots';
            this.image = 'Boots';
            this.itemId = Items.Boots.PrimaryBoots.ITEM_ID;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.mesh = game.factories['character'].createInstance('Boots');
            this.mesh.visibility = 0;
        }
    }
}