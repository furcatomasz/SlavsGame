/// <reference path="game.ts"/>
/// <reference path="characters/monsters/monster.ts"/>

class SocketIOClient {
    protected game:Game;
    public socket;
    public connectionId;
    public characters = [];
    public activeCharacter = Number;

    constructor(game:Game) {
        this.game = game;
    }

    public connect(socketUrl:string) {
        this.socket = io.connect(socketUrl);

        this.playerConnected();
    }

    /**
     * @returns {SocketIOClient}
     */
    public playerConnected() {
        let self = this;
        let game = this.game;

        this.socket.on('clientConnected', function (data) {
            game.remotePlayers = [];
            self.connectionId = data.id;
            self.characters = data.characters;
            self
                .updatePlayers()
                .updateEnemies()
                .removePlayer()
                .connectPlayer()
                .showPlayer()
                .refreshPlayerEquip()
                .refreshEnemyEquip()
                .showDroppedItem()
                .showPlayerQuests()
                .refreshPlayerQuests()
                .addExperience()
                .newLvl()
                .attributeAdded()
                .skillsLearned()
                .updateRooms()
                .reloadScene()
                .addSpecialItem()
                .refreshGateways()
                .refreshQuests()
                .changeScene();
        });

        return this;
    }

    protected refreshGateways() {
        let game = this.game;
        let gateways = [];
        this.socket.on('refreshGateways', function (sceneServerData) {
            gateways.forEach(function(gateway) {
                gateway.particleSystem.dispose();
            });

            let gatewaysFromServer = sceneServerData.gateways;
            gatewaysFromServer.forEach(function(gateway) {
                let gatewayInGame = new Factories.Gateway(game, gateway.objectName, gateway.isActive, gateway.openSceneType);
                gateways.push(gatewayInGame);
            })

        });

        return this;
    }

    protected refreshQuests() {
        let game = this.game;
        this.socket.on('refreshQuests', function (sceneServerData) {
            let questsFromServer = sceneServerData.quests;
            console.log(sceneServerData);

            questsFromServer.forEach(function(quest) {
                new Factories.Quests(game, quest.objectName);
            })

        });

        return this;
    }

