/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
namespace Factories {
    export class Worms extends Factories.AbstractFactory {
        constructor(game:Game, scene:BABYLON.Scene, assetsManager:BABYLON.AssetsManager) {
            super(game, scene, assetsManager);
            this.taskName = 'factory.worm';
            this.dir = 'assets/Characters/Worm/';
            this.fileName = 'worm.babylon';
        }
    }
}