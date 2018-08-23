namespace Factories {
    export class Skeletons extends Factories.AbstractFactory {
        constructor(game:Game, scene:BABYLON.Scene, assetsManager:BABYLON.AssetsManager) {
            super(game, scene, assetsManager);
            this.taskName = 'skeletons';
            this.dir = 'assets/Characters/Skeleton/skeleton/';
            this.fileName = 'skeleton.babylon';
        }
    }
}