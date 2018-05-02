namespace Items {
    export class DroppedItem {

        public static showItem(game: Game, item: Item, position: Array<any>, itemDropKey: number) {
            let scene = game.getScene();

            let droppedItemBox = BABYLON.Mesh.CreateBox(item.name+'_Box', 3, scene, false);
            droppedItemBox.checkCollisions = false;
            droppedItemBox.visibility = 0;

            droppedItemBox.position.x = position.x;
            droppedItemBox.position.z = position.z;
            droppedItemBox.position.y = 0;

            item.mesh.outlineColor = new BABYLON.Color3(0,1,0);
            item.mesh.outlineWidth = 0.1;
            item.mesh.rotation = new BABYLON.Vector3(0,0,0);
            item.mesh.visibility = 1;
            item.mesh.parent = droppedItemBox;
            item.mesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 0, 0));
            console.log(item.mesh.getPivotPoint());
            droppedItemBox.actionManager = new BABYLON.ActionManager(scene);
            droppedItemBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
                function () {
                    item.mesh.renderOutline = false;
                }));

            droppedItemBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
                function () {
                    item.mesh.renderOutline = true;
                }));

            droppedItemBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
                function () {
                    game.gui.playerLogsPanel.addText(item.name+'  has been picked up.', 'green');
                    game.client.socket.emit('addDroppedItem', itemDropKey);
                    droppedItemBox.dispose();
                }));

            let particleSystem = new Particles.DroppedItem(game, droppedItemBox);
            particleSystem.particleSystem.start();

            if(game.sceneManager.octree) {
                game.sceneManager.octree.dynamicContent.push(droppedItemBox);
            }
        }
    }
}