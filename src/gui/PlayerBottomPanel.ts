namespace GUI {
    export class PlayerBottomPanel {

        public hpBar: BABYLON.GUI.Image;
        public hpBarText: BABYLON.GUI.TextBlock;
        public expBar: BABYLON.GUI.Image;
        public expBarText: BABYLON.GUI.TextBlock;
        public energyBar: BABYLON.GUI.Image;
        public energyBarText: BABYLON.GUI.TextBlock;
        public guiGridSkills: BABYLON.GUI.Grid;
        protected texture: BABYLON.GUI.AdvancedDynamicTexture;

        constructor(game: Game) {
            let self = this;
            let texture = game.gui.texture;

            let container = new BABYLON.GUI.Rectangle('gui.panel.bottom');
            container.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            container.width = '685px';
            container.height = '115px';
            container.isPointerBlocker = true;
            container.thickness = 0;
            texture.addControl(container);

            let toolbar = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar.png');
            toolbar.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            toolbar.height = '65px';
            container.addControl(toolbar);

            let containerSliders = new BABYLON.GUI.Rectangle('gui.panel.bottom');
            containerSliders.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            containerSliders.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            containerSliders.width = '605px';
            containerSliders.height = '48px';
            containerSliders.isPointerBlocker = true;
            containerSliders.thickness = 0;
            container.addControl(containerSliders);

            let toolbarHp = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_hp.png');
            toolbarHp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            toolbarHp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            toolbarHp.width = 0;
            toolbarHp.height = '14px';
            toolbarHp.top = '32px';
            this.hpBar = toolbarHp;
            containerSliders.addControl(toolbarHp);

            let textBlockHp = new BABYLON.GUI.TextBlock();
            textBlockHp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textBlockHp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textBlockHp.top = '32px';
            textBlockHp.width = 1;
            textBlockHp.height = '14px';
            textBlockHp.color = "white";
            textBlockHp.fontSize = 10;
            this.hpBarText = textBlockHp;
            containerSliders.addControl(textBlockHp);

            let toolbarExp = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_exp.png');
            toolbarExp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            toolbarExp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            toolbarExp.width = 1;
            toolbarExp.height = '14px';
            toolbarExp.top = '16px';
            this.expBar = toolbarExp;
            containerSliders.addControl(toolbarExp);

            let textBlockExp = new BABYLON.GUI.TextBlock();
            textBlockExp.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textBlockExp.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textBlockExp.top = '16px';
            textBlockExp.width = 1;
            textBlockExp.height = '14px';
            textBlockExp.color = "white";
            textBlockExp.fontSize = 10;
            this.expBarText = textBlockExp;
            containerSliders.addControl(textBlockExp);

            let toolbarEnergy = new BABYLON.GUI.Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_exp.png');
            toolbarEnergy.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            toolbarEnergy.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            toolbarEnergy.width = 1;
            toolbarEnergy.height = '14px';
            toolbarEnergy.top = '0px';
            this.energyBar = toolbarEnergy;
            containerSliders.addControl(toolbarEnergy);

            let textToolbarEnergy = new BABYLON.GUI.TextBlock();
            textToolbarEnergy.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textToolbarEnergy.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textToolbarEnergy.top = '0px';
            textToolbarEnergy.width = 1;
            textToolbarEnergy.height = '14px';
            textToolbarEnergy.color = "white";
            textToolbarEnergy.fontSize = 10;
            this.energyBarText = textToolbarEnergy;
            containerSliders.addControl(textToolbarEnergy);

            let gridSpecials = new BABYLON.GUI.Grid();
            gridSpecials.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            gridSpecials.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            gridSpecials.width = '215px';
            gridSpecials.height ='44px';
            gridSpecials.top = '-11px';
            gridSpecials.left = '4px';
            gridSpecials.addColumnDefinition(1);
            gridSpecials.addColumnDefinition(1);
            gridSpecials.addColumnDefinition(1);
            gridSpecials.addColumnDefinition(1);
            container.addControl(gridSpecials);
            self.guiGridSkills = gridSpecials;

            let buttonAttributes = BABYLON.GUI.Button.CreateImageOnlyButton("button.attributes", "assets/gui/buttons/attributes.png");
            buttonAttributes.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            buttonAttributes.width = '112px';
            buttonAttributes.height = '21px';
            buttonAttributes.thickness = 0;
            buttonAttributes.top = '10px';
            buttonAttributes.left = '93px';
            container.addControl(buttonAttributes);
            buttonAttributes.onPointerUpObservable.add(function () {
                if (!game.gui.attributes.opened) {
                    game.gui.attributes.open();
                }
            });

            let buttonSkills = BABYLON.GUI.Button.CreateImageOnlyButton("button.skills", "assets/gui/buttons/skills.png");
            buttonSkills.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            buttonSkills.width = '112px';
            buttonSkills.height = '21px';
            buttonSkills.thickness = 0;
            buttonSkills.top = '37px';
            buttonSkills.left = '93px';
            container.addControl(buttonSkills);
            buttonSkills.onPointerUpObservable.add(function () {
                // if (!game.gui.skills.opened) {
                //     game.gui.skills.open();
                // }
            });

            let buttonInventory = BABYLON.GUI.Button.CreateImageOnlyButton("button.skills", "assets/gui/buttons/inventory.png");
            buttonInventory.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            buttonInventory.width = '112px';
            buttonInventory.height = '21px';
            buttonInventory.thickness = 0;
            buttonInventory.top = '10px';
            buttonInventory.left = '479px';
            container.addControl(buttonInventory);
            buttonInventory.onPointerUpObservable.add(function () {
                if (!game.gui.inventory.opened) {
                    game.gui.inventory.open();
                }
            });

            let buttonOptions = BABYLON.GUI.Button.CreateImageOnlyButton("button.skills", "assets/gui/buttons/options.png");
            buttonOptions.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            buttonOptions.width = '112px';
            buttonOptions.height = '21px';
            buttonOptions.thickness = 0;
            buttonOptions.top = '37px';
            buttonOptions.left = '479px';
            container.addControl(buttonOptions);

        }

    }
}