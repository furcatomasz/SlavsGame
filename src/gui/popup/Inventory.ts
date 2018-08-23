namespace GUI {
    export class Inventory extends Popup {

        protected weaponImage:GUI.Inventory.EquipBlock;
        protected shieldImage:GUI.Inventory.EquipBlock;
        protected armorImage:GUI.Inventory.EquipBlock;
        protected glovesImage:GUI.Inventory.EquipBlock;
        protected bootsImage:GUI.Inventory.EquipBlock;
        protected helmImage:GUI.Inventory.EquipBlock;

        protected panelItems:BABYLON.GUI.Rectangle;

        constructor(guiMain:GUI.Main) {
            super(guiMain);
            this.name = 'Inventory';
            this.imageUrl = "assets/gui/inventory.png";
            this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
        }

        public open() {
            this.initTexture();
            this.opened = true;

            this.guiTexture.addControl(this.container);
            this.showItems();
            this.showEquipedItems();
            this.showSpecialItemsAndGold();

            this.createButtonClose();

            return this;
        }

        public showSpecialItemsAndGold() {
            let image = BABYLON.GUI.Button.CreateImageButton("gui.popup.image.gold", ''+this.guiMain.game.player.gold+'', "assets/gui/gold.png");
            image.thickness = 0;
            image.color = 'white';
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            this.container.addControl(image);

            let image2 = BABYLON.GUI.Button.CreateImageButton("gui.popup.image.key", ''+this.guiMain.game.player.keys+'', "assets/gui/key.png");
            image2.thickness = 0;
            image2.color = 'white';
            image2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            this.container.addControl(image2);

            let image3 = BABYLON.GUI.Button.CreateImageButton("gui.popup.image.wine", ''+this.guiMain.game.player.keys+'', "assets/skills/heal.png");
            image3.thickness = 0;
            image3.color = 'white';
            image3.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image3.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            this.container.addControl(image3);

            let checkSizeListener = function (width) {
                if (width > 1819) {
                    image.height = '24px';
                    image.width = '150px';
                    image.left = "60px";
                    image.top = '-48px';
                    image.fontSize = 18;

                    image2.height = '24px';
                    image2.width = '150px';
                    image2.left = "235px";
                    image2.top = '-48px';
                    image2.fontSize = 18;

                    image3.height = '24px';
                    image3.width = '150px';
                    image3.left = "435px";
                    image3.top = '-48px';
                    image3.fontSize = 18;

                } else {
                    image.width = '75px';
                    image.height = '12px';
                    image.top = '-24px';
                    image.left = '30px';
                    image.fontSize = 9;

                    image2.height = '12px';
                    image2.width = '75px';
                    image2.left = "120px";
                    image2.top = '-24px';
                    image2.fontSize = 9;

                    image3.height = '12px';
                    image3.width = '75px';
                    image3.left = "210px";
                    image3.top = '-24px';
                    image3.fontSize = 9;
                }
            }
            checkSizeListener(window.innerWidth);
            window.addEventListener("resize", function () {
                let width = window.innerWidth;
                checkSizeListener(width);
            });
        }

        public close() {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
        }

        protected showEquipedItems() {
            this.weaponImage = new GUI.Inventory.Weapon(this);
            this.shieldImage = new GUI.Inventory.Shield(this);
            this.glovesImage = new GUI.Inventory.Gloves(this);
            this.bootsImage = new GUI.Inventory.Boots(this);
            this.armorImage = new GUI.Inventory.Armor(this);
            this.helmImage = new GUI.Inventory.Helm(this);
        }

        public showItems() {
            let self = this;
            let inventory = this.guiMain.game.player.inventory;

            if (this.panelItems) {
                this.guiTexture.removeControl(this.panelItems);
            }

            let eqiupedItems = inventory.getEquipedItems();


            let grid = new BABYLON.GUI.Grid();
            grid.width = '568px';
            grid.height ='288px';
            grid.top = '247px';
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

                if (itemCount % 8 == 0) {
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

                let tooltipButton = null;
                image.onPointerEnterObservable.add(function () {
                    let text = item.name;
                    if(item.statistics.damage > 0) {
                        text += "\nDamage: "+item.statistics.damage+"";
                    }
                    if(item.statistics.armor > 0) {
                        text += "\nArmor: "+item.statistics.armor+"";
                    }

                    tooltipButton = new GUI.TooltipButton(image, text);
                });

                image.onPointerOutObservable.add(function () {
                    image.children.forEach(function(value, key) {
                       if(value.name == 'tooltip') {
                           image.removeControl(value);
                       }
                    });
                });

                image.onPointerUpObservable.add(function () {
                    self.guiMain.game.player.inventory.emitEquip(item);
                    self.onPointerUpItemImage(item);
                    self.showItems();
                    if (self.guiMain.attributes.opened) {
                        self.guiMain.attributes.refreshPopup();
                    }
                });
            }

            let checkSizeListener = function (width) {
                if (width > 1819) {
                    grid.width = '568px';
                    grid.height = '288px';
                    grid.top = '247px';
                } else {
                    grid.width = '284px';
                    grid.height = '144px';
                    grid.top = '123px';
                }
            }
            checkSizeListener(window.innerWidth);
            window.addEventListener("resize", function () {
                let width = window.innerWidth;
                checkSizeListener(width);
            });

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

                    this.weaponImage = new GUI.Inventory.Weapon(this);
                    break;
                case 2:
                    if (this.shieldImage.block) {
                        this.guiTexture.removeControl(this.shieldImage.block);
                    }

                    this.shieldImage = new GUI.Inventory.Shield(this);
                    break;
                case 3:
                    if (this.helmImage.block) {
                        this.guiTexture.removeControl(this.helmImage.block);
                    }

                    this.helmImage = new GUI.Inventory.Helm(this);
                    break;
                case 4:
                    if (this.glovesImage.block) {
                        this.guiTexture.removeControl(this.glovesImage.block);
                    }

                    this.glovesImage = new GUI.Inventory.Gloves(this);
                    break;
                case 5:
                    if (this.bootsImage.block) {
                        this.guiTexture.removeControl(this.bootsImage.block);
                    }

                    this.bootsImage = new GUI.Inventory.Boots(this);
                    break;
                case 6:
                    if (this.armorImage.block) {
                        this.guiTexture.removeControl(this.armorImage.block);
                    }

                    this.armorImage = new GUI.Inventory.Armor(this);
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

            return image;
        }


    }
}