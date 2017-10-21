namespace Character.Skills {
    export abstract class  AbstractSkill {
        static TYPE = 0;

        public cooldown: number;
        public damage: number;
        public stock: number;
        public name: string;

        protected image: string;

        constructor(game: Game, cooldown: number = 0, damage: number = 0, stock: number = 0) {
            this.cooldown = cooldown;
            this.damage = damage;
            this.stock = stock;
            this.registerHotKey(game);
            this.registerDefaults();
        }

        public getImageUrl() {
            return this.image;
        }

        public abstract getType();

        protected abstract registerHotKey(game: Game);

        protected abstract registerDefaults();

    }
}