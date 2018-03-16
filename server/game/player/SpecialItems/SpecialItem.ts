namespace SpecialItems {
    export abstract class SpecialItem {
        static TYPE = 0;

        public name: number;
        public value: string;

        constructor(value: string) {
            this.value = value;
        }

        abstract getType(): Number;

        abstract addItem(character: Server.Character, ormManager: Server.OrmManager): this;
    }
}