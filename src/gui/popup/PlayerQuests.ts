namespace GUI {
    export class PlayerQuests extends Popup {

        constructor(guiMain: GUI.Main) {
            super(guiMain);
            this.name = 'Player quests';
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

            this.guiTexture.addControl(buttonClose);
            this.buttonClose = buttonClose;
        }

        public close() {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
        }

        protected showText() {
            for (let quest of this.guiMain.game.quests) {

                let title = new BABYLON.GUI.TextBlock();
                title.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                title.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
                title.text = quest.title;
                title.color = "white";
                title.top = "10%";
                title.width = "25%";
                title.height = "10%";
                title.fontSize = 12;

                this.guiTexture.addControl(title);
            }

        }

    }
}