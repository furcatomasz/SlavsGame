class Items {

    constructor(assetsManager:BABYLON.AssetsManager, game:Game) {
        var sword = assetsManager.addMeshTask("sword", "", "assets/", "sword.babylon");
        sword.onSuccess = function (task) {
            let mesh = task.loadedMeshes[0];
            mesh.position = new BABYLON.Vector3(0, 0, 15);
            mesh.rotation = new BABYLON.Vector3(-180, 20, 0);
            mesh.scaling = new BABYLON.Vector3(0.4,0.4, 0.4);
            mesh.visibility = false;
            game.items[task.name] = mesh;
        }

    }

}