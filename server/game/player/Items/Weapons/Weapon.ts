/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Weapon extends Item {
        static TYPE = 1;

        /**
         * @param databaseId
         */
        constructor(databaseId: Number) {
            this.type = Items.Weapon.TYPE;

            super(databaseId);
        }

        /**
         * @returns {number}
         */
        public getType() {
            return Items.Weapon.TYPE;
        }
    }
}