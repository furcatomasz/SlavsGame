namespace Quests {
    export class QuestManager {

        protected game:Game;

        constructor(game:Game) {
            this.game = game;
        }


        /**
         * @param questData
         */
        public transformQuestDatabaseDataToObject(questData:Array) {
            let awards = questData.awards;
            let requirements = questData.requirements;
            let questId = questData.questId;

            let quest = this.getQuest(questId);
            quest.setAwards(awards);

            return quest;
        }

        // TODO: Change from server
        protected getAwards(databaseAwards:Array) {
            let awards = [];
            let itemManager = new Items.ItemManager(this.game);
            databaseAwards.forEach(function (award, key) {
                let award;

                switch (award.awardId) {
                    case Quests.Awards.Item.AWARD_ID:
                        let item = itemManager.getItemUsingId(award.value);
                        award = new Quests.Awards.Item(item);
                }
                awards.push(award);
            });

            return awards;
        }

        //protected getRequrements(databaseRequrements:Array) {
        //    let awards = [];
        //    databaseRequrements.forEach(function (requirement, key) {
        //        let award;
        //
        //        switch (requirement.requirementId) {
        //            case Quests.Requirements.Monster.REQUIREMENT_ID:
        //                let monster = new Worm();
        //                award = new Quests.Requirements.Monster(item, requirement.value);
        //        }
        //        awards.push(award);
        //    });
        //
        //    return awards;
        //}

        /**
         *
         * @param id
         * @returns Quests.AbstractQuest
         */
        protected getQuest(id) {
            let game = this.game;
            let quest = null;
            switch (id) {
                case Quests.KillWorms.QUEST_ID:
                    quest = new Quests.KillWorms(game);
                    break;
            }

            return quest;
        }

        /**
         * @param questId
         * @returns {null|Quests.AbstractQuest}
         */
        public getQuestFromServerUsingQuestId(questId: number) {
            let quest = null;
            this.game.quests.forEach(function(gameQuest: Quests.AbstractQuest, key) {
                if(questId == gameQuest.getQuestId()) {
                    quest = gameQuest;
                }
            });

            return quest;
        }


    }
}