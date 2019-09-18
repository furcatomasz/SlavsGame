import * as BABYLON from "babylonjs";

export class Fog {
    static addFog(scene) {
        scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
        scene.fogColor = new BABYLON.Color3(0, 0, 0);
        scene.fogDensity = 1;

        scene.fogStart = 30;
        scene.fogEnd = 50;

        return this;
    }

    static disableFog(scene:BABYLON.Scene) {
        scene.fogMode = BABYLON.Scene.FOGMODE_NONE;
    }
}
