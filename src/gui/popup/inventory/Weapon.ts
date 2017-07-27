/// <reference path="EquipBlock.ts"/>

namespace GUI.Inventory {
    export class Weapon extends EquipBlock {

        constructor(inventory: GUI.Inventory) {
            super(inventory);

            this.blockWidth = "6%";
            this.blockHeight = "20%";
            this.blockTop = "-27%";
            this.blockLeft = "-22.5%";

            this.item = inventory.guiMain.player.inventory.weapon;

            this.createBlockWithImage();
        }

    }
}