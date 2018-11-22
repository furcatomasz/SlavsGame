namespace Character.Skills {
    export class FastAttack extends Character.Skills.AbstractSkill {
        static TYPE = 3;

        public getType() {
            return Character.Skills.FastAttack.TYPE;
        }

        protected registerDefaults(game: Game) {
            this.image = 'assets/skills/fastAttack.png';
            this.name = 'Fast attack';
            this.animationName = AbstractCharacter.ANIMATION_ATTACK_01;
            this.animationSpeed = 1.5;
            this.animationLoop = true;
            this.animationTime = 1000;

            let self = this;
            let listener = function listener() {
                let effectEmitter = new Particles.FastAttack(game, game.player.mesh);
                effectEmitter.initParticleSystem();
                self.effectEmitter = effectEmitter;

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }


    }
}