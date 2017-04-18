var Character = (function () {
    function Character(mesh, name, game) {
        this.mesh = mesh;
        this.name = name;
        this.game = game;
        game.scene.beginAnimation(mesh.skeleton, 45, 80, true);
        this.mount(game.items.sword, 'hand.R');
    }
    Character.prototype.mount = function (mesh, boneName) {
        var boneIndice = -1;
        for (var i = 0; i < this.mesh.skeleton.bones.length; i++) {
            if (this.mesh.skeleton.bones[i].name == boneName) {
                boneIndice = i;
                break;
            }
        }
        var bone = this.mesh.skeleton.bones[boneIndice];
        mesh.attachToBone(bone, this.mesh);
        // mesh.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);
        mesh.position = new BABYLON.Vector3(0, 0, 0);
        mesh.rotation = new BABYLON.Vector3(0, 0, -80);
    };
    ;
    /**
     * ANIMATIONS
     */
    Character.prototype.runAnimationHit = function () {
        var self = this;
        self.animation = this.game.scene.beginAnimation(this.mesh.skeleton, 0, 30, false, 1, function () {
            self.game.scene.beginAnimation(self.mesh.skeleton, 40, 80, true);
            self.animation = null;
        });
    };
    Character.prototype.runAnimationWalk = function () {
        var self = this;
        if (self.game.client.socket) {
            self.game.client.socket.emit('moveTo', {
                p: self.game.characterMesh.position,
                r: self.game.characterMesh.rotationQuaternion
            });
        }
        if (!this.animation) {
            self.animation = this.game.scene.beginAnimation(this.mesh.skeleton, 90, 109, false, 1, function () {
                self.game.scene.beginAnimation(self.mesh.skeleton, 45, 80, true);
                self.animation = false;
            });
        }
    };
    return Character;
}());
//# sourceMappingURL=character.js.map