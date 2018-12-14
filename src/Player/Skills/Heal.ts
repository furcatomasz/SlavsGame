namespace Character.Skills {
    export class Heal extends Character.Skills.AbstractSkill {
        static TYPE = 5;

        public getType() {
            return Character.Skills.Heal.TYPE;
        }

        protected registerDefaults(game: Game) {
            this.image = 'assets/skills/heal.png';
            this.name = 'Heal';
            this.animationName = AbstractCharacter.ANIMATION_STAND_WEAPON;
            this.animationSpeed = 2;
            this.animationTime = 0;
            this.animationLoop = true;
            this.effectEmitter = new Particles.Heal(game, this.player.mesh);
        }

        showAnimation(skillTime: number, cooldownTime: number) {
            const game = this.game;
            let self = this;
            this.showReloadInGUI(cooldownTime);

            let alpha = 0;
            let animateFunction = () => {
                self.effectEmitter.particleSystem.emitter.position.x = 2 * Math.cos(alpha);
                self.effectEmitter.particleSystem.emitter.position.y = 1;
                self.effectEmitter.particleSystem.emitter.position.z = 2 * Math.sin(alpha);

                alpha += 0.24 * game.getScene().getAnimationRatio();
            };

            self.player.runAnimationSkill(self.animationName, () => {
                self.effectEmitter.particleSystem.start();
                game.getScene().registerBeforeRender(animateFunction);
                self.isInUse = true;
            }, null, self.animationLoop, self.animationSpeed);

            setTimeout(() => {
                self.player.animation.stop();
                self.effectEmitter.particleSystem.stop();
                game.getScene().unregisterBeforeRender(animateFunction);
                self.isInUse = false;
            }, skillTime);

        }

    }
}
