/// <reference path="Popup.ts"/>

namespace GUI {
    export class NewQuest extends Popup {

        protected questData: Array<any>;

        constructor(guiMain: GUI.Main, questServerData) {
            super(guiMain);
            this.questData = questServerData;
            this.name = 'Quest';
            this.imageUrl = "assets/gui/attrs.png";
            this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        }

        public open() {
            let self = this;
            this.opened = true;
            this.initTexture();

            this.guiTexture.addControl(this.container);
            console.log(this.questData);
            this.showText();
            this.createButtonClose();

            let buttonAccept = BABYLON.GUI.Button.CreateSimpleButton("attributesButtonClose", "Accept");
            buttonAccept.color = "white";
            buttonAccept.background = "black";
            buttonAccept.width = "70px;";
            buttonAccept.height = "40px";
            buttonAccept.left = 60;
            buttonAccept.horizontalAlignment = this.position;
            buttonAccept.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

            buttonAccept.onPointerUpObservable.add(function() {
                self.guiMain.game.client.socket.emit('acceptQuest', self.questData.questId);
                self.close();
            });

            this.guiTexture.addControl(buttonAccept);
        }

        public close() {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
        }

        protected showText() {
            let self = this;
            let title = new BABYLON.GUI.TextBlock();
            title.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            title.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            title.text = this.questData.title;
            title.color = "white";
            title.top = "0%";
            title.width = "25%";
            title.height = "10%";
            title.fontSize = 36;

            this.guiTexture.addControl(title);

            let description = new BABYLON.GUI.TextBlock();
            description.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            description.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            description.text = this.questData.description;
            description.color = "white";
            description.top = "5%";
            description.width = "25%";
            description.height = "20%";
            description.fontSize = 24;

            // let awardTitle = new BABYLON.GUI.TextBlock();
            // awardTitle.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            // awardTitle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            // awardTitle.text = 'Award';
            // awardTitle.top = "45%";
            // awardTitle.width = "25%";
            // awardTitle.height = "20%";
            // awardTitle.color = "green";
            // awardTitle.fontSize = 36;
            // this.guiTexture.addControl(awardTitle);
            //
            // let awardTitle = new BABYLON.GUI.TextBlock();
            // awardTitle.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            // awardTitle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            // awardTitle.text = this.quest.awards[0].award.name;
            // awardTitle.top = "50%";
            // awardTitle.width = "25%";
            // awardTitle.height = "20%";
            // awardTitle.color = "green";
            // awardTitle.fontSize = 24;
            // this.guiTexture.addControl(awardTitle);

            // let image = this.guiMain.inventory.createItemImage(this.quest.awards[0].award);
            // image.height = 0.4;

            // this.guiTexture.addControl(image);
            this.guiTexture.addControl(description);

            let chapterHeader = new BABYLON.GUI.TextBlock();
            chapterHeader.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            chapterHeader.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            chapterHeader.text = 'Chapter I';
            chapterHeader.top = "15%";
            chapterHeader.width = "25%";
            chapterHeader.height = "20%";
            chapterHeader.color = "red";
            chapterHeader.fontSize = 36;
            this.guiTexture.addControl(chapterHeader);

            let chapterDescription = new BABYLON.GUI.TextBlock();
            chapterDescription.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            chapterDescription.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            chapterDescription.text = this.questData.chapters[1].description;
            chapterDescription.top = "20%";
            chapterDescription.width = "25%";
            chapterDescription.height = "20%";
            chapterDescription.color = "white";
            chapterDescription.fontSize = 18;
            this.guiTexture.addControl(chapterDescription);

            this.questData.chapters[1].requirements.forEach(function(requirement) {
                let requirementDescription = new BABYLON.GUI.TextBlock();
                requirementDescription.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                requirementDescription.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
                requirementDescription.text = requirement.name;
                requirementDescription.top = "25%";
                requirementDescription.width = "25%";
                requirementDescription.height = "20%";
                requirementDescription.color = "white";
                requirementDescription.fontSize = 18;
                self.guiTexture.addControl(requirementDescription);
            });
        }

    }
}