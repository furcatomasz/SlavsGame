import {Popup} from "./Popup";
import {Item} from "../../Player/Items/Item";
import {Main} from "../Main";
import {EquipBlock} from "./inventory/EquipBlock";
import {Weapon} from "./inventory/Weapon";
import {Shield} from "./inventory/Shield";
import {Gloves} from "./inventory/Gloves";
import {Boots} from "./inventory/Boots";
import {Armor} from "./inventory/Armor";
import {Helm} from "./inventory/Helm";
import {TooltipHelper} from "../Tooltips/TooltipHelper";
import {Rectangle, AdvancedDynamicTexture, Control, Image, TextBlock, Button, Grid, DisplayGrid} from 'babylonjs-gui';
import * as BABYLON from 'babylonjs';

export class Inventory extends Popup {

    protected weaponImage: EquipBlock;
    protected shieldImage: EquipBlock;
    protected armorImage: EquipBlock;
    protected glovesImage: EquipBlock;
    protected bootsImage: EquipBlock;
    protected helmImage: EquipBlock;

    protected panelItems: Rectangle;
    private meshes: Array<BABYLON.AbstractMesh>;

    constructor(guiMain: Main) {
        super(guiMain);
        this.meshes = [];
        this.name = 'Inventory';
        this.imageUrl = "assets/gui/inventory.png";
    }

    protected initTexture() {
        this.guiTexture = AdvancedDynamicTexture.CreateFullscreenUI('gui.' + this.name);
        this.guiTexture.layer.layerMask = 1;

        let container = new Rectangle('gui.panel.' + this.name);
        container.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
        container.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
        container.thickness = 0;
        container.isPointerBlocker = true;

        let image = new Image('gui.popup.image.', this.imageUrl);
        image.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
        image.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
        container.addControl(image);

        let widthContainer = '607px';
        let heightContainer = '960px';
        let checklSizeListener = function (width) {
            if (width > 1819) {
                container.width = parseInt(widthContainer)+'px';
                container.height = parseInt(heightContainer)+'px';
            } else {
                container.width = parseInt(widthContainer)/2+'px';
                container.height = parseInt(heightContainer)/2+'px';
            }
        };
        checklSizeListener(window.innerWidth);
        window.addEventListener("resize", function () {
            let width = window.innerWidth;
            checklSizeListener(width);
        });

        this.container = container;
        this.guiTexture.addControl(container);

        return this;
    }

    public open() {
        const windowSize = this.guiMain.game.engine.getScreenAspectRatio();
        const meshesPosition = new BABYLON.Vector3(-windowSize-2, -2, 12);
        let self = this;
        this.manageMainGUI(false);
        let inventoryPlayer = this.guiMain.game.player.mesh.createInstance('inventory_player');
        inventoryPlayer.layerMask = 1;
        inventoryPlayer.position = meshesPosition;
        inventoryPlayer.rotation = new BABYLON.Vector3(0, -0.2, 0);
        inventoryPlayer.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
        self.meshes.push(inventoryPlayer);

        this.guiMain.game.getBabylonScene().getCameraByName('gameCamera').position.y = 500;
        this.guiMain.game.player.inventory.getEquipedItems().forEach((item) => {
            if (item) {
                let itemInstance = item.mesh.createInstance("itemInstance");
                itemInstance.layerMask = 1;
                itemInstance.position = meshesPosition;
                itemInstance.rotation = new BABYLON.Vector3(0, -0.2, 0);
                itemInstance.scaling = new BABYLON.Vector3(1.2, 1.2, 1.2);
                self.meshes.push(itemInstance);
            }
        });

        this.initTexture();
        this.opened = true;
        this.showItems();
        this.showEquipedItems();
        this.showSpecialItemsAndGold();
        this.createButtonClose();

        return this;
    }

    public showSpecialItemsAndGold() {
        // let image = Button.CreateImageButton("gui.popup.image.gold", ''+this.guiMain.game.player.gold+'', "assets/gui/gold.png");
        // image.thickness = 0;
        // image.color = 'white';
        // image.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
        // image.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
        // this.container.addControl(image);
        //
        // let image2 = Button.CreateImageButton("gui.popup.image.key", ''+this.guiMain.game.player.keys+'', "assets/gui/key.png");
        // image2.thickness = 0;
        // image2.color = 'white';
        // image2.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
        // image2.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
        // this.container.addControl(image2);
        //
        // let image3 = Button.CreateImageButton("gui.popup.image.wine", '0', "assets/skills/heal.png");
        // image3.thickness = 0;
        // image3.color = 'white';
        // image3.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
        // image3.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
        // this.container.addControl(image3);
        //
        // image.height = '36px';
        // image.width = '150px';
        // image.left = "-150px";
        // image.fontSize = 18;
        //
        // image2.height = '36px';
        // image2.width = '150px';
        // image2.left = "20px";
        // image2.fontSize = 18;
        //
        // image3.height = '36px';
        // image3.width = '150px';
        // image3.left = "-300px";
        // image3.fontSize = 18;
    }

    public close() {
        this.manageMainGUI(true);
        this.opened = false;
        this.guiTexture.dispose();
        this.buttonClose = null;
        this.meshes.forEach((mesh) => {
            mesh.dispose();
        });
        this.guiMain.game.player.refreshCameraPosition();
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
        let grid = new Grid();
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

            let image = Button.CreateImageOnlyButton('gui.popup.image.' + item.name, 'assets/Miniatures/' + item.image + '.png');
            image.height = 1;
            image.width = 1;
            image.thickness = 0;
            image.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;

            grid.addControl(image, row, collumn);

            TooltipHelper.createTooltipOnInventoryItemButton(self.guiTexture, item, image, function() {
                self.guiMain.game.player.inventory.emitEquip(item);
                self.onPointerUpItemImage(item);
                self.showItems();
                self.guiMain.attributes.refreshPopup();
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

    protected onPointerUpItemImage(item: Item) {
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

    public createItemImage(item: Item) {
        let image = new Image('gui.popup.image.' + item.name, 'assets/Miniatures/' + item.image + '.png');
        image.stretch = Image.STRETCH_UNIFORM;
        image.isPointerBlocker = true;
        return image;
    }


}
