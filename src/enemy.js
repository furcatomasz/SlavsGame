var Enemy = (function () {
    function Enemy(game) {
        var mesh = game.characters['player'].clone();
        var skeleton = game.characters['player'].skeleton.clone();
        var material = game.characters['player'].material.clone();
        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.material = material;
        mesh.position = new BABYLON.Vector3(3, 0.1, -5);
        game.shadowGenerator.getShadowMap().renderList.push(mesh);
        this.character = new Character(mesh, name, game);
    }
    return Enemy;
})();
//# sourceMappingURL=enemy.js.map