import {SocketEvent} from "../SocketEvent";
import {Manager} from "../../Scenes/Manager";

export class OnChangeScene extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        this.socket.on('changeScene', sceneType => {
            let scene = Manager.factory(sceneType);

            game.changeScene(scene);
        });

        return this;
    }

}
