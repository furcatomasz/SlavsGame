/// <reference path="../game.ts"/>
namespace GUI {
    export class PlayerBottomPanel {

        public hpBar: BABYLON.GUI.Image;
        public hpBarText: BABYLON.GUI.TextBlock;
        public expBar: BABYLON.GUI.Image;
        public expBarText: BABYLON.GUI.TextBlock;
        public guiGridSkills: BABYLON.GUI.Grid;
        protected texture: BABYLON.GUI.AdvancedDynamicTexture;

        constructor(game: Game) {
            let self = this;
            let texture = self.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("gameUI");

            let container = new BABYLON.GUI.Rectangle('gui.panel.bottom');
            container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            container.width = '606px';
            container.height = '90px';
            container.isPointerBlocker = true;
            container.thickness = 0;
            texture.addControl(container);

            let toolbar = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar.png');
            toolbar.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            toolbar.height = '60px';
            container.addControl(toolbar);

            let toolbarHp = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_hp.png');
            toolbarHp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            toolbarHp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            toolbarHp.width = 1;
            toolbarHp.height = '14px';
            toolbarHp.top = '-60px';
            this.hpBar = toolbarHp;
            console.log(1);
            container.addControl(toolbarHp);

            let textBlockHp = new BABYLON.GUI.TextBlock();
            textBlockHp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            textBlockHp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textBlockHp.top = '-60px';
            textBlockHp.width = 1;
            textBlockHp.height = '14px';
            textBlockHp.color = "white";
            textBlockHp.fontSize = 10;
            this.hpBarText = textBlockHp;
            container.addControl(textBlockHp);

            let toolbarExp = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_exp.png');
            toolbarExp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            toolbarExp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            toolbarExp.width = 1;
            toolbarExp.height = '14px';
            toolbarExp.top = '-74px';
            this.expBar = toolbarExp;
            container.addControl(toolbarExp);

            let textBlockExp = new BABYLON.GUI.TextBlock();
            textBlockExp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            textBlockExp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textBlockExp.top = '-74px';
            textBlockExp.width = 1;
            textBlockExp.height = '14px';
            textBlockExp.color = "white";
            textBlockExp.fontSize = 10;
            this.expBarText = textBlockExp;
            container.addControl(textBlockExp);

            let gridSpecials = new BABYLON.GUI.Grid();
            gridSpecials.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            gridSpecials.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            gridSpecials.width = '215px';
            gridSpecials.height ='44px';
            gridSpecials.top = '-9px';
            gridSpecials.left = '-1px';
            gridSpecials.addColumnDefinition(1);
            gridSpecials.addColumnDefinition(1);
            gridSpecials.addColumnDefinition(1);
            gridSpecials.addColumnDefinition(1);
            container.addControl(gridSpecials);
            self.guiGridSkills = gridSpecials;
        }

    }
}