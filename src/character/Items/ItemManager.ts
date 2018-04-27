namespace Items {
    export class ItemManager {

        protected game:Game;
        protected items:Array<Item>;

        constructor(game:Game) {
            this.game = game;
        }

        /**
         * @param inventoryItems
         * @param inventory
         * @param hideShieldAndWeapon
         */
        public initItemsFromDatabaseOnCharacter(inventoryItems: Array, inventory:Character.Inventory, hideShieldAndWeapon:boolean = false) {
            let self = this;
            inventory.clearItems();

            inventoryItems.forEach(function(itemDatabase) {
                if(itemDatabase) {
                    if(hideShieldAndWeapon && (itemDatabase.type == 2 || itemDatabase.type == 1)) {
                        return;
                    }

                    let item = new Items.Item(self.game, itemDatabase);
                    if (self.game.sceneManager.octree) {
                        self.game.sceneManager.octree.dynamicContent.push(item.mesh);
                    }
                    item.mesh.alwaysSelectAsActiveMesh = true;

                    inventory.items.push(item);
                    inventory.equipItem(item, itemDatabase.entity.equip);


                    ///TODO: in prosime after mount all items
                    // if(item.type == 3 && !itemDatabase.entity.equip) {
                    //     inventory.showSashOrHair(true, false);
                    // }
                    //
                    // if(item.type == 6 && !itemDatabase.entity.equip) {
                    //     inventory.showSashOrHair(false, true);
                    //
                    // }
                }
            });
        }


    }
}