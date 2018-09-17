namespace GUI {
    export class Main {

        public game: Game;
        public texture: BABYLON.GUI.AdvancedDynamicTexture;
        public inventory: GUI.Inventory;
        public attributes: GUI.Attributes;
        public options: GUI.Options;
        public skills: GUI.Skills;
        public playerBottomPanel: GUI.PlayerBottomPanel;
        public playerLogsPanel: GUI.PlayerLogsPanel;
        public playerQuestInformation: GUI.PlayerQuestInformation;
        public playerLogsQuests: GUI.PlayerLogsPanel;
        public characterTopHp: GUI.ShowHp;

        constructor(game: Game) {
            this.game = game;
            game.gui = this;
            this.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.main');
            this.playerBottomPanel = new GUI.PlayerBottomPanel(game);
            this.playerLogsPanel = new GUI.PlayerLogsPanel(game);
            this.playerLogsQuests = new GUI.PlayerQuestsPanel(game);
            this.playerQuestInformation = new GUI.PlayerQuestInformation(game);
            this.characterTopHp = new GUI.ShowHp(game);

            this.attributes = new GUI.Attributes(this);
            this.inventory = new GUI.Inventory(this);
            this.options = new GUI.Options(this);
        }

    }
}