/// <reference path="../Item.ts"/>

namespace Items {
    export class Shield extends Item {

        constructor(game:Game) {
            super(game);

            this.name = 'Shield';
            this.mountType = 1;
            this.mountBoneName = 'shield.bone';
            this.mesh = this.game.items.shield.instance('Shield', false);
        }
    }
}