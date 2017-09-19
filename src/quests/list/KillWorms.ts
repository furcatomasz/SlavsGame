namespace Quests {
    export class KillWorms extends Quests.AbstractQuest {
        static QUEST_ID = 1;

        constructor(game: Game) {
            super(game);
            this.title = 'Bandits';
            this.description = 'Go to portal and kill all bandits.'
        }

        /**
         *
         * @returns {number}
         */
        public getQuestId() {
            return Quests.KillWorms.QUEST_ID;
        }
    }
}