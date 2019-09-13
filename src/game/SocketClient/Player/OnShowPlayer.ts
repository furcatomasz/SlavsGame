import {SocketEvent} from "../SocketEvent";
import {Player} from "../../Characters/Player";

export class OnShowPlayer extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;

        this.socket.on('showPlayer', function (playerData) {
            game.player = new Player(game, true, playerData);
            game.getSceneManger().remotePlayers.push(game.player);

            document.dispatchEvent(game.events.playerConnected);
        });

        return this;
    }

}
