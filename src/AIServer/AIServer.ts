import * as BABYLON from 'babylonjs';
import {Room} from "./Room";
import {Enemy} from "./Enemy";
import {RemotePlayer} from "./RemotePlayer";
import {EnemyActionManager} from "./EnemyActionManager";
import {PlayerActionManager} from "./PlayerActionManager";

export class AIServer {
    public engine: BABYLON.Engine;
    protected scene: BABYLON.Scene;
    public socket;
    protected rooms: Room[] = [];

    constructor(canvas, socket) {
        this.socket = socket.connect('http://127.0.0.1:' + 5000, {query: 'monsterServer=1'});
        this.initEngine(canvas);
    }

    getRoomById(roomId: string, createNewIfNotExists: boolean = true): Room {
        if ((this.rooms[roomId] == undefined)) {
            if (!createNewIfNotExists) {
                return null;
            }

            this.rooms[roomId] = new Room(this);
        }

        return this.rooms[roomId];
    }

    public initEngine(canvas) {
        let self = this;
        this.engine = (canvas) ? new BABYLON.Engine(canvas) : new BABYLON.NullEngine();
        this
            .socketShowEnemies()
            .socketUpdateEnemy()
            .socketPlayerConnected()
            .socketUpdatePlayer()
            .removePlayer()
            .socketCreateRoom();

        this.engine.runRenderLoop(() => {
            for (let key in self.rooms) {
                self.getRoomById(key).scene.render();
            }
        });
    }

    public socketUpdateEnemy() {
        let self = this;
        this.socket.on('updateEnemy', data => {
            let roomId = data.roomId;
            let remoteEnemy = data.enemy;
            let remoteEnemyId = data.enemyKey;
            let room = self.getRoomById(roomId);
            let localEnemy = room.enemies[remoteEnemyId];
            console.log('BABYLON: update enemy - ' + remoteEnemyId);
            if (remoteEnemy.statistics.hp <= 0) {
                localEnemy.clearActiveTarget(room);
            }
        });

        return this;
    }

    public socketShowEnemies() {
        let self = this;
        this.socket.on('createEnemies', data => {
            let roomId = data.roomId;
            let room = self.getRoomById(roomId);
            let scene = room.scene;

            if (!room.enemies.length) {
                console.log('BABYLON: create enemies - ' + roomId);

                data.enemies.forEach((enemyData, key) => {
                    let enemy = room.enemies[key];
                    if (enemyData.statistics.hp > 0 && !enemy) {
                        room.enemies[key] = new Enemy(key, enemyData.statistics.walkSpeed, new BABYLON.Vector3(enemyData.position.x, enemyData.position.y, enemyData.position.z), scene);
                    }
                });
            } else {
                console.log('BABYLON: enemies exists - ' + roomId);
            }

        });

        return this;
    }

    public socketCreateRoom() {
        let self = this;
        this.socket.on('createRoom', roomId => {
            let room = self.getRoomById(roomId, false);
            if (!room) {
                console.log('BABYLON: crate new room with scene - ' + roomId);
                self.rooms[roomId] = new Room(self);
            } else {
                console.log('BABYLON: room exists - ' + roomId);
            }
        });

        return this;
    }

    public socketPlayerConnected() {
        let self = this;
        this.socket.on('showPlayer', playerData => {
            console.log('BABYLON: connected new player - ' + playerData.connectionId);
            let activeCharacter = playerData.activePlayer;
            let roomId = playerData.activeRoom.id;
            let room = self.getRoomById(roomId);
            let scene = room.scene;

            if (playerData.connectionId !== self.socket.id) {
                let remotePlayer = new RemotePlayer(
                    activeCharacter.id,
                    playerData.connectionId,
                    activeCharacter.statistics.walkSpeed,
                    roomId,
                    scene,
                    new BABYLON.Vector3(playerData.position.x, playerData.position.y, playerData.position.z)
                );

                room.players[activeCharacter.id] = remotePlayer;
                EnemyActionManager.registerPlayerInEnemyActionManager(self, remotePlayer);
            }
        });

        return this;
    }

    protected removePlayer() {
        let self = this;
        this.socket.on('removePlayer', id => {
            Object.keys(self.rooms).forEach((roomId) => {
                let room = self.rooms[roomId];
                room.players.forEach((player, playerId) => {
                    if (player.socketId == id) {
                        console.log('BABYLON: disconnect player - ' + player.id);
                        player.dispose(room);
                        delete room.players[playerId];
                        if (!Object.keys(room.players).length) {
                            console.log('remove room');
                            room.removeRoom();
                            delete self.rooms[player.roomId];


                        }
                    }
                });
            });
        });

        return this;
    }

    public socketUpdatePlayer() {
        let self = this;
        this.socket.on('updatePlayer', updatedPlayer => {
            const activeCharacter = updatedPlayer.activePlayer;
            const characterId = activeCharacter.id;

            console.log('BABYLON: update player - ' + characterId);
            if (updatedPlayer.attack == true) {
                console.log('BABYLON: player attack - ' + characterId);

                return;
            }

            const roomId = updatedPlayer.activeRoom.id;
            const room = self.getRoomById(roomId);
            const player = room.players[characterId];
            const scene = room.scene;
            if(player) {
                PlayerActionManager.goToTarget(scene, player, updatedPlayer.targetPoint, roomId, self);
            }
        });

        return this;
    }
}

