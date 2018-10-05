namespace GUI {
    export abstract class Popup {

        public guiMain: GUI.Main;
        public guiTexture: BABYLON.GUI.AdvancedDynamicTexture;
        public container: BABYLON.GUI.Rectangle;
        public opened: boolean;

        protected name: string;
        protected imageUrl: string;
        protected position: number;
        protected containerBackground: BABYLON.GUI.Image;
        protected buttonClose: BABYLON.GUI.Control;

        constructor(guiMain: GUI.Main) {
            this.guiMain = guiMain;
        }

        /**
         * @returns {GUI.Popup}
         */
        protected initTexture() {
            this.guiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.' + this.name);
            this.guiTexture.layer.layerMask = 1;
            let container = new BABYLON.GUI.Rectangle('gui.panel.'+ this.name);
            container.horizontalAlignment = this.position;
            container.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            container.thickness = 0;
            container.isPointerBlocker = true;
            this.container = container;
            this.guiTexture.addControl(container);

            let image = new BABYLON.GUI.Image('gui.popup.image.', this.imageUrl);
            image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            image.width = 1;
            image.height = 1;
            container.addControl(image);

            this.container.addControl(image);
            this.containerBackground = image;

            let widthContainer = '607px';
            let heightContainer = '960px';
            let checklSizeListener = function (width) {
                if (width > 1819) {
                    container.width = parseInt(widthContainer)+'px';
                    container.height = parseInt(heightContainer)+'px';
                // } else if(width >= 1416 && width <= 1819) {
                //     container.width = parseInt(widthContainer)/1.5+'px';
                //     container.height = parseInt(heightContainer)/1.5+'px';
                } else {
                    container.width = parseInt(widthContainer)/2+'px';
                    container.height = parseInt(heightContainer)/2+'px';
                }
            };
            checklSizeListener(window.innerWidth);
            window.addEventListener("resize", function () {
                let width = window.innerWidth;
                checklSizeListener(width);
            });

            return this;
        }

        protected createButtonClose() {
            let self = this;
            let buttonClose = BABYLON.GUI.Button.CreateImageWithCenterTextButton("attributesButtonClose", "Close", "assets/gui/button.png");
            buttonClose.color = "white";
            buttonClose.background = "black";
            buttonClose.width = "180px;";
            buttonClose.height = "48px";
            buttonClose.thickness = 0;
            buttonClose.horizontalAlignment = this.position;
            buttonClose.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonClose.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;

            buttonClose.onPointerUpObservable.add(function () {
                self.close();
            });

            let checkSize = function(width) {
                if(width > 1819) {
                    buttonClose.width = '180px';
                    buttonClose.height = '48px';
                    buttonClose.fontSize = 20;
                } else {
                    buttonClose.width = '90px';
                    buttonClose.height = '23px';
                    buttonClose.fontSize = 12;
                }
            };
            checkSize(window.innerWidth);
            window.addEventListener("resize",function(){
                let width = window.innerWidth;
                checkSize(width);
            });

            this.container.addControl(buttonClose);
            this.buttonClose = buttonClose;

            return this;
        }

        public refreshPopup() {
            if(this.opened) {
                this.close();
                this.open();
            }
        }

        public abstract open();

        public abstract close()

    }
}
