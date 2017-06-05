var Enemy = (function () {
    function Enemy(game) {
        var self = this;
        this.afterRender = function () {
            if (game.player) {
                if (self.visibilityArea.intersectsMesh(game.player.character.mesh, false)) {
                    self.character.mesh.lookAt(game.player.character.mesh.position);
                    var playerMesh = game.player.character.mesh.getChildMeshes()[0];
                    if (self.attackArea.intersectsMesh(playerMesh, false)) {
                        self.character.runAnimationHit();
                    }
                    else {
                        var velocity = BABYLON.Vector3.TransformNormal(new BABYLON.Vector3(0, 0, -0.041), self.character.mesh.computeWorldMatrix());
                        self.character.mesh.moveWithCollisions(velocity);
                        self.character.runAnimationWalk();
                    }
                }
            }
        };
        game.scene.registerAfterRender(this.afterRender);
    }
    return Enemy;
}());
//# sourceMappingURL=enemy.js.map