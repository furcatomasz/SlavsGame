/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Helm extends Item {
        static TYPE = 3;

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
            return Items.Helm.TYPE;
        }
    }
}