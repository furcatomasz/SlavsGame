namespace Server {

    export class BabylonManager {

        protected engine:BABYLON.NullEngine;
        protected scene:BABYLON.Scene;
        protected socket;

        /* Game Data */

        protected enemies = [];
        protected players = [];
        protected scenes = [];

        constructor(canvas) {
            this.socket = io.connect('http://127.0.0.1:' + 5000, {query: 'monsterServer=1'});
            this.enemies = [];
            this.players = [];
            this.scenes = [];
            this.initEngine(canvas);
        }

        public initEngine(canvas) {
            let self = this;
            this.engine = new BABYLON.Engine(canvas);

            //let scene = new BABYLON.Scene(this.engine);
            //this.scene = scene;
            // let camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
            // camera.attachControl(canvas, true);
            this
                .socketShowEnemies()
                .socketUpdateEnemy()
                .socketPlayerConnected()
                .socketUpdatePlayer()
                .removePlayer()
                .socketCreateRoom();

            this.engine.runRenderLoop(function () {
                for (let key in self.scenes) {
                    let scene = self.scenes[key];
                    scene.render();
                }
            });


        }

        /**
         * @returns {SocketIOClient}
         */
        public socketUpdateEnemy() {
            let self = this;
            this.socket.on('updateEnemy', function (data) {
                let roomId = data.roomId;
                let remoteEnemy = data.enemy;
                let remoteEnemyId = data.enemyKey;
                let localEnemy = self.enemies[roomId][remoteEnemyId];
                let scene = self.scenes[roomId];
                console.log('BABYLON: update enemy - ' + remoteEnemyId);

                if (remoteEnemy.statistics.hp <= 0 && localEnemy) {
                    if (localEnemy.activeTargetPoints.length > 0) {
                        localEnemy.activeTargetPoints.forEach(function (activeTargetFunction) {
                            console.log('BABYLON: unregister function enemy - ' + remoteEnemyId);

                            scene.unregisterBeforeRender(activeTargetFunction);
                        });
                        localEnemy.mesh.dispose();

                        self.players.forEach(function(player) {
                            let playerActionManager = player.mesh.actionManager;
                            playerActionManager.actions.forEach(function(action, key) {
                                if(action._triggerParameter == localEnemy.visibilityAreaMesh ||
                                    action._triggerParameter == localEnemy.mesh)
                                {
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
        }

        /**
         * @returns {SocketIOClient}
         */
        public socketShowEnemies() {
            let self = this;
            this.socket.on('createEnemies', function (data) {
                let roomId = data.roomId;
                let scene = self.scenes[roomId];

                if (!self.enemies[roomId]) {
                    console.log('BABYLON: create enemies - ' + roomId);
                    self.enemies[roomId] = [];
                } else {
                    console.log('BABYLON: enemies exists - ' + roomId);

                    return this;
                }

                data.enemies.forEach(function (enemyData, key) {
                    let enemy = self.enemies[roomId][key];
                    if (enemyData.statistics.hp > 0 && !enemy) {
                        let box = BABYLON.Mesh.CreateBox(data.id, 3, scene, false);
                        box.checkCollisions = true;
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
                            walkSpeed: enemyData.statistics.walkSpeed,
                            visibilityAreaMesh: visibilityArea
                        };
                        self.enemies[roomId][key] = enemy;
                    }
                });
            });

            return this;
        }

        public socketCreateRoom() {
            let self = this;
            this.socket.on('createRoom', function (roomId) {
                if (self.scenes[roomId] === undefined) {
                    console.log('BABYLON: crate new room with scene - '+ roomId);

                    let sceneForRoom = new BABYLON.Scene(self.engine);
                    sceneForRoom.collisionsEnabled = true;
                    let camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 400, 0, sceneForRoom);
                    camera.rotation = new BABYLON.Vector3(1.5,1,1);
                    self.scenes[roomId] = sceneForRoom;
                } else {
                    console.log('BABYLON: room exists - '+ roomId);
                }
            });

            return this;
        }

        public socketPlayerConnected() {
            let self = this;

            this.socket.on('showPlayer', function (playerData) {
                console.log('BABYLON: connected new player - '+ playerData.id);
                let activeCharacter = playerData.activePlayer;
                let roomId = playerData.activeRoom.id;
                let scene = self.scenes[roomId];

                if(!scene) {
                    return;
                }
                if (playerData.connectionId !== self.socket.id) {
                    //if user not exists create scene and box with action manager
                    let box = BABYLON.Mesh.CreateBox(activeCharacter.id, 3, scene, false);
                    box.checkCollisions = true;
                    box.position = new BABYLON.Vector3(playerData.position.x, playerData.position.y, playerData.position.z);
                    box.actionManager = new BABYLON.ActionManager(scene);

                    let remotePlayer = {
                        id: activeCharacter.id,
                        socketId: playerData.connectionId,
                        walkSpeed: activeCharacter.statistics.walkSpeed,
                        roomId: roomId,
                        mesh: box,
                        registeredFunction: null,
                    };
                    self.players[activeCharacter.id] = remotePlayer;
                    self.registerPlayerInEnemyActionManager(remotePlayer);
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
                        let roomId = player.roomId;
                        let scene = self.scenes[roomId];
                        console.log('BABYLON: disconnect player - '+ player.id);

                        //clear enemies target if it is this player
                        self.enemies[roomId].forEach(function (enemy, key) {
                            if (enemy.target == id) {
                                enemy.target = false;
                            }
                            scene.unregisterBeforeRender(enemy.activeTargetPoints[id]);
                        });

                        if (player.registeredFunction) {
                            scene.unregisterBeforeRender(player.registeredFunction);
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
            let roomId = remotePlayerData.roomId;
            let socketId = remotePlayerData.socketId;
            let scene = this.scenes[roomId];

            this.enemies[roomId].forEach(function (enemy, key) {
                enemy.activeTargetPoints[playerMesh.id] = function () {
                    let mesh = enemy.mesh;
                    mesh.lookAt(playerMesh.position.clone());

                    let rotation = mesh.rotation;
                    if (mesh.rotationQuaternion) {
                        rotation = mesh.rotationQuaternion.toEulerAngles();
                    }
                    rotation.negate();

                    let animationRatio = scene.getAnimationRatio();
                    let walkSpeed = enemy.walkSpeed / animationRatio;

                    let forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / walkSpeed, 0, -parseFloat(Math.cos(rotation.y)) / walkSpeed);
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
                        console.log('BABYLON: Enemy '+ key +' start attack player '+ socketId +', roomID:'+ roomId);
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
                            roomId: roomId,
                            target: playerMesh.id,
                            attack: false
                        });
                        scene.registerBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        console.log('BABYLON: Enemy '+ key +' stop attack player '+ socketId +', roomID:'+ roomId);
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
                            roomId: roomId,
                            target: playerMesh.id,
                            attack: false
                        });
                        enemy.target = playerMesh.id;
                        scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        scene.registerBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                        console.log('BABYLON: Enemy '+ key +' set target as player '+ socketId +', roomID:'+ roomId);
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
                            target: null,
                            attack: false
                        });
                        enemy.target = false;
                        console.log('BABYLON: Enemy '+ key +' lost target '+ socketId +', roomID:'+ roomId);
                    }

                    scene.unregisterBeforeRender(enemy.activeTargetPoints[playerMesh.id]);
                }));
            });

        }

        public socketUpdatePlayer() {
            let self = this;
            let activeTargetPoints = [];
            this.socket.on('updatePlayer', function (updatedPlayer) {
                console.log(updatedPlayer);
                // console.log('BABYLON: update player - '+ updatedPlayer.id);

                let player = self.players[updatedPlayer.activePlayer.id];
                let scene = self.scenes[updatedPlayer.activeRoom.id];

                    if (player) {
                        if (updatedPlayer.attack == true) {
                            console.log('BABYLON: attack player - '+ updatedPlayer.id);

                            return;
                        }

                        if (player.registeredFunction !== undefined) {
                            scene.unregisterBeforeRender(player.registeredFunction);
                        }

                        if (updatedPlayer.targetPoint) {
                            let mesh = player.mesh;
                            let targetPoint = updatedPlayer.targetPoint;
                            let targetPointVector3 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                            mesh.lookAt(targetPointVector3);

                            player.registeredFunction = function () {
                                if (mesh.intersectsPoint(targetPointVector3)) {
                                    let player = self.players[updatedPlayer.activePlayer.id];

                                    console.log('BABYLON: player intersect target point - '+ updatedPlayer.id +', roomID:'+ player.roomId);
                                    scene.unregisterBeforeRender(player.registeredFunction);
                                    self.socket.emit('updatePlayerPosition', {
                                        playerSocketId: player.socketId,
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
                                    let walkSpeed = player.walkSpeed / animationRatio;

                                    let forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / walkSpeed, 0, -parseFloat(Math.cos(rotation.y)) / walkSpeed);
                                    mesh.moveWithCollisions(forwards);
                                    mesh.position.y = 0;

                                }

                            }

                            scene.registerBeforeRender(player.registeredFunction);
                        }
                    }
            });

            return this;

        }

    }
}
