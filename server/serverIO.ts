namespace Server {
    export class IO {
        protected server: SlavsServer;
        protected remotePlayers;

        constructor(server: SlavsServer, serverIO) {

            this.remotePlayers = [];
            let enemies = server.enemies;
            let remotePlayers = this.remotePlayers;
            this.server = server;
            serverIO.on('connection', function (socket) {
                let player = {id: socket.id};
                socket.emit('clientConnected', player);
                ///Player
                socket.on('createPlayer', function (playerName) {
                    player = {
                        id: player.id,
                        p: {
                            x: 3,
                            y: 0.3,
                            z: -10
                        }, r: {
                            x: 0,
                            y: 0,
                            z: 0,
                            w: 0
                        },
                        attack: false,
                        name: playerName
                    };
                    remotePlayers.push(player);

                    socket.broadcast.emit('newPlayerConnected', remotePlayers);

                    socket.on('moveTo', function (data) {
                        player.p = data.p;
                        player.r = data.r;
                        socket.broadcast.emit('updatePlayer', player);
                    });

                    socket.on('attack', function (data) {
                        player.attack = data.attack;
                        socket.broadcast.emit('updatePlayer', player);
                    });

                });

                socket.on('disconnect', function () {
                    remotePlayers.forEach(function (remotePlayer, key) {
                        if (remotePlayer.id == player.id || remotePlayer == null) {
                            remotePlayers.splice(key, 1);
                        }
                    });
                    socket.broadcast.emit('removePlayer', player.id);
                });

                socket.on('changeScenePre', function () {
                    socket.emit('showPlayer', player);

                });

                socket.on('changeScenePost', function (enemyData) {
                    socket.emit('showEnemies', enemies[enemyData.sceneType]);
                });

                ///Enemies
                socket.on('updateEnemy', function (enemyData) {
                    let enemy = enemies[enemyData.sceneType][enemyData.enemyKey];
                    enemy.position = enemyData.position;
                    enemy.rotation = enemyData.rotation;
                    enemy.target = enemyData.target;
                    socket.broadcast.emit('showEnemies', enemies);
                });
            });
        }
    }
}