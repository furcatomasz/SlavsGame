/// <reference path="EquipBlock.ts"/>

namespace GUI.Inventory {
    export class Armor extends EquipBlock {

        constructor(inventory: GUI.Inventory) {
            super(inventory);

            this.blockWidth = "15%";
            this.blockHeight = "30%";
            this.blockTop = "-25%";
            this.blockLeft = "-8%";

            this.item = inventory.guiMain.game.player.inventory.armor;

            this.createBlockWithImage();
        }

    }
}