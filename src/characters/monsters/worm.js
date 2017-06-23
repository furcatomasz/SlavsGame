/// <reference path="../../game.ts"/>
/// <reference path="monster.ts"/>
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
var Worm = (function (_super) {
    __extends(Worm, _super);
    function Worm(serverKey, name, game, position, rotationQuaternion) {
        var _this = this;
        var mesh = game.characters['worm'].instance('Worm', true);
        mesh.visibility = true;
        mesh.position = position;
        mesh.rotation = rotationQuaternion;
        _this.hp = 100;
        _this.hpMax = 100;
        _this.attackSpeed = 100;
        _this.walkSpeed = 50;
        _this.damage = 0.2;
        _this.blockChance = 50;
        _this.id = serverKey;
        _this.mesh = mesh;
        _this.visibilityAreaSize = 30;
        _this.attackAreaSize = 6;
        _this = _super.call(this, name, game) || this;
        return _this;
    }
    Worm.prototype.runAnimationWalk = function (emit) {
        var self = this;
        var childMesh = this.mesh;
        var loopAnimation = this.isControllable;
        if (childMesh) {
            var skeleton_1 = childMesh.skeleton;
            if (emit) {
                this.emitPosition();
            }
            if (!this.animation) {
                //self.sfxWalk.play(1);
                self.animation = skeleton_1.beginAnimation('Walk', loopAnimation, this.walkSpeed / 50, function () {
                    skeleton_1.beginAnimation(Character.ANIMATION_STAND_WEAPON, true);
                    self.animation = null;
                });
            }
        }
    };
    return Worm;
}(Monster));
//# sourceMappingURL=worm.js.map