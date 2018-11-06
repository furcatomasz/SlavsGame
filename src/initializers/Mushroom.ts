class Mushroom {

    public mesh: BABYLON.AbstractMesh;
    public hightlightLayer: BABYLON.HighlightLayer;

    /**
     *
     * @param {Game} game
     * @param mushroomData
     * @param mushroomKey
     */
    constructor(game: Game, mushroomData, mushroomKey) {
        let scene = game.getScene();
        let position = mushroomData.position;
        let mushroomMesh = game.factories['nature_grain'].createClone('mushrooms');
        const gameCamera = scene.getCameraByName('gameCamera');

        mushroomMesh.position = new BABYLON.Vector3(position.x, position.y, position.z);
        mushroomMesh.isPickable = true;
        let hl = new BABYLON.HighlightLayer("highlightLayer", scene, { camera: gameCamera});
        hl.addMesh(mushroomMesh, BABYLON.Color3.Green());
        this.hightlightLayer = hl;
        hl.outerGlow = true;
        hl.innerGlow = false;
        hl.blurHorizontalSize = 0.4;
        hl.blurVerticalSize = 0.2;

        this.mesh = mushroomMesh;
        this.mesh.actionManager = new BABYLON.ActionManager(scene);
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                console.log('pick');
                // game.client.socket.emit('openChest', mushroomKey);
            })
        );

    }

}
