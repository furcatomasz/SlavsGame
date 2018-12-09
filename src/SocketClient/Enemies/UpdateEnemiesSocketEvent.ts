class UpdateEnemiesSocketEvent extends SocketEvent {

    protected listen() {
        var game = this.game;
        let self = this;
        let activeTargetPoints = [];
        this.socket.on('updateEnemy', function (data) {
            let updatedEnemy = data.enemy;
            let enemyKey = data.enemyKey;
            let enemy = game.enemies[enemyKey];
            let mesh = enemy.meshForMove;

            enemy.retrieveHit(updatedEnemy);

            ///antylag rule
            let distanceBetweenObjects = Game.distanceVector(mesh.position, updatedEnemy.position);
            if (distanceBetweenObjects > 16) {
                mesh.position = new BABYLON.Vector3(updatedEnemy.position.x, updatedEnemy.position.y, updatedEnemy.position.z);
            }

            if (activeTargetPoints[enemyKey] !== undefined) {
                self.game.getScene().unregisterBeforeRender(activeTargetPoints[enemyKey]);
            }

            let targetMesh = null;
            game.remotePlayers.forEach(function (socketRemotePlayer) {
                if (updatedEnemy.target == socketRemotePlayer.id) {
                    targetMesh = socketRemotePlayer.meshForMove;
                }
            });

            if (data.collisionEvent == 'OnIntersectionEnterTriggerAttack') {
                if(updatedEnemy.attack == true && data.attackIsDone == true) {
                    mesh.lookAt(targetMesh.position.clone());
                    enemy.runAnimationHit(AbstractCharacter.ANIMATION_ATTACK_01, null, null, false);
                } else {
                    enemy.runAnimationStand();
                }
            } else if (data.collisionEvent == 'OnIntersectionEnterTriggerVisibility' || data.collisionEvent == 'OnIntersectionExitTriggerAttack') {
                activeTargetPoints[enemyKey] = function () {
                    mesh.lookAt(targetMesh.position);
                    let rotation = mesh.rotation;
                    let forwards = new BABYLON.Vector3(parseFloat(Math.sin(rotation.y)) / enemy.getWalkSpeed(), 0, parseFloat(Math.cos(rotation.y)) / enemy.getWalkSpeed());
                    mesh.moveWithCollisions(forwards);
                    enemy.runAnimationWalk();
                };

                self.game.getScene().registerBeforeRender(activeTargetPoints[enemyKey]);
            } else if (data.collisionEvent == 'OnIntersectionExitTriggerVisibility') {
                enemy.runAnimationStand();
            }

        });

        return this;
    }

}
