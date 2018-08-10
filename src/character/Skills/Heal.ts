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

    }
}