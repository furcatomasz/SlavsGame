namespace Server.Quests {
    export abstract class AbstractQuest implements ObjectSelector {

        public isActive: string;
        public isFinished: boolean;
        public title: string;
        public description: string;
        public awards: Array<Quests.Awards.AbstractAward>
        public requirements: Array<Quests.Requirements.AbstractRequirement>

        /**
         * @returns {number}
         */
        public getChaptersCount(): number {
            return this.requirements.length;
        }
    }

}