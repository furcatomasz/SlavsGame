/// <reference path="../AbstractCharacter.ts"/>

class Monster extends AbstractCharacter {

    protected target:string;

    constructor(game:Game, serverKey:number, serverData:Array) {
        let meshName = serverData.meshName;
        let mesh = game.factories['worm'].createInstance(meshName, true);

        mesh.visibility = true;
        mesh.position = new BABYLON.Vector3(serverData.position.x, serverData.position.y, serverData.position.z);
        this.id = serverKey;
        this.mesh = mesh;
        this.statistics = serverData.statistics;
        game.enemies[this.id] = this;
        this.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND, true);
        this.bloodParticles = new Particles.Blood(game, this.mesh).particleSystem;

        super(name, game);

        this.mesh.outlineColor = new BABYLON.Color3(0.3, 0, 0);
        this.mesh.outlineWidth = 0.1;

        let self = this;
        this.mesh.actionManager = new BABYLON.ActionManager(this.game.getScene());
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
            function () {
                self.mesh.renderOutline = false;
                self.game.gui.characterTopHp.hideHpBar();
            }));

        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
            function () {
                self.mesh.renderOutline = true;
                self.game.gui.characterTopHp.showHpCharacter(self);
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
        this.mesh.dispose();
    }

}