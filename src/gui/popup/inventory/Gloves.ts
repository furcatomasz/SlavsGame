/// <reference path="EquipBlock.ts"/>

namespace GUI.Inventory {
    export class Gloves extends EquipBlock {

        constructor(inventory: GUI.Inventory) {
            super(inventory);

            this.blockWidth = "5%";
            this.blockHeight = "20%";
            this.blockTop = "-11%";
            this.blockLeft = "-4%";

            this.item = inventory.guiMain.player.inventory.gloves;

            this.createBlockWithImage();
        }

    }
}