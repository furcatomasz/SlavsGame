/// <reference path="../../game.ts"/>
/// <reference path="monster.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Worm = (function (_super) {
    __extends(Worm, _super);
    function Worm(serverKey, name, game, position, rotationQuaternion) {
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
        this.hp = 100;
        this.attackSpeed = 100;
        this.walkSpeed = 200;
        this.damage = 5;
        this.blockChance = 50;
        this.id = serverKey;
        this.mesh = mesh;
        this.visibilityAreaSize = 30;
        this.attackAreaSize = 6;
        skeleton.beginAnimation('stand', true);
        _super.call(this, name, game);
    }
    return Worm;
})(Monster);
//# sourceMappingURL=worm.js.map