namespace Factories {
    export class SkeletonBoss extends Factories.AbstractFactory {
        constructor(game:Game, scene:BABYLON.Scene, assetsManager:BABYLON.AssetsManager) {
            super(game, scene, assetsManager);
            this.taskName = 'skeletonBoss';
            this.dir = 'assets/Characters/Skeleton/skeletonBoss/';
            this.fileName = 'skeletonBoss.babylon';
        }
    }``
}