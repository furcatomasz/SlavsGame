import {AbstractFactory} from "./AbstractFactory";
import * as BABYLON from 'babylonjs';

export class NatureAsset extends AbstractFactory {
    constructor(scene: BABYLON.Scene) {
        super(scene);
        this.dir = 'assets/Environment/Plants/';
        this.fileName = 'Plants.babylon';
    }
}
