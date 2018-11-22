namespace Character.Skills {
    export class Heal extends Character.Skills.AbstractSkill {
        static TYPE = 1;

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
                effectEmitter.initParticleSystem();
                self.effectEmitter = effectEmitter;

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);


        }

        protected registerHotKey(game: Game) {
            let self = this;


            let alpha = 0;
            let animateFunction = function () {
                self.effectEmitter.particleSystem.emitter.position.x = 2 * Math.cos(alpha);
                self.effectEmitter.particleSystem.emitter.position.y = 1;
                self.effectEmitter.particleSystem.emitter.position.z = 2 * Math.sin(alpha);

                alpha += 0.24 * game.getScene().getAnimationRatio();
            };
            let listener = function listener() {
                game.getScene().actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (event) {
                    if (event.sourceEvent.key == self.getType()) {
                        game.controller.attackPoint = null;

                        game.player.runAnimationSkill(self.animationName, function () {
                            self.effectEmitter.particleSystem.start();
                            game.getScene().registerBeforeRender(animateFunction);
                            game.getScene().beginDirectAnimation(self.guiOverlay, [self.animationOverlay], 0, 30, false, 1, function() {
                                game.getScene().beginDirectAnimation(self.guiImage, [self.animationAlpha], 0, 30, false);
                            });

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
                }));

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }

    }
}