let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let orm = require("orm");
let config = require("./../config.js");

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

    constructor() {
        this.enemyManager = new Server.EnemyManager();
        this.gameModules = new Server.GameModules();
        this.questManager = new Server.QuestManager();
        this.enemies = this.enemyManager.getEnemies();
        this.quests = this.questManager.getQuests();
        this.serverFrontEnd = new Server.FrontEnd(this, app, express);
        this.ormManager = new Server.OrmManager(this, orm, config);
        this.serverWebsocket = new Server.IO(this, io);
    }

}

setTimeout(function () {
    new SlavsServer();
}, 0);