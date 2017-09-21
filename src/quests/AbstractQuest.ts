/// <reference path="awards/AbstractAward.ts"/>
/// <reference path="requirements/AbstractRequirement.ts"/>

namespace Quests {
    export abstract class AbstractQuest {
        static QUEST_ID = 0;

        protected game:Game;
        public isActive: boolean;
        public isFinished: boolean;
        public hasRequrementsFinished: boolean;
        public title;
        public description;
        public awards:Array<Quests.Awards.AbstractAward>
        public requirements:Array<Quests.Requirements.AbstractRequirement>

        public constructor(game:Game) {
            this.game = game;
            this.awards = [];
            this.requirements = [];
            this.hasRequrementsFinished = true;
        }

        public setAwards(awards:Array) {
            this.awards = awards;
        }

        public setRequirements(requirements:Array) {
            this.requirements = requirements;
        }

        abstract getQuestId();
    }
}