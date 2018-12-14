namespace Character.Skills {
    export class SkillsManager {

        public static getSkill(type: number, player: Player) {
            let skill = null;

            switch (type) {
                case Character.Skills.Heal.TYPE:
                    skill = new Character.Skills.Heal(player);
                    break;
                case Character.Skills.StrongAttack.TYPE:
                    skill = new Character.Skills.StrongAttack(player);
                    break;
                case Character.Skills.Block.TYPE:
                    skill = new Character.Skills.Block(player);
                    break;
                case Character.Skills.FastAttack.TYPE:
                    skill = new Character.Skills.FastAttack(player);
                    break;
                case Character.Skills.ShieldAttack.TYPE:
                    skill = new Character.Skills.ShieldAttack(player);
                    break;
            }

            return skill;
        }

    }
}
