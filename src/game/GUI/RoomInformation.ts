import {Game} from "../game";

export class RoomInformation {

        public guiPanel:BABYLON.GUI.StackPanel;
        protected texture:BABYLON.GUI.AdvancedDynamicTexture;

        constructor(game: Game) {
            this.texture = game.gui.texture;

            let roomInformationPanel = new BABYLON.GUI.StackPanel("Room Information");
            roomInformationPanel.width = "20%";
            roomInformationPanel.top = 40;
            roomInformationPanel.left = 10;
            roomInformationPanel.zIndex = 1;
            roomInformationPanel.isPointerBlocker = true;
            roomInformationPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            roomInformationPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            this.texture.addControl(roomInformationPanel);
            this.guiPanel = roomInformationPanel;
        }

    }
