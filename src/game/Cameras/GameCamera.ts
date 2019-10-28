import * as BABYLON from "babylonjs";
import {Game} from "../Game";

export class GameCamera {

    public static initCameraInScene(scene: BABYLON.Scene) {
        const cameraByName = scene.getCameraByName('Camera');
        if(cameraByName) {
            cameraByName.dispose();
        }

        let gameCamera = new BABYLON.FreeCamera("gameCamera", new BABYLON.Vector3(0, 0, 0), scene);
        gameCamera.rotation = new BABYLON.Vector3(0.75,0.75,0);
        gameCamera.minZ = 10;
        gameCamera.fovMode = 0;
        gameCamera.layerMask = 2;

        ///MOBILE
        if(Game.MOBILE_CLIENT) {
            gameCamera.maxZ = 50;
            gameCamera.fov = 0.8;
        } else {
            gameCamera.maxZ = 100;
            gameCamera.fov = 1.2;
        }

        let guiCamera = new BABYLON.FreeCamera("GUICamera", new BABYLON.Vector3(0, 0, 0), scene);
        guiCamera.layerMask = 1;
        scene.activeCameras = [gameCamera, guiCamera];
        scene.cameraToUseForPointers = gameCamera;
    }
}
