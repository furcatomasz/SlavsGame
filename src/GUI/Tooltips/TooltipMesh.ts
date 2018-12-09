class TooltipMesh {

    protected container: BABYLON.GUI.AdvancedDynamicTexture;

    constructor(mesh: BABYLON.AbstractMesh, text: string) {
        let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        advancedTexture.layer.layerMask = 2;
        this.container = advancedTexture;

        let panel = new BABYLON.GUI.Rectangle('tooltip');
        panel.cornerRadius = 20;
        panel.thickness = 1;
        panel.background = "black";
        panel.color = "white";
        panel.adaptHeightToChildren = true;
        panel.adaptWidthToChildren = true;
        panel.paddingRight = '-40px';
        panel.paddingBottom = '-20px';
        panel.alpha = 0.8;
        advancedTexture.addControl(panel);

        let label = new BABYLON.GUI.TextBlock();
        label.resizeToFit = true;
        label.text = text;
        label.fontFamily = "RuslanDisplay";
        panel.addControl(label);

        panel.linkWithMesh(mesh);
        panel.linkOffsetY = -80;
    }

}
