class OnShowPlayer extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        let self = this;

        this.socket.on('showPlayer', function (playerData) {
            game.player = new Player(game, true, playerData);
            game.remotePlayers.push(game.player);

            document.dispatchEvent(game.events.playerConnected);
        });

        return this;
    }

}
