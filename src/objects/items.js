var Items = (function () {
    function Items(assetsManager, game) {
        var sword = assetsManager.addMeshTask("sword", "", "assets/", "sword.babylon");
        sword.onSuccess = function (task) {
            var mesh = task.loadedMeshes[0];
            mesh.position = new BABYLON.Vector3(0, 0, 10);
            mesh.visibility = false;
            game.items[task.name] = mesh;
        };
    }
    return Items;
}());
//# sourceMappingURL=items.js.map