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
            this.showReloadInGUI(cooldownTime);

            game.player.runAnimationSkill(this.animationName, function () {
            }, function () {
                game.player.mesh.skeleton.createAnimationRange('loopStrongAttack', 340, 350);
                game.player.mesh.skeleton.beginAnimation('loopStrongAttack', true);
            }, this.animationLoop, this.animationSpeed, false);

            setTimeout(function () {
                game.player.runAnimationSkill('strongAttackB');
                game.client.socket.emit('attack', {
                    targetPoint: null
                });
            }, skillTime);
        }


    }
}