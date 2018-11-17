class OnQuestRequirementInformation extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let self = this;
        this.socket.on('questRequirementInformation', function (data) {
            self.game.gui.playerLogsQuests.addText(data);
        });

        return this;
    }

}
