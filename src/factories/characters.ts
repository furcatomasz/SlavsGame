/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
namespace Factories {
    export class Characters extends Factories.AbstractFactory {
        constructor(game:Game, scene:BABYLON.Scene, assetsManager:BABYLON.AssetsManager) {
            super(game, scene, assetsManager);
            this.taskName = 'Warrior';
            this.dir = 'babel/Characters/Warrior/';
            this.fileName = 'Warrior.babylon';
        }
    }
}