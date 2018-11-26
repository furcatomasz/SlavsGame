namespace Items {
    export class Item {
        public type: Number;
        public databaseId: Number;
        public mesh: BABYLON.AbstractMesh;
        public meshName: string;
        public name: string;
        public image: string;
        public statistics: Object;

        ///Trail Effect
        public trailBox: BABYLON.AbstractMesh;
        public trailMesh: BABYLON.AbstractMesh;

        constructor(game: Game, itemData: any) {
            this.name = itemData.name;
            this.meshName = itemData.meshName;
            this.image = itemData.image;
            this.type = itemData.type;
            this.statistics = itemData.statistics;

            if (itemData.entity) {
                this.databaseId = itemData.entity.id;
            }
        }

        public dispose() {
            if (this.mesh) {
                this.mesh.dispose();
            }
        }

        public createTrailMesh(game: Game) {
            this.trailBox = BABYLON.Mesh.CreateBox('test', 1, game.getScene(), false);
            this.trailBox.visibility = 0;

            this.trailMesh = new TrailMesh("Test", this.trailBox, game.getScene(), 0.2, 40);
            this.trailMesh.visibility = 0;
        }
    }
}
