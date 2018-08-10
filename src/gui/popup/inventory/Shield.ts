/// <reference path="EquipBlock.ts"/>

namespace GUI.Inventory {
    export class Shield extends EquipBlock {

        constructor(inventory: GUI.Inventory) {
            super(inventory);

            this.blockWidth = "6%";
            this.blockHeight = "20%";
            this.blockTop = "-27%";
            this.blockLeft = "-3%";

            this.item = inventory.guiMain.game.player.inventory.shield;

            this.createBlockWithImage();
        }

    }
}