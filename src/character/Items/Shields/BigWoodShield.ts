/// <reference path="Shield.ts"/>

namespace Items.Shields {
    export class BigWoodShield extends Shield {
        static ITEM_ID = 6;

        constructor(game:Game, databaseId: Number) {
            super(game, databaseId);

            this.name = 'Big Wood Shield';
            this.image = 'Shield';
            this.itemId = Items.Shields.BigWoodShield.ITEM_ID;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 10, 0, 0, 0);
            this.mesh = game.factories['character'].createInstance('Shield');
            this.mesh.visibility = 0;
            this.mesh.scaling = new BABYLON.Vector3(1, 2, 1);
        }
    }
}