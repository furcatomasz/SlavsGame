import * as BABYLON from 'babylonjs';
import {RemotePlayer} from "./RemotePlayer";
import {Enemy} from "./Enemy";
import {RoomEnemies} from "./RoomEnemies";

export class AIServer {
    protected engine: BABYLON.Engine;
    protected scene: BABYLON.Scene;
    protected socket;
    protected roomsEnemies: RoomEnemies[];
    protected players: RemotePlayer[];
    protected scenes: BABYLON.Scene[];

    constructor(canvas, socket) {
        this.socket = socket.connect('http://127.0.0.1:' + 5000, {query: 'monsterServer=1'});
        this.roomsEnemies = [];
        this.players = [];
        this.scenes = [];
        this.initEngine(canvas);
    }

    public initEngine(canvas) {
        let self = this;
        console.log('Init engine');
        this.engine = (canvas) ? new BABYLON.Engine(canvas) : new BABYLON.NullEngine();
        this
            .socketShowEnemies()
            .socketUpdateEnemy()
            .socketPlayerConnected()
            .socketUpdatePlayer()
            .removePlayer()
            .socketCreateRoom();

        this.engine.runRenderLoop(() => {
            for (let key in self.scenes) {
                let scene = self.scenes[key];
                scene.render();
            }
        });


    }

    public socketUpdateEnemy() {
        let self = this;
        this.socket.on('updateEnemy', data => {
            let roomId = data.roomId;
            let remoteEnemy = data.enemy;
            let remoteEnemyId = data.enemyKey;
            let localEnemy = self.roomsEnemies[roomId][remoteEnemyId];
            let scene = self.scenes[roomId];
            console.log('BABYLON: update enemy - ' + remoteEnemyId);

            if (remoteEnemy.statistics.hp <= 0 && localEnemy) {
                if (localEnemy.activeTargetPoints.length > 0) {
                    localEnemy.activeTargetPoints.forEach(activeTargetFunction => {
                        console.log('BABYLON: unregister function enemy - ' + remoteEnemyId);

                        scene.unregisterBeforeRender(activeTargetFunction);
                    });
                    clearInterval(localEnemy.attackInterval);
                    localEnemy.mesh.dispose();

                }
            }
        });

        return this;
    }

    public socketShowEnemies() {
        let self = this;
        this.socket.on('createEnemies', data => {
            let roomId = data.roomId;
            let scene = self.scenes[roomId];

            if (!self.roomsEnemies[roomId]) {
                console.log('BABYLON: create enemies - ' + roomId);

                self.roomsEnemies[roomId].enemies = [];

                data.enemies.forEach((enemyData, key) => {
                    let enemy = self.roomsEnemies[roomId][key];
                    if (enemyData.statistics.hp > 0 && !enemy) {
                        let box = BABYLON.Mesh.CreateBox(data.id, 3, scene, false);
                        box.checkCollisions = false;
                        box.position = new BABYLON.Vector3(enemyData.position.x, enemyData.position.y, enemyData.position.z);

                        let visibilityArea = BABYLON.MeshBuilder.CreateBox('enemy_visivilityArea', {
                            width: 30,
                            height: 1,
                            size: 30
                        }, scene);
                        visibilityArea.visibility = 0.5;
                        visibilityArea.parent = box;

                        enemy = new Enemy();
                        enemy.key = key;
                        enemy.mesh = box;
                        enemy.attack = false;
                        enemy.target = false;
                        enemy.activeTargetPoints = [];
                        enemy.availableCharactersToAttack = [];
                        enemy.walkSpeed = enemyData.statistics.walkSpeed;
                        enemy.visibilityAreaMesh = visibilityArea;
                        enemy.attackInterval = null;

                        self.roomsEnemies[roomId][key] = enemy;
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
            if (self.scenes[roomId] === undefined) {
                console.log('BABYLON: crate new room with scene - ' + roomId);

                let sceneForRoom = new BABYLON.Scene(self.engine);
                sceneForRoom.collisionsEnabled = false;
                let camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 200, 0), sceneForRoom);
                camera.rotation = new BABYLON.Vector3(1.5, 1, 1);
                self.scenes[roomId] = sceneForRoom;
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
            let scene = self.scenes[roomId];

            if (!scene) {
                return;
            }
            if (playerData.connectionId !== self.socket.id) {
                //if user not exists create scene and box with action manager
                let box = BABYLON.Mesh.CreateBox(activeCharacter.id, 3, scene, false);
                box.checkCollisions = false;
                box.position = new BABYLON.Vector3(playerData.position.x, playerData.position.y, playerData.position.z);
                box.actionManager = new BABYLON.ActionManager(scene);

                let remotePlayer = new RemotePlayer(activeCharacter.id, playerData.connectionId, activeCharacter.statistics.walkSpeed, roomId, box);

                self.players[activeCharacter.id] = remotePlayer;
                self.registerPlayerInEnemyActionManager(remotePlayer);
            }
        });

        return this;
    }

    protected removePlayer() {
        let self = this;
        this.socket.on('removePlayer', id => {
            self.players.forEach((remotePlayer, key) => {

                if (remotePlayer.socketId == id) {
                    let player = self.players[key];
                    let roomId = player.roomId;
                    let scene = self.scenes[roomId];
                    console.log('BABYLON: disconnect player - ' + player.id);

                    if (player.registeredFunction) {
                        scene.unregisterBeforeRender(player.registeredFunction);
                    }

                    player.mesh.dispose();
                    delete self.players[key];
                }
            });
        });

        return this;
    }

    protected registerPlayerInEnemyActionManager(remotePlayerData: RemotePlayer) {
        let self = this;
        let playerMesh = remotePlayerData.mesh;
        let roomId = remotePlayerData.roomId;
        let socketId = remotePlayerData.socketId;
        let scene = this.scenes[roomId];
        console.log('register player / socket' + socketId);
        this.roomsEnemies[roomId].forEach((enemy, key) => {
            enemy.activeTargetPoints[playerMesh.id] = () => {
                let mesh = enemy.mesh;
                mesh.lookAt(playerMesh.position.clone(), Math.PI);

                let rotation = mesh.rotation;
                let animationRatio = scene.getAnimationRatio();
                let walkSpeed = enemy.walkSpeed / animationRatio;

                let forwards = new BABYLON.Vector3(-(Math.sin(rotation.y) / walkSpeed), 0, -(Math.cos(rotation.y) / walkSpeed));
                mesh.moveWithCollisions(forwards);
                mesh.position.y = 0;
            };

            let setEnemyTargetFunction = (enemy: Enemy, event: string) => {
                console.log({
                    enemyKey: enemy.key,
                    position: enemy.mesh.position,
                    roomId: roomId,
                    target: enemy.target,
                    attack: enemy.attack,
                    availableCharactersToAttack: enemy.availableCharactersToAttack,
                    collisionEvent: event
                });
                self.socket.emit('setEnemyTarget', {
                    enemyKey: enemy.key,
                    position: enemy.mesh.position,
                    roomId: roomId,
                    target: enemy.target,
                    attack: enemy.attack,
                    availableCharactersToAttack: enemy.availableCharactersToAttack,
                    collisionEvent: event
                });
            };

            ////start attack
            playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                parameter: enemy.mesh
            }, function () {
                console.log('Add attack character: ' + enemy.target);
                enemy.availableCharactersToAttack[enemy.target] = true;
                if (!enemy.mesh._isDisposed && enemy.target) {
                    enemy.attack = true;
                    setEnemyTargetFunction(enemy, 'OnIntersectionEnterTriggerAttack');
                    enemy.attackInterval = setInterval(() => {
                        setEnemyTargetFunction(enemy, 'OnIntersectionEnterTriggerAttack');
                    }, 1500);

                    scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                    console.log('BABYLON: Enemy ' + key + ' start attack player ' + socketId + ', roomID:' + roomId);
                }
            }));

            ////stop attack
            playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
                parameter: enemy.mesh
            }, function () {
                console.log('Delete attack character: ' + enemy.target);
                delete enemy.availableCharactersToAttack[enemy.target];

                if (!enemy.mesh._isDisposed && enemy.target) {
                    enemy.attack = false;
                    setEnemyTargetFunction(enemy, 'OnIntersectionExitTriggerAttack');
                    clearInterval(enemy.attackInterval);

                    scene.registerBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                    console.log('BABYLON: Enemy ' + key + ' stop attack player ' + socketId + ', roomID:' + roomId);
                }
            }));

