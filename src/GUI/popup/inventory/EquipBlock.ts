abstract class EquipBlock {
    protected inventory: GUI.Inventory;

    protected item: Items.Item;
    protected blockWidth: string;
    protected blockHeight: string;
    protected blockTop: string;
    protected blockLeft: string;
    protected verticalAlignment: number;

    public block: BABYLON.GUI.Rectangle;
    public image: BABYLON.GUI.Image;

    constructor(inventory: GUI.Inventory) {
        this.inventory = inventory;
    }

    /**
     * @returns {GUI.Inventory.EquipBlock}
     */
    protected createBlockWithImage() {
        if (this.item) {
            let panelItem = new BABYLON.GUI.Rectangle();
            panelItem.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            panelItem.verticalAlignment = this.verticalAlignment;
            panelItem.thickness = 0;
            panelItem.width = this.blockWidth;
            panelItem.height = this.blockHeight;
            panelItem.top = this.blockTop;
            panelItem.left = this.blockLeft;
            panelItem.isPointerBlocker = true;

            this.inventory.container.addControl(panelItem);
            this.block = panelItem;
            this.createImage();

            let blockWidth = this.blockWidth;
            let blockHeight = this.blockHeight;
            let blockTop = this.blockTop;
            let blockLeft = this.blockLeft;
            panelItem.width = blockWidth;
            panelItem.height = blockHeight;
            panelItem.top = blockTop;
            panelItem.left = blockLeft;
        }
        return this;
    }

    protected createImage() {
        let self = this;
        let item = this.item;

        if (item.statistics) {
            let image = this.inventory.createItemImage(item);
            TooltipHelper.createTooltipOnInventoryItemButton(self.inventory.guiTexture, item, image, function () {
                self.inventory.guiMain.game.player.inventory.emitEquip(self.item);
                self.inventory.guiTexture.removeControl(self.block);
                self.inventory.showItems();
                self.inventory.guiMain.attributes.refreshPopup();
            });

            this.block.addControl(image);
        }

        return this;
    }

}
