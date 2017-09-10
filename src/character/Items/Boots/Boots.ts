/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Boots extends Item {
        static TYPE = 5;

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
            return Items.Boots.TYPE;
        }
    }
}