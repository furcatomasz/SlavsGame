namespace Server {
    export class QuestManager {
        quests = Array;

        constructor() {
            this.registerQuests();
        }

        /**
         * @param {Server.Scenes.AbstractScene} scene
         * @returns Array
         */
        public getQuestsForScene(scene: Server.Scenes.AbstractScene) {
            return this.quests[scene.TYPE];
        }

        /**
         * @returns {Server.QuestManager}
         */
        protected registerQuests() {
            let quests = [];

            quests[Server.Scenes.ForestHouseStart.TYPE] = [];
            quests[Server.Scenes.ForestHouseStart.TYPE].push(
                new Server.Quests.SkeletonKing()
            );

            this.quests = quests;

            return this;
        }

    }

}

