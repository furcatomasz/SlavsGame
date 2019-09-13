import {Game} from "../Game";
import {SlavsLoader} from "../Loader/SlavsLoader";
import {ShowEnemiesSocketEvent} from "./Enemies/ShowEnemiesSocketEvent";
import {UpdateEnemiesSocketEvent} from "./Enemies/UpdateEnemiesSocketEvent";
import {OnOpenChest} from "./Scene/Chests/OnOpenChest";
import {OnRefreshChest} from "./Scene/Chests/OnRefreshChest";
import {OnAddSpecialItem} from "./Scene/Items/OnAddSpecialItem";
import {OnRefreshRandomSpecialItems} from "./Scene/Items/OnRefreshRandomSpecialItems";
import {OnShowDroppedItem} from "./Scene/Items/OnShowDroppedItem";
import {OnQuestRequirementDoneInformation} from "./Scene/Quests/OnQuestRequirementDoneInformation";
import {OnQuestRequirementInformation} from "./Scene/Quests/OnQuestRequirementInformation";
import {OnRefreshQuests} from "./Scene/Quests/OnRefreshQuests";
import {OnChangeScene} from "./Scene/OnChangeScene";
import {OnRefreshGateways} from "./Scene/OnRefreshGateways";
import {OnAddAttribute} from "./Player/OnAddAttribute";
import {OnAddExperience} from "./Player/OnAddExperience";
import {OnNewLvl} from "./Player/OnNewLvl";
import {OnRefreshPlayerEquip} from "./Player/OnRefreshPlayerEquip";
import {OnShowPlayer} from "./Player/OnShowPlayer";
import {OnUpdatePlayers} from "./Player/OnUpdatePlayers";
import {OnUpdatePlayersSkills} from "./Player/OnUpdatePlayersSkills";
import {SocketEvent} from "./SocketEvent";
import {OnRemovePlayer} from "./Player/OnRemovePlayer";
import {SelectCharacter} from "../Scenes/SelectCharacter";

let io = require('socket.io-client');

export class SocketClient {
    protected game: Game;
    public socket;
    public connectionId;

    constructor(game: Game) {
        this.game = game;
    }

    public connect(socketUrl: string, accessToken: string) {
        SlavsLoader.showLoaderWithText('Establishing connection with server...');

        this.socket = io.connect(socketUrl, {query: 'gameToken=' + accessToken});
        this.socket.on('connect_error', () => {
            SlavsLoader.showLoaderWithText('Problem with connection to server');
        });

        this.playerConnected();
    }

    public playerConnected() {
        let self = this;
        let game = this.game;

        const events = [
            new ShowEnemiesSocketEvent(game, this.socket),
            new UpdateEnemiesSocketEvent(game, this.socket),

            new OnOpenChest(game, this.socket),
            new OnRefreshChest(game, this.socket),

            new OnAddSpecialItem(game, this.socket),
            new OnRefreshRandomSpecialItems(game, this.socket),
            new OnShowDroppedItem(game, this.socket),

            new OnQuestRequirementDoneInformation(game, this.socket),
            new OnQuestRequirementInformation(game, this.socket),
            new OnRefreshQuests(game, this.socket),

            new OnChangeScene(game, this.socket),
            new OnRefreshGateways(game, this.socket),

            new OnAddAttribute(game, this.socket),
            new OnAddExperience(game, this.socket),
            new OnNewLvl(game, this.socket),
            new OnRefreshPlayerEquip(game, this.socket),
            new OnRemovePlayer(game, this.socket),
            new OnShowPlayer(game, this.socket),
            new OnUpdatePlayers(game, this.socket),
            new OnUpdatePlayersSkills(game, this.socket),
        ];

        this.socket.on('clientConnected', function (data) {
            self.connectionId = data.connectionId;

            events.forEach((event: SocketEvent) => {
                event.listen();
            });

        });
        // this.socket.emit('changeScene', SelectCharacter.TYPE);
        this.socket.emit('selectCharacter', 1);

        return this;
    }


    // protected updateRooms() {
    //     let game = this.game;
    //     this.socket.on('updateRooms', function (data) {
    //         if(game.gui) {
    //             game.gui.teams.rooms = data;
    //             game.gui.teams.refreshPopup();
    //         }
    //     });
    //
    //     return this;
    // }

    // /**
    //  * @returns {SocketIOClient}
    //  */
    // protected skillsLearned() {
    //     let game = this.game;
    //     let self = this;
    //     this.socket.on('skillLearned', function (data) {
    //         self.characters = data.characters;
    //         game.player.freeSkillPoints = self.characters[self.activeCharacter].freeSkillPoints;
    //         game.player.setCharacterSkills(self.characters[self.activeCharacter].skills);
    //
    //         game.gui.skills.refreshPopup();
    //     });
    //
    //     return this;
    // }
    //
    //
    // protected connectPlayer() {
    //     let game = this.game;
    //     this.socket.on('newPlayerConnected', function (teamPlayer) {
    //         if (game.player) {
    //             let activePlayer = teamPlayer.characters[teamPlayer.activeCharacter];
    //
    //             let player = new Player(game, teamPlayer.id, false, activePlayer);
    //             player.mesh.position = new BABYLON.Vector3(activePlayer.position.x, activePlayer.position.y, activePlayer.position.z);
    //             player.inventory.setItems(activePlayer.items);
    //
    //             game.getSceneManger().remotePlayers.push(player);
    //         }
    //
    //     });
    //
    //     return this;
    // }


}
