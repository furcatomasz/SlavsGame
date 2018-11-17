class OnShowPlayer extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        let self = this;

        this.socket.on('showPlayer', function (playerData) {
            game.player = new Player(game, true, playerData);
            document.dispatchEvent(game.events.playerConnected);

            let octree = game.sceneManager.octree;
            if (octree) {
                octree.dynamicContent.push(game.player.mesh);
                octree.dynamicContent.push(game.controller.ball);
                game.player.inventory.getEquipedItems().forEach(function (item) {
                    if (item) {
                        game.sceneManager.octree.dynamicContent.push(item.mesh);
                    }
                });
            }
        });

        return this;
    }

}
