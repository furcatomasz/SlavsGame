namespace GUI {
    export class PlayerInformation {

        public container: BABYLON.GUI.Container;
        public hpBar: BABYLON.GUI.Image;
        public hpBarText: BABYLON.GUI.TextBlock;
        public energyBar: BABYLON.GUI.Image;
        public energyBarText: BABYLON.GUI.TextBlock;

        constructor(player: Player, game: Game) {
            const guiPanel = game.gui.roomInformaton.guiPanel;

            let grid = new BABYLON.GUI.Grid();
            grid.addColumnDefinition(70, true);
            grid.addColumnDefinition(1);
            grid.width = 1;
            grid.height ='64px';
            guiPanel.addControl(grid);
            this.container = grid;

            let image = new BABYLON.GUI.Image("but", "assets/gui/warrior.png");
            image.width = "64px";
            image.height = "64px";
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            grid.addControl(image, 0, 0);

            let title = new BABYLON.GUI.TextBlock();
            title.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            title.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            title.text = player.name;
            title.top = "0";
            title.color = "orange";
            title.fontFamily = "RuslanDisplay";
            title.fontSize = 22;
            title.resizeToFit = true;
            grid.addControl(title, 0, 1);

            let toolbarHp = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_hp.png');
            toolbarHp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            toolbarHp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            toolbarHp.width = 0;
            toolbarHp.height = '14px';
            toolbarHp.top = '32px';
            this.hpBar = toolbarHp;
            grid.addControl(toolbarHp, 0, 1);

            let textBlockHp = new BABYLON.GUI.TextBlock();
            textBlockHp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textBlockHp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            textBlockHp.top = '30px';
            textBlockHp.width = 1;
            textBlockHp.height = '14px';
            textBlockHp.color = "white";
            textBlockHp.fontSize = 16;
            textBlockHp.fontFamily = "RuslanDisplay";

            this.hpBarText = textBlockHp;
            grid.addControl(textBlockHp, 0, 1);

            let toolbarEnergy = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_energy.png');
            toolbarEnergy.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            toolbarEnergy.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            toolbarEnergy.width = 1;
            toolbarEnergy.height = '14px';
            toolbarEnergy.top = '48px';
            this.energyBar = toolbarEnergy;
            grid.addControl(toolbarEnergy, 0, 1);

            let textToolbarEnergy = new BABYLON.GUI.TextBlock();
            textToolbarEnergy.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textToolbarEnergy.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            textToolbarEnergy.top = '47px';
            textToolbarEnergy.width = 1;
            textToolbarEnergy.height = '14px';
            textToolbarEnergy.color = "white";
            textToolbarEnergy.fontSize = 12;
            textToolbarEnergy.fontFamily = "RuslanDisplay";

            this.energyBarText = textToolbarEnergy;
            grid.addControl(textToolbarEnergy, 0, 1);
        }

    }
}
