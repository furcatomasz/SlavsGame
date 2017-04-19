class Items {

    constructor(assetsManager:BABYLON.AssetsManager, game:Game) {
        var sword = assetsManager.addMeshTask("sword", "", "assets/", "sword.babylon");
        sword.onSuccess = function (task) {
            let mesh = task.loadedMeshes[0];
            mesh.position = new BABYLON.Vector3(0, 0, 10);
            mesh.visibility = false;
            game.items[task.name] = mesh;
        }

    }

}