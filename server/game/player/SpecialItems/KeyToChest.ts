namespace SpecialItems {
    export class KeyToChest extends SpecialItems.AbstractSpecialItem {
        static TYPE = 2;

        constructor(value: string) {
            this.name = 'Key to chest';
            this.type = SpecialItems.KeyToChest.TYPE;

            super(value);
        }

        public getType() {
            return SpecialItems.KeyToChest.TYPE;
        };

        public addItem(character: Server.Character, ormManager: Server.OrmManager): this {
            let self = this;

            ormManager.structure.playerSpecialItems.createAsync({
                type: this.type,
                value: this.value,
                player: character.id,
            }).then(function (results) {
                console.log('SOCKET - KeyToChest added');
            });

            return this;
        }
    }
}