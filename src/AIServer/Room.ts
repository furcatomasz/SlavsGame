import {Enemy} from './Enemy';
import {RemotePlayer} from "./RemotePlayer";
import {Scene} from "babylonjs";

export class Room {
    enemies: Enemy[] = [];
    players: RemotePlayer[] = [];
    scene: Scene;
}
