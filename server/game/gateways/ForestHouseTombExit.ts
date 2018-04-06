namespace Server.Gateways {
    export class ForestHouseTombExit extends AbstractGateway {

        constructor() {
            this.objectName = 'exitForest';
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