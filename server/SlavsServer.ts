let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let socketIOClient = require('socket.io-client');
let orm = require("orm");
let config = require("./../config.js");
let BABYLON = require("../../bower_components/babylonjs/dist/babylon.max");
let LOADERS = require("../../bower_components/babylonjs/dist/loaders/babylonjs.loaders");
let requirejs = require('requirejs');
const EventEmitter = require('events');
server.listen(config.server.port);

class SlavsServer {

    protected serverWebsocket: Server.IO;
    protected serverFrontEnd: Server.FrontEnd;
    protected enemyManager: Server.EnemyManager;
    public ormManager: Server.OrmManager;
    public enemies = [];
    public gameModules: Server.GameModules;
    public babylonManager: Server.BabylonManager;

    constructor() {
        let self = this;
        app.set('server_socket_io', io);
        app.set('event_emitter', new EventEmitter());
        app.set('quest_manager', new Server.QuestManager());

        this.ormManager = new Server.OrmManager(self, orm, config);
        this.gameModules = new Server.GameModules();
        this.gameModules.loadModules(function() {
            self.enemyManager = new Server.EnemyManager();
            self.enemies = self.enemyManager.getEnemies();
            //self.serverFrontEnd = new Server.FrontEnd(self, app, express);
             self.babylonManager = new Server.BabylonManager(self);
            self.serverWebsocket = new Server.IO(self, io);
        });
        
    }

}

setTimeout(function () {
    new SlavsServer();
}, 0);