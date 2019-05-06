class OnRefreshChest extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        this.socket.on('refreshChests', function (chests) {
            game.getSceneManger().chests.forEach(function(chest) {
                chest.hightlightLayer.dispose();
            });
            game.getSceneManger().chests = [];

            chests.forEach(function(chest, chestKey) {
                game.getSceneManger().chests.push(new Chest(game, chest, chestKey));
            });
        });

        return this;
    }

}
