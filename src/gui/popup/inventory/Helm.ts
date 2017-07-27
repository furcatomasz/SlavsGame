/// <reference path="EquipBlock.ts"/>

namespace GUI.Inventory {
    export class Helm extends EquipBlock {

        constructor(inventory: GUI.Inventory) {
            super(inventory);

            this.blockWidth = "6%";
            this.blockHeight = "20%";
            this.blockTop = "-44%";
            this.blockLeft = "-13%";

            this.item = inventory.guiMain.player.inventory.helm;

            this.createBlockWithImage();
        }

    }
}