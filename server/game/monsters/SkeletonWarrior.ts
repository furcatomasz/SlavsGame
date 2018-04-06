namespace Monsters {
    export class SkeletonWarrior extends AbstractMonster {

        constructor(id, position, itemsToDrop, specialItemsToDrop:Array) {
            super(id, position, itemsToDrop, specialItemsToDrop);

            this.name = 'Skeleton Warrior';
            this.type = 'skeletonWarrior';
            this.meshName = 'skeletonWarrior';
            this.lvl = 2;
            this.experience = 2;
            this.attackAreaSize = 2;
            this.visibilityAreaSize = 15;
            this.statistics = new Attributes.CharacterStatistics(100, 100, 100, 8, 10, 6, 0, 100);
        }

    }
}