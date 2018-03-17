namespace SpecialItems {
    export class SpecialItemsManager {

        /**
         * @param {Number} type
         * @param {number} value
         * @returns {any}
         */
        public getSpecialItem(type: Number, value: number) {
            let item = null;
            switch (type) {
                case SpecialItems.Gold.TYPE:
                    item = new SpecialItems.Gold(value);
                    break;
                case SpecialItems.KeyToChest.TYPE:
                    item = new SpecialItems.KeyToChest(value);
                    break;

            }
            return item;

        }
    }

}