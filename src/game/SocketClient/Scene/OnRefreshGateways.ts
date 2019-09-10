import {SocketEvent} from "../SocketEvent";
import {Gateway} from "../../Initializers/Gateways";

export class OnRefreshGateways extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        let gateways = [];
        this.socket.on('refreshGateways', sceneServerData => {
            gateways.forEach(gateway => {
                gateway.particleSystem.dispose();
            });

            let gatewaysFromServer = sceneServerData.gateways;
            gatewaysFromServer.forEach(gateway => {
                let gatewayInGame = new Gateway(game, gateway.objectName, gateway.isActive, gateway.openSceneType, gateway.entranceName);
                gateways.push(gatewayInGame);
            })

        });

        return this;
    }

}
