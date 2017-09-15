/// <reference path="../AbstractCharacter.ts"/>

abstract class Monster extends AbstractCharacter {

    protected visibilityArea: BABYLON.Mesh;
    protected target: string;
    protected visibilityAreaSize: number;
    protected attackAreaSize: number;


    constructor(name: string, game: Game) {
        let attackArea = BABYLON.MeshBuilder.CreateBox('enemy_attackArea', {
            width: this.attackAreaSize,
            height: 0.1,
            size: this.attackAreaSize
        }, game.getScene());
        attackArea.parent = this.mesh;
        attackArea.visibility = 0;
        this.attackArea = attackArea;

        let visivilityArea = BABYLON.MeshBuilder.CreateBox('enemy_visivilityArea', {
            width: this.visibilityAreaSize,
            height: 0.1,
            size: this.visibilityAreaSize
        }, game.getScene());
        visivilityArea.parent = this.mesh;
        visivilityArea.visibility = 0;
        visivilityArea.isPickable = false;

        this.visibilityArea = visivilityArea;

        game.enemies[this.id] = this;
        this.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND, true);
        this.mesh.isPickable = false;
        this.bloodParticles = new Particles.Blood(game, this.mesh).particleSystem;

        super(name, game);

        this.registerActions();
    }

    public emitPosition() {
        if (this.game.client.socket) {
            this.game.client.socket.emit('updateEnemy', {
                sceneType: this.game.sceneManager.getType(),
                enemyKey: this.id,
                position: this.mesh.position,
                rotation: this.mesh.rotationQuaternion,
                target: this.target
            });
        }
    }

    public removeFromWorld() {
        this.game.client.socket.emit('enemyKill', this.id);
        let self = this;
        self.mesh.dispose();
    }

    protected registerActions() {
        let self = this;
        let monsterAttackIsActive = false;
        let walkSpeed = AbstractCharacter.WALK_SPEED * (self.statistics.getWalkSpeed() / 100);
        let playerMesh = this.game.player.mesh;
        this.visibilityArea.actionManager = new BABYLON.ActionManager(this.game.getScene());
        this.attackArea.actionManager = new BABYLON.ActionManager(this.game.getScene());
        this.mesh.actionManager = new BABYLON.ActionManager(this.game.getScene());

        ///on visibility collision enter
        this.visibilityArea.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
            parameter: playerMesh
        }, function () {
            self.target = self.game.player.id;
        }));

        ///on visibility collision exit
        this.visibilityArea.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
            parameter: playerMesh
        }, function () {
            self.target = null;
        }));

        ///on attack collision enter
        this.attackArea.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
            parameter: playerMesh
        }, function () {
            monsterAttackIsActive = true;
        }));

        ///on attack collision exit
        this.attackArea.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
            parameter: playerMesh
        }, function () {
            monsterAttackIsActive = false;
        }));

        this.game.getScene().registerBeforeRender(function() {
            if(self.game.controller.attackPoint && self.game.controller.attackPoint == self.attackArea) {
                self.game.player.runAnimationHit(AbstractCharacter.ANIMATION_ATTACK);
                self.game.controller.forward = false;
            }

            if(self.target) {
                self.mesh.lookAt(playerMesh.position);
                if(monsterAttackIsActive) {
                    self.runAnimationHit(AbstractCharacter.ANIMATION_ATTACK);
                    return;
                }
                self.mesh.translate(BABYLON.Axis.Z, -walkSpeed, BABYLON.Space.LOCAL);
                self.runAnimationWalk(true);
            }
        });
    }

    protected onHitEnd() {
        if (Game.randomNumber(1, 100) <= this.statistics.getHitChance()) {
            let guiHp = this.game.gui.playerBottomPanel.hpBar;
            let value = guiHp.value;

            guiHp.value = (value - this.statistics.getDamage());

            if (guiHp.value - this.statistics.getDamage() < 0) {
                this.game.getScene().stopAnimation(this.game.player.mesh.skeleton);
                this.game.player.mesh.skeleton.beginAnimation('death');
            }
        }

    }

}