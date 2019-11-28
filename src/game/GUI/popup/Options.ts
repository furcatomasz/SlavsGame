import {GameOptions} from "../../Options/Options";
import {Popup} from "./Popup";
import {Main} from "../Main";
import {SelectionPanel, Control, StackPanel, CheckboxGroup, SliderGroup} from 'babylonjs-gui';

export class Options extends Popup {

        constructor(guiMain: Main) {
            super(guiMain);
            this.name = 'Options';
            this.imageUrl = "assets/gui/content.png";
            this.position = Control.HORIZONTAL_ALIGNMENT_CENTER;
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
            let panel = new StackPanel('options.panel');
            panel.isPointerBlocker = true;
            panel.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
            panel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_CENTER;
            panel.width = 0.8;
            panel.height = 1;
            panel.top = '10%';
            this.container.addControl(panel);
            const game = this.guiMain.game;

            const shadowsGroup = new CheckboxGroup("Shadows");
            shadowsGroup.addCheckbox("Static shadows", (isChecked) => {
                GameOptions.saveInLocalStorage('staticShadows', isChecked, game);
            }, game.getSceneManger().options.staticShadows);
            shadowsGroup.addCheckbox("Dynamic Shadows", (isChecked) => {
                GameOptions.saveInLocalStorage('dynamicShadows', isChecked, game);
            }, game.getSceneManger().options.dynamicShadows);


            const postProccessGroup = new CheckboxGroup("Post proccessing");
            postProccessGroup.addCheckbox("Enabled", (isChecked) => {
                GameOptions.saveInLocalStorage('postProccessing', isChecked, game);
            }, game.getSceneManger().options.postProccessing);

            postProccessGroup.addCheckbox("FXAA", (isChecked) => {
                GameOptions.saveInLocalStorage('fxaa', isChecked, game);
            }, game.getSceneManger().options.fxaa);

            postProccessGroup.addCheckbox("Depth Of Field", (isChecked) => {
                GameOptions.saveInLocalStorage('dof', isChecked, game);
            }, game.getSceneManger().options.dof);

            // let dofGroup = new SliderGroup("DOF");
            // dofGroup.addSlider("fStop", (value) => {
            //     GameOptions.saveInLocalStorage('fStop', value, game);
            // }, "", 0.01, 10, game.getSceneManger().options.fStop, (value) => {
            //     return value;
            // });
            //
            // dofGroup.addSlider("focusDistance", (value) => {
            //     GameOptions.saveInLocalStorage('focusDistance', value, game);
            // }, "", 0, 45000, game.getSceneManger().options.focusDistance, (value) => {
            //     return value;
            // });
            //
            // dofGroup.addSlider("focalLength", (value) => {
            //     GameOptions.saveInLocalStorage('focalLength', value, game);
            // }, "", 0.01, 500.00, game.getSceneManger().options.focalLength, (value) => {
            //     return value;
            // });
            //
            // dofGroup.addSlider("lensSize", (value) => {
            //     GameOptions.saveInLocalStorage('lensSize', value, game);
            // }, "", 0.01, 500.00, game.getSceneManger().options.lensSize, (value) => {
            //     return value;
            // });

            postProccessGroup.addCheckbox("Bloom", (isChecked) => {
                GameOptions.saveInLocalStorage('bloom', isChecked, game);
            }, game.getSceneManger().options.bloom);

            postProccessGroup.addCheckbox("Fog", (isChecked) => {
                GameOptions.saveInLocalStorage('fog', isChecked, game);
            }, game.getSceneManger().options.fog);

            let selectBox = new SelectionPanel("sp", [shadowsGroup, postProccessGroup]);
            selectBox.width = 0.8;
            selectBox.height = 0.8;
            selectBox.thickness = 0;
            selectBox.color = "black";
            selectBox.headerColor = "brown";
            selectBox.fontFamily = "RuslanDisplay";
            panel.addControl(selectBox);
        }

    }
