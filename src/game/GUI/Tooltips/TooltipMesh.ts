import {AdvancedDynamicTexture, Rectangle, TextBlock} from 'babylonjs-gui';
import * as BABYLON from 'babylonjs';

export class TooltipMesh {

    public container: AdvancedDynamicTexture;

    constructor(mesh: BABYLON.AbstractMesh, text: string, linkOffsetY: number = -80) {
        let advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
        advancedTexture.layer.layerMask = 2;
        this.container = advancedTexture;

        let panel = new Rectangle('tooltip');
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

        let label = new TextBlock();
        label.resizeToFit = true;
        label.text = text;
        label.fontFamily = "RuslanDisplay";
        panel.addControl(label);

        panel.linkWithMesh(mesh);
        panel.linkOffsetY = linkOffsetY;
    }

}
