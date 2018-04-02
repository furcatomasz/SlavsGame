namespace Server.Gateways {
    export abstract class AbstractGateway implements ObjectSelector {

        public isActive:string;
        public openSceneType: number;

        /**
         *
         * @returns {Server.Gateways.AbstractGateway}
         */
        public abstract verifyIsActive(character: Server.Character): AbstractGateway;
    }

}