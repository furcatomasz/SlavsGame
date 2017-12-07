var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Server;
(function (Server) {
    var BabylonManager = /** @class */ (function () {
        function BabylonManager(slavsServer) {
            /* Game Data */
            this.enemies = [];
            this.players = [];
            this.slavsServer = slavsServer;
            this.socket = socketIOClient.connect('http://127.0.0.1:' + config.server.port, { query: 'monsterServer=1' });
            this.enemies = [];
            this.players = [];
            this.initEngine();
        }
        BabylonManager.prototype.initEngine = function () {
            this.engine = new BABYLON.NullEngine();
            var scene = new BABYLON.Scene(this.engine);
            this.scene = scene;
            var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
            this
                .socketShowEnemies(scene)
                .socketUpdateEnemy()
                .socketPlayerConnected(scene)
                .socketUpdatePlayer(scene)
                .removePlayer();
            this.engine.runRenderLoop(function () {
                scene.render();
            });
        };
        /**
         * @returns {SocketIOClient}
         */
        BabylonManager.prototype.socketUpdateEnemy = function () {
            var self = this;
            this.socket.on('updateEnemy', function (data) {
                var remoteEnemy = data.enemy;
                var remoteEnemyId = data.enemyKey;
                var localEnemy = self.enemies[remoteEnemyId];
                console.log('updateEnemy');
                if (remoteEnemy.statistics.hp <= 0 && localEnemy) {
                    if (localEnemy.activeTargetPoints.length > 0) {
                        localEnemy.activeTargetPoints.forEach(function (activeTargetFunction) {
                            console.log('unregister function');
                            self.scene.unregisterBeforeRender(activeTargetFunction);
                        });
                        localEnemy.mesh.dispose();
                        self.players.forEach(function (player) {
                            var playerActionManager = player.mesh.actionManager;
                            playerActionManager.actions.forEach(function (action, key) {
                                if (action._triggerParameter == localEnemy.visibilityAreaMesh ||
                                    action._triggerParameter == localEnemy.mesh) {
                                    ///TODO: There should be unregister enemy triggers
                                    console.log('deleted from action manager');
                                    //setTimeout(function() {
                                    //    delete playerActionManager.actions[key];
                                    //});
                                }
                            });
                        });
                    }
                }
            });
            return this;
        };
        /**
         * @returns {SocketIOClient}
         */
        BabylonManager.prototype.socketShowEnemies = function (scene) {
            var self = this;
            this.socket.on('showEnemies', function (data) {
                data.forEach(function (enemyData, key) {
                    var enemy = self.enemies[key];
                    if (enemyData.statistics.hp > 0 && !enemy) {
                        var box = BABYLON.Mesh.CreateBox(data.id, 3, scene, false);
                        box.position = new BABYLON.Vector3(enemyData.position.x, enemyData.position.y, enemyData.position.z);
                        var visibilityArea = BABYLON.MeshBuilder.CreateBox('enemy_visivilityArea', {
                            width: 30,
                            height: 1,
                            size: 30
                        }, scene);
                        visibilityArea.visibility = 0.5;
                        visibilityArea.parent = box;
                        enemy = {
                            mesh: box,
                            target: false,
                            activeTargetPoints: [],
                            visibilityAreaMesh: visibilityArea
                        };
                        self.enemies[key] = enemy;
                    }
                });
            });
            return this;
        };
        BabylonManager.prototype.socketPlayerConnected = function (scene) {
            var self = this;
            this.socket.on('newPlayerConnected', function (playerData) {
                console.log('connected new player');
                var remotePlayerKey = null;
                if (playerData.id !== self.socket.id) {
                    self.players.forEach(function (remotePlayer, key) {
                        if (remotePlayer.id == playerData.id) {
                            remotePlayerKey = key;
                            return;
                        }
                    });
                    if (remotePlayerKey === null) {
                        console.log('added new player to remote player array');
                        var activePlayer = playerData.characters[playerData.activeCharacter];
                        var box = BABYLON.Mesh.CreateBox(activePlayer.id, 3, scene, false);
                        box.position = new BABYLON.Vector3(activePlayer.position.x, activePlayer.position.y, activePlayer.position.z);
                        box.actionManager = new BABYLON.ActionManager(scene);
                        var remotePlayer = {
                            id: activePlayer.id,
                            socketId: playerData.id,
                            mesh: box,
                            registeredFunction: null
                        };
                        self.players.push(remotePlayer);
                        self.registerPlayerInEnemyActionManager(box);
                    }
                }
            });
            return this;
        };
        /**
         *
         * @returns {SocketIOClient}
         */
        BabylonManager.prototype.removePlayer = function () {
            var self = this;
            this.socket.on('removePlayer', function (id) {
                console.log(id);
                self.players.forEach(function (remotePlayer, key) {
                    console.log(remotePlayer);
                    if (remotePlayer.socketId == id) {
                        var player = self.players[key];
                        console.log('remove player ' + id);
                        self.enemies.forEach(function (enemy, key) {
                            if (enemy.target == id) {
                                enemy.target = false;
                            }
                            self.scene.unregisterBeforeRender(enemy.activeTargetPoints[id]);
                        });
                        if (player.registeredFunction) {
                            self.scene.unregisterBeforeRender(player.registeredFunction);
                        }
                        player.mesh.dispose();
                        self.players.splice(key, 1);
                    }
                });
            });
            return this;
        };
        BabylonManager.prototype.registerPlayerInEnemyActionManager = function (playerMesh) {
            var self = this;
            this.enemies.forEach(function (enemy, key) {
                enemy.activeTargetPoints[playerMesh.id] = function () {
                    var mesh = enemy.mesh;
                    mesh.lookAt(playerMesh.position.clone());
                    var rotation = mesh.rotation;
                    if (mesh.rotationQuaternion) {
                        rotation = mesh.rotationQuaternion.toEulerAngles();
                    }
                    rotation.negate();
                    var forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / 8, 0, -parseFloat(Math.cos(rotation.y)) / 8);
                    mesh.moveWithCollisions(forwards);
                    mesh.position.y = 0;
                };
                ////start attack
                playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: enemy.mesh
                }, function () {
                    if (!enemy.mesh._isDisposed && enemy.target) {
                        self.socket.emit('setEnemyTarget', {
                            enemyKey: key,
                            position: enemy.mesh.position,
                            target: playerMesh.id,
                            attack: true
                        });
                        self.scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        console.log('Box coliision enter: start attack' + playerMesh.id);
                    }
                }));
                ////stop attack
                playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
                    parameter: enemy.mesh
                }, function () {
                    if (!enemy.mesh._isDisposed && enemy.target) {
                        self.socket.emit('setEnemyTarget', {
                            enemyKey: key,
                            position: enemy.mesh.position,
                            target: playerMesh.id,
                            attack: false
                        });
                        self.scene.registerBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        console.log('Box coliision exit: stop attack' + playerMesh.id);
                    }
                }));
                ///start following
                playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: enemy.visibilityAreaMesh
                }, function () {
                    if (!enemy.mesh._isDisposed && !enemy.target) {
                        self.socket.emit('setEnemyTarget', {
                            enemyKey: key,
                            position: enemy.mesh.position,
                            target: playerMesh.id
                        });
                        enemy.target = playerMesh.id;
                        self.scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        self.scene.registerBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        console.log('coliision enter:' + playerMesh.id);
                    }
                }));
                ///stop following
                playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
                    parameter: enemy.visibilityAreaMesh
                }, function () {
                    if (!enemy.mesh._isDisposed && enemy.target) {
                        self.socket.emit('setEnemyTarget', {
                            enemyKey: key,
                            position: enemy.mesh.position,
                            target: null
                        });
                        enemy.target = false;
                        console.log('coliision exit:' + playerMesh.id);
                    }
                    self.scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                }));
            });
        };
        BabylonManager.prototype.socketUpdatePlayer = function (scene) {
            var self = this;
            var activeTargetPoints = [];
            this.socket.on('updatePlayer', function (updatedPlayer) {
                var remotePlayerKey = null;
                var player = null;
                self.players.forEach(function (remotePlayer, key) {
                    if (remotePlayer.id == updatedPlayer.id) {
                        remotePlayerKey = key;
                        return;
                    }
                });
                if (remotePlayerKey != null) {
                    player = self.players[remotePlayerKey].mesh;
                    if (player) {
                        if (updatedPlayer.attack == true) {
                            console.log('playerAttack');
                            return;
                        }
                        if (self.players[remotePlayerKey].registeredFunction !== undefined) {
                            scene.unregisterBeforeRender(self.players[remotePlayerKey].registeredFunction);
                        }
                        if (updatedPlayer.targetPoint) {
                            var mesh_1 = player;
                            var targetPoint = updatedPlayer.targetPoint;
                            var targetPointVector3_1 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                            mesh_1.lookAt(targetPointVector3_1);
                            self.players[remotePlayerKey].registeredFunction = function () {
                                if (mesh_1.intersectsPoint(targetPointVector3_1)) {
                                    console.log('player intersect with target');
                                    var remotePlayer = self.players[remotePlayerKey];
                                    scene.unregisterBeforeRender(remotePlayer.registeredFunction);
                                    self.socket.emit('updatePlayerPosition', {
                                        playerSocketId: remotePlayer.socketId,
                                        position: player.position
                                    });
                                    /*

                                     socket.on('setTargetPoint', function (targetPoint) {
                                     let character = player.getActiveCharacter();
                                     character.attack = null;
                                     character.targetPoint = targetPoint.position;
                                     socket.broadcast.emit('updatePlayer', character);
                                     socket.emit('updatePlayer', character);
                                     });

                                     */
                                }
                                else {
                                    var rotation = mesh_1.rotation;
                                    if (mesh_1.rotationQuaternion) {
                                        rotation = mesh_1.rotationQuaternion.toEulerAngles();
                                    }
                                    rotation.negate();
                                    var animationRatio = scene.getAnimationRatio();
                                    var walkSpeed = 2.3 * (125 / 100) / animationRatio;
                                    var forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / walkSpeed, 0, -parseFloat(Math.cos(rotation.y)) / walkSpeed);
                                    mesh_1.moveWithCollisions(forwards);
                                    mesh_1.position.y = 0;
                                }
                            };
                            scene.registerBeforeRender(self.players[remotePlayerKey].registeredFunction);
                        }
                    }
                }
            });
            return this;
        };
        return BabylonManager;
    }());
    Server.BabylonManager = BabylonManager;
})(Server || (Server = {}));
var Server;
(function (Server) {
    var EnemyManager = /** @class */ (function () {
        function EnemyManager() {
        }
        EnemyManager.prototype.getEnemies = function () {
            var enemies = [];
            enemies[2] = [
                new Worm(0, { x: -2, y: 0, z: -30 }, [9]),
                new Worm(1, { x: -2, y: 0, z: -64 }, [9]),
                new Worm(2, { x: -8, y: 0, z: -72 }, [9]),
            ];
            return enemies;
        };
        return EnemyManager;
    }());
    Server.EnemyManager = EnemyManager;
})(Server || (Server = {}));
var Server;
(function (Server) {
    var GameModules = /** @class */ (function () {
        function GameModules() {
        }
        GameModules.prototype.loadModules = function (callback) {
            var self = this;
            new Promise(function (modulesIsLoaded) {
                requirejs(["./../../shared/Character/Character"], function (CharacterModule) {
                    self.character = CharacterModule.Character;
                    modulesIsLoaded();
                });
            }).then(function (resolve) {
                callback();
            });
        };
        return GameModules;
    }());
    Server.GameModules = GameModules;
})(Server || (Server = {}));
var Server;
(function (Server) {
    var OrmManager = /** @class */ (function () {
        function OrmManager(server, orm, config) {
            this.server = server;
            var self = this;
            var ormPassword = (config.server.orm.password) ? ':' + config.server.orm.password + '' : '';
            orm.connect('mysql://' + config.server.orm.username + '' + ormPassword + '@' + config.server.orm.host + '/' + config.server.orm.database + '', function (err, db) {
                if (err)
                    throw err;
                self.structure = new Server.Orm.Structure(db);
                db.sync(function (err) {
                    if (err)
                        throw err;
                    new Server.Orm.TestData(self);
                });
            });
        }
        return OrmManager;
    }());
    Server.OrmManager = OrmManager;
})(Server || (Server = {}));
var Server;
(function (Server) {
    var QuestManager = /** @class */ (function () {
        function QuestManager() {
        }
        QuestManager.prototype.getQuests = function () {
            var quests = [];
            quests[1] = new Server.Quests.Models.Quest(1, [
                new Server.Quests.Models.ModelAward(1, 1)
            ], [
                new Server.Quests.Models.Requirement(1, 3)
            ]);
            return quests;
        };
        return QuestManager;
    }());
    Server.QuestManager = QuestManager;
})(Server || (Server = {}));
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var socketIOClient = require('socket.io-client');
var orm = require("orm");
var config = require("./../config.js");
var BABYLON = require("../../bower_components/babylonjs/dist/preview release/babylon.max");
var LOADERS = require("../../bower_components/babylonjs/dist/preview release/loaders/babylonjs.loaders");
var requirejs = require('requirejs');
server.listen(config.server.port);
var SlavsServer = /** @class */ (function () {
    function SlavsServer() {
        this.enemies = [];
        this.quests = [];
        var self = this;
        this.ormManager = new Server.OrmManager(self, orm, config);
        this.gameModules = new Server.GameModules();
        this.gameModules.loadModules(function () {
            self.enemyManager = new Server.EnemyManager();
            self.questManager = new Server.QuestManager();
            self.enemies = self.enemyManager.getEnemies();
            self.quests = self.questManager.getQuests();
            self.serverFrontEnd = new Server.FrontEnd(self, app, express);
            self.babylonManager = new Server.BabylonManager(self);
            self.serverWebsocket = new Server.IO(self, io);
        });
    }
    return SlavsServer;
}());
setTimeout(function () {
    new SlavsServer();
}, 0);
var path = require('path');
var Server;
(function (Server) {
    var FrontEnd = /** @class */ (function () {
        function FrontEnd(server, expressApp, express) {
            this.server = server;
            expressApp.use('/bower_components', express.static(path.resolve(__dirname + '/../../bower_components')));
            expressApp.use('/assets', express.static(path.resolve(__dirname + '/../../assets')));
            expressApp.use('/dist', express.static(path.resolve(__dirname + '/../../dist')));
            expressApp.get('/', function (req, res, next) {
                res.sendFile(path.resolve(__dirname + '/../frontend/index.html'));
            });
        }
        return FrontEnd;
    }());
    Server.FrontEnd = FrontEnd;
})(Server || (Server = {}));
var Server;
(function (Server) {
    var IO = /** @class */ (function () {
        function IO(server, serverIO) {
            this.remotePlayers = [];
            var self = this;
            var enemies = server.enemies;
            var remotePlayers = this.remotePlayers;
            this.server = server;
            serverIO.on('connection', function (socket) {
                var isMonsterServer = socket.handshake.query.monsterServer;
                var player = new Server.Player(socket.id);
                player.activeCharacter = 1;
                if (!isMonsterServer) {
                    ////CLEAR QUESTS
                    server.ormManager.structure.playerQuest.allAsync().then(function (playerQuests) {
                        for (var _i = 0, playerQuests_1 = playerQuests; _i < playerQuests_1.length; _i++) {
                            var playerQuest = playerQuests_1[_i];
                            playerQuest.remove();
                        }
                    });
                    player.refreshPlayerData(server, function () {
                        socket.emit('clientConnected', player);
                    });
                }
                else {
                    player.activeScene = 2;
                    socket.emit('showEnemies', enemies[player.activeScene]);
                    socket.on('updatePlayerPosition', function (updatedPlayer) {
                        self.remotePlayers.forEach(function (remotePlayer, remotePlayerKey) {
                            if (remotePlayer.id == updatedPlayer.playerSocketId) {
                                console.log('updatedPlayerPosition');
                                var remotePlayer_1 = self.remotePlayers[remotePlayerKey];
                                remotePlayer_1.getActiveCharacter().position = updatedPlayer.position;
                                socket.broadcast.emit('updatePlayer', remotePlayer_1);
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
                    var questId = quest.id;
                    var playerId = player.characters[player.activeCharacter].id;
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
                    var character = player.getActiveCharacter();
                    character.attack = null;
                    character.targetPoint = targetPoint.position;
                    socket.broadcast.emit('updatePlayer', character);
                    socket.emit('updatePlayer', character);
                });
                socket.on('attack', function (data) {
                    if (player.lastPlayerAttack > new Date().getTime() - 1000) {
                        return;
                    }
                    player.lastPlayerAttack = new Date().getTime();
                    var activeCharacter = player.getActiveCharacter();
                    activeCharacter.attack = data.attack;
                    activeCharacter.targetPoint = data.targetPoint;
                    enemies[player.activeScene].forEach(function (enemy, enemyKey) {
                        enemy.availableAttacksFromCharacters.forEach(function (isAtacked, characterId) {
                            if (isAtacked === true) {
                                if (activeCharacter.id == characterId) {
                                    var attackCharacter = activeCharacter;
                                    var damage = attackCharacter.statistics.getDamage();
                                    enemy.statistics.hp -= damage;
                                    var emitObject = {
                                        enemy: enemy,
                                        enemyKey: enemyKey
                                    };
                                    console.log('updateEnemyAttack');
                                    socket.emit('updateEnemy', emitObject);
                                    socket.broadcast.emit('updateEnemy', emitObject);
                                    ///enemy is killed
                                    if (enemy.statistics.hp <= 0) {
                                        enemy.availableAttacksFromCharacters = [];
                                        var enemyItem = enemy.itemsToDrop[0];
                                        var itemDropKey = player.getActiveCharacter().itemsDrop.push(enemyItem) - 1;
                                        var earnedExperience_1 = enemy.experience;
                                        var playerId = player.getActiveCharacter().id;
                                        var itemManager = new Items.ItemManager();
                                        var item = itemManager.getItemUsingId(enemyItem, 0);
                                        socket.emit('showDroppedItem', {
                                            item: item,
                                            itemKey: itemDropKey,
                                            enemyId: enemyKey
                                        });
                                        self.server.ormManager.structure.player.get(playerId, function (error, playerDatabase) {
                                            playerDatabase.experience += earnedExperience_1;
                                            socket.emit('addExperience', {
                                                experience: earnedExperience_1
                                            });
                                            var newLvl = (playerDatabase.lvl) ? playerDatabase.lvl + 1 : 1;
                                            var requiredExperience = self.server.gameModules.character.getLvls()[newLvl];
                                            if (playerDatabase.experience >= requiredExperience) {
                                                playerDatabase.lvl += 1;
                                                playerDatabase.freeAttributesPoints += 5;
                                                playerDatabase.freeSkillPoints += 1;
                                                socket.emit('newLvl', playerDatabase);
                                            }
                                            playerDatabase.save();
                                        });
                                    }
                                    console.log('Attack character ID:' + characterId + ' on enemy with dmg' + damage);
                                }
                            }
                        });
                    });
                    socket.broadcast.emit('updatePlayer', activeCharacter);
                    socket.emit('updatePlayer', activeCharacter);
                });
                socket.on('itemEquip', function (item) {
                    var itemId = item.id;
                    var equip = item.equip;
                    self.server.ormManager.structure.playerItems.oneAsync({
                        id: itemId,
                        player_id: player.characters[player.activeCharacter].id
                    }).then(function (itemDatabase) {
                        itemDatabase.equip = (item.equip) ? 1 : 0;
                        itemDatabase.saveAsync().then(function () {
                            server.ormManager.structure.playerItems.findAsync({ player_id: player.characters[player.activeCharacter].id }).then(function (playerItems) {
                                player.characters[player.activeCharacter].items = playerItems;
                                socket.broadcast.emit('updateEnemyEquip', player);
                            });
                        });
                    });
                });
                socket.on('addDoppedItem', function (itemsKey) {
                    var playerId = player.characters[player.activeCharacter].id;
                    var itemId = player.getActiveCharacter().itemsDrop[itemsKey];
                    var itemManager = new Items.ItemManager();
                    var item = itemManager.getItemUsingId(itemId, 0);
                    if (itemId) {
                        self.server.ormManager.structure.playerItems.create({
                            player_id: playerId,
                            itemId: itemId,
                            improvement: 0,
                            equip: 0
                        }, function (error, addedItem) {
                            player.getActiveCharacter().inventory.items.push(item);
                            socket.emit('updatePlayerEquip', player.getActiveCharacter().inventory.items);
                        });
                    }
                });
                socket.on('addAttribute', function (attribute) {
                    var type = attribute.type;
                    self.server.ormManager.structure.player.oneAsync({
                        id: player.characters[player.activeCharacter].id
                    }).then(function (playerDatabase) {
                        if (playerDatabase.freeAttributesPoints) {
                            self.server.ormManager.structure.playerAttributes
                                .oneAsync({ player_id: playerDatabase.id })
                                .then(function (attributes) {
                                new Promise(function (resolveFind) {
                                    if (!attributes) {
                                        self.server.ormManager.structure.playerAttributes.create({ player_id: playerDatabase.id }, function (err, insertedAttributes) {
                                            attributes = insertedAttributes;
                                            resolveFind();
                                        });
                                    }
                                    else {
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
                                    player.refreshPlayerData(server, function () {
                                        socket.emit('attributeAdded', player);
                                    });
                                });
                            });
                        }
                    });
                });
                socket.on('learnSkill', function (skill) {
                    var skillType = skill.skillType;
                    var skillPowerType = skill.powerType;
                    var isCreated = false;
                    self.server.ormManager.structure.player.oneAsync({
                        id: player.characters[player.activeCharacter].id
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
                                    }
                                    else {
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
                    var sceneType = sceneData.sceneType;
                    player.getActiveCharacter().position = self.getDefaultPositionForScene(sceneType);
                    socket.emit('showPlayer', player);
                });
                socket.on('changeScenePost', function (sceneData) {
                    player.activeScene = sceneData.sceneType;
                    socket.emit('showEnemies', enemies[sceneData.sceneType]);
                });
                ///Enemies
                socket.on('setEnemyTarget', function (data) {
                    var enemy = enemies[player.activeScene][data.enemyKey];
                    enemy.position = data.position;
                    enemy.target = data.target;
                    enemy.attack = data.attack;
                    enemy.availableAttacksFromCharacters[data.target] = data.attack;
                    socket.broadcast.emit('updateEnemy', {
                        enemy: enemy,
                        enemyKey: data.enemyKey
                    });
                });
            });
        }
        IO.prototype.getDefaultPositionForScene = function (sceneType) {
            var position = null;
            if (sceneType == 3) {
                position = {
                    x: -73,
                    y: 0,
                    z: -4
                };
            }
            else if (sceneType == 2) {
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
        ;
        return IO;
    }());
    Server.IO = IO;
})(Server || (Server = {}));
var Server;
(function (Server) {
    var Orm;
    (function (Orm) {
        var Structure = /** @class */ (function () {
            function Structure(db) {
                this.user = db.define("user", {
                    email: String,
                    password: String
                });
                this.player = db.define("player", {
                    name: String,
                    type: String,
                    lvl: Number,
                    experience: Number,
                    freeSkillPoints: Number,
                    freeAttributesPoints: Number,
                    scene: Number,
                    positionX: Number,
                    positionY: Number,
                    positionZ: Number
                });
                this.player.hasOne("user", this.player, {
                    reverse: "players"
                });
                this.playerAttributes = db.define("player_attributes", {
                    attackSpeed: Number,
                    defence: Number,
                    damage: Number,
                    health: Number,
                    critic: Number,
                    blockChance: Number
                });
                this.playerAttributes.hasOne("player", this.player, {
                    reverse: "attributes"
                });
                this.playerSkills = db.define("player_skills", {
                    skillType: Number,
                    cooldown: Number,
                    damage: Number,
                    stock: Number
                });
                this.playerSkills.hasOne("player", this.player, {
                    reverse: "skills"
                });
                this.playerOnline = db.define("player_online", {
                    connectDate: Date,
                    activityDate: Date
                });
                this.playerOnline.hasOne("player", this.player);
                this.playerItems = db.define("player_items", {
                    itemId: Number,
                    improvement: Number,
                    equip: Number
                });
                this.playerItems.hasOne("player", this.player, {
                    reverse: "items"
                });
                this.playerQuest = db.define("player_quest", {
                    questId: Number,
                    date: Date
                });
                this.playerQuest.hasOne("player", this.player, {
                    reverse: "activeQuests"
                });
                this.playerQuestRequirements = db.define("player_quest_requirements", {
                    requirementId: Number,
                    value: Number
                });
                this.playerQuestRequirements.hasOne("player", this.player, {
                    reverse: "questRequirements"
                });
            }
            return Structure;
        }());
        Orm.Structure = Structure;
    })(Orm = Server.Orm || (Server.Orm = {}));
})(Server || (Server = {}));
var Server;
(function (Server) {
    var Orm;
    (function (Orm) {
        var TestData = /** @class */ (function () {
            function TestData(ormManager) {
                this.ormManager = ormManager;
                ormManager.structure.user.exists({ email: "furcatomasz@gmail.com" }, function (err, exists) {
                    if (err)
                        throw err;
                    if (!exists) {
                        ormManager.structure.user.create({ email: "furcatomasz@gmail.com" }, function (err) {
                            if (err)
                                throw err;
                        });
                    }
                });
                ormManager.structure.user.find({ email: "furcatomasz@gmail.com" }, function (err, user) {
                    if (err)
                        throw err;
                    var userId = user[0].id;
                    ormManager.structure.player.exists({ name: "Mietek" }, function (err, exists) {
                        if (err)
                            throw err;
                        if (!exists) {
                            ormManager.structure.player.create({ name: "Mietek", type: 1, user_id: userId, lvl: 0 }, function (err, insertedPlayer) {
                                if (err)
                                    throw err;
                                var insertedPlayerId = insertedPlayer.id;
                                ormManager.structure.playerItems.create([
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 1,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 2,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 3,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 4,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 5,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 6,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 7,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 8,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 9,
                                        improvement: 0,
                                        equip: 0
                                    },
                                ], function (err) {
                                    if (err)
                                        throw err;
                                });
                            });
                        }
                    });
                    ormManager.structure.player.exists({ name: "Tumek" }, function (err, exists) {
                        if (err)
                            throw err;
                        if (!exists) {
                            ormManager.structure.player.create({ name: "Tumek", type: 1, user_id: userId, lvl: 0 }, function (err, insertedPlayer) {
                                if (err)
                                    throw err;
                                var insertedPlayerId = insertedPlayer.id;
                                ormManager.structure.playerItems.create([
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 1,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 2,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 3,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 4,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 5,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 6,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 7,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 8,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        player_id: insertedPlayerId,
                                        itemId: 9,
                                        improvement: 0,
                                        equip: 0
                                    },
                                ], function (err) {
                                    if (err)
                                        throw err;
                                });
                            });
                        }
                    });
                });
            }
            return TestData;
        }());
        Orm.TestData = TestData;
    })(Orm = Server.Orm || (Server.Orm = {}));
})(Server || (Server = {}));
var Server;
(function (Server) {
    var Quests;
    (function (Quests) {
        var Models;
        (function (Models) {
            var ModelAward = /** @class */ (function () {
                function ModelAward(awardId, value) {
                    this.awardId = awardId;
                    this.value = value;
                }
                return ModelAward;
            }());
            Models.ModelAward = ModelAward;
        })(Models = Quests.Models || (Quests.Models = {}));
    })(Quests = Server.Quests || (Server.Quests = {}));
})(Server || (Server = {}));
var Server;
(function (Server) {
    var Quests;
    (function (Quests) {
        var Models;
        (function (Models) {
            var Quest = /** @class */ (function () {
                function Quest(questId, awards, requirements) {
                    this.questId = questId;
                    this.awards = awards;
                    this.requirements = requirements;
                }
                return Quest;
            }());
            Models.Quest = Quest;
        })(Models = Quests.Models || (Quests.Models = {}));
    })(Quests = Server.Quests || (Server.Quests = {}));
})(Server || (Server = {}));
var Server;
(function (Server) {
    var Quests;
    (function (Quests) {
        var Models;
        (function (Models) {
            var Requirement = /** @class */ (function () {
                function Requirement(requirementId, value) {
                    this.requirementId = requirementId;
                    this.value = value;
                }
                return Requirement;
            }());
            Models.Requirement = Requirement;
        })(Models = Quests.Models || (Quests.Models = {}));
    })(Quests = Server.Quests || (Server.Quests = {}));
})(Server || (Server = {}));
var Monster = /** @class */ (function () {
    function Monster(id, position, itemsToDrop) {
        this.id = id;
        this.position = position;
        this.itemsToDrop = itemsToDrop;
        this.availableAttacksFromCharacters = [];
    }
    return Monster;
}());
var Worm = /** @class */ (function (_super) {
    __extends(Worm, _super);
    function Worm(id, position, itemsToDrop) {
        var _this = _super.call(this, id, position, itemsToDrop) || this;
        _this.name = 'Worm';
        _this.type = 'worm';
        _this.meshName = 'Worm';
        _this.lvl = 1;
        _this.experience = 10;
        _this.attackAreaSize = 2;
        _this.visibilityAreaSize = 10;
        _this.statistics = new Attributes.CharacterStatistics(80, 80, 100, 3, 10, 40, 0, 100);
        return _this;
    }
    return Worm;
}(Monster));
var Server;
(function (Server) {
    var Character = /** @class */ (function () {
        function Character(id) {
            this.id = id;
            this.itemsDrop = [];
            this.inventory = new Server.Inventory();
        }
        Character.prototype.setConnectionId = function (value) {
            this.connectionId = value;
            return this;
        };
        Character.prototype.setName = function (value) {
            this.name = value;
            return this;
        };
        Character.prototype.setExperience = function (value) {
            this.experience = value;
            return this;
        };
        Character.prototype.setLvl = function (value) {
            this.lvl = value;
            return this;
        };
        Character.prototype.setFreeAttributesPoints = function (value) {
            this.freeAttributesPoints = value;
            return this;
        };
        Character.prototype.setFreeSkillPoints = function (value) {
            this.freeSkillPoints = value;
            return this;
        };
        Character.prototype.setSkills = function (skills) {
            var self = this;
            this.skills = [];
            skills.forEach(function (skillDatabase) {
                var skill = Skills.SkillsManager.getSkill(skillDatabase.skillType);
                skill.setPower(skillDatabase.cooldown, skillDatabase.damage, skillDatabase.stock);
                self.skills.push(skill);
            });
            return this;
        };
        Character.prototype.setItemsOnCharacter = function (items) {
            var itemManager = new Items.ItemManager();
            itemManager.initItemsFromDatabaseOnCharacter(items, this);
            return this;
        };
        Character.prototype.calculateCharacterStatistics = function (attributes) {
            if (!attributes) {
                attributes = {
                    health: 0,
                    attackSpeed: 0,
                    defence: 0,
                    damage: 0,
                    blockChance: 0
                };
            }
            var statistics = new Attributes.CharacterStatistics(100 + attributes.health * 5, 100 + attributes.health * 5, 100 + attributes.attackSpeed, 15 + attributes.damage * 5, 10 + attributes.defence * 5, (125 / 100) * 2.3, 50 + attributes.blockChance, 100);
            statistics.addItemsStatistics(this);
            this.statistics = statistics;
            return this;
        };
        return Character;
    }());
    Server.Character = Character;
})(Server || (Server = {}));
var Server;
(function (Server) {
    var Inventory = /** @class */ (function () {
        function Inventory() {
            this.items = [];
        }
        /**
         * @param item
         */
        Inventory.prototype.removeItem = function (item) {
        };
        /**
         * @param item
         * @param setItem
         */
        Inventory.prototype.equip = function (item, setItem) {
            switch (item.getType()) {
                case Items.Weapon.TYPE:
                    this.removeItem(this.weapon);
                    this.weapon = null;
                    if (setItem) {
                        this.weapon = item;
                    }
                    break;
                case Items.Shield.TYPE:
                    this.removeItem(this.shield);
                    this.shield = null;
                    if (setItem) {
                        this.shield = item;
                    }
                    break;
                case Items.Helm.TYPE:
                    this.removeItem(this.helm);
                    this.helm = null;
                    if (setItem) {
                        this.helm = item;
                    }
                    break;
                case Items.Gloves.TYPE:
                    this.removeItem(this.gloves);
                    this.gloves = null;
                    if (setItem) {
                        this.gloves = item;
                    }
                    break;
                case Items.Boots.TYPE:
                    this.removeItem(this.boots);
                    this.boots = null;
                    if (setItem) {
                        this.boots = item;
                    }
                    break;
                case Items.Armor.TYPE:
                    this.removeItem(this.armor);
                    this.armor = null;
                    if (setItem) {
                        this.armor = item;
                    }
                    break;
            }
        };
        /**
         * Value 1 define mounting item usign bone, value 2 define mounting using skeleton.
         * @param item
         * @returns {AbstractCharacter.Inventory}
         */
        Inventory.prototype.mount = function (item) {
            this.equip(item, true);
            return this;
        };
        /**
         *
         * @param item
         * @returns {Character.Inventory}
         */
        Inventory.prototype.umount = function (item) {
            this.equip(item, false);
            return this;
        };
        return Inventory;
    }());
    Server.Inventory = Inventory;
})(Server || (Server = {}));
var Server;
(function (Server) {
    var Player = /** @class */ (function () {
        function Player(id) {
            this.id = id;
            this.characters = [];
        }
        Player.prototype.getActiveCharacter = function () {
            return this.characters[this.activeCharacter];
        };
        Player.prototype.refreshPlayerData = function (server, callback) {
            var self = this;
            self.characters = [];
            server.ormManager.structure.user.oneAsync({ email: "furcatomasz@gmail.com" }).then(function (user) {
                server.ormManager.structure.player.findAsync({ user_id: user.id }).then(function (players) {
                    var _loop_1 = function (i) {
                        var playerDatabase = players[i];
                        server.ormManager.structure.playerItems
                            .findAsync({ player_id: playerDatabase.id })
                            .then(function (items) {
                            playerDatabase.items = items;
                            server.ormManager.structure.playerAttributes
                                .oneAsync({ player_id: playerDatabase.id })
                                .then(function (attributes) {
                                playerDatabase.attributes = attributes;
                                server.ormManager.structure.playerSkills
                                    .findAsync({ player_id: playerDatabase.id })
                                    .then(function (skills) {
                                    playerDatabase.skills = skills;
                                    if (i == players.length - 1) {
                                        players.forEach(function (player) {
                                            var character = new Server.Character(player.id);
                                            character
                                                .setName(player.name)
                                                .setExperience(player.experience)
                                                .setFreeAttributesPoints(player.freeAttributesPoints)
                                                .setFreeSkillPoints(player.freeSkillPoints)
                                                .setLvl(player.lvl)
                                                .setConnectionId(self.id)
                                                .setItemsOnCharacter(player.items)
                                                .setSkills(player.skills)
                                                .calculateCharacterStatistics(player.attributes);
                                            self.characters.push(character);
                                        });
                                        callback();
                                    }
                                });
                            });
                        });
                    };
                    for (var i = 0; i < players.length; i++) {
                        _loop_1(i);
                    }
                });
            });
        };
        ;
        return Player;
    }());
    Server.Player = Player;
})(Server || (Server = {}));
var Attributes;
(function (Attributes) {
    var AbstractStatistics = /** @class */ (function () {
        function AbstractStatistics(hp, hpMax, attackSpeed, damage, armor, walkSpeed, blockChance, hitChance) {
            if (hp === void 0) { hp = 0; }
            if (hpMax === void 0) { hpMax = 0; }
            if (attackSpeed === void 0) { attackSpeed = 0; }
            if (damage === void 0) { damage = 0; }
            if (armor === void 0) { armor = 0; }
            if (walkSpeed === void 0) { walkSpeed = 0; }
            if (blockChance === void 0) { blockChance = 0; }
            if (hitChance === void 0) { hitChance = 0; }
            this.hp = hp;
            this.hpMax = hpMax;
            this.attackSpeed = attackSpeed;
            this.walkSpeed = walkSpeed;
            this.blockChance = blockChance;
            this.hitChance = hitChance;
            this.armor = armor;
            this.damage = damage;
        }
        AbstractStatistics.prototype.getHp = function () {
            return this.hp;
        };
        AbstractStatistics.prototype.getHpMax = function () {
            return this.hpMax;
        };
        AbstractStatistics.prototype.getAttackSpeed = function () {
            return this.attackSpeed;
        };
        AbstractStatistics.prototype.getWalkSpeed = function () {
            return this.walkSpeed;
        };
        AbstractStatistics.prototype.getBlockChance = function () {
            return this.blockChance;
        };
        AbstractStatistics.prototype.getHitChance = function () {
            return this.hitChance;
        };
        AbstractStatistics.prototype.getDamage = function () {
            return this.damage;
        };
        AbstractStatistics.prototype.getArmor = function () {
            return this.armor;
        };
        return AbstractStatistics;
    }());
    Attributes.AbstractStatistics = AbstractStatistics;
})(Attributes || (Attributes = {}));
var Attributes;
(function (Attributes) {
    var CharacterStatistics = /** @class */ (function (_super) {
        __extends(CharacterStatistics, _super);
        function CharacterStatistics(hp, hpMax, attackSpeed, damage, armor, walkSpeed, blockChance, hitChance) {
            if (hp === void 0) { hp = 0; }
            if (hpMax === void 0) { hpMax = 0; }
            if (attackSpeed === void 0) { attackSpeed = 0; }
            if (damage === void 0) { damage = 0; }
            if (armor === void 0) { armor = 0; }
            if (walkSpeed === void 0) { walkSpeed = 0; }
            if (blockChance === void 0) { blockChance = 0; }
            if (hitChance === void 0) { hitChance = 0; }
            return _super.call(this, hp, hpMax, attackSpeed, damage, armor, walkSpeed, blockChance, hitChance) || this;
        }
        CharacterStatistics.prototype.addItemsStatistics = function (character) {
            this.setArmor(this.armor, character);
            this.setDamage(this.damage, character);
            return this;
        };
        CharacterStatistics.prototype.getItemsStats = function (character) {
            var statistics = new Attributes.EquipStatistics();
            if (character) {
                var inventory = character.inventory;
                var equipedItems = [];
                equipedItems.push(inventory.helm);
                equipedItems.push(inventory.gloves);
                equipedItems.push(inventory.armor);
                equipedItems.push(inventory.weapon);
                equipedItems.push(inventory.shield);
                equipedItems.push(inventory.boots);
                for (var i = 0; i < equipedItems.length; i++) {
                    var item = equipedItems[i];
                    if (item) {
                        statistics.addStatisticsFromItem(item.statistics);
                    }
                }
            }
            return statistics;
        };
        CharacterStatistics.prototype.setDamage = function (damage, character) {
            var equipStatistics = this.getItemsStats(character);
            this.damage = damage + equipStatistics.getDamage();
            return this;
        };
        CharacterStatistics.prototype.setArmor = function (armor, character) {
            var equipStatistics = this.getItemsStats(character);
            this.armor = armor + equipStatistics.getArmor();
            return this;
        };
        return CharacterStatistics;
    }(Attributes.AbstractStatistics));
    Attributes.CharacterStatistics = CharacterStatistics;
})(Attributes || (Attributes = {}));
var Attributes;
(function (Attributes) {
    var AbstractStatistics = Attributes.AbstractStatistics;
    var EquipStatistics = /** @class */ (function (_super) {
        __extends(EquipStatistics, _super);
        function EquipStatistics() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EquipStatistics.prototype.addStatisticsFromItem = function (statistics) {
            if (statistics.getDamage()) {
                this.damage += statistics.getDamage();
            }
            if (statistics.getArmor()) {
                this.armor += statistics.getArmor();
            }
        };
        return EquipStatistics;
    }(AbstractStatistics));
    Attributes.EquipStatistics = EquipStatistics;
})(Attributes || (Attributes = {}));
var Attributes;
(function (Attributes) {
    var AbstractStatistics = Attributes.AbstractStatistics;
    var ItemStatistics = /** @class */ (function (_super) {
        __extends(ItemStatistics, _super);
        function ItemStatistics() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ItemStatistics;
    }(AbstractStatistics));
    Attributes.ItemStatistics = ItemStatistics;
})(Attributes || (Attributes = {}));
var Items;
(function (Items) {
    var Item = /** @class */ (function () {
        function Item(databaseId) {
            this.databaseId = databaseId;
        }
        Item.TYPE = 0;
        Item.ITEM_ID = 0;
        return Item;
    }());
    Items.Item = Item;
})(Items || (Items = {}));
var Items;
(function (Items) {
    var ItemManager = /** @class */ (function () {
        function ItemManager() {
        }
        /**
         *
         * @param itemId
         * @param databaseId
         * @returns {null}
         */
        ItemManager.prototype.getItemUsingId = function (itemId, databaseId) {
            return this.getItem(itemId, databaseId);
        };
        /**
         *
         * @param inventoryItems
         * @param character
         */
        ItemManager.prototype.initItemsFromDatabaseOnCharacter = function (inventoryItems, character) {
            var self = this;
            var inventory = character.inventory;
            inventory.items = [];
            inventoryItems.forEach(function (itemDatabase) {
                var item = self.getItemUsingId(itemDatabase.itemId, itemDatabase.id);
                inventory.items.push(item);
                if (itemDatabase.equip) {
                    item.equip = itemDatabase.equip;
                    inventory.mount(item);
                }
            });
        };
        /**
         *
         * @param id
         * @param databaseId
         * @returns Items.Item
         */
        ItemManager.prototype.getItem = function (id, databaseId) {
            var item = null;
            switch (id) {
                case Items.Armors.Robe.ITEM_ID:
                    item = new Items.Armors.Robe(databaseId);
                    break;
                case Items.Armors.PrimaryArmor.ITEM_ID:
                    item = new Items.Armors.PrimaryArmor(databaseId);
                    break;
                case Items.Boots.PrimaryBoots.ITEM_ID:
                    item = new Items.Boots.PrimaryBoots(databaseId);
                    break;
                case Items.Gloves.PrimaryGloves.ITEM_ID:
                    item = new Items.Gloves.PrimaryGloves(databaseId);
                    break;
                case Items.Helms.PrimaryHelm.ITEM_ID:
                    item = new Items.Helms.PrimaryHelm(databaseId);
                    break;
                case Items.Shields.WoodShield.ITEM_ID:
                    item = new Items.Shields.WoodShield(databaseId);
                    break;
                case Items.Weapons.Axe.ITEM_ID:
                    item = new Items.Weapons.Axe(databaseId);
                    break;
                case Items.Weapons.Sword.ITEM_ID:
                    item = new Items.Weapons.Sword(databaseId);
                    break;
            }
            return item;
        };
        return ItemManager;
    }());
    Items.ItemManager = ItemManager;
})(Items || (Items = {}));
var Skills;
(function (Skills) {
    var AbstractSkill = /** @class */ (function () {
        function AbstractSkill() {
        }
        AbstractSkill.prototype.setPower = function (cooldown, damage, stock) {
            if (cooldown === void 0) { cooldown = 0; }
            if (damage === void 0) { damage = 0; }
            if (stock === void 0) { stock = 0; }
            this.cooldown = cooldown;
            this.damage = damage;
            this.stock = stock;
        };
        AbstractSkill.TYPE = 0;
        return AbstractSkill;
    }());
    Skills.AbstractSkill = AbstractSkill;
})(Skills || (Skills = {}));
var Skills;
(function (Skills) {
    var DoubleAttack = /** @class */ (function (_super) {
        __extends(DoubleAttack, _super);
        function DoubleAttack() {
            var _this = this;
            _this.name = 'Double Attack';
            _this.type = Skills.DoubleAttack.TYPE;
            return _this;
        }
        DoubleAttack.TYPE = 1;
        return DoubleAttack;
    }(Skills.AbstractSkill));
    Skills.DoubleAttack = DoubleAttack;
})(Skills || (Skills = {}));
var Skills;
(function (Skills) {
    var SkillsManager = /** @class */ (function () {
        function SkillsManager() {
        }
        /**
         *
         * @param type
         * @returns {Skills.AbstractSkill}
         */
        SkillsManager.getSkill = function (type) {
            var skill = null;
            switch (type) {
                case Skills.DoubleAttack.TYPE:
                    skill = new Skills.DoubleAttack();
                    break;
                case Skills.Tornado.TYPE:
                    skill = new Skills.Tornado();
                    break;
            }
            return skill;
        };
        return SkillsManager;
    }());
    Skills.SkillsManager = SkillsManager;
})(Skills || (Skills = {}));
var Skills;
(function (Skills) {
    var Tornado = /** @class */ (function (_super) {
        __extends(Tornado, _super);
        function Tornado() {
            var _this = this;
            _this.name = 'Tornado';
            _this.type = Skills.Tornado.TYPE;
            return _this;
        }
        Tornado.TYPE = 2;
        return Tornado;
    }(Skills.AbstractSkill));
    Skills.Tornado = Tornado;
})(Skills || (Skills = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Armor = /** @class */ (function (_super) {
        __extends(Armor, _super);
        /**
         * @param databaseId
         */
        function Armor(databaseId) {
            var _this = this;
            _this.type = Items.Armor.TYPE;
            _this = _super.call(this, databaseId) || this;
            return _this;
        }
        /**
         * @returns {number}
         */
        Armor.prototype.getType = function () {
            return Items.Armor.TYPE;
        };
        Armor.TYPE = 6;
        return Armor;
    }(Items.Item));
    Items.Armor = Armor;
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Armors;
    (function (Armors) {
        var PrimaryArmor = /** @class */ (function (_super) {
            __extends(PrimaryArmor, _super);
            function PrimaryArmor(databaseId) {
                var _this = _super.call(this, databaseId) || this;
                _this.name = 'Armor';
                _this.image = 'Armor';
                _this.itemId = Items.Armors.PrimaryArmor.ITEM_ID;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.meshName = 'Armor';
                return _this;
            }
            PrimaryArmor.ITEM_ID = 1;
            return PrimaryArmor;
        }(Items.Armor));
        Armors.PrimaryArmor = PrimaryArmor;
    })(Armors = Items.Armors || (Items.Armors = {}));
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Armors;
    (function (Armors) {
        var Robe = /** @class */ (function (_super) {
            __extends(Robe, _super);
            function Robe(databaseId) {
                var _this = _super.call(this, databaseId) || this;
                _this.name = 'Robe';
                _this.image = 'Armor';
                _this.itemId = Items.Armors.Robe.ITEM_ID;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.meshName = 'Warrior.001';
                return _this;
            }
            Robe.ITEM_ID = 2;
            return Robe;
        }(Items.Armor));
        Armors.Robe = Robe;
    })(Armors = Items.Armors || (Items.Armors = {}));
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Boots = /** @class */ (function (_super) {
        __extends(Boots, _super);
        /**
         * @param databaseId
         */
        function Boots(databaseId) {
            var _this = this;
            _this.type = Items.Boots.TYPE;
            _this = _super.call(this, databaseId) || this;
            return _this;
        }
        /**
         * @returns {number}
         */
        Boots.prototype.getType = function () {
            return Items.Boots.TYPE;
        };
        Boots.TYPE = 5;
        return Boots;
    }(Items.Item));
    Items.Boots = Boots;
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Boots;
    (function (Boots) {
        var PrimaryBoots = /** @class */ (function (_super) {
            __extends(PrimaryBoots, _super);
            function PrimaryBoots(databaseId) {
                var _this = _super.call(this, databaseId) || this;
                _this.name = 'Boots';
                _this.image = 'Boots';
                _this.itemId = Items.Boots.PrimaryBoots.ITEM_ID;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.meshName = 'Boots';
                return _this;
            }
            PrimaryBoots.ITEM_ID = 3;
            return PrimaryBoots;
        }(Boots));
        Boots.PrimaryBoots = PrimaryBoots;
    })(Boots = Items.Boots || (Items.Boots = {}));
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Gloves = /** @class */ (function (_super) {
        __extends(Gloves, _super);
        /**
         * @param databaseId
         */
        function Gloves(databaseId) {
            var _this = this;
            _this.type = Items.Gloves.TYPE;
            _this = _super.call(this, databaseId) || this;
            return _this;
        }
        /**
         * @returns {number}
         */
        Gloves.prototype.getType = function () {
            return Items.Gloves.TYPE;
        };
        Gloves.TYPE = 4;
        return Gloves;
    }(Items.Item));
    Items.Gloves = Gloves;
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Gloves;
    (function (Gloves) {
        var PrimaryGloves = /** @class */ (function (_super) {
            __extends(PrimaryGloves, _super);
            function PrimaryGloves(databaseId) {
                var _this = _super.call(this, databaseId) || this;
                _this.name = 'Gloves';
                _this.image = 'Gloves';
                _this.itemId = Items.Gloves.PrimaryGloves.ITEM_ID;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.meshName = 'Gloves';
                return _this;
            }
            PrimaryGloves.ITEM_ID = 4;
            return PrimaryGloves;
        }(Gloves));
        Gloves.PrimaryGloves = PrimaryGloves;
    })(Gloves = Items.Gloves || (Items.Gloves = {}));
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Helm = /** @class */ (function (_super) {
        __extends(Helm, _super);
        /**
         * @param databaseId
         */
        function Helm(databaseId) {
            var _this = this;
            _this.type = Items.Helm.TYPE;
            _this = _super.call(this, databaseId) || this;
            return _this;
        }
        /**
         * @returns {number}
         */
        Helm.prototype.getType = function () {
            return Items.Helm.TYPE;
        };
        Helm.TYPE = 3;
        return Helm;
    }(Items.Item));
    Items.Helm = Helm;
})(Items || (Items = {}));
/// <reference path="Helm.ts"/>
var Items;
(function (Items) {
    var Helms;
    (function (Helms) {
        var PrimaryHelm = /** @class */ (function (_super) {
            __extends(PrimaryHelm, _super);
            function PrimaryHelm(databaseId) {
                var _this = _super.call(this, databaseId) || this;
                _this.name = 'Helm';
                _this.image = 'Helm';
                _this.itemId = Items.Helms.PrimaryHelm.ITEM_ID;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.meshName = 'Helm';
                return _this;
            }
            PrimaryHelm.ITEM_ID = 5;
            return PrimaryHelm;
        }(Items.Helm));
        Helms.PrimaryHelm = PrimaryHelm;
    })(Helms = Items.Helms || (Items.Helms = {}));
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Shield = /** @class */ (function (_super) {
        __extends(Shield, _super);
        /**
         * @param databaseId
         */
        function Shield(databaseId) {
            var _this = this;
            _this.type = Items.Shield.TYPE;
            _this = _super.call(this, databaseId) || this;
            return _this;
        }
        /**
         * @returns {number}
         */
        Shield.prototype.getType = function () {
            return Items.Shield.TYPE;
        };
        Shield.TYPE = 2;
        return Shield;
    }(Items.Item));
    Items.Shield = Shield;
})(Items || (Items = {}));
/// <reference path="Shield.ts"/>
var Items;
(function (Items) {
    var Shields;
    (function (Shields) {
        var WoodShield = /** @class */ (function (_super) {
            __extends(WoodShield, _super);
            function WoodShield(databaseId) {
                var _this = _super.call(this, databaseId) || this;
                _this.name = 'Wood Shield';
                _this.image = 'Shield';
                _this.itemId = Items.Shields.WoodShield.ITEM_ID;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.meshName = 'Shield';
                return _this;
            }
            WoodShield.ITEM_ID = 7;
            return WoodShield;
        }(Items.Shield));
        Shields.WoodShield = WoodShield;
    })(Shields = Items.Shields || (Items.Shields = {}));
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Weapon = /** @class */ (function (_super) {
        __extends(Weapon, _super);
        /**
         * @param databaseId
         */
        function Weapon(databaseId) {
            var _this = this;
            _this.type = Items.Weapon.TYPE;
            _this = _super.call(this, databaseId) || this;
            return _this;
        }
        /**
         * @returns {number}
         */
        Weapon.prototype.getType = function () {
            return Items.Weapon.TYPE;
        };
        Weapon.TYPE = 1;
        return Weapon;
    }(Items.Item));
    Items.Weapon = Weapon;
})(Items || (Items = {}));
/// <reference path="Weapon.ts"/>
var Items;
(function (Items) {
    var Weapons;
    (function (Weapons) {
        var Axe = /** @class */ (function (_super) {
            __extends(Axe, _super);
            function Axe(databaseId) {
                var _this = _super.call(this, databaseId) || this;
                _this.name = 'Axe';
                _this.image = 'BigSword';
                _this.itemId = Items.Weapons.Axe.ITEM_ID;
                _this.meshName = 'Axe';
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 10, 0, 0, 0, 0);
                return _this;
            }
            Axe.ITEM_ID = 8;
            return Axe;
        }(Items.Weapon));
        Weapons.Axe = Axe;
    })(Weapons = Items.Weapons || (Items.Weapons = {}));
})(Items || (Items = {}));
/// <reference path="Weapon.ts"/>
var Items;
(function (Items) {
    var Weapons;
    (function (Weapons) {
        var Sword = /** @class */ (function (_super) {
            __extends(Sword, _super);
            function Sword(databaseId) {
                var _this = _super.call(this, databaseId) || this;
                _this.name = 'Sword';
                _this.image = 'Sword';
                _this.itemId = Items.Weapons.Sword.ITEM_ID;
                _this.meshName = 'Sword';
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 5, 0, 0, 0, 0);
                return _this;
            }
            Sword.ITEM_ID = 9;
            return Sword;
        }(Items.Weapon));
        Weapons.Sword = Sword;
    })(Weapons = Items.Weapons || (Items.Weapons = {}));
})(Items || (Items = {}));
