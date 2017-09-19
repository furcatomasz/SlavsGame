namespace Server.Quests.Models {
    export class Quest {

        public questId;
        public awards:Array<Server.Quests.Models.ModelAward>;
        public requirements:Array<Server.Quests.Models.Requirement>;

        constructor(questId, awards:Array<Server.Quests.Models.ModelAward>, requirements:Array<Server.Quests.Models.Requirement>) {
            this.questId = questId;
            this.awards = awards;
            this.requirements = requirements;
        }
    }
}