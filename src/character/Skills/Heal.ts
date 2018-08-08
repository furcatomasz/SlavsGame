namespace Character.Skills {
    export class Heal extends Character.Skills.AbstractSkill {
        static TYPE = 3;

        public getType() {
            return Character.Skills.Heal.TYPE;
        }


        protected registerDefaults() {
            this.image = 'assets/skills/skill01.png';
            this.name = 'Heal';
        }

        protected registerHotKey(game: Game) {
            let listener = function listener() {
                let effectEmitter = new Particles.Heal(game, game.player.mesh);
                console.log(effectEmitter);
                effectEmitter.initParticleSystem();

                game.getScene().actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (event) {
                    if (event.sourceEvent.key == 3) {
                        game.controller.attackPoint = null;

                        game.player.runAnimationSpecialHit(AbstractCharacter.ANIMATION_STAND_WEAPON, function () {
                            effectEmitter.particleSystem.start();
                        }, function () {
                        }, false, 2);
                    }
                }));

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }

    }
}