/// <reference path="../game.ts"/>
namespace GUI {
    export class PlayerQuestInformation {

        public guiPanel:BABYLON.GUI.StackPanel;
        protected texture:BABYLON.GUI.AdvancedDynamicTexture;

        constructor() {
            let self = this;
            this.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("PlayerQuestInformation");

            let playerQuestsInformationPanel = new BABYLON.GUI.StackPanel();
            playerQuestsInformationPanel.width = "25%";
            playerQuestsInformationPanel.top = 40;
            playerQuestsInformationPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            playerQuestsInformationPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            self.texture.addControl(playerQuestsInformationPanel);
            self.guiPanel = playerQuestsInformationPanel;
        }
        
        public addQuest(questData) {
            let self = this;
            let title = new BABYLON.GUI.TextBlock();
            title.text = questData.title;
            title.height = "10%";
            title.color = "white";
            title.fontSize = 16;
            this.guiPanel.addControl(title);

            questData.chapters[1].requirements.forEach(function(requirement) {
                let requirementDescription = new BABYLON.GUI.TextBlock();
                requirementDescription.text = requirement.name;
                requirementDescription.height = "10%";
                requirementDescription.color = "white";
                requirementDescription.fontSize = 14;
                self.guiPanel.addControl(requirementDescription);
            });
        }

    }
}