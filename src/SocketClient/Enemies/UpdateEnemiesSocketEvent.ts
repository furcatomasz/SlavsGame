class UpdateEnemiesSocketEvent extends SocketEvent {

    protected listen() {
        var game = this.game;
        let self = this;
        let activeTargetPoints = [];
        this.socket.on('updateEnemy', function (data) {
            let updatedEnemy = data.enemy;
            let enemyKey = data.enemyKey;
            let enemy = game.enemies[enemyKey];

            if (enemy) {
                let mesh = enemy.meshForMove;

                ///action when hp of monster is changed
                if (enemy.statistics.hp != updatedEnemy.statistics.hp) {
                    let damage = (enemy.statistics.hp - updatedEnemy.statistics.hp);
                    enemy.statistics.hp = updatedEnemy.statistics.hp;

                    setTimeout(function () {
                        enemy.bloodParticles.start();
                        setTimeout(function () {
                            enemy.bloodParticles.stop();
                        }, 100);
                        enemy.showDamage(damage);

                        if (enemy.statistics.hp <= 0) {
                            enemy.isDeath = true;
                            enemy.animation.stop();
                        }

                        setTimeout(function () {
                            if (enemy.statistics.hp <= 0) {
                                enemy.removeFromWorld();
                            }
                        }, 6000);

                    }, 400);
                }

                ///antylag rule
                let distanceBetweenObjects = Game.distanceVector(mesh.position, updatedEnemy.position);
                if (distanceBetweenObjects > 16) {
                    mesh.position = new BABYLON.Vector3(updatedEnemy.position.x, updatedEnemy.position.y, updatedEnemy.position.z);
                }

                if (data.collisionEvent) {
                    if (activeTargetPoints[enemyKey] !== undefined) {
                        self.game.getScene().unregisterBeforeRender(activeTargetPoints[enemyKey]);
                    }

                    if (data.collisionEvent == 'OnIntersectionEnterTriggerAttack' && updatedEnemy.attack == true && data.attackIsDone == true) {
                        enemy.runAnimationHit(AbstractCharacter.ANIMATION_ATTACK_01, null, null, false);
                    } else if (data.collisionEvent == 'OnIntersectionEnterTriggerVisibility' || data.collisionEvent == 'OnIntersectionExitTriggerAttack') {
                        let targetMesh = null;

                        game.remotePlayers.forEach(function (socketRemotePlayer) {
                            if (updatedEnemy.target == socketRemotePlayer.id) {
                                targetMesh = socketRemotePlayer.mesh;
                            }
                        });

                        if (!targetMesh && game.player.id == updatedEnemy.target) {
                            targetMesh = game.player.meshForMove;
                        }

                        if (targetMesh) {
                            activeTargetPoints[enemyKey] = function () {
                                mesh.lookAt(targetMesh.position);

                                let rotation = mesh.rotation;
                                if (mesh.rotationQuaternion) {
                                    rotation = mesh.rotationQuaternion.toEulerAngles();
                                }
                                rotation.negate();
                                let forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / enemy.getWalkSpeed(), 0, -parseFloat(Math.cos(rotation.y)) / enemy.getWalkSpeed());
                                mesh.moveWithCollisions(forwards);
                                enemy.runAnimationWalk();
                            };

                            self.game.getScene().registerBeforeRender(activeTargetPoints[enemyKey]);
                        }
                    } else if (data.collisionEvent == 'OnIntersectionExitTriggerVisibility') {
                        enemy.runAnimationStand();
                    }
                }

                setTimeout(function () {
                    self.game.gui.characterTopHp.refreshPanel();
                }, 300);
            }
        });

        return this;
    }

}
