/// <reference path="../Item.ts"/>

namespace Items {
    export class Gloves extends Item {

        constructor(game:Game) {
            super(game);

            this.name = 'Gloves';
            this.mountType = 2;
            this.mesh = this.game.characters.player.instance('Gloves', false);
        }
    }
}