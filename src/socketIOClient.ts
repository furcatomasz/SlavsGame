class SocketIOClient {
    protected game:Game;
    public socket;

    constructor(socketUrl:string, game:Game) {
        var self = this;
        this.game = game;
        this.socket = io.connect(socketUrl, {player: game.player});

        self.playerConnected();
    }

    /**
     *
     * @returns {SocketIOClient}
     */
    protected playerConnected() {
        var self = this;
        var game = this.game;

        this.socket.on('clientConnected', function (data) {
            game.player.id = data.id;
            self.socket.emit('createPlayer', 'testTOmek');
            game.remotePlayers = [];

            self.updatePlayers().removePlayer();
        });

        return this;
    }

    /**
     *
     * @returns {SocketIOClient}
     */
    protected updatePlayers() {
        var game = this.game;

        this.socket.on('updatePlayers', function (data) {
            var remotePlayerKey = null;
            var player;
            data.forEach(function (socketRemotePlayer) {
                if (socketRemotePlayer.id !== game.player.id) {
                    game.remotePlayers.forEach(function (remotePlayer, key) {
                        if (remotePlayer.id == socketRemotePlayer.id) {
                            remotePlayerKey = key;
                            return;
                        }
                    });

                    if (remotePlayerKey === null) {
                        player = new Player(game, socketRemotePlayer.id , socketRemotePlayer.name);
                        game.remotePlayers.push(player);
                    } else {
                        player = game.remotePlayers[remotePlayerKey];
                    }
console.log(socketRemotePlayer);
                    player.character.mesh.position = new BABYLON.Vector3(socketRemotePlayer.p.x, socketRemotePlayer.p.y, socketRemotePlayer.p.z);
                    player.character.mesh.rotation = new BABYLON.Vector3(socketRemotePlayer.r.x, socketRemotePlayer.r.y, socketRemotePlayer.r.z);

                }
            })
        });

        return this;
    }

    /**
     *
     * @returns {SocketIOClient}
     */
    protected removePlayer() {
        var app = this.game;

        this.socket.on('removePlayer', function (id) {
            app.remotePlayers.forEach(function (remotePlayer, key) {
                if (remotePlayer.id == id) {
                    app.remotePlayers.splice(key, 1);
                }
            });
        });

        return this;
    }


}