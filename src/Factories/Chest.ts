namespace Factories {
    export class Chest extends Factories.AbstractFactory {

        constructor(game: Game, scene: BABYLON.Scene, assetsManager: BABYLON.AssetsManager) {
            super(game, scene, assetsManager);
            this.taskName = 'chest';
            this.dir = 'assets/Environment/chest/';
            this.fileName = 'chest.babylon';
        }

    }
}
