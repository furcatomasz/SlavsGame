import {SocketEvent} from "../SocketEvent";
import {AbstractCharacter} from "../../Characters/AbstractCharacter";
import {Game} from "../../Game";
import * as BABYLON from 'babylonjs';

export class UpdateEnemiesSocketEvent extends SocketEvent {

    public listen() {
        let game = this.game;
        let self = this;
        this.socket.on('updateEnemy', function (data) {
            let updatedEnemy = data.enemy;
            let enemyKey = data.enemyKey;
            let sceneManager = game.getSceneManger();
            let enemy = sceneManager.enemies[enemyKey];
            let mesh = enemy.meshForMove;

            enemy.retrieveHit(updatedEnemy);

            ///antylag rule
            let distanceBetweenObjects = Game.distanceVector(mesh.position, updatedEnemy.position);
            if (distanceBetweenObjects > 16) {
                mesh.position = new BABYLON.Vector3(updatedEnemy.position.x, updatedEnemy.position.y, updatedEnemy.position.z);
            }

            if (sceneManager.enemiesActiveTargets[enemyKey] !== undefined) {
                self.game.getBabylonScene().unregisterBeforeRender(sceneManager.enemiesActiveTargets[enemyKey]);
            }

            let targetMesh = null;
            game.getSceneManger().remotePlayers.forEach(function (socketRemotePlayer) {
                if (updatedEnemy.target == socketRemotePlayer.id) {
                    targetMesh = socketRemotePlayer.meshForMove;
                }
            });

            if (data.collisionEvent == 'OnIntersectionEnterTriggerAttack') {
                game.player.monstersToAttack[enemyKey] = true;
                if(updatedEnemy.attack == true && data.attackIsDone == true) {
                    mesh.lookAt(targetMesh.position.clone());
                    enemy.runAnimationHit(AbstractCharacter.ANIMATION_ATTACK_01, null, null, false);
                } else {
                    enemy.runAnimationStand();
                }
            } else if (data.collisionEvent == 'OnIntersectionEnterTriggerVisibility' || data.collisionEvent == 'OnIntersectionExitTriggerAttack') {
                if (game.player.monstersToAttack[enemyKey] !== undefined) {
                    delete game.player.monstersToAttack[enemyKey];
                }

                sceneManager.enemiesActiveTargets[enemyKey] = function () {
                mesh.lookAt(targetMesh.position);
                let rotation = mesh.rotation;
                let forwards = new BABYLON.Vector3((Math.sin(rotation.y)) / enemy.getWalkSpeed(), 0, (Math.cos(rotation.y)) / enemy.getWalkSpeed());
                mesh.moveWithCollisions(forwards);
                enemy.runAnimationWalk();
            };

                self.game.getBabylonScene().registerBeforeRender(sceneManager.enemiesActiveTargets[enemyKey]);
            } else if (data.collisionEvent == 'OnIntersectionExitTriggerVisibility') {
                enemy.runAnimationStand();
            }

            if(sceneManager.enemiesActiveTargets.length) {
                // sceneManager.playBattleMusic();
            } else {
                // sceneManager.stopBattleMusic();
            }

        });

        return this;
    }

}
