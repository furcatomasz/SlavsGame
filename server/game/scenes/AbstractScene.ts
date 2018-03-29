namespace Server.Scenes {
    export abstract class AbstractScene {
        static TYPE = 0;

        public type: number;

        /**
         * Gateways to change scene by character or team
         */
        public gateways: Array<Server.Gateways.AbstractGateway>;

        public abstract getType(): number;

        /**
         *
         * @param {Server.Character} character
         * @returns {Server.Scenes.AbstractScene}
         */
        public refreshGatewaysData(character: Server.Character): AbstractScene {
            this.gateways.forEach(function(gateway: Server.Gateways.AbstractGateway) {
                gateway.verifyIsActive(character);
            });

            return this;
        }

    }
}