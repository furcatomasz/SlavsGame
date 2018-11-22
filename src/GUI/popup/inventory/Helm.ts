class Helm extends EquipBlock {

    constructor(inventory: GUI.Inventory) {
        super(inventory);

        this.blockWidth = "96px";
        this.blockHeight = "92px";
        this.blockTop = "121px";
        this.blockLeft = "257px";

        this.item = inventory.guiMain.game.player.inventory.helm;

        this.createBlockWithImage();
    }

}