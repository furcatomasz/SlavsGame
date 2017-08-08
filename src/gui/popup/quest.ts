/// <reference path="Popup.ts"/>

namespace GUI {
    export class Quest extends Popup {

        protected quest: Quests.AbstractQuest;

        constructor(guiMain: GUI.Main, quest: Quests.AbstractQuest) {
            super(guiMain);
            this.quest = quest;
            this.name = 'Quest';
            this.imageUrl = "assets/gui/attrs.png";
            this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        }

        public open() {
            let self = this;
            this.guiMain.questOpened = true;
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
            this.guiMain.questOpened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
            this.guiMain.game.sceneManager.environment.ground.isPickable = true;
        }

        protected showText() {
            let title = new BABYLON.GUI.TextBlock();
            title.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            title.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            title.text = this.quest.title;
            title.color = "white";
            title.top = "0%";
            title.width = "25%";
            title.height = "10%";
            title.fontSize = 36;

            this.guiTexture.addControl(title);

            let description = new BABYLON.GUI.TextBlock();
            description.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            description.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            description.text = this.quest.description;
            description.color = "white";
            description.top = "5%";
            description.width = "25%";
            description.height = "20%";
            description.fontSize = 24;

            let awardTitle = new BABYLON.GUI.TextBlock();
            awardTitle.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            awardTitle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            awardTitle.text = 'Award';
            awardTitle.top = "45%";
            awardTitle.width = "25%";
            awardTitle.height = "20%";
            awardTitle.color = "green";
            awardTitle.fontSize = 36;
            this.guiTexture.addControl(awardTitle);

            let awardTitle = new BABYLON.GUI.TextBlock();
            awardTitle.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            awardTitle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            awardTitle.text = this.quest.awards[0].award.name;
            awardTitle.top = "50%";
            awardTitle.width = "25%";
            awardTitle.height = "20%";
            awardTitle.color = "green";
            awardTitle.fontSize = 24;
            this.guiTexture.addControl(awardTitle);

            let image = this.guiMain.inventory.createItemImage(this.quest.awards[0].award);
            image.height = 0.4;

            this.guiTexture.addControl(image);
            this.guiTexture.addControl(description);

            let requirementsTitle = new BABYLON.GUI.TextBlock();
            requirementsTitle.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            requirementsTitle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            requirementsTitle.text = 'Requirements';
            requirementsTitle.top = "15%";
            requirementsTitle.width = "25%";
            requirementsTitle.height = "20%";
            requirementsTitle.color = "red";
            requirementsTitle.fontSize = 36;

            this.guiTexture.addControl(requirementsTitle);

            let requirementsTitle = new BABYLON.GUI.TextBlock();
            requirementsTitle.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            requirementsTitle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            requirementsTitle.text = 'Kill 5 worms';
            requirementsTitle.top = "20%";
            requirementsTitle.width = "25%";
            requirementsTitle.height = "20%";
            requirementsTitle.color = "white";
            requirementsTitle.fontSize = 18;

            this.guiTexture.addControl(requirementsTitle);

        }

    }
}