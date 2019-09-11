import {Game} from "../game";
import {AbstractFactory} from "./AbstractFactory";
import * as BABYLON from 'babylonjs';

export class Chest extends AbstractFactory {

    constructor(game: Game, scene: BABYLON.Scene, assetsManager: BABYLON.AssetsManager) {
        super(game, scene, assetsManager);
        this.taskName = 'chest';
        this.dir = 'assets/Environment/chest/';
        this.fileName = 'chest.babylon';
    }

}
