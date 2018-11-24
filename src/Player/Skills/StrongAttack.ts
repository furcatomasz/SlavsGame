namespace Character.Skills {
    export class StrongAttack extends Character.Skills.AbstractSkill {
        static TYPE = 1;

        public getType() {
            return Character.Skills.StrongAttack.TYPE;
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
            this.showReloadInGUI(cooldownTime);

            game.player.runAnimationSkill(this.animationName, () => {
                self.isInUse = true;
            }, () => {
                game.player.mesh.skeleton.beginAnimation('loopStrongAttack', true);
            }, this.animationLoop, this.animationSpeed, false);

            setTimeout(() => {
                game.player.runAnimationSkill('strongAttackB', null, () => {
                    self.isInUse = false;
                });
                game.client.socket.emit('attack', {
                    targetPoint: null
                });
            }, skillTime);
        }

    }
}
