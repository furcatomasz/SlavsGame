var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(game, id, name) {
        this.id = id;
        this.name = name;
        var self = this;
        var mesh = game.characters['player'].clone();
        var skeleton = game.characters['player'].skeleton.clone();
        var material = game.characters['player'].material.clone();
        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.material = material;
        mesh.position = new BABYLON.Vector3(3, 0.4, 0);
        mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {
            mass: 1,
            friction: 0.01,
            restitution: 0.0001
        }, game.scene);
        //
        // game.scene.registerAfterRender(function () {
        //     self.weaponCollisions(game, self.character);
        //     self.registerMoving(game, self.character);
        // });
    }
    return Player;
}(Character));
//# sourceMappingURL=player.js.map