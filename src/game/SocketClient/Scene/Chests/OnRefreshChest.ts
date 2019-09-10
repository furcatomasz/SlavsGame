import {SocketEvent} from "../../SocketEvent";
import {Chest} from "../../../Initializers/Chest";

export class OnRefreshChest extends SocketEvent {

    public listen() {
        let game = this.game;
        this.socket.on('refreshChests', chests => {
            game.getSceneManger().chests.forEach(chest => {
                chest.hightlightLayer.dispose();
            });
            game.getSceneManger().chests = [];

            chests.forEach((chest, chestKey) => {
                game.getSceneManger().chests.push(new Chest(game, chest, chestKey));
            });
        });

        return this;
    }

}
