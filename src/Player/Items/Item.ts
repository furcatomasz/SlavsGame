namespace Items {
    export class Item {
        public type: Number;
        public databaseId: Number;
        public mesh: BABYLON.AbstractMesh;
        public meshName: string;
        public name: string;
        public image: string;
        public statistics: Object;

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
    }
}
