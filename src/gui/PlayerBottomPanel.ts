/// <reference path="../game.ts"/>
namespace GUI {
    export class PlayerBottomPanel {

        public hpBar;
        public expBar;
        public guiPanel;
        public guiGridSkills: BABYLON.GUI.Grid;
        protected texture: BABYLON.GUI.AdvancedDynamicTexture;

        constructor(game: Game) {
            let self = this;
            let texture = self.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("gameUI");

            let grid = new BABYLON.GUI.Grid();
            grid.width = 0.4;
            grid.height = 0.1;
            grid.top = -10;
            grid.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            grid.addRowDefinition(1);
            grid.addRowDefinition(0.4);
            grid.addRowDefinition(0.4);
            texture.addControl(grid);

            let gridSpecials = new BABYLON.GUI.Grid();
            gridSpecials.addColumnDefinition(1);
            gridSpecials.addColumnDefinition(1);
            gridSpecials.addColumnDefinition(1);
            gridSpecials.addColumnDefinition(1);
            gridSpecials.addColumnDefinition(1);
            gridSpecials.addColumnDefinition(1);
            grid.addControl(gridSpecials, 0, 0);
            self.guiGridSkills = gridSpecials;

            let hpSlider = new BABYLON.GUI.Slider();
            hpSlider.minimum = 0;
            hpSlider.maximum = 1;
            hpSlider.value = 1;
            hpSlider.width = 1;
            hpSlider.height = 1;
            hpSlider.thumbWidth = 0;
            hpSlider.barOffset = 0;
            hpSlider.background = 'black';
            hpSlider.color = "red";
            hpSlider.borderColor = 'black';
            grid.addControl(hpSlider, 1, 0);

            let expSlider = new BABYLON.GUI.Slider();
            expSlider.minimum = 0;
            expSlider.maximum = 100;
            expSlider.value = 0;
            expSlider.width = 1;
            expSlider.height = 1;
            expSlider.thumbWidth = 0;
            expSlider.barOffset = 0;
            expSlider.background = 'black';
            expSlider.color = "blue";
            expSlider.borderColor = 'yellow';
            grid.addControl(expSlider, 2, 0);

        }

    }
}