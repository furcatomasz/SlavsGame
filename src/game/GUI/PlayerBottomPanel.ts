import {Game} from "../Game";
import {TextBlock, Image, Grid, Rectangle, Control, Button} from 'babylonjs-gui';

export class PlayerBottomPanel {

    public expBar: Image;
    public expBarText: TextBlock;
    public guiGridSkills: Grid;
    public container: Rectangle;

    constructor(game: Game) {
        let self = this;
        let texture = game.gui.texture;

        let container = new Rectangle('gui.panel.bottom');
        container.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        container.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
        container.width = '685px';
        container.height = '80px';
        container.isPointerBlocker = true;
        container.thickness = 0;
        this.container = container;
        texture.addControl(container);

        let toolbar = new Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar.png');
        toolbar.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
        toolbar.height = '65px';
        container.addControl(toolbar);

        let containerSliders = new Rectangle('gui.panel.bottom');
        containerSliders.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        containerSliders.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        containerSliders.width = '605px';
        containerSliders.height = '48px';
        containerSliders.isPointerBlocker = true;
        containerSliders.thickness = 0;
        container.addControl(containerSliders);

        let toolbarExp = new Image('gui.panel.bottom.toolbar', 'assets/gui/toolbar_exp.png');
        toolbarExp.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        toolbarExp.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
        toolbarExp.width = 1;
        toolbarExp.height = '14px';
        toolbarExp.top = '0px';
        this.expBar = toolbarExp;
        containerSliders.addControl(toolbarExp);

        let textBlockExp = new TextBlock();
        textBlockExp.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        textBlockExp.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
        textBlockExp.top = '-1px';
        textBlockExp.width = 1;
        textBlockExp.height = '14px';
        textBlockExp.color = "white";
        textBlockExp.fontSize = 12;
        textBlockExp.fontFamily = "RuslanDisplay";

        this.expBarText = textBlockExp;
        containerSliders.addControl(textBlockExp);

        let gridSpecials = new Grid();
        gridSpecials.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM;
        gridSpecials.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
        gridSpecials.width = '225px';
        gridSpecials.height = '52px';
        gridSpecials.top = '-6px';
        gridSpecials.left = '0px';
        gridSpecials.addColumnDefinition(1);
        gridSpecials.addColumnDefinition(1);
        gridSpecials.addColumnDefinition(1);
        gridSpecials.addColumnDefinition(1);
        container.addControl(gridSpecials);
        self.guiGridSkills = gridSpecials;

        let buttonAttributes = Button.CreateImageOnlyButton("button.attributes", "assets/gui/buttons/attributes.png");
        buttonAttributes.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
        buttonAttributes.width = '112px';
        buttonAttributes.height = '21px';
        buttonAttributes.thickness = 0;
        buttonAttributes.top = '-7px';
        buttonAttributes.left = '93px';
        container.addControl(buttonAttributes);
        buttonAttributes.onPointerUpObservable.add(function () {
            if (!game.gui.attributes.opened) {
                game.gui.attributes.open();
            }
        });

        let buttonSkills = Button.CreateImageOnlyButton("button.skills", "assets/gui/buttons/skills.png");
        buttonSkills.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
        buttonSkills.width = '112px';
        buttonSkills.height = '21px';
        buttonSkills.thickness = 0;
        buttonSkills.top = '20px';
        buttonSkills.left = '93px';
        container.addControl(buttonSkills);
        buttonSkills.onPointerUpObservable.add(function () {
            game.player.initGodRay();
        });

        let buttonInventory = Button.CreateImageOnlyButton("button.skills", "assets/gui/buttons/inventory.png");
        buttonInventory.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
        buttonInventory.width = '112px';
        buttonInventory.height = '21px';
        buttonInventory.thickness = 0;
        buttonInventory.top = '-7px';
        buttonInventory.left = '479px';
        container.addControl(buttonInventory);
        buttonInventory.onPointerUpObservable.add(function () {
            if (!game.gui.inventory.opened) {
                game.gui.inventory.open();
            }
        });

        let buttonOptions = Button.CreateImageOnlyButton("button.skills", "assets/gui/buttons/options.png");
        buttonOptions.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
        buttonOptions.width = '112px';
        buttonOptions.height = '21px';
        buttonOptions.thickness = 0;
        buttonOptions.top = '20px';
        buttonOptions.left = '479px';
        buttonOptions.onPointerUpObservable.add(function () {
            if (!game.gui.options.opened) {
                game.gui.options.open();
            }
        });
        container.addControl(buttonOptions);

    }

}
