/// <reference path="Shield.ts"/>

namespace Items.Shields {
    export class WoodShield extends Shield {

        constructor(game:Game) {
            super(game);

            this.name = 'Wood Shield';
            this.image = 'Shield';
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.mesh = game.factories['character'].createInstance('Shield');
            this.mesh.visibility = 0;
        }
    }
}