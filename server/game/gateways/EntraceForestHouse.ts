namespace Server.Gateways {
    export class EntraceForestHouse extends AbstractGateway {

        constructor() {
            this.objectName = 'exitHouse';
            this.openSceneType = Server.Scenes.ForestHouse.TYPE;
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