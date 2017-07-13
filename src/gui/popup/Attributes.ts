/// <reference path="Popup.ts"/>

namespace GUI {
    export class Attributes extends Popup {

        constructor(guiMain: GUI.Main) {
            super(guiMain);
            this.name = 'Inventory';
            this.imageUrl = "assets/gui/attrs.png";
            this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            this.initTexture();
        }

        public open() {
            let self = this;
            this.guiTexture.addControl(this.container);

            let buttonClose = BABYLON.GUI.Button.CreateSimpleButton("attributesButtonClose", "Close");
            buttonClose.color = "white";
            buttonClose.background = "black";
            buttonClose.width = "70px;";
            buttonClose.height = "40px";
            buttonClose.horizontalAlignment = this.position;
            buttonClose.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

            buttonClose.onPointerUpObservable.add(function() {
                self.close();
                self.guiTexture.removeControl(buttonClose);
            });

            this.guiTexture.addControl(buttonClose);
        }

        public close() {
            this.guiTexture.removeControl(this.container);
        }

        public initData() {
        }
    }
}