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
        BabylonManager.prototype.socketShowEnemies = function (scene) {
            var self = this;
            this.socket.on('showEnemies', function (data) {
                data.forEach(function (enemyData, key) {
                    var enemy = self.enemies[key];
                    if (!enemy) {
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
            this.socket.on('newPlayerConnected', function (data) {
                console.log('connected new player');
                data.forEach(function (socketRemotePlayer) {
                    var remotePlayerKey = null;
                    if (socketRemotePlayer.id !== self.socket.id) {
                        self.players.forEach(function (remotePlayer, key) {
                            if (remotePlayer.id == socketRemotePlayer.id) {
                                remotePlayerKey = key;
                                return;
                            }
                        });
                        if (remotePlayerKey === null) {
                            console.log('added new player to remote player array');
                            var activePlayer = socketRemotePlayer.characters[socketRemotePlayer.activePlayer];
                            var box = BABYLON.Mesh.CreateBox(socketRemotePlayer.id, 3, scene, false);
                            box.position = new BABYLON.Vector3(0, -5, 0);
                            box.actionManager = new BABYLON.ActionManager(scene);
                            var remotePlayer = {
                                id: socketRemotePlayer.id,
                                mesh: box,
                                registeredFunction: null
                            };
                            self.players.push(remotePlayer);
                            self.registerPlayerInEnemyActionManager(box);
                        }
                    }
                });
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
                self.players.forEach(function (remotePlayer, key) {
                    if (remotePlayer.id == id) {
                        var player = self.players[key];
                        //TODO: null engine bug
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
                    if (enemy.target) {
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
                    if (enemy.target) {
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
                    if (!enemy.target) {
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
                    if (enemy.target) {
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
                    player.position = new BABYLON.Vector3(updatedPlayer.p.x, updatedPlayer.p.y, updatedPlayer.p.z);
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
                                    scene.unregisterBeforeRender(self.players[remotePlayerKey].registeredFunction);
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
        EnemyManager.prototype.createEnemy = function (position, type, itemsToDrop, experience) {
            return {
                id: 0,
                position: position,
                rotation: {
                    x: 0,
                    y: 0,
                    z: 0,
                    w: 0
                },
                hp: 100,
                type: type,
                target: false,
                attack: false,
                itemsToDrop: itemsToDrop,
                experience: experience
            };
        };
        EnemyManager.prototype.getEnemies = function () {
            var enemies = [];
            enemies[2] = [
                this.createEnemy({ x: -2, y: 0, z: -30 }, 'worm', [9], 10),
                this.createEnemy({ x: -2, y: 0, z: -64 }, 'worm', [1], 10),
                this.createEnemy({ x: -8, y: 0, z: -72 }, 'worm', [8], 10),
            ];
            enemies[3] = [
                this.createEnemy({ x: -2, y: 0, z: -30 }, 'bandit', [9], 10),
                this.createEnemy({ x: -2, y: 0, z: -64 }, 'bandit', [9], 10),
                this.createEnemy({ x: -8, y: 0, z: -72 }, 'bandit', [9], 10),
            ];
            return enemies;
        };
        return EnemyManager;
    }());
    Server.EnemyManager = EnemyManager;
})(Server || (Server = {}));
var Character = require('./../../shared/Character.js')["default"];
var Server;
(function (Server) {
    var GameModules = /** @class */ (function () {
        function GameModules() {
            this.character = Character;
        }
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
server.listen(config.server.port);
var SlavsServer = /** @class */ (function () {
    function SlavsServer() {
        this.enemies = [];
        this.quests = [];
        this.enemyManager = new Server.EnemyManager();
        this.gameModules = new Server.GameModules();
        this.questManager = new Server.QuestManager();
        this.enemies = this.enemyManager.getEnemies();
        this.quests = this.questManager.getQuests();
        this.serverFrontEnd = new Server.FrontEnd(this, app, express);
        this.babylonManager = new Server.BabylonManager(this);
        this.ormManager = new Server.OrmManager(this, orm, config);
        this.serverWebsocket = new Server.IO(this, io);
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
                var player = {
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
                    attack: false
                };
                if (!isMonsterServer) {
                    ////CLEAR QUESTS
                    server.ormManager.structure.playerQuest.allAsync().then(function (playerQuests) {
                        for (var _i = 0, playerQuests_1 = playerQuests; _i < playerQuests_1.length; _i++) {
                            var playerQuest = playerQuests_1[_i];
                            playerQuest.remove();
                        }
                    });
                    self.refreshPlayerData(player, socket, function () {
                        socket.emit('clientConnected', player);
                    });
                }
                else {
                    player.activeScene = 2;
                    socket.emit('showEnemies', enemies[player.activeScene]);
                }
                socket.on('getQuests', function () {
                    var emitData = {
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
                    var questId = quest.id;
                    var playerId = player.characters[player.activePlayer].id;
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
                socket.on('setTargetPoint', function (targetPoint) {
                    player.attack = null;
                    player.targetPoint = targetPoint.position;
                    player.isRunning = targetPoint.isRunning;
                    player.p = targetPoint.playerPosition;
                    socket.broadcast.emit('updatePlayer', player);
                    socket.emit('updatePlayer', player);
                });
                socket.on('attack', function (data) {
                    player.attack = data.attack;
                    player.targetPoint = data.targetPoint;
                    player.isRunning = false;
                    socket.broadcast.emit('updatePlayer', player);
                    socket.emit('updatePlayer', player);
                });
                socket.on('itemEquip', function (item) {
                    var itemId = item.id;
                    var equip = item.equip;
                    self.server.ormManager.structure.playerItems.oneAsync({
                        id: itemId,
                        player_id: player.characters[player.activePlayer].id
                    }).then(function (itemDatabase) {
                        itemDatabase.equip = (equip) ? 1 : 0;
                        itemDatabase.saveAsync().then(function () {
                            server.ormManager.structure.playerItems.findAsync({ player_id: player.characters[player.activePlayer].id }).then(function (playerItems) {
                                player.characters[player.activePlayer].items = playerItems;
                                socket.broadcast.emit('updateEnemyEquip', player);
                            });
                        });
                    });
                });
                socket.on('addDoppedItem', function (itemsKey) {
                    var playerId = player.characters[player.activePlayer].id;
                    var itemId = player.itemsDrop[itemsKey];
                    if (itemId) {
                        self.server.ormManager.structure.playerItems.create({
                            player_id: playerId,
                            itemId: itemId,
                            improvement: 0,
                            equip: 0
                        }, function (error, addedItem) {
                            player.characters[player.activePlayer].items.push(addedItem);
                            socket.emit('updatePlayerEquip', player.characters[player.activePlayer].items);
                        });
                    }
                });
                socket.on('addAttribute', function (attribute) {
                    var type = attribute.type;
                    self.server.ormManager.structure.player.oneAsync({
                        id: player.characters[player.activePlayer].id
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
                                    self.refreshPlayerData(player, socket, function () {
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
                        id: player.characters[player.activePlayer].id
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
                                    self.refreshPlayerData(player, socket, function () {
                                        socket.emit('skillLearned', player);
                                    });
                                });
                            });
                        }
                    });
                });
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
                    if (sceneType == 3) {
                        player.p = {
                            x: -73,
                            y: 0,
                            z: -4
                        };
                    }
                    else if (sceneType == 2) {
                        player.p = {
                            x: 145,
                            y: 0,
                            z: -53
                        };
                        //For tests
                        player.p = {
                            x: 35,
                            y: 0,
                            z: 8
                        };
                    }
                    socket.emit('showPlayer', player);
                });
                socket.on('changeScenePost', function (sceneData) {
                    player.activeScene = sceneData.sceneType;
                    socket.emit('showEnemies', enemies[sceneData.sceneType]);
                    socket.emit('newPlayerConnected', remotePlayers);
                });
                ///Enemies
                socket.on('setEnemyTarget', function (data) {
                    var enemy = enemies[player.activeScene][data.enemyKey];
                    enemy.position = data.position;
                    enemy.target = data.target;
                    enemy.attack = data.attack;
                    socket.broadcast.emit('updateEnemy', {
                        enemy: enemy,
                        enemyKey: data.enemyKey
                    });
                });
                socket.on('updateEnemy', function (enemyData) {
                    var enemy = enemies[player.activeScene][enemyData.enemyKey];
                    enemy.position = enemyData.position;
                    enemy.rotation = enemyData.rotation;
                    enemy.target = enemyData.target;
                    socket.broadcast.emit('showEnemies', enemies[player.activeScene]);
                });
                socket.on('enemyKill', function (enemyKey) {
                    var enemy = enemies[player.activeScene][enemyKey];
                    var enemyItem = enemy.itemsToDrop[0];
                    var itemDropKey = player.itemsDrop.push(enemyItem) - 1;
                    var earnedExperience = enemy.experience;
                    var playerId = player.characters[player.activePlayer].id;
                    socket.emit('showDroppedItem', {
                        items: enemyItem,
                        itemsKey: itemDropKey,
                        enemyId: enemyKey
                    });
                    self.server.ormManager.structure.player.get(playerId, function (error, playerDatabase) {
                        playerDatabase.experience += earnedExperience;
                        socket.emit('addExperience', {
                            experience: earnedExperience
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
                });
            });
        }
        IO.prototype.refreshPlayerData = function (player, socket, callback) {
            var server = this.server;
            server.ormManager.structure.user.oneAsync({ email: "furcatomasz@gmail.com" }).then(function (user) {
                server.ormManager.structure.player.findAsync({ user_id: user.id }).then(function (players) {
                    player.characters = players;
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
