var Worm = (function () {
    function Worm(mesh, name, game) {
        this.hp = 100;
        this.attackSpeed = 100;
        this.walkSpeed = 100;
        this.damage = 5;
        this.blockChance = 50;
        this.mesh = mesh;
        this.name = name;
        this.game = game;
        var skeleton = this.mesh.skeleton;
        skeleton.beginAnimation('stand', true);
        //*atack
        //relax
        //stand
        //walk
    }
    /**
     * ANIMATIONS
     */
    Worm.prototype.runAnimationHit = function () {
        if (!this.animation) {
            var self_1 = this;
            var childMesh = this.mesh;
            if (childMesh) {
                var skeleton = childMesh.skeleton;
                self_1.animation = skeleton.beginAnimation('atack', false, this.attackSpeed / 100, function () {
                    skeleton.beginAnimation('stand', true);
                    self_1.animation = null;
                });
            }
        }
    };
    Worm.prototype.runAnimationWalk = function (emit) {
        var self = this;
        var rotation;
        var childMesh = this.mesh;
        if (childMesh) {
            var skeleton = childMesh.skeleton;
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
                self.animation = skeleton.beginAnimation('walk', false, this.walkSpeed / 100, function () {
                    skeleton.beginAnimation('stand', true);
                    self.animation = null;
                });
            }
        }
    };
    Worm.prototype.isAnimationEnabled = function () {
        return this.animation;
    };
    return Worm;
})();
//# sourceMappingURL=worm.js.map