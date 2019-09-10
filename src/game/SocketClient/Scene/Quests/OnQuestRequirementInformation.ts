import {SocketEvent} from "../../SocketEvent";

export class OnQuestRequirementInformation extends SocketEvent {

    public listen() {
        let self = this;
        this.socket.on('questRequirementInformation', data => {
            self.game.gui.playerLogsQuests.addText(data);
        });

        return this;
    }

}
