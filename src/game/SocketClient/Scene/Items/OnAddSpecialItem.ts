import {SocketEvent} from "../../SocketEvent";

export class OnAddSpecialItem extends SocketEvent {

    public listen() {
        let game = this.game;
        this.socket.on('addSpecialItem', data => {
            game.gui.playerLogsQuests.addText('You earned '+data.value+' ' + data.name + '', 'gold');

        });

        return this;
    }

}
