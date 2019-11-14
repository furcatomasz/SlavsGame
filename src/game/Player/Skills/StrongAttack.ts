import {Game} from "../../Game";
import {AbstractSkill} from "./AbstractSkill";

export class StrongAttack extends AbstractSkill {
    static TYPE = 1;

    public getType() {
        return StrongAttack.TYPE;
    }

    protected registerDefaults(game: Game) {
        this.image = 'assets/skills/strongAttack.png';
        this.name = 'Block';
        this.animationName = 'strongAttackA';
        this.animationSpeed = 1;
        this.animationTime = 2000;
        this.animationLoop = false;
    }

    public showAnimation(skillTime: number, cooldownTime: number) {
        const game = this.game;
        let self = this;
        let observer;
        this.showReloadInGUI(cooldownTime);

        self.player.runAnimationSkill(this.animationName, () => {
            self.isInUse = true;
        }, () => {
            self.player.mesh.skeleton.beginAnimation('loopStrongAttack', true);
        }, this.animationLoop, this.animationSpeed, false);

        if (self.player.inventory.weapon) {
            self.player.inventory.weapon.trailMesh.start();
        }
        setTimeout(() => {
            if (self.player.inventory.weapon) {
                self.player.inventory.weapon.trailMesh.visibility = 1;
            }
            self.player.runAnimationSkill('strongAttackB', null, () => {
                self.isInUse = false;
                setTimeout(() => {
                    if (self.player.inventory.weapon) {
                        self.player.inventory.weapon.trailMesh.visibility = 0;
                        self.player.inventory.weapon.trailMesh.stop();
                    }

                }, 1000);
            });
            if (self.player.isControllable) {
                game.socketClient.socket.emit('attack', {
                    targetPoint: null
                });
            }
        }, skillTime);
    }

}
