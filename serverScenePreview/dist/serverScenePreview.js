var Server;
(function (Server) {
    var BabylonManager = /** @class */ (function () {
        function BabylonManager(canvas) {
            /* Game Data */
            this.enemies = [];
            this.players = [];
            this.socket = io.connect('http://127.0.0.1:' + 5000, { query: 'monsterServer=1' });
            this.enemies = [];
            this.players = [];
            this.initEngine(canvas);
        }
        BabylonManager.prototype.initEngine = function (canvas) {
            this.engine = new BABYLON.Engine(canvas);
            var scene = new BABYLON.Scene(this.engine);
            this.scene = scene;
            var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas, true);
            this
                .socketShowEnemies(scene)
                .socketUpdateEnemy()
                .socketPlayerConnected(scene)
                .socketUpdatePlayer(scene)
                .removePlayer();
            this.engine.runRenderLoop(function () {
                scene.render();
            });
        };
        /**
         * @returns {SocketIOClient}
         */
        BabylonManager.prototype.socketUpdateEnemy = function () {
            var self = this;
            this.socket.on('updateEnemy', function (data) {
                var remoteEnemy = data.enemy;
                var remoteEnemyId = data.enemyKey;
                var localEnemy = self.enemies[remoteEnemyId];
                console.log('updateEnemy');
                if (remoteEnemy.statistics.hp <= 0 && localEnemy) {
                    if (localEnemy.activeTargetPoints.length > 0) {
                        localEnemy.activeTargetPoints.forEach(function (activeTargetFunction) {
                            console.log('unregister function');
                            self.scene.unregisterBeforeRender(activeTargetFunction);
                        });
                        localEnemy.mesh.dispose();
                        self.players.forEach(function (player) {
                            var playerActionManager = player.mesh.actionManager;
                            playerActionManager.actions.forEach(function (action, key) {
                                if (action._triggerParameter == localEnemy.visibilityAreaMesh ||
                                    action._triggerParameter == localEnemy.mesh) {
                                    ///TODO: There should be unregister enemy triggers
                                    console.log('deleted from action manager');
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
        BabylonManager.prototype.socketShowEnemies = function (scene) {
            var self = this;
            this.socket.on('showEnemies', function (data) {
                data.forEach(function (enemyData, key) {
                    var enemy = self.enemies[key];
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
                        self.enemies[key] = enemy;
                    }
                });
            });
            return this;
        };
        BabylonManager.prototype.socketPlayerConnected = function (scene) {
            var self = this;
            this.socket.on('newPlayerConnected', function (playerData) {
                console.log('connected new player');
                var remotePlayerKey = null;
                if (playerData.id !== self.socket.id) {
                    self.players.forEach(function (remotePlayer, key) {
                        if (remotePlayer.id == playerData.id) {
                            remotePlayerKey = key;
                            return;
                        }
                    });
                    if (remotePlayerKey === null) {
                        console.log('added new player to remote player array');
                        var activePlayer = playerData.characters[playerData.activeCharacter];
                        var box = BABYLON.Mesh.CreateBox(activePlayer.id, 3, scene, false);
                        box.position = new BABYLON.Vector3(0, -5, 0);
                        box.actionManager = new BABYLON.ActionManager(scene);
                        var remotePlayer = {
                            id: activePlayer.id,
                            socketId: playerData.id,
                            mesh: box,
                            registeredFunction: null
                        };
                        self.players.push(remotePlayer);
                        self.registerPlayerInEnemyActionManager(box);
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
                console.log(id);
                self.players.forEach(function (remotePlayer, key) {
                    console.log(remotePlayer);
                    if (remotePlayer.socketId == id) {
                        var player = self.players[key];
                        console.log('remove player ' + id);
                        self.enemies.forEach(function (enemy, key) {
                            if (enemy.target == id) {
                                enemy.target = false;
                            }
                            self.scene.unregisterBeforeRender(enemy.activeTargetPoints[id]);
                        });
                        if (player.registeredFunction) {
                            self.scene.unregisterBeforeRender(player.registeredFunction);
                        }
                        player.mesh.dispose();
                        self.players.splice(key, 1);
                    }
                });
            });
            return this;
        };
        BabylonManager.prototype.registerPlayerInEnemyActionManager = function (playerMesh) {
            var self = this;
            this.enemies.forEach(function (enemy, key) {
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
                            target: playerMesh.id,
                            attack: true
                        });
                        self.scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        console.log('Box coliision enter: start attack' + playerMesh.id);
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
                            target: playerMesh.id,
                            attack: false
                        });
                        self.scene.registerBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        console.log('Box coliision exit: stop attack' + playerMesh.id);
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
                            target: playerMesh.id
                        });
                        enemy.target = playerMesh.id;
                        self.scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        self.scene.registerBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        console.log('coliision enter:' + playerMesh.id);
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
                            target: null
                        });
                        enemy.target = false;
                        console.log('coliision exit:' + playerMesh.id);
                    }
                    self.scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                }));
            });
        };
        BabylonManager.prototype.socketUpdatePlayer = function (scene) {
            var self = this;
            var activeTargetPoints = [];
            this.socket.on('updatePlayer', function (updatedPlayer) {
                var remotePlayerKey = null;
                var player = null;
                self.players.forEach(function (remotePlayer, key) {
                    if (remotePlayer.id == updatedPlayer.id) {
                        remotePlayerKey = key;
                        return;
                    }
                });
                if (remotePlayerKey != null) {
                    player = self.players[remotePlayerKey].mesh;
                    player.position = new BABYLON.Vector3(updatedPlayer.position.x, updatedPlayer.position.y, updatedPlayer.position.z);
                    if (player) {
                        if (updatedPlayer.attack == true) {
                            console.log('playerAttack');
                            return;
                        }
                        if (self.players[remotePlayerKey].registeredFunction !== undefined) {
                            scene.unregisterBeforeRender(self.players[remotePlayerKey].registeredFunction);
                        }
                        if (updatedPlayer.targetPoint) {
                            var mesh_1 = player;
                            var targetPoint = updatedPlayer.targetPoint;
                            var targetPointVector3_1 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                            mesh_1.lookAt(targetPointVector3_1);
                            self.players[remotePlayerKey].registeredFunction = function () {
                                if (mesh_1.intersectsPoint(targetPointVector3_1)) {
                                    console.log('player intersect with target');
                                    scene.unregisterBeforeRender(self.players[remotePlayerKey].registeredFunction);
                                }
                                else {
                                    var rotation = mesh_1.rotation;
                                    if (mesh_1.rotationQuaternion) {
                                        rotation = mesh_1.rotationQuaternion.toEulerAngles();
                                    }
                                    rotation.negate();
                                    var animationRatio = scene.getAnimationRatio();
                                    var walkSpeed = 2.3 * (125 / 100) / animationRatio;
                                    var forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / walkSpeed, 0, -parseFloat(Math.cos(rotation.y)) / walkSpeed);
                                    mesh_1.moveWithCollisions(forwards);
                                    mesh_1.position.y = 0;
                                }
                            };
                            scene.registerBeforeRender(self.players[remotePlayerKey].registeredFunction);
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
