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
        var mesh = game.characters['worm'].clone();
        var skeleton = game.characters['worm'].skeleton.clone();
        var material = game.characters['worm'].material.clone();
        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.material = material;
        mesh.scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
        mesh.position = position;
        mesh.rotation = rotationQuaternion;
        mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 20,
            friction: 1,
            restitution: 0.2
        }, game.scene);
        _this.hp = 100;
        _this.attackSpeed = 100;
        _this.walkSpeed = 200;
        _this.damage = 5;
        _this.blockChance = 50;
        _this.id = serverKey;
        _this.mesh = mesh;
        _this.visibilityAreaSize = 30;
        _this.attackAreaSize = 6;
        skeleton.beginAnimation('stand', true);
        _this = _super.call(this, name, game) || this;
        return _this;
    }
    return Worm;
}(Monster));
//# sourceMappingURL=worm.js.map