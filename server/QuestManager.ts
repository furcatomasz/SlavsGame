namespace Server {
    export class QuestManager {

        public getQuests() {
            let quests = [];
            quests[1] = new Server.Quests.Models.Quest(
                1,
                [
                    new Server.Quests.Models.ModelAward(1, 1)
                ],
                [
                    new Server.Quests.Models.Requirement(1, 3)
                ]
            );

            return quests;
        }
    }

}

