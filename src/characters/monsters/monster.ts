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
    }

    public createGUI() {
        if (this.guiPanel) {
            this.game.sceneManager.guiTexture.removeControl(this.guiPanel);
        }

        let monsterPanel = new BABYLON.GUI.StackPanel();
        monsterPanel.width = "25%";
        monsterPanel.top = 10;
        monsterPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.guiPanel = monsterPanel;
        this.game.sceneManager.guiTexture.addControl(monsterPanel);

        let hpSlider = new BABYLON.GUI.Slider();
        hpSlider.minimum = 0;
        hpSlider.maximum = this.statistics.getHpMax();
        hpSlider.value = this.statistics.getHp();
        hpSlider.width = "100%";
        hpSlider.height = "10px";
        hpSlider.thumbWidth = 0;
        hpSlider.barOffset = 0;
        hpSlider.background = 'black';
        hpSlider.color = "red";
        hpSlider.borderColor = 'black';
        this.guiHp = hpSlider;

        monsterPanel.addControl(hpSlider);
    }

    public emitPosition() {
        if (this.game.client.socket) {
            this.game.client.socket.emit('updateEnemy', {
                enemyKey: this.id,
                position: this.mesh.position,
                rotation: this.mesh.rotationQuaternion,
                target: this.target
            });
        }
    }

    public removeFromWorld() {
        this.game.getScene().unregisterAfterRender(this.afterRender);
        let self = this;
        self.visibilityArea.dispose();
        self.attackArea.dispose();
        self.mesh.dispose();
    }

    protected registerFunctionAfterRender() {
        let self = this;
        let walkSpeed = AbstractCharacter.WALK_SPEED * (self.statistics.getWalkSpeed() / 100);
        let playerMesh = self.game.player.mesh;

        this.afterRender = function () {
            if (self.game.player && self.game.getScene().isActiveMesh(self.mesh) && (!self.target || self.target == self.game.player.id)) {

                if (self.visibilityArea.intersectsMesh(playerMesh, false)) {
                    self.mesh.lookAt(playerMesh.position);
                    self.target = self.game.player.id;

                    if (self.attackArea.intersectsMesh(playerMesh, false)) {
                        self.runAnimationHit();
                    } else {
                        self.mesh.translate(BABYLON.Axis.Z, -walkSpeed, BABYLON.Space.LOCAL);
                        self.runAnimationWalk(true);
                    }
                } else {
                    if (self.target) {
                        self.target = null;
                        self.runAnimationWalk(true);
                    }
                }
            }
        }
    }

    protected onHitEnd() {
        if (Game.randomNumber(1, 100) <= this.statistics.getHitChance()) {

            // if (!this.game.player.sfxHit.isPlaying) {
            //     this.game.player.sfxHit.setVolume(2);
            //     this.game.player.sfxHit.play();
            // }

            this.game.player.bloodParticles.start();
            let value = this.game.player.guiHp.value;
            this.game.player.guiHp.value = (value - this.statistics.getDamage());

            if (this.game.player.guiHp.value - this.statistics.getDamage() < 0) {
                alert('Padłeś');
                window.location.reload();
            }
        }

    }

}