class Collisions {

    static setCollider(scene: BABYLON.Scene, parent: BABYLON.AbstractMesh, scalingSize: BABYLON.Vector3 = new BABYLON.Vector3(2,3,2)) {
        let collider = BABYLON.Mesh.CreateBox('collider_box_of_' + parent.name, 0, scene, false);
        let parentBoundBox = parent.getBoundingInfo();
        collider.scaling = new BABYLON.Vector3(parentBoundBox.boundingBox.maximum.x * 2, parentBoundBox.boundingBox.maximum.y * 3, parentBoundBox.boundingBox.maximum.z * 2);
        collider.parent = parent;
        collider.isPickable = false;
        if (Game.SHOW_COLLIDERS) {
            collider.material = new BABYLON.StandardMaterial("collidermat", scene);
            collider.material.alpha = 0.3;
        } else {
            collider.visibility = 0;
        }
        collider.checkCollisions = true;
        collider.freezeWorldMatrix();

        return collider;
    }
}