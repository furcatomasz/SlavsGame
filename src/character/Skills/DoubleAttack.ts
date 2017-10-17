namespace Skills {
    import AbstractSkill = Skills.AbstractSkill;
    export class DoubleAttack extends AbstractSkill {
        static TYPE = 1;

        constructor(cooldown: number = 0, damage: number = 0, stock: number = 0) {
            super(cooldown, damage, stock);
            this.image = '/assets/skills/skill01.png';

        }

        public getType() {
            return Skills.DoubleAttack.TYPE;
        }

    }
}