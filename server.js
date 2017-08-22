var io = require('socket.io')(3003);
var remotePlayers = [];
var enemies = [];
// createEnemies(3, {min: 9, max: 5}, {min: 6, max: 6});
createEnemies(1, {min: -2, max: -2}, {min: -30, max: -30}, 'worm', 2);
createEnemies(1, {min: -2, max: -2}, {min: -64, max: -64}, 'worm', 2);
createEnemies(1, {min: -8, max: -8}, {min: -72, max: -72}, 'worm', 2);

createEnemies(1, {min: -2, max: -2}, {min: -30, max: -30}, 'bandit', 3);
createEnemies(1, {min: -2, max: -2}, {min: -64, max: -64}, 'bandit', 3);
createEnemies(1, {min: -8, max: -8}, {min: -72, max: -72}, 'bandit', 3);
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

function createEnemies(count, positionX, positionZ, type, sceneType) {
    var enemy;
    for (var i = 0, len = count; i < len; i++) {
        enemy = {
            id: randomNumber(0, 10000),
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
            type: type,
            target: false
        };
        if(sceneType in enemies == false) {
            enemies[sceneType] = [];
        }

        enemies[sceneType].push(enemy);
    }
}

function randomNumber(minimum, maximum) {
    return Math.round(Math.random() * (maximum - minimum) + minimum);
}