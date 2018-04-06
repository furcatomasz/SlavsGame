/// <reference path="../AbstractCharacter.ts"/>

class Monster extends AbstractCharacter {

    protected target:string;
    public intervalAttackRegisteredFunction;

    constructor(game:Game, serverKey:number, serverData:Array) {
        let meshName = serverData.meshName;
        let factoryName = serverData.type;

        let mesh = game.factories[factoryName].createInstance(meshName, true);
        mesh.visibility = true;

        ///Create box mesh for moving
        this.createBoxForMove(game.getScene());
        this.meshForMove.position = new BABYLON.Vector3(serverData.position.x, serverData.position.y, serverData.position.z);
        mesh.parent = this.meshForMove;

        this.id = serverKey;
        this.mesh = mesh;
        this.name = serverData.name;
        this.statistics = serverData.statistics;
        game.enemies[this.id] = this;
        mesh.skeleton.enableBlending(0.2);
        this.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND, true);
        this.bloodParticles = new Particles.Blood(game, this.mesh).particleSystem;

        super(name, game);

        this.mesh.outlineColor = new BABYLON.Color3(0.3, 0, 0);
        this.mesh.outlineWidth = 0.1;
        this.mesh.isPickable = 1;

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

        let intervalAttackFunction = function () {
            game.client.socket.emit('attack', {
                attack: true,
                targetPoint: self.game.controller.attackPoint.position,
                rotation: self.game.controller.attackPoint.rotation,
            });
        };

        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger,
            function (pointer) {
            if(self.game.player.isAlive) {
                game.controller.attackPoint = pointer.meshUnderPointer.parent;
                game.controller.targetPoint = null;
                game.controller.ball.visibility = 0;
                self.intervalAttackRegisteredFunction = setInterval(intervalAttackFunction, 200);
                intervalAttackFunction();
            }
            }));

        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger,
            function (pointer) {
                clearInterval(self.intervalAttackRegisteredFunction);
                self.game.controller.attackPoint = null;
            }));

        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickOutTrigger,
            function (pointer) {
                clearInterval(self.intervalAttackRegisteredFunction);
                self.game.controller.attackPoint = null;
            }));

    }

    public runAnimationWalk():void {
        let self = this;
        let loopAnimation = this.isControllable;
        let skeleton = this.mesh.skeleton;

        if (!this.animation && skeleton) {
            self.animation = skeleton.beginAnimation(AbstractCharacter.ANIMATION_WALK, loopAnimation, 1, function () {
                skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                self.animation = null;
            });
        }
    }

    public removeFromWorld() {
        if(this.intervalAttackRegisteredFunction) {
            clearInterval(this.intervalAttackRegisteredFunction);
        }
        this.meshForMove.dispose();
    }

}