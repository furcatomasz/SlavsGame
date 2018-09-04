namespace GUI {
    export class Attributes extends Popup {

        constructor(guiMain:GUI.Main) {
            super(guiMain);
            this.name = 'Inventory';
            this.imageUrl = "assets/gui/attrs.png";
            this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        }

        public open() {
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
            panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            panel.width = 1;
            panel.height = 0.9;
            panel.top = '10%';

            this.container.addControl(panel);

            let textPlayerName = this.createText(this.guiMain.game.player.name);
            textPlayerName.color = 'green';
            textPlayerName.fontSize = 18;
            panel.addControl(textPlayerName);

            let textPlayerLVL = this.createText(this.guiMain.game.player.lvl+' LVL');
            textPlayerLVL.color = 'green';
            textPlayerLVL.fontSize = 18;
            panel.addControl(textPlayerLVL);

            this.createAttribute(1, 'Damage:' + this.guiMain.game.player.statistics.damage, panel);
            this.createAttribute(2, 'Armor:' + this.guiMain.game.player.statistics.armor, panel);
            this.createAttribute(3, 'HP:' + this.guiMain.game.player.statistics.hp, panel);
            this.createAttribute(4, 'Energy:' + this.guiMain.game.player.statistics.energy, panel);

            if (this.guiMain.game.player.freeAttributesPoints) {
                let textAttributes = this.createText('You have ' + this.guiMain.game.player.freeAttributesPoints + ' free attribute points.');
                textAttributes.color = 'red';
                textAttributes.fontSize = 16;

                panel.addControl(textAttributes);
            }

            let textStatistics = this.createText('Statistics');
            textStatistics.color = 'green';
            textStatistics.height = '8%';
            textStatistics.fontSize = 18;
            panel.addControl(textStatistics);

            let damage = this.createText('Damage:' + this.guiMain.game.player.statisticsAll.damage);
            panel.addControl(damage);

            let armor = this.createText('Armor:' + this.guiMain.game.player.statisticsAll.armor);
            panel.addControl(armor);

            let attackSpeed = this.createText('Attack chance:' + this.guiMain.game.player.statistics.hitChance);
            panel.addControl(attackSpeed);

            let blockChance = this.createText('Block chance:' + this.guiMain.game.player.statistics.blockChance);
            panel.addControl(blockChance);

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
                let button = BABYLON.GUI.Button.CreateImageButton("plus", text, "assets/gui/plus.png");
                button.height = "5%";
                button.thickness = 0;
                button.width = 0.8;
                button.color = 'white';
                button.fontSize = 16;
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