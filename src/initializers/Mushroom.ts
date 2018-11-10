class Mushroom {

    public mesh: BABYLON.AbstractMesh;

    /**
     *
     * @param {Game} game
     * @param mushroomData
     * @param mushroomKey
     */
    constructor(game: Game, mushroomData, mushroomKey) {
        let scene = game.getScene();
        let tooltip;
        let position = mushroomData.position;
        let mushroomMesh = game.factories['nature_grain'].createClone('mushrooms');
        const gameCamera = scene.getCameraByName('gameCamera');

        mushroomMesh.position = new BABYLON.Vector3(position.x, position.y, position.z);
        mushroomMesh.isPickable = true;

        let particleSystem = new Particles.DroppedItem(game, mushroomMesh);
        particleSystem.particleSystem.start();

        this.mesh = mushroomMesh;
        this.mesh.actionManager = new BABYLON.ActionManager(scene);
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
            function () {
                tooltip = new TooltipMesh(mushroomMesh, mushroomData.specialItem.name);
            }));

        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
            function () {
                tooltip.container.dispose();
            }));
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                game.client.socket.emit('pickRandomItem', mushroomKey);
                tooltip.container.dispose();
            })
        );

    }

}
