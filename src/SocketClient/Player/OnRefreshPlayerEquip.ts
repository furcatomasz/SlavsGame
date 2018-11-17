class OnRefreshPlayerEquip extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;

        this.socket.on('updatePlayerEquip', function (updatedPlayer) {
            let player = null;

            if (updatedPlayer.activePlayer.id == game.player.id) {
                player = game.player;
                game.player.setCharacterStatistics(updatedPlayer.activePlayer);
                game.gui.attributes.refreshPopup();
            } else {
                game.remotePlayers.forEach(function (remotePlayer, key) {
                    if (remotePlayer.id == updatedPlayer.activePlayer.id) {
                        player = game.remotePlayers[key];
                        return;
                    }
                });
            }


            player.inventory.removeItems();
            player.inventory.setItems(updatedPlayer.activePlayer.items);
        });

        return this;
    }

}
