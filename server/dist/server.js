var Server;
(function (Server) {
    var EnemyManager = /** @class */ (function () {
        function EnemyManager() {
        }
        EnemyManager.prototype.createEnemy = function (position, type, itemsToDrop) {
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
                itemsToDrop: itemsToDrop
            };
        };
        EnemyManager.prototype.getEnemies = function () {
            var enemies = [];
            enemies[2] = [
                this.createEnemy({ x: -2, y: 0, z: -30 }, 'worm', [9]),
                this.createEnemy({ x: -2, y: 0, z: -64 }, 'worm', [1]),
                this.createEnemy({ x: -8, y: 0, z: -72 }, 'worm', [8]),
            ];
            enemies[3] = [
                this.createEnemy({ x: -2, y: 0, z: -30 }, 'bandit', [9]),
                this.createEnemy({ x: -2, y: 0, z: -64 }, 'bandit', [9]),
                this.createEnemy({ x: -8, y: 0, z: -72 }, 'bandit', [9]),
            ];
            return enemies;
        };
        return EnemyManager;
    }());
    Server.EnemyManager = EnemyManager;
})(Server || (Server = {}));
var Server;
(function (Server) {
    var OrmManager = /** @class */ (function () {
        function OrmManager(server, orm, config) {
            this.server = server;
            var self = this;
            console.log(config.server);
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
var orm = require("orm");
var config = require("./../config.js");
server.listen(config.server.port);
var SlavsServer = /** @class */ (function () {
    function SlavsServer() {
        this.enemies = [];
        this.quests = [];
        this.enemyManager = new Server.EnemyManager();
        this.questManager = new Server.QuestManager();
        this.enemies = this.enemyManager.getEnemies();
        this.quests = this.questManager.getQuests();
        this.serverFrontEnd = new Server.FrontEnd(this, app, express);
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
                var player = {
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
                    attack: false
                };
                server.ormManager.structure.user.find({ email: "furcatomasz@gmail.com" }, function (err, user) {
                    if (err)
                        throw err;
                    server.ormManager.structure.player.find({ user_id: user[0].id }, function (error, players) {
                        if (error)
                            throw error;
                        var itteration = 0;
                        var _loop_1 = function (i) {
                            var playerDatabase = players[i];
                            playerDatabase.getItems(function (error, items) {
                                playerDatabase.items = items;
                                itteration++;
                                if (itteration == players.length) {
                                    player.characters = players;
                                    socket.emit('clientConnected', player);
                                }
                            });
                        };
                        for (var i = 0; i < players.length; i++) {
                            _loop_1(i);
                        }
                    });
                });
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
                        var playerId = player.characters[player.activePlayer].id;
                        self.server.ormManager.structure.player.get(playerId, function (error, playerDatabase) {
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
                    var itemId = item.id;
                    var equip = item.equip;
                    self.server.ormManager.structure.playerItems.find({
                        itemId: itemId,
                        player_id: player.characters[player.activePlayer].id
                    }, function (error, itemDatabase) {
                        itemDatabase.equip = (equip) ? 1 : 0;
                        itemDatabase.save(function () {
                            server.ormManager.structure.playerItems.find({ player_id: player.characters[player.activePlayer].id }, function (error, playerItems) {
                                if (error)
                                    throw error;
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
                    socket.emit('showDroppedItem', {
                        items: enemyItem,
                        itemsKey: itemDropKey,
                        enemyId: enemyKey
                    });
                });
            });
        }
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
                    scene: Number,
                    positionX: Number,
                    positionY: Number,
                    positionZ: Number
                });
                this.player.hasOne("user", this.player, {
                    reverse: "players"
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
                            ormManager.structure.player.create({ name: "Mietek", type: 1, user_id: userId }, function (err, insertedPlayer) {
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
                            ormManager.structure.player.create({ name: "Tumek", type: 1, user_id: userId }, function (err, insertedPlayer) {
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
