import * as BABYLON from "babylonjs";
import {Room} from "./Room";

export class Enemy {
    mesh: BABYLON.AbstractMesh;
    key: number;
    target: string;
    attack: boolean;
    activeTargetPoints: [];
    walkSpeed: number;
    visibilityAreaMesh: BABYLON.AbstractMesh;
    availableCharactersToAttack: boolean[];
    attackInterval;

    public clearActiveTarget(room: Room) {
        if (this.activeTargetPoints.length > 0) {
            this.activeTargetPoints.forEach(activeTargetFunction => {
                console.log('BABYLON: unregister function enemy - ' + this.key);

                room.scene.unregisterBeforeRender(activeTargetFunction);
            });
            clearInterval(this.attackInterval);
            this.mesh.dispose();
        }
    }
}
