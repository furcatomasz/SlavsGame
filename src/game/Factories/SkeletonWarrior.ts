import {Game} from "../game";
import {AbstractFactory} from "./AbstractFactory";

export class SkeletonWarrior extends AbstractFactory {
    constructor(game:Game, scene:BABYLON.Scene, assetsManager:BABYLON.AssetsManager) {
        super(game, scene, assetsManager);
        this.taskName = 'skeletonWarrior';
        this.dir = 'assets/Characters/Skeleton/skeletonWarrior/';
        this.fileName = 'skeletonWarrior.babylon';
    }
}
