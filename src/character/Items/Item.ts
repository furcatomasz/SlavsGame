namespace Items {
    export class Item {
        public itemId:Number;
        public type:Number;
        public databaseId:Number;
        public mesh:BABYLON.AbstractMesh;
        public name:string;
        public image:string;
        public statistics:Attributes.ItemStatistics;

        constructor(game:Game, itemData:Array<any>) {
            this.name = itemData.name;
            this.image = itemData.image;
            this.type = itemData.type;
            this.databaseId = itemData.entity.id;
            this.statistics = itemData.statistics;
            this.mesh = game.factories['character'].createInstance(itemData.meshName);
            this.mesh.visibility = 0;
        }
    }
}