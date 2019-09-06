import * as BABYLON from "babylonjs";

export class Enemy {
    mesh: BABYLON.AbstractMesh;
    key: number;
    target: boolean;
    attack: boolean;
    activeTargetPoints: string[];
    walkSpeed: number;
    visibilityAreaMesh: BABYLON.AbstractMesh;
    availableCharactersToAttack: string[];
    attackInterval;
}
