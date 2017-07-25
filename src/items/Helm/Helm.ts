/// <reference path="../Item.ts"/>

namespace Items {
    export class Helm extends Item {

        constructor(game:Game) {
            super(game);

            this.name = 'Helm';
            this.mountType = 2;
            this.mesh = this.game.characters.player.instance('Helm', false);
            this.mesh.visibility = 0;
        }
    }
}