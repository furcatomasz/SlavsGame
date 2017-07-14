/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../game.ts"/>
namespace GUI {
    export class Main {

        protected game:Game;
        protected texture: BABYLON.GUI.AdvancedDynamicTexture;

        public inventory: GUI.Inventory;
        public attributes: GUI.Attributes;

        protected buttonpanel: BABYLON.GUI.StackPanel;

        constructor(game:Game) {
            this.game = game;
            this.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.main');

            this.initInventory().initAttributes();
        }

        protected initInventory() {
            let self = this;
            this.inventory = new GUI.Inventory(this);
            let buttonPanel = new BABYLON.GUI.StackPanel();
            buttonPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            buttonPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            buttonPanel.width = 0.2;
            buttonPanel.isPointerBlocker = true;
            this.buttonpanel = buttonPanel;
            this.texture.addControl(buttonPanel);

            let button = BABYLON.GUI.Button.CreateSimpleButton("button.inventory", "Inventory");
            button.width = 1;
            button.height = "40px";
            button.color = "white";
            button.background = "black";
            button.isPointerBlocker = true;

            buttonPanel.addControl(button);
            button.onPointerUpObservable.add(function() {
                self.inventory.open();
            });

            return this;
        }

        protected initAttributes() {
            let self = this;
            this.attributes = new GUI.Attributes(this);

            let button = BABYLON.GUI.Button.CreateSimpleButton("button.attributes", "Attributes");
            button.width = 1;
            button.height = "40px";
            button.color = "white";
            button.background = "black";
            this.buttonpanel.addControl(button);
            button.onPointerUpObservable.add(function() {
                self.attributes.open();
            });

            return this;
        }
    }
}