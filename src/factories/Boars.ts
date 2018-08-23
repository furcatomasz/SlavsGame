namespace Factories {
    export class Boars extends Factories.AbstractFactory {
        constructor(game:Game, scene:BABYLON.Scene, assetsManager:BABYLON.AssetsManager) {
            super(game, scene, assetsManager);
            this.taskName = 'boar.worm';
            this.dir = 'assets/Characters/Boar/';
            this.fileName = 'Boar.babylon';
        }
    }
}