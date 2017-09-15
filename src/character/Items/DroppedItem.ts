namespace Items {
    export class DroppedItem {

        public static showItem(game: Game, item: Item, enemy: AbstractCharacter) {
            let scene = game.getScene();

            item.mesh.position.x = enemy.mesh.position.x;
            item.mesh.position.z = enemy.mesh.position.z;
            item.mesh.position.y = 0;

            item.mesh.outlineColor = new BABYLON.Color3(0,1,0);
            item.mesh.outlineWidth = 0.1;
            item.mesh.rotation = new BABYLON.Vector3(0,0,0);

            item.mesh.actionManager = new BABYLON.ActionManager(scene);
            item.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
                function () {
                    item.mesh.renderOutline = false;
                }));

            item.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
                function () {
                    item.mesh.renderOutline = true;
                }));

            item.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
                function () {
                    item.mesh.dispose();
                }));

            item.mesh.visibility = 1;
            let particleSystem = new Particles.DroppedItem(game, item.mesh);
            particleSystem.particleSystem.start();


        }
    }
}