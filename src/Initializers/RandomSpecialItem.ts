class RandomSpecialItem {

    public mesh: BABYLON.AbstractMesh;

    /**
     *
     * @param {Game} game
     * @param randomSpecialItemData
     * @param randomSpecialItemKey
     */
    constructor(game: Game, randomSpecialItemData, randomSpecialItemKey) {
        let scene = game.getScene();
        let tooltip;
        let position = randomSpecialItemData.position;
        let mushroomMesh = game.factories['nature_grain'].createClone(randomSpecialItemData.specialItem.meshName);

        mushroomMesh.position = new BABYLON.Vector3(position.x, position.y, position.z);
        mushroomMesh.isPickable = true;

        let particleSystem = new Particles.DroppedItem(game, mushroomMesh);
        particleSystem.particleSystem.start();

        this.mesh = mushroomMesh;
        this.mesh.actionManager = new BABYLON.ActionManager(scene);
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
            function () {
                tooltip = new TooltipMesh(mushroomMesh, randomSpecialItemData.specialItem.name);
            }));

        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
            function () {
                tooltip.container.dispose();
            }));
        this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
            BABYLON.ActionManager.OnPickTrigger,
            function () {
                game.client.socket.emit('pickRandomItem', randomSpecialItemKey);
                tooltip.container.dispose();
            })
        );

    }

}
