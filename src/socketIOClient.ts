/// <reference path="game.ts" />

class SocketIOClient {
    protected game:Game;
    public socket;
    public connectionId;

    constructor(game:Game) {
        this.game = game;
    }

    public connect(socketUrl:string, accessToken: string) {
        SlavsLoader.showLoaderWithText('Establishing connection with server...');

        this.socket = io.connect(socketUrl, {query: 'gameToken='+accessToken});

        this.socket.on('connect_error', function() {
            SlavsLoader.showLoaderWithText('Problem with connection to server');
        });

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
            self.connectionId = data.connectionId;
            self
            ///PLAYER

            // .connectPlayer()
                .showPlayer()
                .updatePlayers()
                .updatePlayersSkills()
                .removePlayer()
                .refreshPlayerEquip()
                .addExperience()
                .newLvl()
                .attributeAdded()
                .addSpecialItem()

            ///Scene
                .showEnemies()
                .showDroppedItem()
                .refreshGateways()
                .refreshQuests()
                .refreshChests()
                .refreshMushrooms()
                .openedChest()
                .updateEnemies()
                .changeScene()
                .questRequirementInformation()
                .questRequirementDoneInformation();
                // .skillsLearned()
                // .updateRooms()
                // .reloadScene()
        });

        // this.socket.emit('changeScene', SelectCharacter.TYPE);
        this.socket.emit('selectCharacter', 2);

        return this;
    }

    protected questRequirementInformation() {
        let self = this;
        this.socket.on('questRequirementInformation', function (data) {
            self.game.gui.playerLogsQuests.addText(data);
        });

        return this;
    }

    protected questRequirementDoneInformation() {
        let self = this;
        this.socket.on('questRequirementDoneInformation', function (data) {
            self.game.gui.playerLogsQuests.addText(data, 'orange');
            self.socket.emit('refreshQuests');
            self.socket.emit('refreshGateways');
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
                let gatewayInGame = new Factories.Gateway(game, gateway.objectName, gateway.isActive, gateway.openSceneType, gateway.entranceName);
                gateways.push(gatewayInGame);
            })

        });

        return this;
    }

    protected refreshQuests() {
        let game = this.game;
        let self = this;
        this.socket.on('refreshQuests', function (data) {
            game.quests.forEach(function(quest) {
                quest.box.dispose();
            });
            game.quests = [];

            let activeQuest = data.sessionData.activeRoom.activeQuest;
            data.quests.forEach(function(quest) {
                game.quests.push(new Factories.Quests(game, quest, activeQuest));
            });

            self.socket.emit('refreshGateways');

            if(activeQuest) {
                self.game.gui.playerQuestInformation.addQuest(activeQuest);
            }
        });

        return this;
    }

    protected refreshChests() {
        let game = this.game;
        this.socket.on('refreshChests', function (chests) {
            game.chests.forEach(function(chest) {
                chest.hightlightLayer.dispose();
            });
            game.chests = [];

            chests.forEach(function(chest, chestKey) {
                game.chests.push(new Initializers.Chest(game, chest, chestKey));
            });
        });

        return this;
    }

    protected refreshMushrooms() {
        let game = this.game;
        this.socket.on('refreshMushrooms', function (mushrooms) {
            game.mushrooms.forEach(function(mushroom) {
                mushroom.mesh.dispose();
            });
            game.mushrooms = [];

            mushrooms.forEach(function(mushroom, mushroomKey) {
                if(!mushroom.picked) {
                    game.mushrooms.push(new Mushroom(game, mushroom, mushroomKey));
                }
            });
        });

        return this;
    }

    protected changeScene() {
        let game = this.game;
        this.socket.on('changeScene', function (sceneType) {
            let scene = Scenes.Manager.factory(sceneType);

            game.changeScene(scene);
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
    protected addExperience() {
        let game = this.game;
        this.socket.on('addExperience', function (data) {
            game.player.addExperience(data.experience, data.experiencePercentages);
            game.gui.playerLogsPanel.addText('You earned ' + data.experience + ' experience.', 'gold');

        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    protected openedChest() {
        let game = this.game;
        this.socket.on('openChest', function (data) {
            let opened = data.chest.opened;
            if(!opened) {
                game.gui.playerLogsQuests.addText('You do not have key to open chest', 'red');
            } else {
                game.gui.playerLogsQuests.addText('Chest has been opened', 'orange');

                game.player.keys -= 1;
                if(game.gui.inventory.opened) {
                    game.gui.inventory.refreshPopup();
                }

                let chest = game.chests[data.chestKey];
                chest.hightlightLayer.dispose();
                chest.mesh.skeleton.beginAnimation('action', false);
                chest.mesh.actionManager.actions.forEach(function(action) {
                    chest.mesh.actionManager.unregisterAction(action);
                });
            }


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
        this.socket.on('attributeAdded', function (data) {
            game.player.freeAttributesPoints = data.activePlayer.freeAttributesPoints;
            game.player.setCharacterStatistics(data.activePlayer);

            game.gui.attributes.refreshPopup();
            game.player.refreshEnergyInGui();
            game.player.refreshHpInGui();
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
        this.socket.on('newLvl', function (playerData) {
            game.player.freeAttributesPoints = playerData.freeAttributesPoints;
            game.player.freeSkillPoints = playerData.freeSkillPoints;
            game.player.lvl = playerData.lvl;
            game.player.experiencePercentages = 0;
            game.gui.attributes.refreshPopup();

            game.player.setNewLvl();
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
            game.player = new Player(game, true, playerData);
            document.dispatchEvent(game.events.playerConnected);

            let octree = game.sceneManager.octree;
            if (octree) {
                octree.dynamicContent.push(game.player.mesh);
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
    protected refreshPlayerEquip() {
        let game = this.game;

        this.socket.on('updatePlayerEquip', function (updatedPlayer) {
            let player = null;

            if (updatedPlayer.activePlayer.id == game.player.id) {
                player = game.player;
                game.player.setCharacterStatistics(updatedPlayer.activePlayer);
                game.gui.attributes.refreshPopup();
            } else {
                game.remotePlayers.forEach(function (remotePlayer, key) {
                    if (remotePlayer.id == updatedPlayer.activePlayer.id) {
                        player = game.remotePlayers[key];
                        return;
                    }
                });
            }


            player.removeItems();
            player.setItems(updatedPlayer.activePlayer.items);
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
            Items.DroppedItem.showItem(game, item, data.position, data.itemKey);
        });

        return this;
    }

    /**
     * @returns {SocketIOClient}
     */
    public showEnemies() {
        let game = this.game;

        this.socket.on('showEnemies', function (data) {
            game.enemies = [];
            data.forEach(function (enemyData, key) {
                if(enemyData.statistics.hp > 0) {
                    let newMonster = new Monster(game, key, enemyData);
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
                        setTimeout(function() {
                            enemy.bloodParticles.stop();
                        }, 100);
                        enemy.showDamage(damage);

                        if(enemy.statistics.hp <= 0) {
                            enemy.isDeath = true;
                            enemy.animation.stop();
                        }

                        setTimeout(function() {
                            if(enemy.statistics.hp <= 0) {
                                enemy.removeFromWorld();
                            }
                        }, 6000);

                    }, 400);
                }

                ///antylag rule
                let distanceBetweenObjects = Game.distanceVector(mesh.position, updatedEnemy.position);
                if(distanceBetweenObjects > 16) {
                    mesh.position = new BABYLON.Vector3(updatedEnemy.position.x, updatedEnemy.position.y, updatedEnemy.position.z);
                }

                if(data.collisionEvent) {
                    if (activeTargetPoints[enemyKey] !== undefined) {
                        self.game.getScene().unregisterBeforeRender(activeTargetPoints[enemyKey]);
                    }

                    if (data.collisionEvent == 'OnIntersectionEnterTriggerAttack' && updatedEnemy.attack == true && data.attackIsDone == true) {
                        enemy.runAnimationHit(AbstractCharacter.ANIMATION_ATTACK_01, null, null, false);
                    } else if (data.collisionEvent == 'OnIntersectionEnterTriggerVisibility' || data.collisionEvent == 'OnIntersectionExitTriggerAttack') {
                        let targetMesh = null;

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
                                enemy.runAnimationWalk();
                            };

                            self.game.getScene().registerBeforeRender(activeTargetPoints[enemyKey]);
                        }
                    } else if (data.collisionEvent == 'OnIntersectionExitTriggerVisibility') {
                        enemy.runAnimationStand();
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
    protected updatePlayersSkills() {
        let self = this;
        let game = this.game;
        const skillsManager = new Character.Skills.SkillsManager(game);

        this.socket.on('updatePlayerSkill', function (updatedPlayer) {
            let player = null;
            if (updatedPlayer.activePlayer.id == game.player.id) {
                player = game.player;
            } else {
                game.remotePlayers.forEach(function (remotePlayer, key) {
                    if (remotePlayer.id == updatedPlayer.activePlayer.id) {
                        player = game.remotePlayers[key];
                        return;
                    }
                });
            }

            ///action on use skill
            if(updatedPlayer.activeSkill) {
                player.statistics.energy = updatedPlayer.activePlayer.statistics.energy;
                player.refreshEnergyInGui();
                const skill = skillsManager.getSkill(updatedPlayer.activeSkill.type);
                skill.showAnimation(updatedPlayer.activeSkill.duration*1000, updatedPlayer.activeSkill.cooldownTime*1000);
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
            let player = null;
            if (updatedPlayer.activePlayer.id == game.player.id) {
                player = game.player;
            } else {
                game.remotePlayers.forEach(function (remotePlayer, key) {
                    if (remotePlayer.id == updatedPlayer.activePlayer.id) {
                        player = game.remotePlayers[key];
                        return;
                    }
                });
            }


            ///action when hp of character is changed
            if(player.statistics.hp != updatedPlayer.activePlayer.statistics.hp) {
                let damage = (player.statistics.hp-updatedPlayer.activePlayer.statistics.hp);
                player.statistics.hp = updatedPlayer.activePlayer.statistics.hp;
                setTimeout(function() {
                    player.bloodParticles.start();
                    setTimeout(function() {
                        player.bloodParticles.stop();
                    }, 100);
                    player.showDamage(damage);

                    if(player.isControllable) {
                        player.refreshHpInGui();
                    }

                    if(player.isAlive && player.statistics.hp <= 0) {
                        player.isAlive = false;
                        player.mesh.skeleton.beginAnimation('death', false);
                    }

                }, 400);

            }

            if (Number.isInteger(updatedPlayer.attack) && !player.isAttack) {
                let targetPoint = updatedPlayer.targetPoint;
                if (targetPoint) {
                    let targetPointVector3 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                    player.meshForMove.lookAt(targetPointVector3);
                }

                let attackAnimation = (Game.randomNumber(1,2) == 1) ? AbstractCharacter.ANIMATION_ATTACK_02 : AbstractCharacter.ANIMATION_ATTACK_01;
                player.runAnimationHit(attackAnimation, null, null);

                player.statistics.energy = updatedPlayer.activePlayer.statistics.energy;
                player.refreshEnergyInGui();
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
