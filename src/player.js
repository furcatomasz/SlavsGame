var Player = (function () {
    function Player(game, id, name) {
        this.id = id;
        this.name = name;
        var mesh;
        if (game.player === undefined) {
            mesh = game.characterMesh;
        }
        else {
            mesh = game.characterMesh.createInstance();
        }
        this.character = new Character(mesh, name, game);
    }
    return Player;
})();
//# sourceMappingURL=player.js.map