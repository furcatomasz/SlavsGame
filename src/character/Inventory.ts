namespace Character {
    export class Inventory {

        protected player:Player;
        protected game:Game;

        /** Equipt items */
        public helm:Items.Item;
        public gloves:Items.Item;
        public boots:Items.Item;
        public armor:Items.Item;
        public weapon:Items.Item;
        public shield:Items.Item;

        public items:Array<Items.Item>;

        constructor(game:Game, player:Player) {
            this.game = game;
            this.player = player;
            this.items = [];

            this.initPlayerItems();
        }

        public initPlayerItems() {
            let sword = new Items.Weapons.Sword(this.game);
            let shield = new Items.Shields.WoodShield(this.game);
            let armor = new Items.Armors.PrimaryArmor(this.game);
            let helm = new Items.Helms.PrimaryHelm(this.game);
            let gloves = new Items.Gloves.PrimaryGloves(this.game);
            let boots = new Items.Boots.PrimaryBoots(this.game);
            
            this.items.push(sword);
            this.items.push(shield);
            this.items.push(armor);
            this.items.push(helm);
            this.items.push(gloves);
            this.items.push(boots);

            this.mount(sword);
            this.mount(shield);
            this.mount(armor);
            this.mount(helm);
            this.mount(gloves);
            this.mount(boots);

            this.weapon = sword;
            this.shield = shield;
            this.armor = armor;
            this.helm = helm;
            this.gloves = gloves;
            this.boots = boots;

            let sword1 = new Items.Weapons.Sword(this.game);
            this.items.push(sword1);

            let axe2 = new Items.Weapons.Axe(this.game);
            this.items.push(axe2);

            let axe3 = new Items.Weapons.Axe(this.game);
            this.items.push(axe3);

            let sword4 = new Items.Weapons.Sword(this.game);
            this.items.push(sword4);

            let robe = new Items.Armors.Robe(this.game);
            this.items.push(robe);
        }

        /**
         * @param item
         */
        protected removeItem(item: Items.Item) {
            if(item) {
                item.mesh.visibility = 0;
            }
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

            if(setItem) {
                item.mesh.visibility = 1;
            }
        }

        /**
         * Value 1 define mounting item usign bone, value 2 define mounting using skeleton.
         * @param item
         * @returns {AbstractCharacter.Inventory}
         */
        public mount(item: Items.Item) {
                item.mesh.parent = this.player.mesh;
                item.mesh.skeleton = this.player.mesh.skeleton;

            this.equip(item, true);

            return this;
        }

        public umount(item: Items.Item) {
            this.equip(item, false);

            return this;
        }

        /**
         * @returns {Array}
         */
        public getEquipedItems(): Array<Items.Item> {
            let equipedItems = [];

            equipedItems.push(this.helm);
            equipedItems.push(this.armor);
            equipedItems.push(this.weapon);
            equipedItems.push(this.shield);
            equipedItems.push(this.gloves);
            equipedItems.push(this.boots);

            return equipedItems;
        }
    }
}