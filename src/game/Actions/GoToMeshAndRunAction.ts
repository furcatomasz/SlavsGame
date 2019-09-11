import {Game} from "../game";
import * as BABYLON from 'babylonjs';

export class GoToMeshAndRunAction {

    static execute(game: Game, mesh: BABYLON.AbstractMesh, action: Function): Function {
        const player = game.player;
        const targetPosition = mesh.position;
        let scene = game.getScene();
        if(game.goToMeshFunction) {
            scene.unregisterBeforeRender(game.goToMeshFunction);
            game.goToMeshFunction = null;
        }

        const checkIntersectionFunction = () => {
            if (player.meshForMove.intersectsMesh(mesh)) {
                game.getScene().unregisterBeforeRender(checkIntersectionFunction);
                action();
            }
        };

        if (!player.meshForMove.intersectsMesh(mesh)) {
            player.runPlayerToPosition(targetPosition);
            game.client.socket.emit('setTargetPoint', {
                position: targetPosition
            });
            scene.registerBeforeRender(checkIntersectionFunction);
        } else {
            action();
        }

        return checkIntersectionFunction;
    }

}
