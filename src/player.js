/// <reference path="characters/character.ts"/>
/// <reference path="game.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(game, id, name, registerMoving) {
        var _this = this;
        _this.id = id;
        _this.name = name;
        _this.hp = 100;
        _this.attackSpeed = 100;
        _this.walkSpeed = 100;
        _this.damage = 5;
        _this.blockChance = 50;
        _this.isControllable = registerMoving;
        var mesh = game.characters['player'].clone();
        var skeleton = game.characters['player'].skeleton.clone();
        var material = game.characters['player'].material.clone();
        console.log(game.scene.lights);
        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.material = material;
        mesh.position = new BABYLON.Vector3(3, 0.1, 0);
        mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 80,
            friction: 1,
            restitution: 0.0001
        }, game.scene);
        _this.mesh = mesh;
        _this.game = game;
        _this.createItems();
        _this.mount(_this.items.weapon, 'hand.R');
        _this = _super.call(this, name, game) || this;
        return _this;
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
                    enemy.removeFromWorld();
                }
            }
            else {
                enemyMesh.material.emissiveColor = new BABYLON.Color4(0, 0, 0, 0);
            }
        }
    };
    Player.prototype.removeFromWorld = function () {
        this.game.scene.unregisterAfterRender(this.afterRender);
        this.mesh.dispose();
        this.items.weapon.dispose();
        this.items.weapon.setEnabled(false);
    };
    Player.prototype.registerFunctionAfterRender = function () {
        var self = this;
        this.afterRender = function () {
            self.weaponCollisions();
            if (self.isControllable) {
                self.registerMoving();
                self.game.scene.activeCamera.position = self.mesh.position;
                //self.game.scene.lights[0].position.x = self.mesh.position.x;
                //self.game.scene.lights[0].position.y = self.mesh.position.y+8;
                //self.game.scene.lights[0].position.z = self.mesh.position.z-2;
            }
        };
    };
    return Player;
}(Character));
//# sourceMappingURL=player.js.map