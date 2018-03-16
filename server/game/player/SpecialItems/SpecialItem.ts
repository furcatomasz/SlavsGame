namespace SpecialItems {
    export class SpecialItemsManager {

        constructor() {
        }

        /**
         * @param {Number} type
         * @param {number} value
         * @returns {any}
         */
        public getSpecialItem(type: Number, value: number) {
            let item = null;
            switch (type) {
                case SpecialItems.Gold.TYPE:
                    item = new SpecialItems.Gold(value);
                    break;

            }
            return item;

        }
    }

    export abstract class SpecialItem {
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

    export class Gold extends SpecialItems.SpecialItem {
        static TYPE = 1;

        constructor(value: string) {
            this.name = 'Gold';
            this.type = SpecialItems.Gold.TYPE;

            super(value);
        }

        public getType() {
            return SpecialItems.Gold.TYPE;
        };

        public addItem(character: Server.Character, ormManager: Server.OrmManager): this {
            let self = this;
            ormManager.structure.player.getAsync(character.id)
                .then(function (character) {
                    character.gold += self.value;

                    return character.saveAsync();
                })
                .then(function () {
                    // saved
                });

            return this;
        }
    }
}