import {AbstractFactory} from "./AbstractFactory";
import * as BABYLON from 'babylonjs';

export class SkeletonWarriorAsset extends AbstractFactory {
    constructor(scene: BABYLON.Scene) {
        super(scene);
        this.dir = 'assets/Characters/Skeleton/skeletonWarrior/';
        this.fileName = 'skeletonWarrior.babylon';
    }
}
