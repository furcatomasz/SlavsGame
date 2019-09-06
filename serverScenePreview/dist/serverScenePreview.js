var Server;
(function (Server) {
    var Enemy = /** @class */ (function () {
        function Enemy() {
        }
        return Enemy;
    }());
    Server.Enemy = Enemy;
    var RemotePlayer = /** @class */ (function () {
        function RemotePlayer(id, socketId, walkSpeed, roomId, mesh) {
            this.id = id;
            this.socketId = socketId;
            this.walkSpeed = walkSpeed;
            this.roomId = roomId;
            this.mesh = mesh;
        }
        return RemotePlayer;
    }());
    Server.RemotePlayer = RemotePlayer;
    var BabylonManager = /** @class */ (function () {
        function BabylonManager(canvas) {
            /* Game Data */
            this.enemies = [];
            this.players = [];
            this.scenes = [];
            this.socket = io.connect('http://127.0.0.1:' + 5000, { query: 'monsterServer=1' });
            this.enemies = [];
            this.players = [];
            this.scenes = [];
            this.initEngine(canvas);
        }
        BabylonManager.prototype.initEngine = function (canvas) {
            var self = this;
            this.engine = new BABYLON.Engine(canvas);
            this
                .socketShowEnemies()
                .socketUpdateEnemy()
                .socketPlayerConnected()
                .socketUpdatePlayer()
                .removePlayer()
                .socketCreateRoom();
            this.engine.runRenderLoop(function () {
                for (var key in self.scenes) {
                    var scene = self.scenes[key];
                    scene.render();
                }
            });
        };
        /**
         * @returns {SocketIOClient}
         */
        BabylonManager.prototype.socketUpdateEnemy = function () {
            var self = this;
            this.socket.on('updateEnemy', function (data) {
                var roomId = data.roomId;
                var remoteEnemy = data.enemy;
                var remoteEnemyId = data.enemyKey;
                var localEnemy = self.enemies[roomId][remoteEnemyId];
                var scene = self.scenes[roomId];
                console.log('BABYLON: update enemy - ' + remoteEnemyId);
                if (remoteEnemy.statistics.hp <= 0 && localEnemy) {
                    if (localEnemy.activeTargetPoints.length > 0) {
                        localEnemy.activeTargetPoints.forEach(function (activeTargetFunction) {
                            console.log('BABYLON: unregister function enemy - ' + remoteEnemyId);
                            scene.unregisterBeforeRender(activeTargetFunction);
                        });
                        clearInterval(localEnemy.attackInterval);
                        localEnemy.mesh.dispose();
                    }
                }
            });
            return this;
        };
        /**
         * @returns {SocketIOClient}
         */
        BabylonManager.prototype.socketShowEnemies = function () {
            var self = this;
            this.socket.on('createEnemies', function (data) {
                var roomId = data.roomId;
                var scene = self.scenes[roomId];
                if (!self.enemies[roomId]) {
                    console.log('BABYLON: create enemies - ' + roomId);
                    self.enemies[roomId] = [];
                    data.enemies.forEach(function (enemyData, key) {
                        var enemy = self.enemies[roomId][key];
                        if (enemyData.statistics.hp > 0 && !enemy) {
                            var box = BABYLON.Mesh.CreateBox(data.id, 3, scene, false);
                            box.checkCollisions = false;
                            box.position = new BABYLON.Vector3(enemyData.position.x, enemyData.position.y, enemyData.position.z);
                            var visibilityArea = BABYLON.MeshBuilder.CreateBox('enemy_visivilityArea', {
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
                            self.enemies[roomId][key] = enemy;
                        }
                    });
                }
                else {
                    console.log('BABYLON: enemies exists - ' + roomId);
                }
            });
            return this;
        };
        BabylonManager.prototype.socketCreateRoom = function () {
            var self = this;
            this.socket.on('createRoom', function (roomId) {
                if (self.scenes[roomId] === undefined) {
                    console.log('BABYLON: crate new room with scene - ' + roomId);
                    var sceneForRoom = new BABYLON.Scene(self.engine);
                    sceneForRoom.collisionsEnabled = false;
                    var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 200, 0, sceneForRoom));
                    camera.rotation = new BABYLON.Vector3(1.5, 1, 1);
                    self.scenes[roomId] = sceneForRoom;
                }
                else {
                    console.log('BABYLON: room exists - ' + roomId);
                }
            });
            return this;
        };
        BabylonManager.prototype.socketPlayerConnected = function () {
            var self = this;
            this.socket.on('showPlayer', function (playerData) {
                console.log('BABYLON: connected new player - ' + playerData.connectionId);
                var activeCharacter = playerData.activePlayer;
                var roomId = playerData.activeRoom.id;
                var scene = self.scenes[roomId];
                if (!scene) {
                    return;
                }
                if (playerData.connectionId !== self.socket.id) {
                    //if user not exists create scene and box with action manager
                    var box = BABYLON.Mesh.CreateBox(activeCharacter.id, 3, scene, false);
                    box.checkCollisions = false;
                    box.position = new BABYLON.Vector3(playerData.position.x, playerData.position.y, playerData.position.z);
                    box.actionManager = new BABYLON.ActionManager(scene);
                    var remotePlayer = new RemotePlayer(activeCharacter.id, playerData.connectionId, activeCharacter.statistics.walkSpeed, roomId, box);
                    self.players[activeCharacter.id] = remotePlayer;
                    self.registerPlayerInEnemyActionManager(remotePlayer);
                }
            });
            return this;
        };
        /**
         *
         * @returns {SocketIOClient}
         */
        BabylonManager.prototype.removePlayer = function () {
            var self = this;
            this.socket.on('removePlayer', function (id) {
                self.players.forEach(function (remotePlayer, key) {
                    if (remotePlayer.socketId == id) {
                        var player = self.players[key];
                        var roomId = player.roomId;
                        var scene = self.scenes[roomId];
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
        };
        BabylonManager.prototype.registerPlayerInEnemyActionManager = function (remotePlayerData) {
            var self = this;
            var playerMesh = remotePlayerData.mesh;
            var roomId = remotePlayerData.roomId;
            var socketId = remotePlayerData.socketId;
            var scene = this.scenes[roomId];
            console.log('register player / socket' + socketId);
            this.enemies[roomId].forEach(function (enemy, key) {
                enemy.activeTargetPoints[playerMesh.id] = function () {
                    var mesh = enemy.mesh;
                    mesh.lookAt(playerMesh.position.clone(), Math.PI);
                    var rotation = mesh.rotation;
                    var animationRatio = scene.getAnimationRatio();
                    var walkSpeed = enemy.walkSpeed / animationRatio;
                    var forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / walkSpeed, 0, -parseFloat(Math.cos(rotation.y)) / walkSpeed);
                    mesh.moveWithCollisions(forwards);
                    mesh.position.y = 0;
                };
                var setEnemyTargetFunction = function (enemy, event) {
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
                        enemy.attackInterval = setInterval(function () {
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
                }, function () {
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
                }, function () {
                    if (!enemy.mesh._isDisposed && enemy.target) {
                        enemy.target = false;
                        setEnemyTargetFunction(enemy, 'OnIntersectionExitTriggerVisibility');
                        console.log('BABYLON: Enemy ' + key + ' lost target ' + socketId + ', roomID:' + roomId);
                    }
                    scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                }));
            });
        };
        BabylonManager.prototype.socketUpdatePlayer = function () {
            var self = this;
            var activeTargetPoints = [];
            this.socket.on('updatePlayer', function (updatedPlayer) {
                console.log('BABYLON: update player - ' + updatedPlayer.activePlayer.id);
                var player = self.players[updatedPlayer.activePlayer.id];
                var scene = self.scenes[updatedPlayer.activeRoom.id];
                if (player) {
                    if (updatedPlayer.attack == true) {
                        console.log('BABYLON: attack player - ' + updatedPlayer.activePlayer.id);
                        return;
                    }
                    if (player.registeredFunction !== undefined) {
                        scene.unregisterBeforeRender(player.registeredFunction);
                    }
                    if (updatedPlayer.targetPoint && !updatedPlayer.attack) {
                        var mesh_1 = player.mesh;
                        var targetPoint = updatedPlayer.targetPoint;
                        var targetPointVector3_1 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                        mesh_1.lookAt(targetPointVector3_1, Math.PI);
                        player.registeredFunction = function () {
                            if (mesh_1.intersectsPoint(targetPointVector3_1)) {
                                var player_1 = self.players[updatedPlayer.activePlayer.id];
                                console.log('BABYLON: player intersect target point - ' + updatedPlayer.id + ', roomID:' + updatedPlayer.activeRoom.id);
                                scene.unregisterBeforeRender(player_1.registeredFunction);
                            }
                            else {
                                var rotation = mesh_1.rotation;
                                var animationRatio = scene.getAnimationRatio();
                                var walkSpeed = player.walkSpeed / animationRatio;
                                var forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / walkSpeed, 0, -parseFloat(Math.cos(rotation.y)) / walkSpeed);
                                mesh_1.moveWithCollisions(forwards);
                                mesh_1.position.y = 0;
                            }
                        };
                        scene.registerBeforeRender(player.registeredFunction);
                    }
                }
            });
            return this;
        };
        return BabylonManager;
    }());
    Server.BabylonManager = BabylonManager;
})(Server || (Server = {}));
