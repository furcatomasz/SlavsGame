/// <reference path="Helm.ts"/>

namespace Items.Helms {
    export class PrimaryHelm extends Helm {

        constructor(game:Game) {
            super(game);

            this.name = 'Helm';
            this.image = 'Helm';
            this.mountType = 2;
            this.mesh = this.game.characters.player.instance('Helm', false);
            this.mesh.visibility = 0;
        }
    }
}