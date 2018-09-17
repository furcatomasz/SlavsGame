namespace GUI {
    export class Options extends Popup {

        protected renderingPipeline: BABYLON.DefaultRenderingPipeline;

        constructor(guiMain: GUI.Main) {
            super(guiMain);
            this.name = 'Inventory';
            this.imageUrl = "assets/gui/attrs.png";
            this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        }

        public open() {
            this.opened = true;
            this.initTexture();

            this.guiTexture.addControl(this.container);
            this.showText();
            this.createButtonClose();
        }

        public close() {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
        }

        protected showText() {
            let panel = new BABYLON.GUI.StackPanel('attributes.panel');
            panel.isPointerBlocker = true;
            panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            panel.width = 1;
            panel.height = 0.9;
            panel.top = '10%';
            this.container.addControl(panel);
            let self = this;
            const scene = this.guiMain.game.getScene();
            let camera = scene.activeCamera;

            const postProccessGroup = new BABYLON.GUI.CheckboxGroup("Post proccessing");
            postProccessGroup.color = "white";
            postProccessGroup.addCheckbox("Enabled", (isChecked) => {
                if (isChecked) {
                    self.renderingPipeline = new BABYLON.DefaultRenderingPipeline("default", false, scene, [camera]);
                } else {
                    self.renderingPipeline.dispose();
                }
            });

            postProccessGroup.addCheckbox("FXAA", (isChecked) => {
                if (isChecked) {
                    self.renderingPipeline.fxaaEnabled = true;
                } else {
                    self.renderingPipeline.fxaaEnabled = false;
                }
            });

            postProccessGroup.addCheckbox("Depth Of Field", (isChecked) => {
                if (isChecked) {
                    self.renderingPipeline.depthOfFieldEnabled = true;
                    self.renderingPipeline.depthOfField.depthOfFieldBlurLevel = BABYLON.DepthOfFieldEffectBlurLevel.Medium;
                } else {
                    self.renderingPipeline.depthOfFieldEnabled = false;
                }
            });

            let dofGroup = new BABYLON.GUI.SliderGroup("DOF", "S");
            dofGroup.addSlider("fStop", (value) => {
                self.renderingPipeline.depthOfField.fStop = value;
            }, "", 0.01, 32.00, 0, (value) => {
                return value;
            });

            dofGroup.addSlider("focusDistance", (value) => {
                self.renderingPipeline.depthOfField.focusDistance = value;
            }, "", 0, 5000, 0, (value) => {
                return value;
            });
            dofGroup.addSlider("focalLength", (value) => {
                self.renderingPipeline.depthOfField.focalLength = value;
            }, "", 0.01, 500.00, 0, (value) => {
                return value;
            });

            let selectBox = new BABYLON.GUI.SelectionPanel("sp", [postProccessGroup, dofGroup]);
            selectBox.width = 0.8;
            selectBox.height = 0.8;
            selectBox.thickness = 0;
            selectBox.color = "white";
            selectBox.headerColor = "white";
            panel.addControl(selectBox);


        }

    }
}