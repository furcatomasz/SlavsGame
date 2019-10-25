import * as BABYLON from "babylonjs";
import {Room} from "./Room";

export class RemotePlayer {
    id: number;
    socketId: string;
    walkSpeed: number;
    roomId: string;
    mesh: BABYLON.AbstractMesh;
    renderObserver: BABYLON.Observer<any>;

    constructor(characterId: number, socketId: string, walkSpeed: number, roomId: string, scene: BABYLON.Scene, position: BABYLON.Vector3) {
        this.id = characterId;
        this.socketId = socketId;
        this.walkSpeed = walkSpeed;
        this.roomId = roomId;

        let box = BABYLON.Mesh.CreateBox(characterId.toString(), 3, scene, false);
        box.checkCollisions = false;
        box.position = position;
        box.actionManager = new BABYLON.ActionManager(scene);
        this.mesh = box;

    }

    public dispose(room: Room) {
        const self = this;
        const scene = room.scene;
        scene.onBeforeRenderObservable.remove(this.renderObserver);
        this.mesh.dispose();

        room.enemies.forEach((enemy) => {
            if(enemy.target == self.id) {
                clearInterval(enemy.attackInterval);
            }
        })

    }
}
