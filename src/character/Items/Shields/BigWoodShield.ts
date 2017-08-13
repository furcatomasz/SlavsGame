/// <reference path="Shield.ts"/>

namespace Items.Shields {
    export class BigWoodShield extends Shield {

        constructor(game:Game) {
            super(game);

            this.name = 'Big Wood Shield';
            this.image = 'Shield';
            this.mountType = 1;
            this.mountBoneName = 'shield.bone';
            this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 10, 0, 0, 0);
            this.mesh = this.game.characters.player.instance('Shield', false);
            this.mesh.visibility = 0;
            this.mesh.scaling = new BABYLON.Vector3(1, 2, 1);
        }
    }
}