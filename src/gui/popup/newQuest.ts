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
            let title = new BABYLON.GUI.TextBlock('title');
            title.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            title.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            title.text = this.questData.title;
            title.top = "2%";
            title.color = "white";
            title.width = "25%";
            title.height = "10%";
            title.fontSize = 36;
            title.textWrapping = true;
            this.guiTexture.addControl(title);

            let description = new BABYLON.GUI.TextBlock('descrption');
            description.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            description.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            description.text = this.questData.description;
            description.color = "white";
            description.top = "10%";
            description.width = "25%";
            description.height = "10%";
            description.fontSize = 16;
            description.textWrapping = true;
            this.guiTexture.addControl(description);

            Object.values(this.questData.chapters).forEach(function(chapterData, chapter) {
                let topPadding = (chapter*15);

                let chapterHeader = new BABYLON.GUI.TextBlock();
                chapterHeader.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                chapterHeader.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
                chapterHeader.text = 'Chapter '+(chapter+1)
                chapterHeader.top = topPadding+15+"%";
                chapterHeader.width = "25%";
                chapterHeader.height = "25%";
                chapterHeader.color = "orange";
                chapterHeader.fontSize = 28;
                chapterHeader.textWrapping = true;
                self.guiTexture.addControl(chapterHeader);

                let chapterDescription = new BABYLON.GUI.TextBlock();
                chapterDescription.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                chapterDescription.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
                chapterDescription.text = chapterData.description;
                chapterDescription.top = topPadding+22+"%";
                chapterDescription.width = "25%";
                chapterDescription.height = "25%";
                chapterDescription.color = "white";
                chapterDescription.fontSize = 18;
                chapterDescription.textWrapping = true;

                self.guiTexture.addControl(chapterDescription);

            });

        }

    }
}