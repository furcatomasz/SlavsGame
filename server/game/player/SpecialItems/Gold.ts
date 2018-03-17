namespace SpecialItems {
    export class Gold extends SpecialItems.AbstractSpecialItem {
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