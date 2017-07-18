/// <reference path="Popup.ts"/>

namespace GUI {
    export class Inventory extends Popup {

        constructor(guiMain: GUI.Main) {
            super(guiMain);
            this.name = 'Inventory';
            this.imageUrl = "assets/gui/inventory.png";
            this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            this.initTexture();
        }

        public open() {
            let self = this;
            this.guiTexture.addControl(this.container);
            this.showItems(this.container);
            if (!this.buttonClose) {
                let buttonClose = BABYLON.GUI.Button.CreateSimpleButton("aboutUsBackground", "Close");
                buttonClose.color = "white";
                buttonClose.background = "black";
                buttonClose.width = "70px;";
                buttonClose.height = "40px";
                buttonClose.horizontalAlignment = this.position;
                buttonClose.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

                buttonClose.onPointerUpObservable.add(function () {
                    self.close();
                    self.guiTexture.removeControl(buttonClose);
                    self.buttonClose = null;
                });

                this.guiMain.registerBlockMoveCharacter(buttonClose);
                this.guiTexture.addControl(buttonClose);

                this.buttonClose = buttonClose;
            }

            return this;
        }

        public close() {
            this.guiTexture.removeControl(this.container);
        }

        protected showItems(container) {
            console.log(container);

            let inventory = this.guiMain.player.inventory;
            for (var i = 0; i < inventory.items.length; i++) {
                var item = inventory.items[i];

                let image = new BABYLON.GUI.Image('gui.popup.image.'+this.name, 'assets/Miniatures/'+item.name +'.png');
                //image.horizontalAlignment = this.position;
                image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
                image.width = '80px';
                image.height = '80px';
                let left = i*80;

                image.left = 400+left;
                image.top = -300;
                image.paddingBottom = 150;

                this.guiTexture.addControl(image);

                this.guiMain.registerBlockMoveCharacter(image);

                this.container = image;
            }

            return this;
        }

        public initData() {
        }
}