class Characters {
    constructor(assetsManager:BABYLON.AssetsManager, game:Game) {
        let character = assetsManager.addMeshTask("character", "", "assets/characters/", "character001armature.babylon");
        character.onSuccess = function (task) {
            let mesh = task.loadedMeshes[0];
            mesh.position = new BABYLON.Vector3(0, 0, 0);
            mesh.rotation = new BABYLON.Vector3(0, 0, 0);
            mesh.scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
            mesh.visibility = false;
            game.characters['player'] = mesh;
        };

    }

}