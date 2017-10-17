namespace Skills {
    export class  AbstractSkill {
        static TYPE = 0;

        protected cooldown: number;
        protected damage: number;
        protected stock: number;
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