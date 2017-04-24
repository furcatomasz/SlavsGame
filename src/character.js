var Character = (function () {
    function Character(mesh, name, game) {
        this.mesh = mesh;
        this.name = name;
        this.game = game;
        this.items = [];
        this.createItems();
        this.runAnimationStand();
        this.mount(this.items.weapon, 'hand.R');
    }
    Character.prototype.runAnimationStand = function () {
        if (!this.animation) {
            this.game.scene.beginAnimation(this.mesh.skeleton, 215, 280, true);
        }
    };
    ;
    Character.prototype.createItems = function () {
        var sword = this.game.items.sword.clone();
        sword.visibility = true;
        this.game.shadowGenerator.getShadowMap().renderList.push(sword);
        this.items.weapon = sword;
    };
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
    };
    ;
    /**
     * ANIMATIONS
     */
    Character.prototype.runAnimationHit = function () {
        var self = this;
        if (!this.animation) {
            self.animation = this.game.scene.beginAnimation(this.mesh.skeleton, 0, 15, false, 0.8, function () {
                self.animation = null;
                self.runAnimationStand();
            });
        }
    };
    Character.prototype.runAnimationWalk = function (emit) {
        var self = this;
        var rotation;
        if (emit && self.game.client.socket) {
            if (self.mesh.rotationQuaternion) {
                rotation = self.mesh.rotationQuaternion;
            }
            else {
                rotation = new BABYLON.Quaternion(0, 0, 0, 0);
            }
            self.game.client.socket.emit('moveTo', {
                p: self.mesh.position,
                r: rotation
            });
        }
        if (!this.animation) {
            self.animation = this.game.scene.beginAnimation(this.mesh.skeleton, 372, 390, false, 0.7, function () {
                self.animation = null;
                self.runAnimationStand();
            });
        }
    };
    Character.prototype.stopAnimation = function () {
        if (this.isAnimationEnabled()) {
            this.animation.stop();
        }
    };
    Character.prototype.isAnimationEnabled = function () {
        return this.animation;
    };
    return Character;
})();
//# sourceMappingURL=character.js.map