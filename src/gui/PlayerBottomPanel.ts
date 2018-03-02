/// <reference path="../game.ts"/>
namespace GUI {
    export class PlayerBottomPanel {

        public hpBar;
        public expBar;
        public guiPanel;
        protected texture: BABYLON.GUI.AdvancedDynamicTexture;

        constructor(game: Game) {
            let self = this;
            let listener = function listener() {
                self.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("gameUI");

                let characterBottomPanel = new BABYLON.GUI.StackPanel();
                characterBottomPanel.width = "50%";
                characterBottomPanel.top = -10;
                characterBottomPanel.verticalAlignment = 	BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
                self.texture.addControl(characterBottomPanel);
                self.guiPanel = characterBottomPanel;

                let hpSlider = new BABYLON.GUI.Slider();
                hpSlider.minimum = 0;
                hpSlider.maximum = game.player.statistics.hpMax;
                hpSlider.value = game.player.statistics.hp;
                hpSlider.width = "100%";
                hpSlider.height = "10px";
                hpSlider.thumbWidth = 0;
                hpSlider.barOffset = 0;
                hpSlider.background = 'black';
                hpSlider.color = "red";
                hpSlider.borderColor = 'black';
                self.hpBar = hpSlider;

                let expSlider = new BABYLON.GUI.Slider();
                expSlider.minimum = 0;
                expSlider.maximum = 100;
                expSlider.value = game.player.getExperience(true);
                expSlider.width = "100%";
                expSlider.height = "20px";
                expSlider.thumbWidth = 0;
                expSlider.barOffset = 0;
                expSlider.background = 'black';
                expSlider.color = "blue";
                expSlider.borderColor = 'yellow';
                self.expBar = expSlider;

                characterBottomPanel.addControl(hpSlider);
                characterBottomPanel.addControl(expSlider);
                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }

        public setHpOnPanel(hp: int) {
            this.hpBar.value = hp;
        }

    }
}