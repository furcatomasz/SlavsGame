namespace Server.Quests {
    export abstract class AbstractQuest implements ObjectSelector {

        public title: string;
        public description: string;
        public chapters: Array<Server.Quests.Chapter>;

        /**
         * @returns {number}
         */
        public getChaptersCount(): number {
            return this.chapters.length;
        }
    }

}