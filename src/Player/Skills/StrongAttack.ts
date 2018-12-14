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

        public showAnimation(skillTime: number, cooldownTime: number) {
            const game = this.game;
            let self = this;
            let observer;
            this.showReloadInGUI(cooldownTime);

            self.player.runAnimationSkill(this.animationName, () => {
                self.isInUse = true;
            }, () => {
                self.player.mesh.skeleton.beginAnimation('loopStrongAttack', true);
            }, this.animationLoop, this.animationSpeed, false);

            if(self.player.inventory.weapon) {
                observer = game.getScene().onBeforeRenderObservable.add(self.player.inventory.weapon.trailMesh.update);
            }
            setTimeout(() => {
                if(self.player.inventory.weapon) {
                    self.player.inventory.weapon.trailMesh.visibility = 1;
                }
                self.player.runAnimationSkill('strongAttackB', null, () => {
                    self.isInUse = false;
                    setTimeout(() => {
                        if(self.player.inventory.weapon) {
                            self.player.inventory.weapon.trailMesh.visibility = 0;
                        }
                        game.getScene().onBeforeRenderObservable.remove(observer);

                    }, 1000);
                });
                if(self.player.isControllable) {
                    game.client.socket.emit('attack', {
                        targetPoint: null
                    });
                }
            }, skillTime);
        }

    }
}
