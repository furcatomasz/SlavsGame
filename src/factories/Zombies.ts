/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
namespace Factories {
    export class Zombies extends Factories.AbstractFactory {
        constructor(game:Game, scene:BABYLON.Scene, assetsManager:BABYLON.AssetsManager) {
            super(game, scene, assetsManager);
            this.taskName = 'zombie';
            this.dir = 'assets/Characters/Zombie/';
            this.fileName = 'Zombie.babylon';
        }
    }
}