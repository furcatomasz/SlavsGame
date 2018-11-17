class OnOpenChest extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        this.socket.on('openChest', function (data) {
            let opened = data.chest.opened;
            if(!opened) {
                game.gui.playerLogsQuests.addText('You do not have key to open chest', 'red');
            } else {
                game.gui.playerLogsQuests.addText('Chest has been opened', 'orange');

                game.player.keys -= 1;
                if(game.gui.inventory.opened) {
                    game.gui.inventory.refreshPopup();
                }

                let chest = game.chests[data.chestKey];
                chest.hightlightLayer.dispose();
                chest.mesh.skeleton.beginAnimation('action', false);
                chest.mesh.actionManager.actions.forEach(function(action) {
                    chest.mesh.actionManager.unregisterAction(action);
                });
            }


        });

        return this;
    }

}
