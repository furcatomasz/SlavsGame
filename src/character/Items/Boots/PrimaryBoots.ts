/// <reference path="../Item.ts"/>

namespace Items.Boots {
    export class PrimaryBoots extends Boots {

        constructor(game:Game) {
            super(game);

            this.name = 'Boots';
            this.image = 'Boots';
            this.mountType = 2;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.mesh = this.game.characters.player.instance('Boots', false);
            this.mesh.visibility = 0;
        }
    }
}