namespace Server {
    export class IO {
        protected server:SlavsServer;
        protected remotePlayers;
        protected enemies = [];
        protected enemiesIntervals = [];
        protected rooms = [];
        protected monsterServerSocketId;
        protected emitter: EventEmitter;

        constructor(server:SlavsServer, serverIO) {
            this.emitter = app.get('event_emitter');

            this.remotePlayers = [];
            this.enemies = [];
            this.enemiesIntervals = [];
            this.rooms = [];
            let self = this;
            let remotePlayers = this.remotePlayers;
            this.server = server;

            let emitter = this.emitter;
            serverIO.on('connection', function (socket) {
                let isMonsterServer = socket.handshake.query.monsterServer;
                ///Client socket events
                if (!isMonsterServer) {
                    let player = new Server.Player(socket.id);

                    ///create room of user
                    socket.join(socket.id);
                    self.rooms.push({
                        roomId: socket.id,
                        players: [socket.id]
                    });

                    player.activeCharacter = 1;

                    ////CLEAR QUESTS
                    // if(server.ormManager.structure.playerQuest) {
                    //     server.ormManager.structure.playerQuest.allAsync().then(function (playerQuests) {
                    //         for (let playerQuest of playerQuests) {
                    //             playerQuest.remove();
                    //         }
                    //     });
                    // }

                    // player.refreshPlayerData(server, function () {
                    //     socket.emit('clientConnected', player);
                    // });

                    //CHANGE SCENE CHANNELS
                    // socket.on('changeScenePre', function (sceneData) {
                    //     let sceneType = sceneData.sceneType;
                    //     let roomId = player.getActiveCharacter().roomId;
                    //
                    //     player.getActiveCharacter().position = self.getDefaultPositionForScene(sceneType);
                    //     if(server.enemies[sceneType] !== undefined) {
                    //         self.enemies[roomId] = JSON.parse(JSON.stringify(server.enemies[sceneType]));
                    //
                    //         serverIO.to(self.monsterServerSocketId).emit('createEnemies', {
                    //             enemies: self.getEnemiesInRoom(roomId),
                    //             roomId: roomId,
                    //         });
                    //     }
                    //     socket.emit('showPlayer', player);
                    //
                    // });
                    //
                    // socket.on('changeScenePost', function (sceneData) {
                    //     player.activeScene = sceneData.sceneType;
                    //
                    //     serverIO.to(self.monsterServerSocketId).emit('showPlayer', player);
                    //     socket.emit('showEnemies', self.enemies[player.getActiveCharacter().roomId]);
                    // });
                    /////////////

                    // socket.on('createPlayer', function () {
                    //     let character = player.getActiveCharacter();
                    //     if (character) {
                    //         remotePlayers.push(player);
                    //         character.position = self.getDefaultPositionForScene(2);
                    //
                    //         serverIO.in(character.roomId).emit('newPlayerConnected', player);
                    //         serverIO.to(self.monsterServerSocketId).emit('createRoom', player.getActiveCharacter().roomId);
                    //     }
                    // });

                    // socket.on('setTargetPoint', function (targetPoint) {
                    //     let character = player.getActiveCharacter();
                    //     character.attack = null;
                    //     character.targetPoint = targetPoint.position;
                    //
                    //     serverIO.in(character.roomId).emit('updatePlayer', character);
                    //     serverIO.to(self.monsterServerSocketId).emit('updatePlayer', character);
                    // });

                    // socket.on('attack', function (data) {
                    //
                    //     if (player.lastPlayerAttack > new Date().getTime() - 1000) {
                    //         return;
                    //     }
                    //     player.lastPlayerAttack = new Date().getTime();
                    //
                    //     let activeCharacter = player.getActiveCharacter();
                    //
                    //     activeCharacter.attack = data.attack;
                    //     activeCharacter.targetPoint = data.targetPoint;
                    //
                    //     self.enemies[activeCharacter.roomId].forEach(function (enemy, enemyKey) {
                    //         enemy.availableAttacksFromCharacters.forEach(function (isAtacked, characterId) {
                    //             if (isAtacked === true) {
                    //                 if (activeCharacter.id == characterId) {
                    //                     let attackCharacter = activeCharacter;
                    //                     let roomId = activeCharacter.roomId;
                    //                     let damage = attackCharacter.statistics.getDamage();
                    //                     enemy.statistics.hp -= damage;
                    //                     let emitObject = {
                    //                         enemy: enemy,
                    //                         enemyKey: enemyKey,
                    //                         roomId: roomId
                    //                     };
                    //                     console.log('SOCKET - Attack event');
                    //                     serverIO.in(roomId).emit('updateEnemy', emitObject);
                    //                     serverIO.to(self.monsterServerSocketId).emit('updateEnemy', emitObject);
                    //
                    //                     ///enemy is killed
                    //                     if (enemy.statistics.hp <= 0) {
                    //                         emitter.emit('monster_kill', enemy, player.getActiveCharacter(), socket);
                    //
                    //                         ///add special item
                    //                         let specialItemFlat = enemy.specialItemsToDrop[0];
                    //                         let specialItemManager = new SpecialItems.SpecialItemsManager();
                    //                         let specialItem = specialItemManager.getSpecialItem(specialItemFlat.type, specialItemFlat.value);
                    //                         if(specialItem) {
                    //                             serverIO.emit('addSpecialItem', specialItem);
                    //                             specialItem.addItem(player.getActiveCharacter(), self.server.ormManager);
                    //                         }
                    //
                    //                         enemy.availableAttacksFromCharacters = [];
                    //                         let enemyItem = enemy.itemsToDrop[0];
                    //                         let earnedExperience = enemy.experience;
                    //
                    //                         if(enemyItem) {
                    //                             let itemDropKey = player.getActiveCharacter().itemsDrop.push(enemyItem) - 1;
                    //                             let itemManager = new Items.ItemManager();
                    //                             let item = itemManager.getItemUsingId(enemyItem, 0);
                    //
                    //                             socket.emit('showDroppedItem', {
                    //                                 item: item,
                    //                                 itemKey: itemDropKey,
                    //                                 enemyId: enemyKey
                    //                             });
                    //                         }
                    //                         ///clear attack interval
                    //                         if(self.enemiesIntervals[roomId][enemyKey]) {
                    //                             clearInterval(self.enemiesIntervals[roomId][enemyKey]);
                    //                             self.enemiesIntervals[roomId][enemyKey] = null;
                    //                         }
                    //
                    //                         player.getActiveCharacter().addExperience(server, socket, earnedExperience);
                    //                     }
                    //
                    //                     console.log('Attack character ID:' + characterId + ' on enemy with dmg' + damage);
                    //                 }
                    //             }
                    //         });
                    //     });
                    //
                    //     serverIO.in(activeCharacter.roomId).emit('updatePlayer', activeCharacter);
                    //     serverIO.to(self.monsterServerSocketId).emit('updatePlayer', activeCharacter);
                    // });

                    socket.on('disconnect', function () {
                        //if (player.activeCharacter >= 0) {
                        //    let playerId = player.characters[player.activeCharacter].id;
                        //    server.ormManager.structure.playerOnline
                        //        .find({player_id: playerId})
                        //        .remove();
                        //}

                        let roomId = player.getActiveCharacter().roomId;
                        remotePlayers.forEach(function (remotePlayer, key) {
                            if (remotePlayer.id == player.id || remotePlayer == null) {
                                remotePlayers.splice(key, 1);
                            }
                        });

                        //if player is target of enemies, clear that
                        if (self.enemies[roomId] !== undefined) {
                            let characterId = player.getActiveCharacter().id;

                            self.enemies[roomId].forEach(function (enemy, key) {
                                if (enemy.target == characterId) {
                                    enemy.target = null;
                                    let emiteData = {
                                        enemy: enemy,
                                        enemyKey: key,
                                        roomId: roomId
                                    };
                                    if(self.enemiesIntervals[roomId][key]) {
                                        clearInterval(self.enemiesIntervals[roomId][key]);
                                        self.enemiesIntervals[roomId][key] = null;
                                    }

                                    serverIO.to(self.monsterServerSocketId).emit('updateEnemy', emiteData);
                                    serverIO.in(roomId).emit('updateEnemy', emiteData);
                                }
                            });
                        }


                        socket.broadcast.emit('removePlayer', player.id);

                        //clear data in rooms
                        for (let roomKey in self.rooms) {
                            let room = self.rooms[roomKey];
                            if(room.roomId == roomId) {
                                room.players.forEach(function(socketId, socketIdKey) {
                                    let roomPlayersLength = room.players.length;
                                    if(socketId == player.id) {
                                        delete room.players[socketIdKey];

                                        if (!(roomPlayersLength-1)) {
                                            console.log('SOCKET - delete empty room -'+ room.roomId);
                                            self.rooms.splice(roomKey, 1);
                                            socket.broadcast.emit('updateRooms', self.rooms);
                                        }
                                    }
                                });
                            }
                        }
                    });

                    self
                        .characterEvents(socket, player)
                        .questsEvents(socket, player)
                        .roomsEvents(socket, player, serverIO)
                        .sceneEvents(socket, player);

                } else {
                    ///Monster socket events
                    self.monsterServerSocketId = socket.id;

                    socket.on('updatePlayerPosition', function (updatedPlayer) {
                        self.remotePlayers.forEach(function (remotePlayer, remotePlayerKey) {
                            if (remotePlayer.id == updatedPlayer.playerSocketId) {
                                let remotePlayer = self.remotePlayers[remotePlayerKey];
                                remotePlayer.getActiveCharacter().position = updatedPlayer.position;

                                socket.broadcast.emit('updatePlayer', remotePlayer);
                                return;
                            }
                        });
                    });

                    ///Enemies
                    // socket.on('setEnemyTarget', function (data) {
                    //     let enemy = self.enemies[data.roomId][data.enemyKey];
                    //     enemy.position = data.position;
                    //     enemy.target = data.target;
                    //     enemy.attack = data.attack;
                    //     enemy.availableAttacksFromCharacters[data.target] = data.attack;
                    //
                    //     if(!self.enemiesIntervals[data.roomId]) {
                    //         self.enemiesIntervals[data.roomId] = [];
                    //     }
                    //
                    //     ///Enemy attack
                    //     if(enemy.attack) {
                    //         let enemeyAttackFunction = function () {
                    //             self.remotePlayers.forEach(function (remotePlayer, remotePlayerKey) {
                    //                 let activeCharacter = remotePlayer.getActiveCharacter();
                    //                 enemy.availableAttacksFromCharacters.forEach(function (isAtacked, characterId) {
                    //                     if (isAtacked === true) {
                    //                         if (activeCharacter.id == characterId) {
                    //                             let damage = enemy.statistics.damage;
                    //                             activeCharacter.statistics.hp -= damage;
                    //                             console.log('SOCKET - Enemy '+enemy.name+' attack on character '+activeCharacter.name+' DMG: '+damage);
                    //
                    //                             serverIO.in(activeCharacter.roomId).emit('updatePlayer', activeCharacter);
                    //                         }
                    //                     }
                    //                 });
                    //             });
                    //
                    //             socket.in(data.roomId).emit('updateEnemy', {
                    //                 enemy: enemy,
                    //                 enemyKey: data.enemyKey
                    //             });
                    //         };
                    //
                    //         enemeyAttackFunction();
                    //         self.enemiesIntervals[data.roomId][data.enemyKey] = setInterval(enemeyAttackFunction, 1500);
                    //     } else {
                    //         if(self.enemiesIntervals[data.roomId][data.enemyKey]) {
                    //             clearInterval(self.enemiesIntervals[data.roomId][data.enemyKey]);
                    //             self.enemiesIntervals[data.roomId][data.enemyKey] = null;
                    //         }
                    //         socket.in(data.roomId).emit('updateEnemy', {
                    //             enemy: enemy,
                    //             enemyKey: data.enemyKey
                    //         });
                    //     }
                    // });
                }

            });
        }

