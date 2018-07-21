namespace Server {

    export class BabylonManager {

        protected engine:BABYLON.NullEngine;
        protected scene:BABYLON.Scene;
        protected socket;

        /* Game Data */

        protected enemies = [];
        protected players = [];
        protected scenes = [];

        constructor() {
            this.socket = socketIOClient.connect('http://127.0.0.1:5000', {query: 'monsterServer=1'});
            this.enemies = [];
            this.players = [];
            this.scenes = [];
            this.initEngine();
        }

        public initEngine() {
            let self = this;
            this.engine = new BABYLON.NullEngine();
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
                        clearInterval(localEnemy.attackInterval);
                        localEnemy.mesh.dispose();

                        // self.players.forEach(function(player) {
                        //     let playerActionManager = player.mesh.actionManager;
                        //     playerActionManager.actions.forEach(function(action, key) {
                        //         if(action._triggerParameter == localEnemy.visibilityAreaMesh ||
                        //             action._triggerParameter == localEnemy.mesh)
                        //         {
                        //             ///TODO: There should be unregister enemy triggers
                        //             console.log('BABYLON: deleted from action manager enemy - ' + remoteEnemyId);
                        //
                        //             //setTimeout(function() {
                        //             //    delete playerActionManager.actions[key];
                        //             //});
                        //         }
                        //     });
                        //
                        // });

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
                            visibilityAreaMesh: visibilityArea,
                            attackInterval: null
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
                            if (enemy.target == remotePlayer.id) {
                                clearInterval(enemy.attackInterval);
                                enemy.target = false;
                            }
                            scene.unregisterBeforeRender(enemy.activeTargetPoints[id]);
                        });

                        if (player.registeredFunction) {
                            scene.unregisterBeforeRender(player.registeredFunction);
                        }

                        player.mesh.dispose();
                        self.players.splice(key, 1);
                        delete self.enemies[roomId];
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

                let setEnemyTargetFunction = function(position, attack: boolean, event: string) {
                    self.socket.emit('setEnemyTarget', {
                        enemyKey: key,
                        position: position,
                        roomId: roomId,
                        target: playerMesh.id,
                        attack: attack,
                        collisionEvent: event
                    });
                };

                ////start attack
                playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: enemy.mesh
                }, function () {
                    if (!enemy.mesh._isDisposed && enemy.target) {
                        setEnemyTargetFunction(enemy.mesh.position, true, 'OnIntersectionEnterTriggerAttack');
                        enemy.attackInterval = setInterval(function() {
                            setEnemyTargetFunction(enemy.mesh.position, true, 'OnIntersectionEnterTriggerAttack');
                        }, 1500);

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
                        setEnemyTargetFunction(enemy.mesh.position, false, 'OnIntersectionExitTriggerAttack');
                        clearInterval(enemy.attackInterval);

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
                            attack: false,
                            collisionEvent: 'OnIntersectionEnterTriggerVisibility'
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
                            attack: false,
                            collisionEvent: 'OnIntersectionExitTriggerVisibility'
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
                console.log('BABYLON: update player - '+ updatedPlayer.id);

                let player = self.players[updatedPlayer.activePlayer.id];
                let scene = self.scenes[updatedPlayer.activeRoom.id];

                if (player) {
                    if (updatedPlayer.attack == true) {
                        console.log('BABYLON: attack player - '+ updatedPlayer.activePlayer.id);

                        return;
                    }

                    if (player.registeredFunction !== undefined) {
                        scene.unregisterBeforeRender(player.registeredFunction);
                    }

                    if (updatedPlayer.targetPoint && !updatedPlayer.attack) {
                        let mesh = player.mesh;
                        let targetPoint = updatedPlayer.targetPoint;
                        let targetPointVector3 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
                        mesh.lookAt(targetPointVector3);

                        player.registeredFunction = function () {
                            if (mesh.intersectsPoint(targetPointVector3)) {
                                let player = self.players[updatedPlayer.activePlayer.id];

                                console.log('BABYLON: player intersect target point - '+ updatedPlayer.id +', roomID:'+ player.roomId);
                                scene.unregisterBeforeRender(player.registeredFunction);

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

