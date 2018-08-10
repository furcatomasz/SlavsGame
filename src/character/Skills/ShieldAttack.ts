namespace Character.Skills {
    export class ShieldAttack extends Character.Skills.AbstractSkill {
        static TYPE = 4;

        public getType() {
            return Character.Skills.ShieldAttack.TYPE;
        }

        protected registerDefaults(game: Game) {
            this.image = 'assets/skills/shieldAttack.png';
            this.name = 'Shield attack';
            this.animationName = AbstractCharacter.ANIMATION_SKILL_01;
            this.animationSpeed = 1;

            let self = this;
            let listener = function listener() {
                let effectEmitter = new Particles.ShieldAttack(game, game.player.mesh);
                effectEmitter.initParticleSystem();
                self.effectEmitter = effectEmitter;

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }


    }
}