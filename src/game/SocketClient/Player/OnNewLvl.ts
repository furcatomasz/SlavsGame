import {SocketEvent} from "../SocketEvent";

export class OnNewLvl extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        this.socket.on('newLvl', function (playerData) {
            game.player.freeAttributesPoints = playerData.freeAttributesPoints;
            game.player.freeSkillPoints = playerData.freeSkillPoints;
            game.player.lvl = playerData.lvl;
            game.player.experiencePercentages = 0;
            game.gui.attributes.refreshPopup();

            game.player.setNewLvl();
        });

        return this;
    }

}
