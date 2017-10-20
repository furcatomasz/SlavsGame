namespace Items {
    import Inventory = Character.Inventory;
    export class ItemManager {

        protected game:Game;
        protected items:Array<Item>;

        constructor(game:Game) {
            this.game = game;
        }

        /**
         *
         * @param itemId
         * @param databaseId
         * @returns Item|null
         */
        public getItemUsingId(itemId:number, databaseId:number) {
            return this.getItem(itemId, databaseId);
        }

        /**
         * @param inventoryItems
         * @param inventory
         */
        public initItemsFromDatabaseOnCharacter(inventoryItems:Array, inventory:Inventory) {
            let self = this;
            inventory.items = [];

            inventoryItems.forEach(function(itemDatabase) {
                let item = self.getItemUsingId(itemDatabase.itemId, itemDatabase.id);
                if(self.game.sceneManager.octree) {
                    self.game.sceneManager.octree.dynamicContent.push(item.mesh);
                }

                inventory.items.push(item);

                if (itemDatabase.equip) {
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
            let game = this.game;
            let item = null;
            switch (id) {
                case Items.Armors.Robe.ITEM_ID:
                    item = new Items.Armors.Robe(game, databaseId);
                    break;
                case Items.Armors.PrimaryArmor.ITEM_ID:
                    item = new Items.Armors.PrimaryArmor(game, databaseId);
                    break;
                case Items.Boots.PrimaryBoots.ITEM_ID:
                    item = new Items.Boots.PrimaryBoots(game, databaseId);
                    break;
                case Items.Gloves.PrimaryGloves.ITEM_ID:
                    item = new Items.Gloves.PrimaryGloves(game, databaseId);
                    break;
                case Items.Helms.PrimaryHelm.ITEM_ID:
                    item = new Items.Helms.PrimaryHelm(game, databaseId);
                    break;
                case Items.Shields.BigWoodShield.ITEM_ID:
                    item = new Items.Shields.BigWoodShield(game, databaseId);
                    break;
                case Items.Shields.WoodShield.ITEM_ID:
                    item = new Items.Shields.WoodShield(game, databaseId);
                    break;
                case Items.Weapons.Axe.ITEM_ID:
                    item = new Items.Weapons.Axe(game, databaseId);
                    break;
                case Items.Weapons.Sword.ITEM_ID:
                    item = new Items.Weapons.Sword(game, databaseId);
                    break;
            }

            return item;
        }

    }
}