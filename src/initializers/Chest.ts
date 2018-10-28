namespace Initializers {
    export class Chest {

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
            let opened = chestData.opened;
            let position = chestData.position;
            let rotation = chestData.rotation;
            let chestMesh = game.factories['chest'].createInstance('chest', true);
            if (!chestMesh) {
                throw new TypeError('Wrong chest mesh name.');
            }
            chestMesh.position = new BABYLON.Vector3(position.x, position.y, position.z);
            chestMesh.rotation = new BABYLON.Vector3(rotation.x, rotation.y, rotation.z);
            chestMesh.isPickable = true;
            chestMesh.checkCollisions = true;
            chestMesh.material.backFaceCulling = false;

            if (!opened) {
                let hl = new BABYLON.HighlightLayer("highlightLayer", scene);
                hl.addMesh(chestMesh, BABYLON.Color3.Magenta());

                self.hightlightLayer = hl;
            }

            this.mesh = chestMesh;
            this.mesh.actionManager = new BABYLON.ActionManager(game.getScene());
            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
                BABYLON.ActionManager.OnPickTrigger,
                function () {
                    game.client.socket.emit('openChest', chestKey);
                })
            );

        }

    }
}
