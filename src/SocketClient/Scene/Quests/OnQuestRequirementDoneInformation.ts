class OnQuestRequirementDoneInformation extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let self = this;
        this.socket.on('questRequirementDoneInformation', function (data) {
            self.game.gui.playerLogsQuests.addText(data, 'orange');
            self.socket.emit('refreshQuests');
            self.socket.emit('refreshGateways');
        });

        return this;
    }

}
