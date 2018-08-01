/// <reference path="../game.ts"/>
namespace Factories {
    export abstract class AbstractFactory {

        protected game:Game;
        protected scene:BABYLON.Scene;
        protected assetsManager:BABYLON.AssetsManager;
        protected loadedMeshes:Array<BABYLON.AbstractMesh>;

        protected taskName: string;
        protected dir: string;
        protected fileName: string;

        constructor(game:Game, scene:BABYLON.Scene, assetsManager:BABYLON.AssetsManager) {
            this.game = game;
            this.scene = scene;
            this.assetsManager = assetsManager;
        }

        public initFactory() {
            let self = this;
            let meshTask = this.assetsManager.addMeshTask(this.taskName, null, this.dir, this.fileName);
            meshTask.onSuccess = function (task) {
                self.loadedMeshes = task.loadedMeshes;
                for (let i = 0; i < self.loadedMeshes.length; i++) {
                    let loadedMesh = self.loadedMeshes[i];
                    loadedMesh.visibility = 0;
                    loadedMesh.freezeWorldMatrix();
                    loadedMesh.setEnabled(false);
                }
            }

            return this;
        }
        
        public createInstance(name: string, cloneSkeleton: boolean = false): BABYLON.AbstractMesh {
            for (let i = 0; i < this.loadedMeshes.length; i++) {
                let mesh = this.loadedMeshes[i];
                if(mesh.name == name) {
                    let clonedMesh = mesh.clone('clone_'+name);
                        if(cloneSkeleton) {
                            clonedMesh.skeleton = mesh.skeleton.clone('clone_skeleton_'+name);
                        }
                        clonedMesh.visibility = 1;

                    return clonedMesh;
                    }
            }
        }
    }
}