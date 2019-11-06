import {Game} from "../Game";
import {TooltipMesh} from "../GUI/Tooltips/TooltipMesh";
import {GoToMeshAndRunAction} from "../Actions/GoToMeshAndRunAction";
import * as BABYLON from 'babylonjs';

export class Chest {

    public mesh: BABYLON.AbstractMesh;
    public hightlightLayer: BABYLON.HighlightLayer;

    /**
     *
     * @param {Game} game
     * @param chestData
     * @param chestKey
     */
    constructor(game: Game, chestData, chestKey) {
        let self = this;
        let scene = game.getBabylonScene();
        let tooltip;
        let opened = chestData.opened;
        let position = chestData.position;
        let rotation = chestData.rotation;
        let chestMesh = game.getSceneManger().assets.chest.createClone('chest', true);
        const gameCamera = scene.getCameraByName('gameCamera');

        if (!chestMesh) {
            throw new TypeError('Wrong chest mesh name.');
        }
        chestMesh.position = new BABYLON.Vector3(position.x, position.y, position.z);
        chestMesh.rotation = new BABYLON.Vector3(rotation.x, rotation.y, rotation.z);
        chestMesh.isPickable = true;
        chestMesh.checkCollisions = true;
        chestMesh.material.backFaceCulling = false;

        if (!opened) {
            let hl = new BABYLON.HighlightLayer("highlightLayer", scene, {camera: gameCamera});
            hl.addMesh(chestMesh, BABYLON.Color3.Magenta());

            self.hightlightLayer = hl;
        }

        this.mesh = chestMesh;
        this.mesh.actionManager = new BABYLON.ActionManager(game.getBabylonScene());
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
            function () {
                tooltip = new TooltipMesh(chestMesh, chestData.name);
            }));

        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
            function () {
                tooltip.container.dispose();
            }));

        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                GoToMeshAndRunAction.execute(game, chestMesh, () => {
                    game.socketClient.socket.emit('openChest', chestKey);
                });
            })
        );

    }

}
