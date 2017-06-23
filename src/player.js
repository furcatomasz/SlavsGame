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
        var mesh = game.characters['player'].instance('Warrior', true);
        mesh.position = new BABYLON.Vector3(3, 0.1, 0);
        _this.mesh = mesh;
        _this.game = game;
        _this.createItems();
        _this.mount(_this.items.weapon, 'weapon.bone');
        _this.mount(_this.items.shield, 'shield.bone');
        if (_this.isControllable) {
            var playerLight = new BABYLON.SpotLight("playerLight", BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, -1, 0), 1.2, 24, game.getScene());
            playerLight.diffuse = new BABYLON.Color3(1, 1, 1);
            playerLight.specular = new BABYLON.Color3(1, 1, 1);
            game.getScene().lights.push(playerLight);
        }
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
            return;
        }
        if (game.controller.back) {
            mesh.translate(BABYLON.Axis.Z, walkSpeed, BABYLON.Space.LOCAL);
            this.runAnimationWalk(true);
            return;
        }
        if (this.animation && !this.attackAnimation) {
            this.animation.stop();
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
        return this;
    };
    Player.prototype.envCollisions = function () {
        var game = this.game;
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
    };
    Player.prototype.removeFromWorld = function () {
        this.game.getScene().unregisterAfterRender(this.afterRender);
        this.mesh.dispose();
        this.items.weapon.dispose();
        this.items.shield.dispose();
        this.game.sceneManager.guiTexture.removeControl(this.guiCharacterName);
    };
    Player.prototype.registerFunctionAfterRender = function () {
        var self = this;
        this.afterRender = function () {
            self.weaponCollisions().envCollisions();
            if (self.isControllable) {
                self.registerMoving();
                self.game.getScene().activeCamera.position = self.mesh.position;
                self.game.getScene().lights[1].position.x = self.mesh.position.x;
                self.game.getScene().lights[1].position.y = self.mesh.position.y + 44;
                self.game.getScene().lights[1].position.z = self.mesh.position.z;
            }
        };
    };
    return Player;
}(Character));
//# sourceMappingURL=player.js.map