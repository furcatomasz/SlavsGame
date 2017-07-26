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
            let shield = new Items.Shields.BigWoodShield(this.game);
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

            let sword = new Items.Weapons.Sword(this.game);
            this.items.push(sword);

            let sword = new Items.Weapons.BigSword(this.game);
            this.items.push(sword);

            let sword = new Items.Weapons.BigSword(this.game);
            this.items.push(sword);

            let sword = new Items.Shields.WoodShield(this.game);
            this.items.push(sword);

            let sword = new Items.Shields.WoodShield(this.game);
            this.items.push(sword);

            let sword = new Items.Weapons.Sword(this.game);
            this.items.push(sword);



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
                    if (setItem) {
                        this.weapon = item;
                    }
                    break;
                case Items.Shield.TYPE:
                    this.removeItem(this.shield);
                    if (setItem) {
                        this.shield = item;
                    }
                    break;
                case Items.Helm.TYPE:
                    this.removeItem(this.helm);
                    if (setItem) {
                        this.helm = item;
                    }
                    break;
                case Items.Gloves.TYPE:
                    this.removeItem(this.gloves);
                    if (setItem) {
                        this.gloves = item;
                    }
                    break;
                case Items.Boots.TYPE:
                    this.removeItem(this.boots);
                    if (setItem) {
                        this.boots = item;
                    }
                    break;
                case Items.Armor.TYPE:
                    this.removeItem(this.armor);
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
         * @returns {Character.Inventory}
         */
        public mount(item: Items.Item) {
            if (item.mountType == 1) {
                this.player.mount(item.mesh, item.mountBoneName);
            } else if(item.mountType == 2) {
                item.mesh.parent = this.player.mesh;
                item.mesh.skeleton = this.player.mesh.skeleton;
            }

            this.equip(item, true);

            return this;
        }

        public umount(item: Items.Item) {
            console.log(1);
            this.equip(item, false);

            return this;
        }
    }
}