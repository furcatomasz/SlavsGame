var io = require('socket.io')(3003);
var remotePlayers = [];
var enemies = [];
createEnemies();

io.on('connection', function (socket) {
    var player = { id: socket.id };
    socket.emit('clientConnected', player);

    ///Player
    socket.on('createPlayer', function (playerName) {
        player = { id: player.id, p: {}, r: {}, attack: false, name: playerName };
        remotePlayers.push(player);

        socket.broadcast.emit('updatePlayers', remotePlayers);

        socket.on('moveTo', function (data) {
            player.p = data.p;
            player.r = data.r;
            socket.broadcast.emit('updatePlayers', remotePlayers);
        });

        socket.on('attack', function (data) {
            player.attack = data.attack;
            socket.broadcast.emit('updatePlayers', remotePlayers);
        });

    });

    socket.on('disconnect', function () {
        remotePlayers.forEach(function(remotePlayer, key) {
           if(remotePlayer.id == player.id || remotePlayer == null) {
               remotePlayers.splice(key, 1);
           }
        });
        socket.broadcast.emit('removePlayer', player.id);
    });

    ///Enemies
    socket.emit('showEnemies', enemies);
    socket.on('updateEnemy', function (enemyData) {
        enemies[enemyData.enemyKey].position = enemyData.position;
        enemies[enemyData.enemyKey].rotation = enemyData.rotation;
        socket.broadcast.emit('showEnemies', enemies);
    });
});

function createEnemies() {
    var enemy;
    for (var i = 0, len = 10; i < len; i++) {
        enemy = {
            position: {
                x: randomNumber(3, -10),
                y: 0.3,
                z: randomNumber(-10, -16)
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0,
                w: 0
            },
            hp: 100,
            type: 'worm'
        };
        enemies.push(enemy);
    }
}

function randomNumber(minimum, maximum) {
    return Math.round(Math.random() * (maximum - minimum) + minimum);
}