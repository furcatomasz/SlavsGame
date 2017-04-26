var Enemy = (function () {
    function Enemy(game) {
        var mesh = game.characters['player'].clone();
        var skeleton = game.characters['player'].skeleton.clone();
        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.position = new BABYLON.Vector3(3, 0.1, -5);
        game.shadowGenerator.getShadowMap().renderList.push(mesh);
        this.character = new Character(mesh, name, game);
    }
    return Enemy;
})();
//# sourceMappingURL=enemy.js.map