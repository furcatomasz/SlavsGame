import {SocketEvent} from "../../SocketEvent";

export class OnOpenChest extends SocketEvent {

    public listen() {
        let game = this.game;
        this.socket.on('openChest', data => {
            let opened = data.chest.opened;
            if(!opened) {
                game.gui.playerLogsQuests.addText('You do not have key to open chest', 'red');
            } else {
                let chest = game.getSceneManger().chests[data.chestKey];
                chest.hightlightLayer.dispose();
                chest.mesh.skeleton.beginAnimation('action', false);
                chest.mesh.actionManager.actions.forEach(action => {
                    chest.mesh.actionManager.unregisterAction(action);
                });
            }


        });

        return this;
    }

}
