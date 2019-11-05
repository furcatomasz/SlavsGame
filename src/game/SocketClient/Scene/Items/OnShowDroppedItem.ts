import {SocketEvent} from "../../SocketEvent";
import {Item} from "../../../Player/Items/Item";
import {DroppedItem} from "../../../Initializers/DroppedItem";

export class OnShowDroppedItem extends SocketEvent {

    public listen() {
        let game = this.game;
        this.socket.on('showDroppedItem', data => {
            const item = new Item(game, data.item);
            game.getSceneManger().droppedItems[data.itemKey] = (new DroppedItem(game, item, data.position, data.itemKey));
        });

        return this;
    }

}
