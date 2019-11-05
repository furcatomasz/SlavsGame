import {SocketEvent} from "../../SocketEvent";

export class OnAddDroppedItem extends SocketEvent {

    public listen() {
        let game = this.game;
        this.socket.on('addDroppedItem', data => {
            if(data.itemKey == null) {
                return game.gui.playerLogsQuests.addText('Your inventory is full', 'orange');
            }

            let droppedItem = game.getSceneManger().droppedItems[data.itemKey];
            if(droppedItem) {
                droppedItem.pickItem();
            }
        });

        return this;
    }

}
