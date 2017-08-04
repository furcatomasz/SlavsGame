/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Gloves extends Item {
        static readonly TYPE = 4;

        constructor(game: Game) {
            super(game);
        }

        /**
         * @returns {number}
         */
        public getType() {
            return Items.Gloves.TYPE;
        }
    }
}