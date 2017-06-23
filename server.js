var io = require('socket.io')(3003);
var remotePlayers = [];
var enemies = [];
createEnemies(3, {min: -5, max: -10}, {min: -10, max: -12});
createEnemies(3, {min: 7, max: 8}, {min: -10, max: -12});

io.on('connection', function (socket) {
    var player = {id: socket.id};
    socket.emit('clientConnected', player);
    ///Player
    socket.on('createPlayer', function (playerName) {
        player = {
            id: player.id,
            p: {
                x: randomNumber(3, -10),
                y: 0.3,
                z: randomNumber(-10, -16)
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

        socket.emit('newPlayerConnected', remotePlayers);
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

    ///Enemies
    socket.emit('showEnemies', enemies);
    socket.on('updateEnemy', function (enemyData) {
        enemies[enemyData.enemyKey].position = enemyData.position;
        enemies[enemyData.enemyKey].rotation = enemyData.rotation;
        socket.broadcast.emit('showEnemies', enemies);
    });
});

function createEnemies(count, positionX, positionZ) {
    var enemy;
    for (var i = 0, len = count; i < len; i++) {
        enemy = {
            position: {
                x: randomNumber(positionX.min, positionX.max),
                y: 0.3,
                z: randomNumber(positionZ.min, positionZ.max)
            },
            rotation: {
                x: 0,
                y: 0,
                z: 0,
                w: 0
            },
            attack: false,
            hp: 100,
            type: 'worm'
        };
        enemies.push(enemy);
    }
}

function randomNumber(minimum, maximum) {
    return Math.round(Math.random() * (maximum - minimum) + minimum);
}