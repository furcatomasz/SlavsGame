/// <reference path="Helm.ts"/>

namespace Items.Helms {
    export class PrimaryHelm extends Helm {

        constructor(game:Game) {
            super(game);

            this.name = 'Helm';
            this.image = 'Helm';
            this.itemId = 5;
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
            this.mesh = game.factories['character'].createInstance('Helm');
            this.mesh.visibility = 0;
        }
    }
}