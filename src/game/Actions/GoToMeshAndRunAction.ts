import {Game} from "../Game";
import * as BABYLON from 'babylonjs';

export class GoToMeshAndRunAction {

    static execute(game: Game, mesh: BABYLON.AbstractMesh, action: Function): BABYLON.Observer<any> {
        const player = game.player;
        const targetPosition = mesh.position;
        let observer;
        let scene = game.getBabylonScene();

        scene.onBeforeRenderObservable.remove(game.getSceneManger().goToAction);
        const checkIntersectionFunction = () => {
            if (player.meshForMove.intersectsMesh(mesh)) {
                game.getBabylonScene().onBeforeRenderObservable.remove(observer);
                action();
            }
        };

        if (!player.meshForMove.intersectsMesh(mesh)) {
            player.runPlayerToPosition(targetPosition);
            game.socketClient.socket.emit('setTargetPoint', {
                position: targetPosition
            });

            observer = scene.onBeforeRenderObservable.add(checkIntersectionFunction);
        } else {
            action();
        }

        game.getSceneManger().goToAction = observer;

        return observer;
    }

}
