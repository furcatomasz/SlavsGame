namespace Server.Gateways {
    export class EntraceForestHouseTomb extends AbstractGateway {

        constructor() {
            this.objectName = 'Entrace_Tomb';
            this.openSceneType = Server.Scenes.ForestHouseTomb.TYPE;
        }

        /**
         *
         * @returns {Server.Gateways.AbstractGateway}
         */
        public verifyIsActive(character: Server.Character): AbstractGateway {
            this.isActive = false;
        }
    }

}