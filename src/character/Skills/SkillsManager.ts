namespace Character.Skills {
    export class SkillsManager {

        protected game:Game;

        constructor(game:Game) {
            this.game = game;
        }

        /**
         * @param type
         */
        public getSkill(type: number) {
            let skill = null;
            switch (type) {
                case Character.Skills.DoubleAttack.TYPE:
                    skill = new Character.Skills.DoubleAttack(this.game);
                    break;
                case Character.Skills.Tornado.TYPE:
                    skill = new Character.Skills.Tornado(this.game);
                    break;
                case Character.Skills.Heal.TYPE:
                    skill = new Character.Skills.Heal(this.game);
                    break;
            }

            return skill;
        }

    }
}