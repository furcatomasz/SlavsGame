import {Game} from "../game";
import * as BABYLON from 'babylonjs';

export class Collisions {

    static setCollider(scene: BABYLON.Scene, parent: BABYLON.AbstractMesh, scalingSize: BABYLON.Vector3 = new BABYLON.Vector3(2,3,2), freezeInWorld: boolean = true) {
        // let collider = BABYLON.Mesh.CreateBox('collider_box_of_' + parent.name, 0, scene, false);
        // let parentBoundBox = parent.getBoundingInfo();
        // collider.scaling = new BABYLON.Vector3(parentBoundBox.boundingBox.maximum.x * 2, parentBoundBox.boundingBox.maximum.y * 2, parentBoundBox.boundingBox.maximum.z * 2);
        // collider.parent = parent;
        parent.isPickable = false;
        if (Game.SHOW_COLLIDERS) {
            // collider.material = new BABYLON.StandardMaterial("collidermat", scene);
            // collider.material.alpha = 0.3;
            parent.visibility = 1;
        } else {
            parent.visibility = 0;
        }
        parent.checkCollisions = true;

        if(freezeInWorld) {
            parent.freezeWorldMatrix();
        }

        return parent;
    }
}
