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
                    skill = new Character.Skills.DoubleAttack();
                    break;
                case Character.Skills.Tornado.TYPE:
                    skill = new Character.Skills.Tornado();
                    break;
            }

            return skill;
        }

    }
}