namespace Character {
    export class Inventory {

        protected player:Player;
        protected game:Game;

        /** Equipt items */
        protected helm:Items.Item;
        protected gloves:Items.Item;
        protected boots:Items.Item;
        protected armor:Items.Item;
        protected weapon:Items.Item;
        protected shield:Items.Item;

        protected items:Array<Items.Item>;

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

            sword.mount(this.player);
            shield.mount(this.player);
            armor.mount(this.player);
            helm.mount(this.player);
            gloves.mount(this.player);
            boots.mount(this.player);

            this.weapon = sword;
            this.shield = shield;
            this.armor = armor;
            this.helm = helm;
            this.gloves = gloves;
            this.boots = boots;
        }


    }
}