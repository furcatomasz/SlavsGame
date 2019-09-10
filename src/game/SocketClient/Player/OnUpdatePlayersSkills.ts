import {SocketEvent} from "../SocketEvent";

export class OnUpdatePlayersSkills extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        this.socket.on('updatePlayerSkill', function (updatedPlayer) {
            let player = null;
            game.remotePlayers.forEach(function (remotePlayer, key) {
                if (remotePlayer.id == updatedPlayer.activePlayer.id) {
                    player = game.remotePlayers[key];
                    return;
                }
            });

            if(updatedPlayer.activeSkill) {
                player.statistics.energy = updatedPlayer.activePlayer.statistics.energy;
                player.refreshEnergyInGui();
                const skill = player.skills[updatedPlayer.activeSkill.type];
                skill.showAnimation(updatedPlayer.activeSkill.duration*1000, updatedPlayer.activeSkill.cooldownTime);
            }

        });

        return this;
    }

}
