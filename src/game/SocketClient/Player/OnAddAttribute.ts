import {SocketEvent} from "../SocketEvent";

export class OnAddAttribute extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        this.socket.on('attributeAdded', function (data) {
            game.player.freeAttributesPoints = data.activePlayer.freeAttributesPoints;
            game.player.setCharacterStatistics(data.activePlayer);

            game.gui.attributes.refreshPopup();
            game.player.refreshEnergyInGui();
            game.player.refreshHpInGui();
        });

        return this;
    }

}
