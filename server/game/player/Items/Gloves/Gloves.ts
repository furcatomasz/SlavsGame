/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Gloves extends Item {
        static TYPE = 4;

        /**
         * @param databaseId
         */
        constructor(databaseId: Number) {
            this.type = Items.Gloves.TYPE;

            super(databaseId);
        }

        /**
         * @returns {number}
         */
        public getType() {
            return Items.Gloves.TYPE;
        }
    }
}