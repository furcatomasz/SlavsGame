class OnShowDroppedItem extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        this.socket.on('showDroppedItem', function (data) {
            const item = new Items.Item(game, data.item);
            Items.DroppedItem.showItem(game, item, data.position, data.itemKey);
        });

        return this;
    }

}
