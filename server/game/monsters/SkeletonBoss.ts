namespace Monsters {
    export class SkeletonBoss extends AbstractMonster {

        constructor(id, position, itemsToDrop, specialItemsToDrop:Array) {
            super(id, position, itemsToDrop, specialItemsToDrop);

            this.name = 'Skeleton BOSS';
            this.type = 'skeletonBoss';
            this.meshName = 'skeletonBoss';
            this.lvl = 5;
            this.experience = 25;
            this.attackAreaSize = 2;
            this.visibilityAreaSize = 15;
            this.statistics = new Attributes.CharacterStatistics(400, 400, 100, 15, 10, 8, 0, 100);
        }

    }
}