/// <reference path="Popup.ts"/>

namespace GUI {
    export class Attributes extends Popup {

        constructor(guiMain:GUI.Main) {
            super(guiMain);
            this.name = 'Inventory';
            this.imageUrl = "assets/gui/attrs.png";
            this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        }

        public open() {
            let self = this;
            this.opened = true;
            this.initTexture();

            this.guiTexture.addControl(this.container);
            this.showText();
            let buttonClose = BABYLON.GUI.Button.CreateSimpleButton("attributesButtonClose", "Close");
            buttonClose.color = "white";
            buttonClose.background = "black";
            buttonClose.width = "70px;";
            buttonClose.height = "40px";
            buttonClose.horizontalAlignment = this.position;
            buttonClose.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

            buttonClose.onPointerUpObservable.add(function () {
                self.close();
            });

            this.guiMain.registerBlockMoveCharacter(buttonClose);
            this.guiTexture.addControl(buttonClose);
            this.buttonClose = buttonClose;
        }

        public close() {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
            this.guiMain.game.sceneManager.environment.ground.isPickable = true;
        }

        protected showText() {
            let panel = new BABYLON.GUI.StackPanel('attributes.panel');
            panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            panel.width = "32%";
            panel.top = "5%";

            this.guiTexture.addControl(panel);

            let textName = this.createText(this.guiMain.game.player.name);
            textName.color = 'yellow';
            textName.height = '8%';
            textName.fontSize = 36;
            panel.addControl(textName);

            let textName = this.createText(this.guiMain.game.player.lvl+' LVL');
            textName.color = 'yellow';
            textName.height = '8%';
            textName.fontSize = 28;
            panel.addControl(textName);

            let textName = this.createText('Attributes');
            textName.color = 'green';
            textName.height = '8%';
            textName.fontSize = 36;
            panel.addControl(textName);

            this.createAttribute(1, 'Damage:' + this.guiMain.player.statistics.getDamage(), panel);
            this.createAttribute(2, 'Armor:' + this.guiMain.player.statistics.getArmor(), panel);
            this.createAttribute(3, 'HP:' + this.guiMain.player.statistics.getHp(), panel);
            this.createAttribute(4, 'Attack speed:' + this.guiMain.player.statistics.getAttackSpeed(), panel);
            this.createAttribute(6, 'Block chance:' + this.guiMain.player.statistics.getBlockChance(), panel);

            if (this.guiMain.game.player.freeAttributesPoints) {
                let textAttributes = this.createText('You have ' + this.guiMain.game.player.freeAttributesPoints + ' free attribute points.');
                textAttributes.color = 'red';
                panel.addControl(textAttributes);
            }

        }

        protected createText(text:string) {
            let textBlock = new BABYLON.GUI.TextBlock();
            textBlock.text = text;
            textBlock.color = "white";
            textBlock.width = "100%";
            textBlock.height = "5%";

            return textBlock;
        }

        protected createAttribute(type: number, text:string, control:BABYLON.GUI.StackPanel) {
            let self = this;
            if (this.guiMain.game.player.freeAttributesPoints) {
                let button = BABYLON.GUI.Button.CreateImageButton("plus", text, "/assets/gui/plus.png");
                button.height = "5%";
                button.thickness = 0;
                button.width = 0.3;
                control.addControl(button);

                button.onPointerUpObservable.add(function () {
                    self.guiMain.game.client.socket.emit('addAttribute', {
                        type: type
                    });
                });

                this.guiMain.registerBlockMoveCharacter(button);
            } else {
                let textBlock = this.createText(text);
                control.addControl(textBlock);
            }
        }
    }
}