import {EquipBlock} from "./EquipBlock";
import {Inventory} from "../Inventory";
import {Control} from 'babylonjs-gui';

export class Helm extends EquipBlock {

    constructor(inventory: Inventory) {
        super(inventory);

        this.blockWidth = "96px";
        this.blockHeight = "92px";
        this.blockTop = "121px";
        this.blockLeft = "257px";

        this.item = inventory.guiMain.game.player.inventory.helm;

        this.createBlockWithImage();
    }

}
