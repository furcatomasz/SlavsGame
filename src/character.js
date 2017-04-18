var Character = (function () {
    function Character(mesh, name, game) {
        this.mesh = mesh;
        this.name = name;
        game.scene.beginAnimation(mesh.skeleton, 45, 80, true);
    }
    return Character;
}());
//# sourceMappingURL=character.js.map