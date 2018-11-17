class OnRefreshRandomSpecialItems extends SocketEvent {
    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        this.socket.on('refreshRandomSpecialItems', function (randomSpecialItems) {

            game.randomSpecialItems.forEach(function (randomSpecialItem) {
                randomSpecialItem.mesh.dispose();
            });
            game.randomSpecialItems = [];

            randomSpecialItems.forEach(function (randomSpecialItem, randomSpecialItemKey) {
                if (!randomSpecialItem.picked) {
                    game.randomSpecialItems.push(new RandomSpecialItem(game, randomSpecialItem, randomSpecialItemKey));
                }
            });
        });

        return this;
    }
}
