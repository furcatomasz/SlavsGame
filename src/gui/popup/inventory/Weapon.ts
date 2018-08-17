/// <reference path="EquipBlock.ts"/>

namespace GUI.Inventory {
    export class Weapon extends EquipBlock {

        constructor(inventory: GUI.Inventory) {
            super(inventory);

            this.blockWidth = "90px";
            this.blockHeight = "146px";
            this.blockTop = "248px";
            this.blockLeft = "85px";

            this.item = inventory.guiMain.game.player.inventory.weapon;

            this.createBlockWithImage();
        }

    }
}