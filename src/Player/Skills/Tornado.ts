namespace Character.Skills {
    export class Tornado extends Character.Skills.AbstractSkill {
        static TYPE = 3;

        public getType() {
            return Character.Skills.Tornado.TYPE;
        }

        protected registerDefaults(game: Game) {
            this.image = 'assets/skills/tornado.png';
            this.name = 'Tornado';
            this.animationName = AbstractCharacter.ANIMATION_SKILL_02;
            this.animationSpeed = 1.5;
            this.animationLoop = true;
            this.animationTime = 1000;

            let self = this;
            let listener = function listener() {
                let effectEmitter = new Particles.Tornado(game, game.player.mesh);
                effectEmitter.initParticleSystem();
                self.effectEmitter = effectEmitter;

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }

    }
}