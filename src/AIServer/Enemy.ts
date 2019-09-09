import * as BABYLON from "babylonjs";

export class Enemy {
    mesh: BABYLON.AbstractMesh;
    key: number;
    target: string;
    attack: boolean;
    activeTargetPoints: [];
    walkSpeed: number;
    visibilityAreaMesh: BABYLON.AbstractMesh;
    availableCharactersToAttack: boolean[];
    attackInterval;
}
