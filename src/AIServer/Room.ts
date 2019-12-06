import {Enemy} from './Enemy';
import {RemotePlayer} from "./RemotePlayer";
import * as BABYLON from "babylonjs";
import {Scene} from "babylonjs";
import {AIServer} from "./AIServer";

export class Room {
    enemies: Enemy[] = [];
    players: RemotePlayer[] = [];
    scene: Scene;
    sceneType: Number;

    constructor(aiServer: AIServer) {
        let sceneForRoom = new BABYLON.Scene(aiServer.engine);
        sceneForRoom.collisionsEnabled = false;
        let camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 200, 0), sceneForRoom);
        camera.rotation = new BABYLON.Vector3(1.5, 1, 1);
        this.scene = sceneForRoom;
    }

    public removeRoom() {
        this.disposeEnemies();
        this.scene.dispose();

        return this;
    }

    public disposeEnemies() {
        this.enemies.forEach((enemy) => {
            enemy.clearActiveTarget(this);
        });

        return this;
    }

}
