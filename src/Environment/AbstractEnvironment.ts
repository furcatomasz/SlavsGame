abstract class AbstractEnvironment {

    public light: BABYLON.IShadowLight;
    public staticShadowObjects;

    protected colliders;

    constructor() {
        this.staticShadowObjects = [];
        this.colliders = [];
    }

    protected createDefaultLight(scene: BABYLON.Scene) {
        let light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.intensity = 0.6;
        light.position = new BABYLON.Vector3(0, 50, 0);
        light.direction = new BABYLON.Vector3(0.45, -2.5, 0);
        light.shadowMaxZ = 500;

        this.light = light;
    }

    protected registerColliders(scene: BABYLON.Scene) {
        for (let i = 0; i < this.colliders.length; i++) {
            const sceneMeshCollider = this.colliders[i];
            Collisions.setCollider(scene, sceneMeshCollider);
        }
    }

    protected freezeAllMeshes(scene: BABYLON.Scene) {
        for (let i = 0; i < scene.meshes.length; i++) {
            let sceneMesh = scene.meshes[i];
            sceneMesh.freezeWorldMatrix();
            sceneMesh.cullingStrategy = BABYLON.AbstractMesh.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY;


        }
    }

    abstract createStecnil(scene: BABYLON.Scene);
}
