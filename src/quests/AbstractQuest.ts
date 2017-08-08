/// <reference path="awards/AbstractAward.ts"/>
/// <reference path="requirements/AbstractRequirement.ts"/>

namespace Quests {
    export abstract class AbstractQuest {

        protected game: Game;
        public title;
        public description;
        public awards: Array<Quests.Awards.AbstractAward>
        public requirements: Array<Quests.Requirements.AbstractRequirement>

        public constructor(game: Game) {
            this.game = game;
            this.awards = [];
            this.requirements = [];
        }
    }
}