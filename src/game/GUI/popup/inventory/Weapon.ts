import {Inventory} from "../Inventory";
import {EquipBlock} from "./EquipBlock";
import {Control} from 'babylonjs-gui';

export class Weapon extends EquipBlock {

    constructor(inventory: Inventory) {
        super(inventory);

        this.blockWidth = "90px";
        this.blockHeight = "146px";
        this.blockTop = "248px";
        this.blockLeft = "85px";


        this.item = inventory.guiMain.game.player.inventory.weapon;

        this.createBlockWithImage();
    }

}
