namespace Character.Skills {
    export class Tornado extends Character.Skills.AbstractSkill {
        static TYPE = 2;

        public getType() {
            return Character.Skills.Tornado.TYPE;
        }


        protected registerDefaults() {
            this.image = '/assets/skills/skill02.png';
            this.name = 'Tornado';
        }

        protected registerHotKey(game: Game) {
            let listener = function listener() {
                let effectEmitter = new Particles.Tornado(game, game.player.mesh);
                effectEmitter.initParticleSystem();

                game.getScene().actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (event) {
                    if (event.sourceEvent.key == 2) {
                        game.controller.attackPoint = null;

                        game.player.runAnimationHit(AbstractCharacter.ANIMATION_SKILL_02, function () {
                            //effectEmitter.particleSystem.start();
                        }, function () {
                            //effectEmitter.particleSystem.stop();
                        });3
                    }
                }));

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }
    }
}