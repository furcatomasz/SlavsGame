namespace Character.Skills {
    export class Block extends Character.Skills.AbstractSkill {
        static TYPE = 2;

        public getType() {
            return Character.Skills.Block.TYPE;
        }

        protected registerDefaults(game: Game) {
            this.image = 'assets/skills/block.png';
            this.name = 'Block';
            this.animationName = 'blockA';
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
                            console.log(game.player.mesh.skeleton);
                            game.player.mesh.skeleton.createAnimationRange('loopBlock', 70, 80);
                            game.player.mesh.skeleton.beginAnimation('loopBlock', true);
                        }, self.animationLoop, self.animationSpeed, false);

                        if (self.animationTime) {
                            setTimeout(function () {
                                game.player.runAnimationSkill('blockB');
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