        /**
         *
         * @param socket
         * @param player
         */
        protected sceneEvents(socket, player) {
            socket.on('refreshGateways', function () {
                let character = player.getActiveCharacter();
                let sceneType = player.activeScene;
                let scene = Server.Scenes.Manager.factory(sceneType);
                scene.refreshGatewaysData(character);

                socket.emit('refreshGateways', scene);
            });

            socket.on('refreshQuests', function () {
                let character = player.getActiveCharacter();
                let sceneType = player.activeScene;
                let scene = Server.Scenes.Manager.factory(sceneType);

                socket.emit('refreshQuests', scene);
            });

            socket.on('changeScene', function (sceneType) {
                let scene = Server.Scenes.Manager.factory(sceneType);

                socket.emit('changeScene', scene);
            });
            
            return this;
        }

        /**
         * @param socket
         * @param player
         * @returns {Server.IO}
         */
        protected characterEvents(socket, player) {
            let self = this;
            socket.on('addDoppedItem', function (itemsKey) {
                let playerId = player.characters[player.activeCharacter].id;
                let itemId = player.getActiveCharacter().itemsDrop[itemsKey];
                let itemManager = new Items.ItemManager();
                let item = itemManager.getItemUsingId(itemId, 0);

                if (itemId) {
                    self.server.ormManager.structure.playerItems.create({
                            player_id: playerId,
                            itemId: itemId,
                            improvement: 0,
                            equip: 0
                        },
                        function (error, addedItem) {
                            player.getActiveCharacter().inventory.items.push(item);
                            socket.emit('updatePlayerEquip', player.getActiveCharacter().inventory.items);
                        });
                }
            });

            // socket.on('addAttribute', function (attribute) {
            //     let type = attribute.type;
            //
            //     self.server.ormManager.structure.player.oneAsync({
            //         id: player.characters[player.activeCharacter].id,
            //     }).then(function (playerDatabase) {
            //         if (playerDatabase.freeAttributesPoints) {
            //             self.server.ormManager.structure.playerAttributes
            //                 .oneAsync({player_id: playerDatabase.id})
            //                 .then(function (attributes) {
            //                     new Promise(function (resolveFind) {
            //                         if (!attributes) {
            //                             self.server.ormManager.structure.playerAttributes.create({player_id: playerDatabase.id}, function (err, insertedAttributes) {
            //                                 attributes = insertedAttributes;
            //                                 resolveFind();
            //                             });
            //                         } else {
            //                             resolveFind();
            //                         }
            //
            //
            //                     }).then(function (resolve) {
            //
            //                         attributes.save();
            //                         playerDatabase.freeAttributesPoints -= 1;
            //                         playerDatabase.save();
            //
            //
            //
            //                     });
            //                 });
            //         }
            //     });
            // });

            socket.on('learnSkill', function (skill) {
                let skillType = skill.skillType;
                let skillPowerType = skill.powerType;
                let isCreated = false;

                self.server.ormManager.structure.player.oneAsync({
                    id: player.characters[player.activeCharacter].id,
                }).then(function (playerDatabase) {
                    if (playerDatabase.freeSkillPoints) {
                        self.server.ormManager.structure.playerSkills
                            .oneAsync({
                                player_id: playerDatabase.id,
                                skillType: skillType
                            })
                            .then(function (skillDatabase) {
                                new Promise(function (resolveFind) {
                                    if (!skillDatabase) {
                                        isCreated = true;
                                        self.server.ormManager.structure.playerSkills.create({
                                            player_id: playerDatabase.id,
                                            skillType: skillType
                                        }, function (err, insertedSkill) {
                                            skillDatabase = insertedSkill;
                                            resolveFind();
                                        });
                                    } else {
                                        resolveFind();
                                    }


                                }).then(function (resolve) {
                                    if (!isCreated) {
                                        switch (skillPowerType) {
                                            case 1:
                                                skillDatabase.damage += 1;
                                                break;
                                            case 2:
                                                skillDatabase.cooldown += 1;
                                                break;
                                            case 3:
                                                skillDatabase.stock += 1;
                                                break;
                                        }
                                        skillDatabase.save();
                                    }
                                    playerDatabase.freeSkillPoints -= 1;
                                    playerDatabase.save();

                                    player.refreshPlayerData(server, function () {
                                        socket.emit('skillLearned', player);
                                    });

                                });
                            });
                    }
                });
            });

            socket.on('selectCharacter', function (selectedCharacter) {
                player.activeCharacter = selectedCharacter;

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

            socket.on('itemEquip', function (item) {
                let itemId = item.id;
                let equip = item.equip;
                self.server.ormManager.structure.playerItems.oneAsync({
                    id: itemId,
                    player_id: player.characters[player.activeCharacter].id
                }).then(function (itemDatabase) {
                    itemDatabase.equip = (item.equip) ? 1 : 0;
                    itemDatabase.saveAsync().then(function () {
                        server.ormManager.structure.playerItems.findAsync(
                            {player_id: player.characters[player.activeCharacter].id}).then(
                            function (playerItems) {
                                player.characters[player.activeCharacter].items = playerItems;
                                socket.broadcast.emit('updateEnemyEquip', player);
                            });
                    });
                });

            });

            return this;
        }

        /**
         *
         * @param socket
         * @param player
         * @returns {Server.IO}
         */
        protected questsEvents(socket, player:Player) {
            // socket.on('getQuests', function () {
            //     let emitData = {
            //         quests: self.server.quests,
            //         playerQuests: null,
            //         playerRequirements: null
            //     };
            //     self.server.ormManager.structure.playerQuest.findAsync({
            //         player: player.getActiveCharacter().id,
            //     }).then(function (quest) {
            //
            //         emitData.playerQuests = quest;
            //
            //         self.server.ormManager.structure.playerQuestRequirements.findAsync({
            //             player: player.getActiveCharacter().id,
            //         }).then(function (questsRequirements) {
            //             emitData.playerRequirements = questsRequirements;
            //             socket.emit('quests', emitData);
            //
            //         });
            //     });
            // });
            //
            // socket.on('acceptQuest', function (quest) {
            //     let questId = quest.id;
            //     let playerId = player.characters[player.activeCharacter].id;
            //
            //     server.ormManager.structure.playerQuest.oneAsync({
            //         player_id: playerId,
            //         questId: questId
            //     }).then(function (quest) {
            //         if (!quest) {
            //             server.ormManager.structure.playerQuest.createAsync({
            //                 questId: questId,
            //                 date: 0,
            //                 player_id: playerId
            //             }).then(function (quest) {
            //                 socket.emit('refreshQuestsStatus', quest);
            //             });
            //         }
            //     });
            // });

            return this;
        }

        /**
         *
         * @param socket
         * @param player
         * @param serverIO
         * @returns {Server.IO}
         */
        protected roomsEvents(socket, player:Player, serverIO) {
            let self = this;
            socket.on('getRooms', function () {
                socket.emit('updateRooms', self.rooms );
                socket.broadcast.emit('updateRooms', self.rooms );
            });

            socket.on('joinToRoom', function (roomId) {
                let roomKey = null;
                let oldRoomId = player.getActiveCharacter().roomId;

                self.rooms.forEach(function(room, key) {
                   if(roomId == room.roomId) {
                       roomKey = key;
                   }
                });

                if (roomKey !== null && roomId != oldRoomId) {
                    self.rooms[roomKey].players.push(player.id);
                    serverIO.to(self.monsterServerSocketId).emit('removePlayer', player.getActiveCharacter().connectionId);

                    //clear data in rooms
                    for (let roomKey in self.rooms) {
                        let room = self.rooms[roomKey];
                        if(room.roomId == oldRoomId) {
                            room.players.forEach(function(socketId, socketIdKey) {
                                let roomPlayersLength = room.players.length;
                                if(socketId == player.id) {
                                    delete room.players[socketIdKey];

                                    if (!(roomPlayersLength-1)) {
                                        console.log('SOCKET - delete empty room -'+ room.roomId);
                                        self.rooms.splice(roomKey, 1);
                                    }
                                }
                            });
                        }
                    }

                    //if player is target of enemies, clear that
                    if (self.enemies[oldRoomId] !== undefined) {
                        self.enemies[oldRoomId].forEach(function (enemy, key) {
                            if (enemy.target == player.id) {
                                enemy.target = null;

                                let emiteData = {
                                    enemy: enemy,
                                    enemyKey: key,
                                    roomId: roomId
                                };
                                serverIO.in(roomId).emit('updateEnemy', emiteData);
                                serverIO.to(self.monsterServerSocketId).emit('updateEnemy', emiteData);
                            }
                        });
                    }

                    socket.join(roomId);
                    player.getActiveCharacter().roomId = roomId;
                    socket.emit('reloadScene');
                }

            });

            return this;

        }

        /**
         * @param roomId
         * @returns {Monster}
         */
        protected getEnemiesInRoom(roomId) {
            return this.enemies[roomId];
        }

        /**
         * @param roomId
         * @param enemyId
         * @returns Monster
         */
        protected getEnemyFromRoom(roomId, enemyId) {
            return this.getEnemiesInRoom(roomId)[enemyId];
        }

        protected getDefaultPositionForScene(sceneType) {
            let position = null
            if (sceneType == 1) {
                position = {
                    x: 0,
                    y: 0,
                    z: 0
                };
            } else if (sceneType == 2) {
                position = {
                    x: 145,
                    y: 0,
                    z: -53
                };
                //Castle entrace
                position = {
                    x: 332,
                    y: 0,
                    z: -51
                };
                //Cave
                position = {
                    x: -8,
                    y: 0,
                    z: 160
                };

                position = {
                    x: 0,
                    y: 0,
                    z: 0
                };
            } else if (sceneType == 3) {
                position = {
                    x: 0,
                    y: 0,
                    z: 0
                };
            }

            return position;
        };

    }
}