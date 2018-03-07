/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
namespace Factories {
    export class Skeletons extends Factories.AbstractFactory {
        constructor(game:Game, scene:BABYLON.Scene, assetsManager:BABYLON.AssetsManager) {
            super(game, scene, assetsManager);
            this.taskName = 'skeletons';
            this.dir = 'assets/Characters/Skeleton/';
            this.fileName = 'Skeleton.babylon';
        }
    }
}