import {AbstractFactory} from "./AbstractFactory";
import * as BABYLON from 'babylonjs';

export class ChestAsset extends AbstractFactory {
    constructor(scene: BABYLON.Scene) {
        super(scene);
        this.dir = 'assets/Environment/chest/';
        this.fileName = 'chest.babylon';
    }

}
