namespace Items {
    export class DroppedItem {

        public static showItem(game: Game, item: Item, position: Array<any>, itemDropKey: number) {
            let scene = game.getScene();

            let droppedItemBox = BABYLON.Mesh.CreateBox(item.name + '_Box', 3, scene, false);
            droppedItemBox.checkCollisions = false;
            droppedItemBox.visibility = 0;

            droppedItemBox.position.x = position.x;
            droppedItemBox.position.z = position.z;
            droppedItemBox.position.y = 0;

            item.mesh.rotation = new BABYLON.Vector3(0, 0, 0);
            item.mesh.visibility = 1;
            item.mesh.isVisible = true;
            item.mesh.parent = droppedItemBox;

            let tooltip = null;
            droppedItemBox.actionManager = new BABYLON.ActionManager(scene);
            droppedItemBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
                function () {
                    tooltip = new TooltipMesh(item.mesh, item.name);
                }));

            droppedItemBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
                function () {
                    tooltip.container.dispose();
                }));

            droppedItemBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
                function () {
                    game.gui.playerLogsPanel.addText(item.name + '  has been picked up.', 'green');
                    game.client.socket.emit('addDroppedItem', itemDropKey);
                    droppedItemBox.dispose();
                    tooltip.container.dispose();
                }));

            let particleSystem = new Particles.DroppedItem(game, droppedItemBox);
            particleSystem.particleSystem.start();

            if (game.sceneManager.octree) {
                game.sceneManager.octree.dynamicContent.push(droppedItemBox);
            }
        }
    }
}
