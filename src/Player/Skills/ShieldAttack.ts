namespace Character.Skills {
    export class ShieldAttack extends Character.Skills.AbstractSkill {
        static TYPE = 4;

        public getType() {
            return Character.Skills.ShieldAttack.TYPE;
        }

        protected registerDefaults(game: Game) {
            this.image = 'assets/skills/shieldAttack.png';
            this.name = 'Shield attack';
            this.animationName = AbstractCharacter.ANIMATION_SKILL_01;
            this.animationSpeed = 1;

            let self = this;
            let listener = function listener() {
                let effectEmitter = new Particles.ShieldAttack(game, game.player.mesh);
                self.effectEmitter = effectEmitter;

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }

        showAnimation(skillTime: number, cooldownTime: number) {
            const game = this.game;
            let self = this;
            this.showReloadInGUI(cooldownTime);

            game.player.runAnimationSkill(this.animationName, () => {
                self.isInUse = true;
                self.effectEmitter.particleSystem.start();
                game.client.socket.emit('attack', {
                    targetPoint: null
                });
            }, () => {
                self.isInUse = false;
                self.effectEmitter.particleSystem.stop();
            }, this.animationLoop, this.animationSpeed);

            setTimeout(() => {
                game.player.animation.stop();
            }, skillTime);

        }
    }
}
