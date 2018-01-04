namespace Server {

    export class BabylonManager {

        protected slavsServer:SlavsServer;
        protected engine:BABYLON.NullEngine;
        protected scene:BABYLON.Scene;
        protected socket;

        /* Game Data */

        protected enemies = [];
        protected players = [];

        constructor(slavsServer:SlavsServer) {
            this.slavsServer = slavsServer;
            this.socket = socketIOClient.connect('http://127.0.0.1:' + config.server.port, {query: 'monsterServer=1'});
            this.enemies = [];
            this.players = [];
            this.initEngine();
        }

        public initEngine() {
            this.engine = new BABYLON.NullEngine();
            let scene = new BABYLON.Scene(this.engine);
            this.scene = scene;
            let camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
            this
                .socketShowEnemies(scene)
                .socketUpdateEnemy()
                .socketPlayerConnected(scene)
                .socketUpdatePlayer(scene)
                .removePlayer();
            this.engine.runRenderLoop(function () {
                scene.render();
            })


        }

        /**
         * @returns {SocketIOClient}
         */
        public socketUpdateEnemy() {
            let self = this;
            this.socket.on('updateEnemy', function (data) {
                let remoteEnemy = data.enemy;
                let remoteEnemyId = data.enemyKey;
                let localEnemy = self.enemies[remoteEnemyId];
                console.log('updateEnemy');
                if (remoteEnemy.statistics.hp <= 0 && localEnemy) {

                    if (localEnemy.activeTargetPoints.length > 0) {
                        localEnemy.activeTargetPoints.forEach(function (activeTargetFunction) {
                            console.log('unregister function');
                            self.scene.unregisterBeforeRender(activeTargetFunction);
                        });
                        localEnemy.mesh.dispose();

                        self.players.forEach(function(player) {
                            var playerActionManager = player.mesh.actionManager;
                            playerActionManager.actions.forEach(function(action, key) {
                                if(action._triggerParameter == localEnemy.visibilityAreaMesh ||
                                    action._triggerParameter == localEnemy.mesh)
                                {
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
        }

        /**
         * @returns {SocketIOClient}
         */
        public socketShowEnemies(scene:BABYLON.Scene) {
            let self = this;
            this.socket.on('showEnemies', function (data) {
                data.forEach(function (enemyData, key) {
                    let enemy = self.enemies[key];
                    if (enemyData.statistics.hp > 0 && !enemy) {
                        let box = BABYLON.Mesh.CreateBox(data.id, 3, scene, false);
                        box.position = new BABYLON.Vector3(enemyData.position.x, enemyData.position.y, enemyData.position.z);

                        let visibilityArea = BABYLON.MeshBuilder.CreateBox('enemy_visivilityArea', {
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
        }

        public socketPlayerConnected(scene:BABYLON.Scene) {
            let self = this;

            this.socket.on('newPlayerConnected', function (playerData) {
                console.log('connected new player');
                let remotePlayerKey = null;
                if (playerData.id !== self.socket.id) {
                    self.players.forEach(function (remotePlayer, key) {
                        if (remotePlayer.id == playerData.id) {
                            remotePlayerKey = key;

                            return;
                        }
                    });

                    if (remotePlayerKey === null) {
                        console.log('added new player to remote player array');

                        let activePlayer = playerData.characters[playerData.activeCharacter];
                        let box = BABYLON.Mesh.CreateBox(activePlayer.id, 3, scene, false);
                        box.position = new BABYLON.Vector3(activePlayer.position.x, activePlayer.position.y, activePlayer.position.z);
                        box.actionManager = new BABYLON.ActionManager(scene);

                        let remotePlayer = {
                            id: activePlayer.id,
                            socketId: playerData.id,
                            roomId: activePlayer.roomId,
                            mesh: box,
                            registeredFunction: null,
                        };
                        self.players.push(remotePlayer);
                        self.registerPlayerInEnemyActionManager(remotePlayer);
                    }
                }
            });

            return this;
        }

        /**
         *
         * @returns {SocketIOClient}
         */
        protected removePlayer() {
            let self = this;
            this.socket.on('removePlayer', function (id) {
                self.players.forEach(function (remotePlayer, key) {

                    if (remotePlayer.socketId == id) {
                        let player = self.players[key];

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
        }

        protected registerPlayerInEnemyActionManager(remotePlayerData) {
            let self = this;
            let playerMesh = remotePlayerData.mesh;

            this.enemies.forEach(function (enemy, key) {
                enemy.activeTargetPoints[playerMesh.id] = function () {
                    let mesh = enemy.mesh;
                    mesh.lookAt(playerMesh.position.clone());

                    let rotation = mesh.rotation;
                    if (mesh.rotationQuaternion) {
                        rotation = mesh.rotationQuaternion.toEulerAngles();
                    }
                    rotation.negate();
                    let forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / 8, 0, -parseFloat(Math.cos(rotation.y)) / 8);
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
                            roomId: remotePlayerData.roomId,
                            target: playerMesh.id,
                            attack: true
                        });
                        self.scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        console.log('Box coliision enter: start attack' + playerMesh.id);
                    }
                });

                ////stop attack
                playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
                    parameter: enemy.mesh
                }, function () {
                    if (!enemy.mesh._isDisposed && enemy.target) {
                        self.socket.emit('setEnemyTarget', {
                            enemyKey: key,
                            position: enemy.mesh.position,
                            roomId: remotePlayerData.roomId,
                            target: playerMesh.id,
                            attack: false
                        });
                        self.scene.registerBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        console.log('Box coliision exit: stop attack' + playerMesh.id);
                    }
                });

                ///start following
                playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: enemy.visibilityAreaMesh
                }, function () {
                    if (!enemy.mesh._isDisposed && !enemy.target) {
                        self.socket.emit('setEnemyTarget', {
                            enemyKey: key,
                            position: enemy.mesh.position,
                            roomId: remotePlayerData.roomId,
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
                            roomId: remotePlayerData.roomId,
                            target: null
                        });
                        enemy.target = false;
                        console.log('coliision exit:' + playerMesh.id);
                    }

                    self.scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                }));
            });

        }

        public socketUpdatePlayer(scene:BABYLON.Scene) {
            let self = this;
            let activeTargetPoints = [];
            this.socket.on('updatePlayer', function (updatedPlayer) {
                let remotePlayerKey = null;
                let player = null;

                self.players.forEach(function (remotePlayer, key) {
                    if (remotePlayer.id == updatedPlayer.id) {
                        remotePlayerKey = key;
                        return;
                    }
                });

                if (remotePlayerKey != null) {
                    player = self.players[remotePlayerKey].mesh;
                    if (player) {
                        if (updatedPlayer.attack == true) {
                            console.log('playerAttack');

                            return;
                        }

                        if (self.players[remotePlayerKey].registeredFunction !== undefined) {
                            scene.unregisterBeforeRender(self.players[remotePlayerKey].registeredFunction);
                        }

                        if (updatedPlayer.targetPoint) {
                            let mesh = player;
                            let targetPoint = updatedPlayer.targetPoint;
                            let targetPointVector3 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                            mesh.lookAt(targetPointVector3);

                            self.players[remotePlayerKey].registeredFunction = function () {
                                if (mesh.intersectsPoint(targetPointVector3)) {
                                    console.log('player intersect with target');
                                    let remotePlayer = self.players[remotePlayerKey];
                                    scene.unregisterBeforeRender(remotePlayer.registeredFunction);
                                    self.socket.emit('updatePlayerPosition', {
                                        playerSocketId: remotePlayer.socketId,
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

                                } else {
                                    let rotation = mesh.rotation;
                                    if (mesh.rotationQuaternion) {
                                        rotation = mesh.rotationQuaternion.toEulerAngles();
                                    }
                                    rotation.negate();
                                    let animationRatio = scene.getAnimationRatio();
                                    let walkSpeed = 2.3 * (125 / 100) / animationRatio;

                                    let forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / walkSpeed, 0, -parseFloat(Math.cos(rotation.y)) / walkSpeed);
                                    mesh.moveWithCollisions(forwards);
                                    mesh.position.y = 0;

                                }

                            }

                            scene.registerBeforeRender(self.players[remotePlayerKey].registeredFunction);
                        }
                    }
                }
            });

            return this;

        }

    }
}

