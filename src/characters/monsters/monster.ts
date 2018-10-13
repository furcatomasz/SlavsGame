class Monster extends AbstractCharacter {

    protected target:string;
    public intervalAttackRegisteredFunction;

    constructor(game:Game, serverKey:number, serverData:Array) {
        let meshName = serverData.meshName;
        let factoryName = serverData.type;

        let mesh = game.factories[factoryName].createInstance(meshName, true);
        mesh.visibility = 1;
        mesh.isPickable = false;
        // game.sceneManager.options.addMeshToDynamicShadowGenerator(mesh);

        this.sfxHit = new BABYLON.Sound("CharacterHit", "assets/sounds/character/hit.mp3", game.getScene(), null, {
            loop: false,
            autoplay: false
        });

        this.sfxWalk = new BABYLON.Sound("CharacterHit", null, game.getScene(), null, {
            loop: false,
            autoplay: false
        });

        this.id = serverKey;
        this.mesh = mesh;
        this.statistics = serverData.statistics;
        game.enemies[this.id] = this;
        mesh.skeleton.enableBlending(0.2);
        this.bloodParticles = new Particles.Blood(game, this.mesh).particleSystem;
        mesh.scaling = new BABYLON.Vector3(serverData.scale, serverData.scale, serverData.scale);
        super(serverData.name, game);

        ///Create box mesh for moving
        this.createBoxForMove(game.getScene());
        this.meshForMove.position = new BABYLON.Vector3(serverData.position.x, serverData.position.y, serverData.position.z);
        mesh.parent = this.meshForMove;

        this.mesh.outlineColor = new BABYLON.Color3(0.3, 0, 0);
        this.mesh.outlineWidth = 0.1;

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

        let intervalAttackFunction = function () {
            if(!game.player.isAttack) {
                game.client.socket.emit('attack', {
                    attack: self.id,
                    targetPoint: self.game.controller.attackPoint.position,
                    rotation: self.game.controller.attackPoint.rotation,
                });
            }
        };

        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickDownTrigger,
            function (pointer) {
                if(self.game.player.isAlive) {
                    game.controller.attackPoint = pointer.meshUnderPointer;
                    game.controller.targetPoint = null;
                    game.controller.ball.visibility = 0;
                    self.intervalAttackRegisteredFunction = setInterval(intervalAttackFunction, 100);
                    intervalAttackFunction();
                }
            }));

        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickUpTrigger,
            function (pointer) {
                clearInterval(self.intervalAttackRegisteredFunction);
                self.game.controller.attackPoint = null;
            }));

        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickOutTrigger,
            function (pointer) {
                clearInterval(self.intervalAttackRegisteredFunction);
                self.game.controller.attackPoint = null;
            }));

        this.meshForMove.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
            function (pointer) {
                clearInterval(self.intervalAttackRegisteredFunction);
                self.game.controller.attackPoint = null;
            }));

    }

    public removeFromWorld() {
        if(this.intervalAttackRegisteredFunction) {
            clearInterval(this.intervalAttackRegisteredFunction);
        }
        this.meshForMove.dispose();
    }

}
