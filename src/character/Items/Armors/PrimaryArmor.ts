/// <reference path="../Item.ts"/>

namespace Items.Armors {
    export class PrimaryArmor extends Armor {

        constructor(game:Game) {
            super(game);

            this.name = 'Armor';
            this.image = 'Armor';
            this.mountType = 2;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.mesh = this.game.characters.player.instance('Armor', false);
            this.mesh.visibility = 0;
        }
    }
}