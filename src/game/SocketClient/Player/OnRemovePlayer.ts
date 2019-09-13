import {SocketEvent} from "../SocketEvent";

export class OnRemovePlayer extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;

        this.socket.on('removePlayer', function (id) {
            game.getSceneManger().remotePlayers.forEach(function (remotePlayer, key) {
                if (remotePlayer.id == id) {
                    let player = game.getSceneManger().remotePlayers[key];
                    player.removeFromWorld();
                    game.getSceneManger().remotePlayers.splice(key, 1);
                }
            });
        });

        return this;
    }

}
