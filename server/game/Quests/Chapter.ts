namespace Server.Quests {
    export class Chapter  {

        public description: string;
        public quest: Server.Quests.AbstractQuest;
        public awards: Array<Server.Quests.Awards.AbstractAward>;
        public requirements: Array<Server.Quests.Requirements.AbstractRequirement>;

        constructor(quest: Server.Quests.AbstractQuest,  description: string) {
            setTimeout(function() {
                this.quest = quest;
            });
            this.description = description;

            this.awards = [];
            this.requirements = [];
        }

        public addRequirement(requirement: Server.Quests.Requirements.AbstractRequirement) {
            requirement.setQuestChapter(this);

            this.requirements.push(requirement);

            return this;
        }

        public addAward(award: Server.Quests.Awards.AbstractAward) {
            this.awards.push(award);

            return this;
        }


    }

}