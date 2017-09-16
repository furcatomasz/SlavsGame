namespace Server {
    export class IO {
        protected server:SlavsServer;
        protected remotePlayers;

        constructor(server:SlavsServer, serverIO) {

            this.remotePlayers = [];
            let self = this;
            let enemies = server.enemies;
            let remotePlayers = this.remotePlayers;
            this.server = server;
            serverIO.on('connection', function (socket) {
                let player = {
                    id: socket.id,
                    characters: [],
                    itemsDrop: [],
                    activePlayer: 0,
                    activeScene: null,
                    lastPlayerUpdate: 0,
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
                };

                server.ormManager.structure.user.find({email: "furcatomasz@gmail.com"},
                    function (err, user) {
                        if (err) throw err;

                        server.ormManager.structure.player.find({userId: user[0].id}, function (error, players) {
                            if (error) throw error;
                            let itteration = 0;

                            for (let i = 0; i < players.length; i++) {
                                let playerDatabase = players[i];
                                server.ormManager.structure.playerItems.find(
                                    {playerId: playerDatabase.id},
                                    function (error, playerItems) {
                                        if (error) throw error;
                                        playerDatabase.items = playerItems;
                                        itteration++;
                                        if (itteration == players.length) {
                                            player.characters = players;
                                            socket.emit('clientConnected', player);
                                        }
                                    });
                            }

                        });
                    });

                socket.on('selectCharacter', function (selectedCharacter) {
                    player.activePlayer = selectedCharacter;

                    //let playerId = player.characters[selectedCharacter].id;
                    //server.ormManager.structure.playerOnline.exists(
                    //    {playerId: playerId},
                    //    function (error, playerOnlineExists) {
                    //        if (error) throw error;
                    //        if (!playerOnlineExists) {
                    //            self.server.ormManager.structure.playerOnline.create({
                    //                playerId: playerId,
                    //                connectDate: Date.now(),
                    //                activityDate: Date.now(),
                    //            }, function (error) {
                    //                if (error) throw error;
                    //            });
                    //
                    //        }
                    //    });

                    socket.emit('characterSelected', player);

                });

                ///Player
                socket.on('createPlayer', function () {
                    remotePlayers.push(player);

                    socket.broadcast.emit('newPlayerConnected', remotePlayers);
                });

                socket.on('moveTo', function (data) {
                    if ((player.lastPlayerUpdate + 1) < new Date().getTime() / 1000) {
                        player.lastPlayerUpdate = new Date().getTime() / 1000;
                        let playerId = player.characters[player.activePlayer].id;
                        self.server.ormManager.structure.player.get(playerId,
                            function (error, playerDatabase) {
                                playerDatabase.positionX = data.p.x;
                                playerDatabase.positionY = data.p.y;
                                playerDatabase.positionZ = data.p.z;
                                playerDatabase.save();
                            });
                    }

                    player.p = data.p;
                    player.r = data.r;
                    socket.broadcast.emit('updatePlayer', player);
                });

                socket.on('attack', function (data) {
                    player.attack = data.attack;
                    socket.broadcast.emit('updatePlayer', player);
                });

                socket.on('itemEquip', function (item) {
                    let itemId = item.id;
                    let equip = item.equip;
                    self.server.ormManager.structure.playerItems.get(itemId,
                        function (error, itemDatabase) {
                            itemDatabase.equip = (equip) ? 1 : 0;
                            itemDatabase.save(function () {
                                server.ormManager.structure.playerItems.find(
                                    {playerId: player.characters[player.activePlayer].id},
                                    function (error, playerItems) {
                                        if (error) throw error;
                                        player.characters[player.activePlayer].items = playerItems;
                                        socket.broadcast.emit('updateEnemyEquip', player);
                                    });
                            });
                        });
                });

                socket.on('addDoppedItem', function (itemsKey) {
                    let playerId = player.characters[player.activePlayer].id;
                    let itemId = player.itemsDrop[itemsKey];
                    self.server.ormManager.structure.playerItems.create({
                            playerId: playerId,
                            itemId: itemId,
                            improvement: 0,
                            equip: 0
                        },
                        function (error, addedItem) {
                            player.characters[player.activePlayer].items.push(addedItem);
                            socket.emit('updatePlayerEquip', player.characters[player.activePlayer].items);
                        });
                });

                socket.on('getEquip', function (characterKey) {
                    let playerId = player.characters[characterKey].id;
                    self.server.ormManager.structure.playerItems.find({playerId: playerId},
                        function (error, itemsDatabase) {
                            socket.emit('getEquip', itemsDatabase);
                        });
                });

                socket.on('disconnect', function () {
                    //if (player.activePlayer >= 0) {
                    //    let playerId = player.characters[player.activePlayer].id;
                    //    server.ormManager.structure.playerOnline
                    //        .find({playerId: playerId})
                    //        .remove();
                    //}

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

                socket.on('changeScenePost', function (sceneData) {
                    player.activeScene = sceneData.sceneType;

                    socket.emit('showEnemies', enemies[sceneData.sceneType]);
                    socket.emit('newPlayerConnected', remotePlayers);
                });

                ///Enemies
                socket.on('updateEnemy', function (enemyData) {
                    let enemy = enemies[player.activeScene][enemyData.enemyKey];
                    enemy.position = enemyData.position;
                    enemy.rotation = enemyData.rotation;
                    enemy.target = enemyData.target;
                    socket.broadcast.emit('showEnemies', enemies[player.activeScene]);
                });

                socket.on('enemyKill', function (enemyKey) {
                    let enemy = enemies[player.activeScene][enemyKey];
                    let enemyItem = enemy.itemsToDrop[0];
                    let itemDropKey = player.itemsDrop.push(enemyItem) - 1;

                    socket.emit('showDroppedItem', {
                        items: enemyItem,
                        itemsKey: itemDropKey,
                        enemyId: enemyKey
                    });
                });
            });
        }
    }
}