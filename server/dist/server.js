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
            this.scenes = [];
            this.slavsServer = slavsServer;
            this.socket = socketIOClient.connect('http://127.0.0.1:' + config.server.port, { query: 'monsterServer=1' });
            this.enemies = [];
            this.players = [];
            this.scenes = [];
            this.initEngine();
        }
        BabylonManager.prototype.initEngine = function () {
            var self = this;
            this.engine = new BABYLON.NullEngine();
            // let scene = new BABYLON.Scene(this.engine);
            // this.scene = scene;
            // let camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
            this
                .socketShowEnemies()
                .socketUpdateEnemy()
                .socketPlayerConnected()
                .socketUpdatePlayer()
                .removePlayer()
                .socketCreateRoom();
            this.engine.runRenderLoop(function () {
                for (var key in self.scenes) {
                    var scene = self.scenes[key];
                    scene.render();
                }
            });
        };
        /**
         * @returns {SocketIOClient}
         */
        BabylonManager.prototype.socketUpdateEnemy = function () {
            var self = this;
            this.socket.on('updateEnemy', function (data) {
                var roomId = data.roomId;
                var remoteEnemy = data.enemy;
                var remoteEnemyId = data.enemyKey;
                var localEnemy = self.enemies[roomId][remoteEnemyId];
                var scene = self.scenes[roomId];
                console.log('BABYLON: update enemy - ' + remoteEnemyId);
                if (remoteEnemy.statistics.hp <= 0 && localEnemy) {
                    if (localEnemy.activeTargetPoints.length > 0) {
                        localEnemy.activeTargetPoints.forEach(function (activeTargetFunction) {
                            console.log('BABYLON: unregister function enemy - ' + remoteEnemyId);
                            scene.unregisterBeforeRender(activeTargetFunction);
                        });
                        localEnemy.mesh.dispose();
                        self.players.forEach(function (player) {
                            var playerActionManager = player.mesh.actionManager;
                            playerActionManager.actions.forEach(function (action, key) {
                                if (action._triggerParameter == localEnemy.visibilityAreaMesh ||
                                    action._triggerParameter == localEnemy.mesh) {
                                    ///TODO: There should be unregister enemy triggers
                                    console.log('BABYLON: deleted from action manager enemy - ' + remoteEnemyId);
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
        BabylonManager.prototype.socketShowEnemies = function () {
            var self = this;
            this.socket.on('createEnemies', function (data) {
                var roomId = data.roomId;
                var scene = self.scenes[roomId];
                if (!self.enemies[roomId]) {
                    console.log('BABYLON: create enemies - ' + roomId);
                    self.enemies[roomId] = [];
                }
                else {
                    console.log('BABYLON: enemies exists - ' + roomId);
                    return this;
                }
                data.enemies.forEach(function (enemyData, key) {
                    var enemy = self.enemies[roomId][key];
                    if (enemyData.statistics.hp > 0 && !enemy) {
                        var box = BABYLON.Mesh.CreateBox(data.id, 3, scene, false);
                        box.checkCollisions = true;
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
                            walkSpeed: enemyData.statistics.walkSpeed,
                            visibilityAreaMesh: visibilityArea
                        };
                        self.enemies[roomId][key] = enemy;
                    }
                });
            });
            return this;
        };
        BabylonManager.prototype.socketCreateRoom = function () {
            var self = this;
            this.socket.on('createRoom', function (roomId) {
                if (self.scenes[roomId] === undefined) {
                    console.log('BABYLON: crate new room with scene - ' + roomId);
                    var sceneForRoom = new BABYLON.Scene(self.engine);
                    sceneForRoom.collisionsEnabled = true;
                    var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 25, -25, sceneForRoom));
                    self.scenes[roomId] = sceneForRoom;
                }
                else {
                    console.log('BABYLON: room exists - ' + roomId);
                }
            });
            return this;
        };
        BabylonManager.prototype.socketPlayerConnected = function () {
            var self = this;
            this.socket.on('showPlayer', function (playerData) {
                console.log('BABYLON: connected new player - ' + playerData.id);
                var activeCharacter = playerData.characters[playerData.activeCharacter];
                var roomId = activeCharacter.roomId;
                var scene = self.scenes[roomId];
                if (!scene) {
                    return;
                }
                var remotePlayerKey = null;
                if (playerData.id !== self.socket.id) {
                    //check if user exists
                    self.players.forEach(function (remotePlayer, key) {
                        if (remotePlayer.id == playerData.id) {
                            remotePlayerKey = key;
                            return;
                        }
                    });
                    //if user not exists create scene and box with action manager
                    if (remotePlayerKey === null) {
                        var box = BABYLON.Mesh.CreateBox(activeCharacter.id, 3, scene, false);
                        box.checkCollisions = true;
                        box.position = new BABYLON.Vector3(activeCharacter.position.x, activeCharacter.position.y, activeCharacter.position.z);
                        box.actionManager = new BABYLON.ActionManager(scene);
                        var remotePlayer = {
                            id: activeCharacter.id,
                            socketId: playerData.id,
                            walkSpeed: activeCharacter.statistics.walkSpeed,
                            roomId: roomId,
                            mesh: box,
                            registeredFunction: null
                        };
                        self.players.push(remotePlayer);
                        self.registerPlayerInEnemyActionManager(remotePlayer);
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
                self.players.forEach(function (remotePlayer, key) {
                    if (remotePlayer.socketId == id) {
                        var player = self.players[key];
                        var roomId = player.roomId;
                        var scene_1 = self.scenes[roomId];
                        console.log('BABYLON: disconnect player - ' + player.id);
                        //clear enemies target if it is this player
                        self.enemies[roomId].forEach(function (enemy, key) {
                            if (enemy.target == id) {
                                enemy.target = false;
                            }
                            scene_1.unregisterBeforeRender(enemy.activeTargetPoints[id]);
                        });
                        if (player.registeredFunction) {
                            scene_1.unregisterBeforeRender(player.registeredFunction);
                        }
                        player.mesh.dispose();
                        self.players.splice(key, 1);
                    }
                });
            });
            return this;
        };
        BabylonManager.prototype.registerPlayerInEnemyActionManager = function (remotePlayerData) {
            var self = this;
            var playerMesh = remotePlayerData.mesh;
            var roomId = remotePlayerData.roomId;
            var socketId = remotePlayerData.socketId;
            var scene = this.scenes[roomId];
            this.enemies[roomId].forEach(function (enemy, key) {
                enemy.activeTargetPoints[playerMesh.id] = function () {
                    var mesh = enemy.mesh;
                    mesh.lookAt(playerMesh.position.clone());
                    var rotation = mesh.rotation;
                    if (mesh.rotationQuaternion) {
                        rotation = mesh.rotationQuaternion.toEulerAngles();
                    }
                    rotation.negate();
                    var animationRatio = scene.getAnimationRatio();
                    var walkSpeed = enemy.walkSpeed / animationRatio;
                    var forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / walkSpeed, 0, -parseFloat(Math.cos(rotation.y)) / walkSpeed);
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
                            roomId: roomId,
                            target: playerMesh.id,
                            attack: true
                        });
                        scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        console.log('BABYLON: Enemy ' + key + ' start attack player ' + socketId + ', roomID:' + roomId);
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
                            roomId: roomId,
                            target: playerMesh.id,
                            attack: false
                        });
                        scene.registerBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        console.log('BABYLON: Enemy ' + key + ' stop attack player ' + socketId + ', roomID:' + roomId);
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
                            roomId: roomId,
                            target: playerMesh.id
                        });
                        enemy.target = playerMesh.id;
                        scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        scene.registerBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        console.log('BABYLON: Enemy ' + key + ' set target as player ' + socketId + ', roomID:' + roomId);
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
                            roomId: roomId,
                            target: null
                        });
                        enemy.target = false;
                        console.log('BABYLON: Enemy ' + key + ' lost target ' + socketId + ', roomID:' + roomId);
                    }
                    scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                }));
            });
        };
        BabylonManager.prototype.socketUpdatePlayer = function () {
            var self = this;
            var activeTargetPoints = [];
            this.socket.on('updatePlayer', function (updatedPlayer) {
                // console.log('BABYLON: update player - '+ updatedPlayer.id);
                var remotePlayerKey = null;
                var player = null;
                self.players.forEach(function (remotePlayer, key) {
                    if (remotePlayer.socketId == updatedPlayer.connectionId) {
                        remotePlayerKey = key;
                        return;
                    }
                });
                if (remotePlayerKey != null) {
                    var remotePlayer_1 = self.players[remotePlayerKey];
                    player = remotePlayer_1.mesh;
                    var scene_2 = self.scenes[remotePlayer_1.roomId];
                    if (player) {
                        if (updatedPlayer.attack == true) {
                            console.log('BABYLON: attack player - ' + updatedPlayer.id);
                            return;
                        }
                        if (remotePlayer_1.registeredFunction !== undefined) {
                            scene_2.unregisterBeforeRender(remotePlayer_1.registeredFunction);
                        }
                        if (updatedPlayer.targetPoint) {
                            var mesh_1 = player;
                            var targetPoint = updatedPlayer.targetPoint;
                            var targetPointVector3_1 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                            mesh_1.lookAt(targetPointVector3_1);
                            remotePlayer_1.registeredFunction = function () {
                                if (mesh_1.intersectsPoint(targetPointVector3_1)) {
                                    var remotePlayer_2 = self.players[remotePlayerKey];
                                    console.log('BABYLON: player intersect target point - ' + updatedPlayer.id + ', roomID:' + remotePlayer_2.roomId);
                                    scene_2.unregisterBeforeRender(remotePlayer_2.registeredFunction);
                                    self.socket.emit('updatePlayerPosition', {
                                        playerSocketId: remotePlayer_2.socketId,
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
                                    var animationRatio = scene_2.getAnimationRatio();
                                    var walkSpeed = remotePlayer_1.walkSpeed / animationRatio;
                                    var forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / walkSpeed, 0, -parseFloat(Math.cos(rotation.y)) / walkSpeed);
                                    mesh_1.moveWithCollisions(forwards);
                                    mesh_1.position.y = 0;
                                }
                            };
                            scene_2.registerBeforeRender(remotePlayer_1.registeredFunction);
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
                new Monsters.Skeleton(0, { x: -42, y: 0, z: -33 }, [], [SpecialItems.Gold(1)]),
                new Monsters.Skeleton(0, { x: -57, y: 0, z: -34 }, [], [SpecialItems.Gold(1)]),
                new Monsters.Skeleton(0, { x: -82, y: 0, z: 10 }, [], [SpecialItems.Gold(1)]),
                new Monsters.Skeleton(0, { x: -104, y: 0, z: -9 }, [], [SpecialItems.Gold(1)]),
                new Monsters.Skeleton(0, { x: -113, y: 0, z: -54 }, [], [SpecialItems.Gold(1)]),
                new Monsters.Skeleton(0, { x: -97, y: 0, z: -43 }, [], [SpecialItems.KeyToChest(1)]),
                new Monsters.Skeleton(0, { x: -120, y: 0, z: -33 }, [], [SpecialItems.Gold(1)]),
                new Monsters.Skeleton(0, { x: -161, y: 0, z: -20 }, [], [SpecialItems.Gold(1)]),
                new Monsters.Skeleton(0, { x: 44, y: 0, z: -47 }, [], [SpecialItems.Gold(1)]),
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
var BABYLON = require("../../bower_components/babylonjs/dist/babylon.max");
var LOADERS = require("../../bower_components/babylonjs/dist/loaders/babylonjs.loaders");
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
            //self.serverFrontEnd = new Server.FrontEnd(self, app, express);
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
            this.enemies = [];
            this.enemiesIntervals = [];
            this.rooms = [];
            this.remotePlayers = [];
            this.enemies = [];
            this.enemiesIntervals = [];
            this.rooms = [];
            var self = this;
            var remotePlayers = this.remotePlayers;
            this.server = server;
            serverIO.on('connection', function (socket) {
                var isMonsterServer = socket.handshake.query.monsterServer;
                ///Client socket events
                if (!isMonsterServer) {
                    var player_1 = new Server.Player(socket.id);
                    ///create room of user
                    socket.join(socket.id);
                    self.rooms.push({
                        roomId: socket.id,
                        players: [socket.id]
                    });
                    player_1.activeCharacter = 1;
                    ////CLEAR QUESTS
                    if (server.ormManager.structure.playerQuest) {
                        server.ormManager.structure.playerQuest.allAsync().then(function (playerQuests) {
                            for (var _i = 0, playerQuests_1 = playerQuests; _i < playerQuests_1.length; _i++) {
                                var playerQuest = playerQuests_1[_i];
                                playerQuest.remove();
                            }
                        });
                    }
                    player_1.refreshPlayerData(server, function () {
                        socket.emit('clientConnected', player_1);
                    });
                    //CHANGE SCENE CHANNELS
                    socket.on('changeScenePre', function (sceneData) {
                        var sceneType = sceneData.sceneType;
                        var roomId = player_1.getActiveCharacter().roomId;
                        player_1.getActiveCharacter().position = self.getDefaultPositionForScene(sceneType);
                        if (server.enemies[sceneType] !== undefined) {
                            self.enemies[roomId] = JSON.parse(JSON.stringify(server.enemies[sceneType]));
                            serverIO.to(self.monsterServerSocketId).emit('createEnemies', {
                                enemies: self.getEnemiesInRoom(roomId),
                                roomId: roomId
                            });
                        }
                        socket.emit('showPlayer', player_1);
                    });
                    socket.on('changeScenePost', function (sceneData) {
                        player_1.activeScene = sceneData.sceneType;
                        serverIO.to(self.monsterServerSocketId).emit('showPlayer', player_1);
                        socket.emit('showEnemies', self.enemies[player_1.getActiveCharacter().roomId]);
                    });
                    /////////////
                    socket.on('createPlayer', function () {
                        var character = player_1.getActiveCharacter();
                        if (character) {
                            remotePlayers.push(player_1);
                            character.position = self.getDefaultPositionForScene(2);
                            serverIO["in"](character.roomId).emit('newPlayerConnected', player_1);
                            serverIO.to(self.monsterServerSocketId).emit('createRoom', player_1.getActiveCharacter().roomId);
                        }
                    });
                    socket.on('setTargetPoint', function (targetPoint) {
                        var character = player_1.getActiveCharacter();
                        character.attack = null;
                        character.targetPoint = targetPoint.position;
                        serverIO["in"](character.roomId).emit('updatePlayer', character);
                        serverIO.to(self.monsterServerSocketId).emit('updatePlayer', character);
                    });
                    socket.on('attack', function (data) {
                        if (player_1.lastPlayerAttack > new Date().getTime() - 1000) {
                            return;
                        }
                        player_1.lastPlayerAttack = new Date().getTime();
                        var activeCharacter = player_1.getActiveCharacter();
                        activeCharacter.attack = data.attack;
                        activeCharacter.targetPoint = data.targetPoint;
                        self.enemies[activeCharacter.roomId].forEach(function (enemy, enemyKey) {
                            enemy.availableAttacksFromCharacters.forEach(function (isAtacked, characterId) {
                                if (isAtacked === true) {
                                    if (activeCharacter.id == characterId) {
                                        var attackCharacter = activeCharacter;
                                        var roomId = activeCharacter.roomId;
                                        var damage = attackCharacter.statistics.getDamage();
                                        enemy.statistics.hp -= damage;
                                        var emitObject = {
                                            enemy: enemy,
                                            enemyKey: enemyKey,
                                            roomId: roomId
                                        };
                                        console.log('SOCKET - Attack event');
                                        serverIO["in"](roomId).emit('updateEnemy', emitObject);
                                        serverIO.to(self.monsterServerSocketId).emit('updateEnemy', emitObject);
                                        ///enemy is killed
                                        if (enemy.statistics.hp <= 0) {
                                            ///add special item
                                            var specialItemFlat = enemy.specialItemsToDrop[0];
                                            var specialItemManager = new SpecialItems.SpecialItemsManager();
                                            var specialItem = specialItemManager.getSpecialItem(specialItemFlat.type, specialItemFlat.value);
                                            if (specialItem) {
                                                serverIO.emit('addSpecialItem', specialItem);
                                                specialItem.addItem(player_1.getActiveCharacter(), self.server.ormManager);
                                            }
                                            enemy.availableAttacksFromCharacters = [];
                                            var enemyItem = enemy.itemsToDrop[0];
                                            var earnedExperience_1 = enemy.experience;
                                            var playerId = player_1.getActiveCharacter().id;
                                            if (enemyItem) {
                                                var itemDropKey = player_1.getActiveCharacter().itemsDrop.push(enemyItem) - 1;
                                                var itemManager = new Items.ItemManager();
                                                var item = itemManager.getItemUsingId(enemyItem, 0);
                                                socket.emit('showDroppedItem', {
                                                    item: item,
                                                    itemKey: itemDropKey,
                                                    enemyId: enemyKey
                                                });
                                            }
                                            ///clear attack interval
                                            if (self.enemiesIntervals[roomId][enemyKey]) {
                                                clearInterval(self.enemiesIntervals[roomId][enemyKey]);
                                                self.enemiesIntervals[roomId][enemyKey] = null;
                                            }
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
                        serverIO["in"](activeCharacter.roomId).emit('updatePlayer', activeCharacter);
                        serverIO.to(self.monsterServerSocketId).emit('updatePlayer', activeCharacter);
                    });
                    socket.on('disconnect', function () {
                        //if (player.activeCharacter >= 0) {
                        //    let playerId = player.characters[player.activeCharacter].id;
                        //    server.ormManager.structure.playerOnline
                        //        .find({player_id: playerId})
                        //        .remove();
                        //}
                        var roomId = player_1.getActiveCharacter().roomId;
                        remotePlayers.forEach(function (remotePlayer, key) {
                            if (remotePlayer.id == player_1.id || remotePlayer == null) {
                                remotePlayers.splice(key, 1);
                            }
                        });
                        //if player is target of enemies, clear that
                        if (self.enemies[roomId] !== undefined) {
                            var characterId_1 = player_1.getActiveCharacter().id;
                            self.enemies[roomId].forEach(function (enemy, key) {
                                if (enemy.target == characterId_1) {
                                    enemy.target = null;
                                    var emiteData = {
                                        enemy: enemy,
                                        enemyKey: key,
                                        roomId: roomId
                                    };
                                    if (self.enemiesIntervals[roomId][key]) {
                                        clearInterval(self.enemiesIntervals[roomId][key]);
                                        self.enemiesIntervals[roomId][key] = null;
                                    }
                                    serverIO.to(self.monsterServerSocketId).emit('updateEnemy', emiteData);
                                    serverIO["in"](roomId).emit('updateEnemy', emiteData);
                                }
                            });
                        }
                        socket.broadcast.emit('removePlayer', player_1.id);
                        var _loop_1 = function (roomKey) {
                            var room = self.rooms[roomKey];
                            if (room.roomId == roomId) {
                                room.players.forEach(function (socketId, socketIdKey) {
                                    var roomPlayersLength = room.players.length;
                                    if (socketId == player_1.id) {
                                        delete room.players[socketIdKey];
                                        if (!(roomPlayersLength - 1)) {
                                            console.log('SOCKET - delete empty room -' + room.roomId);
                                            self.rooms.splice(roomKey, 1);
                                            socket.broadcast.emit('updateRooms', self.rooms);
                                        }
                                    }
                                });
                            }
                        };
                        //clear data in rooms
                        for (var roomKey in self.rooms) {
                            _loop_1(roomKey);
                        }
                    });
                    self
                        .characterEvents(socket, player_1)
                        .questsEvents(socket, player_1)
                        .roomsEvents(socket, player_1, serverIO)
                        .sceneEvents(socket, player_1);
                }
                else {
                    ///Monster socket events
                    self.monsterServerSocketId = socket.id;
                    socket.on('updatePlayerPosition', function (updatedPlayer) {
                        self.remotePlayers.forEach(function (remotePlayer, remotePlayerKey) {
                            if (remotePlayer.id == updatedPlayer.playerSocketId) {
                                var remotePlayer_3 = self.remotePlayers[remotePlayerKey];
                                remotePlayer_3.getActiveCharacter().position = updatedPlayer.position;
                                socket.broadcast.emit('updatePlayer', remotePlayer_3);
                                return;
                            }
                        });
                    });
                    ///Enemies
                    socket.on('setEnemyTarget', function (data) {
                        var enemy = self.enemies[data.roomId][data.enemyKey];
                        enemy.position = data.position;
                        enemy.target = data.target;
                        enemy.attack = data.attack;
                        enemy.availableAttacksFromCharacters[data.target] = data.attack;
                        if (!self.enemiesIntervals[data.roomId]) {
                            self.enemiesIntervals[data.roomId] = [];
                        }
                        ///Enemy attack
                        if (enemy.attack) {
                            var enemeyAttackFunction = function () {
                                self.remotePlayers.forEach(function (remotePlayer, remotePlayerKey) {
                                    var activeCharacter = remotePlayer.getActiveCharacter();
                                    enemy.availableAttacksFromCharacters.forEach(function (isAtacked, characterId) {
                                        if (isAtacked === true) {
                                            if (activeCharacter.id == characterId) {
                                                var damage = enemy.statistics.damage;
                                                activeCharacter.statistics.hp -= damage;
                                                console.log('SOCKET - Enemy ' + enemy.name + ' attack on character ' + activeCharacter.name + ' DMG: ' + damage);
                                                serverIO["in"](activeCharacter.roomId).emit('updatePlayer', activeCharacter);
                                            }
                                        }
                                    });
                                });
                                socket["in"](data.roomId).emit('updateEnemy', {
                                    enemy: enemy,
                                    enemyKey: data.enemyKey
                                });
                            };
                            enemeyAttackFunction();
                            self.enemiesIntervals[data.roomId][data.enemyKey] = setInterval(enemeyAttackFunction, 1500);
                        }
                        else {
                            if (self.enemiesIntervals[data.roomId][data.enemyKey]) {
                                clearInterval(self.enemiesIntervals[data.roomId][data.enemyKey]);
                                self.enemiesIntervals[data.roomId][data.enemyKey] = null;
                            }
                            socket["in"](data.roomId).emit('updateEnemy', {
                                enemy: enemy,
                                enemyKey: data.enemyKey
                            });
                        }
                    });
                }
            });
        }
        /**
         *
         * @param socket
         * @param player
         */
        IO.prototype.sceneEvents = function (socket, player) {
            socket.on('refreshGateways', function () {
                var character = player.getActiveCharacter();
                var sceneType = player.activeScene;
                var scene = Server.Scenes.Manager.factory(sceneType);
                scene.refreshGatewaysData(character);
                socket.emit('refreshGateways', scene);
            });
            socket.on('changeScene', function (sceneType) {
                var scene = Server.Scenes.Manager.factory(sceneType);
                socket.emit('changeScene', scene);
            });
            return this;
        };
        /**
         * @param socket
         * @param player
         * @returns {Server.IO}
         */
        IO.prototype.characterEvents = function (socket, player) {
            var self = this;
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
            return this;
        };
        /**
         *
         * @param socket
         * @param player
         * @returns {Server.IO}
         */
        IO.prototype.questsEvents = function (socket, player) {
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
        };
        /**
         *
         * @param socket
         * @param player
         * @param serverIO
         * @returns {Server.IO}
         */
        IO.prototype.roomsEvents = function (socket, player, serverIO) {
            var self = this;
            socket.on('getRooms', function () {
                socket.emit('updateRooms', self.rooms);
                socket.broadcast.emit('updateRooms', self.rooms);
            });
            socket.on('joinToRoom', function (roomId) {
                var roomKey = null;
                var oldRoomId = player.getActiveCharacter().roomId;
                self.rooms.forEach(function (room, key) {
                    if (roomId == room.roomId) {
                        roomKey = key;
                    }
                });
                if (roomKey !== null && roomId != oldRoomId) {
                    self.rooms[roomKey].players.push(player.id);
                    serverIO.to(self.monsterServerSocketId).emit('removePlayer', player.getActiveCharacter().connectionId);
                    var _loop_2 = function (roomKey_1) {
                        var room = self.rooms[roomKey_1];
                        if (room.roomId == oldRoomId) {
                            room.players.forEach(function (socketId, socketIdKey) {
                                var roomPlayersLength = room.players.length;
                                if (socketId == player.id) {
                                    delete room.players[socketIdKey];
                                    if (!(roomPlayersLength - 1)) {
                                        console.log('SOCKET - delete empty room -' + room.roomId);
                                        self.rooms.splice(roomKey_1, 1);
                                    }
                                }
                            });
                        }
                    };
                    //clear data in rooms
                    for (var roomKey_1 in self.rooms) {
                        _loop_2(roomKey_1);
                    }
                    //if player is target of enemies, clear that
                    if (self.enemies[oldRoomId] !== undefined) {
                        self.enemies[oldRoomId].forEach(function (enemy, key) {
                            if (enemy.target == player.id) {
                                enemy.target = null;
                                var emiteData = {
                                    enemy: enemy,
                                    enemyKey: key,
                                    roomId: roomId
                                };
                                serverIO["in"](roomId).emit('updateEnemy', emiteData);
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
        };
        /**
         * @param roomId
         * @returns {Monster}
         */
        IO.prototype.getEnemiesInRoom = function (roomId) {
            return this.enemies[roomId];
        };
        /**
         * @param roomId
         * @param enemyId
         * @returns Monster
         */
        IO.prototype.getEnemyFromRoom = function (roomId, enemyId) {
            return this.getEnemiesInRoom(roomId)[enemyId];
        };
        IO.prototype.getDefaultPositionForScene = function (sceneType) {
            var position = null;
            if (sceneType == 1) {
                position = {
                    x: 0,
                    y: 0,
                    z: 0
                };
            }
            else if (sceneType == 2) {
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
                    gold: Number,
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
                this.playerSpecialItems = db.define("player_items_special", {
                    type: Number,
                    value: Number
                });
                this.playerSpecialItems.hasOne("player", this.player, {
                    reverse: "specialItems"
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
var Server;
(function (Server) {
    var Gateways;
    (function (Gateways) {
        var AbstractGateway = /** @class */ (function () {
            function AbstractGateway() {
            }
            return AbstractGateway;
        }());
        Gateways.AbstractGateway = AbstractGateway;
    })(Gateways = Server.Gateways || (Server.Gateways = {}));
})(Server || (Server = {}));
var Server;
(function (Server) {
    var Gateways;
    (function (Gateways) {
        var EntraceHouse = /** @class */ (function (_super) {
            __extends(EntraceHouse, _super);
            function EntraceHouse() {
                var _this = this;
                _this.objectName = 'Entrace_House';
                _this.openSceneType = Server.Scenes.ForestHouseStart.TYPE;
                return _this;
            }
            /**
             *
             * @returns {Server.Gateways.AbstractGateway}
             */
            EntraceHouse.prototype.verifyIsActive = function (character) {
                this.isActive = true;
            };
            return EntraceHouse;
        }(Gateways.AbstractGateway));
        Gateways.EntraceHouse = EntraceHouse;
    })(Gateways = Server.Gateways || (Server.Gateways = {}));
})(Server || (Server = {}));
var Monsters;
(function (Monsters) {
    var AbstractMonster = /** @class */ (function () {
        function AbstractMonster(id, position, itemsToDrop, specialItemsToDrop) {
            this.id = id;
            this.position = position;
            this.itemsToDrop = itemsToDrop;
            this.specialItemsToDrop = specialItemsToDrop;
            this.availableAttacksFromCharacters = [];
        }
        return AbstractMonster;
    }());
    Monsters.AbstractMonster = AbstractMonster;
})(Monsters || (Monsters = {}));
var Monsters;
(function (Monsters) {
    var Skeleton = /** @class */ (function (_super) {
        __extends(Skeleton, _super);
        function Skeleton(id, position, itemsToDrop, specialItemsToDrop) {
            var _this = _super.call(this, id, position, itemsToDrop, specialItemsToDrop) || this;
            _this.name = 'Skeleton';
            _this.type = 'skeletons';
            _this.meshName = 'Skeleton';
            _this.lvl = 3;
            _this.experience = 25;
            _this.attackAreaSize = 2;
            _this.visibilityAreaSize = 15;
            _this.statistics = new Attributes.CharacterStatistics(300, 300, 100, 3, 10, 6, 0, 100);
            return _this;
        }
        return Skeleton;
    }(Monsters.AbstractMonster));
    Monsters.Skeleton = Skeleton;
})(Monsters || (Monsters = {}));
var Monsters;
(function (Monsters) {
    var Zombie = /** @class */ (function (_super) {
        __extends(Zombie, _super);
        function Zombie(id, position, itemsToDrop, specialItemsToDrop) {
            var _this = _super.call(this, id, position, itemsToDrop, specialItemsToDrop) || this;
            _this.name = 'Zombie';
            _this.type = 'zombie';
            _this.meshName = 'Zombie';
            _this.lvl = 3;
            _this.experience = 25;
            _this.attackAreaSize = 2;
            _this.visibilityAreaSize = 15;
            _this.statistics = new Attributes.CharacterStatistics(300, 300, 100, 3, 10, 40, 0, 100);
            return _this;
        }
        return Zombie;
    }(Monsters.AbstractMonster));
    Monsters.Zombie = Zombie;
})(Monsters || (Monsters = {}));
var Monsters;
(function (Monsters) {
    var Boar = /** @class */ (function (_super) {
        __extends(Boar, _super);
        function Boar(id, position, itemsToDrop, specialItemsToDrop) {
            var _this = _super.call(this, id, position, itemsToDrop, specialItemsToDrop, specialItemsToDrop) || this;
            _this.name = 'Boar';
            _this.type = 'boar';
            _this.meshName = 'Boar';
            _this.lvl = 2;
            _this.experience = 20;
            _this.attackAreaSize = 2;
            _this.visibilityAreaSize = 18;
            _this.statistics = new Attributes.CharacterStatistics(200, 200, 100, 3, 8, 6, 0, 100);
            return _this;
        }
        return Boar;
    }(Monsters.AbstractMonster));
    Monsters.Boar = Boar;
})(Monsters || (Monsters = {}));
var Monsters;
(function (Monsters) {
    var Worm = /** @class */ (function (_super) {
        __extends(Worm, _super);
        function Worm(id, position, itemsToDrop, specialItemsToDrop) {
            var _this = _super.call(this, id, position, itemsToDrop, specialItemsToDrop) || this;
            _this.name = 'Worm';
            _this.type = 'worm';
            _this.meshName = 'Worm';
            _this.lvl = 1;
            _this.experience = 10;
            _this.attackAreaSize = 2;
            _this.visibilityAreaSize = 10;
            _this.statistics = new Attributes.CharacterStatistics(80, 80, 100, 3, 10, 8, 0, 100);
            return _this;
        }
        return Worm;
    }(Monsters.AbstractMonster));
    Monsters.Worm = Worm;
})(Monsters || (Monsters = {}));
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
        Character.prototype.setGold = function (value) {
            this.gold = value;
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
            var statistics = new Attributes.CharacterStatistics(100 + attributes.health * 5, 100 + attributes.health * 5, 100 + attributes.attackSpeed, 15 + attributes.damage * 5, 10 + attributes.defence * 5, 2.9, 50 + attributes.blockChance, 100);
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
                    var _loop_3 = function (i) {
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
                                                .setGold(player.gold)
                                                .setFreeAttributesPoints(player.freeAttributesPoints)
                                                .setFreeSkillPoints(player.freeSkillPoints)
                                                .setLvl(player.lvl)
                                                .setConnectionId(self.id)
                                                .setItemsOnCharacter(player.items)
                                                .setSkills(player.skills)
                                                .calculateCharacterStatistics(player.attributes);
                                            character.roomId = self.id;
                                            self.characters.push(character);
                                        });
                                        callback();
                                    }
                                });
                            });
                        });
                    };
                    for (var i = 0; i < players.length; i++) {
                        _loop_3(i);
                    }
                });
            });
        };
        ;
        return Player;
    }());
    Server.Player = Player;
})(Server || (Server = {}));
var Server;
(function (Server) {
    var Scenes;
    (function (Scenes) {
        var AbstractScene = /** @class */ (function () {
            function AbstractScene() {
            }
            /**
             *
             * @param {Server.Character} character
             * @returns {Server.Scenes.AbstractScene}
             */
            AbstractScene.prototype.refreshGatewaysData = function (character) {
                this.gateways.forEach(function (gateway) {
                    gateway.verifyIsActive(character);
                });
                return this;
            };
            AbstractScene.TYPE = 0;
            return AbstractScene;
        }());
        Scenes.AbstractScene = AbstractScene;
    })(Scenes = Server.Scenes || (Server.Scenes = {}));
})(Server || (Server = {}));
var Server;
(function (Server) {
    var Scenes;
    (function (Scenes) {
        var ForestHouse = /** @class */ (function (_super) {
            __extends(ForestHouse, _super);
            function ForestHouse() {
                var _this = this;
                _this.type = ForestHouse.TYPE;
                _this.gateways = [
                    new Server.Gateways.EntraceHouse(),
                ];
                return _this;
            }
            ForestHouse.TYPE = 2;
            return ForestHouse;
        }(Scenes.AbstractScene));
        Scenes.ForestHouse = ForestHouse;
    })(Scenes = Server.Scenes || (Server.Scenes = {}));
})(Server || (Server = {}));
var Server;
(function (Server) {
    var Scenes;
    (function (Scenes) {
        var ForestHouseStart = /** @class */ (function (_super) {
            __extends(ForestHouseStart, _super);
            function ForestHouseStart() {
                var _this = this;
                _this.type = ForestHouseStart.TYPE;
                _this.gateways = [];
                return _this;
            }
            ForestHouseStart.TYPE = 1;
            return ForestHouseStart;
        }(Scenes.AbstractScene));
        Scenes.ForestHouseStart = ForestHouseStart;
    })(Scenes = Server.Scenes || (Server.Scenes = {}));
})(Server || (Server = {}));
var Server;
(function (Server) {
    var Scenes;
    (function (Scenes) {
        var Manager = /** @class */ (function () {
            function Manager() {
            }
            /**
             *
             * @param {int} sceneType
             * @returns {AbstractScene}
             */
            Manager.factory = function (sceneType) {
                var scene = null;
                switch (sceneType) {
                    case Scenes.ForestHouse.TYPE:
                        scene = new Scenes.ForestHouse();
                        break;
                    case Scenes.ForestHouseStart.TYPE:
                        scene = new Scenes.ForestHouseStart();
                        break;
                }
                if (!scene) {
                    throw new TypeError('Wrong scene type.');
                }
                return scene;
            };
            return Manager;
        }());
        Scenes.Manager = Manager;
    })(Scenes = Server.Scenes || (Server.Scenes = {}));
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
                case Items.Armors.LeatherArmor.ITEM_ID:
                    item = new Items.Armors.LeatherArmor(databaseId);
                    break;
                case Items.Boots.LeatherBoots.ITEM_ID:
                    item = new Items.Boots.LeatherBoots(databaseId);
                    break;
                case Items.Gloves.LeatherGloves.ITEM_ID:
                    item = new Items.Gloves.LeatherGloves(databaseId);
                    break;
                case Items.Helms.LeatherHelm.ITEM_ID:
                    item = new Items.Helms.LeatherHelm(databaseId);
                    break;
                case Items.Shields.SmallWoodenShield.ITEM_ID:
                    item = new Items.Shields.SmallWoodenShield(databaseId);
                    break;
                case Items.Shields.MediumWoodenShield.ITEM_ID:
                    item = new Items.Shields.MediumWoodenShield(databaseId);
                    break;
                case Items.Weapons.Sword.ITEM_ID:
                    item = new Items.Weapons.Sword(databaseId);
                    break;
                case Items.Weapons.LongSword.ITEM_ID:
                    item = new Items.Weapons.LongSword(databaseId);
                    break;
            }
            return item;
        };
        return ItemManager;
    }());
    Items.ItemManager = ItemManager;
})(Items || (Items = {}));
var SpecialItems;
(function (SpecialItems) {
    var AbstractSpecialItem = /** @class */ (function () {
        function AbstractSpecialItem(value) {
            this.value = value;
        }
        AbstractSpecialItem.TYPE = 0;
        return AbstractSpecialItem;
    }());
    SpecialItems.AbstractSpecialItem = AbstractSpecialItem;
})(SpecialItems || (SpecialItems = {}));
var SpecialItems;
(function (SpecialItems) {
    var Gold = /** @class */ (function (_super) {
        __extends(Gold, _super);
        function Gold(value) {
            var _this = this;
            _this.name = 'Gold';
            _this.type = SpecialItems.Gold.TYPE;
            _this = _super.call(this, value) || this;
            return _this;
        }
        Gold.prototype.getType = function () {
            return SpecialItems.Gold.TYPE;
        };
        ;
        Gold.prototype.addItem = function (character, ormManager) {
            var self = this;
            ormManager.structure.player.getAsync(character.id)
                .then(function (character) {
                character.gold += self.value;
                return character.saveAsync();
            })
                .then(function () {
                // saved
            });
            return this;
        };
        Gold.TYPE = 1;
        return Gold;
    }(SpecialItems.AbstractSpecialItem));
    SpecialItems.Gold = Gold;
})(SpecialItems || (SpecialItems = {}));
var SpecialItems;
(function (SpecialItems) {
    var KeyToChest = /** @class */ (function (_super) {
        __extends(KeyToChest, _super);
        function KeyToChest(value) {
            var _this = this;
            _this.name = 'Key to chest';
            _this.type = SpecialItems.KeyToChest.TYPE;
            _this = _super.call(this, value) || this;
            return _this;
        }
        KeyToChest.prototype.getType = function () {
            return SpecialItems.KeyToChest.TYPE;
        };
        ;
        KeyToChest.prototype.addItem = function (character, ormManager) {
            var self = this;
            ormManager.structure.playerSpecialItems.createAsync({
                type: this.type,
                value: this.value,
                player: character.id
            }).then(function (results) {
                console.log('SOCKET - KeyToChest added');
            });
            return this;
        };
        KeyToChest.TYPE = 2;
        return KeyToChest;
    }(SpecialItems.AbstractSpecialItem));
    SpecialItems.KeyToChest = KeyToChest;
})(SpecialItems || (SpecialItems = {}));
var SpecialItems;
(function (SpecialItems) {
    var SpecialItemsManager = /** @class */ (function () {
        function SpecialItemsManager() {
        }
        /**
         * @param {Number} type
         * @param {number} value
         * @returns {any}
         */
        SpecialItemsManager.prototype.getSpecialItem = function (type, value) {
            var item = null;
            switch (type) {
                case SpecialItems.Gold.TYPE:
                    item = new SpecialItems.Gold(value);
                    break;
                case SpecialItems.KeyToChest.TYPE:
                    item = new SpecialItems.KeyToChest(value);
                    break;
            }
            return item;
        };
        return SpecialItemsManager;
    }());
    SpecialItems.SpecialItemsManager = SpecialItemsManager;
})(SpecialItems || (SpecialItems = {}));
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
        var LeatherArmor = /** @class */ (function (_super) {
            __extends(LeatherArmor, _super);
            function LeatherArmor(databaseId) {
                var _this = _super.call(this, databaseId) || this;
                _this.name = 'leatherArmor';
                _this.image = 'Armor';
                _this.itemId = Items.Armors.LeatherArmor.ITEM_ID;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.meshName = 'leatherArmor';
                return _this;
            }
            LeatherArmor.ITEM_ID = 1;
            return LeatherArmor;
        }(Items.Armor));
        Armors.LeatherArmor = LeatherArmor;
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
        var LeatherBoots = /** @class */ (function (_super) {
            __extends(LeatherBoots, _super);
            function LeatherBoots(databaseId) {
                var _this = _super.call(this, databaseId) || this;
                _this.name = 'leatherBoots';
                _this.image = 'Boots';
                _this.itemId = Items.Boots.LeatherBoots.ITEM_ID;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.meshName = 'leatherBoots';
                return _this;
            }
            LeatherBoots.ITEM_ID = 2;
            return LeatherBoots;
        }(Boots));
        Boots.LeatherBoots = LeatherBoots;
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
        var LeatherGloves = /** @class */ (function (_super) {
            __extends(LeatherGloves, _super);
            function LeatherGloves(databaseId) {
                var _this = _super.call(this, databaseId) || this;
                _this.name = 'leatherGloves';
                _this.image = 'Gloves';
                _this.itemId = Items.Gloves.LeatherGloves.ITEM_ID;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.meshName = 'leatherGloves';
                return _this;
            }
            LeatherGloves.ITEM_ID = 3;
            return LeatherGloves;
        }(Gloves));
        Gloves.LeatherGloves = LeatherGloves;
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
        var LeatherHelm = /** @class */ (function (_super) {
            __extends(LeatherHelm, _super);
            function LeatherHelm(databaseId) {
                var _this = _super.call(this, databaseId) || this;
                _this.name = 'leatherHelm';
                _this.image = 'Helm';
                _this.itemId = Items.Helms.LeatherHelm.ITEM_ID;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.meshName = 'leatherHelm';
                return _this;
            }
            LeatherHelm.ITEM_ID = 4;
            return LeatherHelm;
        }(Items.Helm));
        Helms.LeatherHelm = LeatherHelm;
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
        var MediumWoodenShield = /** @class */ (function (_super) {
            __extends(MediumWoodenShield, _super);
            function MediumWoodenShield(databaseId) {
                var _this = _super.call(this, databaseId) || this;
                _this.name = 'shieldWoodenMedium';
                _this.image = 'Shield';
                _this.itemId = Items.Shields.SmallWoodenShield.ITEM_ID;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.meshName = 'shieldWoodenMedium';
                return _this;
            }
            MediumWoodenShield.ITEM_ID = 6;
            return MediumWoodenShield;
        }(Items.Shield));
        Shields.MediumWoodenShield = MediumWoodenShield;
    })(Shields = Items.Shields || (Items.Shields = {}));
})(Items || (Items = {}));
/// <reference path="Shield.ts"/>
var Items;
(function (Items) {
    var Shields;
    (function (Shields) {
        var SmallWoodenShield = /** @class */ (function (_super) {
            __extends(SmallWoodenShield, _super);
            function SmallWoodenShield(databaseId) {
                var _this = _super.call(this, databaseId) || this;
                _this.name = 'shieldWoodenSmall';
                _this.image = 'Shield';
                _this.itemId = Items.Shields.SmallWoodenShield.ITEM_ID;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.meshName = 'shieldWoodenSmall';
                return _this;
            }
            SmallWoodenShield.ITEM_ID = 5;
            return SmallWoodenShield;
        }(Items.Shield));
        Shields.SmallWoodenShield = SmallWoodenShield;
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
        var LongSword = /** @class */ (function (_super) {
            __extends(LongSword, _super);
            function LongSword(databaseId) {
                var _this = _super.call(this, databaseId) || this;
                _this.name = 'swordLong';
                _this.image = 'Sword';
                _this.itemId = Items.Weapons.LongSword.ITEM_ID;
                _this.meshName = 'swordLong';
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 5, 0, 0, 0, 0);
                return _this;
            }
            LongSword.ITEM_ID = 8;
            return LongSword;
        }(Items.Weapon));
        Weapons.LongSword = LongSword;
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
                _this.name = 'sword';
                _this.image = 'Sword';
                _this.itemId = Items.Weapons.Sword.ITEM_ID;
                _this.meshName = 'sword';
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 5, 0, 0, 0, 0);
                return _this;
            }
            Sword.ITEM_ID = 7;
            return Sword;
        }(Items.Weapon));
        Weapons.Sword = Sword;
    })(Weapons = Items.Weapons || (Items.Weapons = {}));
})(Items || (Items = {}));
