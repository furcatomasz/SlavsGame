namespace Items {
    export abstract class Item {
        static TYPE = 0;
        static ITEM_ID = 0;

        public itemId: Number;
        public equip: boolean;
        public databaseId: Number;
        public meshName:string;
        public name:string;
        public image:string;
        public statistics: Attributes.ItemStatistics;

        constructor(databaseId: Number) {
            this.databaseId = databaseId;
        }

        abstract getType();

    }
}