class TooltipButton {

    public container: BABYLON.GUI.Rectangle;

    constructor(baseControl: BABYLON.GUI.AdvancedDynamicTexture, text: string, parentPosition: BABYLON.Vector2) {
        let panel = new BABYLON.GUI.Rectangle('tooltip');
        panel.top = parentPosition.y;
        panel.left = parentPosition.x;
        panel.width = 0;
        panel.height = 0;
        panel.cornerRadius = 20;
        panel.thickness = 1;
        panel.background = "black";
        panel.color = "white";
        panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        panel.adaptHeightToChildren = true;
        panel.adaptWidthToChildren = true;
        panel.paddingRight = '-80px';
        panel.paddingBottom = '-40px';
        panel.alpha = 0.8;
        panel.isHitTestVisible = false;
        baseControl.addControl(panel);
        this.container = panel;

        let label = new BABYLON.GUI.TextBlock();
        label.textWrapping = true;
        label.resizeToFit = true;
        label.text = text;
        label.fontFamily = "RuslanDisplay";
        panel.addControl(label);
    }
}
