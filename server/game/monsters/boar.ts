namespace Monsters {
    export class Boar extends AbstractMonster {

        constructor(id, position, itemsToDrop, specialItemsToDrop: Array) {
            super(id, position, itemsToDrop, specialItemsToDrop, specialItemsToDrop);

            this.name = 'Boar';
            this.type = 'boar';
            this.meshName = 'Boar';
            this.lvl = 2;
            this.experience = 20;
            this.attackAreaSize = 2;
            this.visibilityAreaSize = 18;
            this.statistics = new Attributes.CharacterStatistics(200, 200, 100, 3, 8, 6, 0, 100);
        }

    }
}