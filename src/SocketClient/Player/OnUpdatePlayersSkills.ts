class OnUpdatePlayersSkills extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let self = this;
        let game = this.game;
        const skillsManager = new Character.Skills.SkillsManager(game);

        this.socket.on('updatePlayerSkill', function (updatedPlayer) {
            let player = null;
            if (updatedPlayer.activePlayer.id == game.player.id) {
                player = game.player;
            } else {
                game.remotePlayers.forEach(function (remotePlayer, key) {
                    if (remotePlayer.id == updatedPlayer.activePlayer.id) {
                        player = game.remotePlayers[key];
                        return;
                    }
                });
            }

            ///action on use skill
            if(updatedPlayer.activeSkill) {
                player.statistics.energy = updatedPlayer.activePlayer.statistics.energy;
                player.refreshEnergyInGui();
                const skill = skillsManager.getSkill(updatedPlayer.activeSkill.type);
                skill.showAnimation(updatedPlayer.activeSkill.duration*1000, updatedPlayer.activeSkill.cooldownTime*1000);
            }

        });

        return this;
    }

}
