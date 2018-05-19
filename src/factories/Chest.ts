namespace Factories {
    export class Chest {

        public mesh: BABYLON.AbstractMesh;
        public hightlightLayer: BABYLON.HighlightLayer;

        /**
         *
         * @param {Game} game
         * @param chestData
         */
        constructor(game: Game, chestData, chestKey): void {
            let self = this;
            let scene = game.getScene();
            let opened = chestData.opened;
            let name = chestData.name;
            let meshName = chestData.objectName;

            let chestMesh = game.getScene().getMeshByName(meshName);
            if (!chestMesh) {
                throw new TypeError('Wrong chest mesh name.');
            }
            chestMesh.isPickable = true;
            chestMesh.checkCollisions = true;

            if (!opened) {
                let hl = new BABYLON.HighlightLayer("highlightLayer", scene);
                hl.addMesh(chestMesh, BABYLON.Color3.Magenta());

                this.hightlightLayer = hl;
            }

            this.mesh = chestMesh;
            this.mesh.actionManager = new BABYLON.ActionManager(game.getScene());

            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPickTrigger,
                function () {
                    game.client.socket.emit('openChest', chestKey);
                    console.log(chestKey);
                })
            );

        }

    }
}