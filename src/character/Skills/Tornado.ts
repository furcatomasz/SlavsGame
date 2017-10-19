namespace Character.Skills {
    export class Tornado extends Character.Skills.AbstractSkill {
        static TYPE = 2;

        constructor(cooldown: number = 0, damage: number = 0, stock: number = 0) {
            super(cooldown, damage, stock);
            this.image = '/assets/skills/skill02.png';
            this.name = 'Tornado';
        }

        public getType() {
            return Character.Skills.Tornado.TYPE;
        }

    }
}