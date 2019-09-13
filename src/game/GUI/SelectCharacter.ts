import {Game} from "../game";
import {AdvancedDynamicTexture, Rectangle, Button, Control, InputText} from 'babylonjs-gui';

export class SelectCharacter {
    public texture: AdvancedDynamicTexture;

    constructor(game: Game) {
        //TODO: Fix GUI
        // game.gui = this;
        let texture = AdvancedDynamicTexture.CreateFullscreenUI('gui.main');
        let container = new Rectangle('gui.panel.bottom');
        container.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        container.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
        container.width = '685px';
        container.height = '80px';
        container.isPointerBlocker = true;
        container.thickness = 0;
        texture.addControl(container);

        let buttonCreateCharacter = Button.CreateImageWithCenterTextButton("button.create_character", 'Create character', "assets/gui/buttons/blank.png");
        buttonCreateCharacter.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        buttonCreateCharacter.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
        buttonCreateCharacter.width = 0.5;
        buttonCreateCharacter.height = '40px';
        buttonCreateCharacter.thickness = 0;
        buttonCreateCharacter.color = 'white';
        buttonCreateCharacter.fontSize = 16;
        container.addControl(buttonCreateCharacter);
        buttonCreateCharacter.onPointerUpObservable.add(function () {
            const characterName = input.text;
            if (characterName.length > 2) {
                game.socketClient.socket.emit('createCharacter', characterName);
            }
        });

        let input = new InputText();
        input.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        input.width = 0.5;
        input.maxWidth = 0.5;
        input.height = "30px";
        input.color = "white";
        input.background = "black";
        input.placeholderText = "Set name of your new character";
        input.placeholderColor = "white";
        container.addControl(input);

        this.texture = texture;
    }

}
