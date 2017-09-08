/// <reference path="../Item.ts"/>

namespace Items.Armors {
    export class Robe extends Armor {

        constructor(game:Game) {
            super(game);

            this.name = 'Robe';
            this.image = 'Armor';
            this.itemId = 2;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.mesh = game.factories['character'].createInstance('Warrior.001');
            this.mesh.visibility = 0;
        }
    }
}