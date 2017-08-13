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
        var playerName = Game.randomNumber(1,100);

        this.socket.on('clientConnected', function (data) {
            game.remotePlayers = [];
            self.socket.emit('createPlayer', playerName);
            game.player = new Player(game, data.id, playerName, true);
            document.dispatchEvent(game.events.playerConnected);
            self.updatePlayers().removePlayer().connectPlayer();
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
                   enemy.target = enemyData.target;
                   enemy.mesh.position = position;
                   enemy.mesh.rotationQuaternion = rotationQuaternion;
                   enemy.runAnimationWalk(false);
               } else {
                   if (enemyData.type == 'worm') {
                       new Worm(key, data.id, game, position, rotationQuaternion);
                   } else if (enemyData.type == 'bigWorm') {
                       new BigWorm(key, data.id, game, position, rotationQuaternion);
                   }
               }
           });
        });

        return this;
    }

    protected connectPlayer() {
        let game = this.game;

        this.socket.on('newPlayerConnected', function (data) {
            data.forEach(function (socketRemotePlayer) {
                let remotePlayerKey = null;

                if (socketRemotePlayer.id !== game.player.id) {
                    game.remotePlayers.forEach(function (remotePlayer, key) {
                        if (remotePlayer.id == socketRemotePlayer.id) {
                            remotePlayerKey = key;
                            
                            return;
                        }
                    });

                    if(remotePlayerKey === null) {
                        let player = new Player(game, socketRemotePlayer.id, socketRemotePlayer.name, false);
                        game.remotePlayers.push(player);
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

        this.socket.on('updatePlayer', function (updatedPlayer) {
            let remotePlayerKey = null;
            game.remotePlayers.forEach(function (remotePlayer, key) {
                if (remotePlayer.id == updatedPlayer.id) {
                    remotePlayerKey = key;
                    return;
                }
            });

            if (remotePlayerKey != null) {
                let player = game.remotePlayers[remotePlayerKey];

                if (!player.isAnimationEnabled() && !updatedPlayer.attack) {
                    player.runAnimationWalk(false);
                } else if (updatedPlayer.attack == true) {
                    player.runAnimationHit();
                }

                player.mesh.position = new BABYLON.Vector3(updatedPlayer.p.x, updatedPlayer.p.y, updatedPlayer.p.z);
                player.mesh.rotationQuaternion = new BABYLON.Quaternion(updatedPlayer.r.x, updatedPlayer.r.y, updatedPlayer.r.z, updatedPlayer.r.w);
            }

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
                    let player = app.remotePlayers[key];
                    player.removeFromWorld();
                    app.remotePlayers.splice(key, 1);
                }
            });
        });

        return this;
    }


}