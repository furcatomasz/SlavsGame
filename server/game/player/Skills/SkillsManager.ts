namespace Skills {
    export class SkillsManager {

        /**
         *
         * @param type
         * @returns {Skills.AbstractSkill}
         */
        public static getSkill(type: number) {
            let skill = null;
            switch (type) {
                case Skills.DoubleAttack.TYPE:
                    skill = new Skills.DoubleAttack();
                    break;
                case Skills.Tornado.TYPE:
                    skill = new Skills.Tornado();
                    break;
            }

            return skill;
        }

    }
}