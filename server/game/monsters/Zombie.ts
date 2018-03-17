namespace Monsters {
    export class Zombie extends AbstractMonster {

        constructor(id, position, itemsToDrop, specialItemsToDrop:Array) {
            super(id, position, itemsToDrop, specialItemsToDrop);

            this.name = 'Zombie';
            this.type = 'zombie';
            this.meshName = 'Zombie';
            this.lvl = 3;
            this.experience = 25;
            this.attackAreaSize = 2;
            this.visibilityAreaSize = 15;
            this.statistics = new Attributes.CharacterStatistics(300, 300, 100, 3, 10, 40, 0, 100);
        }

    }
}