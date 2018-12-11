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
            this.animationSpeed = 1.6;
            this.animationLoop = true;
            this.animationTime = 1000;

            let self = this;
            let listener = function listener() {
                let effectEmitter = new Particles.FastAttack(game, game.player.mesh);
                self.effectEmitter = effectEmitter;

                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }

        showAnimation(skillTime: number, cooldownTime: number) {
            const game = this.game;
            let self = this;
            let observer;
            this.showReloadInGUI(cooldownTime);

            observer = game.getScene().onBeforeRenderObservable.add(game.player.inventory.weapon.trailMesh.update);
            game.player.runAnimationSkill(this.animationName, () => {
                game.player.inventory.weapon.trailMesh.visibility = 1;
                self.isInUse = true;
                // self.effectEmitter.particleSystem.start();
                game.client.socket.emit('attack', {
                    targetPoint: null
                });
            }, () => {
                self.isInUse = false;
                // self.effectEmitter.particleSystem.stop();
                setTimeout(() => {
                    game.player.inventory.weapon.trailMesh.visibility = 0;
                    game.getScene().onBeforeRenderObservable.remove(observer);

                }, 1000);
            }, this.animationLoop, this.animationSpeed);

            setTimeout(() => {
                game.player.animation.stop();
            }, skillTime);

        }

    }
}
