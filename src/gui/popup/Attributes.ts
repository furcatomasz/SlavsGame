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
            this.createButtonClose();
        }

        public close() {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
        }

        protected showText() {
            let panel = new BABYLON.GUI.StackPanel('attributes.panel');
            panel.isPointerBlocker = true;
            panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            panel.width = "33%";
            panel.top = "5%";

            this.guiTexture.addControl(panel);

            let textPlayerName = this.createText(this.guiMain.game.player.name);
            textPlayerName.color = 'yellow';
            textPlayerName.height = '8%';
            textPlayerName.fontSize = 36;
            panel.addControl(textPlayerName);

            let textPlayerLVL = this.createText(this.guiMain.game.player.lvl+' LVL');
            textPlayerLVL.color = 'yellow';
            textPlayerLVL.height = '8%';
            textPlayerLVL.fontSize = 28;
            panel.addControl(textPlayerLVL);

            let textAttributes = this.createText('Attributes');
            textAttributes.color = 'green';
            textAttributes.height = '8%';
            textAttributes.fontSize = 36;
            panel.addControl(textAttributes);

            this.createAttribute(1, 'Damage:' + this.guiMain.player.statistics.damage, panel);
            this.createAttribute(2, 'Armor:' + this.guiMain.player.statistics.armor, panel);
            this.createAttribute(3, 'HP:' + this.guiMain.player.statistics.hp, panel);
            this.createAttribute(4, 'Attack speed:' + this.guiMain.player.statistics.attackSpeed, panel);
            this.createAttribute(6, 'Block chance:' + this.guiMain.player.statistics.blockChance, panel);

            if (this.guiMain.game.player.freeAttributesPoints) {
                let textAttributes = this.createText('You have ' + this.guiMain.game.player.freeAttributesPoints + ' free attribute points.');
                textAttributes.color = 'red';
                panel.addControl(textAttributes);
            }

            let textStatistics = this.createText('Statistics');
            textStatistics.color = 'green';
            textStatistics.height = '8%';
            textStatistics.fontSize = 36;
            panel.addControl(textStatistics);

            let damage = this.createText('Damage:' + this.guiMain.player.statisticsAll.damage);
            panel.addControl(damage);

            let armor = this.createText('Armor:' + this.guiMain.player.statisticsAll.armor);
            panel.addControl(armor);

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
                button.width = 0.4;
                button.color = 'white';
                control.addControl(button);

                button.onPointerUpObservable.add(function () {
                    self.guiMain.game.client.socket.emit('addAttribute', {
                        type: type
                    });
                });

            } else {
                let textBlock = this.createText(text);
                control.addControl(textBlock);
            }
        }
    }
}