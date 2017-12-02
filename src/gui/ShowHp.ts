/// <reference path="../game.ts"/>
/// <reference path="../characters/AbstractCharacter.ts"/>

namespace GUI {
    export class ShowHp {

        public hpBar;
        public guiPanel;
        protected texture:BABYLON.GUI.AdvancedDynamicTexture;

        constructor() {
            this.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("characterShowHp");
        }

        public showHpCharacter(character:AbstractCharacter) {
            if (this.guiPanel) {
                this.texture.removeControl(this.guiPanel);
            }

            let characterPanel = new BABYLON.GUI.StackPanel();
            characterPanel.width = "25%";
            characterPanel.top = 10;
            characterPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            this.guiPanel = characterPanel;
            this.texture.addControl(characterPanel);

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

            characterPanel.addControl(hpSlider);
        }

        public hideHpBar() {
            if (this.guiPanel) {
                this.texture.removeControl(this.guiPanel);
            }
        }
    }
}