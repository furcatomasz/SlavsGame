/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Shield extends Item {
        static readonly TYPE = 2;

        constructor(game: Game) {
            super(game);
        }

        /**
         * @returns {number}
         */
        public getType() {
            return Items.Shield.TYPE;
        }
    }
}