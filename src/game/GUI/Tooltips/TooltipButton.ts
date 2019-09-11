import {AdvancedDynamicTexture, TextBlock, Rectangle, Control} from 'babylonjs-gui';

export class TooltipButton {

    public container: Rectangle;

    constructor(baseControl: AdvancedDynamicTexture, text: string, parentPosition: BABYLON.Vector2) {
        let panel = new Rectangle('tooltip');
        panel.top = parentPosition.y;
        panel.left = parentPosition.x;
        panel.width = 0;
        panel.height = 0;
        panel.cornerRadius = 20;
        panel.thickness = 1;
        panel.background = "black";
        panel.color = "white";
        panel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
        panel.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        panel.adaptHeightToChildren = true;
        panel.adaptWidthToChildren = true;
        panel.paddingRight = '-80px';
        panel.paddingBottom = '-40px';
        panel.alpha = 0.8;
        panel.isHitTestVisible = false;
        baseControl.addControl(panel);
        this.container = panel;

        let label = new TextBlock();
        label.resizeToFit = true;
        label.text = text;
        label.fontFamily = "RuslanDisplay";
        panel.addControl(label);
    }
}
