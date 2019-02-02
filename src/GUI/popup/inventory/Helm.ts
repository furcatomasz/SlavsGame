class Helm extends EquipBlock {

    constructor(inventory: GUI.Inventory) {
        super(inventory);

        this.blockWidth = "80px";
        this.blockHeight = "80px";
        this.blockTop = "50px";
        this.blockLeft = "510px";

        this.item = inventory.guiMain.game.player.inventory.helm;

        this.createBlockWithImage();
    }

}
