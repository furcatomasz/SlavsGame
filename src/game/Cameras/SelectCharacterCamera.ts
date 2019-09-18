import * as BABYLON from "babylonjs";
import {Game} from "../Game";

export class SelectCharacterCamera {

    public static initCameraInScene(scene: BABYLON.Scene) {
        let gameCamera = new BABYLON.FreeCamera("gameCamera", new BABYLON.Vector3(0, 0, 0), scene);
        gameCamera.position = new BABYLON.Vector3(0, 14, -20);
        gameCamera.rotation = new BABYLON.Vector3(0.5, 0, 0);
        gameCamera.maxZ = 200;
        gameCamera.minZ = -200;
        // camera.fov = 13.25;
        gameCamera.fovMode = 0;
        gameCamera.layerMask = 2;

        scene.activeCameras = [gameCamera];
    }
}
