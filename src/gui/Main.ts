/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../game.ts"/>
namespace GUI {
    export class Main {

        public game: Game;
        public player: Player;
        protected texture: BABYLON.GUI.AdvancedDynamicTexture;

        public inventory: GUI.Inventory;
        public attributes: GUI.Attributes;
        public skills: GUI.Skills;
        public playerQuests: GUI.PlayerQuests;
        public quest: GUI.Quest;
        public teams: GUI.Rooms;
        public playerBottomPanel: GUI.PlayerBottomPanel;
        public playerLogsPanel: GUI.PlayerLogsPanel;
        public playerLogsQuests: GUI.PlayerLogsPanel;
        public characterTopHp: GUI.ShowHp;

        protected buttonpanel: BABYLON.GUI.StackPanel;

        constructor(game: Game, player: Player) {
            this.game = game;
            this.player = player;
            this.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.main');
            this.playerBottomPanel = new GUI.PlayerBottomPanel(game);
            this.playerLogsPanel = new GUI.PlayerLogsPanel(game);
            this.playerLogsQuests = new GUI.PlayerQuestsPanel(game);
            this.characterTopHp = new GUI.ShowHp();

            this
                .initInventory()
                .initAttributes()
                .initSkills()
                .initFullscreen()
                .initQuests()
                .initTeams();
        }

        protected initInventory() {
            let self = this;
            this.inventory = new GUI.Inventory(this);
            let buttonPanel = new BABYLON.GUI.StackPanel();
            buttonPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            buttonPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            buttonPanel.width = 0.2;
            buttonPanel.isPointerBlocker = true;
            this.buttonpanel = buttonPanel;
            this.texture.addControl(buttonPanel);

            let button = BABYLON.GUI.Button.CreateSimpleButton("button.inventory", "Inventory");
            button.width = 1;
            button.height = "20px";
            button.color = "white";
            button.background = "black";
            button.isPointerBlocker = true;

            buttonPanel.addControl(button);
            button.onPointerUpObservable.add(function () {
                if (!self.inventory.opened) {
                    self.inventory.open();
                }
            });



            return this;
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

        protected initAttributes() {
            let self = this;
            this.attributes = new GUI.Attributes(this);

            let button = BABYLON.GUI.Button.CreateSimpleButton("button.attributes", "Attributes");
            button.width = 1;
            button.height = "20px";
            button.color = "white";
            button.background = "black";
            this.buttonpanel.addControl(button);
            button.onPointerUpObservable.add(function () {
                if (!self.attributes.opened) {
                    self.attributes.open();
                }
            });

            return this;
        }

        protected initSkills() {
            let self = this;
            this.skills = new GUI.Skills(this);

            let button = BABYLON.GUI.Button.CreateSimpleButton("button.attributes", "Skills");
            button.width = 1;
            button.height = "20px";
            button.color = "white";
            button.background = "black";
            this.buttonpanel.addControl(button);
            button.onPointerUpObservable.add(function () {
                if (!self.skills.opened) {
                    self.skills.open();
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