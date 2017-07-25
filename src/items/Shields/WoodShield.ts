/// <reference path="Shield.ts"/>

namespace Items.Shields {
    export class WoodShield extends Shield {

        constructor(game:Game) {
            super(game);

            this.name = 'Shield';
            this.mountType = 1;
            this.mountBoneName = 'shield.bone';
            this.mesh = this.game.items.shield.instance('Shield', false);
            this.mesh.visibility = 0;
        }
    }
}