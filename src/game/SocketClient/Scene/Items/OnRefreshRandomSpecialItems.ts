import {SocketEvent} from "../../SocketEvent";
import {RandomSpecialItem} from "../../../Initializers/RandomSpecialItem";

export class OnRefreshRandomSpecialItems extends SocketEvent {

    public listen() {
        let game = this.game;
        this.socket.on('refreshRandomSpecialItems', randomSpecialItems => {

            game.getSceneManger().randomSpecialItems.forEach(randomSpecialItem => {
                randomSpecialItem.mesh.dispose();
                randomSpecialItem.tooltip.container.dispose();
            });
            game.getSceneManger().randomSpecialItems = [];

            randomSpecialItems.forEach((randomSpecialItem, randomSpecialItemKey) => {
                if (!randomSpecialItem.isPicked) {
                    game.getSceneManger().randomSpecialItems.push(new RandomSpecialItem(game, randomSpecialItem, randomSpecialItemKey));
                }
            });
        });

        return this;
    }
}
