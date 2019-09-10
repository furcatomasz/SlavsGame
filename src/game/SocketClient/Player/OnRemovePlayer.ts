import {SocketEvent} from "../SocketEvent";

export class OnRemovePlayer extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;

        this.socket.on('removePlayer', function (id) {
            game.remotePlayers.forEach(function (remotePlayer, key) {
                if (remotePlayer.id == id) {
                    let player = game.remotePlayers[key];
                    player.removeFromWorld();
                    game.remotePlayers.splice(key, 1);
                }
            });
        });

        return this;
    }

}
