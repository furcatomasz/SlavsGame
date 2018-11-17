class OnRefreshGateways extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        let gateways = [];
        this.socket.on('refreshGateways', function (sceneServerData) {
            gateways.forEach(function(gateway) {
                gateway.particleSystem.dispose();
            });

            let gatewaysFromServer = sceneServerData.gateways;
            gatewaysFromServer.forEach(function(gateway) {
                let gatewayInGame = new Factories.Gateway(game, gateway.objectName, gateway.isActive, gateway.openSceneType, gateway.entranceName);
                gateways.push(gatewayInGame);
            })

        });

        return this;
    }

}
