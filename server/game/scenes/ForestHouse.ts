namespace Server.Scenes {
    export class ForestHouse extends AbstractScene {
        static TYPE = 2;

        constructor() {
            super();
            this.type = ForestHouse.TYPE;
            this.gateways = [
                new Server.Gateways.EntraceHouse(),
                new Server.Gateways.EntraceForestHouseTomb(),
            ];
        }

    }
}