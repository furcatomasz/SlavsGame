import {AbstractFactory} from "./AbstractFactory";
import * as BABYLON from 'babylonjs';

export class SkeletonBossAsset extends AbstractFactory {
    constructor(scene: BABYLON.Scene) {
        super(scene);
        this.dir = 'assets/Characters/Skeleton/skeletonBoss/';
        this.fileName = 'skeletonBoss.babylon';
    }
}
