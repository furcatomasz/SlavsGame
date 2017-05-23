var Enemy = (function () {
    function Enemy(game) {
        var mesh = game.characters['player'].clone();
        var skeleton = game.characters['player'].skeleton.clone();
        var material = game.characters['player'].material.clone();
        var mainMesh = BABYLON.MeshBuilder.CreateBox('enemy', { width: 0.5, size: 0.7 }, game.scene);
        mesh.visibility = true;
        mesh.skeleton = skeleton;
        mesh.material = material;
        mesh.parent = mainMesh;
        mesh.position = new BABYLON.Vector3(0, -0.4, -0.3);
        mainMesh.position = new BABYLON.Vector3(3, 5.1, -5);
        mainMesh.visibility = false;
        mainMesh.physicsImpostor = new BABYLON.PhysicsImpostor(mainMesh, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, friction: 0.01, restitution: 0.2 }, game.scene);
        game.sceneManager.shadowGenerator.getShadowMap().renderList.push(mesh);
        this.character = new Character(mainMesh, name, game);
    }
    return Enemy;
}());
//# sourceMappingURL=enemy.js.map