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
            this.animationTime = 0;
            this.animationLoop = false;
        }

        public showAnimation(skillTime: number, cooldownTime: number) {
            const game = this.game;
            this.showReloadInGUI(cooldownTime);
            game.player.runAnimationSkill(this.animationName, function () {
            }, function () {
                game.player.mesh.skeleton.createAnimationRange('loopBlock', 70, 80);
                game.player.mesh.skeleton.beginAnimation('loopBlock', true);
            }, this.animationLoop, this.animationSpeed, false);

            setTimeout(function () {
                game.player.runAnimationSkill('blockB');
            }, skillTime);
        }



    }
}