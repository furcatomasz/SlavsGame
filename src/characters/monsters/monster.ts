/// <reference path="../AbstractCharacter.ts"/>

class Monster extends AbstractCharacter {

    protected visibilityArea: BABYLON.Mesh;
    protected target: string;
    protected experienceToWin: number;

    constructor(game:Game, serverKey: number, serverData:Array) {
        let meshName = serverData.meshName;
        let mesh = game.factories['worm'].createInstance(meshName, true);

        mesh.visibility = true;
        mesh.position = new BABYLON.Vector3(serverData.position.x, serverData.position.y, serverData.position.z);
        this.id = serverKey;
        this.mesh = mesh;
        this.statistics = serverKey.statistics;
        game.enemies[this.id] = this;
        this.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND, true);
        this.bloodParticles = new Particles.Blood(game, this.mesh).particleSystem;

        super(name, game);

        this.registerActions();

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
                game.controller.targetPoint = null;
                game.controller.ball.visibility = 0;
                game.client.socket.emit('attack', {
                    attack: true,
                    targetPoint: self.game.controller.attackPoint.position,
                    rotation: self.game.controller.attackPoint.rotation,
                });
            }));

    }

    public runAnimationWalk():void {
        let self = this;
        let loopAnimation = this.isControllable;
        let skeleton = this.mesh.skeleton;

        if (!this.animation && skeleton) {
            self.animation = skeleton.beginAnimation('Walk', loopAnimation, 1, function () {
                skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                self.animation = null;
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
        //let walkSpeed = AbstractCharacter.WALK_SPEED * (self.statistics.getWalkSpeed() / 100);
        let walkSpeed = 8;
        let playerMesh = this.game.player.mesh;
        this.mesh.actionManager = new BABYLON.ActionManager(this.game.getScene());

        ///on attack collision enter
        //this.attackArea.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
        //    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
        //    parameter: playerMesh
        //}, function () {
        //    monsterAttackIsActive = true;
        //}));
        //
        /////on attack collision exit
        //this.attackArea.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
        //    trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
        //    parameter: playerMesh
        //}, function () {
        //    monsterAttackIsActive = false;
        //}));
        //
        //
        /////MONSTER TO ATTACK
        //let monsterToAttackKey = null;
        //let monsterToAttackListener = function listener() {
        //    if(self.statistics.getHp() > 0) {
        //        self.game.gui.characterTopHp.showHpCharacter(self);
        //        self.bloodParticles.start();
        //        let newValue = self.statistics.getHp() - self.game.player.statistics.getDamage();
        //        self.statistics.hp = (newValue);
        //        self.game.gui.characterTopHp.hpBar.value = newValue;
        //        if (newValue <= 0) {
        //            self.removeFromWorld();
        //            self.game.controller.attackPoint = null;
        //            document.removeEventListener(Events.MONSTER_TO_ATTACK, monsterToAttackListener);
        //        }
        //    }
        //};
        //this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
        //    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
        //    parameter: this.game.player.attackArea
        //}, function () {
        //    document.addEventListener(Events.MONSTER_TO_ATTACK, monsterToAttackListener);
        //}));
        //
        //this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
        //    trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
        //    parameter: this.game.player.attackArea
        //}, function () {
        //    document.removeEventListener(Events.MONSTER_TO_ATTACK, monsterToAttackListener);
        //}));
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