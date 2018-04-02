namespace Server.Scenes {
    export class ForestHouseStart extends AbstractScene {
        static TYPE = 1;

        constructor() {
            this.type = ForestHouseStart.TYPE;
            this.gateways = [
                new Server.Gateways.EntraceForestHouse(),
            ];
            this.quests = [
                new Server.Quests.SkeletonKing(),
            ];
        }

    }
}