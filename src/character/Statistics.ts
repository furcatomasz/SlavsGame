namespace Character {
    export class Statistics {

        protected player: Player;
        public hp: number;
        public hpMax: number;
        public attackSpeed: number;
        public damage: number;
        public armor: number;
        public walkSpeed: number;
        public blockChance: number;
        public hitChance: number;


        constructor(hp: number = 0, hpMax: number = 0, attackSpeed: number = 0, damage: number = 0, armor: number = 0, walkSpeed: number = 0, blockChance: number = 0, hitChance: number = 0) {
            this.hp = hp;
            this.hpMax = hpMax;
            this.attackSpeed = attackSpeed;
            this.damage = damage;
            this.armor = armor;
            this.walkSpeed = walkSpeed;
            this.blockChance = blockChance;
            this.hitChance = hitChance;
        }

        public setPlayer(player: Player) {
            this.player = player;

            return this;
        }

        public getItemsStats(): Character.Statistics {
            let statistics = new Character.Statistics();

            if(this.player) {
                let inventory = this.player.inventory;
                let equipedItems = [];

                equipedItems.push(inventory.helm);
                equipedItems.push(inventory.gloves);
                equipedItems.push(inventory.armor);
                equipedItems.push(inventory.weapon);
                equipedItems.push(inventory.shield);
                equipedItems.push(inventory.boots);

                for (let i = 0; i < equipedItems.length; i++) {
                    let item = equipedItems[i];
                    if(item.damage) {
                        statistics.damage += item.damage;
                    }
                    if(item.armor) {
                        statistics.armor += item.armor;
                    }

                }
            }

            return statistics;
        }

        public getHp() {
            return this.hp;
        }

        public getHpMax() {
            return this.hpMax;
        }

        public getAttackSpeed() {
            return this.attackSpeed;
        }

        public getWalkSpeed() {
            return this.attackSpeed;
        }

        public getBlockChance() {
            return this.blockChance;
        }

        public getHitChance() {
            return this.hitChance;
        }

        public getDamage() {
            let itemStatistics = this.getItemsStats();

            return this.damage + itemStatistics.damage;
        }

        public getArmor() {
            let itemStatistics = this.getItemsStats();

            return this.armor + itemStatistics.armor;
        }

    }
}