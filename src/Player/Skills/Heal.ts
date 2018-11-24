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

            let self = this;
            let listener = function listener() {
                let effectEmitter = new Particles.Heal(game, game.player.mesh);
                self.effectEmitter = effectEmitter;

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);


        }

        showAnimation(skillTime: number, cooldownTime: number) {
            const game = this.game;
            let self = this;
            this.showReloadInGUI(cooldownTime);

            let alpha = 0;
            let animateFunction = function () {
                self.effectEmitter.particleSystem.emitter.position.x = 2 * Math.cos(alpha);
                self.effectEmitter.particleSystem.emitter.position.y = 1;
                self.effectEmitter.particleSystem.emitter.position.z = 2 * Math.sin(alpha);

                alpha += 0.24 * game.getScene().getAnimationRatio();
            };

            game.player.runAnimationSkill(self.animationName, function () {
                self.effectEmitter.particleSystem.start();
                game.getScene().registerBeforeRender(animateFunction);
            }, function () {
                self.effectEmitter.particleSystem.stop();
                game.getScene().unregisterBeforeRender(animateFunction);
            }, self.animationLoop, self.animationSpeed);

            if(self.animationTime) {
                setTimeout(function() {
                    game.player.animation.stop();
                }, self.animationTime);
            }

        }

    }
}
