import * as BABYLON from "babylonjs";
import {AIServer} from "./AIServer";
import {RemotePlayer} from "./RemotePlayer";
import {Enemy} from "./Enemy";

export class EnemyActionManager {

    public static registerPlayerInEnemyActionManager(aiServer: AIServer, player: RemotePlayer) {
        const playerMesh = player.mesh;
        const characterId = player.id;
        const roomId = player.roomId;
        const room = aiServer.getRoomById(roomId);
        const scene = room.scene;

        room.enemies.forEach((enemy, key) => {
            const followObserver = () => {
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
                aiServer.socket.emit('setEnemyTarget', {
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
            const actionStartAttack = playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                parameter: enemy.mesh
            }, () => {
                enemy.availableCharactersToAttack[characterId] = true;
                if (enemy.target == characterId) {
                    enemy.attack = true;
                    setEnemyTargetFunction(enemy, 'OnIntersectionEnterTriggerAttack');
                    enemy.attackInterval = setInterval(() => {
                        setEnemyTargetFunction(enemy, 'OnIntersectionEnterTriggerAttack');
                    }, 1500);

                    scene.onBeforeRenderObservable.remove(enemy.activeObservers[characterId]);
                    console.log('BABYLON: Enemy ' + key + ' start attack player ' + player.id + ', roomID:' + roomId);
                }
            }));

            ////stop attack
            const actionStopAttack = playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
                parameter: enemy.mesh
            }, function () {
                delete enemy.availableCharactersToAttack[characterId];

                if (enemy.target == characterId) {
                    enemy.attack = false;
                    setEnemyTargetFunction(enemy, 'OnIntersectionExitTriggerAttack');
                    clearInterval(enemy.attackInterval);

                    enemy.activeObservers[characterId] = scene.onBeforeRenderObservable.add(followObserver);
                    console.log('BABYLON: Enemy ' + key + ' stop attack player ' + characterId + ', roomID:' + roomId);
                }
            }));

            ///start following
            const actionStartFollowing = playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                parameter: enemy.visibilityAreaMesh
            }, () => {
                if (!enemy.target) {
                    enemy.target = characterId;
                    setEnemyTargetFunction(enemy, 'OnIntersectionEnterTriggerVisibility');
                    scene.onBeforeRenderObservable.remove(enemy.activeObservers[characterId]);
                    enemy.activeObservers[characterId] = scene.onBeforeRenderObservable.add(followObserver);
                    console.log('BABYLON: Enemy ' + key + ' start following player ' + characterId + ', roomID:' + roomId);
                }
            }));

            ///stop following
            const actionStopFollowing = playerMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
                parameter: enemy.visibilityAreaMesh
            }, () => {
                if (enemy.target) {
                    enemy.target = null;
                    setEnemyTargetFunction(enemy, 'OnIntersectionExitTriggerVisibility');
                    console.log('BABYLON: Enemy ' + key + ' lost player ' + characterId + ', roomID:' + roomId);
                }

                scene.onBeforeRenderObservable.remove(enemy.activeObservers[characterId]);
            }));

            enemy.actions.push(actionStartAttack);
            enemy.actions.push(actionStopAttack);
            enemy.actions.push(actionStartFollowing);
            enemy.actions.push(actionStopFollowing);
        });

    }
}
