namespace Monsters {
    export class Worm extends AbstractMonster {

        constructor(id, position, itemsToDrop, specialItemsToDrop:Array) {
            super(id, position, itemsToDrop, specialItemsToDrop);

            this.name = 'Worm';
            this.type = 'worm';
            this.meshName = 'Worm';
            this.lvl = 1;
            this.experience = 10;
            this.attackAreaSize = 2;
            this.visibilityAreaSize = 10;
            this.statistics = new Attributes.CharacterStatistics(80, 80, 100, 3, 10, 8, 0, 100);
        }

    }
}