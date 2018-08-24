class Gloves extends EquipBlock {

    constructor(inventory: GUI.Inventory) {
        super(inventory);

        this.blockWidth = "96px";
        this.blockHeight = "92px";
        this.blockTop = "442px";
        this.blockLeft = "428px";

        this.item = inventory.guiMain.game.player.inventory.gloves;

        this.createBlockWithImage();
    }

}