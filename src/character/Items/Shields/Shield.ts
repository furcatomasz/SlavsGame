/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Shield extends Item {
        static TYPE = 2;

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
            return Items.Shield.TYPE;
        }
    }
}