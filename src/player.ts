/// <reference path="characters/character.ts"/>
/// <reference path="game.ts"/>

class Player extends Character {

    public constructor(game:Game, id, name, registerMoving: boolean) {
        this.id = id;
        this.name = name;
        this.hp = 100;
        this.attackSpeed = 100;
        this.walkSpeed = 100;
        this.damage = 5;
        this.blockChance = 50;
        this.isControllable = registerMoving;

        let mesh = game.characters['player'].instance('Warrior', true);
        mesh.position = new BABYLON.Vector3(3, 0.1, 0);

        this.mesh = mesh;
        this.game = game;

        this.createItems();
        this.mount(this.items.weapon, 'weapon.bone');
        this.mount(this.items.shield, 'shield.bone');

        super(name, game);
    }

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

        if(this.animation) {
            this.animation.stop();
        }
    }


    protected weaponCollisions() {
        let game = this.game;
        for (var i = 0; i < game.enemies.length; i++) {
            var enemy = game.enemies[i];
            let enemyMesh = enemy.mesh;
            if (this.items.weapon.intersectsMesh(enemyMesh, true)) {
                enemyMesh.material.emissiveColor = new BABYLON.Color4(1, 0, 0, 1);

                var value = game.guiElements.hpBarEnemy.getValue();
                game.guiElements.hpBarEnemy.updateValue(value-1);

                if(value-1 < 0) {
                    game.scene.unregisterAfterRender(enemy.afterRender);
                    enemy.removeFromWorld();
                }

            } else {
                enemyMesh.material.emissiveColor = new BABYLON.Color4(0, 0, 0, 0);
            }

        }

        return this;
    }

    protected envCollisions() {
        let game = this.game;
            for (var i = 0; i < game.getScene().meshes.length; i++) {
                var sceneMesh = game.getScene().meshes[i];
                var meshName = game.getScene().meshes[i]['name'];

                if (meshName.search("choinka") >= 0 || meshName.search("Fireplace") >= 0 || meshName.search("Log") >= 0) {
                    if (this.mesh.intersectsMesh(sceneMesh, true)) {
                        game.controller.forward = false;
                        game.controller.back = false;
                    }
                }
        }

        return this;
    }

    public removeFromWorld() {
        this.game.scene.unregisterAfterRender(this.afterRender);
        this.mesh.dispose();
        this.items.weapon.dispose();
        this.items.weapon.setEnabled(false);
    }


    protected registerFunctionAfterRender() {
        let self = this;
        this.afterRender = function() {
            self.weaponCollisions().envCollisions();
            if (self.isControllable) {
                self.registerMoving();
                self.game.getScene().activeCamera.position = self.mesh.position;
                self.game.getScene().lights[1].position.x = self.mesh.position.x;
                self.game.getScene().lights[1].position.y = self.mesh.position.y+44;
                self.game.getScene().lights[1].position.z = self.mesh.position.z;


            }
        }
    }
}