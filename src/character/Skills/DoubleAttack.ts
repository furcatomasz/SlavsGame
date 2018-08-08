namespace Character.Skills {
    export class DoubleAttack extends Character.Skills.AbstractSkill {
        static TYPE = 1;

        public getType() {
            return Character.Skills.DoubleAttack.TYPE;
        }


        protected registerDefaults() {
            this.image = 'assets/skills/skill01.png';
            this.name = 'Double attack';
        }

        protected registerHotKey(game: Game) {
            let listener = function listener() {
                let effectEmitter = new Particles.DoubleAttack(game, game.player.mesh);
                effectEmitter.initParticleSystem();

                game.getScene().actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (event) {
                    if (event.sourceEvent.key == 1) {
                        game.controller.attackPoint = null;

                        game.player.runAnimationHit(AbstractCharacter.ANIMATION_SKILL_01, function () {
                            effectEmitter.particleSystem.start();
                        }, function () {
                            effectEmitter.particleSystem.stop();
                        });
                    }
                }));

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }

    }
}