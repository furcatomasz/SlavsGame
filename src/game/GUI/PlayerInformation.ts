import {Game} from "../Game";
import {Player} from "../Characters/Player";
import {Container, Image, TextBlock, Control,Grid} from 'babylonjs-gui';

export class PlayerInformation {

        public container: Container;
        public hpBar: Image;
        public hpBarText: TextBlock;
        public energyBar: Image;
        public energyBarText: TextBlock;

        constructor(player: Player, game: Game) {
            const guiPanel = game.gui.roomInformaton.guiPanel;

            let grid = new Grid();
            grid.addColumnDefinition(70, true);
            grid.addColumnDefinition(1);
            grid.width = 1;
            grid.height ='64px';
            grid.paddingTop = '10px';
            guiPanel.addControl(grid);
            this.container = grid;

            let image = new Image("but", "assets/gui/warrior.png");
            image.width = "64px";
            image.height = "64px";
            image.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
            image.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
            grid.addControl(image, 0, 0);

            let title = new TextBlock();
            title.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
            title.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
            title.text = player.name;
            title.top = "0";
            title.color = "orange";
            title.fontFamily = "RuslanDisplay";
            title.fontSize = 16;
            title.resizeToFit = true;
            grid.addControl(title, 0, 1);

            let toolbarHp = new Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_hp.png');
            toolbarHp.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
            toolbarHp.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
            toolbarHp.width = 0;
            toolbarHp.height = '14px';
            toolbarHp.top = '24px';
            this.hpBar = toolbarHp;
            grid.addControl(toolbarHp, 0, 1);

            let textBlockHp = new TextBlock();
            textBlockHp.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
            textBlockHp.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
            textBlockHp.top = '24px';
            textBlockHp.width = 1;
            textBlockHp.height = '14px';
            textBlockHp.color = "white";
            textBlockHp.fontSize = 16;
            textBlockHp.fontFamily = "RuslanDisplay";

            this.hpBarText = textBlockHp;
            grid.addControl(textBlockHp, 0, 1);

            let toolbarEnergy = new Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_energy.png');
            toolbarEnergy.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
            toolbarEnergy.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
            toolbarEnergy.width = 1;
            toolbarEnergy.height = '14px';
            toolbarEnergy.top = '40px';
            this.energyBar = toolbarEnergy;
            grid.addControl(toolbarEnergy, 0, 1);

            let textToolbarEnergy = new TextBlock();
            textToolbarEnergy.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
            textToolbarEnergy.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
            textToolbarEnergy.top = '40px';
            textToolbarEnergy.width = 1;
            textToolbarEnergy.height = '14px';
            textToolbarEnergy.color = "white";
            textToolbarEnergy.fontSize = 12;
            textToolbarEnergy.fontFamily = "RuslanDisplay";

            this.energyBarText = textToolbarEnergy;
            grid.addControl(textToolbarEnergy, 0, 1);
        }

    }
