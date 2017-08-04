/// <reference path="../Item.ts"/>

namespace Items.Gloves {
    export class PrimaryGloves extends Gloves {

        constructor(game:Game) {
            super(game);

            this.name = 'Gloves';
            this.image = 'Gloves';
            this.mountType = 2;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.mesh = this.game.characters.player.instance('Gloves', false);
            this.mesh.visibility = 0;
        }
    }
}