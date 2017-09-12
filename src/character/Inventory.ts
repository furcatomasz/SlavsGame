namespace Character {
    export class Inventory {

        protected player:AbstractCharacter;
        protected game:Game;

        /** Equipt items */
        public helm:Items.Item;
        public gloves:Items.Item;
        public boots:Items.Item;
        public armor:Items.Item;
        public weapon:Items.Item;
        public shield:Items.Item;

        public items:Array<Items.Item>;

        constructor(game:Game, player:AbstractCharacter) {
            this.game = game;
            this.player = player;
            this.items = [];
        }

        /**
         * @param item
         */
        protected removeItem(item: Items.Item) {
            if(item) {
                item.mesh.visibility = 0;

                this.game.client.socket.emit('itemEquip', {
                    id: item.databaseId,
                    equip: false,
                });

            }
        }

        /**
         * @param item
         * @param setItem
         * @param emit
         */
        protected equip(item: Items.Item, setItem: boolean, emit: boolean) {
            let emitData = {
                id: item.databaseId,
                equip: null,
            };

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
                emitData.equip = true;
            } else {
                emitData.equip = false;

                return;
            }

            if(emit) {
                this.game.client.socket.emit('itemEquip', emitData);
            }
        }

        /**
         * Value 1 define mounting item usign bone, value 2 define mounting using skeleton.
         * @param item
         * @param emit
         * @returns {AbstractCharacter.Inventory}
         */
        public mount(item: Items.Item, emit: boolean = false) {
            item.mesh.parent = this.player.mesh;
            item.mesh.skeleton = this.player.mesh.skeleton;

            this.equip(item, true, emit);

            return this;
        }

        /**
         *
         * @param item
         * @param emit
         * @returns {Character.Inventory}
         */
        public umount(item: Items.Item, emit: boolean = false) {
            this.equip(item, false, emit);

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