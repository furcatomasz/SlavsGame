namespace GUI {
    export class Attributes extends Popup {

        constructor(guiMain:GUI.Main) {
            super(guiMain);
            this.name = 'Attributes';
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
            textPlayerName.color = 'gold';
            textPlayerName.fontSize = 36;
            textPlayerName.top = 10;
            panel.addControl(textPlayerName);

            let textPlayerLVL = this.createText(this.guiMain.game.player.lvl+' LVL');
            textPlayerLVL.color = 'gold';
            textPlayerLVL.fontSize = 36;
            textPlayerLVL.top = 100;
            textPlayerLVL.paddingBottom = 80;
            panel.addControl(textPlayerLVL);

            this.createAttribute(1, 'Strength:' + this.guiMain.game.player.attributes.strength, panel);
            this.createAttribute(2, 'Durability:' + this.guiMain.game.player.attributes.durability, panel);
            this.createAttribute(3, 'Vitality:' + this.guiMain.game.player.attributes.vitality, panel);
            this.createAttribute(4, 'Stamina:' + this.guiMain.game.player.attributes.stamina, panel);

            if (this.guiMain.game.player.freeAttributesPoints) {
                let textAttributes = this.createText('You have ' + this.guiMain.game.player.freeAttributesPoints + ' free attribute points.');
                textAttributes.color = 'red';
                textAttributes.fontSize = 16;

                panel.addControl(textAttributes);
            }

            let textStatistics = this.createText('Statistics');
            textStatistics.color = 'gold';
            textStatistics.height = '8%';
            textStatistics.fontSize = 30;
            textStatistics.paddingTop = 80;
            panel.addControl(textStatistics);

            let damage = this.createText('Damage: ' + this.guiMain.game.player.statisticsAll.damageMin + ' - ' + this.guiMain.game.player.statisticsAll.damageMax );
            panel.addControl(damage);

            let armor = this.createText('Armor: ' + this.guiMain.game.player.statisticsAll.armor);
            panel.addControl(armor);

            let attackSpeed = this.createText('Attack chance: ' + this.guiMain.game.player.statistics.hitChance);
            panel.addControl(attackSpeed);

            let blockChance = this.createText('Block chance: ' + this.guiMain.game.player.statistics.blockChance);
            panel.addControl(blockChance);

        }

        protected createText(text:string) {
            let textBlock = new BABYLON.GUI.TextBlock();
            textBlock.text = text;
            textBlock.color = "white";
            textBlock.width = "100%";
            textBlock.height = "5%";
            textBlock.fontFamily = "RuslanDisplay";
            textBlock.fontSize = 20;
            textBlock.resizeToFit = true;
            textBlock.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;

            return textBlock;
        }

        protected createAttribute(type: number, text:string, control:BABYLON.GUI.StackPanel) {
            let self = this;
            if (this.guiMain.game.player.freeAttributesPoints) {
                let button = BABYLON.GUI.Button.CreateImageButton("plus", text, "assets/gui/plus.png");
                button.height = "40px";
                button.thickness = 0;
                button.width = 0.8;
                button.color = 'white';
                button.fontFamily = "RuslanDisplay";
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
