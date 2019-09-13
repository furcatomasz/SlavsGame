import {Popup} from "./Popup";
import {Main} from "../Main";
import {Button, Control, TextBlock} from 'babylonjs-gui';

export class NewQuest extends Popup {

    protected questData: any;

    constructor(guiMain: Main, questServerData) {
        super(guiMain);
        this.questData = questServerData;
        this.name = 'Quest';
        this.imageUrl = "assets/gui/content.png";
        this.position = Control.HORIZONTAL_ALIGNMENT_CENTER;
    }

    public open() {
        let self = this;
        this.opened = true;
        this.initTexture();

        this.guiTexture.addControl(this.container);
        this.showText();
        this.createButtonClose();

        let buttonAccept = Button.CreateSimpleButton("questsButtonAccept", "Accept quest");
        buttonAccept.color = "red";
        buttonAccept.background = "black";
        buttonAccept.width = "180px;";
        buttonAccept.height = "48px";
        buttonAccept.thickness = 0;
        buttonAccept.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
        buttonAccept.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;

        buttonAccept.onPointerUpObservable.add(function () {
            self.guiMain.game.socketClient.socket.emit('acceptQuest', self.questData.questId);
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
        let title = new TextBlock('title');
        title.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        title.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        title.text = this.questData.title;
        title.top = "2%";
        title.color = "brown";
        title.width = "70%";
        title.height = "10%";
        title.fontSize = 38;
        title.fontFamily = "RuslanDisplay";
        title.textWrapping = true;
        this.container.addControl(title);

        let description = new TextBlock('descrption');
        description.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        description.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        description.text = this.questData.description;
        description.color = "black";
        description.top = "10%";
        description.width = "70%";
        description.height = "10%";
        description.fontSize = 16;
        description.fontFamily = "RuslanDisplay";
        description.textWrapping = true;
        this.container.addControl(description);

        Object.values(this.questData.chapters).forEach(function (chapterData: any, chapter) {
            let topPadding = (chapter * 15);

            let chapterHeader = new TextBlock();
            chapterHeader.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
            chapterHeader.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
            chapterHeader.text = 'Chapter ' + (chapter + 1)
            chapterHeader.top = topPadding + 15 + "%";
            chapterHeader.width = "70%";
            chapterHeader.height = "25%";
            chapterHeader.color = "green";
            chapterHeader.fontSize = 30;
            chapterHeader.fontFamily = "RuslanDisplay";
            chapterHeader.textWrapping = true;
            self.container.addControl(chapterHeader);

            let chapterDescription = new TextBlock();
            chapterDescription.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
            chapterDescription.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
            chapterDescription.text = chapterData.description;
            chapterDescription.top = topPadding + 22 + "%";
            chapterDescription.width = "70%";
            chapterDescription.height = "25%";
            chapterDescription.color = "black";
            chapterDescription.fontSize = 16;
            chapterDescription.fontFamily = "RuslanDisplay";
            chapterDescription.textWrapping = true;

            self.container.addControl(chapterDescription);

        });

    }

}
