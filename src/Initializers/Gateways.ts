class Gateway {

    public mesh: BABYLON.AbstractMesh;
    public particleSystem: BABYLON.ParticleSystem;

    constructor(game: Game, meshName: string, isActive: boolean, openSceneType: number, entranceName: string): void {
        let gateway = game.getScene().getMeshByName(meshName);
        if (!gateway) {
            throw new TypeError('Wrong gateway mesh name.');
        }

        this.mesh = gateway;
        gateway.visibility = 0;
        gateway.isPickable = true;

        let gatewayParticleSystem = new Particles.Gateway(game, gateway, isActive).particleSystem;
        gatewayParticleSystem.start();
        this.particleSystem = gatewayParticleSystem;

        gateway.actionManager = new BABYLON.ActionManager(game.getScene());
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

        gateway.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger,
                function () {
                    if (Game.distanceVector(game.player.meshForMove.position, gateway.position) > 8) {
                        game.gui.playerLogsQuests.addText('You are too far away!', 'yellow');

                        return;
                    }

                    if (!isActive) {
                        game.gui.playerLogsQuests.addText('This gateway is locked!', 'yellow');

                        return;
                    }


                    game.client.socket.emit('changeSceneTrigger', openSceneType);

                }));

    }
}

