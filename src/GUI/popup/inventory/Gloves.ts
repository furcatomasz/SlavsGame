class Gloves extends EquipBlock {

    constructor(inventory: GUI.Inventory) {
        super(inventory);

        this.blockWidth = "60px";
        this.blockHeight = "60px";
        this.blockTop = "-40px";

        this.blockLeft = "250px";
        this.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

        this.item = inventory.guiMain.game.player.inventory.gloves;

        this.createBlockWithImage();
    }

}
