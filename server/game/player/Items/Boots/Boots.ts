/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Boots extends Item {
        static TYPE = 5;

        /**
         * @param databaseId
         */
        constructor(databaseId: Number) {
            this.type = Items.Boots.TYPE;
            super(databaseId);
        }

        /**
         * @returns {number}
         */
        public getType() {
            return Items.Boots.TYPE;
        }
    }
}