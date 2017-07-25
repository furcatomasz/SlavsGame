/// <reference path="../Item.ts"/>

namespace Items {
    export class Boots extends Item {

        constructor(game:Game) {
            super(game);

            this.name = 'Boots';
            this.mountType = 2;
            this.mesh = this.game.characters.player.instance('Boots', false);
            this.mesh.visibility = 0;
        }
    }
}