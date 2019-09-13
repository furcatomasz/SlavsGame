import {Game} from "../Game";
import * as BABYLON from 'babylonjs';

export class GoToMeshAndRunAction {

    static execute(game: Game, mesh: BABYLON.AbstractMesh, action: Function): Function {
        const player = game.player;
        const targetPosition = mesh.position;
        let scene = game.getBabylonScene();
        if(game.getSceneManger().goToAction) {
            scene.unregisterBeforeRender(game.getSceneManger().goToAction);
            game.getSceneManger().goToAction = null;
        }

        const checkIntersectionFunction = () => {
            if (player.meshForMove.intersectsMesh(mesh)) {
                game.getBabylonScene().unregisterBeforeRender(checkIntersectionFunction);
                action();
            }
        };

        if (!player.meshForMove.intersectsMesh(mesh)) {
            player.runPlayerToPosition(targetPosition);
            game.socketClient.socket.emit('setTargetPoint', {
                position: targetPosition
            });
            scene.registerBeforeRender(checkIntersectionFunction);
        } else {
            action();
        }

        return checkIntersectionFunction;
    }

}
