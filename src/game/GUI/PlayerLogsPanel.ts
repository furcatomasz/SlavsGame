import {Game} from "../game";
import {AdvancedDynamicTexture, StackPanel, Image, TextBlock, Control,Rectangle} from 'babylonjs-gui';

export class PlayerLogsPanel {

    static TEXT_COUNT = 12;

    public guiPanel: Rectangle;
    protected textContainer: StackPanel;
    protected texts: Array<TextBlock>;
    protected texture: AdvancedDynamicTexture;

    constructor(game: Game) {
        this.texts = [];
        this.texture = game.gui.texture;

        let self = this;
        let container = new Rectangle('gui.chat');
        container.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
        container.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
        container.width = '302px';
        container.height = '302px';
        container.isPointerBlocker = true;
        container.thickness = 0;

        let background = new Image('gui.panel.bottom.toolbar', 'assets/gui/chat.png');
        background.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
        background.height = 1;
        background.width = 1;
        container.addControl(background);

        let textsContainer = new StackPanel();
        textsContainer.width = 1;
        textsContainer.left = "3%";
        textsContainer.top = "-7%";
        textsContainer.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
        textsContainer.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
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
        let text = new TextBlock();
        text.text = message;
        text.color = color;
        text.textWrapping = true;
        text.height = "25px";
        text.width = "100%";
        text.textHorizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
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
