/// <reference path="characters/character.ts"/>
/// <reference path="game.ts"/>

class Player extends Character {

    public guiExp: BABYLON.GUI.Slider;
    public walkSmoke: BABYLON.ParticleSystem;

    public constructor(game:Game, id, name, registerMoving: boolean) {
        this.id = id;
        this.name = name;
        this.hp = 100;
        this.attackSpeed = 100;
        this.walkSpeed = 100;
        this.damage = 10;
        this.blockChance = 50;
        this.isControllable = registerMoving;

        this.sfxWalk = new BABYLON.Sound("CharacterWalk", "/babel/Characters/Warrior/walk.wav", game.getScene(), null, { loop: true, autoplay: false });
        //this.sfxHit = new BABYLON.Sound("CharacterHit", "/babel/Characters/Warrior/hit.wav", game.getScene(), null, { loop: false, autoplay: false });
        this.sfxHit = new BABYLON.Sound("CharacterHit", "/", game.getScene(), null, { loop: false, autoplay: false });

        let mesh = game.characters['player'].instance('Warrior', true);
        mesh.position = new BABYLON.Vector3(3, 0.1, 0);

        this.mesh = mesh;
        this.game = game;

        this.createItems();
        //this.mount(this.items.shield, 'shield.bone');

        this.guiCharacterName = new BABYLON.GUI.TextBlock();
        this.guiCharacterName.text = this.name;
        this.guiCharacterName.paddingTop = -85;
        game.sceneManager.guiTexture.addControl(this.guiCharacterName);
        this.guiCharacterName.linkWithMesh(this.mesh);

        if(this.isControllable) {
            this.mesh.isPickable = false;
            let playerLight = new BABYLON.SpotLight("playerLight", BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, -1, 0), 1.2, 16, game.getScene());
            playerLight.diffuse = new BABYLON.Color3(1, 1, 1);
            playerLight.specular = new BABYLON.Color3(1, 1, 1);
            playerLight.position.y = 64;

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
        let walkSpeed = Character.WALK_SPEED * (this.walkSpeed / 100);
        let game = this.game;
        let mesh = this.mesh;

        if (game.controller.left) {
            mesh.rotate(BABYLON.Axis.Y, -Character.ROTATION_SPEED, BABYLON.Space.LOCAL);
            this.emitPosition();
        }

        if (game.controller.right) {
            mesh.rotate(BABYLON.Axis.Y, Character.ROTATION_SPEED, BABYLON.Space.LOCAL);
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

        if(this.attackAnimation && !this.attackHit) {
            this.attackHit = true;
            for (var i = 0; i < game.enemies.length; i++) {
                var enemy = game.enemies[i];
                let enemyMesh = enemy.mesh;
                if (this.attackArea.intersectsMesh(enemyMesh, false)) {
                    setTimeout(function () {
                        if (!enemy.sfxHit.isPlaying) {
                            enemy.sfxHit.setVolume(2);
                            enemy.sfxHit.play();
                        }

                        enemy.createGUI();
                        enemy.bloodParticles.start();
                        let newValue = enemy.hp - self.damage;
                        enemy.hp = (newValue);
                        enemy.guiHp.value = newValue;

                        if (newValue <= 0) {
                            enemy.removeFromWorld();
                        }
                    }, 300);
                }
            }
        }

        return this;
    }

    protected envCollisions() {
        let game = this.game;
        for (var i = 0; i < game.sceneManager.environment.trees.length; i++) {
            var sceneMesh = game.sceneManager.environment.trees[i];
            if (this.mesh.intersectsMesh(sceneMesh, true)) {
                game.controller.forward = false;
                game.controller.back = false;
            }
        }

        return this;
    }

    public removeFromWorld() {
        this.game.getScene().unregisterAfterRender(this.afterRender);
        this.mesh.dispose();
        this.items.weapon.mesh.dispose();
        //this.items.shield.mesh.dispose();
        this.game.sceneManager.guiTexture.removeControl(this.guiCharacterName);

    }


    protected registerFunctionAfterRender() {
        let self = this;
        this.afterRender = function() {
            self.weaponCollisions().envCollisions();
            if (self.isControllable) {
                self.registerMoving();
                self.game.getScene().activeCamera.position = self.mesh.position;
                self.game.getScene().lights[1].position.x = self.mesh.position.x;
                self.game.getScene().lights[1].position.z = self.mesh.position.z;
            }
        }
    }

    protected onHitStart() {
        this.items.weapon.sfxHit.play(0.3);
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