class Characters {
    constructor(assetsManager:BABYLON.AssetsManager, game:Game) {
        let character = assetsManager.addMeshTask("character", "", "assets/animations/character/", "avatar_movements.babylon");
        character.onSuccess = function (task) {
            let mesh = task.loadedMeshes[0];
            mesh.position = new BABYLON.Vector3(0, 1, 5);
            mesh.rotation = new BABYLON.Vector3(0, 0, 0);
            mesh.scaling = new BABYLON.Vector3(2.5, 2.5, 2.5);
            mesh.visibility = false;
            mesh.receiveShadows = true;

            game.characters['player'] = mesh;
        };

    }

}