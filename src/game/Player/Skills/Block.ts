import {Game} from "../../Game";
import {AbstractSkill} from "./AbstractSkill";

export class Block extends AbstractSkill {
    static TYPE = 2;

    public getType() {
        return Block.TYPE;
    }

    protected registerDefaults(game: Game) {
        this.image = 'assets/skills/block.png';
        this.name = 'Block';
        this.animationName = 'blockA';
        this.animationSpeed = 1;
        this.animationTime = 0;
        this.animationLoop = false;
    }

    public showAnimation(skillTime: number, cooldownTime: number) {
        const game = this.game;
        let self = this;
        this.showReloadInGUI(cooldownTime);
        self.player.runAnimationSkill(this.animationName, () => {
            self.isInUse = true;
        }, () => {
            self.player.mesh.skeleton.beginAnimation('loopBlock', true);
        }, this.animationLoop, this.animationSpeed, false);

        setTimeout(() => {
            self.player.runAnimationSkill('blockB', null, () => {
                self.isInUse = false;
            });
        }, skillTime);
    }

}
