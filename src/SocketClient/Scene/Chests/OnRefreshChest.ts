class OnRefreshChest extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        this.socket.on('refreshChests', function (chests) {
            game.chests.forEach(function(chest) {
                chest.hightlightLayer.dispose();
            });
            game.chests = [];

            chests.forEach(function(chest, chestKey) {
                game.chests.push(new Chest(game, chest, chestKey));
            });
        });

        return this;
    }

}
