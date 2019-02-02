class OnRefreshQuests extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        let self = this;
        this.socket.on('refreshQuests', function (data) {
            game.quests.forEach(function(quest) {
                quest.dispose();
            });
            game.quests = [];

            let activeQuest = data.sessionData.activeRoom.activeQuest;
            data.quests.forEach(function(quest) {
                game.quests.push(new Factories.Quests(game, quest, activeQuest));
            });

            self.socket.emit('refreshGateways');

            if(activeQuest) {
                self.game.gui.playerQuestInformation.addQuest(activeQuest);
            }
        });

        return this;
    }

}