            ///start following
            playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                parameter: enemy.visibilityAreaMesh
            }, () => {
                if (!enemy.mesh._isDisposed && !enemy.target) {
                    enemy.target = playerMesh.id;
                    setEnemyTargetFunction(enemy, 'OnIntersectionEnterTriggerVisibility');
                    scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                    scene.registerBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                    console.log('BABYLON: Enemy ' + key + ' set target as player ' + socketId + ', roomID:' + roomId);
                }
            }));

            ///stop following
            playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
                parameter: enemy.visibilityAreaMesh
            }, () => {
                if (!enemy.mesh._isDisposed && enemy.target) {
                    enemy.target = false;
                    setEnemyTargetFunction(enemy, 'OnIntersectionExitTriggerVisibility');
                    console.log('BABYLON: Enemy ' + key + ' lost target ' + socketId + ', roomID:' + roomId);
                }

                scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
            }));
        });

    }

    public socketUpdatePlayer() {
        let self = this;
        this.socket.on('updatePlayer', updatedPlayer => {
            console.log('BABYLON: update player - ' + updatedPlayer.activePlayer.id);

            let player = self.players[updatedPlayer.activePlayer.id];
            let scene = self.scenes[updatedPlayer.activeRoom.id];

            if (player) {
                if (updatedPlayer.attack == true) {
                    console.log('BABYLON: attack player - ' + updatedPlayer.activePlayer.id);

                    return;
                }

                if (player.registeredFunction !== undefined) {
                    scene.unregisterBeforeRender(player.registeredFunction);
                }

                if (updatedPlayer.targetPoint && !updatedPlayer.attack) {
                    let mesh = player.mesh;
                    let targetPoint = updatedPlayer.targetPoint;
                    let targetPointVector3 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                    mesh.lookAt(targetPointVector3, Math.PI);

                    player.registeredFunction = () => {
                        if (mesh.intersectsPoint(targetPointVector3)) {
                            let player = self.players[updatedPlayer.activePlayer.id];

                            console.log('BABYLON: player intersect target point - ' + updatedPlayer.id + ', roomID:' + updatedPlayer.activeRoom.id);
                            scene.unregisterBeforeRender(player.registeredFunction);

                        } else {
                            let rotation = mesh.rotation;
                            let animationRatio = scene.getAnimationRatio();
                            let walkSpeed = player.walkSpeed / animationRatio;

                            let forwards = new BABYLON.Vector3(-((Math.sin(rotation.y)) / walkSpeed), 0, -Math.cos((rotation.y) / walkSpeed));
                            mesh.moveWithCollisions(forwards);
                            mesh.position.y = 0;

                        }

                    };

                    scene.registerBeforeRender(player.registeredFunction);
                }
            }
        });

        return this;

    }
}

