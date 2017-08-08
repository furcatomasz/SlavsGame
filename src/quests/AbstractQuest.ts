/// <reference path="awards/AbstractAward.ts"/>
/// <reference path="requirements/AbstractRequirement.ts"/>

namespace Quests {
    export abstract class AbstractQuest {

        protected game: Game;
        protected title;
        protected description;
        protected awards: Array<Quests.Awards.AbstractAward>
        protected requirements: Array<Quests.Requirements.AbstractRequirement>

        public constructor(game: Game) {
            this.game = game;
            this.awards = [];
            this.requirements = [];
        }
    }
}