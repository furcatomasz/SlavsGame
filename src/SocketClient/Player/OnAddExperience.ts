class OnAddExperience extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        this.socket.on('addExperience', function (data) {
            game.player.addExperience(data.experience, data.experiencePercentages);
            game.gui.playerLogsPanel.addText('You earned ' + data.experience + ' experience.', 'gold');

        });

        return this;
    }

}
