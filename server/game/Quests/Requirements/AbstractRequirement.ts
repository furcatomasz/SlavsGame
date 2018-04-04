namespace Server.Quests.Requirements {
    export abstract class AbstractRequirement {
        static REQUIREMENT_ID = 0;
        public requirement;
        public value: number;
        public name;

        constructor() {
            this.registerListener();
        }

        protected abstract registerListener();
    }
}