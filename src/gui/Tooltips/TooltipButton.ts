namespace GUI {
    export class TooltipButton {

        public container: BABYLON.GUI.Rectangle;
        public label: BABYLON.GUI.TextBlock;

        constructor(baseControl: BABYLON.GUI.Control, text: string) {

            let rect1 = new BABYLON.GUI.Rectangle('tooltip')
            rect1.top = '-25%';
            rect1.width = 1;
            rect1.height = "40px";
            rect1.cornerRadius = 20;
            rect1.thickness = 1;
            rect1.background = "black";
            baseControl.addControl(rect1);

            let label = new BABYLON.GUI.TextBlock();
            label.text = text;
            rect1.addControl(label);

            this.container = rect1;
            this.label = label;
        }

    }
}