namespace Quests.Awards {
    export abstract class AbstractAward {
        static AWARD_ID = 0;

        public type;
        public award;
        public name;

        public abstract getAward();
    }
}