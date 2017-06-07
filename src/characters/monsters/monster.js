/// <reference path="../character.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Monster = (function (_super) {
    __extends(Monster, _super);
    function Monster(name, game) {
        var attackArea = BABYLON.MeshBuilder.CreateBox('enemy_attackArea', { width: this.attackAreaSize, height: 0.1, size: this.attackAreaSize }, game.scene);
        attackArea.parent = this.mesh;
        attackArea.visibility = 0;
        this.attackArea = attackArea;
        var visivilityArea = BABYLON.MeshBuilder.CreateBox('enemy_visivilityArea', { width: this.visibilityAreaSize, height: 0.1, size: this.visibilityAreaSize }, game.scene);
        visivilityArea.parent = this.mesh;
        visivilityArea.visibility = 0;
        this.visibilityArea = visivilityArea;
        game.enemies[this.id] = this;
        _super.call(this, name, game);
    }
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
        this.game.scene.unregisterAfterRender(this.afterRender);
        this.visibilityArea.dispose();
        this.attackArea.dispose();
        this.mesh.dispose();
        this.game.guiElements.hpBarEnemy.updateValue(100);
    };
    Monster.prototype.registerFunctionAfterRender = function () {
        var self = this;
        var walkSpeed = Character.WALK_SPEED * (self.walkSpeed / 100);
        var playerMesh = self.game.player.mesh;
        this.afterRender = function () {
            if (self.game.player) {
                if (self.visibilityArea.intersectsMesh(playerMesh, true)) {
                    self.mesh.lookAt(playerMesh.position);
                    if (self.attackArea.intersectsMesh(playerMesh, true)) {
                        self.runAnimationHit();
                        if (self.mesh.intersectsMesh(self.game.player.mesh, true)) {
                            playerMesh.material.emissiveColor = new BABYLON.Color4(1, 0, 0, 1);
                            var value = self.game.guiElements.hpBar.getValue();
                            self.game.guiElements.hpBar.updateValue(value - 0.2);
                            if (value - 0.1 < 0) {
                                alert('Padłeś');
                                window.location.reload();
                            }
                        }
                        else {
                            playerMesh.material.emissiveColor = new BABYLON.Color4(0, 0, 0, 0);
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