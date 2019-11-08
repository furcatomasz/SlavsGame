import {AbstractCharacter} from "../Characters/AbstractCharacter";
import {Game} from "../Game";
import {Item} from "./Items/Item";
import {ItemManager} from "./Items/ItemManager";

export class Inventory {

        protected player: AbstractCharacter;
        protected game: Game;

        /** Equiped items */
        public helm: Item;
        public gloves: Item;
        public boots: Item;
        public armor: Item;
        public weapon: Item;
        public shield: Item;

        public items: Array<Item>;

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
        public equipItem(item: Item, setItem: boolean) {
            if (setItem) {
                const bonesNumbers = [];
                switch (item.type) {
                    case 1:
                        this.weapon = item;
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('weapon.bone'));
                        break;
                    case 2:
                        this.shield = item;
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('shield.bone'));
                        break;
                    case 3:
                        this.helm = item;
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('head'));
                        break;
                    case 4:
                        this.gloves = item;
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('hand.L'));
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('hand.R'));
                        break;
                    case 5:
                        this.boots = item;
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('foot.L'));
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('foot.R'));
                        break;
                    case 6:
                        this.armor = item;
                        bonesNumbers.push(this.player.mesh.skeleton.getBoneIndexByName('chest'));
                        break;
                }

                item.mesh = this.game.getSceneManger().assets.character.createClone(item.meshName);
                item.mesh.parent = this.player.mesh;
                item.mesh.skeleton = this.player.mesh.skeleton;

                // bonesNumbers.forEach((boneNumber) => {
                //     const mesh = BABYLON.Mesh.CreateBox('test', 1, this.game.getScene(), false);
                //     mesh.attachToBone(this.player.mesh.skeleton.bones[boneNumber], this.player.mesh);
                // });

                if(item.type == 1) {
                    const game = this.game;
                    bonesNumbers.forEach((boneNumber) => {
                        item.createTrailMesh(game);
                        item.trailBox.attachToBone(this.player.mesh.skeleton.bones[boneNumber], this.player.mesh);
                    });

                }

            }

        }

        public emitEquip(item: Item) {
            this.game.socketClient.socket.emit('itemEquip', {
                id: item.databaseId
            });

            return this;
        }

        /**
         * @returns {Array}
         */
        public getEquipedItems(): Array<Item> {
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

            //TODO: Bugged hair in character
            // if (showHair) {
            //     let helm = new Item(this.game, {
            //         name: "Hair",
            //         image: 'hair',
            //         meshName: 'hair',
            //         type: 3,
            //         entity: {id: 0},
            //         statistics: null
            //     });
            //
            //     this.equipItem(helm, true);
            // }

            if (showSash) {
                let armor = new Item(this.game, {
                    name: "Sash",
                    image: 'sash',
                    meshName: 'sash',
                    type: 6,
                    entity: {id: 0},
                    statistics: null
                });

                this.equipItem(armor, true);
            }

        }

        public deleteSashAndHair() {
            if (this.helm && this.helm.name == "Hair") {
                this.helm.mesh.dispose();
            }

            if (this.armor && this.armor.name == "Sash") {
                this.armor.mesh.dispose();
            }

            return this;
        }

        /**
         * @returns {Player}
         */
        public removeItems() {
            this.items.forEach(function(item) {
                item.dispose();
            });

            this.items = [];

            return this;
        }

        /**
         *
         * @param inventoryItems
         */
        public setItems(inventoryItems: Array<any>) {
            if (inventoryItems) {
                let self = this;
                let game = this.game;
                let itemManager = new ItemManager(game);

                new Promise(function (resolve) {
                    self.deleteSashAndHair();
                    self.items.forEach(function (item) {
                        item.dispose();
                    });
                    setTimeout(function () {
                        resolve();
                    });
                }).then(function () {
                    self.clearItems();

                    new Promise(function (resolve) {
                        itemManager.initItemsFromDatabaseOnCharacter(inventoryItems, self);
                        setTimeout(function () {
                            resolve();
                        });
                    }).then(function () {
                        if(game.gui.inventory.opened) {
                            game.gui.inventory.refreshPopup();
                        }
                    });
                });
            }
        }
    }
