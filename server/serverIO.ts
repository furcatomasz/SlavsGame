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
                let player = {
                    id: socket.id,
                    characters: [],
                    itemsDrop: [],
                    activePlayer: 0,
                    activeScene: null,
                    lastPlayerUpdate: 0,
                    targetPoint: null,
                    isRunning: null,
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

                ////CLEAR QUESTS
                server.ormManager.structure.playerQuest.allAsync().then(function(playerQuests) {
                    for(let playerQuest of playerQuests) {
                        playerQuest.remove();
                    }
                });

                self.refreshPlayerData(player, socket, function() {
                    socket.emit('clientConnected', player);
                });

                socket.on('getQuests', function () {
                    let emitData = {
                        quests: server.quests,
                        playerQuests: null,
                        playerRequirements: null
                    };

                    player.characters[player.activePlayer].getActiveQuests(function (error, quests) {
                        emitData.playerQuests = quests;
                        player.characters[player.activePlayer].getQuestRequirements(function (error, requrements) {
                            emitData.playerRequirements = requrements;
                            socket.emit('quests', emitData);
                        });
                    });
                });

                socket.on('acceptQuest', function (quest) {
                    let questId = quest.id;
                    let playerId = player.characters[player.activePlayer].id;

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

                socket.on('updatePlayerPosition', function (data) {
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
                    socket.broadcast.emit('updatePlayerPosition', player);
                });

                socket.on('setTargetPoint', function (targetPoint) {
                    player.targetPoint = targetPoint.position;
                    player.isRunning = targetPoint.isRunning;
                    socket.broadcast.emit('updatePlayer', player);
                    socket.emit('updatePlayer', player);

                });

                socket.on('attack', function (data) {
                    player.attack = data.attack;
                    player.targetPoint = data.targetPoint;
                    socket.broadcast.emit('updatePlayer', player);
                    socket.emit('updatePlayer', player);
                });

                socket.on('itemEquip', function (item) {
                    let itemId = item.id;
                    let equip = item.equip;

                    self.server.ormManager.structure.playerItems.oneAsync({
                        id: itemId,
                        player_id: player.characters[player.activePlayer].id
                    }).then(function (itemDatabase) {
                        itemDatabase.equip = (equip) ? 1 : 0;
                        itemDatabase.saveAsync().then(function () {
                            server.ormManager.structure.playerItems.findAsync(
                                {player_id: player.characters[player.activePlayer].id}).then(
                                function (playerItems) {
                                    player.characters[player.activePlayer].items = playerItems;
                                    socket.broadcast.emit('updateEnemyEquip', player);
                                });
                        });
                    });

                });

                socket.on('addDoppedItem', function (itemsKey) {
                    let playerId = player.characters[player.activePlayer].id;
                    let itemId = player.itemsDrop[itemsKey];

                    if (itemId) {
                        self.server.ormManager.structure.playerItems.create({
                                player_id: playerId,
                                itemId: itemId,
                                improvement: 0,
                                equip: 0
                            },
                            function (error, addedItem) {
                                player.characters[player.activePlayer].items.push(addedItem);
                                socket.emit('updatePlayerEquip', player.characters[player.activePlayer].items);
                            });
                    }
                });

                socket.on('addAttribute', function (attribute) {
                    let type = attribute.type;

                    self.server.ormManager.structure.player.oneAsync({
                        id: player.characters[player.activePlayer].id,
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

                                        self.refreshPlayerData(player, socket, function() {
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
                        id: player.characters[player.activePlayer].id,
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

                                        self.refreshPlayerData(player, socket, function() {
                                            socket.emit('skillLearned', player);
                                        });

                                    });
                                });
                        }
                    });
                });

                //socket.on('getEquip', function (characterKey) {
                //    let playerId = player.characters[characterKey].id;
                //    self.server.ormManager.structure.playerItems.find({player_id: playerId},
                //        function (error, itemsDatabase) {
                //            socket.emit('getEquip', itemsDatabase);
                //        });
                //});

                socket.on('disconnect', function () {
                    //if (player.activePlayer >= 0) {
                    //    let playerId = player.characters[player.activePlayer].id;
                    //    server.ormManager.structure.playerOnline
                    //        .find({player_id: playerId})
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
                    let earnedExperience = enemy.experience;
                    let playerId = player.characters[player.activePlayer].id;

                    socket.emit('showDroppedItem', {
                        items: enemyItem,
                        itemsKey: itemDropKey,
                        enemyId: enemyKey
                    });

                    self.server.ormManager.structure.player.get(playerId,
                        function (error, playerDatabase) {
                            playerDatabase.experience += earnedExperience;
                            socket.emit('addExperience', {
                                experience: earnedExperience
                            });
                            let newLvl = (playerDatabase.lvl) ? playerDatabase.lvl+1 : 1;
                            let requiredExperience = self.server.gameModules.characterLvls.getLvls()[newLvl];
                            if(playerDatabase.experience >= requiredExperience) {
                                playerDatabase.lvl += 1;
                                playerDatabase.freeAttributesPoints += 5;
                                playerDatabase.freeSkillPoints += 1;
                                socket.emit('newLvl', playerDatabase);
                            }

                            playerDatabase.save();
                        });

                });
            });
        }

        protected refreshPlayerData(player, socket, callback) {
            let server = this.server;
            server.ormManager.structure.user.oneAsync({email: "furcatomasz@gmail.com"}).then(function (user) {
                server.ormManager.structure.player.findAsync({user_id: user.id}).then(function (players) {
                    player.characters = players;

                    for (let i = 0; i < players.length; i++) {
                        let playerDatabase = players[i];

                        server.ormManager.structure.playerItems
                            .findAsync({player_id: playerDatabase.id})
                            .then(function (items) {
                                playerDatabase.items = items;

                                server.ormManager.structure.playerAttributes
                                    .oneAsync({player_id: playerDatabase.id})
                                    .then(function (attributes) {
                                        playerDatabase.attributes = attributes;

                                        server.ormManager.structure.playerSkills
                                            .findAsync({player_id: playerDatabase.id})
                                            .then(function (skills) {
                                                playerDatabase.skills = skills;

                                                if (i == players.length - 1) {
                                                    callback();
                                                }
                                            });

                                    });
                            });


                    }

                })

            });
        };
    }
}