import {AbstractSkill} from "./AbstractSkill";
import {Game} from "../../Game";
import {AbstractCharacter} from "../../Characters/AbstractCharacter";
import {ShieldAttack as ShieldAttackParticle} from "../../Particles/Skills/ShieldAttack";

export class ShieldAttack extends AbstractSkill {
    static TYPE = 4;

    public getType() {
        return ShieldAttack.TYPE;
    }

    protected registerDefaults(game: Game) {
        this.image = 'assets/skills/shieldAttack.png';
        this.name = 'Shield attack';
        this.animationName = AbstractCharacter.ANIMATION_SKILL_01;
        this.animationSpeed = 1;
        this.effectEmitter = new ShieldAttackParticle(game, this.player.mesh);
    }

    showAnimation(skillTime: number, cooldownTime: number) {
        const game = this.game;
        let self = this;
        this.showReloadInGUI(cooldownTime);

        self.player.runAnimationSkill(this.animationName, () => {
            self.isInUse = true;
            self.effectEmitter.particleSystem.start();
            if (self.player.isControllable) {
                game.socketClient.socket.emit('attack', {
                    targetPoint: null
                });
            }
        }, () => {
            self.isInUse = false;
            self.effectEmitter.particleSystem.stop();
        }, this.animationLoop, this.animationSpeed);

        setTimeout(() => {
            self.player.animation.stop();
        }, skillTime);

    }
}
