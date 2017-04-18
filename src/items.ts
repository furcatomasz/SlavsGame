class Items {

    constructor(assetsManager:BABYLON.AssetsManager, game:Game) {
        var sword = assetsManager.addMeshTask("sword", "", "assets/", "sword.babylon");
        sword.onSuccess = function (task) {
            game.items[task.name] = task.loadedMeshes[0];
        }

    }

}