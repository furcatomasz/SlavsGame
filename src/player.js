var Player = (function () {
    function Player(game, id, name) {
        this.id = id;
        this.name = name;
        var mesh = game.characters['player'].clone();
        var skeleton = game.characters['player'].skeleton.clone();
        console.log(skeleton);
        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.position = new BABYLON.Vector3(6, 1.2, 0);
        game.shadowGenerator.getShadowMap().renderList.push(mesh);
        this.character = new Character(mesh, name, game);
    }
    return Player;
})();
//# sourceMappingURL=player.js.map