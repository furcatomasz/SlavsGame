import {SocketEvent} from "../../SocketEvent";

export class OnQuestRequirementDoneInformation extends SocketEvent {

    public listen() {
        let self = this;
        this.socket.on('questRequirementDoneInformation', data => {
            self.game.gui.playerLogsQuests.addText(data, 'orange');
            self.socket.emit('refreshQuests');
            self.socket.emit('refreshGateways');
        });

        return this;
    }

}
