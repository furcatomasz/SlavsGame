let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let socketIOClient = require('socket.io-client');
let orm = require("orm");
let config = require("./../config.js");
let BABYLON = require("../../bower_components/babylonjs/dist/preview release/babylon.max");
let LOADERS = require("../../bower_components/babylonjs/dist/preview release/loaders/babylonjs.loaders");
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

}

setTimeout(function () {
    new SlavsServer();
}, 0);