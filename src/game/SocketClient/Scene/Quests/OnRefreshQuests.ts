import {SocketEvent} from "../../SocketEvent";
import {Quests} from "../../../Initializers/Quests";

export class OnRefreshQuests extends SocketEvent {

    public listen() {
        let game = this.game;
        let self = this;
        this.socket.on('refreshQuests', data => {
            game.getSceneManger().quests.forEach(quest => {
                quest.dispose();
            });
            game.getSceneManger().quests = [];

            let activeQuest = data.activeQuest;
            data.quests.forEach(quest => {
                game.getSceneManger().quests.push(new Quests(game, quest, activeQuest));
            });

            self.socket.emit('refreshGateways');

            if (activeQuest) {
                self.game.gui.playerQuestInformation.addQuest(activeQuest);
            }
        });

        return this;
    }

}
