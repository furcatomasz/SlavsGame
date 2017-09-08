namespace Items {
    export class ItemManager {

        protected game: Game;
        protected items: Array<Item>;

        constructor(game: Game) {
            this.game = game;
            this.items = [
                new Items.Armors.Robe(game),
                new Items.Armors.PrimaryArmor(game),
                new Items.Boots.PrimaryBoots(game),
                new Items.Gloves.PrimaryGloves(game),
                new Items.Helms.PrimaryHelm(game),
                // new Items.Shields.BigWoodShield(game),
                new Items.Shields.WoodShield(game),
                new Items.Weapons.Axe(game),
                new Items.Weapons.Sword(game)
            ];

        }

        /**
         *
         * @param itemId
         * @returns Item|null
         */
        public getItemUsingId(itemId: number) {
            for (let i = 0; i < this.items.length; i++) {
                let item = this.items[i];
                if (item.itemId == itemId) {
                    return item;
                }
            }

            return null;
        }

    }
}