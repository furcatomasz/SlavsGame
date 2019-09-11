import {Game} from "../game";
import {AbstractFactory} from "./AbstractFactory";
import * as BABYLON from 'babylonjs';

export class Skeletons extends AbstractFactory {
    constructor(game:Game, scene:BABYLON.Scene, assetsManager:BABYLON.AssetsManager) {
        super(game, scene, assetsManager);
        this.taskName = 'skeletons';
        this.dir = 'assets/Characters/Skeleton/skeleton/';
        this.fileName = 'skeleton.babylon';
    }
}
