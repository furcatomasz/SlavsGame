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
    protected ormManager: Server.OrmManager;

    public enemies = [];

    constructor() {
        this.enemyManager = new Server.EnemyManager();
        this.enemies = this.enemyManager.getEnemies();
        this.serverWebsocket = new Server.IO(this, io);
        this.serverFrontEnd = new Server.FrontEnd(this, app, express);
        this.ormManager = new Server.OrmManager(this, orm, config);
    }

}

setTimeout(function () {
    new SlavsServer();
}, 0);