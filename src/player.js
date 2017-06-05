/// <reference path="characters/character.ts"/>
/// <reference path="game.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(game, id, name, registerMoving) {
        this.id = id;
        this.name = name;
        this.hp = 100;
        this.attackSpeed = 100;
        this.walkSpeed = 100;
        this.damage = 5;
        this.blockChance = 50;
        var mesh = game.characters['player'].clone();
        var skeleton = game.characters['player'].skeleton.clone();
        var material = game.characters['player'].material.clone();
        var self = this;
        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.material = material;
        mesh.position = new BABYLON.Vector3(3, 0.1, 0);
        mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 80,
            friction: 1,
            restitution: 0.0001
        }, game.scene);
        this.mesh = mesh;
        _super.call(this, name, game);
        this.createItems();
        this.mount(this.items.weapon, 'hand.R');
        game.scene.registerAfterRender(function () {
            self.weaponCollisions(game, self);
            if (registerMoving) {
                self.registerMoving();
            }
        });
    }
    Player.prototype.registerMoving = function () {
        var walkSpeed = Character.WALK_SPEED * (this.walkSpeed / 100);
        var game = this.game;
        var mesh = this.mesh;
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
        }
        if (game.controller.back) {
            mesh.translate(BABYLON.Axis.Z, walkSpeed, BABYLON.Space.LOCAL);
            this.runAnimationWalk(true);
        }
    };
    Player.prototype.weaponCollisions = function () {
        var game = this.game;
        for (var i = 0; i < game.enemies.length; i++) {
            var enemy = game.enemies[i];
            var enemyMesh = enemy.mesh;
            if (this.items.weapon.intersectsMesh(enemyMesh, true)) {
                enemyMesh.material.emissiveColor = new BABYLON.Color4(1, 0, 0, 1);
                var value = game.guiElements.hpBarEnemy.getValue();
                game.guiElements.hpBarEnemy.updateValue(value - 1);
                if (value - 1 < 0) {
                    game.scene.unregisterAfterRender(enemy.afterRender);
                    enemy.visibilityArea.dispose();
                    enemy.attackArea.dispose();
                    enemyMesh.dispose();
                }
            }
            else {
                enemyMesh.material.emissiveColor = new BABYLON.Color4(0, 0, 0, 0);
            }
        }
    };
    return Player;
})(Character);
//# sourceMappingURL=player.js.map