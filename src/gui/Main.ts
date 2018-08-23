namespace GUI {
    export class Main {

        public game: Game;
        public texture: BABYLON.GUI.AdvancedDynamicTexture;

        public inventory: GUI.Inventory;
        public attributes: GUI.Attributes;
        public skills: GUI.Skills;
        public playerQuests: GUI.PlayerQuests;
        public quest: GUI.Quest;
        public teams: GUI.Rooms;
        public playerBottomPanel: GUI.PlayerBottomPanel;
        public playerLogsPanel: GUI.PlayerLogsPanel;
        public playerQuestInformation: GUI.PlayerQuestInformation;
        public playerLogsQuests: GUI.PlayerLogsPanel;
        public characterTopHp: GUI.ShowHp;

        protected buttonpanel: BABYLON.GUI.StackPanel;

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
        }

        protected initFullscreen() {
            let self = this;

            let button = BABYLON.GUI.Button.CreateSimpleButton("button.fullscreen", "Fullscreen");
            button.width = 1;
            button.height = "20px";
            button.color = "white";
            button.background = "black";
            button.isPointerBlocker = true;

            this.buttonpanel.addControl(button);
            button.onPointerUpObservable.add(function () {
                self.game.engine.switchFullscreen(false);
                // self.game.engine.resize();
            });



            return this;
        }

        protected initQuests() {
            let self = this;
            this.playerQuests = new GUI.PlayerQuests(this);
            let button = BABYLON.GUI.Button.CreateSimpleButton("button.fullscreen", "Quests");
            button.width = 1;
            button.height = "20px";
            button.color = "white";
            button.background = "black";
            button.isPointerBlocker = true;

            this.buttonpanel.addControl(button);
            button.onPointerUpObservable.add(function () {
                if (!self.playerQuests.opened) {
                    self.playerQuests.open();
                }
            });



            return this;
        }


        protected initTeams() {
            let self = this;
            this.teams = new GUI.Rooms(this);

            let button = BABYLON.GUI.Button.CreateSimpleButton("button.attributes", "Teams");
            button.width = 1;
            button.height = "20px";
            button.color = "white";
            button.background = "black";
            this.buttonpanel.addControl(button);
            button.onPointerUpObservable.add(function () {
                if (!self.teams.opened) {
                    self.teams.open();
                }
            });



            return this;
        }

    }
}