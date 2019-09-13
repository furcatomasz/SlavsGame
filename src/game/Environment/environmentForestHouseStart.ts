import {AbstractEnvironment} from "./AbstractEnvironment";
import {Game} from "../Game";
import * as BABYLON from 'babylonjs';

export class EnvironmentForestHouseStart extends AbstractEnvironment {

    constructor(game: Game) {
        super();
        const scene = game.getBabylonScene();

        for (let i = 0; i < scene.meshes.length; i++) {
            let sceneMesh = scene.meshes[i];
            let meshName = scene.meshes[i]['name'];

            if (meshName.search("Ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
            } else if (meshName.search("Box_Cube") >= 0) {
                this.colliders.push(sceneMesh);
            } else {
                sceneMesh.isPickable = false;
                this.staticShadowObjects.push(sceneMesh);
            }
        }

        let light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);
        light.position = new BABYLON.Vector3(0, 80, -210);
        light.direction = new BABYLON.Vector3(0.45, -0.45, 0.45);
        light.shadowMaxZ = 500;
        light.autoUpdateExtends = false;
        this.light = light;

        this.freezeAllMeshes(scene);
        this.registerColliders(scene);

        new BABYLON.Sound("Forest night", "assets/sounds/fx/wind.mp3", scene, null, {
            loop: true,
            autoplay: true,
            volume: 0.3
        });
    }

    createStecnil(scene: BABYLON.Scene) {
    }



}
