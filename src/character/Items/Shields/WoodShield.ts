/// <reference path="Shield.ts"/>

namespace Items.Shields {
    export class WoodShield extends Shield {
        static ITEM_ID = 7;

        constructor(game:Game, databaseId: Number) {
            super(game, databaseId);

            this.name = 'Wood Shield';
            this.image = 'Shield';
            this.itemId = Items.Shields.WoodShield.ITEM_ID;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.mesh = game.factories['character'].createInstance('Shield');
            this.mesh.visibility = 0;
        }
    }
}