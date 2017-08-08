namespace Quests.Awards {
    export abstract class AbstractAward {
        public type;
        public award;
        public name;

        public abstract getAward();
    }
}