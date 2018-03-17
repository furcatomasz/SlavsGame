namespace SpecialItems {
    export abstract class AbstractSpecialItem {
        static TYPE = 0;

        public name: number;
        public value: string;
        public type:Number;

        constructor(value: string) {
            this.value = value;
        }

        abstract getType(): Number;

        abstract addItem(character: Server.Character, ormManager: Server.OrmManager): this;
    }

}