/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
namespace Factories {
    export class SkeletonWarrior extends Factories.AbstractFactory {
        constructor(game:Game, scene:BABYLON.Scene, assetsManager:BABYLON.AssetsManager) {
            super(game, scene, assetsManager);
            this.taskName = 'skeletonWarrior';
            this.dir = 'assets/Characters/Skeleton/skeletonWarrior/';
            this.fileName = 'skeletonWarrior.babylon';
        }
    }
}