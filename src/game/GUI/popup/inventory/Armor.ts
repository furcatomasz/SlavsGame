import {EquipBlock} from "./EquipBlock";
import {Inventory} from "../Inventory";
import {Control} from 'babylonjs-gui';

export class Armor extends EquipBlock {

    constructor(inventory: Inventory) {
        super(inventory);

        this.blockWidth = "153px";
        this.blockHeight = "250px";
        this.blockTop = "270px";
        this.blockLeft = "228px";

        this.item = inventory.guiMain.game.player.inventory.armor;

        this.createBlockWithImage();
    }

}
