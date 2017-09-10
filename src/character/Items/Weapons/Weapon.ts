/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Weapon extends Item {
        static TYPE = 1;

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
            return Items.Weapon.TYPE;
        }
    }
}