/// <reference path="../Item.ts"/>

namespace Items.Gloves {
    export class PrimaryGloves extends Gloves {

        constructor(game:Game) {
            super(game);

            this.name = 'Gloves';
            this.image = 'Gloves';
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.mesh = game.factories['character'].createInstance('Gloves');
            this.mesh.visibility = 0;
        }
    }
}