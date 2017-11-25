namespace Attributes {
    export class  AbstractStatistics {

        protected hp: number;
        protected hpMax: number;
        protected attackSpeed: number;
        protected damage: number;
        protected armor: number;
        protected walkSpeed: number;
        protected blockChance: number;
        protected hitChance: number;

        constructor(hp: number = 0, hpMax: number = 0, attackSpeed: number = 0, damage: number = 0, armor: number = 0, walkSpeed: number = 0, blockChance: number = 0, hitChance: number = 0) {
            this.hp = hp;
            this.hpMax = hpMax;
            this.attackSpeed = attackSpeed;
            this.walkSpeed = walkSpeed;
            this.blockChance = blockChance;
            this.hitChance = hitChance;

            this
                .setArmor(armor)
                .setDamage(damage);
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

        protected setArmor(armor) {
            this.armor = armor;

            return this;
        }

        protected setDamage(damage) {
            this.damage = damage;

            return this;
        }

    }
}