/// <reference path="../game.ts"/>
namespace GUI {
    export class PlayerLogsPanel {

        static TEXT_COUNT = 6;

        public guiPanel:BABYLON.GUI.StackPanel;
        protected texts:Array<>;
        protected texture:BABYLON.GUI.AdvancedDynamicTexture;

        constructor(game:Game) {
            this.texts = [];
            let self = this;
            let listener = function listener() {
                self.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("gameLogsUi");

                let characterLogsPanel = new BABYLON.GUI.StackPanel();
                characterLogsPanel.width = "15%";
                characterLogsPanel.left = "1%";
                characterLogsPanel.top = "-5%";
                characterLogsPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                characterLogsPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
                self.texture.addControl(characterLogsPanel);
                self.guiPanel = characterLogsPanel;

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }

        /**
         * @param message
         * @param color
         */
        public addText(message:string, color: string = 'white') {
            let text = new BABYLON.GUI.TextBlock();
            text.text = message;
            text.color = color;
            text.textWrapping = true;
            text.height = "25px";
            text.width = "100%";
            text.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            text.fontSize = 14;

            this.guiPanel.addControl(text);

            this.texts.push(text);
            this.removeOldText();
        }

        public removeOldText() {
            if(this.texts.length >= GUI.PlayerLogsPanel.TEXT_COUNT) {
                let textToDispose = this.texts.shift();
                this.guiPanel.removeControl(textToDispose);
                textToDispose = null;
            }

            return this;
        }

    }
}