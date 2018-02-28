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
server.listen(config.server.port);

class SlavsServer {

    protected serverWebsocket: Server.IO;
    protected serverFrontEnd: Server.FrontEnd;
    protected enemyManager: Server.EnemyManager;
    protected questManager: Server.QuestManager;
    public ormManager: Server.OrmManager;
    public enemies = [];
    public quests = [];
    public gameModules: Server.GameModules;
    public babylonManager: Server.BabylonManager;

    constructor() {
        let self = this;
        this.ormManager = new Server.OrmManager(self, orm, config);
        this.gameModules = new Server.GameModules();
        this.gameModules.loadModules(function() {
            self.enemyManager = new Server.EnemyManager();
            self.questManager = new Server.QuestManager();
            self.enemies = self.enemyManager.getEnemies();
            self.quests = self.questManager.getQuests();
            //self.serverFrontEnd = new Server.FrontEnd(self, app, express);
             self.babylonManager = new Server.BabylonManager(self);
            self.serverWebsocket = new Server.IO(self, io);
        });
        
    }

}

setTimeout(function () {
    new SlavsServer();
}, 0);