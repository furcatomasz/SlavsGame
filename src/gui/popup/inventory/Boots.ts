/// <reference path="EquipBlock.ts"/>

namespace GUI.Inventory {
    export class Boots extends EquipBlock {

        constructor(inventory: GUI.Inventory) {
            super(inventory);

            this.blockWidth = "4%";
            this.blockHeight = "20%";
            this.blockTop = "-10%";
            this.blockLeft = "-23.5%";

            this.item = inventory.guiMain.player.inventory.boots;

            this.createBlockWithImage();
        }

    }
}