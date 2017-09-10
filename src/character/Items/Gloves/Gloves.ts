/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Gloves extends Item {
        static TYPE = 4;

        /**
         * @param game
         * @param databaseId
         */
        constructor(game:Game, databaseId: Number) {
            super(game, databaseId);
        }

        /**
         * @returns {number}
         */
        public getType() {
            return Items.Gloves.TYPE;
        }
    }
}