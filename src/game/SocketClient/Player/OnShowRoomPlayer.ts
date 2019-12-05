import {SocketEvent} from "../SocketEvent";
import {Player} from "../../Characters/Player";

export class OnShowRoomPlayer extends SocketEvent {

    public listen() {
        let game = this.game;

        this.socket.on('showRoomPlayer', function (playerData) {
            let playerExists = false;
            game.getSceneManger().remotePlayers.forEach((player) => {
                if(player.id == playerData.activePlayer.id) {
                    playerExists = true;
                }
            })
            if(!playerExists) {
                game.getSceneManger().remotePlayers.push(new Player(game, false, playerData));
            }
        });

        return this;
    }

}
