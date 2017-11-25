/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Shield extends Item {
        static TYPE = 2;

        /**
         * @param databaseId
         */
        constructor(databaseId: Number) {
            this.type = Items.Shield.TYPE;

            super(databaseId);
        }

        /**
         * @returns {number}
         */
        public getType() {
            return Items.Shield.TYPE;
        }
    }
}