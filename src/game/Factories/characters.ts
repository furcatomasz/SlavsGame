import {Game} from "../game";
import {AbstractFactory} from "./AbstractFactory";

export class Characters extends AbstractFactory {
    constructor(game: Game, scene: BABYLON.Scene, assetsManager: BABYLON.AssetsManager) {
        super(game, scene, assetsManager);
        this.taskName = 'factory.warrior';
        this.dir = 'assets/Characters/Warrior/';
        this.fileName = 'Warrior.babylon';
    }
}
