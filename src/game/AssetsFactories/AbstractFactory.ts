import * as BABYLON from 'babylonjs';

export abstract class AbstractFactory {

    protected scene: BABYLON.Scene;
    protected loadedMeshes: Array<BABYLON.Mesh>;

    protected dir: string;
    protected fileName: string;

    protected constructor(scene: BABYLON.Scene) {
        this.scene = scene;
    }

    public initFactory() {
        let self = this;

        BABYLON.SceneLoader.LoadAssetContainer(this.dir, this.fileName, this.scene, function (container) {
            self.loadedMeshes = <Array<BABYLON.Mesh>> container.meshes;
        });

        return this;
    }

    public createClone(name: string, cloneSkeleton: boolean = false): BABYLON.Mesh {
        for (let i = 0; i < this.loadedMeshes.length; i++) {
            let mesh = this.loadedMeshes[i];
            mesh.layerMask = 2;

            if (mesh.name == name) {
                let clonedMesh = mesh.clone('clone_' + name);
                if (cloneSkeleton) {
                    clonedMesh.skeleton = mesh.skeleton.clone('clone_skeleton_' + name, 'clone_skeleton_' + name);
                }
                clonedMesh.isVisible = true;
                clonedMesh.setEnabled(true);

                return clonedMesh;
            }
        }
    }

    public createInstance(name: string): BABYLON.AbstractMesh {
        for (let i = 0; i < this.loadedMeshes.length; i++) {
            let mesh = this.loadedMeshes[i];
            mesh.layerMask = 2;

            if (mesh.name == name) {
                let instancedMesh = mesh.createInstance('instance_' + name);
                instancedMesh.isVisible = true;
                instancedMesh.setEnabled(true);

                return instancedMesh;
            }
        }
    }

}
