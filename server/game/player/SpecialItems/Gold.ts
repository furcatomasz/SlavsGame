namespace SpecialItems {
    export class Gold extends SpecialItem {
        static TYPE = 1;

        constructor(value: string) {
            this.name = 'Gold';
            super(value);
        }

        public getType() {
            return SpecialItems.Gold.TYPE;
        };

        public addItem(character: Server.Character, ormManager: Server.OrmManager): this {
            let self = this;
            ormManager.getAsync(character.id)
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