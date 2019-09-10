import {Heal} from "./Heal";
import {StrongAttack} from "./StrongAttack";
import {Block} from "./Block";
import {FastAttack} from "./FastAttack";
import {ShieldAttack} from "./ShieldAttack";
import {Player} from "../../Characters/Player";

export class SkillsManager {

    public static getSkill(type: number, player: Player) {
        let skill = null;

        switch (type) {
            case Heal.TYPE:
                skill = new Heal(player);
                break;
            case StrongAttack.TYPE:
                skill = new StrongAttack(player);
                break;
            case Block.TYPE:
                skill = new Block(player);
                break;
            case FastAttack.TYPE:
                skill = new FastAttack(player);
                break;
            case ShieldAttack.TYPE:
                skill = new ShieldAttack(player);
                break;
        }

        return skill;
    }

}
