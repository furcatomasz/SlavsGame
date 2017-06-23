/// <reference path="../character.ts"/>
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
var Monster = (function (_super) {
    __extends(Monster, _super);
    function Monster(name, game) {
        var _this = this;
        var attackArea = BABYLON.MeshBuilder.CreateBox('enemy_attackArea', { width: _this.attackAreaSize, height: 0.1, size: _this.attackAreaSize }, game.getScene());
        attackArea.parent = _this.mesh;
        attackArea.visibility = 0;
        _this.attackArea = attackArea;
        var visivilityArea = BABYLON.MeshBuilder.CreateBox('enemy_visivilityArea', { width: _this.visibilityAreaSize, height: 0.1, size: _this.visibilityAreaSize }, game.getScene());
        visivilityArea.parent = _this.mesh;
        visivilityArea.visibility = 0;
        _this.visibilityArea = visivilityArea;
        game.enemies[_this.id] = _this;
        _this.mesh.skeleton.beginAnimation(Character.ANIMATION_STAND, true);
        _this = _super.call(this, name, game) || this;
        return _this;
    }
    Monster.prototype.createGUI = function () {
        if (this.guiPanel) {
            this.game.sceneManager.guiTexture.removeControl(this.guiPanel);
        }
        var monsterPanel = new BABYLON.GUI.StackPanel();
        monsterPanel.width = "25%";
        monsterPanel.top = 10;
        monsterPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        this.guiPanel = monsterPanel;
        this.game.sceneManager.guiTexture.addControl(monsterPanel);
        var hpSlider = new BABYLON.GUI.Slider();
        hpSlider.minimum = 0;
        hpSlider.maximum = this.hpMax;
        hpSlider.value = this.hp;
        hpSlider.width = "100%";
        hpSlider.height = "10px";
        hpSlider.thumbWidth = 0;
        hpSlider.barOffset = 0;
        hpSlider.background = 'black';
        hpSlider.color = "red";
        hpSlider.borderColor = 'black';
        this.guiHp = hpSlider;
        monsterPanel.addControl(hpSlider);
    };
    Monster.prototype.emitPosition = function () {
        if (this.game.client.socket) {
            this.game.client.socket.emit('updateEnemy', {
                enemyKey: this.id,
                position: this.mesh.position,
                rotation: this.mesh.rotationQuaternion
            });
        }
    };
    Monster.prototype.removeFromWorld = function () {
        this.game.getScene().unregisterAfterRender(this.afterRender);
        var self = this;
        self.visibilityArea.dispose();
        self.attackArea.dispose();
        self.mesh.dispose();
    };
    Monster.prototype.registerFunctionAfterRender = function () {
        var self = this;
        var walkSpeed = Character.WALK_SPEED * (self.walkSpeed / 100);
        var playerMesh = self.game.player.mesh;
        this.afterRender = function () {
            if (self.game.player) {
                if (self.visibilityArea.intersectsMesh(playerMesh, false)) {
                    self.mesh.lookAt(playerMesh.position);
                    if (self.attackArea.intersectsMesh(playerMesh, false)) {
                        self.runAnimationHit();
                        if (self.mesh.intersectsMesh(self.game.player.mesh, false)) {
                            playerMesh.material.emissiveColor = new BABYLON.Color4(1, 0, 0, 1);
                            var value = self.game.player.guiHp.value;
                            self.game.player.guiHp.value = (value - self.damage);
                            if (self.game.player.guiHp.value - self.damage < 0) {
                                alert('Padłeś');
                                window.location.reload();
                            }
                        }
                        else {
                            playerMesh.material.emissiveColor = new BABYLON.Color4(0.89, 0.89, 0.89, 0);
                        }
                    }
                    else {
                        self.mesh.translate(BABYLON.Axis.Z, -walkSpeed, BABYLON.Space.LOCAL);
                        self.runAnimationWalk(true);
                    }
                }
            }
        };
    };
    return Monster;
}(Character));
//# sourceMappingURL=monster.js.map