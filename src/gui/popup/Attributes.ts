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
            this.guiMain.attributesOpened = true;
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
                });

                this.guiMain.registerBlockMoveCharacter(buttonClose);
                this.guiTexture.addControl(buttonClose);
                this.buttonClose = buttonClose;
            }
        }

        public close() {
            this.guiMain.attributesOpened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
            this.guiMain.game.sceneManager.environment.ground.isPickable = true;
        }

        protected showText() {
            let textDamage = new BABYLON.GUI.TextBlock();
            textDamage.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textDamage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textDamage.text = 'Damage:'+this.guiMain.player.statistics.getDamage() ;
            textDamage.color = "white";
            // text1.fontSize = 24;
            textDamage.top = "0%";
            textDamage.width = "25%";
            textDamage.height = "10%";
            textDamage.top = "0%";

            let textArmor = new BABYLON.GUI.TextBlock();
            textArmor.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textArmor.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textArmor.text = 'Armor:'+this.guiMain.player.statistics.getArmor() ;
            textArmor.color = "white";
            // text1.fontSize = 24;
            textArmor.top = "0%";
            textArmor.width = "25%";
            textArmor.height = "10%";
            textArmor.top = "10%";

            this.guiTexture.addControl(textDamage);
            this.guiTexture.addControl(textArmor);
        }

    }
}