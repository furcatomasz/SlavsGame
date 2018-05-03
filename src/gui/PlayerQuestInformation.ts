/// <reference path="../game.ts"/>
namespace GUI {
    export class PlayerQuestInformation {

        public guiPanel:BABYLON.GUI.StackPanel;
        protected texture:BABYLON.GUI.AdvancedDynamicTexture;

        constructor() {
            this.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("PlayerQuestInformation");
        }
        
        public addQuest(questData) {
            let self = this;

            if(self.guiPanel) {
                self.guiPanel.dispose();
            }

            let playerQuestsInformationPanel = new BABYLON.GUI.StackPanel();
            playerQuestsInformationPanel.width = "25%";
            playerQuestsInformationPanel.top = 40;
            playerQuestsInformationPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            playerQuestsInformationPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            self.texture.addControl(playerQuestsInformationPanel);
            self.guiPanel = playerQuestsInformationPanel;

            let title = new BABYLON.GUI.TextBlock();
            title.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            title.text = questData.title;
            title.top = "0%";
            title.color = "orange";
            title.fontSize = 18;
            title.resizeToFit = true;
            this.guiPanel.addControl(title);

            questData.chapters[questData.actualChapter].requirements.forEach(function(requirement) {
                let requirementDescription = new BABYLON.GUI.TextBlock();
                requirementDescription.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                requirementDescription.text = requirement.name;
                requirementDescription.resizeToFit = true;
                requirementDescription.color = "white";
                requirementDescription.top = "5%";
                requirementDescription.fontSize = 14;
                self.guiPanel.addControl(requirementDescription);
            });
        }

    }
}