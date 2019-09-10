import {Game} from "../game";
import {AbstractFactory} from "./AbstractFactory";

export class SkeletonBoss extends AbstractFactory {
    constructor(game: Game, scene: BABYLON.Scene, assetsManager: BABYLON.AssetsManager) {
        super(game, scene, assetsManager);
        this.taskName = 'skeletonBoss';
        this.dir = 'assets/Characters/Skeleton/skeletonBoss/';
        this.fileName = 'skeletonBoss.babylon';
    }
}
