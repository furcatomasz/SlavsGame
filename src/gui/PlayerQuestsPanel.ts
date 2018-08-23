namespace GUI {
    export class PlayerQuestsPanel {

        public guiPanel:BABYLON.GUI.StackPanel;
        protected texts:Array;
        protected texture:BABYLON.GUI.AdvancedDynamicTexture;

        constructor(game: Game) {
            this.texts = [];
            this.texture = game.gui.texture;

            let self = this;

            let playerQuestsLogsPanel = new BABYLON.GUI.StackPanel();
            playerQuestsLogsPanel.width = "25%";
            playerQuestsLogsPanel.top = 40;
            playerQuestsLogsPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            self.texture.addControl(playerQuestsLogsPanel);
            self.guiPanel = playerQuestsLogsPanel;

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
            text.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            text.fontSize = 14;

            this.guiPanel.addControl(text);

            this.texts.push(text);
            let self = this;
            setTimeout(function() {
                let textToDispose = self.texts.shift();
                self.guiPanel.removeControl(textToDispose);
            }, 4000);
        }

    }
}