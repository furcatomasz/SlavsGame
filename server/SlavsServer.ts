let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

server.listen(5000);

class SlavsServer {

    protected serverWebsocket: Server.IO;
    protected serverFrontEnd: Server.FrontEnd;
    protected enemyManager: Server.EnemyManager;

    public enemies = [];

    constructor() {
        this.enemyManager = new Server.EnemyManager();
        this.enemies = this.enemyManager.getEnemies();
        this.serverWebsocket = new Server.IO(this, io);
        this.serverFrontEnd = new Server.FrontEnd(this, app, express);
    }

}

setTimeout(function () {
    new SlavsServer();
}, 0);