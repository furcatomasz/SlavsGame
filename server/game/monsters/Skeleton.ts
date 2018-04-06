namespace Monsters {
    export class Skeleton extends AbstractMonster {

        constructor(id, position, itemsToDrop, specialItemsToDrop:Array) {
            super(id, position, itemsToDrop, specialItemsToDrop);

            this.name = 'Skeleton';
            this.type = 'skeleton';
            this.meshName = 'skeleton';
            this.lvl = 1;
            this.experience = 1;
            this.attackAreaSize = 2;
            this.visibilityAreaSize = 15;
            this.statistics = new Attributes.CharacterStatistics(40, 40, 100, 3, 10, 8, 0, 100);
        }

    }
}