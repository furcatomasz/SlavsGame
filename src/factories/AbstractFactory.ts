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
            //let characterFactory = new Warrior.MeshFactory(scene, '/babel/Characters/Warrior');
            //game.characters['player'] = characterFactory;
            this.game = game;
            this.scene = scene;
            this.assetsManager = assetsManager;
            let self = this;
        }

        public initFactory() {
            let self = this;
            let meshTask = this.assetsManager.addMeshTask(this.taskName, null, this.dir, this.fileName);
            meshTask.onSuccess = function (task) {
                console.log(task);
                self.loadedMeshes = task.loadedMeshes;
                for (var i = 0; i < self.loadedMeshes.length; i++) {
                    var loadedMesh = self.loadedMeshes[i];
                    loadedMesh.visibility = 0;
                }
            }

            return this;
        }
        
        public createInstance(name: string, cloneSkeleton: boolean = false): BABYLON.AbstractMesh {
            for (var i = 0; i < this.loadedMeshes.length; i++) {
                var mesh = this.loadedMeshes[i];
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