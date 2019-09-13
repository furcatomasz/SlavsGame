import {Game} from "../Game";
import {TextBlock, StackPanel, AdvancedDynamicTexture, Control} from 'babylonjs-gui';

export class PlayerQuestsPanel {

    public guiPanel: StackPanel;
    protected texts: TextBlock[];
    protected texture: AdvancedDynamicTexture;

    constructor(game: Game) {
        this.texts = [];
        this.texture = game.gui.texture;

        let self = this;

        let playerQuestsLogsPanel = new StackPanel();
        playerQuestsLogsPanel.width = "50%";
        playerQuestsLogsPanel.top = 40;
        playerQuestsLogsPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        self.texture.addControl(playerQuestsLogsPanel);
        self.guiPanel = playerQuestsLogsPanel;

    }

    /**
     * @param message
     * @param color
     */
    public addText(message: string, color: string = 'white') {
        let text = new TextBlock();
        text.text = message;
        text.color = color;
        text.textWrapping = true;
        text.height = "25px";
        text.width = "100%";
        text.fontFamily = "RuslanDisplay";
        text.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        text.fontSize = 16;

        this.guiPanel.addControl(text);

        this.texts.push(text);
        let self = this;
        setTimeout(function () {
            let textToDispose = self.texts.shift();
            self.guiPanel.removeControl(textToDispose);
        }, 4000);
    }

}
