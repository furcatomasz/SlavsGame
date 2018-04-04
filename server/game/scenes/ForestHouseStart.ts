namespace Server.Scenes {
    export class ForestHouseStart extends AbstractScene {
        static TYPE = 1;

        constructor() {
            super();
            this.type = ForestHouseStart.TYPE;
            this.gateways = [
                new Server.Gateways.EntraceForestHouse(),
            ];
            this.quests = this.questManager.getQuestsForScene(this.type);
        }

    }
}