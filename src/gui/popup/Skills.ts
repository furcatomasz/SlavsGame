/// <reference path="Popup.ts"/>

namespace GUI {
    export class Skills extends Popup {

        constructor(guiMain:GUI.Main) {
            super(guiMain);
            this.name = 'Skills';
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

            this.guiTexture.addControl(buttonClose);
            this.buttonClose = buttonClose;
        }

        public close() {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
        }

        protected showText() {
            let panel = new BABYLON.GUI.StackPanel('attributes.panel');
            panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            panel.width = 0.33;
            //panel.height = '500px';
            panel.top = "4%";

            this.guiTexture.addControl(panel);

            let textName = this.createText('Skills');
            textName.color = 'green';
            textName.height = '10%';
            textName.fontSize = 36;
            panel.addControl(textName);

            if (this.guiMain.game.player.freeSkillPoints) {
                let textAttributes = this.createText('You have ' + this.guiMain.game.player.freeSkillPoints + ' free skill points.');
                textAttributes.color = 'red';
                textAttributes.height = '10%';
                panel.addControl(textAttributes);
            }

            let doubleAttack = new Character.Skills.DoubleAttack();
            let playerDoubleAttack = this.guiMain.game.player.skills[doubleAttack.getType()];
            if(playerDoubleAttack) {
                doubleAttack = playerDoubleAttack;
            }

            let tornado = new Character.Skills.Tornado();
            let playerTornado = this.guiMain.game.player.skills[tornado.getType()];
            if(playerTornado) {
                tornado = playerTornado;
            }

            let skillPanel = this.createSkill(doubleAttack);
            panel.addControl(skillPanel);

            let skillPanel2 = this.createSkill(tornado);
            panel.addControl(skillPanel2);
        }

        protected createText(text:string) {
            let textBlock = new BABYLON.GUI.TextBlock();
            textBlock.text = text;
            textBlock.color = "white";
            textBlock.width = "100%";
            textBlock.height = "5%";

            return textBlock;
        }

        protected createSkill(skill: Character.Skills.AbstractSkill) {
            let self = this;
            let panelSkill = new BABYLON.GUI.Rectangle('attributes.panelSkill');
            //panelSkill.isVertical = true;
            panelSkill.height = '33%';
            panelSkill.thickness = 0;
            //panelSkill.width = 1;

            let textName = this.createText(skill.name);
            textName.color = 'yellow';
            textName.height = '10%';
            textName.top = '-40%';
            textName.fontSize = 24;
            panelSkill.addControl(textName);

            let image = new BABYLON.GUI.Image("skill.image", skill.getImageUrl());
            image.top = '-15%';
            image.width = 0.15;
            image.height = '30%';
            image.onPointerUpObservable.add(function () {
                self.guiMain.game.client.socket.emit('learnSkill', {
                    skillType: skill.getType(),
                    powerType: null,
                });
            });
            panelSkill.addControl(image);

            let button = BABYLON.GUI.Button.CreateImageButton("plus", 'Damage - '+skill.damage, "assets/gui/plus.png");
            button.top = '15%';
            button.height = "10%";
            button.thickness = 0;
            button.width = 0.4;
            button.onPointerUpObservable.add(function () {
                self.guiMain.game.client.socket.emit('learnSkill', {
                    skillType: skill.getType(),
                    powerType: 1,
                });
            });
            panelSkill.addControl(button);

            let button = BABYLON.GUI.Button.CreateImageButton("plus", 'Cooldown - '+skill.cooldown, "assets/gui/plus.png");
            button.height = "10%";
            button.top = '28%';
            button.thickness = 0;
            button.width = 0.4;
            button.onPointerUpObservable.add(function () {
                self.guiMain.game.client.socket.emit('learnSkill', {
                    skillType: skill.getType(),
                    powerType: 2,
                });
            });
            panelSkill.addControl(button);

            let button = BABYLON.GUI.Button.CreateImageButton("plus", 'Stock - '+skill.stock, "assets/gui/plus.png");
            button.height = "10%";
            button.top = '41%';
            button.thickness = 0;
            button.width = 0.4;
            button.onPointerUpObservable.add(function () {
                self.guiMain.game.client.socket.emit('learnSkill', {
                    skillType: skill.getType(),
                    powerType: 3,
                });
            });
            panelSkill.addControl(button);

            return panelSkill;
        }

    }
}