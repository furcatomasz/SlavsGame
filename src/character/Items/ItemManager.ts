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
         */
        public initItemsFromDatabaseOnCharacter(inventoryItems:Array, inventory:Character.Inventory, hideShieldAndWeapon:boolean = false) {
            let self = this;
            inventory.items = [];

            inventoryItems.forEach(function(itemDatabase) {
                if(itemDatabase) {
                    if(hideShieldAndWeapon && (itemDatabase.type == 2 || itemDatabase.type == 1)) {
                        return;
                    }

                    let item = new Items.Item(this.game, itemDatabase);
                    if (self.game.sceneManager.octree) {
                        self.game.sceneManager.octree.dynamicContent.push(item.mesh);
                    }
                    item.mesh.alwaysSelectAsActiveMesh = true;

                    inventory.items.push(item);

                    if (itemDatabase.equip) {
                        inventory.mount(item);
                    }
                }
            });
        }


    }
}