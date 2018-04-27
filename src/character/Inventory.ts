namespace Character {
    export class Inventory {

        protected player: AbstractCharacter;
        protected game: Game;

        /** Equiped items */
        public helm: Items.Item;
        public gloves: Items.Item;
        public boots: Items.Item;
        public armor: Items.Item;
        public weapon: Items.Item;
        public shield: Items.Item;

        public items: Array<Items.Item>;

        constructor(game: Game, player: AbstractCharacter) {
            this.game = game;
            this.player = player;
            this.items = [];
        }

        public clearItems() {
            this.weapon = null;
            this.shield = null;
            this.helm = null;
            this.gloves = null;
            this.boots = null;
            this.armor = null;

            this.items = [];

            return this;
        }

        /**
         * @param item
         * @param setItem
         */
        public equipItem(item: Items.Item, setItem: boolean) {
            if (setItem) {
                item.mesh.parent = this.player.mesh;
                item.mesh.skeleton = this.player.mesh.skeleton;
                item.mesh.visibility = 1;

                switch (item.type) {
                    case 1:
                        this.weapon = item;
                        break;
                    case 2:
                        this.shield = item;
                        break;
                    case 3:
                        this.helm = item;
                        break;
                    case 4:
                        this.gloves = item;
                        break;
                    case 5:
                        this.boots = item;
                        break;
                    case 6:
                        this.armor = item;
                        break;
                }
                console.log('enable visi'+item.name);

            } else {
                item.mesh.visibility = 0;

                console.log('disable visi'+item.name);
            }

        }

        /**
         * @param item

         * @returns {AbstractCharacter.Inventory}
         */
        public emitEquip(item: Items.Item) {
            this.game.client.socket.emit('itemEquip', {
                id: item.databaseId
            });

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

        // public showSashOrHair(showHair: boolean, showSash: boolean) {
        //     if (showHair) {
        //         this.helm = new Items.Item(this.game, {
        //             name: "Hair",
        //             image: 'hair',
        //             meshName: 'hair',
        //             type: 3,
        //             entity: {id: 0},
        //             statistics: null
        //         });
        //
        //         this.mount(this.helm);
        //     }
        //
        //     if (showSash) {
        //         this.armor = new Items.Item(this.game, {
        //             name: "Sash",
        //             image: 'sash',
        //             meshName: 'sash',
        //             type: 6,
        //             entity: {id: 0},
        //             statistics: null
        //         });
        //
        //         this.mount(this.armor);
        //     }
        //
        // }
    }
}