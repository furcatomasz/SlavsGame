/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Boots extends Item {
        static readonly TYPE = 5;

        constructor(game: Game) {
            super(game);
        }

        /**
         * @returns {number}
         */
        public getType() {
            return Items.Boots.TYPE;
        }
    }
}