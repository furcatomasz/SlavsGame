namespace Server.Scenes {
    export class ForestHouse extends AbstractScene {
        static TYPE = 2;

        constructor() {
            this.type = ForestHouse.TYPE;
            this.gateways = [
                new Server.Gateways.EntraceHouse(),
            ];
        }

    }
}