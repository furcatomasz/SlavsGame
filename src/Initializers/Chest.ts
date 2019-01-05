class Chest {

    public mesh: BABYLON.AbstractMesh;
    public hightlightLayer: BABYLON.HighlightLayer;

    /**
     *
     * @param {Game} game
     * @param chestData
     * @param chestKey
     */
    constructor(game: Game, chestData, chestKey): void {
        let self = this;
        let scene = game.getScene();
        let tooltip;
        let opened = chestData.opened;
        let position = chestData.position;
        let rotation = chestData.rotation;
        let chestMesh = game.factories['chest'].createClone('chest', true);
        const gameCamera = scene.getCameraByName('gameCamera');

        if (!chestMesh) {
            throw new TypeError('Wrong chest mesh name.');
        }
        chestMesh.position = new BABYLON.Vector3(position.x, position.y, position.z);
        chestMesh.rotation = new BABYLON.Vector3(rotation.x, rotation.y, rotation.z);
        chestMesh.isPickable = true;
        chestMesh.checkCollisions = true;
        chestMesh.material.backFaceCulling = false;

        if (!opened) {
            let hl = new BABYLON.HighlightLayer("highlightLayer", scene, {camera: gameCamera});
            // scene.meshes.forEach((mesh) => {
            //    hl.addExcludedMesh(mesh);
            // });
            // hl.removeExcludedMesh(chestMesh);
            hl.addMesh(chestMesh, BABYLON.Color3.Magenta());

            self.hightlightLayer = hl;
        }

        this.mesh = chestMesh;
        this.mesh.actionManager = new BABYLON.ActionManager(game.getScene());
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
            function () {
                tooltip = new TooltipMesh(chestMesh, chestData.name);
            }));

        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
            function () {
                tooltip.container.dispose();
            }));

        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                game.goToMeshFunction = GoToMeshAndRunAction.execute(game, chestMesh, () => {
                    game.client.socket.emit('openChest', chestKey);
                });
            })
        );

    }

}
