namespace Items {
    export class ItemManager {

        protected items:Array<Item>;

        /**
         *
         * @param itemId
         * @param databaseId
         * @returns {null}
         */
        public getItemUsingId(itemId:number, databaseId:number) {
            return this.getItem(itemId, databaseId);
        }

        /**
         *
         * @param inventoryItems
         * @param character
         */
        public initItemsFromDatabaseOnCharacter(inventoryItems:Array, character:Character) {
            let self = this;
            let inventory = character.inventory;
            inventory.items = [];

            inventoryItems.forEach(function(itemDatabase) {
                let item = self.getItemUsingId(itemDatabase.itemId, itemDatabase.id);
                inventory.items.push(item);

                if (itemDatabase.equip) {
                    item.equip = itemDatabase.equip;
                    inventory.mount(item);
                }
            });
        }

        /**
         *
         * @param id
         * @param databaseId
         * @returns Items.Item
         */
        protected getItem(id, databaseId:number) {
            let item = null;
            switch (id) {
                case Items.Armors.LeatherArmor.ITEM_ID:
                    item = new Items.Armors.LeatherArmor(databaseId);
                    break;
                case Items.Boots.LeatherBoots.ITEM_ID:
                    item = new Items.Boots.LeatherBoots(databaseId);
                    break;
                case Items.Gloves.LeatherGloves.ITEM_ID:
                    item = new Items.Gloves.LeatherGloves(databaseId);
                    break;
                case Items.Helms.LeatherHelm.ITEM_ID:
                    item = new Items.Helms.LeatherHelm(databaseId);
                    break;
                case Items.Shields.SmallWoodenShield.ITEM_ID:
                    item = new Items.Shields.SmallWoodenShield(databaseId);
                    break;
                case Items.Shields.MediumWoodenShield.ITEM_ID:
                    item = new Items.Shields.MediumWoodenShield(databaseId);
                    break;
                case Items.Weapons.Sword.ITEM_ID:
                    item = new Items.Weapons.Sword(databaseId);
                    break;
                case Items.Weapons.LongSword.ITEM_ID:
                    item = new Items.Weapons.LongSword(databaseId);
                    break;
            }

            return item;
        }

    }
}