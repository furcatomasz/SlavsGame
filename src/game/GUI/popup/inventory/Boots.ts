import {EquipBlock} from "./EquipBlock";
import {Inventory} from "../Inventory";
import {Control} from 'babylonjs-gui';

export class Boots extends EquipBlock {

    constructor(inventory: Inventory) {
        super(inventory);

        this.blockWidth = "60px";
        this.blockHeight = "60px";
        this.blockTop = "-40px";
        this.blockLeft = "310px";
        this.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;

        this.item = inventory.guiMain.game.player.inventory.boots;

        this.createBlockWithImage();
    }

}
