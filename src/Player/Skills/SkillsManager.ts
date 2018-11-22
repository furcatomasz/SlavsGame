namespace Character.Skills {
    export class SkillsManager {

        protected game:Game;

        constructor(game:Game) {
            this.game = game;
        }

        /**
         * @param Character.Skills.AbstractSkill
         */
        public getSkill(type: number) {
            let skill = null;
            switch (type) {
                // case Character.Skills.Tornado.TYPE:
                //     skill = new Character.Skills.Tornado(this.game);
                //     break;
                // case Character.Skills.Heal.TYPE:
                //     skill = new Character.Skills.Heal(this.game);
                //     break;
                case Character.Skills.StrongAttack.TYPE:
                    skill = new Character.Skills.StrongAttack(this.game);
                    break;
                case Character.Skills.Block.TYPE:
                    skill = new Character.Skills.Block(this.game);
                    break;
                case Character.Skills.FastAttack.TYPE:
                    skill = new Character.Skills.FastAttack(this.game);
                    break;
                case Character.Skills.ShieldAttack.TYPE:
                    skill = new Character.Skills.ShieldAttack(this.game);
                    break;
            }

            return skill;
        }

    }
}