class Armor extends EquipBlock {

    constructor(inventory: GUI.Inventory) {
        super(inventory);

        this.blockWidth = "80px";
        this.blockHeight = "80px";
        this.blockTop = "10px";
        this.blockLeft = "210px";
        this.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

        this.item = inventory.guiMain.game.player.inventory.armor;


        // this.block
        this.createBlockWithImage();
    }

}
