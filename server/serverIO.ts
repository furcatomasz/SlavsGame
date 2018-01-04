namespace Server {
    export class IO {
        protected server: SlavsServer;
        protected remotePlayers;

        constructor(server: SlavsServer, serverIO) {
            this.remotePlayers = [];
            let self = this;
            let enemies = server.enemies;
            let remotePlayers = this.remotePlayers;
            this.server = server;
            serverIO.on('connection', function (socket) {
                let isMonsterServer = socket.handshake.query.monsterServer;
                let player = new Server.Player(socket.id);
                socket.join(socket.id);

                var roster =  serverIO.sockets.adapter.rooms[socket.id].sockets;
                console.log(roster);
                player.activeCharacter = 1;
                if(!isMonsterServer) {
                    ////CLEAR QUESTS
                    server.ormManager.structure.playerQuest.allAsync().then(function (playerQuests) {
                        for (let playerQuest of playerQuests) {
                            playerQuest.remove();
                        }
                    });

                    player.refreshPlayerData(server, function() {
                        socket.emit('clientConnected', player);
                    });
                } else {
                    player.activeScene = 2;
                    socket.emit('showEnemies', enemies[player.activeScene]);

                    socket.on('updatePlayerPosition', function (updatedPlayer) {
                        self.remotePlayers.forEach(function(remotePlayer, remotePlayerKey) {
                           if(remotePlayer.id == updatedPlayer.playerSocketId) {
                               console.log('updatedPlayerPosition');
                               let remotePlayer = self.remotePlayers[remotePlayerKey];
                               remotePlayer.getActiveCharacter().position = updatedPlayer.position;

                               socket.broadcast.emit('updatePlayer', remotePlayer);
                               return;
                           }
                        });
                    });

                }


                //socket.on('getQuests', function () {
                //    let emitData = {
                //        quests: server.quests,
                //        playerQuests: null,
                //        playerRequirements: null
                //    };
                //
                //    player.characters[player.activeCharacter].getActiveQuests(function (error, quests) {
                //        emitData.playerQuests = quests;
                //        player.characters[player.activeCharacter].getQuestRequirements(function (error, requrements) {
                //            emitData.playerRequirements = requrements;
                //            socket.emit('quests', emitData);
                //        });
                //    });
                //});

                socket.on('acceptQuest', function (quest) {
                    let questId = quest.id;
                    let playerId = player.characters[player.activeCharacter].id;

                    server.ormManager.structure.playerQuest.oneAsync({
                        player_id: playerId,
                        questId: questId
                    }).then(function (quest) {
                        if (!quest) {
                            server.ormManager.structure.playerQuest.createAsync({
                                questId: questId,
                                date: 0,
                                player_id: playerId
                            }).then(function (quest) {
                                socket.emit('refreshQuestsStatus', quest);
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

                ///Player
                socket.on('createPlayer', function () {
                    remotePlayers.push(player);
                    player.getActiveCharacter().position = self.getDefaultPositionForScene(2);
                    socket.broadcast.emit('newPlayerConnected', player);
                });

                socket.on('setTargetPoint', function (targetPoint) {
                    let character = player.getActiveCharacter();
                    character.attack = null;
                    character.targetPoint = targetPoint.position;
                    console.log(character.roomId);
                    socket.broadcast.to(character.roomId).emit('updatePlayer', character);
                    socket.to(character.roomId).emit('updatePlayer', character);
                });

                socket.on('attack', function (data) {

                    if(player.lastPlayerAttack > new Date().getTime()-1000) {
                        return;
                    }
                    player.lastPlayerAttack = new Date().getTime();

                    let activeCharacter = player.getActiveCharacter();

                    activeCharacter.attack = data.attack;
                    activeCharacter.targetPoint = data.targetPoint;

                    enemies[player.activeScene].forEach(function(enemy, enemyKey) {
                         enemy.availableAttacksFromCharacters.forEach(function(isAtacked, characterId) {
                            if(isAtacked === true) {
                                    if(activeCharacter.id == characterId) {
                                        let attackCharacter = activeCharacter;
                                        let damage = attackCharacter.statistics.getDamage();
                                        enemy.statistics.hp -= damage;
                                        let emitObject = {
                                            enemy: enemy,
                                            enemyKey: enemyKey
                                        };
                                        console.log('updateEnemyAttack');
                                        socket.emit('updateEnemy', emitObject);
                                        socket.broadcast.emit('updateEnemy', emitObject);

                                        ///enemy is killed
                                        if(enemy.statistics.hp <= 0) {
                                            enemy.availableAttacksFromCharacters = [];
                                            let enemyItem = enemy.itemsToDrop[0];
                                            let itemDropKey = player.getActiveCharacter().itemsDrop.push(enemyItem) - 1;
                                            let earnedExperience = enemy.experience;
                                            let playerId = player.getActiveCharacter().id;
                                            let itemManager = new Items.ItemManager();
                                            let item = itemManager.getItemUsingId(enemyItem, 0);
                                            socket.emit('showDroppedItem', {
                                                item: item,
                                                itemKey: itemDropKey,
                                                enemyId: enemyKey
                                            });

                                            self.server.ormManager.structure.player.get(playerId,
                                                function (error, playerDatabase) {
                                                    playerDatabase.experience += earnedExperience;
                                                    socket.emit('addExperience', {
                                                        experience: earnedExperience
                                                    });
                                                    let newLvl = (playerDatabase.lvl) ? playerDatabase.lvl+1 : 1;
                                                    let requiredExperience = self.server.gameModules.character.getLvls()[newLvl];
                                                    if(playerDatabase.experience >= requiredExperience) {
                                                        playerDatabase.lvl += 1;
                                                        playerDatabase.freeAttributesPoints += 5;
                                                        playerDatabase.freeSkillPoints += 1;
                                                        socket.emit('newLvl', playerDatabase);
                                                    }

                                                    playerDatabase.save();
                                                });
                                        }

                                        console.log('Attack character ID:'+characterId+' on enemy with dmg'+damage);
                                    }
                            }
                        });
                    });

                    socket.broadcast.to(activeCharacter.roomId).emit('updatePlayer', activeCharacter);
                    socket.to(activeCharacter.roomId).emit('updatePlayer', activeCharacter);
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

                socket.on('addAttribute', function (attribute) {
                    let type = attribute.type;

                    self.server.ormManager.structure.player.oneAsync({
                        id: player.characters[player.activeCharacter].id,
                    }).then(function (playerDatabase) {
                        if(playerDatabase.freeAttributesPoints) {
                            self.server.ormManager.structure.playerAttributes
                                .oneAsync({player_id: playerDatabase.id})
                                .then(function (attributes) {
                                    new Promise(function (resolveFind) {
                                        if (!attributes) {
                                            self.server.ormManager.structure.playerAttributes.create({player_id: playerDatabase.id}, function (err, insertedAttributes) {
                                                attributes = insertedAttributes;
                                                resolveFind();
                                            });
                                        } else {
                                            resolveFind();
                                        }


                                    }).then(function (resolve) {
                                        switch (type) {
                                            case 1:
                                                attributes.damage += 1;
                                                break;
                                            case 2:
                                                attributes.defence += 1;
                                                break;
                                            case 3:
                                                attributes.health += 1;
                                                break;
                                            case 4:
                                                attributes.attackSpeed += 1;
                                                break;
                                            case 5:
                                                attributes.walkSpeed += 1;
                                                break;
                                            case 6:
                                                attributes.blockChance += 1;
                                                break;
                                        }
                                        attributes.save();
                                        playerDatabase.freeAttributesPoints -= 1;
                                        playerDatabase.save();

                                        player.refreshPlayerData(server, function() {
                                            socket.emit('attributeAdded', player);
                                        });

                                    });
                                });
                        }
                    });
                });

                socket.on('learnSkill', function (skill) {
                    let skillType = skill.skillType;
                    let skillPowerType = skill.powerType;
                    let isCreated = false;

                    self.server.ormManager.structure.player.oneAsync({
                        id: player.characters[player.activeCharacter].id,
                    }).then(function (playerDatabase) {
                        if(playerDatabase.freeSkillPoints) {
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
                                        if(!isCreated) {
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

                                        player.refreshPlayerData(server, function() {
                                            socket.emit('skillLearned', player);
                                        });

                                    });
                                });
                        }
                    });
                });

                socket.on('disconnect', function () {
                    //if (player.activeCharacter >= 0) {
                    //    let playerId = player.characters[player.activeCharacter].id;
                    //    server.ormManager.structure.playerOnline
                    //        .find({player_id: playerId})
                    //        .remove();
                    //}

                    remotePlayers.forEach(function (remotePlayer, key) {
                        if (remotePlayer.id == player.id || remotePlayer == null) {
                            remotePlayers.splice(key, 1);
                        }
                    });

                    enemies.forEach(function (enemy, key) {
                        if (enemy.target == player.id) {
                            enemy.target = null;
                            socket.broadcast.emit('updateEnemy', {
                                enemy: enemy,
                                enemyKey: key
                            });
                        }
                    });
                    socket.broadcast.emit('removePlayer', player.id);
                });

                socket.on('changeScenePre', function (sceneData) {
                    let sceneType = sceneData.sceneType;
                    player.getActiveCharacter().position = self.getDefaultPositionForScene(sceneType);

                    socket.emit('showPlayer', player);

                });

                socket.on('changeScenePost', function (sceneData) {
                    player.activeScene = sceneData.sceneType;

                    socket.emit('showEnemies', enemies[sceneData.sceneType]);
                });

                ///Enemies
                socket.on('setEnemyTarget', function (data) {
                    let enemy = enemies[player.activeScene][data.enemyKey];
                    enemy.position = data.position;
                    enemy.target = data.target;
                    enemy.attack = data.attack;
                    enemy.availableAttacksFromCharacters[data.target] = data.attack;

                    socket.broadcast.to(data.roomId).emit('updateEnemy', {
                        enemy: enemy,
                        enemyKey: data.enemyKey
                    });
                });

            });
        }

        protected getDefaultPositionForScene(sceneType) {
            let position = null
            if (sceneType == 3) {
                position = {
                    x: -73,
                    y: 0,
                    z: -4
                };
            } else if (sceneType == 2) {
                position = {
                    x: 145,
                    y: 0,
                    z: -53
                };
                //For tests
                position = {
                    x: 35,
                    y: 0,
                    z: 8
                };

            }

            return position;
        };

    }
}