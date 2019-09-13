import {Game} from "../../Game";
import {Item} from "./Item";
import {Inventory} from "../Inventory";

export class ItemManager {

    protected game: Game;
    protected items: Array<Item>;

    constructor(game: Game) {
        this.game = game;
    }

    /**
     * @param inventoryItems
     * @param inventory
     * @param hideShieldAndWeapon
     */
    public initItemsFromDatabaseOnCharacter(inventoryItems: Array<any>, inventory: Inventory, hideShieldAndWeapon: boolean = false) {
        let self = this;
        let showSash = true;
        let showHair = true;

        new Promise(function (resolve) {
            inventoryItems.forEach(function (itemDatabase) {
                if (hideShieldAndWeapon && (itemDatabase.type == 2 || itemDatabase.type == 1)) {
                    return;
                }

                let item = new Item(self.game, itemDatabase);
                inventory.items.push(item);

                const equip = (itemDatabase.entity) ? itemDatabase.entity.equip : itemDatabase.equip;
                inventory.equipItem(item, equip);

                if (item.type == 3 && equip) {
                    showHair = false;
                }

                if (item.type == 6 && equip) {
                    showSash = false;
                }
            });

            setTimeout(function () {
                resolve();
            });
        }).then(function () {
            inventory.showSashOrHair(showHair, showSash);
        });
    }


}
