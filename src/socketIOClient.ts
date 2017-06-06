/// <reference path="game.ts"/>
/// <reference path="characters/monsters/monster.ts"/>

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
        this.showEnemies();
    }

    /**
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
            game.player = new Player(game, data.id, playerName, true);
            self.updatePlayers().removePlayer();
        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    protected showEnemies() {
        var game = this.game;

        this.socket.on('showEnemies', function (data) {
            data.forEach(function (enemyData, key) {
                let position = new BABYLON.Vector3(enemyData.position.x, enemyData.position.y, enemyData.position.z);
                let rotationQuaternion = new BABYLON.Quaternion(enemyData.rotation.x, enemyData.rotation.y, enemyData.rotation.z, enemyData.rotation.w);
                let enemy = game.enemies[key];

                if (enemy) {
                    enemy.mesh.position = position;
                    enemy.mesh.rotationQuaternion = rotationQuaternion;
                    enemy.mesh.runAnimationWalk(false);
                } else {
                    if (enemyData.type == 'worm') {
                        new Worm(key, data.id, game, position, rotationQuaternion);
                    }
                }
            });
        });

        return this;
    }

    /**
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
                        player = new Player(game, socketRemotePlayer.id , socketRemotePlayer.name, false);
                        game.remotePlayers.push(player);
                    } else if (remotePlayerKey != null) {
                        player = game.remotePlayers[remotePlayerKey];
                    }

                    if(player) {
                        if (!player.isAnimationEnabled() && !socketRemotePlayer.attack) {
                            player.runAnimationWalk();
                        } else if (socketRemotePlayer.attack == true) {
                            player.runAnimationHit();
                        }

                        player.mesh.position = new BABYLON.Vector3(socketRemotePlayer.p.x, socketRemotePlayer.p.y, socketRemotePlayer.p.z);
                        player.mesh.rotationQuaternion = new BABYLON.Quaternion(socketRemotePlayer.r.x, socketRemotePlayer.r.y, socketRemotePlayer.r.z, socketRemotePlayer.r.w);
                    }
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