namespace Skills {
    export abstract class  AbstractSkill {
        static TYPE = 0;

        public type: number;
        public cooldown: number;
        public damage: number;
        public stock: number;
        public name: string;

        public setPower(cooldown: number = 0, damage: number = 0, stock: number = 0) {
            this.cooldown = cooldown;
            this.damage = damage;
            this.stock = stock;
        }

        public abstract getType();

    }
}