class Armor extends EquipBlock {

    constructor(inventory: GUI.Inventory) {
        super(inventory);

        this.blockWidth = "80px";
        this.blockHeight = "80px";
        this.blockTop = "50px";
        this.blockLeft = "270px";

        this.item = inventory.guiMain.game.player.inventory.armor;


        // this.block
        this.createBlockWithImage();
    }

}
