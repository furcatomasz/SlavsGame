import {Inventory} from "../Inventory";
import {EquipBlock} from "./EquipBlock";
import {Control} from 'babylonjs-gui';

export class Weapon extends EquipBlock {

    constructor(inventory: Inventory) {
        super(inventory);

        this.blockWidth = "60px";
        this.blockHeight = "60px";
        this.blockTop = "-40px";
        this.blockLeft = "10px";
        this.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;

        this.item = inventory.guiMain.game.player.inventory.weapon;

        this.createBlockWithImage();
    }

}
