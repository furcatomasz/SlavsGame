namespace Server.Gateways {
    export abstract class AbstractGateway {

        public isActive:string;
        public objectName: string;
        public openSceneType: number;

        /**
         *
         * @returns {Server.Gateways.AbstractGateway}
         */
        public abstract verifyIsActive(character: Server.Character): AbstractGateway;
    }

}