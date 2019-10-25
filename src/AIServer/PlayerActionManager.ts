import * as BABYLON from "babylonjs";
import {RemotePlayer} from "./RemotePlayer";

export class PlayerActionManager {

    public static goToTarget(scene: BABYLON.Scene, player: RemotePlayer, targetPoint: any, roomId: string) {
        scene.onBeforeRenderObservable.remove(player.renderObserver);
        let mesh = player.mesh;
        let targetPointVector3 = new BABYLON.Vector3(targetPoint.x, 0, targetPoint.z);
        mesh.lookAt(targetPointVector3, Math.PI);

        player.renderObserver = scene.onBeforeRenderObservable.add(() => {
            if (mesh.intersectsPoint(targetPointVector3)) {
                console.log('BABYLON: player intersect target point - ' + player.id + ', roomID:' + roomId);
                scene.onBeforeRenderObservable.remove(player.renderObserver);

            } else {
                let rotation = mesh.rotation;
                let animationRatio = scene.getAnimationRatio();
                let walkSpeed = player.walkSpeed / animationRatio;

                let forwards = new BABYLON.Vector3(-((Math.sin(rotation.y)) / walkSpeed), 0, -(Math.cos(rotation.y) / walkSpeed));
                mesh.moveWithCollisions(forwards);
                mesh.position.y = 0;
            }
        });
    }
}
