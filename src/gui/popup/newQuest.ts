namespace GUI {
    export class NewQuest extends Popup {

        protected questData: Array<0>;

        constructor(guiMain: GUI.Main, questServerData) {
            super(guiMain);
            this.questData = questServerData;
            this.name = 'Quest';
            this.imageUrl = "assets/gui/content.png";
            this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
        }

        protected initTexture() {
            this.guiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.' + this.name);
            this.guiTexture.layer.layerMask = 1;
            let container = new BABYLON.GUI.Rectangle('gui.panel.'+ this.name);
            container.horizontalAlignment = this.position;
            container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            container.thickness = 0;
            container.isPointerBlocker = true;
            this.container = container;
            this.guiTexture.addControl(container);

            let image = new BABYLON.GUI.Image('gui.popup.image.', this.imageUrl);
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.width = 1;
            image.height = 1;
            container.addControl(image);

            this.container.addControl(image);
            this.containerBackground = image;

            container.width = '685px';
            container.height = '80%';

            return this;
        }

        public open() {
            let self = this;
            this.opened = true;
            this.initTexture();

            this.guiTexture.addControl(this.container);
            this.showText();
            this.createButtonClose();

            let buttonAccept = BABYLON.GUI.Button.CreateImageWithCenterTextButton("questsButtonAccept", "Accept", "assets/gui/button.png");
            buttonAccept.color = "white";
            buttonAccept.background = "black";
            buttonAccept.width = "180px;";
            buttonAccept.height = "48px";
            buttonAccept.left = 120;
            buttonAccept.thickness = 0;
            buttonAccept.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonAccept.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;

            buttonAccept.onPointerUpObservable.add(function() {
                self.guiMain.game.client.socket.emit('acceptQuest', self.questData.questId);
                self.close();
            });

            this.container.addControl(buttonAccept);
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
            title.color = "brown";
            title.width = "70%";
            title.height = "10%";
            title.fontSize = 36;
            title.fontFamily = "RuslanDisplay";
            title.textWrapping = true;
            this.container.addControl(title);

            let description = new BABYLON.GUI.TextBlock('descrption');
            description.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            description.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            description.text = this.questData.description;
            description.color = "black";
            description.top = "10%";
            description.width = "70%";
            description.height = "10%";
            description.fontSize = 14;
            description.fontFamily = "RuslanDisplay";
            description.textWrapping = true;
            this.container.addControl(description);

            Object.values(this.questData.chapters).forEach(function(chapterData, chapter) {
                let topPadding = (chapter*15);

                let chapterHeader = new BABYLON.GUI.TextBlock();
                chapterHeader.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                chapterHeader.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
                chapterHeader.text = 'Chapter '+(chapter+1)
                chapterHeader.top = topPadding+15+"%";
                chapterHeader.width = "70%";
                chapterHeader.height = "25%";
                chapterHeader.color = "green";
                chapterHeader.fontSize = 28;
                chapterHeader.fontFamily = "RuslanDisplay";
                chapterHeader.textWrapping = true;
                self.container.addControl(chapterHeader);

                let chapterDescription = new BABYLON.GUI.TextBlock();
                chapterDescription.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                chapterDescription.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
                chapterDescription.text = chapterData.description;
                chapterDescription.top = topPadding+22+"%";
                chapterDescription.width = "70%";
                chapterDescription.height = "25%";
                chapterDescription.color = "black";
                chapterDescription.fontSize = 14;
                chapterDescription.fontFamily = "RuslanDisplay";
                chapterDescription.textWrapping = true;

                self.container.addControl(chapterDescription);

            });

        }

    }
}
