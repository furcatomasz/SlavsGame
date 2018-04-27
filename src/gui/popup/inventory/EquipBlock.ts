/// <reference path="../Inventory.ts"/>

namespace GUI.Inventory {
    export abstract class EquipBlock {
        protected inventory: GUI.Inventory;

        protected item: Items.Item;
        protected blockWidth: string;
        protected blockHeight: string;
        protected blockTop: string;
        protected blockLeft: string;

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
                panelItem.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
                panelItem.thickness = 0;
                panelItem.width = this.blockWidth;
                panelItem.height = this.blockHeight;
                panelItem.top = this.blockTop;
                panelItem.left = this.blockLeft;
                this.inventory.guiTexture.addControl(panelItem);
                this.block = panelItem;
                this.createImage();
            }
            return this;
        }

        /**
         * @returns {GUI.Inventory.EquipBlock}
         */
        protected createImage() {
            let self = this;
            let image = this.inventory.createItemImage(this.item);
            this.inventory.guiMain.registerBlockMoveCharacter(image);
            image.onPointerUpObservable.add(function () {
                self.inventory.guiMain.game.player.inventory.emitEquip(self.item);
                self.inventory.guiTexture.removeControl(self.block);
                self.inventory.showItems();
                if(self.inventory.guiMain.attributesOpened) {
                    self.inventory.guiMain.attributes.refreshPopup();
                }
            });
            this.block.addControl(image);

            return this;
        }

    }
}