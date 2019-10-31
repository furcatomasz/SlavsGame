import {EquipBlock} from "./EquipBlock";
import {Inventory} from "../Inventory";
import {Control} from 'babylonjs-gui';

export class Boots extends EquipBlock {

    constructor(inventory: Inventory) {
        super(inventory);

        this.blockWidth = "96px";
        this.blockHeight = "92px";
        this.blockTop = "442px";
        this.blockLeft = "82px";

        this.item = inventory.guiMain.game.player.inventory.boots;

        this.createBlockWithImage();
    }

}
