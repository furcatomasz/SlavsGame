var io = require('socket.io')(3003);
var remotePlayers = [];
var enemies = [];

io.on('connection', function (socket) {
    var player = { id: socket.id };
    socket.emit('clientConnected', player);

    socket.on('createPlayer', function (playerName) {
        player = { id: player.id, p: 0, r: 0, name: playerName };
        remotePlayers.push(player);

        socket.emit('updatePlayers', remotePlayers);
        socket.broadcast.emit('updatePlayers', remotePlayers);

        socket.on('moveTo', function (data) {
            player.p = data.p;
            player.r = data.r;
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

});


