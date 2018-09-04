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

        protected registerHotKey(game: Game) {
            let self = this;

            let listener = function listener() {
                game.getScene().actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (event) {
                    if (event.sourceEvent.key == self.getType()) {
                        game.controller.attackPoint = null;

                        game.player.runAnimationSkill(self.animationName, function () {
                        }, function () {
                            game.player.mesh.skeleton.createAnimationRange('loopStrongAttack', 340, 350);
                            game.player.mesh.skeleton.beginAnimation('loopStrongAttack', true);
                        }, self.animationLoop, self.animationSpeed, false);

                        if (self.animationTime) {
                            setTimeout(function () {
                                game.player.runAnimationSkill('strongAttackB');
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