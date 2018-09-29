namespace GUI {
    export class PlayerLogsPanel {

        static TEXT_COUNT = 6;

        public guiPanel:BABYLON.GUI.StackPanel;
        protected texts:Array<>;
        protected texture:BABYLON.GUI.AdvancedDynamicTexture;

        constructor(game:Game) {
            this.texts = [];
            this.texture = game.gui.texture;

            let self = this;
            let characterLogsPanel = new BABYLON.GUI.StackPanel();
            characterLogsPanel.width = "15%";
            characterLogsPanel.left = "1%";
            characterLogsPanel.top = "-5%";
            characterLogsPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            characterLogsPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            self.texture.addControl(characterLogsPanel);
            self.guiPanel = characterLogsPanel;

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
            text.fontFamily = "RuslanDisplay";
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
