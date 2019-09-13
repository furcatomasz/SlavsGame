import {Game} from "../Game";
import {StackPanel, AdvancedDynamicTexture, Control} from 'babylonjs-gui';

export class RoomInformation {

        public guiPanel:StackPanel;
        protected texture:AdvancedDynamicTexture;

        constructor(game: Game) {
            this.texture = game.gui.texture;

            let roomInformationPanel = new StackPanel("Room Information");
            roomInformationPanel.width = "20%";
            roomInformationPanel.top = 40;
            roomInformationPanel.left = 10;
            roomInformationPanel.zIndex = 1;
            roomInformationPanel.isPointerBlocker = true;
            roomInformationPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
            roomInformationPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
            this.texture.addControl(roomInformationPanel);
            this.guiPanel = roomInformationPanel;
        }

    }
