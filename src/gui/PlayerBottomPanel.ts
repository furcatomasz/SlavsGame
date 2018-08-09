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
                let texture = self.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("gameUI");

                let grid = new BABYLON.GUI.Grid();
                grid.width = 0.5;
                grid.height = 0.1;
                grid.top = -10;
                grid.verticalAlignment = 	BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
                grid.addRowDefinition(1);
                grid.addRowDefinition(0.4);
                grid.addRowDefinition(0.4);
                texture.addControl(grid);

                var gridSpecials = new BABYLON.GUI.Grid();
                gridSpecials.addColumnDefinition(1);
                gridSpecials.addColumnDefinition(1);
                gridSpecials.addColumnDefinition(1);
                gridSpecials.addColumnDefinition(1);
                gridSpecials.addColumnDefinition(1);
                gridSpecials.addColumnDefinition(1);
                gridSpecials.addColumnDefinition(1);
                gridSpecials.addColumnDefinition(1);
                gridSpecials.addColumnDefinition(1);

                grid.addControl(gridSpecials, 0, 0);

                var image = new BABYLON.GUI.Image("but", "https://rawgit.com/furcatomasz/slavs/master/tornado.png");
                image.width = 1;
                image.height = 1;
                image.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;

                gridSpecials.addControl(image, 0, 0);

                var image = new BABYLON.GUI.Image("but", "https://rawgit.com/furcatomasz/slavs/master/shieldAttack.png");
                image.width = 1;
                image.height = 1;
                image.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
                gridSpecials.addControl(image, 0, 1);

                var image = new BABYLON.GUI.Image("but", "https://rawgit.com/furcatomasz/slavs/master/34035328_1915153681862120_9155447399651475456_n.png");
                image.width = 1;
                image.height = 1;
                image.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
                var textBlock = new BABYLON.GUI.TextBlock("mixture", '1');
                textBlock.color = 'white';
                textBlock.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
                textBlock.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                gridSpecials.addControl(image, 0, 2);
                gridSpecials.addControl(textBlock, 0, 2);


                let hpSlider = new BABYLON.GUI.Slider();
                hpSlider.minimum = 0;
                hpSlider.maximum = game.player.statistics.hpMax;
                hpSlider.value = game.player.statistics.hp;
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
                expSlider.value = game.player.experiencePercentages;
                expSlider.width = 1;
                expSlider.height = 1;
                expSlider.thumbWidth = 0;
                expSlider.barOffset = 0;
                expSlider.background = 'black';
                expSlider.color = "blue";
                expSlider.borderColor = 'yellow';
                grid.addControl(expSlider, 2, 0);

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }

        public setHpOnPanel(hp: int) {
            this.hpBar.value = hp;
        }

    }
}