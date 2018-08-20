/// <reference path="../game.ts"/>
/// <reference path="../characters/AbstractCharacter.ts"/>

namespace GUI {
    export class ShowHp {

        public hpBar;
        public guiPanel;
        protected texture:BABYLON.GUI.AdvancedDynamicTexture;
        protected character: AbstractCharacter

        constructor(game: Game) {
            this.texture = game.gui.texture;
        }

        public showHpCharacter(character:AbstractCharacter) {
            if (this.guiPanel) {
                this.texture.removeControl(this.guiPanel);
            }

            this.character = character;
            let characterPanel = new BABYLON.GUI.StackPanel();
            characterPanel.width = "25%";
            characterPanel.top = 10;
            characterPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            this.guiPanel = characterPanel;
            this.texture.addControl(characterPanel);

            let textBlock = new BABYLON.GUI.TextBlock("gui.panelhp.name", character.name);
            textBlock.color = 'white';
            textBlock.height = "20px";
            textBlock.textVerticalAlignment = 	BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;

            let hpSlider = new BABYLON.GUI.Slider();
            hpSlider.minimum = 0;
            hpSlider.maximum = character.statistics.hpMax;
            hpSlider.value = character.statistics.hp;
            hpSlider.width = "100%";
            hpSlider.height = "10px";
            hpSlider.thumbWidth = 0;
            hpSlider.barOffset = 0;
            hpSlider.background = 'black';
            hpSlider.color = "red";
            hpSlider.borderColor = 'black';
            this.hpBar = hpSlider;

            characterPanel.addControl(textBlock);
            characterPanel.addControl(hpSlider);

        }

        public refreshPanel() {
            if(this.character) {
                this.hpBar.value = this.character.statistics.hp;
            }
        }

        public hideHpBar() {
            if (this.guiPanel) {
                this.texture.removeControl(this.guiPanel);
            }
        }
    }
}