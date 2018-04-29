/// <reference path="../ItesceneToDisposem.ts"/>

namespace Items {
    export abstract class Armor extends Item {
        static TYPE = 6;

        /**
         * @param databaseId
         */
        constructor(databaseId: Number) {
            this.type = Items.Armor.TYPE;
            super(databaseId);
        }

        /**
         * @returns {number}
         */
        public getType() {
            return Items.Armor.TYPE;
        }
    }
}