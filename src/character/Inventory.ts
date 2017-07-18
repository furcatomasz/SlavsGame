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
            let sword = new Items.Sword(this.game);
            let shield = new Items.Shield(this.game);
            let armor = new Items.Armor(this.game);
            let helm = new Items.Helm(this.game);
            let gloves = new Items.Gloves(this.game);
            let boots = new Items.Boots(this.game);
            
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

            return this;
        }
    }
}