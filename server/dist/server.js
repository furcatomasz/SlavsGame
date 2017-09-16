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
        this.enemyManager = new Server.EnemyManager();
        this.enemies = this.enemyManager.getEnemies();
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
                    attack: false,
                    name: null
                };
                server.ormManager.structure.user.find({ email: "furcatomasz@gmail.com" }, function (err, user) {
                    if (err)
                        throw err;
                    server.ormManager.structure.player.find({ userId: user[0].id }, function (error, players) {
                        if (error)
                            throw error;
                        var itteration = 0;
                        var _loop_1 = function (i) {
                            var playerDatabase = players[i];
                            server.ormManager.structure.playerItems.find({ playerId: playerDatabase.id }, function (error, playerItems) {
                                if (error)
                                    throw error;
                                playerDatabase.items = playerItems;
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
                socket.on('selectCharacter', function (selectedCharacter) {
                    player.activePlayer = selectedCharacter;
                    socket.emit('characterSelected', player);
                });
                ///Player
                socket.on('createPlayer', function (playerName) {
                    player.name = playerName;
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
                    self.server.ormManager.structure.playerItems.get(itemId, function (error, itemDatabase) {
                        itemDatabase.equip = (equip) ? 1 : 0;
                        itemDatabase.save(function () {
                            server.ormManager.structure.playerItems.find({ playerId: player.characters[player.activePlayer].id }, function (error, playerItems) {
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
                    self.server.ormManager.structure.playerItems.create({
                        playerId: playerId,
                        itemId: itemId,
                        improvement: 0,
                        equip: 0
                    }, function (error, addedItem) {
                        player.characters[player.activePlayer].items.push(addedItem);
                        socket.emit('updatePlayerEquip', player.characters[player.activePlayer].items);
                    });
                });
                socket.on('getEquip', function (characterKey) {
                    var playerId = player.characters[characterKey].id;
                    self.server.ormManager.structure.playerItems.find({ playerId: playerId }, function (error, itemsDatabase) {
                        socket.emit('getEquip', itemsDatabase);
                    });
                });
                socket.on('disconnect', function () {
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
                socket.on('changeScenePost', function (enemyData) {
                    player.activeScene = enemyData.sceneType;
                    socket.emit('showEnemies', enemies[enemyData.sceneType]);
                    socket.emit('newPlayerConnected', remotePlayers);
                });
                ///Enemies
                socket.on('updateEnemy', function (enemyData) {
                    var enemy = enemies[enemyData.sceneType][enemyData.enemyKey];
                    enemy.position = enemyData.position;
                    enemy.rotation = enemyData.rotation;
                    enemy.target = enemyData.target;
                    socket.broadcast.emit('showEnemies', enemies);
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
                    userId: Number,
                    name: String,
                    type: String,
                    scene: Number,
                    positionX: Number,
                    positionY: Number,
                    positionZ: Number
                });
                this.playerOnline = db.define("player_online", {
                    playerId: Number,
                    connectDate: Date,
                    activityDate: Date
                });
                this.playerItems = db.define("player_items", {
                    playerId: Number,
                    itemId: Number,
                    improvement: Number,
                    equip: Number
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
                            ormManager.structure.player.create({ name: "Mietek", type: 1, userId: userId }, function (err, insertedPlayer) {
                                if (err)
                                    throw err;
                                var insertedPlayerId = insertedPlayer.id;
                                ormManager.structure.playerItems.create([
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 1,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 2,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 3,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 4,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 5,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 6,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 7,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 8,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
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
                            ormManager.structure.player.create({ name: "Tumek", type: 1, userId: userId }, function (err, insertedPlayer) {
                                if (err)
                                    throw err;
                                var insertedPlayerId = insertedPlayer.id;
                                ormManager.structure.playerItems.create([
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 1,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 2,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 3,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 4,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 5,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 6,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 7,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
                                        itemId: 8,
                                        improvement: 0,
                                        equip: 0
                                    },
                                    {
                                        playerId: insertedPlayerId,
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
