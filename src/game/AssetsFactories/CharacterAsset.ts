import {AbstractFactory} from "./AbstractFactory";
import * as BABYLON from 'babylonjs';

export class CharacterAsset extends AbstractFactory {
    constructor(scene: BABYLON.Scene) {
        super(scene);
        this.dir = 'assets/Characters/Warrior/';
        this.fileName = 'Warrior.babylon';
    }
}
