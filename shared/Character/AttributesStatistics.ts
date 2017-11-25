//AbstractStatistics
export module AttributesStatistics {
    export class AbstractStatistics {

        protected hp:number;
        protected hpMax:number;
        protected attackSpeed:number;
        protected damage:number;
        protected armor:number;
        protected walkSpeed:number;
        protected blockChance:number;
        protected hitChance:number;

        constructor(hp:number = 0, hpMax:number = 0, attackSpeed:number = 0, damage:number = 0, armor:number = 0, walkSpeed:number = 0, blockChance:number = 0, hitChance:number = 0) {
            this.hp = hp;
            this.hpMax = hpMax;
            this.attackSpeed = attackSpeed;
            this.damage = damage;
            this.armor = armor;
            this.walkSpeed = walkSpeed;
            this.blockChance = blockChance;
            this.hitChance = hitChance;
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
            return this.walkSpeed;
        }

        public getBlockChance() {
            return this.blockChance;
        }

        public getHitChance() {
            return this.hitChance;
        }

        public getDamage() {
            return this.damage;
        }

        public getArmor() {
            return this.armor;
        }

    }

//EquipStatistics
    export class EquipStatistics extends AbstractStatistics {

        public addStatisticsFromItem(statistics:ItemStatistics) {

            if (statistics.getDamage()) {
                this.damage += statistics.getDamage();
            }

            if (statistics.getArmor()) {
                this.armor += statistics.getArmor();
            }

        }


    }

//CharacterStatistics
    export class CharacterStatistics extends AbstractStatistics {

        protected player:Player;

        public setPlayer(player:Player) {
            this.player = player;

            return this;
        }

        public getItemsStats():AbstractStatistics {
            let statistics = new EquipStatistics();

            if (this.player) {
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
                    if (item) {
                        statistics.addStatisticsFromItem(item.statistics);
                    }
                }
            }

            return statistics;
        }


        public getDamage() {
            let equipStatistics = this.getItemsStats();

            return this.damage + equipStatistics.getDamage();
        }

        public getArmor() {
            let equipStatistics = this.getItemsStats();

            return this.armor + equipStatistics.getArmor();
        }

    }
//ItemStatistics
    export class ItemStatistics extends AbstractStatistics {

    }

}