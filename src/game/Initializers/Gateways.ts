import {TooltipMesh} from "../GUI/Tooltips/TooltipMesh";
import {Game} from "../Game";
import {GoToMeshAndRunAction} from "../Actions/GoToMeshAndRunAction";
import {GatewayParticles as GatewayParticles} from "../Particles/GatewayParticles";
import * as BABYLON from 'babylonjs';

export class Gateway {

    public mesh: BABYLON.AbstractMesh;
    public tooltip: TooltipMesh;
    public particleSystem: BABYLON.IParticleSystem;

    constructor(game: Game, meshName: string, isActive: boolean, openSceneType: number, entranceName: string) {
        let gateway = <BABYLON.Mesh> game.getBabylonScene().getMeshByName(meshName);
        if (!gateway) {
            throw new TypeError('Wrong gateway mesh name.');
        }

        this.mesh = gateway;
        gateway.visibility = 0;
        gateway.isPickable = true;
        this.tooltip = new TooltipMesh(gateway, entranceName);

        let gatewayParticleSystem = GatewayParticles.initParticleSystem(game, gateway, isActive);
        gatewayParticleSystem.start();
        this.particleSystem = gatewayParticleSystem;

        gateway.actionManager = new BABYLON.ActionManager(game.getBabylonScene());
        gateway.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
                function () {
                    game.gui.characterTopHp.showGateway(entranceName);
                }));

        gateway.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
                function () {
                    game.gui.characterTopHp.hideHpBar();
                }));

        let enterTheGateway = function () {
            if (!isActive) {
                game.gui.playerLogsQuests.addText('This gateway is locked!', 'yellow');

                return;
            }

            game.getSceneManger().goToAction = GoToMeshAndRunAction.execute(game, gateway, () => {
                game.socketClient.socket.emit('changeSceneTrigger', openSceneType);
            });

        };
        gateway.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger,
                enterTheGateway));

        gateway.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: game.player.mesh
                },
                enterTheGateway));

    }
}

