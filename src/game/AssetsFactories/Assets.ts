import {CharacterAsset} from "./CharacterAsset";
import {SkeletonAsset} from "./SkeletonAsset";
import {SkeletonWarriorAsset} from "./SkeletonWarriorAsset";
import {SkeletonBossAsset} from "./SkeletonBossAsset";
import {ChestAsset} from "./ChestAsset";
import {NatureAsset} from "./NatureAsset";
import * as BABYLON from "babylonjs";
import {AbstractFactory} from "./AbstractFactory";

export class Assets {

    character: CharacterAsset;
    skeleton: CharacterAsset;
    skeletonWarrior: CharacterAsset;
    skeletonBoss: ChestAsset;
    chest: ChestAsset;
    natureGrain: NatureAsset;

    constructor(scene: BABYLON.Scene) {
        this.character = new CharacterAsset(scene).initFactory();
        this.skeleton = new SkeletonAsset(scene).initFactory();
        this.skeletonWarrior = new SkeletonWarriorAsset(scene).initFactory();
        this.skeletonBoss = new SkeletonBossAsset(scene).initFactory();
        this.chest = new ChestAsset(scene).initFactory();
        this.natureGrain = new NatureAsset(scene).initFactory();
    }

    public getAssetFactoryByName(name: string): AbstractFactory {
        let assetFactory = null;

        switch(name) {
            case 'skeleton':
                assetFactory = this.skeleton;
                break;
            case 'skeletonWarrior':
                assetFactory = this.skeletonWarrior;
                break;
            case 'skeletonBoss':
                assetFactory = this.skeletonBoss;
                break;
        }

        return assetFactory;
    }

}
