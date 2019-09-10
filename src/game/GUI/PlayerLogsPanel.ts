import {Game} from "../game";

export class PlayerLogsPanel {

    static TEXT_COUNT = 12;

    public guiPanel: BABYLON.GUI.Rectangle;
    protected textContainer: BABYLON.GUI.StackPanel;
    protected texts: Array<BABYLON.GUI.TextBlock>;
    protected texture: BABYLON.GUI.AdvancedDynamicTexture;

    constructor(game: Game) {
        this.texts = [];
        this.texture = game.gui.texture;

        let self = this;
        let container = new BABYLON.GUI.Rectangle('gui.chat');
        container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        container.width = '302px';
        container.height = '302px';
        container.isPointerBlocker = true;
        container.thickness = 0;

        let background = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/chat.png');
        background.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        background.height = 1;
        background.width = 1;
        container.addControl(background);

        let textsContainer = new BABYLON.GUI.StackPanel();
        textsContainer.width = 1;
        textsContainer.left = "3%";
        textsContainer.top = "-7%";
        textsContainer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        textsContainer.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
        container.addControl(textsContainer);

        self.texture.addControl(container);
        self.guiPanel = container;
        self.textContainer = textsContainer;

        this.addText('You are logged into game', 'gold');
        this.addText('Welcome in Slavs alpha test!');
    }

    /**
     * @param message
     * @param color
     */
    public addText(message: string, color: string = 'white') {
        let text = new BABYLON.GUI.TextBlock();
        text.text = message;
        text.color = color;
        text.textWrapping = true;
        text.height = "25px";
        text.width = "100%";
        text.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        text.fontSize = 12;

        this.textContainer.addControl(text);

        this.texts.push(text);
        this.removeOldText();
    }

    public removeOldText() {
        if (this.texts.length >= PlayerLogsPanel.TEXT_COUNT) {
            let textToDispose = this.texts.shift();
            this.textContainer.removeControl(textToDispose);
            textToDispose = null;
        }

        return this;
    }

}
