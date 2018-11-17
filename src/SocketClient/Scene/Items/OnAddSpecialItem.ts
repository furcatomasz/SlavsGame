class OnAddSpecialItem extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        this.socket.on('addSpecialItem', function (data) {
            game.gui.playerLogsPanel.addText('You earned '+data.value+' ' + data.name + '', 'gold');

        });

        return this;
    }

}
