/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Weapon extends Item {
        static readonly TYPE = 1;

        constructor(game:Game) {
            super(game);
        }

        /**
         * @returns {number}
         */
        public getType() {
            return Items.Weapon.TYPE;
        }
    }
}