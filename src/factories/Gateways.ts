namespace Factories {
    export class Gateway {

        public mesh: BABYLON.AbstractMesh;
        public particleSystem: Particles.Gateway;

        /**
         *
         * @param {Game} game
         * @param {string} meshName
         * @param {boolean} isActive
         * @param {number} openSceneType
         */
        constructor(game: Game, meshName: string, isActive: boolean, openSceneType: number): void {
            let gateway = game.getScene().getMeshByName(meshName);
            if (!gateway) {
                throw new TypeError('Wrong gateway mesh name.');
            }

            this.mesh = gateway;
            gateway.visibility = 0;
            gateway.isPickable = false;

            let gatewayParticleSystem = new Particles.Gateway(game, gateway, isActive).particleSystem;
            gatewayParticleSystem.start();
            this.particleSystem = gatewayParticleSystem;

            game.player.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                parameter: gateway
            }, function () {
                game.client.socket.emit('changeScene', openSceneType);

                return this;
            }));

        }
    }
}