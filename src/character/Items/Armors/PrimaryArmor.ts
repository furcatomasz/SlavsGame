/// <reference path="../Item.ts"/>

namespace Items.Armors {
    export class PrimaryArmor extends Armor {
        static ITEM_ID = 1;

        constructor(game:Game, databaseId: Number) {
            super(game, databaseId);

            this.name = 'Armor';
            this.image = 'Armor';
            this.itemId = Items.Armors.PrimaryArmor.ITEM_ID;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.mesh = game.factories['character'].createInstance('Armor');
            this.mesh.visibility = 0;
        }
    }
}