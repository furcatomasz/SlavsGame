import {Main} from "../Main";
import {AdvancedDynamicTexture, Rectangle, Control, Image, Button} from 'babylonjs-gui';

export abstract class Popup {

    public guiMain: Main;
    public guiTexture: AdvancedDynamicTexture;
    public container: Rectangle;
    public opened: boolean;

    protected name: string;
    protected imageUrl: string;
    protected position: number;
    protected containerBackground: Image;
    protected buttonClose: Control;
    protected isRefresh: Boolean;

    constructor(guiMain: Main) {
        this.guiMain = guiMain;
    }

    protected initTexture() {
        this.guiTexture = AdvancedDynamicTexture.CreateFullscreenUI('gui.' + this.name);
        this.guiTexture.layer.layerMask = 1;
        let container = new Rectangle('gui.panel.' + this.name);
        container.horizontalAlignment = this.position;
        container.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        container.thickness = 0;
        container.isPointerBlocker = true;
        this.container = container;
        this.guiTexture.addControl(container);

        let image = new Image('gui.popup.image.', this.imageUrl);
        image.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
        image.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
        image.width = 1;
        image.height = 1;
        image.isPointerBlocker = true;
        container.addControl(image);

        this.container.addControl(image);
        this.containerBackground = image;

        container.width = '685px';
        container.height = '88%';

        return this;
    }

    protected createButtonClose() {
        let self = this;
        let buttonClose = Button.CreateImageOnlyButton("buttonClose", "assets/gui/buttons/close.png");
        buttonClose.width = "30px;";
        buttonClose.height = "30px";
        buttonClose.thickness = 0;
        buttonClose.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        buttonClose.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;

        buttonClose.onPointerUpObservable.add(function () {
            self.close();
        });

        this.container.addControl(buttonClose);
        this.buttonClose = buttonClose;

        return this;
    }

    protected manageMainGUI(show: boolean = true) {
        this.guiMain.roomInformaton.guiPanel.isVisible = show;
        this.guiMain.playerBottomPanel.container.isVisible = show;
        this.guiMain.playerLogsQuests.guiPanel.isVisible = show;
        if (this.guiMain.playerQuestInformation.guiPanel) {
            this.guiMain.playerQuestInformation.guiPanel.isVisible = show;
        }
        if (this.guiMain.characterTopHp.guiPanel) {
            this.guiMain.characterTopHp.guiPanel.isVisible = show;
        }
    }


    public refreshPopup() {
        this.isRefresh = true;
        if (this.opened) {
            this.close();
            this.open();
        }
    }

    public abstract open();

    public abstract close()

}
