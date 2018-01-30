var Server;
(function (Server) {
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
                        localEnemy.mesh.dispose();
                        self.players.forEach(function (player) {
                            var playerActionManager = player.mesh.actionManager;
                            playerActionManager.actions.forEach(function (action, key) {
                                if (action._triggerParameter == localEnemy.visibilityAreaMesh ||
                                    action._triggerParameter == localEnemy.mesh) {
                                    ///TODO: There should be unregister enemy triggers
                                    console.log('BABYLON: deleted from action manager enemy - ' + remoteEnemyId);
                                    //setTimeout(function() {
                                    //    delete playerActionManager.actions[key];
                                    //});
                                }
                            });
                        });
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
                }
                else {
                    console.log('BABYLON: enemies exists - ' + roomId);
                    return this;
                }
                data.enemies.forEach(function (enemyData, key) {
                    var enemy = self.enemies[roomId][key];
                    if (enemyData.statistics.hp > 0 && !enemy) {
                        var box = BABYLON.Mesh.CreateBox(data.id, 3, scene, false);
                        box.position = new BABYLON.Vector3(enemyData.position.x, enemyData.position.y, enemyData.position.z);
                        var visibilityArea = BABYLON.MeshBuilder.CreateBox('enemy_visivilityArea', {
                            width: 30,
                            height: 1,
                            size: 30
                        }, scene);
                        visibilityArea.visibility = 0.5;
                        visibilityArea.parent = box;
                        enemy = {
                            mesh: box,
                            target: false,
                            activeTargetPoints: [],
                            visibilityAreaMesh: visibilityArea
                        };
                        self.enemies[roomId][key] = enemy;
                    }
                });
            });
            return this;
        };
        BabylonManager.prototype.socketCreateRoom = function () {
            var self = this;
            this.socket.on('createRoom', function (roomId) {
                if (self.scenes[roomId] === undefined) {
                    console.log('BABYLON: crate new room with scene - ' + roomId);
                    var sceneForRoom = new BABYLON.Scene(self.engine);
                    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), sceneForRoom);
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
                console.log('BABYLON: connected new player - ' + playerData.id);
                var remotePlayerKey = null;
                if (playerData.id !== self.socket.id) {
                    //check if user exists
                    self.players.forEach(function (remotePlayer, key) {
                        if (remotePlayer.id == playerData.id) {
                            remotePlayerKey = key;
                            return;
                        }
                    });
                    //if user not exists create scene and box with action manager
                    if (remotePlayerKey === null) {
                        var activeCharacter = playerData.characters[playerData.activeCharacter];
                        var roomId = activeCharacter.roomId;
                        var scene = self.scenes[roomId];
                        var box = BABYLON.Mesh.CreateBox(activeCharacter.id, 3, scene, false);
                        box.position = new BABYLON.Vector3(activeCharacter.position.x, activeCharacter.position.y, activeCharacter.position.z);
                        box.actionManager = new BABYLON.ActionManager(scene);
                        var remotePlayer = {
                            id: activeCharacter.id,
                            socketId: playerData.id,
                            roomId: roomId,
                            mesh: box,
                            registeredFunction: null
                        };
                        self.players.push(remotePlayer);
                        self.registerPlayerInEnemyActionManager(remotePlayer);
                    }
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
                        var scene_1 = self.scenes[roomId];
                        console.log('BABYLON: disconnect player - ' + player.id);
                        //clear enemies target if it is this player
                        self.enemies[roomId].forEach(function (enemy, key) {
                            if (enemy.target == id) {
                                enemy.target = false;
                            }
                            scene_1.unregisterBeforeRender(enemy.activeTargetPoints[id]);
                        });
                        if (player.registeredFunction) {
                            scene_1.unregisterBeforeRender(player.registeredFunction);
                        }
                        player.mesh.dispose();
                        self.players.splice(key, 1);
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
            this.enemies[roomId].forEach(function (enemy, key) {
                enemy.activeTargetPoints[playerMesh.id] = function () {
                    var mesh = enemy.mesh;
                    mesh.lookAt(playerMesh.position.clone());
                    var rotation = mesh.rotation;
                    if (mesh.rotationQuaternion) {
                        rotation = mesh.rotationQuaternion.toEulerAngles();
                    }
                    rotation.negate();
                    var forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / 8, 0, -parseFloat(Math.cos(rotation.y)) / 8);
                    mesh.moveWithCollisions(forwards);
                    mesh.position.y = 0;
                };
                ////start attack
                playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: enemy.mesh
                }, function () {
                    if (!enemy.mesh._isDisposed && enemy.target) {
                        self.socket.emit('setEnemyTarget', {
                            enemyKey: key,
                            position: enemy.mesh.position,
                            roomId: roomId,
                            target: playerMesh.id,
                            attack: true
                        });
                        scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        console.log('BABYLON: Enemy ' + key + ' start attack player ' + socketId + ', roomID:' + roomId);
                    }
                }));
                ////stop attack
                playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
                    parameter: enemy.mesh
                }, function () {
                    if (!enemy.mesh._isDisposed && enemy.target) {
                        self.socket.emit('setEnemyTarget', {
                            enemyKey: key,
                            position: enemy.mesh.position,
                            roomId: roomId,
                            target: playerMesh.id,
                            attack: false
                        });
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
                        self.socket.emit('setEnemyTarget', {
                            enemyKey: key,
                            position: enemy.mesh.position,
                            roomId: roomId,
                            target: playerMesh.id
                        });
                        enemy.target = playerMesh.id;
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
                        self.socket.emit('setEnemyTarget', {
                            enemyKey: key,
                            position: enemy.mesh.position,
                            roomId: roomId,
                            target: null
                        });
                        enemy.target = false;
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
                // console.log('BABYLON: update player - '+ updatedPlayer.id);
                var remotePlayerKey = null;
                var player = null;
                self.players.forEach(function (remotePlayer, key) {
                    if (remotePlayer.socketId == updatedPlayer.connectionId) {
                        remotePlayerKey = key;
                        return;
                    }
                });
                if (remotePlayerKey != null) {
                    var remotePlayer = self.players[remotePlayerKey];
                    player = remotePlayer.mesh;
                    var scene_2 = self.scenes[remotePlayer.roomId];
                    if (player) {
                        if (updatedPlayer.attack == true) {
                            console.log('BABYLON: attack player - ' + updatedPlayer.id);
                            return;
                        }
                        if (remotePlayer.registeredFunction !== undefined) {
                            scene_2.unregisterBeforeRender(remotePlayer.registeredFunction);
                        }
                        if (updatedPlayer.targetPoint) {
                            var mesh_1 = player;
                            var targetPoint = updatedPlayer.targetPoint;
                            var targetPointVector3_1 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                            mesh_1.lookAt(targetPointVector3_1);
                            remotePlayer.registeredFunction = function () {
                                if (mesh_1.intersectsPoint(targetPointVector3_1)) {
                                    var remotePlayer_1 = self.players[remotePlayerKey];
                                    console.log('BABYLON: player intersect target point - ' + updatedPlayer.id + ', roomID:' + remotePlayer_1.roomId);
                                    scene_2.unregisterBeforeRender(remotePlayer_1.registeredFunction);
                                    self.socket.emit('updatePlayerPosition', {
                                        playerSocketId: remotePlayer_1.socketId,
                                        position: player.position
                                    });
                                    /*

                                     socket.on('setTargetPoint', function (targetPoint) {
                                     let character = player.getActiveCharacter();
                                     character.attack = null;
                                     character.targetPoint = targetPoint.position;
                                     socket.broadcast.emit('updatePlayer', character);
                                     socket.emit('updatePlayer', character);
                                     });

                                     */
                                }
                                else {
                                    var rotation = mesh_1.rotation;
                                    if (mesh_1.rotationQuaternion) {
                                        rotation = mesh_1.rotationQuaternion.toEulerAngles();
                                    }
                                    rotation.negate();
                                    var animationRatio = scene_2.getAnimationRatio();
                                    var walkSpeed = 2.3 * (125 / 100) / animationRatio;
                                    var forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / walkSpeed, 0, -parseFloat(Math.cos(rotation.y)) / walkSpeed);
                                    mesh_1.moveWithCollisions(forwards);
                                    mesh_1.position.y = 0;
                                }
                            };
                            scene_2.registerBeforeRender(remotePlayer.registeredFunction);
                        }
                    }
                }
            });
            return this;
        };
        return BabylonManager;
    }());
    Server.BabylonManager = BabylonManager;
})(Server || (Server = {}));
