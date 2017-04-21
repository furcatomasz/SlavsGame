var Characters = (function () {
    function Characters(assetsManager, game) {
        var character = assetsManager.addMeshTask("character", "", "assets/animations/character/", "avatar_movements.babylon");
        character.onSuccess = function (task) {
            var mesh = task.loadedMeshes[0];
            mesh.position = new BABYLON.Vector3(0, 1, 5);
            mesh.rotation = new BABYLON.Vector3(0, 0, 0);
            mesh.scaling = new BABYLON.Vector3(2, 2, 2);
            mesh.visibility = false;
            game.characters['player'] = mesh;
        };
    }
    return Characters;
}());
//# sourceMappingURL=characters.js.map