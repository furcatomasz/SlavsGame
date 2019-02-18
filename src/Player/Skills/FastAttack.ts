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
            this.effectEmitter = new Particles.FastAttack(game, this.player.mesh);
        }

        showAnimation(skillTime: number, cooldownTime: number) {
            const game = this.game;
            let self = this;
            let observer;
            this.showReloadInGUI(cooldownTime);

            if(self.player.inventory.weapon) {
                self.player.inventory.weapon.trailMesh.start();
            }
            self.player.runAnimationSkill(this.animationName, () => {
                if(self.player.inventory.weapon) {
                    self.player.inventory.weapon.trailMesh.visibility = 1;
                }
                self.isInUse = true;
                // self.effectEmitter.particleSystem.start();
                if(self.player.isControllable) {
                    game.client.socket.emit('attack', {
                        targetPoint: null
                    });
                }
            }, () => {
                self.isInUse = false;
                // self.effectEmitter.particleSystem.stop();
                setTimeout(() => {
                    if(self.player.inventory.weapon) {
                        self.player.inventory.weapon.trailMesh.visibility = 0;
                    }
                    self.player.inventory.weapon.trailMesh.stop();

                }, 1000);
            }, this.animationLoop, this.animationSpeed);

            setTimeout(() => {
                self.player.animation.stop();
            }, skillTime);

        }

    }
}
