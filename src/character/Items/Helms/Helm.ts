/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Helm extends Item {
        static readonly TYPE = 3;

        constructor(game: Game) {
            super(game);
        }

        /**
         * @returns {number}
         */
        public getType() {
            return Items.Helm.TYPE;
        }
    }
}