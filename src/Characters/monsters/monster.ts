class Monster extends AbstractCharacter {

    protected target: string;
    public intervalAttackRegisteredFunction;

    constructor(game: Game, serverKey: number, serverData: any) {
        super(serverData.name, game);

        this.statistics = serverData.statistics;
        this.id = serverKey;

        this.createBoxForMove(new BABYLON.Vector3(serverData.position.x, serverData.position.y, serverData.position.z));
        this.createMesh(serverData.type, serverData.meshName, new BABYLON.Vector3(serverData.scale, serverData.scale, serverData.scale));
        this.initSfx();
        this.registerActions();

        this.bloodParticles = new Particles.Blood(game, this.mesh).particleSystem;
        this.walkSmoke = WalkSmoke.getParticles(game.getScene(), 2, this.mesh);

        this.initPatricleSystemDamage();
    }

    private createMesh(factoryName, meshName, scale: BABYLON.Vector3) {
        const game = this.game;

        let mesh = game.factories[factoryName].createClone(meshName, true);
        mesh.rotation = new BABYLON.Vector3(0, Math.PI, 0);
        mesh.visibility = 1;
        mesh.isPickable = false;
        mesh.scaling = scale;
        mesh.skeleton.enableBlending(0.2);
        mesh.outlineColor = new BABYLON.Color3(0.3, 0, 0);
        mesh.outlineWidth = 0.1;
        mesh.parent = this.meshForMove;

        // game.sceneManager.options.addMeshToDynamicShadowGenerator(mesh);

        this.mesh = mesh;
    }

    private registerActions() {
        const game = this.game;
        let self = this;

        this.meshForMove.actionManager = new BABYLON.ActionManager(this.game.getScene());
        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
            function () {
                self.mesh.renderOutline = false;
                self.game.gui.characterTopHp.hideHpBar();
            }));

        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
            function () {
                self.mesh.renderOutline = true;
                self.game.gui.characterTopHp.showHpCharacter(self);
            }));

        let attackOnce = false;
        let intervalAttackFunction = () => {
            if (!game.player.isAttack) {
                game.client.socket.emit('attack', {
                    attack: self.id,
                    targetPoint: self.game.controller.attackPoint.position,
                    rotation: self.game.controller.attackPoint.rotation,
                });
            }
        };

        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger,
            pointer => {
                if(!game.player.isAnySkillIsInUse()) {
                    game.controller.attackPoint = pointer.meshUnderPointer;
                    game.controller.targetPoint = null;
                    attackOnce = false;

                    game.goToMeshFunction = GoToMeshAndRunAction.execute(game, self.meshForMove, () => {
                        game.player.runAnimationDeathOrStand();
                        game.player.unregisterMoveWithCollision(true);
                        setTimeout(() => {
                            intervalAttackFunction();

                            if (self.game.controller.attackPoint && !attackOnce) {
                                self.intervalAttackRegisteredFunction = setInterval(intervalAttackFunction, 100);
                            }
                        }, 250);
                    });
                }
            }));

        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger,
            () => {
                attackOnce = true;
                clearInterval(self.intervalAttackRegisteredFunction);
            }));

        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickOutTrigger,
            () => {
                clearInterval(self.intervalAttackRegisteredFunction);
                self.game.controller.attackPoint = null;
            }));

    }

    private initSfx() {
        const game = this.game;

        this.sfxHit = new BABYLON.Sound("CharacterHit", "assets/sounds/character/hit.mp3", game.getScene(), null, {
            loop: false,
            autoplay: false
        });

        this.sfxWalk = new BABYLON.Sound("CharacterHit", null, game.getScene(), null, {
            loop: false,
            autoplay: false
        });
    }

    public removeFromWorld() {
        if (this.intervalAttackRegisteredFunction) {
            clearInterval(this.intervalAttackRegisteredFunction);
        }
        this.meshForMove.dispose();
    }

    retrieveHit(updatedEnemy) {
        let self = this;

        if (this.statistics.hp != updatedEnemy.statistics.hp) {
            let damage = (this.statistics.hp - updatedEnemy.statistics.hp);
            this.statistics.hp = updatedEnemy.statistics.hp;

            setTimeout(() => {
                self.bloodParticles.start();
                self.showDamage(damage);
                setTimeout(() => {
                    self.bloodParticles.stop();
                }, 100);

                if (self.statistics.hp <= 0) {
                    self.isDeath = true;
                    self.animation.stop();
                    setTimeout(() => {
                        self.removeFromWorld();
                    }, 6000);
                }

                self.game.gui.characterTopHp.refreshPanel();
            }, 400);

        }
    }

    protected onWalkStart() {
        this.walkSmoke.start();
    }

    protected onWalkEnd() {
        this.walkSmoke.stop();
    }
}
