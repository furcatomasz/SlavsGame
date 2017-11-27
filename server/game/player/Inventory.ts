namespace Server {
    export class Inventory {

        public helm: Items.Item;
        public gloves: Items.Item;
        public boots: Items.Item;
        public armor: Items.Item;
        public weapon: Items.Item;
        public shield: Items.Item;
        public items: Array<Items.Item>;

        constructor() {
            this.items = [];
        }

        /**
         * @param item
         */
        protected removeItem(item: Items.Item) {
        }

        /**
         * @param item
         * @param setItem
         */
        protected equip(item: Items.Item, setItem: boolean) {
            switch (item.getType()) {
                case Items.Weapon.TYPE:
                    this.removeItem(this.weapon);
                    this.weapon = null;
                    if (setItem) {
                        this.weapon = item;
                    }
                    break;
                case Items.Shield.TYPE:
                    this.removeItem(this.shield);
                    this.shield = null;

                    if (setItem) {
                        this.shield = item;
                    }
                    break;
                case Items.Helm.TYPE:
                    this.removeItem(this.helm);
                    this.helm = null;

                    if (setItem) {
                        this.helm = item;
                    }
                    break;
                case Items.Gloves.TYPE:
                    this.removeItem(this.gloves);
                    this.gloves = null;

                    if (setItem) {
                        this.gloves = item;
                    }
                    break;
                case Items.Boots.TYPE:
                    this.removeItem(this.boots);
                    this.boots = null;

                    if (setItem) {
                        this.boots = item;
                    }
                    break;
                case Items.Armor.TYPE:
                    this.removeItem(this.armor);
                    this.armor = null;

                    if (setItem) {
                        this.armor = item;
                    }
                    break;
            }

        }

        /**
         * Value 1 define mounting item usign bone, value 2 define mounting using skeleton.
         * @param item
         * @returns {AbstractCharacter.Inventory}
         */
        public mount(item: Items.Item) {
            this.equip(item, true);

            return this;
        }

        /**
         *
         * @param item
         * @returns {Character.Inventory}
         */
        public umount(item: Items.Item) {
            this.equip(item, false);

            return this;
        }

    }
}