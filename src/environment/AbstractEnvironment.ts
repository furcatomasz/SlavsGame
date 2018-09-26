abstract class AbstractEnvironment {

    public light: BABYLON.IShadowLight;
    public staticShadowObjects;

    protected colliders;

    constructor() {
        this.staticShadowObjects = [];
        this.colliders = [];
    }

    protected registerColliders(scene) {
        for (let i = 0; i < this.colliders.length; i++) {
            const sceneMeshCollider = this.colliders[i];
            Collisions.setCollider(scene, sceneMeshCollider);
        }
    }

    protected freezeAllMeshes(scene) {
        for (let i = 0; i < scene.meshes.length; i++) {
            scene.meshes[i].freezeWorldMatrix();
        }
    }
}
