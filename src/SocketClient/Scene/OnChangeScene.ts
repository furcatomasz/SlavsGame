class OnChangeScene extends SocketEvent {

    /**
     * @returns {SocketIOClient}
     */
    public listen() {
        let game = this.game;
        this.socket.on('changeScene', function (sceneType) {
            let scene = Scenes.Manager.factory(sceneType);

            game.changeScene(scene);
        });

        return this;
    }

}
