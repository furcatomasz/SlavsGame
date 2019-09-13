import {AbstractFactory} from "./AbstractFactory";
import * as BABYLON from 'babylonjs';

export class SkeletonAsset extends AbstractFactory {
    constructor(scene: BABYLON.Scene) {
        super(scene);
        this.dir = 'assets/Characters/Skeleton/skeleton/';
        this.fileName = 'skeleton.babylon';
    }
}
