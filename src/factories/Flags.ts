namespace Factories {
    export class Flags extends Factories.AbstractFactory {
        constructor(game:Game, scene:BABYLON.Scene, assetsManager:BABYLON.AssetsManager) {
            super(game, scene, assetsManager);
            this.taskName = 'flag';
            this.dir = 'assets/Environment/Flag/';
            this.fileName = 'Flag.babylon';
        }
    }
}