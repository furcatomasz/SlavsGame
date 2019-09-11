import {Game} from "../game";
import {PlayerBottomPanel} from "./PlayerBottomPanel";
import {PlayerQuestsPanel} from "./PlayerQuestsPanel";
import {PlayerQuestInformation} from "./PlayerQuestInformation";
import {RoomInformation} from "./RoomInformation";
import {ShowHp} from "./ShowHp";
import {Options} from "./popup/Options";
import {Inventory} from "./popup/Inventory";
import {Attributes} from "./popup/Attributes";
import {AdvancedDynamicTexture} from 'babylonjs-gui';


export class Main {

        public game: Game;
        public texture: AdvancedDynamicTexture;
        public inventory: Inventory;
        public attributes: Attributes;
        public options: Options;
        public playerBottomPanel: PlayerBottomPanel;
        public playerQuestInformation: PlayerQuestInformation;
        public roomInformaton: RoomInformation;
        public playerLogsQuests: PlayerQuestsPanel;
        public characterTopHp: ShowHp;

        constructor(game: Game) {
            this.game = game;
            game.gui = this;
            this.texture = AdvancedDynamicTexture.CreateFullscreenUI('gui.main');
            this.texture.layer.layerMask = 1;

            this.playerBottomPanel = new PlayerBottomPanel(game);
            this.playerLogsQuests = new PlayerQuestsPanel(game);
            this.playerQuestInformation = new PlayerQuestInformation(game);
            this.roomInformaton = new RoomInformation(game);
            this.characterTopHp = new ShowHp(game);

            this.attributes = new Attributes(this);
            this.inventory = new Inventory(this);
            this.options = new Options(this);

        }

    }
