/// <reference path="../Item.ts"/>

namespace Items.Armors {
    export class Robe extends Armor {

        constructor(game:Game) {
            super(game);

            this.name = 'Robe';
            this.image = 'Armor';
            this.mountType = 2;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.mesh = this.game.characters.player.instance('Warrior.001', false);
            this.mesh.visibility = 0;
        }
    }
}