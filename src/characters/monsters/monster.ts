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
        let self = this;
        self.visibilityArea.dispose();
        self.attackArea.dispose();
        self.mesh.dispose();
    }

    protected registerActions() {
        let self = this;
        let attackIsActive = false;
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
            attackIsActive = true;
        }));

        ///on attack collision exit
        this.attackArea.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
            parameter: playerMesh
        }, function () {
            attackIsActive = false;
        }));

        ///on attack player collision enter
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
            parameter: playerMesh
        }, function () {
            console.log('test');
            if(self.game.controller.attackPoint == this.mesh) {
                self.game.player.runAnimationHit();
                self.game.controller.forward = false;
            }
        }));


        //TODO: finish optimilazation
        // ///on attack player collision exit
        // this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
        //     trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
        //     parameter: playerMesh
        // }, function () {
        //     if(self.game.controller.attackPoint == this.mesh) {
        //         self.game.controller.forward = true;
        //     }
        // }));


        // scene.registerBeforeRender(function () {
        //     if (self.game.player) {
        //         if (self.attackPoint) {
        //             if (self.game.player.mesh.intersectsMesh(self.attackPoint)) {
        //                 self.game.player.runAnimationHit();
        //                 self.game.controller.forward = false;
        //             } else {
        //                 self.game.controller.forward = true;
        //             }
        //         }
        //     }
        // });

        this.game.getScene().registerBeforeRender(function() {
            if(self.target) {
                if(attackIsActive) {
                    self.runAnimationHit();
                    return;
                }
                self.mesh.lookAt(playerMesh.position);
                self.mesh.translate(BABYLON.Axis.Z, -walkSpeed, BABYLON.Space.LOCAL);
                self.runAnimationWalk(true);
            }
        });
    }

    protected onHitEnd() {
        if (Game.randomNumber(1, 100) <= this.statistics.getHitChance()) {

            // if (!this.game.player.sfxHit.isPlaying) {
            //     this.game.player.sfxHit.setVolume(2);
            //     this.game.player.sfxHit.play();
            // }

            this.game.player.bloodParticles.start();
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