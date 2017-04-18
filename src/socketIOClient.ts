class SocketIOClient {
    protected game:Game;
    public socket;

    constructor(game:Game) {
        this.game = game;
    }
    
    public connect(socketUrl: string)
    {
        this.socket = io.connect(socketUrl, {player: this.game.player});
    
        this.playerConnected();
    }

    /**
     *
     * @returns {SocketIOClient}
     */
    protected playerConnected() {
        var self = this;
        var game = this.game;
        var playerName = 'test';

        this.socket.on('clientConnected', function (data) {
            //TODO: promopt player name
            self.socket.emit('createPlayer', playerName);
            game.remotePlayers = [];
            game.player = new Player(game, data.id, playerName);
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

                    player.character.mesh.position = new BABYLON.Vector3(socketRemotePlayer.p.x, socketRemotePlayer.p.y, socketRemotePlayer.p.z);
                    player.character.mesh.rotationQuaternion = new BABYLON.Quaternion(socketRemotePlayer.r.x, socketRemotePlayer.r.y, socketRemotePlayer.r.z, socketRemotePlayer.r.w);

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