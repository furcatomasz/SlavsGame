/// <reference path="../game.ts"/>
namespace GUI {
    export class TooltipMesh {

        protected texture: BABYLON.GUI.AdvancedDynamicTexture;

        constructor(mesh: BABYLON.AbstractMesh, text: string) {
            let advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("tooltip");

            let rect1 = new BABYLON.GUI.Rectangle();
            rect1.width = 0.4;
            rect1.height = "40px";
            rect1.cornerRadius = 20;
            rect1.thickness = 2;
            rect1.background = "black";
            advancedTexture.addControl(rect1);

            rect1.linkWithMesh(mesh);
            rect1.linkOffsetY = -100;

            let label = new BABYLON.GUI.TextBlock();
            label.text = text;
            rect1.addControl(label);



            setTimeout(function() {
                advancedTexture.dispose();
            }, 2000);
        }

    }
}