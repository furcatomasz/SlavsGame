namespace GUI {
    export class SelectCharacter {
        public texture: BABYLON.GUI.AdvancedDynamicTexture;

        constructor(game: Game) {
            this.game = game;
            game.gui = this;
            let texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.main');
            let container = new BABYLON.GUI.Rectangle('gui.panel.bottom');
            container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            container.width = '685px';
            container.height = '80px';
            container.isPointerBlocker = true;
            container.thickness = 0;
            texture.addControl(container);

            let buttonCreateCharacter = BABYLON.GUI.Button.CreateImageWithCenterTextButton("button.create_character", 'Create character', "assets/gui/buttons/blank.png");
            buttonCreateCharacter.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            buttonCreateCharacter.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonCreateCharacter.width = 0.5;
            buttonCreateCharacter.height = '40px';
            buttonCreateCharacter.thickness = 0;
            buttonCreateCharacter.color = 'white';
            buttonCreateCharacter.fontSize = 16;
            container.addControl(buttonCreateCharacter);
            buttonCreateCharacter.onPointerUpObservable.add(function () {
                const characterName = input.text;
                if(characterName.length > 2) {
                    game.client.socket.emit('createCharacter', characterName);
                }
            });

            let input = new BABYLON.GUI.InputText();
            input.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
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
}
