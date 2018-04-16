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
         * @param emit
         */
        protected removeItem(item: Items.Item, emit: boolean) {
            if(item) {
                item.mesh.visibility = 0;

                //TODO: this should execute by server
                if(emit) {
                    this.game.client.socket.emit('itemEquip', {
                        id: item.databaseId,
                        equip: false,
                    });
                }
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

            switch (item.type) {
                case 1:
                    this.removeItem(this.weapon, emit);
                    this.weapon = null;
                    if (setItem) {
                        this.weapon = item;
                    }
                    break;
                case 2:
                    this.removeItem(this.shield, emit);
                    this.shield = null;

                    if (setItem) {
                        this.shield = item;
                    }
                    break;
                case 3:
                    this.removeItem(this.helm, emit);
                    this.helm = null;

                    if (setItem) {
                        this.helm = item;
                    }
                    break;
                case 4:
                    this.removeItem(this.gloves, emit);
                    this.gloves = null;

                    if (setItem) {
                        this.gloves = item;
                    }
                    break;
                case 5:
                    this.removeItem(this.boots, emit);
                    this.boots = null;

                    if (setItem) {
                        this.boots = item;
                    }
                    break;
                case 6:
                    this.removeItem(this.armor, emit);
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

            if(item.type == 3) {
                 this.showSashOrHair(true, false);
            }

            if(item.type == 6) {
                this.showSashOrHair(false, true);
            }

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

        public showSashOrHair(showHair: boolean, showSash: boolean) {
            console.log(showHair);
            console.log(showSash);
            if(showHair) {
                this.helm = new Items.Item(this.game, {
                    name: "Hair",
                    image: 'hair',
                    meshName: 'hair',
                    type: 3,
                    databaseId: 0,
                    statistics: null
                });

                this.mount(this.helm);
            }

            if(showSash) {
                this.armor = new Items.Item(this.game, {
                    name: "Sash",
                    image: 'sash',
                    meshName: 'sash',
                    type: 6,
                    databaseId: 0,
                    statistics: null
                });

                this.mount(this.armor);
            }

        }
    }
}