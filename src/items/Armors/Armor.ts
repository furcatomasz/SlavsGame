/// <reference path="../Item.ts"/>

namespace Items {
    export class Armor extends Item {

        constructor(game:Game) {
            super(game);

            this.name = 'Armor';
            this.mountType = 2;
            this.mesh = this.game.characters.player.instance('Armor', false);
        }
    }
}