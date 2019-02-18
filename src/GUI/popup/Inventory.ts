namespace GUI {
    export class Inventory extends Popup {

        protected weaponImage: EquipBlock;
        protected shieldImage: EquipBlock;
        protected armorImage: EquipBlock;
        protected glovesImage: EquipBlock;
        protected bootsImage: EquipBlock;
        protected helmImage: EquipBlock;

        protected panelItems:BABYLON.GUI.Rectangle;
        private meshes: Array<BABYLON.AbstractMesh>;

        constructor(guiMain:GUI.Main) {
            super(guiMain);
            this.meshes = [];
            this.name = 'Inventory';
            this.imageUrl = "assets/gui/content.png";
            this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        }

        protected initTexture() {
            this.guiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.' + this.name);
            this.guiTexture.layer.layerMask = 1;
            let container = new BABYLON.GUI.Rectangle('gui.panel.'+ this.name);
            container.horizontalAlignment = this.position;
            container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            container.thickness = 0;
            container.isPointerBlocker = true;
            this.container = container;
            this.guiTexture.addControl(container);

            let image = new BABYLON.GUI.Rectangle('gui.popup.image');
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.width = 1;
            image.thickness = 0;
            image.height = 1;
            container.addControl(image);

            this.container.addControl(image);

            container.width = '685px';
            container.height = '100%';

            return this;
        }

        public open() {
            let self = this;
            let inventoryPlayer = this.guiMain.game.player.mesh.createInstance('inventory_player');
            inventoryPlayer.layerMask = 1;
            inventoryPlayer.position = new BABYLON.Vector3(-5, -2, 12);
            inventoryPlayer.rotation = new BABYLON.Vector3(0, -0.2, 0);
            self.meshes.push(inventoryPlayer);

            this.guiMain.game.getScene().getCameraByName('gameCamera').position.y = 500;
            this.guiMain.playerBottomPanel.container.alpha = 0;
            this.guiMain.game.player.inventory.getEquipedItems().forEach((item) => {
                if(item) {
                    let itemInstance = item.mesh.createInstance("itemInstance");
                    itemInstance.layerMask = 1;
                    itemInstance.position = new BABYLON.Vector3(-5, -2, 12);
                    itemInstance.rotation = new BABYLON.Vector3(0, -0.2, 0);
                    self.meshes.push(itemInstance);
                }
            });

            this.initTexture();

            this.showTexts();
            this.opened = true;
            this.showItems();
            this.showEquipedItems();
            this.showSpecialItemsAndGold();
            this.createButtonClose();

            return this;
        }

        private showTexts() {
            let itemsEquiped = new BABYLON.GUI.TextBlock('title');
            itemsEquiped.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            itemsEquiped.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            itemsEquiped.text = 'Equiped items';
            itemsEquiped.top = "2%";
            itemsEquiped.color = "brown";
            itemsEquiped.width = "70%";
            itemsEquiped.height = "10%";
            itemsEquiped.fontSize = 38;
            itemsEquiped.fontFamily = "RuslanDisplay";
            itemsEquiped.textWrapping = true;
            this.container.addControl(itemsEquiped);

            let itemToEquip = new BABYLON.GUI.TextBlock('title');
            itemToEquip.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            itemToEquip.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            itemToEquip.text = 'Inventory items';
            itemToEquip.top = "200px";
            itemToEquip.color = "brown";
            itemToEquip.width = "70%";
            itemToEquip.height = "10%";
            itemToEquip.fontSize = 38;
            itemToEquip.fontFamily = "RuslanDisplay";
            itemToEquip.textWrapping = true;
            this.container.addControl(itemToEquip);
        }

        public showSpecialItemsAndGold() {
            let image = BABYLON.GUI.Button.CreateImageButton("gui.popup.image.gold", ''+this.guiMain.game.player.gold+'', "assets/gui/gold.png");
            image.thickness = 0;
            image.color = 'white';
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            this.container.addControl(image);

            let image2 = BABYLON.GUI.Button.CreateImageButton("gui.popup.image.key", ''+this.guiMain.game.player.keys+'', "assets/gui/key.png");
            image2.thickness = 0;
            image2.color = 'white';
            image2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            this.container.addControl(image2);

            let image3 = BABYLON.GUI.Button.CreateImageButton("gui.popup.image.wine", ''+this.guiMain.game.player.keys+'', "assets/skills/heal.png");
            image3.thickness = 0;
            image3.color = 'white';
            image3.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image3.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            this.container.addControl(image3);

            image.height = '24px';
            image.width = '150px';
            image.left = "-150px";
            image.top = '-20px';
            image.fontSize = 18;

            image2.height = '24px';
            image2.width = '150px';
            image2.left = "20px";
            image2.top = '-20px';
            image2.fontSize = 18;

            image3.height = '24px';
            image3.width = '150px';
            image3.left = "180px";
            image3.top = '-20px';
            image3.fontSize = 18;
        }

        public close() {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
            this.meshes.forEach((mesh) => {
                mesh.dispose();
            });
            this.guiMain.game.player.refreshCameraPosition();
            this.guiMain.playerBottomPanel.container.alpha = 1;
        }

        protected showEquipedItems() {
            this.weaponImage = new Weapon(this);
            this.shieldImage = new Shield(this);
            this.glovesImage = new Gloves(this);
            this.bootsImage = new Boots(this);
            this.armorImage = new Armor(this);
            this.helmImage = new Helm(this);
        }

        public showItems() {
            let self = this;
            let inventory = this.guiMain.game.player.inventory;

            if (this.panelItems) {
                this.guiTexture.removeControl(this.panelItems);
            }

            let eqiupedItems = inventory.getEquipedItems();
            let grid = new BABYLON.GUI.Grid();
            grid.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            grid.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            grid.width = '568px';
            grid.height ='280px';
            grid.top = '250px';
            grid.left = '110px'
            grid.addColumnDefinition(1);
            grid.addColumnDefinition(1);
            grid.addColumnDefinition(1);
            grid.addColumnDefinition(1);
            grid.addColumnDefinition(1);
            grid.addColumnDefinition(1);
            grid.addColumnDefinition(1);
            grid.addColumnDefinition(1);

            grid.addRowDefinition(1);
            grid.addRowDefinition(1);
            grid.addRowDefinition(1);
            grid.addRowDefinition(1);

            this.container.addControl(grid);

            let itemCount = 0;
            let row = -1;
            let collumn = -1;

            for (let i = 0; i < inventory.items.length; i++) {
                let breakDisplayItem;
                let item = inventory.items[i];
                for (let equipedItem of eqiupedItems) {
                    if (equipedItem == item) {
                        breakDisplayItem = true;
                        break;
                    }
                }

                if (breakDisplayItem) {
                    continue;
                }

                if (itemCount % 6 == 0) {
                    row++;
                    collumn = -1;
                }

                itemCount++;
                collumn++;

                let image = BABYLON.GUI.Button.CreateImageOnlyButton('gui.popup.image.' + item.name, 'assets/Miniatures/' + item.image + '.png');
                image.height = 1;
                image.width = 1;
                image.thickness = 0;
                image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
                image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;

                grid.addControl(image, row, collumn);

                TooltipHelper.createTooltipOnInventoryItemButton(self.guiTexture, item, image, function() {
                    self.guiMain.game.player.inventory.emitEquip(item);
                    self.onPointerUpItemImage(item);
                    self.showItems();
                    self.guiMain.attributes.refreshPopup();
                });
            }

            return this;
        }

        /**
         * @param item
         * @returns {GUI.Inventory}
         */
        protected onPointerUpItemImage(item:Items.Item) {
            switch (item.type) {
                case 1:
                    if (this.weaponImage.block) {
                        this.guiTexture.removeControl(this.weaponImage.block);
                    }

                    this.weaponImage = new Weapon(this);
                    break;
                case 2:
                    if (this.shieldImage.block) {
                        this.guiTexture.removeControl(this.shieldImage.block);
                    }

                    this.shieldImage = new Shield(this);
                    break;
                case 3:
                    if (this.helmImage.block) {
                        this.guiTexture.removeControl(this.helmImage.block);
                    }

                    this.helmImage = new Helm(this);
                    break;
                case 4:
                    if (this.glovesImage.block) {
                        this.guiTexture.removeControl(this.glovesImage.block);
                    }

                    this.glovesImage = new Gloves(this);
                    break;
                case 5:
                    if (this.bootsImage.block) {
                        this.guiTexture.removeControl(this.bootsImage.block);
                    }

                    this.bootsImage = new Boots(this);
                    break;
                case 6:
                    if (this.armorImage.block) {
                        this.guiTexture.removeControl(this.armorImage.block);
                    }

                    this.armorImage = new Armor(this);
                    break;
            }

            return this;
        }

        /**
         * @param item
         * @returns {BABYLON.GUI.Image}
         */
        public createItemImage(item:Items.Item) {
            let image = new BABYLON.GUI.Image('gui.popup.image.' + item.name, 'assets/Miniatures/' + item.image + '.png');
            image.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
            image.isPointerBlocker = true;
            return image;
        }


    }
}
