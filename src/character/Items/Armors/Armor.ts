/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Armor extends Item {
        static TYPE = 6;

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
            return Items.Armor.TYPE;
        }
    }
}