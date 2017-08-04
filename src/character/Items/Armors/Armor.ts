/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Armor extends Item {
        static readonly TYPE = 6;

        constructor(game: Game) {
            super(game);
        }

        /**
         * @returns {number}
         */
        public getType() {
            return Items.Armor.TYPE;
        }
    }
}