import {Game} from "../Game";
import {AdvancedDynamicTexture, StackPanel, TextBlock, Control} from 'babylonjs-gui';

export class PlayerQuestInformation {

    public guiPanel: StackPanel;
    protected texture: AdvancedDynamicTexture;

    constructor(game: Game) {
        this.texture = game.gui.texture;
    }

    public addQuest(questData) {
        let self = this;

        if (self.guiPanel) {
            self.guiPanel.dispose();
        }

        let playerQuestsInformationPanel = new StackPanel();
        playerQuestsInformationPanel.width = "50%";
        playerQuestsInformationPanel.top = 40;
        playerQuestsInformationPanel.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        playerQuestsInformationPanel.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_RIGHT;
        self.texture.addControl(playerQuestsInformationPanel);
        self.guiPanel = playerQuestsInformationPanel;

        let title = new TextBlock();
        title.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        title.text = questData.title;
        title.top = "0%";
        title.color = "orange";
        title.fontFamily = "RuslanDisplay";
        title.fontSize = 22;
        title.resizeToFit = true;
        this.guiPanel.addControl(title);

        questData.chapters[questData.actualChapter].requirements.forEach(function (requirement) {
            let requirementDescription = new TextBlock();
            requirementDescription.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
            requirementDescription.text = requirement.name;
            requirementDescription.resizeToFit = true;
            requirementDescription.color = "white";
            requirementDescription.fontFamily = "RuslanDisplay";
            requirementDescription.top = "5%";
            requirementDescription.fontSize = 18;
            self.guiPanel.addControl(requirementDescription);
        });
    }

}
