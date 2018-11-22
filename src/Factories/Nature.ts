namespace Factories {
    export class Nature extends Factories.AbstractFactory {
        constructor(game:Game, scene:BABYLON.Scene, assetsManager:BABYLON.AssetsManager) {
            super(game, scene, assetsManager);
            this.taskName = 'factory.nature.grain';
            this.dir = 'assets/Environment/Plants/';
            this.fileName = 'Plants.babylon';
        }
    }
}