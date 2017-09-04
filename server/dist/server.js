var Server;
(function (Server) {
    var EnemyManager = (function () {
        function EnemyManager() {
        }
        EnemyManager.prototype.createEnemy = function (position, type) {
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
                attack: false
            };
        };
        EnemyManager.prototype.getEnemies = function () {
            var enemies = [];
            enemies[2] = [
                this.createEnemy({ x: -2, y: 0, z: -30 }, 'worm'),
                this.createEnemy({ x: -2, y: 0, z: -64 }, 'worm'),
                this.createEnemy({ x: -8, y: 0, z: -72 }, 'worm'),
            ];
            enemies[3] = [
                this.createEnemy({ x: -2, y: 0, z: -30 }, 'bandit'),
                this.createEnemy({ x: -2, y: 0, z: -64 }, 'bandit'),
                this.createEnemy({ x: -8, y: 0, z: -72 }, 'bandit'),
            ];
            return enemies;
        };
        return EnemyManager;
    }());
    Server.EnemyManager = EnemyManager;
})(Server || (Server = {}));
var Server;
(function (Server) {
    var OrmManager = (function () {
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
                });
                new Server.Orm.TestData(self);
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
var SlavsServer = (function () {
    function SlavsServer() {
        this.enemies = [];
        this.enemyManager = new Server.EnemyManager();
        this.enemies = this.enemyManager.getEnemies();
        this.serverWebsocket = new Server.IO(this, io);
        this.serverFrontEnd = new Server.FrontEnd(this, app, express);
        this.ormManager = new Server.OrmManager(this, orm, config);
    }
    return SlavsServer;
}());
setTimeout(function () {
    new SlavsServer();
}, 0);
var path = require('path');
var Server;
(function (Server) {
    var FrontEnd = (function () {
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
    var IO = (function () {
        function IO(server, serverIO) {
            this.remotePlayers = [];
            var enemies = server.enemies;
            var remotePlayers = this.remotePlayers;
            this.server = server;
            serverIO.on('connection', function (socket) {
                var player = { id: socket.id };
                socket.emit('clientConnected', player);
                ///Player
                socket.on('createPlayer', function (playerName) {
                    player = {
                        id: player.id,
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
                        name: playerName
                    };
                    remotePlayers.push(player);
                    socket.broadcast.emit('newPlayerConnected', remotePlayers);
                    socket.on('moveTo', function (data) {
                        player.p = data.p;
                        player.r = data.r;
                        socket.broadcast.emit('updatePlayer', player);
                    });
                    socket.on('attack', function (data) {
                        player.attack = data.attack;
                        socket.broadcast.emit('updatePlayer', player);
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
                    socket.emit('showEnemies', enemies[enemyData.sceneType]);
                });
                ///Enemies
                socket.on('updateEnemy', function (enemyData) {
                    var enemy = enemies[enemyData.sceneType][enemyData.enemyKey];
                    enemy.position = enemyData.position;
                    enemy.rotation = enemyData.rotation;
                    enemy.target = enemyData.target;
                    socket.broadcast.emit('showEnemies', enemies);
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
        var Structure = (function () {
            function Structure(db) {
                this.user = db.define("user", {
                    email: String,
                    password: String
                });
                this.player = db.define("player", {
                    userId: Number,
                    name: String,
                    type: String,
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
        var TestData = (function () {
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
                            ormManager.structure.player.create({ name: "Mietek", type: 1, userId: userId }, function (err) {
                                if (err)
                                    throw err;
                            });
                        }
                    });
                    ormManager.structure.player.exists({ name: "Tumek" }, function (err, exists) {
                        if (err)
                            throw err;
                        if (!exists) {
                            ormManager.structure.player.create({ name: "Tumek", type: 1, userId: userId }, function (err) {
                                if (err)
                                    throw err;
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
