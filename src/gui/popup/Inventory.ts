/// <reference path="Popup.ts"/>

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
            image.height = '80px';
            image.width = '180px';
            image.left = "-17%";
            image.top = '-3%';
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            this.guiTexture.addControl(image);

            let image2 = BABYLON.GUI.Button.CreateImageButton("gui.popup.image.key", ''+this.guiMain.game.player.keys+'', "assets/gui/key.png");
            image2.thickness = 0;
            image2.color = 'white';
            image2.height = '80px';
            image2.width = '180px';
            image2.left = "-3%";
            image2.top = '-3%';
            image2.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image2.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            this.guiTexture.addControl(image2);
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

            ////items
            let itemCount = 0;
            let left = -42;
            let level = 1;
            let top = 0;
            let panelItems = new BABYLON.GUI.Rectangle();
            panelItems.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            panelItems.width = "32%";
            panelItems.height = "45%";
            panelItems.top = "26%";
            panelItems.thickness = 0;
            panelItems.isPointerBlocker = true;
            this.panelItems = panelItems;

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

                if (itemCount == 0) {
                    top = -35;
                } else if (itemCount % 5 == 0) {
                    left = -42;
                    top = (30 * level) - 35;
                    level++;
                } else {
                    left += 20;
                }
                itemCount++;

                let result = new BABYLON.GUI.Button(name);
                result.width = 0.20;
                result.height = 0.3;
                result.left = left + "%";
                result.top = top + "%";
                result.thickness = 0;
                result.fontSize = '14';

                let image = this.createItemImage(item);

                result.addControl(image);
                panelItems.addControl(result);

                let tooltipButton = null;
                result.onPointerEnterObservable.add(function () {
                    let text = item.name;
                    if(item.statistics.damage > 0) {
                        text += "\nDamage: "+item.statistics.damage+"";
                    }
                    if(item.statistics.armor > 0) {
                        text += "\nArmor: "+item.statistics.armor+"";
                    }

                    tooltipButton = new GUI.TooltipButton(result, text);
                });

                result.onPointerOutObservable.add(function () {
                    result.children.forEach(function(value, key) {
                       if(value.name == 'tooltip') {
                           result.removeControl(value);
                       }
                    });
                });

                result.onPointerUpObservable.add(function () {
                    self.guiMain.game.player.inventory.emitEquip(item);
                    self.onPointerUpItemImage(item);
                    self.showItems();
                    if (self.guiMain.attributes.opened) {
                        self.guiMain.attributes.refreshPopup();
                    }
                });
            }

            this.guiTexture.addControl(panelItems);

            window.addEventListener('resize', function () {
                if (window.innerWidth > 1600) {
                    panelItems.height = "45%";
                    panelItems.top = "26%";
                } else if (window.innerWidth > 1200) {
                    panelItems.height = "30%";
                    panelItems.top = "20%";
                } else {
                    panelItems.height = "20%";
                    panelItems.top = "15%";
                }

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
            image.height = 0.6;

            image.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

            return image;
        }


    }
}