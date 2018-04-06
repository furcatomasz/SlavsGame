namespace Server.Quests.Requirements {
    export abstract class AbstractRequirement {
        static REQUIREMENT_ID = 0;
        public requirement;
        public value: number;
        public name;

        protected questChapter: Server.Quests.Chapter;

        constructor() {
            this.registerListener();
        }

        public setQuestChapter(chapter: Server.Quests.Chapter) {
            this.questChapter = chapter;
        }

        protected abstract registerListener();
    }
}