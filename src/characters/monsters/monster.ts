/// <reference path="../AbstractCharacter.ts"/>

abstract class Monster extends AbstractCharacter {

    protected visibilityArea: BABYLON.Mesh;
    protected target: string;
    protected visibilityAreaSize: number;
    protected attackAreaSize: number;
    protected experienceToWin: number;

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
        this.bloodParticles = new Particles.Blood(game, this.mesh).particleSystem;

        super(name, game);

        this.registerActions();

        let collider = Collisions.setCollider(game.getScene(), this.mesh, null, false);
        if(game.sceneManager.octree) {
            game.sceneManager.octree.dynamicContent.push(collider);
        }
        this.mesh.outlineColor = new BABYLON.Color3(0.3,0,0);
        this.mesh.outlineWidth = 0.1;

        let self = this;
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
            function () {
                self.mesh.renderOutline = false;
            }));

        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
            function () {
                self.mesh.renderOutline = true;
            }));

        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
            function (pointer) {
                game.controller.attackPoint = pointer.meshUnderPointer;
                self.game.player.mesh.lookAt(pointer.meshUnderPointer.position);
                game.controller.targetPoint = null;
                game.controller.ball.visibility = 0;
                game.player.runAnimationHit(AbstractCharacter.ANIMATION_ATTACK);
                game.controller.forward = false;
            }));

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
        let walkSpeed = 8;
        let playerMesh = this.game.player.mesh;
        this.visibilityArea.actionManager = new BABYLON.ActionManager(this.game.getScene());
        this.attackArea.actionManager = new BABYLON.ActionManager(this.game.getScene());
        this.mesh.actionManager = new BABYLON.ActionManager(this.game.getScene());

        var func = function() {
            if(self.target) {
                self.mesh.lookAt(playerMesh.position);
                if(monsterAttackIsActive) {
                    self.runAnimationHit(AbstractCharacter.ANIMATION_ATTACK);
                    return;
                }

                let rotation = self.mesh.rotation;
                if (self.mesh.rotationQuaternion) {
                    rotation = self.mesh.rotationQuaternion.toEulerAngles();
                }
                rotation.negate();
                let forwards = new BABYLON.Vector3(-parseFloat(Math.sin(rotation.y)) / walkSpeed, 0, -parseFloat(Math.cos(rotation.y)) / walkSpeed);

                self.mesh.moveWithCollisions(forwards);
                self.mesh.position.y = 0;
                self.runAnimationWalk(true);
            }
        };

        ///on visibility collision enter
        this.visibilityArea.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
            parameter: playerMesh
        }, function () {
            self.target = self.game.player.id;
            self.game.getScene().registerBeforeRender(func);

        }));

        ///on visibility collision exit
        this.visibilityArea.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
            parameter: playerMesh
        }, function () {
            self.target = null;
            self.game.getScene().unregisterBeforeRender(func);
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


        ///MONSTER TO ATTACK
        let monsterToAttackKey = null;
        let monsterToAttackListener = function listener() {
            if(self.statistics.getHp() > 0) {
                self.game.gui.characterTopHp.showHpCharacter(self);
                self.bloodParticles.start();
                let newValue = self.statistics.getHp() - self.game.player.statistics.getDamage();
                self.statistics.hp = (newValue);
                self.game.gui.characterTopHp.hpBar.value = newValue;
                if (newValue <= 0) {
                    self.removeFromWorld();
                    self.game.controller.attackPoint = null;
                    document.removeEventListener(Events.MONSTER_TO_ATTACK, monsterToAttackListener);
                }
            }
        };
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
            parameter: this.game.player.attackArea
        }, function () {
            document.addEventListener(Events.MONSTER_TO_ATTACK, monsterToAttackListener);
        }));

        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
            parameter: this.game.player.attackArea
        }, function () {
            document.removeEventListener(Events.MONSTER_TO_ATTACK, monsterToAttackListener);
        }));
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