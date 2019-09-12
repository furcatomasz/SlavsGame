import {Game} from "./game";
import {SlavsLoader} from "./SlavsLoader";
import {ShowEnemiesSocketEvent} from "./SocketClient/Enemies/ShowEnemiesSocketEvent";
import {UpdateEnemiesSocketEvent} from "./SocketClient/Enemies/UpdateEnemiesSocketEvent";
import {OnOpenChest} from "./SocketClient/Scene/Chests/OnOpenChest";
import {OnRefreshChest} from "./SocketClient/Scene/Chests/OnRefreshChest";
import {OnAddSpecialItem} from "./SocketClient/Scene/Items/OnAddSpecialItem";
import {OnRefreshRandomSpecialItems} from "./SocketClient/Scene/Items/OnRefreshRandomSpecialItems";
import {OnShowDroppedItem} from "./SocketClient/Scene/Items/OnShowDroppedItem";
import {OnQuestRequirementDoneInformation} from "./SocketClient/Scene/Quests/OnQuestRequirementDoneInformation";
import {OnQuestRequirementInformation} from "./SocketClient/Scene/Quests/OnQuestRequirementInformation";
import {OnRefreshQuests} from "./SocketClient/Scene/Quests/OnRefreshQuests";
import {OnChangeScene} from "./SocketClient/Scene/OnChangeScene";
import {OnRefreshGateways} from "./SocketClient/Scene/OnRefreshGateways";
import {OnAddAttribute} from "./SocketClient/Player/OnAddAttribute";
import {OnAddExperience} from "./SocketClient/Player/OnAddExperience";
import {OnNewLvl} from "./SocketClient/Player/OnNewLvl";
import {OnRefreshPlayerEquip} from "./SocketClient/Player/OnRefreshPlayerEquip";
import {OnShowPlayer} from "./SocketClient/Player/OnShowPlayer";
import {OnUpdatePlayers} from "./SocketClient/Player/OnUpdatePlayers";
import {OnUpdatePlayersSkills} from "./SocketClient/Player/OnUpdatePlayersSkills";
import {SocketEvent} from "./SocketClient/SocketEvent";
import {OnRemovePlayer} from "./SocketClient/Player/OnRemovePlayer";
import {SelectCharacter} from "./Scenes/SelectCharacter";

let io = require('socket.io-client');

export class SocketIOClient {
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

    /**
     * @returns {SocketIOClient}
     */
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
        this.socket.emit('changeScene', SelectCharacter.TYPE);
        // this.socket.emit('selectCharacter', 1);

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
    //             game.remotePlayers.push(player);
    //         }
    //
    //     });
    //
    //     return this;
    // }


}
