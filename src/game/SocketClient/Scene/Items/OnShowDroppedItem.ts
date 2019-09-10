import {SocketEvent} from "../../SocketEvent";
import {Item} from "../../../Player/Items/Item";
import {DroppedItem} from "../../../Player/Items/DroppedItem";

export class OnShowDroppedItem extends SocketEvent {

    public listen() {
        let game = this.game;
        this.socket.on('showDroppedItem', data => {
            const item = new Item(game, data.item);
            DroppedItem.showItem(game, item, data.position, data.itemKey);
        });

        return this;
    }

}
