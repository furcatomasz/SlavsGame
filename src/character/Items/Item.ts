namespace Items {
    export class Item {
        public itemId:Number;
        public type:Number;
        public databaseId:Number;
        public mesh:BABYLON.AbstractMesh;
        public name:string;
        public image:string;
        public statistics:Attributes.ItemStatistics;
        public isAutoLoot: boolean;

        constructor(game:Game, itemData:Array) {
            this.name = itemData.name;
            this.image = itemData.image;
            this.type = itemData.type;
            this.databaseId = itemData.databaseId;
            this.statistics = itemData.statistics;
            this.mesh = game.factories['character'].createInstance(itemData.meshName);
            this.mesh.visibility = 0;
        }
    }
}