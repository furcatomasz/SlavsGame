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

            buttonClose.onPointerUpObservable.add(function() {
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
            let textDamage = new BABYLON.GUI.TextBlock();
            textDamage.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textDamage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textDamage.text = 'Damage:'+this.guiMain.player.statistics.getDamage() ;
            textDamage.color = "white";
            textDamage.top = "0%";
            textDamage.width = "25%";
            textDamage.height = "10%";
            textDamage.top = "0%";

            let textArmor = new BABYLON.GUI.TextBlock();
            textArmor.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textArmor.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textArmor.text = 'Armor:'+this.guiMain.player.statistics.getArmor() ;
            textArmor.color = "white";
            textArmor.top = "0%";
            textArmor.width = "25%";
            textArmor.height = "10%";
            textArmor.top = "4%";

            let textHP = new BABYLON.GUI.TextBlock();
            textHP.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textHP.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textHP.text = 'HP:'+this.guiMain.player.statistics.getHp() ;
            textHP.color = "white";
            textHP.top = "0%";
            textHP.width = "25%";
            textHP.height = "10%";
            textHP.top = "8%";

            let textHitChance = new BABYLON.GUI.TextBlock();
            textHitChance.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textHitChance.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textHitChance.text = 'Hit chance:'+this.guiMain.player.statistics.getHitChance() ;
            textHitChance.color = "white";
            textHitChance.top = "0%";
            textHitChance.width = "25%";
            textHitChance.height = "10%";
            textHitChance.top = "12%";

            let textAttackSpeed = new BABYLON.GUI.TextBlock();
            textAttackSpeed.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textAttackSpeed.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textAttackSpeed.text = 'Attack speed:'+this.guiMain.player.statistics.getAttackSpeed() ;
            textAttackSpeed.color = "white";
            textAttackSpeed.top = "0%";
            textAttackSpeed.width = "25%";
            textAttackSpeed.height = "10%";
            textAttackSpeed.top = "16%";

            let textWalkSpeed = new BABYLON.GUI.TextBlock();
            textWalkSpeed.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textWalkSpeed.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textWalkSpeed.text = 'Walk speed:'+this.guiMain.player.statistics.getWalkSpeed() ;
            textWalkSpeed.color = "white";
            textWalkSpeed.top = "0%";
            textWalkSpeed.width = "25%";
            textWalkSpeed.height = "10%";
            textWalkSpeed.top = "20%";

            let textBlockChance = new BABYLON.GUI.TextBlock();
            textBlockChance.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textBlockChance.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textBlockChance.text = 'Block chance:'+this.guiMain.player.statistics.getBlockChance() ;
            textBlockChance.color = "white";
            textBlockChance.top = "0%";
            textBlockChance.width = "25%";
            textBlockChance.height = "10%";
            textBlockChance.top = "24%";

            this.guiTexture.addControl(textDamage);
            this.guiTexture.addControl(textHP);
            this.guiTexture.addControl(textHitChance);
            this.guiTexture.addControl(textAttackSpeed);
            this.guiTexture.addControl(textWalkSpeed);
            this.guiTexture.addControl(textBlockChance);
            this.guiTexture.addControl(textArmor);
        }

    }
}