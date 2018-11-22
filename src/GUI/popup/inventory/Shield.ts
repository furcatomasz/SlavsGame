class Shield extends EquipBlock {

    constructor(inventory: GUI.Inventory) {
        super(inventory);

        this.blockWidth = "90px";
        this.blockHeight = "146px";
        this.blockTop = "248px";
        this.blockLeft = "435px";

        this.item = inventory.guiMain.game.player.inventory.shield;

        this.createBlockWithImage();
    }

}