/// <reference path="Popup.ts"/>

namespace GUI {
    export class Attributes extends Popup {

        constructor(guiMain: GUI.Main) {
            super(guiMain);
            this.name = 'Inventory';
            this.imageUrl = "assets/gui/attrs.png";
            this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        }

        public open() {
            let self = this;
            this.initTexture();

            if (!this.buttonClose) {
                this.guiTexture.addControl(this.container);
                this.showText();
                let buttonClose = BABYLON.GUI.Button.CreateSimpleButton("attributesButtonClose", "Close");
                buttonClose.color = "white";
                buttonClose.background = "black";
                buttonClose.width = "70px;";
                buttonClose.height = "40px";
                buttonClose.horizontalAlignment = this.position;
                buttonClose.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

                buttonClose.onPointerUpObservable.add(function() {
                    self.close();
                    self.guiTexture.dispose();
                    self.buttonClose = null;
                    self.guiMain.game.sceneManager.environment.ground.isPickable = true;
                });

                this.guiMain.registerBlockMoveCharacter(buttonClose);

                this.guiTexture.addControl(buttonClose);
                this.buttonClose = buttonClose;
            }
        }

        public close() {
            this.guiMain.attributesOpened = false;

        }

        protected showText() {
            let text1 = new BABYLON.GUI.TextBlock();
            text1.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            text1.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            text1.text = 'Damage:'+this.guiMain.player.statistics.getDamage() ;
            text1.color = "white";
            // text1.fontSize = 24;
            text1.top = "0%";
            text1.width = "25%";
            text1.height = "10%";
            text1.top = "0%";

            this.guiTexture.addControl(text1);
        }

    }
}