    protected changeScene() {
        let game = this.game;
        this.socket.on('changeScene', function (sceneServerData) {
            let sceneType = sceneServerData.type;
            let scene = Scenes.Manager.factory(sceneType);
            
            game.sceneManager.changeScene(scene);
        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    protected updateRooms() {
        let game = this.game;
        this.socket.on('updateRooms', function (data) {
            if(game.gui) {
                game.gui.teams.rooms = data;
                game.gui.teams.refreshPopup();
            }
        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    protected reloadScene() {
        let game = this.game;
        this.socket.on('reloadScene', function (data) {
            game.sceneManager.changeScene(new Mountains());
        });

        return this;
    }


    /**
     * @returns {SocketIOClient}
     */
    protected addExperience() {
        let game = this.game;
        this.socket.on('addExperience', function (data) {
            game.player.addExperience(data.experience);
            game.gui.playerLogsPanel.addText('You earned ' + data.experience + ' experience.', 'blue');

        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    protected addSpecialItem() {
        let game = this.game;
        this.socket.on('addSpecialItem', function (data) {
            game.gui.playerLogsPanel.addText('You earned '+data.value+' ' + data.name + '', 'gold');

        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    protected attributeAdded() {
        let game = this.game;
        let self = this;
        this.socket.on('attributeAdded', function (data) {
            self.characters = data.characters;
            game.player.freeAttributesPoints = self.characters[self.activeCharacter].freeAttributesPoints;
            let statistics = self.characters[self.activeCharacter].statistics;
            game.player.setCharacterStatistics(statistics);

            game.gui.attributes.refreshPopup();
        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    protected skillsLearned() {
        let game = this.game;
        let self = this;
        this.socket.on('skillLearned', function (data) {
            self.characters = data.characters;
            game.player.freeSkillPoints = self.characters[self.activeCharacter].freeSkillPoints;
            game.player.setCharacterSkills(self.characters[self.activeCharacter].skills);

            game.gui.skills.refreshPopup();
        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    protected newLvl() {
        let game = this.game;
        this.socket.on('newLvl', function (data) {
            game.player.freeAttributesPoints = data.freeAttributesPoints;
            game.gui.attributes.refreshPopup();

            game.player.setNewLvl();
        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    protected showPlayerQuests() {
        let game = this.game;
        let questManager = new Quests.QuestManager(game);
        this.socket.on('quests', function (data) {
            game.quests = [];

            let questPromise = new Promise(function (resolve, reject) {
                data.quests.forEach(function (quest, key) {
                    if (quest) {
                        let questObject = questManager.transformQuestDatabaseDataToObject(quest);
                        data.playerQuests.forEach(function (playerQuest, key) {
                            if (playerQuest.questId == quest.questId) {
                                questObject.isActive = true;
                            }

                        });

                        game.quests.push(questObject);
                    }
                    resolve();
                });

            });

            questPromise.then(function () {
                document.dispatchEvent(game.events.questsReceived);
            });

        });

        return this;
    }

    protected refreshPlayerQuests() {
        let game = this.game;
        this.socket.on('refreshQuestsStatus', function (quest) {
            for (let gameQuest of game.quests) {
                if (gameQuest.getQuestId() == quest.questId) {
                    gameQuest.isActive = true;
                    for (let npc of game.npcs) {
                        npc.refreshTooltipColor();
                    }

                }
            }
        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    protected showPlayer() {
        let game = this.game;
        let self = this;

        this.socket.on('showPlayer', function (playerData) {
            self.characters = playerData.characters;
            self.activeCharacter = playerData.activeCharacter;
            let activeCharacter = self.characters[self.activeCharacter];

            game.player = new Player(game, activeCharacter.id, true, activeCharacter);
            document.dispatchEvent(game.events.playerConnected);

            let octree = game.sceneManager.octree;
            if (octree) {
                octree.dynamicContent.push(game.player.mesh);
                octree.dynamicContent.push(game.player.attackArea);
                octree.dynamicContent.push(game.controller.ball);
                game.player.inventory.getEquipedItems().forEach(function (item) {
                    if (item) {
                        game.sceneManager.octree.dynamicContent.push(item.mesh);
                    }
                });
            }
        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    protected refreshEnemyEquip() {
        let game = this.game;
        let self = this;

        this.socket.on('updateEnemyEquip', function (playerUpdated) {
            if (game.player) {
                self.game.remotePlayers.forEach(function (socketRemotePlayer) {
                    if (playerUpdated.id == socketRemotePlayer.id) {
                        socketRemotePlayer.setItems(playerUpdated.characters[playerUpdated.self.activeCharacter].items);
                    }
                });
            }
        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    protected refreshPlayerEquip() {
        let game = this.game;

        this.socket.on('updatePlayerEquip', function (items) {
            game.player.removeItems();
            game.player.setItems(items);
            if (game.gui.inventory.opened) {
                game.gui.inventory.refreshPopup();
            }
        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    protected showDroppedItem() {
        let game = this.game;
        this.socket.on('showDroppedItem', function (data) {
            let item = new Items.Item(game, data.item);
            let enemy = game.enemies[data.enemyId];
            Items.DroppedItem.showItem(game, item, enemy, data.itemKey);
        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    public showEnemies() {
        let game = this.game;

        this.socket.on('showEnemies', function (data) {
            data.forEach(function (enemyData, key) {
                let enemy = game.enemies[key];

                if (enemy) {
                    let position = new BABYLON.Vector3(enemyData.position.x, enemyData.position.y, enemyData.position.z);

                    enemy.target = enemyData.target;
                    enemy.mesh.position = position;
                    enemy.runAnimationWalk();
                } else if(enemyData.statistics.hp > 0) {
                    let newMonster;
                    newMonster = new Monster(game, key, enemyData);

                    if (newMonster) {
                        if (game.sceneManager.octree) {
                            game.sceneManager.octree.dynamicContent.push(newMonster.mesh);
                        }
                    }
                }
            });
        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    protected updateEnemies() {
        var game = this.game;
        let self = this;
        let activeTargetPoints = [];
        this.socket.on('updateEnemy', function (data) {
            let updatedEnemy = data.enemy;
            let enemyKey = data.enemyKey;
            let enemy = game.enemies[enemyKey];

            if(enemy) {
                let mesh = enemy.meshForMove;

                ///action when hp of monster is changed
                if(enemy.statistics.hp != updatedEnemy.statistics.hp) {
                    let damage = (enemy.statistics.hp-updatedEnemy.statistics.hp);
                    enemy.statistics.hp = updatedEnemy.statistics.hp;

                    setTimeout(function() {

                        enemy.bloodParticles.start();

                        let label = new BABYLON.GUI.TextBlock();
                        label.text = '-'+damage+'';
                        label.width = 1;
                        label.height = 1;
                        label.color = 'white';
                        label.fontSize = 200;
                        label.shadowOffsetX = 0;
                        label.shadowOffsetY = 0;
                        label.shadowBlur = 1;
                        let paddingTop = -150;
                        label.top = paddingTop;

                        let alpha = 1;
                        let animateText = function() {
                            label.top = paddingTop;
                            label.alpha = alpha;
                            alpha -= (2/100);
                            if(alpha < 0) {
                                alpha = 0;
                            }
                            paddingTop -= 5;
                        }
                        enemy.meshAdvancedTexture.addControl(label);
                        game.getScene().registerAfterRender(animateText);

                        if(enemy.statistics.hp <= 0) {
                            if (enemy.animation) {
                                enemy.animation.stop();
                            }
                        }
                        setTimeout(function() {
                            game.getScene().unregisterAfterRender(animateText);
                            enemy.meshAdvancedTexture.removeControl(label);
                            enemy.bloodParticles.rebuild();
                            enemy.bloodParticles.stop();
                            enemy.bloodParticles.reset();

                            if(enemy.statistics.hp <= 0) {
                                enemy.removeFromWorld();
                            }
                        }, 1000);

                    }, 300);
                }

                ///antylag rule
                let distanceBetweenObjects = Game.distanceVector(mesh.position, updatedEnemy.position);
                if(distanceBetweenObjects > 8) {
                    mesh.position = new BABYLON.Vector3(updatedEnemy.position.x, updatedEnemy.position.y, updatedEnemy.position.z);
                }
                if (activeTargetPoints[enemyKey] !== undefined) {
                    self.game.getScene().unregisterBeforeRender(activeTargetPoints[enemyKey]);
                }

                if (updatedEnemy.collisionWithCharacter == true) {
                    enemy.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                }

                if (updatedEnemy.attack == true) {
                    enemy.runAnimationHit(AbstractCharacter.ANIMATION_ATTACK_01, null, null, false);
                } else if (updatedEnemy.target) {
                    let targetMesh = null;
                    if (enemy.animation) {
                        enemy.animation.stop();
                    }
                    game.remotePlayers.forEach(function (socketRemotePlayer) {
                        if (updatedEnemy.target == socketRemotePlayer.id) {
                            targetMesh = socketRemotePlayer.mesh;
                        }
                    });

                    if (!targetMesh && game.player.id == updatedEnemy.target) {
                        targetMesh = game.player.meshForMove;
                    }

                    if (targetMesh) {
                        activeTargetPoints[enemyKey] = function () {
                            mesh.lookAt(targetMesh.position);

                            let rotation = mesh.rotation;
                            if (mesh.rotationQuaternion) {
                                rotation = mesh.rotationQuaternion.toEulerAngles();
                            }
                            rotation.negate();
                            let forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / enemy.getWalkSpeed(), 0, -parseFloat(Math.cos(rotation.y)) / enemy.getWalkSpeed());
                            mesh.moveWithCollisions(forwards);

                            if (enemy.animation) {

                            }
                            enemy.runAnimationWalk();

                        }

                        self.game.getScene().registerBeforeRender(activeTargetPoints[enemyKey]);
                    }
                }

                setTimeout(function() {
                    self.game.gui.characterTopHp.refreshPanel();

                }, 300);
            }
        });

        return this;
    }

    protected connectPlayer() {
        let game = this.game;
        this.socket.on('newPlayerConnected', function (teamPlayer) {
            if (game.player) {
                let activePlayer = teamPlayer.characters[teamPlayer.activeCharacter];

                let player = new Player(game, teamPlayer.id, false, activePlayer);
                player.mesh.position = new BABYLON.Vector3(activePlayer.position.x, activePlayer.position.y, activePlayer.position.z);
                player.setItems(activePlayer.items);

                game.remotePlayers.push(player);
            }

        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    protected updatePlayers() {
        let self = this;
        let game = this.game;

        this.socket.on('updatePlayer', function (updatedPlayer) {
            let remotePlayerKey = null;
            let player = null;

            if (updatedPlayer.connectionId == self.connectionId) {
                player = game.player;
                remotePlayerKey = -1;
            } else {
                game.remotePlayers.forEach(function (remotePlayer, key) {
                    if (remotePlayer.connectionId == updatedPlayer.connectionId) {
                        remotePlayerKey = key;
                        return;
                    }
                });
                player = game.remotePlayers[remotePlayerKey];
            }

            if(!player) {
                return;
            }

            ///action when hp of character is changed
            if(player.statistics.hp != updatedPlayer.statistics.hp) {
                let damage = (player.statistics.hp-updatedPlayer.statistics.hp);
                player.statistics.hp = updatedPlayer.statistics.hp;
                setTimeout(function() {

                    player.bloodParticles.start();

                    let label = new BABYLON.GUI.TextBlock();
                    label.text = '-'+damage+'';
                    label.width = 2;
                    label.height = 2;
                    label.color = 'red';
                    label.fontSize = 200;
                    label.shadowOffsetX = 0;
                    label.shadowOffsetY = 0;
                    label.shadowBlur = 1;
                    let paddingTop = -300;
                    label.top = paddingTop;

                    let alpha = 1;
                    let animateText = function() {
                        label.top = paddingTop;
                        label.alpha = alpha;
                        alpha -= (2/100);
                        if(alpha < 0) {
                            alpha = 0;
                        }
                        paddingTop -= 5;
                    }
                    player.meshAdvancedTexture.addControl(label);
                    game.getScene().registerAfterRender(animateText);

                    if(player.isControllable) {
                        game.gui.playerBottomPanel.setHpOnPanel(player.statistics.hp);
                    }

                    if(player.isAlive && player.statistics.hp <= 0) {
                        player.isAlive = false;
                        player.mesh.skeleton.beginAnimation('death', false);
                    }

                    setTimeout(function() {
                        game.getScene().unregisterAfterRender(animateText);
                        player.meshAdvancedTexture.removeControl(label);
                        player.bloodParticles.rebuild();
                        player.bloodParticles.stop();
                        player.bloodParticles.reset();

                    }, 1000);

                }, 300);

            }
            

            if (updatedPlayer.attack == true && !player.isAttack) {
                let targetPoint = updatedPlayer.targetPoint;
                if (targetPoint) {
                    let targetPointVector3 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                    player.meshForMove.lookAt(targetPointVector3);
                }

                let attackAnimation = (Game.randomNumber(1,2) == 1) ? AbstractCharacter.ANIMATION_ATTACK_02 : AbstractCharacter.ANIMATION_ATTACK_01;
                player.runAnimationHit(attackAnimation, null, null);
                return;
            }

            if (updatedPlayer.targetPoint && !player.isControllable) {
                let targetPointVector3 = new BABYLON.Vector3(updatedPlayer.targetPoint.x, 0, updatedPlayer.targetPoint.z);

                player.runPlayerToPosition(targetPointVector3);
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