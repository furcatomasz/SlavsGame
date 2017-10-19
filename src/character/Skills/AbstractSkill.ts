namespace Character.Skills {
    export abstract class  AbstractSkill {
        static TYPE = 0;

        public cooldown: number;
        public damage: number;
        public stock: number;
        public name: string;

        protected image: string;

        constructor(cooldown: number = 0, damage: number = 0, stock: number = 0) {
            this.cooldown = cooldown;
            this.damage = damage;
            this.stock = stock;
        }

        public getImageUrl() {
            return this.image;
        }

        public abstract getType();

    }
}