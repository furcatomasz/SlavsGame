/// <reference path="../Item.ts"/>

namespace Items {
    export abstract class Helm extends Item {
        static TYPE = 3;

        /**
         * @param databaseId
         */
        constructor(databaseId: Number) {
            this.type = Items.Helm.TYPE;

            super(databaseId);
        }

        /**
         * @returns {number}
         */
        public getType() {
            return Items.Helm.TYPE;
        }
    }
}