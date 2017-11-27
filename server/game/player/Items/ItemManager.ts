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
                case Items.Armors.Robe.ITEM_ID:
                    item = new Items.Armors.Robe(databaseId);
                    break;
                case Items.Armors.PrimaryArmor.ITEM_ID:
                    item = new Items.Armors.PrimaryArmor(databaseId);
                    break;
                case Items.Boots.PrimaryBoots.ITEM_ID:
                    item = new Items.Boots.PrimaryBoots(databaseId);
                    break;
                case Items.Gloves.PrimaryGloves.ITEM_ID:
                    item = new Items.Gloves.PrimaryGloves(databaseId);
                    break;
                case Items.Helms.PrimaryHelm.ITEM_ID:
                    item = new Items.Helms.PrimaryHelm(databaseId);
                    break;
                case Items.Shields.WoodShield.ITEM_ID:
                    item = new Items.Shields.WoodShield(databaseId);
                    break;
                case Items.Weapons.Axe.ITEM_ID:
                    item = new Items.Weapons.Axe(databaseId);
                    break;
                case Items.Weapons.Sword.ITEM_ID:
                    item = new Items.Weapons.Sword(databaseId);
                    break;
            }

            return item;
        }

    }
}