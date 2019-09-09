import * as BABYLON from "babylonjs";

export class RemotePlayer {
    id: string;
    socketId: string;
    walkSpeed: number;
    roomId: string;
    mesh: BABYLON.AbstractMesh;
    registeredFunction;

    constructor(id: string, socketId: string, walkSpeed: number, roomId: string, mesh: BABYLON.AbstractMesh) {
        this.id = id;
        this.socketId = socketId;
        this.walkSpeed = walkSpeed;
        this.roomId = roomId;
        this.mesh = mesh;
    }
}
