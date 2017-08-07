/// <reference path="AbstractCharacter.ts"/>
/// <reference path="../game.ts"/>

class Player extends AbstractCharacter {

    public guiExp: BABYLON.GUI.Slider;
    public walkSmoke: BABYLON.ParticleSystem;
    public inventory: Character.Inventory;

    public constructor(game:Game, id, name, registerMoving: boolean) {
        this.id = id;
        this.name = name;

        this.statistics = new Attributes.CharacterStatistics(100, 100, 100, 10, 10, 125, 50, 100).setPlayer(this);
        this.isControllable = registerMoving;

        this.sfxWalk = new BABYLON.Sound("CharacterWalk", "/babel/Characters/Warrior/walk.wav", game.getScene(), null, { loop: true, autoplay: false });
        this.sfxHit = new BABYLON.Sound("CharacterHit", "/", game.getScene(), null, { loop: false, autoplay: false });

        let mesh = game.characters['player'].instance('Warrior', true);
        mesh.position = new BABYLON.Vector3(3, 0.1, 0);
        game.getScene().activeCamera.position = mesh.position;

        this.mesh = mesh;
        this.game = game;

        mesh.actionManager = new BABYLON.ActionManager(game.getScene());
        this.envCollisions();
        this.createItems();

        if(this.isControllable) {
            this.mesh.isPickable = false;

            let playerLight = new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 12, 0), game.getScene());
            playerLight.diffuse = new BABYLON.Color3(1, 1, 1);
            //playerLight.specular = new BABYLON.Color3(1, 1, 1);
            playerLight.intensity = 1;
            playerLight.range = 40;
            playerLight.parent = this.mesh;
            game.getScene().lights.push(playerLight);

            let characterBottomPanel = new BABYLON.GUI.StackPanel();
            characterBottomPanel.width = "50%";
            characterBottomPanel.top = -10;
            characterBottomPanel.verticalAlignment = 	BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            game.sceneManager.guiTexture.addControl(characterBottomPanel);
            this.guiPanel = characterBottomPanel;

            let hpSlider = new BABYLON.GUI.Slider();
            hpSlider.minimum = 0;
            hpSlider.maximum = 100;
            hpSlider.value = 90;
            hpSlider.width = "100%";
            hpSlider.height = "10px";
            hpSlider.thumbWidth = 0;
            hpSlider.barOffset = 0;
            hpSlider.background = 'black';
            hpSlider.color = "red";
            hpSlider.borderColor = 'black';
            this.guiHp = hpSlider;

            let expSlider = new BABYLON.GUI.Slider();
            expSlider.minimum = 0;
            expSlider.maximum = 100;
            expSlider.value = 5;
            expSlider.width = "100%";
            expSlider.height = "10px";
            expSlider.thumbWidth = 0;
            expSlider.barOffset = 0;
            expSlider.background = 'black';
            expSlider.color = "blue";
            expSlider.borderColor = 'black';

            characterBottomPanel.addControl(hpSlider);
            characterBottomPanel.addControl(expSlider);

            game.gui = new GUI.Main(game, this);

            let attackArea = BABYLON.MeshBuilder.CreateBox('player_attackArea', {
                width: 4,
                height: 0.1,
                size: 4
            }, game.getScene());
            attackArea.parent = this.mesh;
            attackArea.visibility = 0;
            attackArea.isPickable = false;

            this.attackArea = attackArea;
        }

        this.walkSmoke = new Particles.WalkSmoke(game, this.mesh).particleSystem;

        super(name, game);
    }

    /**
     * Moving events
     */
    protected registerMoving() {
        let walkSpeed = AbstractCharacter.WALK_SPEED * (this.statistics.getWalkSpeed() / 100);
        let game = this.game;
        let mesh = this.mesh;

        if (game.controller.left) {
            mesh.rotate(BABYLON.Axis.Y, -AbstractCharacter.ROTATION_SPEED, BABYLON.Space.LOCAL);
            this.emitPosition();
        }

        if (game.controller.right) {
            mesh.rotate(BABYLON.Axis.Y, AbstractCharacter.ROTATION_SPEED, BABYLON.Space.LOCAL);
            this.emitPosition();
        }

        if (game.controller.forward) {
            mesh.translate(BABYLON.Axis.Z, -walkSpeed, BABYLON.Space.LOCAL);
            this.runAnimationWalk(true);

            return;
        }
        if (game.controller.back) {
            mesh.translate(BABYLON.Axis.Z, walkSpeed, BABYLON.Space.LOCAL);
            this.runAnimationWalk(true);

            return;
        }

        ///stop move and start attack animation
        if(this.animation && !this.attackAnimation) {
            this.animation.stop();
        }
    }

    /**
     * Attack Collisions
     * 
     * @returns {Player}
     */
    protected weaponCollisions() {
        let game = this.game;
        let self = this;

        if(this.attackArea && this.attackAnimation && !this.attackHit) {
            this.attackHit = true;
            for (var i = 0; i < game.enemies.length; i++) {
                var enemy = game.enemies[i];
                let enemyMesh = enemy.mesh;
                if (this.attackArea.intersectsMesh(enemyMesh, false)) {
                    let animationEnemty = enemy;
                    setTimeout(function () {
                        if (!animationEnemty.sfxHit.isPlaying) {
                            animationEnemty.sfxHit.setVolume(2);
                            animationEnemty.sfxHit.play();
                        }

                        animationEnemty.createGUI();
                        animationEnemty.bloodParticles.start();
                        let newValue = animationEnemty.statistics.getHp() - self.statistics.getDamage();
                        animationEnemty.statistics.hp = (newValue);
                        animationEnemty.guiHp.value = newValue;

                        if (newValue <= 0) {
                            animationEnemty.removeFromWorld();
                            game.controller.attackPoint = null;
                        }
                    }, 300);
                }
            }
        }

        return this;
    }

    protected envCollisions() {
        let self = this;
        let game = this.game;

        for (var i = 0; i < game.sceneManager.environment.colliders.length; i++) {
            var sceneMesh = game.sceneManager.environment.colliders[i];
            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                {trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: sceneMesh},
                function () {
                    game.controller.targetPoint = null;
                    game.controller.ball.visibility = 0;
                    game.controller.forward = false;
                    self.mesh.translate(BABYLON.Axis.Z, 0.5, BABYLON.Space.LOCAL);
                    game.getScene().activeCamera.position = self.mesh.position;
                }));
        }

        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
            parameter: game.sceneManager.environment.entrace
        }, function () {
            self.mesh.position = new BABYLON.Vector3(3, 0.1, 0);
            return this;
        }));
    }

    public removeFromWorld() {
        this.game.getScene().unregisterAfterRender(this.afterRender);
        this.mesh.dispose();
        //this.items.weapon.mesh.dispose();
        //this.items.shield.mesh.dispose();
        this.game.sceneManager.guiTexture.removeControl(this.guiCharacterName);

    }


    protected registerFunctionAfterRender() {
        let self = this;
        this.afterRender = function() {
            if (self.isControllable) {
                self.weaponCollisions();
                self.registerMoving();
                if(self.game.controller.forward) {
                    self.game.getScene().activeCamera.position = self.mesh.position;
                }
            }
        }
    }

    public createItems() {
        this.inventory = new Character.Inventory(this.game, this);
    }

    protected onHitStart() {
        //this.items.weapon.sfxHit.play(0.3);
    };

    protected onHitEnd() {
        this.attackHit = false;
    };

    protected onWalkStart() {
        this.walkSmoke.start();
    }

    protected onWalkEnd() {
        this.walkSmoke.stop();
    }

}