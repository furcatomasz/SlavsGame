namespace Server.Gateways {
    export class EntraceHouse extends AbstractGateway {

        constructor() {
            this.objectName = 'Entrace_House';
            this.openSceneType = Server.Scenes.ForestHouseStart.TYPE;
        }

        /**
         *
         * @returns {Server.Gateways.AbstractGateway}
         */
        public verifyIsActive(character: Server.Character): AbstractGateway {
            this.isActive = true;
        }
    }

}